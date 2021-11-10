import { Router } from "express";
import * as authController from "../controllers/authcontroller";
import { verifySignup } from "../middlewares";
const router = Router();
router.post(
  "/signup",
  [verifySignup.checkDuplicateUsernameOrEmail, verifySignup.checkRolesExisted],
  authController.signUp
);
router.post("/signin", authController.signIn);

export default router;
