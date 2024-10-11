// src/diary/diary.model.ts
import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Diary {
  @Field(() => Int)
  id: number;

  @Field()
  diaryUrl: string;
}
