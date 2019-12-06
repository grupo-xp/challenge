const express = require("express");
const path = require("path");

const build_path = path.resolve(__dirname, "dist");
const app = express();

const PORT =  3000;

app.use(express.static(build_path));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(build_path, "index.html"));
});

app.listen(PORT);

console.info(`Server Running on http://localhost:${PORT}/`);
