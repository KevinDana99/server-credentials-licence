import express from 'express'
import cors from 'cors';
import path from 'path';
const app = express();

app.use(cors());

app.get("/auth", (req, res) => {
  const filePath = path.join(__dirname, "/auth/license.js");
  res.sendFile(filePath);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor Express escuchando en el puerto ${PORT}`);
});
