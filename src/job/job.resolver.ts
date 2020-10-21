import {Args, Int, Query, Mutation, Resolver} from "@nestjs/graphql";
import {Job, CreateJob} from "./models/job.model";
import {JobService} from "./job.service";

@Resolver(() => Job)
export class JobResolver {
    constructor(
        private jobService: JobService
    ) {}
    
    @Query(() => [Job], {name: 'jobs'})
    async getMany(){
        return await this.jobService.findAll()
    }
    
    @Query(() => Job, {name: 'job'})
    async getOne(@Args('id', {type: () => Int}) id: number) {
        return this.jobService.findOneById(id)
    }
    
    @Mutation(() => Job, {name: 'createJob'})
    async create(@Args('job', {type: () => CreateJob}) job: Job) {
        return this.jobService.create(job)
    }
    
    @Mutation(() => Job, {name: 'deleteJob'})
    async delete(@Args('id', {type: () => Int}) id: number) {
        return this.jobService.delete(id)
    }
}
