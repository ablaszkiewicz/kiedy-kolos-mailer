import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { MailsService } from './mails.service';
import { SendMailDto } from './dto/send-mail.dto';
import { ClientSecretGuard } from './guards/client-secret.guard';

@Controller('mails')
export class MailsController {
  constructor(private readonly mailsService: MailsService) {}

  @Post('/notification')
  @UseGuards(ClientSecretGuard)
  sendNotification(@Body() dto: SendMailDto) {
    return this.mailsService.sendNotification(dto);
  }
}
