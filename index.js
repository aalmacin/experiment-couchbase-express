const express = require("express");
const couchbase = require("couchbase");
const bodyParser = require("body-parser");

const cluster = new couchbase.Cluster("couchbase://localhost");
const bucket = cluster.bucket("default");
//
// const app = express();
//
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));
//
// app.get("/person/:id", (req, res) => {
//     bucket.get(req.params.id, (err, result) => {
//         if (err) {
//             return res.status(500).send(err);
//         }
//         res.send(result);
//     });
// });
//
// app.post("/person/:id", (req, res) => {
//     const person = {
//         firstName: req.body.firstName,
//         lastName: req.body.lastName
//     }
//     bucket.upsert(req.params.id, document,  (err, result) => {
//         if (err) {
//             return res.status(500).send(err);
//         }
//         res.send(result);
//     });
// });
//
// const server = app.listen(3003, () => {
//     console.log("Listening on port %s...", server.address().port);
// });