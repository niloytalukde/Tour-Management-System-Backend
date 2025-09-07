
import express,{ Request,Response} from "express";
import cors from "cors"
import { router } from "./app/routes";
import { globalErrorHandler } from "./app/middlewares/giobalErrorHandler"
import notFound from "./app/middlewares/notFound";


const app = express();
app.use(express.json())
app.use(cors())
// user Router 
app.use("/api/v1/",router)


app.get("/", (req: Request, res: Response) => {
    res.status(200).send("Welcome to tour management system Server");
});
 
app.use(globalErrorHandler)

// Not Found Route 
app.use(notFound)



export default app;