import type { Provider } from '@nestjs/common';
import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CqrsModule } from '@nestjs/cqrs';

import { ApiConfigService } from './services/api-config.service.ts';
import { GeneratorService } from './services/generator.service.ts';
import { ValidatorService } from './services/validator.service.ts';
import { AwsS3Service } from './services/aws-s3.service.ts';

const providers: Provider[] = [
  ApiConfigService,
  ValidatorService,
  AwsS3Service,
  GeneratorService,
];

@Global()
@Module({
  providers,
  imports: [CqrsModule, ConfigModule],
  exports: [...providers, CqrsModule, ConfigModule],
})
export class SharedModule {}
