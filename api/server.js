const express = require("express");
const app = express();
const PORT = 3000;

app.get("/api/hello", (req, res) => {
  res.json({ message: "Hola desde la API Node.js!" });
});

app.listen(PORT, () => {
  console.log("API escuchando en puerto " + PORT);
});
