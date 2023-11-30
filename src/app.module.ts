import { Module } from '@nestjs/common';
import { AppController } from './app.controller';

import { MailerModule } from '@nestjs-modules/mailer';

@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        host: 'smtp.ethereal.email',
        port: 587,
        secure: false,
        auth: {
          user: 'gonzalo.altenwerth@ethereal.email',
          pass: 'mQQHxgMXdCByaRYqVk',
        },
      },
    }),
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
