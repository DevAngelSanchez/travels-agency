import express from "express";
import { aboutUsPage, homePage, testimonialsPage, travelsPage, detailedTravelPage } from "../controllers/pageController.js";
import { saveTestimonials } from "../controllers/testimonialsController.js";


const router = express.Router();

router.get("/", homePage);

router.get("/travels", travelsPage);
router.get("/travels/:slug", detailedTravelPage);

router.get("/testimonials", testimonialsPage);
router.post("/testimonials", saveTestimonials);

router.get("/us", aboutUsPage);

export default router;