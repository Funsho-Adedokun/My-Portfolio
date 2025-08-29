const express = require('express');
const router = express.Router();
const {
  getAllProperties,
  addProperty,
  getPropertyById
} = require('../controllers/propertyController');

router.get('/', getAllProperties);
router.post('/', addProperty);
router.get('/:id', getPropertyById);

module.exports = router;

const auth = require('../middleware/authMiddleware');

router.post('/', auth, addProperty);


