import { host,port } from "../host.json";
import app from "./app";

 // tslint:disable-next-line:no-bitwise
 const port2:string|number = process.env.PORT || port;

app.listen(port,()=>{
    console.log(`Server is working, http://${host}:${port2}/`)
});