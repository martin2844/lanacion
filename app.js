const express = require('express');
const count = require('./cron-jobs/count');
const app = express();

// count().then(x => console.log(x));



app.use("/api/news", require("./routes/news"));
const PORT = process.env.PORT || 5069

app.listen(PORT, () => {
    console.log("Started Sv at port " + PORT)
})