// adding dependencies
const fs = require("fs");
const express = require("express");
const path = require("path");
const { debugPort } = require("process");
const { json } = require("body-parser");

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

app.post("/api/notes", (req, res) => {
    fs.readFile(path.join(_dirname, "/db/db.json"), "utf8", (err, data) => {
        if (err) throw err;
        const db = JSON.parse(data);
        const newDB = [];

        db.push(req.body);

        for (let i = 0; i < db.length; i++) {
            const newNote = {
                title: db[i].title,
                text: db[i].text,
                id: i
            };

            newDB.push(newNote);
        }

        fs.writeFile(path.join(_dirname, "/db/db.json"), JSON.stringify(newDB, null, 2), (err) => {
            if (err) throw err;
            res.json(req.body);
        });
    });
});