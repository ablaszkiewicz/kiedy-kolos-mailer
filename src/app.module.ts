import { Module } from '@nestjs/common';
import { MailsModule } from './mails/mails.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot(), MailsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
