const db = require('../../data/dbConfig');

async function getProjects() {
  const rows = await db('projects');
  return rows.map((project) => {
    return {
      ...project,
      project_completed: Boolean(project.project_completed)
    };
  });
}

module.exports = {
  getProjects,
};
