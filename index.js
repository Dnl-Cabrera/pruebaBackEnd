const express = require("express");
const bodyParse = require("body-parser");

const app = express();
const PORT = process.env.PORT || 3977;

app.use(
  bodyParse.urlencoded({
    extends: true,
  }),
);

app.use(bodyParse.json());
app.get("/", (req, res) => {
  res.status(200).send({
    msg: "Hola mundo",
  });
});
app.post("/welcome", (req, res) => {
  const { username } = req.body;
  res.status(200).send({
    msg: `Hola, ${username}`,
  });
});
app.listen(PORT, () => {
  console.log(`Tu puerto esta listo ${PORT}`);
});
