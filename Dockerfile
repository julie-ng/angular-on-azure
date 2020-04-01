FROM node:12-alpine
LABEL maintainer="Julie Ng <me@julie.io>"

WORKDIR /workspace

# cache dependencies as layer
COPY ["package.json", "package-lock.json", "./"]
RUN npm install --production

COPY express.js .

COPY dist/ /workspace/dist/

EXPOSE ${PORT:-80}

CMD ["npm", "run", "server"]