install:
	@command -v ruby >/dev/null 2>&1 || { echo >&2 "require ruby $$(cat .ruby-version) but it's not installed. Aborting."; exit 1; }
	@bundle -v >/dev/null 2>&1 || gem install bundler
	bundle check || bundle install

build:
	rm -rf docs/*
	cd web; yarn build
	mv web/dist/* docs

lint: bundler
	bundle exec rubocop

run: bundler
	bundle exec ruby main.rb

setup: bundler
	bundle exec ruby main.rb setup

web:
	cd web; yarn serve

test: bundler
	bundle exec rake test

# Private - ensure gems are up-to-date
bundler:
	@bundle check>/dev/null || bundle install

.PHONY: install lint run bundler web build setup
