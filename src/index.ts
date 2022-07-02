import 'dotenv/config'
import express from 'express'
import getNumberFromUnknown from './shared/getNumberFromUnknown'

const server = express()

server.get('/locked', (request, response) => {
    response.send('Hello world')
})

let port: number

try {
    port = getNumberFromUnknown(process.env.PORT)
} catch {
    throw new Error(`Invalid port number in env variables: ${process.env.PORT}`)
}

server.listen(port, () => {
    console.log(`Server running on: http://localhost:${port}`)
})
