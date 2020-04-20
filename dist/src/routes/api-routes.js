"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ApiRoutes {
    constructor(router) {
        this.router = router;
        this.Routes = () => {
            return this.router.route('/').get((req, res) => {
                res.render('site/index');
                // res.json({
                //     status:"Api Its Working",
                //     message:"YAVVŞAAQQQ Oşan"
                // })
            });
        };
        this.Routes();
    }
}
exports.ApiRoutes = ApiRoutes;
