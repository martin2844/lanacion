const express = require("express");
const router = express.Router();
const getNews = require("../controller/getNews");

router.get("/", async (req, res) => {
    try {
        const data = await getNews();
        res.status(200).send(data);
    } catch (error) {
        res.status(500).send("unable to fetch news");
    } 
});

router.get("/latest5", async (req, res) => {
    try {
        const data = await getNews();
        const latest5 = data.splice(0, 5);
        res.status(200).send(latest5);
    } catch (error) {
        res.status(500).send("unable to fetch news");
    } 
});

module.exports = router;