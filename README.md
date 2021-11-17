## Install, build and run
- `cp .env.dist .env`
- установить [mutagen](https://mutagen.io/documentation/introduction/installation), для osx `brew install mutagen-io/mutagen/mutagen-beta` 
- опционально, полезные алиасы в ~/.bash_profile
```
alias dc="docker-compose"
alias dc-dev='docker-compose  -f `pwd`/docker-compose.dev.yml '
alias dc-prod='docker-compose -f `pwd`/docker-compose.prod.yml '
alias dc-exterminatus='docker stop $(docker ps -a -q) > /dev/null 2>&1; docker rm $(docker ps -a -q) > /dev/null 2>&1; docker rmi $(docker images -f "dangling=true" -q) > /dev/null 2>&1; echo 🔥'
```
- установить [docker](https://hub.docker.com/editions/community/docker-ce-desktop-mac)
- `make build`
- `make start`
- `make sync`
- фронт [localhost:3000](http://localhost:3000/)
- `make stop`

## Полезные команды
- `dc-dev exec nodejs fish` — зайти в запущенный контейнер с нодой, например добавить новую зависимость
- `dc-dev exec nodejs yarn lint` — линтер
- `dc-dev logs -f` — посмотреть stdout логи со всех контейнеров
