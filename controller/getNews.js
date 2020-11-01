const axios = require("axios");

const getNews = async () => {
    //Fetch data from LaNacion
    let data = await axios.get("https://api-contenidos.lanacion.com.ar/json/v2/acumulado/refererHome");
    return data.data.items;
}

module.exports = getNews