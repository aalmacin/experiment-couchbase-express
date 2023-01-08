const express = require("express");
const couchbase = require("couchbase");
const bodyParser = require("body-parser");

const cluster = new couchbase.Cluster("couchbase://localhost", {
    username: "Administrator",
    password: "password"
});
const bucket = cluster.bucket("default");
const collection = bucket.scope('experiment').collection('person')

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get("/person/:id", (req, res) => {
    return collection.get(req.params.id).then((result) => {
        return res.send(result);
    }).catch((err) => {
        return res.status(500).send(err);
    });
});
//
app.post("/person/:id", (req, res) => {
    const person = {
        firstName: req.body.firstName,
        lastName: req.body.lastName
    }
    return collection.upsert(req.params.id, person).then((result) => {
        return res.send(result);
    }).catch((err) => {
        return res.status(500).send(err);
    });
});

const server = app.listen(3003, () => {
    console.log("Listening on port %s...", server.address().port);
});
