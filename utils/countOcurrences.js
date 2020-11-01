const countTags = require("../cron-jobs/count");

const countOccurrences = (arr) => {
    return arr.reduce((prev, curr) => (prev[curr] = ++prev[curr] || 1, prev), {});
}

module.exports = countOccurrences