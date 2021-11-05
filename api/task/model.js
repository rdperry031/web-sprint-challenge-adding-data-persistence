const db = require('../../data/dbConfig');

async function getTasks() {
  const query = await db('tasks as t')
    .join('projects as p', 't.project_id', 'p.project_id')
    .select('t.*', 'p.project_name', 'p.project_description');
  return query.map((task) => {
    return {
      ...task,
      task_completed: Boolean(task.task_completed),
    };
  });
}

async function getTaskById(task_id) {
  const query = await db('tasks as t')
    .join('projects as p', 't.project_id', 'p.project_id')
    .select('t.*', 'p.project_name', 'p.project_description')
    .where('task_id', task_id)
    .first();
  return { ...query, task_completed: Boolean(query.task_completed) };
}

async function createTask(task) {
  const [task_id] = await db('tasks').insert(task);
  return getTaskById(task_id);
}

module.exports = {
  getTasks,
  getTaskById,
  createTask,
};
