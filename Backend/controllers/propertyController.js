const Property = require('../models/Property');

exports.getAllProperties = async (req, res) => {
  const properties = await Property.find();
  res.json(properties);
};

exports.addProperty = async (req, res) => {
  const newProperty = new Property(req.body);
  await newProperty.save();
  res.status(201).json(newProperty);
};

exports.getPropertyById = async (req, res) => {
  const property = await Property.findById(req.params.id);
  res.json(property);
};
