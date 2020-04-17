import { Request,Response,Router } from "express";

export class ApiRoutes{

    constructor(private router:Router){
        this.Routes()
    }

    public Routes = ()=>{
         
        this.router.route('/').get((req:Request,res:Response)=>{
            res.render('site/index');
            // res.json({
            //     status:"Api Its Working",
            //     message:"YAVVŞAAQQQ Oşan"
            // })
        })
    }
}