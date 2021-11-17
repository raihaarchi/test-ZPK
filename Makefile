include .env
export

build:
	docker-compose -f docker-compose.dev.yml build \
		--build-arg nodejsImageTag=$$DOCKER_BUILD_TAG --build-arg=NEXT_PUBLIC_SVETA_API_URL=$$NEXT_PUBLIC_SVETA_API_URL

all:
	echo "Use same command"

start:
	make stop
	mutagen compose -f docker-compose.dev.yml up --detach --force-recreate

stop:
	mutagen compose -f docker-compose.dev.yml down
	mutagen terminate -a || true
	mutagen daemon stop || true
	rm -rf build/*

sync:
	rm -rf node_modules/*
	docker cp fs-nodejs-dev:/node/app/node_modules ./
	docker cp fs-nodejs-dev:/node/app/yarn.lock    ./yarn.lock
	docker cp fs-nodejs-dev:/node/app/package.json ./package.json


