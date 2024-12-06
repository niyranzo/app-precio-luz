import express from 'express';
import { createUserHandler, getAllUsersHandler, loginHandler } from '../controllers/userController.js';
const router = express.Router();

//get todos los usuarios (post)
router.get("/", getAllUsersHandler);
//post
router.post("/", createUserHandler);
//comprobar el login
router.get("/username=:username/password=:password", loginHandler);

export default router;
