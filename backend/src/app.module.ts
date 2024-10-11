import { Module } from '@nestjs/common';
import { GraphQLModule } from  '@nestjs/graphql'
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'; // ApolloDriverをインポート
import { PrismaModule } from './prisma/prisma.module'; // PrismaModuleをインポート
import { UserModule } from './user/user.module'; // UserModuleをインポート
import { join } from 'path';
import { PostModule } from './post/post.module';
import { DiaryModule } from './diary/diary.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver, // ドライバーを指定
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'), // スキーマファイルの生成先
    }),
    PrismaModule, 
    UserModule,
    PostModule,
    DiaryModule
  ],
})
export class AppModule {}
