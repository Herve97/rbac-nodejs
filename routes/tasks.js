const express = require('express');
const router = express.Router();
const rbacMiddleware = require('../middleware/rbacMiddleware');

// Import your controller
const tasksController = require('../controllers/tasksController');

// Protect the route with RBAC middleware
router.get('/tasks', rbacMiddleware.checkPermission('read_task'), tasksController.getAllTasks);
router.post('/tasks', rbacMiddleware.checkPermission('create_task'), tasksController.createTask);
router.put('/tasks/:id', rbacMiddleware.checkPermission('update_task'), tasksController.updateTask);
router.delete('/tasks/:id', rbacMiddleware.checkPermission('delete_task'), tasksController.deleteTask);

module.exports = router;