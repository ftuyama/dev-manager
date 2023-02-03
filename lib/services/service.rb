module DevManager
  class SingletonService
    include TimeHelper

    def self.instance
      @instance ||= new
    end

    private_class_method :new
  end
end
