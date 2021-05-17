const express = require('express');
const router = express.Router();
const placesService = require('../services/places-service');

/* CREATE a place */
router.post('/', async (req, res) => {
  console.log(req.body.name, req.body.description, req.body.location, req.body.image)
  try {
    const newPlace = await placesService.createPlace(req.body.name, req.body.description, req.body.location, req.body.image);
    res.json(newPlace);
  } catch (err) {
    console.error(err);
    res.json(err);
  }
});

/* DELETE place */
router.delete('/:id', async (req, res) => {
  try {
    const deletedPlace = await placesService.deletePlace(req.params.id);
    res.json(deletedPlace);
  }catch(err){
    console.error(err);
    res.json(err.message);
  }
});

/* GET place by ID*/
router.get('/:id', async (req, res) => {
  try {
    const deletedPlace = await placesService.getPlaceById(req.params.id);
    res.json(deletedPlace);
  }catch(err){
    console.error(err);
    res.json(err.message);
  }
});

/* Get all places */
router.get('/', async (req, res) => {
  try {
    const allPlaces = await placesService.getAllPlaces();
    res.json(allPlaces);
  } catch (err) {
    console.error(err);
    res.json(err);
  }
});

module.exports = router;
