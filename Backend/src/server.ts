import dotenv from "dotenv"
import App from "./App.js";

dotenv.config();

const PORT: number = process.env.PORT ? parseInt(process.env.PORT, 10) : 8080;

App.listen(PORT, ()=>{
    console.log(`Server is listening at port:${process.env.PORT}`)
})