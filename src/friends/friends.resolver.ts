import {Args, Int, Query, Mutation, Resolver} from "@nestjs/graphql";
import {Friend, CreateFriend} from "./models/friend.model";
import {FriendsService} from "./friends.service";

@Resolver(()=> Friend)
export class FriendsResolver {
    constructor(
        private friendsService: FriendsService
    ) {}

    @Query(() => Friend, { name: 'friend' })
    async get(@Args('id', { type: () => Int }) id: number) {
        return this.friendsService.findOneById(id)
    }

    @Query(() => [Friend], {name: 'friends'})
    async getMany(){
        return this.friendsService.findAll();
    }
    
    @Mutation(() => Friend, {name: 'createFriend'})
    async create(@Args('friend', { type: () => CreateFriend }) friend: CreateFriend) {
        return this.friendsService.create(friend)
    }
    
    @Mutation(() => Friend, {name: 'deleteFriend'})
    async delete(@Args('id', { type: () => Int }) id: number){
        return this.friendsService.delete(id)
    }
    
    @Mutation(() => Friend, {name: 'changeFriendJob'})
    async changeFriendJob(
        @Args('friendId', {type: () => Int}) friendId: number,
        @Args('jobId', {type: () => Int}) jobId: number
    ) {
      return this.friendsService.changeFriendJob(friendId, jobId)  
    }
}
