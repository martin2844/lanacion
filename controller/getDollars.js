const axios = require("axios");

const getDollars = async () => {
    let ofi = await axios.get("https://api-contenidos.lanacion.com.ar/json/V3/economia/cotizacion/DBNA");
    ofi = ofi.data;
    let blue = await axios.get("https://api-contenidos.lanacion.com.ar/json/V3/economia/cotizacionblue/DBLUE");
    blue = blue.data;
    let liqui = await axios.get("https://api-contenidos.lanacion.com.ar/json/V3/economia/cotizacionblue/DCCL");
    liqui = liqui.data;

    return {
        ofi,
        blue,
        liqui
    }
}

module.exports = getDollars;