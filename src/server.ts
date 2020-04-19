import { host,port } from "../host.json";
import app from "./app";

 const port2:string|number = process.env.PORT || port;

app.listen(port2,()=>{
    console.log(`Server is working, http://${host}:${port2}/`)
});