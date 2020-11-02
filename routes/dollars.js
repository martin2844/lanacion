const express = require('express');
const router = express.Router();
const getDollars = require('../controller/getDollars');

router.get("/", async (req, res) => {
    try {
        let dollarData = await getDollars();
        res.status(200).send(dollarData);
    } catch (error) {
        res.status(500).send("server error");
    }
})

router.get("/blue", async (req, res) => {
    try {
        let dollarData = await getDollars();
        res.status(200).send(dollarData.blue);
    } catch (error) {
        res.status(500).send("server error");
    }
})

router.get("/oficial", async (req, res) => {
    try {
        let dollarData = await getDollars();
        res.status(200).send(dollarData.ofi);
    } catch (error) {
        res.status(500).send("server error");
    }
})

router.get("/liqui", async (req, res) => {
    try {
        let dollarData = await getDollars();
        res.status(200).send(dollarData.liqui);
    } catch (error) {
        res.status(500).send("server error");
    }
})


module.exports = router