import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { SummaryType } from 'src/entities/dtos';
import { SummaryFilterInput, SummaryInput } from 'src/entities/inputs';
import { ISummary } from 'src/entities/interfaces';
import { SummariesService } from 'src/services';

@Resolver()
export class SummariesResolver {
  constructor(private readonly summariesService: SummariesService) { }

  @Query(() => [SummaryType])
  async findSummarys(@Args('input') input: SummaryFilterInput): Promise<ISummary[]> {
    return this.summariesService.findAll(input);
  }

  @Query(() => SummaryType)
  async findOneSummary(@Args('input') input: SummaryFilterInput): Promise<ISummary> {
    return this.summariesService.findOne(input);
  }

  @Mutation(() => SummaryType)
  async upsertSummary(@Args('input') input: SummaryInput): Promise<ISummary> {
    return this.summariesService.upsert(input);
  }
}
