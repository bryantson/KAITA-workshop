# 베이스 이미지. 이런 경우는 DockerHub 에서 불러옵니다
FROM node:latest

# 컨테이너에서 파일을 저장하는 경로
WORKDIR /app

COPY ["package.json","package-lock.json","./"]

RUN npm install

COPY . .

CMD ["npm","start"]


