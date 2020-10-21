import { Injectable } from "@nestjs/common";
import {CreateFriend, Friend} from "./models/friend.model";
import { PrismaClient } from '@prisma/client'

@Injectable()
export class FriendsService {
    private prisma: PrismaClient;

    constructor() {
      this.prisma = new PrismaClient({ log: ['query', 'info', 'warn'] })
    }

    async findOneById(id: number): Promise<Friend> {
        return await this.prisma.friend.findOne({
          select: {
            id: true,
            firstName: true,
            lastName: true
          },
          where: {
            id: id
          }
        })
    }

    async findAll(): Promise<Friend[]> {
        return await this.prisma.friend.findMany() as Friend[]
    }
    
    async create(friend: CreateFriend): Promise<Friend> {
        return await this.prisma.friend.create({
            data: {
                firstName: friend.firstName,
                lastName: friend.lastName
            },
            select: {
                id: true,
                firstName: true,
                lastName: true
            }
        })
    }
}
