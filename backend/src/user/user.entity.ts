import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType() // GraphQLのスキーマ定義のために使用
export class User {
  @Field(() => Int) // GraphQLでのフィールド定義
  id: number;

  @Field() // nameはString型
  name: string;

  @Field() // emailはString型かつ一意
  email: string;
}