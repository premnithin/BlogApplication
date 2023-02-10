import express from "express";
import mongoose from "mongoose";
import blogRouter from "./routes/blog-routes";
import router from "./routes/user-routes";
import cors from "cors";




const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/user", router);
app.use("/api/blog", blogRouter);
mongoose
  .connect(
    'mongodb://admin:codeforinterview@ac-3bov7da-shard-00-00.1hyefgt.mongodb.net:27017,ac-3bov7da-shard-00-01.1hyefgt.mongodb.net:27017,ac-3bov7da-shard-00-02.1hyefgt.mongodb.net:27017/?ssl=true&replicaSet=atlas-w6e43q-shard-0&authSource=admin&retryWrites=true&w=majority'    
  )
  .then(() => app.listen(5000))
  .then(() =>
    console.log("Connected TO Database and Listening TO Localhost 5000")
  )
  .catch((err) => console.log(err));
