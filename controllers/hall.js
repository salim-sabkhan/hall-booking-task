import Hall from "../models/Hall.js";

export const createHall = async (req, res, next) => {
    const newHall = new Hall(req.body);
  
    try {
      const savedHall = await newHall.save();
      res.status(200).json(savedHall);
    } catch (err) {
      next(err);
    }
  };

  export const updateHall = async (req, res, next) => {
    try {
      const updatedHall = await Hall.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
      res.status(200).json(updatedHall);
    } catch (err) {
      next(err);
    }
  };
  export const deleteHall = async (req, res, next) => {
    try {
      await Hall.findByIdAndDelete(req.params.id);
      res.status(200).json("Hall has been deleted.");
    } catch (err) {
      next(err);
    }
  };
  export const getHall = async (req, res, next) => {
    try {
      const getHall = await Hall.findById(req.params.id);
      res.status(200).json(getHall);
    } catch (err) {
      next(err);
    }
  };
  export const getHalls = async (req, res, next) => {
    const { min, max, ...others } = req.query;
    try {
      const getHalls = await Hall.find({
        ...others,
        cheapestPrice: { $gt: min | 1, $lt: max || 999 },
      }).limit(req.query.limit);
      res.status(200).json(getHalls);
    } catch (err) {
      next(err);
    }
  };