import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePostInput } from './dto/create-post.input';
import { UpdatePostInput } from './dto/update-post.input';
import { Post } from '../post/entities/post.entity'; // Postエンティティをインポート（必要に応じて）

@Injectable()
export class PostService {
  constructor(private prisma: PrismaService) {}

  async findByUserId(userId: number): Promise<Post[]> {
    return this.prisma.post.findMany({
      where: { userId: userId },
    });
  }

  // 新しいポストを作成する
  async create(createPostInput: CreatePostInput): Promise<Post> {
    return this.prisma.post.create({
      data: {
        imageUrl: createPostInput.imageUrl,
        userId: createPostInput.userId,
      },
    });
  }

  // すべてのポストを取得する
  async findAll(): Promise<Post[]> {
    return this.prisma.post.findMany();
  }

  // 特定のポストをIDで取得する
  async findOne(id: number): Promise<Post | null> {
    return this.prisma.post.findUnique({
      where: { id },
    });
  }

  // 特定のポストをIDで更新する
  async update(id: number, updatePostInput: UpdatePostInput): Promise<Post> {
    return this.prisma.post.update({
      where: { id },
      data: {
        imageUrl: updatePostInput.imageUrl,
        userId: updatePostInput.userId,
      },
    });
  }

  // 特定のポストをIDで削除する
  async remove(id: number): Promise<Post> {
    return this.prisma.post.delete({
      where: { id },
    });
  }
}
