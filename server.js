var mongoose = require('mongoose')
var express = require('express')

mongoose.connect('mongodb://root:1234@localhost:27017/?authSource=admin&readPreference=primary&appname=MongoDB%20Compass&ssl=false', {
  useNewUrlParser: true
})

const db = mongoose.connection
db.once('open', function() {
  console.log('DB 연결성공')
})
db.on('error', function(err) {
  console.log(`에러발생: ${err}`)
})

var Book = require('./models/book')
const book = require('./models/book')

var app = express()

const port = 3000

app.get('/', function(req, res) {
  res.send('hi there')
})

app.get('/newbook', function(req, res){
  var new_book = new Book()
  new_book.title = '책1'
  new_book.desc = '책1 입니다.'
  new_book.save(function(err) {
    if(err) {
      res.send('실패')
      return
    }
  })
  res.send('성공')
})

app.get('/getbook1', function(req, res) {
  Book.find({title: '책1'}, function(err, books) {
    if(err) {
      res.send('에러!')
    } else if (books.length === 0) {
      res.send('책이 없습니다.')
    } else {
      res.send(books)
    }
  })
})

app.listen(port, function() {
  console.log(`앱이 ${port}에서 실행중입니다!!!..................`)
})