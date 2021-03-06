import {Field, Int, ObjectType, InputType, Directive} from "@nestjs/graphql";
import {Job} from "../../job/models/job.model";

@ObjectType()
export class Friend {
    @Field(() => Int)
    id: number

    @Field({nullable: false})
    firstName?: string

    @Directive('@upper')
    @Field({nullable: false})
    lastName?: string
    
    @Field({nullable: true})
    job?: Job
}

@InputType()
export class CreateFriend {
    @Field(() => String, {nullable: false})
    firstName: string
    
    @Field(() => String, {nullable: false})
    lastName: string
    
    @Field(() => Int, {nullable: true})
    jobId?: number
}
