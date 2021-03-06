install:
	npm install

install-deps:
	npm install

start: npx babel-node 'src/'

run:
	npx babel src --out-dir dist

lint:
	npx eslint .
build:
	rm -rf dist
	npm run build
test:
	npm test

publish:
	npm publish

local-publish:
	npm publish --dry-run
	sudo npm link
