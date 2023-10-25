//will need to import projects models from /models/porjectModels.js

//First request to get hold of all the projects
export async function getProjects(req, res) {
	const projects = await projectsModel.getProjects();
	res.status(200).json({ status: "success", data: projects });
}

//Second request would be to filter projects and get by language or difficulty
export async function getProjectsByX(req, res) {}
