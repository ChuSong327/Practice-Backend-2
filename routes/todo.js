const express = require("express");
const router = express.Router();

const knex = require("../db/knex");

router.post("/", (req, res) => {
    knex("todo")
    .insert(req.body)
    .then(() => {
        res.json("success");
    })
});

router.get("/", (req, res) => {
    knex("todo").select().then(todo => {
        res.json(todo);
    })
})

module.exports = router;