import { Injectable, Logger } from '@nestjs/common';
import { join } from 'path';

@Injectable()
export class AppService {
  logger: Logger;
  constructor() {
    this.logger = new Logger();
  }
}
