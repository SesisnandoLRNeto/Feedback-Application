import express from 'express';
import { SubmitFeedback } from './services/submit-feedback';
import { PrismaFeedbackRepository } from './repositories/prisma/prisma-feedback-repository';
import { NodeMailerAdapter } from './adapters/nodemailer/nodemailer-mail-adapter';

export const routes = express.Router();

routes.post('/feedbacks', async (req, res) => {
  const { type, comment, screenshot } = req.body;
  const prismaFeedbackRepository = new PrismaFeedbackRepository();
  const nodemailerAdapter = new NodeMailerAdapter();
  const submitFeedBack = new SubmitFeedback(
    prismaFeedbackRepository,
    nodemailerAdapter
  );

  await submitFeedBack.execute({
    type,
    comment,
    screenshot,
  });

  res.status(201).send();
});
