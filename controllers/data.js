
import RestaurantModel from "../models/restaurant.js";

export const DataController = async function (req, res) {
    try {
        await RestaurantModel.find({})
            .then((docs) => {
                res.json(docs);
            }
            );
    } catch (err) {
        res.status(500).send(err.message);
    }
}

export const SearchController = async function (req, res) {
    try {
        await RestaurantModel.find(req.query)
            .sort({ borough: 1 })
            .then((docs) => {
                res.json(docs);
            }
            );
    } catch (err) {
        res.status(500).send(err.message);
    }
}
