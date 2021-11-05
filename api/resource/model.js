const db = require('../../data/dbConfig');

async function getResources() {
  const resources = await db('resources');
  return resources;
}

async function getResourceById(resource_id) {
  const query = await db('resources').where({ resource_id }).first();
  return query;
}

async function createResource(resource){
    const [resource_id] = await db('resources').insert(resource)
    return getResourceById(resource_id)

}

module.exports = {
  getResources,
  getResourceById,
  createResource
};
