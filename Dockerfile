FROM node:lts-alpine3.15 as build-stage
WORKDIR /app
COPY package.json .
COPY package-lock.json .
RUN npm install
COPY . .
RUN npm run build

FROM nginx:1.21.6-alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=build-stage /app/build .
COPY --from=build-stage /app/default.conf /etc/nginx/conf.d/
EXPOSE 813
ENTRYPOINT ["nginx", "-g", "daemon off;"]
