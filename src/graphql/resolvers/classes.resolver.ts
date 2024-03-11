import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ClassType } from 'src/entities/dtos';
import { ClassFilterInput, ClassInput } from 'src/entities/inputs';
import { IClass } from 'src/entities/interfaces';
import { ClassesService } from 'src/services';

@Resolver()
export class ClassesResolver {
  constructor(private readonly studentsService: ClassesService) { }

  @Query(() => [ClassType])
  async findClasses(@Args('input') input: ClassFilterInput): Promise<IClass[]> {
    return this.studentsService.findAll(input);
  }

  @Query(() => [ClassType])
  async findOneClass(@Args('input') input: ClassFilterInput): Promise<IClass> {
    return this.studentsService.findOne(input);
  }

  @Mutation(() => ClassType)
  async upsertClass(@Args('input') input: ClassInput): Promise<IClass> {
    return this.studentsService.upsert(input);
  }
}
