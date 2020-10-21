import { Field, Int, ObjectType, InputType } from "@nestjs/graphql";

@ObjectType()
export class Job {
    @Field(() => Int)
    id: number
    
    @Field({nullable: false})
    name: string
    
    @Field({nullable: true})
    monthlyPay?: number
}

@InputType()
export class CreateJob {
    @Field(() => String, {nullable: false})
    name: string
    
    @Field(() => Int, {nullable: true})
    monthlyPay?: number
}
