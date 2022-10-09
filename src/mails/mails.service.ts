import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { SendMailDto } from './dto/send-mail.dto';

@Injectable()
export class MailsService {
  constructor(private mailerService: MailerService) {
    this.send({
      receipient: 'kqmdjc8@gmail.com',
      sender: 'Marianna Jucewicz',
      subject: 'Nowe powiadomienie od starosty',
      message:
        'Jooooł. To jest jakaś długa treść powiadomienia. To jest jakaś długa treść powiadomienia. To jest jakaś długa treść powiadomienia. To jest jakaś długa treść powiadomienia. To jest jakaś długa treść powiadomienia. ',
    });
  }

  async send(dto: SendMailDto) {
    const info = await this.mailerService.sendMail({
      to: dto.receipient,
      subject: dto.subject,
      template: 'notification',
      context: {
        sender: dto.sender,
        message: dto.message,
      },
    });

    console.log(info);
  }
}
