install:
	@command -v ruby >/dev/null 2>&1 || { echo >&2 "require ruby $$(cat .ruby-version) but it's not installed. Aborting."; exit 1; }
	@bundle -v >/dev/null 2>&1 || gem install bundler
	bundle check || bundle install

lint: bundler
	bundle exec rubocop

run: bundler
	bundle exec ruby main.rb

web: yarner
	cd web; yarn serve

test: bundler
	bundle exec rake test

# Private - ensure gems are up-to-date
bundler:
	@bundle check>/dev/null || bundle install

# Private - ensure web dependencies are up-to-date
yarner:
	@yarner yarn

.PHONY: install lint run bundler yarner front
