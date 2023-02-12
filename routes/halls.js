import express from "express";
import {
    createHall,deleteHall,updateHall,getHall,getHalls,
} from "../controllers/hall.js";
import Hall from "../models/Hall.js"

const router = express.Router();

//  CREATE

router.post("/", createHall); 
    

//  UPDATE

router.put("/:id", updateHall);
    

// DELETE

router.delete("/:id", deleteHall);
    
// GET

router.get("/:id", getHall);

// GET All

router.get("/", getHalls);


export default router;