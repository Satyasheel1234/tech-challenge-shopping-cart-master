FROM node:alpine@sha256:80844b6643f239c87fceae51e6540eeb054fc7114d979703770ec75250dcd03b
WORKDIR '/app'
COPY package.json .
RUN  npm install
COPY . .
EXPOSE 8006
CMD ["npm","start"]