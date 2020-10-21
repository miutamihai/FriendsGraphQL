import { Injectable } from "@nestjs/common";
import {Job, CreateJob} from "./models/job.model";
import { PrismaClient } from "@prisma/client";

@Injectable()
export class JobService {
    private prisma: PrismaClient
    
    constructor() {
        this.prisma = new PrismaClient({ log: ['query', 'info', 'warn'] })
    }
    
    findOneById = async (id: number): Promise<Job> => await this.prisma.job.findOne({where: {id}})
    
    findAll = async (): Promise<Job[]> => await this.prisma.job.findMany() as Job[]
    
    create = async ({...data}: CreateJob): Promise<Job> => await this.prisma.job.create({ data })
    
    delete = async (id: number): Promise<Job> => await this.prisma.job.delete({where: {id}})
}
