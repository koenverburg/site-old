pkg:
	yarn dist
	npx pkg . --targets node14-alpine-x64 --output bin/site

pkg-win:
	npx pkg . --targets node14-win-x64 --output bin/site-win

run-win:
	npx cross-env NODE_ENV=production bin/site-win.exe

bake:
	docker build -t site-bin .

compose:
	docker-compose up -d