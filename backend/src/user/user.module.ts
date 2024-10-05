import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';
import { PrismaModule } from '../prisma/prisma.module'; // PrismaModuleをインポート

@Module({
  imports: [PrismaModule], // PrismaModuleを追加
  providers: [UserService, UserResolver],
})
export class UserModule {}
