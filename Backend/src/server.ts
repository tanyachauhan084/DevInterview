import dotenv from "dotenv"
import App from "./App.js";
import dbConnection from "./db/db_connection.js";

dotenv.config();

const PORT: number = process.env.PORT ? parseInt(process.env.PORT, 10) : 8080;

dbConnection()
.then(()=>{
    App.listen(PORT, ()=>{
        console.log(`Sever is listening at the prot:${process.env.PORT}`);
    })
})

.catch((err: unknown)=>{
    console.log(err);
});

