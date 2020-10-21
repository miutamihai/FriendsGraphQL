import {Injectable} from "@nestjs/common";
import {CreateFriend, Friend} from "./models/friend.model";
import {PrismaClient} from '@prisma/client'

@Injectable()
export class FriendsService {
    private prisma: PrismaClient;

    constructor() {
        this.prisma = new PrismaClient({log: ['query', 'info', 'warn']})
    }

    findOneById = async (id: number): Promise<Friend> => await this.prisma.friend.findOne({
        where: {id},
        include: {job: true}
    })

    findAll = async (): Promise<Friend[]> => await this.prisma.friend.findMany({include: {job: true}}) as Friend[]

    create = async ({firstName, lastName, jobId}: CreateFriend): Promise<Friend> => {
        return await this.prisma.friend.create({
            data: {
                firstName,
                lastName,
                job: {
                    connect: {id: jobId}
                }
            },
            include: {job: true}
        })
    }

    delete = async (id: number): Promise<Friend> => await this.prisma.friend.delete({where: {id}, include: {job: true}})

    changeFriendJob = async (friendId: number, jobId: number) => await this.prisma.friend.update({
        where: {
            id: friendId
        },
        data: {
            job: {
                connect: {id: jobId}
            }
        },
        include: {job: true}
    })
}
