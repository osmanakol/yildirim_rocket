"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const host_json_1 = require("../host.json");
const app_1 = __importDefault(require("./app"));
const port2 = process.env.PORT || host_json_1.port;
app_1.default.listen(port2, () => {
    console.log(`Server is working, http://${host_json_1.host}:${port2}/`);
});
