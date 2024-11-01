// controllers/userController.js

const knex = require('knex')(require('../knexfile').development);

// Get all users
exports.getUsers = async (req, res) => {
  try {
    const users = await knex('users').select('*');
    res.json(users);
  } catch {
    const data = {
        status: 'Fail',
        errors: [
            'Failed to retrieve users'
        ]
    }
    res.status(500).json(data);
  }
};

// Get a user by ID
exports.getUser= async (req, res) => {
  const { id } = req.params;
  try {
    const user = await knex('users').where({ id }).first();
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to retrieve user' });
  }
};

// Create a new user
exports.createUser = async (req, res) => {
  const { name, email } = req.body;
  try {
    const [id] = await knex('users').insert({ name, email });
    res.status(201).json({ id, name, email });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to create user' });
  }
};

// Update an existing user
exports.updateUser = async (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;
  try {
    const affectedRows = await knex('users').where({ id }).update({ name, email });
    if (affectedRows === 0) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.status(200).json({ message: 'User updated successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to update user' });
  }
};

// Delete a user
exports.deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const affectedRows = await knex('users').where({ id }).del();
    if (affectedRows === 0) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.status(204).end(); // No content
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to delete user' });
  }
};
