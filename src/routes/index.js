import { Router } from "express";
import authMiddleware from "../middlewares/auth";
import UserController from "../controllers/user";

const routes = new Router();

//-------- Unauthenticated routes ----------
routes.post("/user", UserController.create);
routes.post("/login", UserController.login);
routes.post("/forgot-password", UserController.forgotPassword);
routes.post("/reset-password", UserController.resetPassword);

//-------- Authenticated routes ----------
routes.use(authMiddleware);
routes.get("/user", UserController.get);

export default routes;
