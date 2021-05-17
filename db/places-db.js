const PlaceModel = require('./clients/mongo');

async function createPlace(name, description, location, image){
    const place = new PlaceModel({
        name: name,
        description: description,
        location: location,
        image: image
    })
    return await place.save();
}

async function getAllPlaces() {
    const allPlaces = await PlaceModel.find();
    console.log(allPlaces)
    return allPlaces;
}

async function deletePlace(id) {
    const deletedSite = await PlaceModel.findByIdAndRemove(id, { useFindAndModify: false});
    if (!deletedSite) {
        throw new Error("Place doesn't exists");
    }
}

async function getPlaceById(id) {
    const place = await PlaceModel.findById(id);
    if (!place) {
        throw new Error("Place doesn't exists");
    }
    return place;
}

module.exports = {createPlace, getAllPlaces, deletePlace, getPlaceById};
