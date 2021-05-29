pkg:
	npx pkg . --targets node14-alpine-x64 --output bin/site

pkg-win:
	npx pkg . --targets node14-win-x64 --output bin/site-win

run-win:
	npx cross-env NODE_ENV=production bin/site-win

build:
	docker build -t site-poc .

run:
	docker run -d -p 8080:3000 --name site123 site-poc

preview:
	docker buildx bake --file ./docker-build.hcl --push site-preview-okteto

local-ci:
	yarn filecheck && \
		yarn depcheck && \
		yarn test:ci && \
		yarn lint:ci
