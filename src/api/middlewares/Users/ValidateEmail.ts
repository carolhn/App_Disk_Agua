import { celebrate, Joi, Segments } from 'celebrate';
import { RequestHandler } from 'express';

const validationEmail: RequestHandler = celebrate({
  [Segments.BODY]: {
     email: Joi.string().email().required(),
  },
});

export default validationEmail;
