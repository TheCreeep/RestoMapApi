
import RestaurantModel from "../models/restaurant.js";

export const AddGradeController = async function (req, res) {
    try {
        await RestaurantModel.findOneAndUpdate({ "restaurant_id": req.query.id }, {
            $push: {
                grades: req.body
            }
        }).then((docs) => {
            res.json(docs);
        }
        );
    } catch (err) {
        res.status(500).send(err.message);
    }
}
export const AddRestaurantController = async function (req, res) {
    try {
        await RestaurantModel.create({
            ...req.body,
            grades: [],
            restaurant_id: "Rest" + Math.floor(Math.random() * (999999999 - 10000000 + 1))
        }
        ).then((docs) => {
            res.json(docs);
        }
        );
    } catch (err) {
        res.status(500).send(err.message);
    }
}