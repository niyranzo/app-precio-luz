import express from 'express';
import { getFilteredPrices } from '../helpers/getDataPriceHour.js';
import { createUserHandler, getAllUsersHandler, loginHandler } from '../controllers/userController.js';
const router = express.Router();

//get todos los usuarios (post)
router.get("/", getAllUsersHandler);
//post
router.post("/", createUserHandler) 

export default router;
