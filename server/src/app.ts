import express from "express";
import cors from "cors";
import taskRoute from "./routes/taskRoute";
import "dotenv/config";
import activityRoute from "./routes/activityRoute";

const app = express();

app.use(cors({ 
    origin: [
      process.env.CLIENT_URL,       
      "http://<your address here>"
    ], 
    methods: "GET,POST,DELETE,PUT"
  }));

app.use(express.json());

app.use("/api", taskRoute);
app.use("/api", activityRoute);

const PORT = process.env.PORT || 5000;
app.listen(5000, "0.0.0.0", () => {
  console.log(`Server running`);
});


export default app;
