FROM nginx:alpine

COPY build /usr/share/nginx/html/public/

EXPOSE 80
