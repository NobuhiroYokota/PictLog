import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class CreatePostInput {
  @Field(() => String)
  imageUrl: string;

  @Field(() => Int)
  userId: number;
}
