const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
 console.log(Date.now() + " Just got pinged!");
 response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
 http.get(`http://frostbot.glitch.me/`);
}, 280000);