// Express 라이브러를 씁니다
const express = require("express")

// express 프레임워크를 사용해서 앱을 정의 합니다:
const app = express()

// Public 폴더 안에 저희가 필요한 웹사이트 파일이 있다고 말합니다
app.use(express.static("public"))

// REST API
app.get("/", (req, res) => {
    res.send("Hello, KAITA")
})

// 서버를 만듭니다
const server = require("http").createServer({}, app)

// 포트 3000 에 웹페이지를 서빙 합니다
server.listen(3000, function() {
    console.log("HTTP listening on port 3000")
})