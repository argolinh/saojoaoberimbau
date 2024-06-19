const Attraction = require('../models/Attraction');

exports.getAttractions = async (req, res) => {
    try {
        const attractions = await Attraction.find();
        res.json(attractions);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.addAttraction = async (req, res) => {
    const { name, description, date, category, time, location } = req.body;
    const newAttraction = new Attraction({ name, description, date, category, time, location });
    
    try {
        const savedAttraction = await newAttraction.save();
        res.status(201).json(savedAttraction);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};