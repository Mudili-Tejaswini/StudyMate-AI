const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 6700;

// Serve all static files from "frontend"
app.use(express.static(path.join(__dirname, "frontend")));

// Root route → index.html inside "frontend/pages"
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "pages", "index.html"));
});

app.listen(port, function(){
    console.log("App running on http://localhost:" + port);
});
