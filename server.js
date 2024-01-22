import express from "express";
import rankRouter from "./router.js";
import morgan from "morgan";
import mongoose from "mongoose";
import cors from "cors";

const app = express();

// call function to connect to DB
main().catch((err) => console.log(err));

// Function to connect
async function main() {
  await mongoose.connect(
    "mongodb+srv://clintjbaker:Evqbaq3apqH28TSu@cluster0.zlp1vlv.mongodb.net/?retryWrites=true&w=majority"
  );
}

// middleware
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

// router for ranks
app.use("/rank", rankRouter);

// error handling
app.use((err, req, res, next) => {
  res.status(500).send({ message: "ERROR", error: err });
});

app.listen(9000, () =>
  console.log(`App is listening at http://localhost:9000`)
);
