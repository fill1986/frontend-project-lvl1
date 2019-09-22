install: 
	npm install

install-deps:
	npm install

start: npx babel-node 'src/bin/brain-games.js'

run:
	npx babel src --out-dir dist

lint:
	npx eslint 'src/bin/brain-games.js'
	npx eslint 'src/bin/brain-even.js'
build:
	rm -rf dist
	npmrun build
test:
	npm test

publish:
	npm publish

local-publish:
	npm publish --dry-run
	sudo npm link
