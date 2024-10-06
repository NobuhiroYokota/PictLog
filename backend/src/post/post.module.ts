import { Module } from '@nestjs/common';
import { PostService } from './post.service';
import { PostResolver } from './post.resolver';
import { PrismaModule } from '../prisma/prisma.module'; // PrismaModuleをインポート\

@Module({
  imports: [PrismaModule], // PrismaModuleを追加
  providers: [PostResolver, PostService],
})
export class PostModule {}
