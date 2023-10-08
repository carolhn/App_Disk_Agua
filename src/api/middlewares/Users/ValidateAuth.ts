import { celebrate, Joi, Segments } from 'celebrate';
import { RequestHandler } from 'express';

const validationAuth: RequestHandler = celebrate({
  [Segments.BODY]: {
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  },
});

export default validationAuth;
