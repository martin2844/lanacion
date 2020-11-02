const getDollars = require("../controller/getDollars");

const saveDollars = async () => {
    let dollarData = await getDollars();
    return dollarData;
}

module.exports = saveDollars;