// src/diary/diary.module.ts
import { Module } from '@nestjs/common';
import { DiaryService } from './diary.service';
import { DiaryResolver } from './diary.resolver';
import { PrismaModule } from '../prisma/prisma.module';  // PrismaModuleをインポート

@Module({
  imports: [PrismaModule],   // PrismaModuleをモジュールとしてインポート
  providers: [DiaryService, DiaryResolver],  // DiaryServiceとDiaryResolverを提供
})
export class DiaryModule {}
