import ip from "ip";
import app from "./app";
import http from "http";
import { PORT } from "./config";

const server = http.createServer(app).listen(PORT);

console.log(`
  Server running at 
    http://127.0.0.1:${PORT}
    http://${ip.address()}:${PORT}
`);

export default {};
