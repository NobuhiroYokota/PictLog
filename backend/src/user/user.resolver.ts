import { Resolver, Query, Args, Int, ResolveField, Parent } from '@nestjs/graphql';
import { UserService } from './user.service'; // ユーザーサービスをインポート
import { User } from './user.entity'; // エンティティをインポート
import { Post } from '../post/entities/post.entity'; // Postエンティティをインポート（必要に応じて）

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

  // postsフィールドをリゾルブ
  @ResolveField(() => [Post]) // Post型をリターンする
  async posts(@Parent() user: User) {
    return this.userService.findPostsByUserId(user.id);
  }
}
