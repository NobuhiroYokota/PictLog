import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class UpdatePostInput {
  @Field(() => Int)
  id: number;

  @Field(() => String, { nullable: true })
  imageUrl?: string;

  @Field(() => Int, { nullable: true })
  userId?: number;
}
