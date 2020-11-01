const axios = require("axios");
const countOcurrences = require('../utils/countOcurrences');
const getNews = require("../controller/getNews");

//Todos los dias entonces 1 vez por día, tipo 13hs correr estó.
const count = async () => {
    let data = await getNews();
    let tags = data.map((a) => {
        return a.tags.map(a => a.valor);
    })
    let categories = data.map( a => a.categoriaDescripcion);
    const allTags = tags.flat();
    const countTags = countOcurrences(allTags);
    const countCats = countOcurrences(categories);
    return {
        countCats,
        countTags
    }
}

module.exports = count