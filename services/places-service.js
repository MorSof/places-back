const placesDB = require('../db/places-db');

async function createPlace(name, description, location, image) {
    return await placesDB.createPlace(name, description, location, image);
}

async function getAllPlaces() {
    return await placesDB.getAllPlaces();
}

async function deletePlace(id) {
    return await placesDB.deletePlace(id);
}

async function getPlaceById(id) {
    return await placesDB.getPlaceById(id);
}

module.exports = {createPlace, getAllPlaces, deletePlace, getPlaceById};