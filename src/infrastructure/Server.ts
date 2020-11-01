import express from "express";
import router from "./Router";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", router);

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
