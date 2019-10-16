install: 
	npm install

install-deps:
	npm install

start: npx babel-node 'src/bin/brain-games.js'

run:
	npx babel src --out-dir dist

lint:
	npx eslint 'src/bin/brain-calc.js'
	npx eslint 'src/bin/brain-even.js'
        npx eslint 'src/bin/brain-nod.js'
        npx eslint 'src/bin/brain-prime.js'
        npx eslint 'src/bin/brain-progres.js'
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
