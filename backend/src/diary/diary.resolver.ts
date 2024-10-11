// src/diary/diary.resolver.ts
import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { DiaryService } from './diary.service';
import { CreateDiaryInput } from './dto/create-diary.input';
import { Diary } from './diary.model';

@Resolver(() => Diary)
export class DiaryResolver {
  constructor(private readonly diaryService: DiaryService) {}

  @Mutation(() => Diary)
  async createDiary(
    @Args('createDiaryInput') createDiaryInput: CreateDiaryInput,
  ) {
    return this.diaryService.create(createDiaryInput);
  }
}
