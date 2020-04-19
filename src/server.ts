import { host,port } from "../host.json";
import app from "./app";

 const port2 = process.env.PORT || port;
console.log(process.env.PORT)
app.listen(port2,()=>{
    console.log(`Server is working, http://${host}:${port2}/`)
});