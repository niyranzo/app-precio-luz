import express from 'express';
import { createUserHandler, getAllUsersHandler, loginHandler } from '../controllers/userController.js';
const router = express.Router();

//get todos los usuarios (post)
router.get("/", getAllUsersHandler);
//post
router.post("/register", createUserHandler);
//comprobar el login
router.post("/login", loginHandler);

export default router;
