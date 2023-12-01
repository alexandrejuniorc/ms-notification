# Microservice Notification

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

## Description

Microservice Notification is a microservice that sends notifications to the user's email every 12 hours to check daily tasks. It is built on the [Nest](https://github.com/nestjs/nest) framework using TypeScript. The microservice focuses on providing a secure and efficient environment for handling tasks and users, with a strong emphasis on authentication and microservices architecture integrated with Kafka for seamless communication.

**Features:**

- **Microservice with Kafka:** Efficient use of microservice ensures scalability and flexibility, seamlessly integrated with Kafka for asynchronous and resilient communication.

**Technologies Used:**

- Microservice Architecture
- Apache Kafka

## Installation

```bash
$ pnpm install
```

## Running the app

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```

## Test

```bash
# unit tests
$ pnpm run test

# e2e tests
$ pnpm run test:e2e

# test coverage
$ pnpm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Alexandre Junior](https://www.linkedin.com/in/alexandrejuniorc/)
  
## License

Nest is [MIT licensed](LICENSE).
