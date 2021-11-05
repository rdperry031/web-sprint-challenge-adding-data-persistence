const db = require("../../data/dbConfig");

async function getProjects() {
  const rows = await db("projects");
  return rows;
}

module.exports = {
  getProjects,
};
