import { MailerService } from '@nestjs-modules/mailer';
import { Controller } from '@nestjs/common';

import { EventPattern } from '@nestjs/microservices';

type NotificationDTO = {
  name: string;
  email: string;
  title: string;
  description: string;
  startsAt: Date;
  endsAt: Date;
};

@Controller()
export class AppController {
  constructor(private mailerService: MailerService) {}

  @EventPattern('task-notification')
  async taskNotification(data: NotificationDTO) {
    await this.mailerService.sendMail({
      to: data.email,
      from: 'taskmanager@nestjsapi.com',
      subject: 'Notificação de Tarefa',
      text: `Olá ${data.name}! Você tem a atividade ${data.title} que comecará em ${data.startsAt} e terminará em ${data.endsAt}. ${data.description}`,
      html: `
      <body>
        <h1>Olá ${data.name}!</h1>

        <span>Você tem uma tarefa para hoje!</span>
        <br/>
        <span>${data.title}</span>
        <br/>
        <span>${data.description}</span>
        <br/>
        <span>Início: ${data.startsAt}</span>
        <br/>
        <span>Fim: ${data.endsAt}</span>
      </body>`,
    });
  }
}
