import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { HistoricType } from 'src/entities/dtos';
import { HistoricFilterInput, HistoricInput } from 'src/entities/inputs';
import { IHistoric } from 'src/entities/interfaces';
import { HistoricsService } from 'src/services';

@Resolver()
export class HistoricsResolver {
  constructor(private readonly historicsService: HistoricsService) { }

  @Query(() => [HistoricType])
  async findHistorics(
    @Args('input') input: HistoricFilterInput,
  ): Promise<IHistoric[]> {
    return this.historicsService.findAll(input);
  }

  @Query(() => HistoricType)
  async findOneHistoric(
    @Args('input') input: HistoricFilterInput,
  ): Promise<IHistoric> {
    return this.historicsService.findOne(input);
  }

  @Mutation(() => HistoricType)
  async createHistoric(
    @Args('input') input: HistoricInput,
  ): Promise<IHistoric> {
    return this.historicsService.upsert(input);
  }
}
