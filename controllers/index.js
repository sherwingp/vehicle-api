const { vehicle } = require('../models');

const getAllVehicles = async (req, res) => {
  try {
    const vehicles = await vehicle.findAll();
    return res.status(200).json({ vehicles });
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

module.exports = {
  getAllVehicles
}