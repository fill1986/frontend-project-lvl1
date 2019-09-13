install:
	npm install

start: npx babel-node 'src/bin/brain-games.js'

run:
	npx babel src --out-dir dist

lint:
	npx eslint 'src/bin/brain-games.js'


