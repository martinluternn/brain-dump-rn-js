import express from "express";
import {
  getAllEvents
} from "../controller/main_controller.js";
const router = express.Router();

router.get('/available/events', getAllEvents);

export default router;