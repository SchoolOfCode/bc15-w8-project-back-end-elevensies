import express from "express";
import morgan from "morgan";
import { projectsRoutes } from "./Routes/projectsRoutes.js";

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(express.static("public"));
app.use("/projects", projectsRoutes);

export default app;
