// adding dependencies
const fs = require("fs");
const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(express.json());

app.get("/", (req, res) => {
    res.sendFile(path.join(_dirname, "/public/index.html"));
});

app.get("/", (req, res) => {
    res.sendFile(path.join(_dirname, "/public/notes.html"));
});

app.get("/notes", (req, res) => {
    res.readFile(path.join(_dirname, "/db/db.json"), "utf8", (err, data) => {
        if (err) throw err;
        res.json(JSON.parse(data));
    });
});