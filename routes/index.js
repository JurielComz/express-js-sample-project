const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');

router.get('/user', usersController.getUsers);
router.get('/user/:id', usersController.getUser);
router.post('/user', usersController.createUser);
router.put('/:id', usersController.updateUser);
router.delete('/:id', usersController.deleteUser);

module.exports = router;