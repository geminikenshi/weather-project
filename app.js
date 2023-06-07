import express from "express";
import https from "https";

const app = express();
const port = 3000;

const url =
  "https://api.openweathermap.org/data/2.5/weather?q=Taipei&appid=74837014de69dcf6842d8ae5780f4a95";

app.get("/", (req, res) => {
  https.get(url, (res) => {
    console.log(res);
  });
  res.send("Server is working.");
});

app.listen(port, function () {
  console.log("Server is listening on port %d", port);
});
