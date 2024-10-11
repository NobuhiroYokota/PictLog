// src/diary/dto/create-diary.input.ts
import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateDiaryInput {
  @Field()
  diaryUrl: string;
}
