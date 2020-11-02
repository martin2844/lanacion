const express = require('express');
const count = require('./cron-jobs/count');
const dollars = require('./cron-jobs/dollars');
const app = express();

// count().then(x => console.log(x));
// dollars().then(x => console.log(x));


app.use("/api/noticias", require("./routes/news"));
app.use("/api/dolar", require("./routes/dollars"));
const PORT = process.env.PORT || 5069

app.listen(PORT, () => {
    console.log("Started Sv at port " + PORT)
})