import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UploadModule } from './upload/upload.module';
import { FeatureModule } from './features/features.module';

@Module({
  imports: [AuthModule, UploadModule, FeatureModule],
})
export class RouteModule {}
