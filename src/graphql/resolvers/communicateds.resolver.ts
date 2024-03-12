import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CommunicatedType } from 'src/entities/dtos';
import {
  CommunicatedFilterInput,
  CommunicatedInput,
} from 'src/entities/inputs';
import { ICommunicated } from 'src/entities/interfaces';
import { CommunicatedsService } from 'src/services';

@Resolver()
export class CommunicatedsResolver {
  constructor(private readonly communicatedsService: CommunicatedsService) { }

  @Query(() => [CommunicatedType])
  async findCommunicateds(
    @Args('input') input: CommunicatedFilterInput,
  ): Promise<ICommunicated[]> {
    return this.communicatedsService.findAll(input);
  }

  @Query(() => CommunicatedType)
  async findOneCommunicated(
    @Args('input') input: CommunicatedFilterInput,
  ): Promise<ICommunicated> {
    return this.communicatedsService.findOne(input);
  }

  @Mutation(() => CommunicatedType)
  async upsertCommunicated(
    @Args('input') input: CommunicatedInput,
  ): Promise<ICommunicated> {
    return this.communicatedsService.upsert(input);
  }
}
