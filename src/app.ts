import bodyParser from "body-parser";
import express, { Application, Response, Request } from "express";
import exphbs from "express-handlebars";
import methodOverride from "method-override";
import { __static } from "../host.json";
// Connection import
import { ApiRoutes } from "./routes/api-routes";

class App {
    public app: Application

    constructor() {
        this.app = express();
        this.config();
        this.mongoSetup();
        this.handlebars();
        this.routeConfig();

    }

    private config = () => {
        this.app.use(express.static(__static));
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({
            extended: true
        }));
        this.app.use(methodOverride("_method"));
    }

    private handlebars = () => {
        this.app.engine('handlebars', exphbs({}));
        this.app.set('view engine', 'handlebars');
    }

    private routeConfig = () => {
        this.app.get('/', (req: Request, res: Response) => {


            res.json({
                status: "Api Its Working",
                message: "YAVVŞAAQQQ Oşan"
            });
        })
    }

    private mongoSetup = () => {
        // Mongo Setup
    }
}

export default new App().app;