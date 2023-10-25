//will need to import projects models from /models/porjectModels.js

//First request to get hold of all the projects
export async function getProjects(req, res) {
	const projects = await projectsModel.getProjects();
	res.status(200).json({ status: "success", data: projects });
}

//Second request would be to filter projects and get by difficulty
export async function getProjectsByDifficulty(req, res) {
	const difficulty = req.body.difficulty;
	const projects = await projectsModel.getProjectsByDifficulty(difficulty);
	if (!projects) {
		return res
			.status(404)
			.json({ status: "fail", data: { message: "Projects Not Found" } });
	}
	res.status(200).json({ status: "success", data: projects });
}

//Third request would be to filter projects and get by language
export async function getProjectsByLanguage(req, res) {
	const language = req.body.language;
	const projects = await projectsModel.getProjectsByLanguage(language);
	if (!projects) {
		return res
			.status(404)
			.json({ status: "fail", data: { message: "Projects Not Found" } });
	}
	res.status(200).json({ status: "success", data: projects });
}

//Fourth request would create a new project and add it to the DB
export async function creatProject(req, res) {
	const data = req.body;
	const project = await projectsModel.createProject(data);
	res.status(201).json({ status: "success", data: project });
}
