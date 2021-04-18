const https = require("https");
const fs = require("fs")

let url = "https://www.reddit.com/r/popular.json";

https.get(url, (res) => {
  let body = "";

  res.on("data", (chunk) => {
    body += chunk;
  })

  res.on(end, ()=> {
    try {
      let json = JSON.parse(body)

       fs.writeFile("result"/"json.txt", body, (err) => {
         if (err) throw err;
         console.log("data witten to json.txt")
       })
    }catch (error) {
      conole.error(error.message)
    }
  })
}).on("error", (error) => {
  console.error(error.message);
})