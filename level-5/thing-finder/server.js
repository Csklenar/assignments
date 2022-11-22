const express = require("express");
const app = express();

app.use(express.json())
app.use("/inventoryItems", require("./routes/inventoryitemsRouter"))


app.listen(9000, () => {
    console.log("The server is listening on Port 9000")
})