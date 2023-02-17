require 'gitlab'
require 'json'
require 'parallel'

module DevManager
  class GitlabService < SingletonService
    GITLAB_DEV_IDS = JSON.parse(ENV['GITLAB_DEV_IDS'] || "[]")

    def initialize
      super

      Gitlab.configure do |config|
        config.endpoint       = ENV['GITLAB_URL']
        config.private_token  = ENV['GITLAB_TOKEN']
      end
    end

    def fetch_user(username)
      search_result = Gitlab.user_search(username)

      raise "User #{username} not found!" if search_result.empty?

      search_result[0]
    end

    def fetch_users(usernames)
      usernames.map do |username|
        search_result = Gitlab.user_search(username)

        raise "User #{username} not found!" if search_result.empty?

        search_result[0]["id"]
      end.compact
    end

    def find_project(project_name)
      namespace, name = project_name.split('/')
      Gitlab.search_projects(name, { order_by: 'last_activity_at' }).find do |project|
        project["namespace"]["name"] == namespace
      end["id"]
    end

    def fetch_sample_merge_request
      Gitlab.user_merge_requests(state: :opened, scope: :all, author_id: 787).sample
    end

    def fetch_merge_requests
      return [] if ENV['GITLAB_TOKEN'].blank?

      Parallel.map(GITLAB_DEV_IDS, in_threads: 5) do |author_id|
        Gitlab.user_merge_requests(state: :opened, scope: :all, author_id: author_id)
      end.flatten
    end

    def fetch_dev_merge_requests(dev_index)
      return [] if ENV['GITLAB_TOKEN'].blank?

      Gitlab.user_merge_requests(
        created_after: start_of_last_30_days,
        author_id: GITLAB_DEV_IDS[dev_index],
        scope: :all,
      )
    end

    def fetch_dev_comments(dev_index, merge_requests = nil)
      merge_requests ||= fetch_merge_requests

      merge_requests.flat_map do |mr|
        comments = Gitlab.merge_request_comments(ENV['GITLAB_PROJECT_ID'], mr.iid)

        comments.flat_map do |comment|
          comment if comment.author['id'] == GITLAB_DEV_IDS[dev_index]
        end
      end.compact
    end
  end
end
