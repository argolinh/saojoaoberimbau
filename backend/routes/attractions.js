const express = require('express');
const router = express.Router();
const attractionsController = require('../controllers/attractions');

router.get('/', attractionsController.getAttractions);
router.post('/', attractionsController.addAttraction);

module.exports = router;