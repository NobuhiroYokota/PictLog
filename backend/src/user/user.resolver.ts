import { Resolver, Query, Args, Int } from '@nestjs/graphql';
import { UserService } from './user.service'; // ユーザーサービスをインポート
import { User } from './user.entity'; // エンティティをインポート

@Resolver(() => User)
export class UserResolver {
    constructor(private readonly userService: UserService) {}
  
    // 全ユーザーを取得するクエリ
    @Query(() => [User], { name: 'users' })
    findAll() {
      return this.userService.findAll();
    }
  
    // IDでユーザーを取得するクエリ
    @Query(() => User, { name: 'user' })
    findOne(@Args('id', { type: () => Int }) id: number) {
      return this.userService.findOne(id);
    }
  
    // 空のクエリフィールドを追加
    @Query(() => String)
    hello() {
      return 'Hello World!';
    }
  }

