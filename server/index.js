const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();

app.use(cors());

app.get("/auth", (req, res) => {
  const filePath = path.join(__dirname, "/auth/license.js");
  console.log(filePath)
  res.sendFile(filePath);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor Express escuchando en el puerto ${PORT}`);
});
