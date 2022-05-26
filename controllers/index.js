const { vehicle } = require('../models');

const getAllVehicles = async (req, res) => {
  try {
    const vehicles = await vehicle.findAll();
    return res.status(200).json({ vehicles });
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

const getMakeModels = async (req, res) => {
  try {
    const vehicles = await vehicle.findAll();
    const makemodels = vehicles.map((vehicle) => {
      vehicle = vehicle.toJSON()
      vehicle.makemodel = `${vehicle.make} ${vehicle.model}`

      delete vehicle.createdAt;
      delete vehicle.updatedAt;
      return vehicle
    })
    return res.status(200).json({ makemodels });
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

const deleteVehicle = async (req, res) => {
  try {
    await vehicle.destroy({
      where: {
        id: req.params.id
      }
    });
    return res.status(200).send('vehicle deleted')
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

module.exports = {
  getAllVehicles, getMakeModels, deleteVehicle
}