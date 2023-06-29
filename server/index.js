//ye complete samghna hai


import { createRequire } from "module";

const require = createRequire(import.meta.url);

require("@babel/core").transform("code", {
  presets: ["@babel/preset-env"],
});

require("dotenv").config();

import express from "express";
import cors from "cors";
import helmet from "helmet";

import db from "./database/index.js";
import router from "./routes/index.js";

const app = express();
app.use(cors());
app.use(helmet());
app.use(express.json());


app.use('/OJ', router)

app.listen(4000, () => {
  db()
    .then(() => {
      console.log("Server is Running!!!");
    })
    .catch((error) => {
      console.log("Server connection failed");
      console.log(error);
    });
});

// http://localhost:4000/OJ/