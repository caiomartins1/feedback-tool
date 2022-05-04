import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from '../mail-adapter';

const transport = nodemailer.createTransport({
  host: 'smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: '55d7dc79900334',
    pass: 'f416527918178f',
  },
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: 'Feedback Tool <feedback.tool@gmail.com>',
      to: 'Caio Martins <dev.caiomartins@gmail.com>',
      subject,
      html: body,
    });
  }
}
