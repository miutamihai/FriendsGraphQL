import { Injectable } from "@nestjs/common";
import {CreateFriend, Friend} from "./models/friend.model";
import { PrismaClient } from '@prisma/client'

@Injectable()
export class FriendsService {
    private prisma: PrismaClient;

    constructor() {
      this.prisma = new PrismaClient({ log: ['query', 'info', 'warn'] })
    }

    findOneById = async (id: number): Promise<Friend> => await this.prisma.friend.findOne({ where: { id } })
    
    findAll = async () : Promise<Friend[]> => await this.prisma.friend.findMany() as Friend[]
    
    create = async ({ ...data }: CreateFriend): Promise<Friend> => await this.prisma.friend.create({ data })
    
    delete = async (id: number): Promise<Friend> => await this.prisma.friend.delete({ where: { id } })
}
