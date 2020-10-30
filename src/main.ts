import express from "express";

const app = express();

app.get("/", async (req: express.Request, res: express.Response) => {
  res.send("Hello, world.");
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
