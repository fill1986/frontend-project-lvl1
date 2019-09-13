install: install-deps

install-deps:
	npm install

start: npx babel-node 'src/bin/brain-games.js'

run:
	npx babel src --out-dir dist

lint:
	npx eslint 'src/bin/brain-games.js'
build:
	rm -rf dist
	npmrun build
test:
	npm test

publish:
	npm publish


