FROM nginx
LABEL maintainer=tfg2021.escinf.una@gmail.com

EXPOSE 3000

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY /dist/build /usr/share/nginx/html
