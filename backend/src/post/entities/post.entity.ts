import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Post {
  @Field(() => Int)
  id: number;

  @Field()
  imageUrl: string;

  @Field(() => Int)
  userId: number;

  @Field()
  createAt: Date;
}
