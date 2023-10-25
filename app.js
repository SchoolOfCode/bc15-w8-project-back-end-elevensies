import express from "express";
import morgan from "morgan";
import { projectsRouter } from "./projects/projects.router.js";

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(express.static("public"));
app.use("/api/projects", projectsRouter);

export default app;
