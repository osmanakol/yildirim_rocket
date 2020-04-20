import { host, port } from "../host.json";
import app from "./app";

const port2 = process.env.PORT || 3003;
app.listen(port2, () => {
    console.log(`Server is working, http://${host}:${port2}/`)
}); 