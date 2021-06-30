// adding dependencies
const fs = require("fs");
const express = require("express");
const path = require("path");

// sets up express app and port for listening and let heroku decide a port and if not then to use port 8000
const app = express();
const PORT = process.env.PORT || 8000;

// in a directory named public serve images, javascript files and images
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(express.json());

// brings you to notes.html
app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/notes.html"));
});

// brings you to read the `db.json` file and return all saved notes as JSON
app.get("/api/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "/db/db.json"));
});

// brings you to index.html
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/index.html"));
});

// add new note received to the `db.json` file that can be saved on the request body and then return the new note to the client
app.post("/api/notes", (req, res) => {
    let newNote = req.body;
    let noteList = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
    let notelength = (noteList.length).toString();

    // create new property called id based on length and assign it to each json
    newNote.id = notelength;

    // push updated note to the data with the notes history in db.json
    noteList.push(newNote);

    fs.writeFileSync("./db/db.json", JSON.stringify(noteList));
    res.json(noteList);
})

// delete note according to their tagged id
app.delete("/api/notes/:id", (req, res) => {
    let noteList = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
    let noteId = (req.params.id).toString();

    // filter all notes that doesn't have matching id and saved them as new array, the matching array will be deleted
    noteList = noteList.filter(selected => {
        return selected.id != noteId;
    })

    // write updated data to db.json and siplay the updated note
    fs.writeFileSync("./db/db.json", JSON.stringify(noteList));
    res.json(noteList);
});

// listen to the port when it is deployed
app.listen(PORT, () => console.log("Server listening on port " + PORT));