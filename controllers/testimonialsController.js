import { Testimonial } from "../models/Testimonials.js";

export const saveTestimonials = async (req, res) => {
  // validate
  const { name, email, message } = req.body;
  const errors = [];

  if (name.trim() === '') {
    errors.push({ message: 'Name cannot be empty' });
  }

  if (email.trim() === '') {
    errors.push({ message: 'Email cannot be empty' });
  }

  if (message.trim() === '') {
    errors.push({ message: 'Message cannot be empty' });
  }

  if (errors.length > 0) {

    // query testimonials
    const testimonials = await Testimonial.findAll();

    // SHow errors
    res.render('testimonials', {
      titlePage: "Testimonials",
      errors,
      name,
      email,
      message,
      testimonials
    });
  } else {
    // save data
    try {
      await Testimonial.create({
        name,
        email,
        message
      });

      res.redirect('/testimonials')
    } catch (error) {
      console.log(error)
    }
  }
}