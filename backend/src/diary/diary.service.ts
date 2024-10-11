// src/diary/diary.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateDiaryInput } from './dto/create-diary.input';

@Injectable()
export class DiaryService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createDiaryInput: CreateDiaryInput) {
    return this.prisma.diary.create({
      data: {
        diaryUrl: createDiaryInput.diaryUrl,
      },
    });
  }
}
