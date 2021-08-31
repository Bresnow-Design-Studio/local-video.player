import ip from 'ip'
import app from './app'
import http from 'http'
import dotenv from 'dotenv'
dotenv.config()

const PORT = process.env.PORT || 3000

const server = http.createServer(app).listen(PORT)

console.log(`
  Server running at 
    http://127.0.0.1:${PORT}
    http://${ip.address()}:${PORT}
`)

export default {}
