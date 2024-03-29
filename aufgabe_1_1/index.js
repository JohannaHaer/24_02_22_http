import http from 'http'
import fs from 'fs'

const sendFile = (path, res) => {
    fs.readFile(`./${path}`, (err, data) => {
        if(err) {
            res.writeHead(500)
            res.end("Server Error")
        }
        res.end(data)
    })
}

const server = http.createServer((req, res) => {
    if(req.url === "/") {
        sendFile("index.html", res)
    } else if ( req.url === "/about") {
        sendFile("about.html", res)
    } else if ( req.url === "/contact") {
        sendFile("contact.html", res)
    } else if ( req.url === "/faq") {
        sendFile("faq.html", res)
    } else {
        sendFile(req.url, res)
    }
})

server.listen(3001, () => {
    console.log("listening on http://localhost:3001");
})