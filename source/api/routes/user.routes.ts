import express from "express";
import { REGISTER_USER } from "../constants/user.constants";
import { registerUser } from "../controllers/user.controllers";

const userRoutes = express.Router();

userRoutes.get(REGISTER_USER, registerUser);

export = userRoutes;
