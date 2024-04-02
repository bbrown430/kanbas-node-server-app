import express from "express";
import Hello from "./Hello.js";
import lab5 from "./lab5.js";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());
Hello(app);
lab5(app);

app.listen(process.env.PORT || 4000);
