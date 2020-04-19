"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
const express_1 = __importDefault(require("express"));
const express_handlebars_1 = __importDefault(require("express-handlebars"));
const host_json_1 = require("../host.json");
// Connection import
const api_routes_1 = require("./routes/api-routes");
class App {
    constructor() {
        this.config = () => {
            this.app.use(express_1.default.static(host_json_1.__static));
            this.app.use(body_parser_1.default.json());
            this.app.use(body_parser_1.default.urlencoded({
                extended: true
            }));
        };
        this.handlebars = () => {
            this.app.engine('handlebars', express_handlebars_1.default({}));
            this.app.set('view engine', 'handlebars');
        };
        this.routeConfig = () => {
            this.app.use('/api', new api_routes_1.ApiRoutes(this.app).Routes);
        };
        this.mongoSetup = () => {
            // Mongo Setup
        };
        this.app = express_1.default();
        this.config();
        this.mongoSetup();
        this.routeConfig();
        this.handlebars();
    }
}
exports.default = new App().app;
