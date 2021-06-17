const express = require("express");
const path = require("path");

const port = process.env.PORT || 4260;
const app = express();

const destinationDir = path.join(__dirname, "../dist");

// hosting fron dist folder
app.use(express.static(destinationDir));
// app.use("/static", express.static("public"));
console.log(`express hosting from, ${destinationDir}`);

//serving html.index
app.get("*", (req, res) => {
  res.sendFile(path.join(destinationDir, "index.html"));
});
console.log("serving index.html");

// initialize app and listen to port
app.listen(port, () => console.log(`server is running from port ${port}`));
