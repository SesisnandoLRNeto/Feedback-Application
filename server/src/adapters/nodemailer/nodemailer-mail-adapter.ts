import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from '../mail-adapter';

const transport = nodemailer.createTransport({
  host: 'smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: 'a20c0f4694e667',
    pass: '6fb238212815d7',
  },
});

export class NodeMailerAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: 'Team Nando <nand@feedback.com>',
      to: 'Nando <nandolrneto@gmail.com>',
      subject,
      html: body,
    });
  }
}
