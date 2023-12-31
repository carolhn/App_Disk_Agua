import { Request, Response } from 'express';
import SendForgotPasswordEmailService from '@services/Users/SendForgotPasswordEmailService';

export default class ForgotPasswordController {

  async create(req: Request, res: Response): Promise<Response> {
      const { email } = req.body;

      const sendForgotPasswordEmail = new SendForgotPasswordEmailService();

      await sendForgotPasswordEmail.execute({ email });

      return res.status(204).json();
  }
}