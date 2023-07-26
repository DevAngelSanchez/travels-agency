import { Testimonial } from "../models/Testimonials.js";
import { Travel } from "../models/Travels.js";

export const homePage = async (req, res) => {

  // concurrent queries
  const promisesDB = [];
  promisesDB.push(Travel.findAll({ limit: 3 }));
  promisesDB.push(Testimonial.findAll({ limit: 3 }));

  try {
    const promisesResponse = await Promise.all(promisesDB);

    res.render("home", {
      titlePage: "Home",
      className: 'home',
      blockquote: false,
      travels: promisesResponse[0],
      testimonials: promisesResponse[1]
    });
  } catch (error) {
    console.log(error);
  }
}

export const aboutUsPage = (req, res) => {
  res.render("us", {
    titlePage: "About Us"
  });
}

export const travelsPage = async (req, res) => {

  try {
    const travels = await Travel.findAll();
    res.render("travels", {
      titlePage: "Upcoming Trips",
      travels
    });
  } catch (error) {
    console.log(error);
  }
}

export const detailedTravelPage = async (req, res) => {

  const { slug } = req.params;

  try {
    const travel = await Travel.findOne({ where: { slug } });

    res.render("travel", {
      titlePage: travel.titulo,
      travel
    });
  } catch (error) {
    console.log(error);
  }
}


export const testimonialsPage = async (req, res) => {

  try {

    const testimonials = await Testimonial.findAll();

    res.render("testimonials", {
      titlePage: "Testimonials",
      testimonials,
      blockquote: true,
    });
  } catch (error) {
    console.log(error);
  }

}