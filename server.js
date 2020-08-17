var express = require('express')
var app = express()

const port = 3000

app.get('/', function(req, res) {
  res.send('hi there')
})

app.listen(port, function() {
  console.log(`앱이 ${port}에서 실행중입니다!!!..................`)
})