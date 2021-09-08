const mongoose = require('mongoose');

const MealSchema = new mongoose.Schema({
    title: {
        type: String
    },
    ingredients: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'ingredient'
    }
})

module.exports = Meal = mongoose.model('meal', mealSchema);