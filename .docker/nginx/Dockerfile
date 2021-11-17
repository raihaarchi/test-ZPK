ARG nodejsImageTag
FROM fs-nodejs:$nodejsImageTag AS baseNodejsImage

WORKDIR /var/www/html/web/

FROM nginx:stable-alpine
RUN apk add --no-cache bash fish &&\
    ln -sf /dev/stdout /var/log/nginx/access.log &&\
    ln -sf /dev/stderr /var/log/nginx/error.log &&\
    rm -rf /etc/nginx/conf.d/default.conf

RUN cp /usr/share/zoneinfo/Europe/Moscow /etc/localtime &&\
    echo "Europe/Moscow" > /etc/timezone

ADD /.docker/nginx/nginx.conf  /etc/nginx/
ADD /.docker/nginx/common.conf /etc/nginx/conf.d/
ADD /.docker/nginx/server.conf /etc/nginx/conf.d/

COPY --chown=nginx --from=baseNodejsImage /node/app/.build /var/www/html/web/
COPY --chown=nginx --from=baseNodejsImage /node/app/public /var/www/html/web/

CMD nginx
