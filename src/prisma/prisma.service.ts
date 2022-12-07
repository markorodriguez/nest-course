import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient {
  constructor() {
    // Brings the constructor from the class we are extending
    super({
      datasources: {
        db: {
          url: 'postgresql://postgres:123@localhost:5432/nest?schema=public',
        },
      },
    });
  }
}
