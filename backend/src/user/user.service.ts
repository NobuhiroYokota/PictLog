import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { User } from './user.entity'

@Injectable()
export class UserService {
    constructor(private prisma: PrismaService){}

 
    findAll(): Promise<User[]> {
        return this.prisma.user.findMany({
          include: { posts: true }, // postsを含める
        });
      }

      findOne(id: number): Promise<User | null> {
        return this.prisma.user.findUnique({
          where: { id },
          include: { posts: true }, // postsを含める
        });
      }

      async findPostsByUserId(userId: number) {
        return this.prisma.post.findMany({
          where: { userId },
        });
    }
}
