
const path = require("path")
const express = require("express")
const { publicDecrypt } = require("crypto")
const app = express()
const publicPath = path.join(__dirname, '..', 'public')
const port = process.env.PORT || 3000
app.use(express.static(publicPath))


// to match all unmatched routes
app.get("*", (req, res) => {
    res.sendFile(path.join(publicPath, "index.html"))
})
app.listen(port, () => {

    console.log("server is listening on port", 3000);
})