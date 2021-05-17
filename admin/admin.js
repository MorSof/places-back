const PlacesModel = require('../db/clients/mongo');
const placesConst = require('../const/places.json');
const placesService = require('../services/places-service');

deleteAllTables = async () => {
    try{
        await PlacesModel.deleteMany({}, ()=>{});
        return "Tables deleted successfully";
    }catch(err){
        console.error(err);
        return err;
    }
}

async function initFirstPlaces() {
    const places = placesConst.places;
    for (let i = 0; i < places.length; i++) {
        await placesService.createPlace(places[i].name, places[i].description, places[i].location, places[i].image);
    }
    return "Places created successfully";
}

module.exports = {deleteAllTables, initFirstPlaces}