import express from "express";

import * as projectsController from "../Controllers/projectsController.js";

export const projectsRoutes = express.Router();

projectsRoutes.get("/", projectsController.getProjects);

projectsRoutes.get("/difficulty", projectsController.getProjectsByDifficulty);

projectsRoutes.get("/language", projectsController.getProjectsByLanguage);

projectsRoutes.post("/", projectsController.createProject);

projectsRoutes.delete("/:id", projectsController.deleteProjectById);