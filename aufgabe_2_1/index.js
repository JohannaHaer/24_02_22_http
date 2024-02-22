import http from 'http'
import fs from 'fs'

const sendFile = (path, res) => {
    // const filePath = `./public${path}`
    // console.log(filePath);
    fs.readFile(`./public${path}`, (err, data) => {
        if(err) {
            res.writeHead(500)
            res.end("Server Error")
        } else {
            res.end(data)
        }
    })
}

const server = http.createServer((req, res) => {
    if(req.url === "/") {
        sendFile("/index.html", res)
    } else {
        // console.log(req.url);
        sendFile(req.url, res)

    }
})

server.listen(3002, () => {
    console.log("listening on http://localhost:3002");
})