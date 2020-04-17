import { host,port } from "../host.json";
import app from "./app";

// const port2 = process.env.PORT | port;

app.listen(port,()=>{
    console.log(`Server is working, http://${host}:${port}/api`)
});