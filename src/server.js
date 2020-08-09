//server
const express = require('express');
const server = express();

const {pageLanding, pageStudy, pageGiveClasses} = require('./pages');
//config nunjucks (template engine)
const nunjucks = require('nunjucks');
nunjucks.configure('src/views', {
    express: server,
    noCache: true
});

//config static files
server
//receive data from req body
.use(express.urlencoded({extended: true}))
.use(express.static('public'))
//app routes
    .get("/", pageLanding)
    .get("/study", pageStudy)
    .get("/give-classes", pageGiveClasses)
    .listen(5500);