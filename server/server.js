const express = require("express");
const path = require("path");

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, "../public")));

// Serve HTML pages
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

app.get("/calculator", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/calculator.html"));
});

app.get("/tradeads", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/tradeads.html"));
});

app.get("/changelog", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/changelog.html"));
});

app.get("/credits", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/credits.html"));
});

// Remove the catch-all "*" route - it's causing the error

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`FSS running on http://localhost:${PORT}`);
});