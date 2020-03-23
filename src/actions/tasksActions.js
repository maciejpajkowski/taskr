export const createTask = (task) => ({
  type: 'CREATE_TASK',
  task
});

export const removeTask = ({ id } = {}) => ({
  type: 'REMOVE_TASK',
  id
});

export const editTask = (id, updates) => ({
  type: 'EDIT_TASK',
  id,
  updates
});

