
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

export const SearchByNameController = async function (req, res) {
    const restaurantName = req.query.name;
    try {
        await RestaurantModel.aggregate([{ $match: { "name": { '$regex': restaurantName, '$options': 'i' } } }, {
            $project: {
                _id: 0,
                cuisine: 1,
                grades: 1,
                fullAddress: { $concat: ['$address.building', ' ', '$address.street', ' ', '$address.zipcode'] },
                fullName: { $concat: ['$name', ' (', { $toUpper: '$borough' }, ')'] }
            }
        }]).sort({ fullName: 1 })
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
        await RestaurantModel.aggregate([{ $match: req.query }, {
            $project: {
                _id: 0,
                cuisine: 1,
                grades: 1,
                fullAddress: { $concat: ['$address.building', ' ', '$address.street', ' ', '$address.zipcode'] },
                fullName: { $concat: ['$name', ' (', { $toUpper: '$borough' }, ')'] }
            }
        }]).sort({ fullName: 1 })
            .then((docs) => {
                res.json(docs);
            }
            );
    } catch (err) {
        res.status(500).send(err.message);
    }
}
export const AllCuisinesController = async function (req, res) {
    try {
        await RestaurantModel.distinct("cuisine")
            .then((docs) => {
                res.json(docs);
            }
            );
    } catch (err) {
        res.status(500).send(err.message);
    }
}
export const AllBoroughsController = async function (req, res) {
    try {
        await RestaurantModel.distinct("borough")
            .then((docs) => {
                res.json(docs);
            }
            );
    } catch (err) {
        res.status(500).send(err.message);
    }
}