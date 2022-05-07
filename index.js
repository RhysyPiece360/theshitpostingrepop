const express = require("express")
const app = express()


//should respond with "hello world" when a GET request to Said URL is made,
app.get('/', (req, res) => {
res.send('Online and ready for shitposting')
console.log("Request made")
})



app.get('/sp1', (req, res) => {
res.send("im waliking the fish honey! \n No your not! i dont have a wife!")
console.log("request made to shitpost1")
})

app.listen('8080')
