import { Module } from '@nestjs/common';
import { MailsService } from './mails.service';
import { MailsController } from './mails.controller';
import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import * as dotenv from 'dotenv';
dotenv.config();

const mailerModule = MailerModule.forRootAsync({
  useFactory: () => ({
    transport: {
      host: process.env.EMAIL_HOST,
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    },
    defaults: {
      from: 'Kiedy-kolos <info@kiedy-kolos.pl>',
    },
    template: {
      dir: __dirname + '/templates',
      adapter: new HandlebarsAdapter(),
      options: {
        strict: true,
      },
    },
  }),
});

@Module({
  imports: [mailerModule],
  controllers: [MailsController],
  providers: [MailsService],
})
export class MailsModule {}
