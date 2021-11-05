const db = require('../../data/dbConfig');

async function getProjects() {
  const query = await db('projects');
  return query.map((project) => {
    return {
      ...project,
      project_completed: Boolean(project.project_completed),
    };
  });
}

async function getProjectById(project_id) {
  const query = await db('projects').where({ project_id }).first();
  return { ...query, project_completed: Boolean(query.project_completed) };
}

async function createProject(project) {
  const [project_id] = await db('projects').insert(project);
  return getProjectById(project_id);
}

module.exports = {
  getProjects,
  getProjectById,
  createProject  
}; 
