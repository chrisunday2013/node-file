const http = require("http");
const fs = require("fs");
const axios = require('axios');

const findResult = "result";
if (!fs.existsSync(findResult)) {
  fs.mkdirSync(findResult)
  console.log(`${findResult} directory created`)
}

const jsonData = axios.get(`http://jsonplaceholder.typicode.com/posts`)
.then(response => response.json())
.then(jsonData => {
  outcomeData = JSON.stringify(jsonData,  null, 2);
  fs.writeFile("./result/post.txt", outcomeData, (err) => {
    if(err) throw err;
  })
})

http.createServer((req, res) => {
  fs.readFile(fileDirectory, "utf-8", (err, data) => {
    res.writeHead(200, {"Content-Type": "application/json"});
    res.end(data);
  })
    }).listen(5500);
