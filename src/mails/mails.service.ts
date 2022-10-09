import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { SendMailDto } from './dto/send-mail.dto';

@Injectable()
export class MailsService {
  constructor(private mailerService: MailerService) {}

  async sendNotification(dto: SendMailDto) {
    await this.mailerService.sendMail({
      to: dto.receipient,
      subject: dto.subject,
      template: 'notification',
      context: {
        sender: dto.sender,
        message: dto.message,
      },
    });
  }
}
