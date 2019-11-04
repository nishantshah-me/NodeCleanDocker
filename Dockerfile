FROM node:9-slim
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
CMD ["npm","start"]
EXPOSE 9000


# ENV MONGO_URL mongodb://mongo:27017/demo
# ENV MONGO_HOST localhost
# ENV MONGO_USER ""
# ENV MONGO_PASS ""
# ENV MONGO_DB demo