import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { StudentType } from 'src/entities/dtos';
import { StudentFilterInput, StudentInput } from 'src/entities/inputs';
import { IStudent } from 'src/entities/interfaces';
import { StudentsService } from 'src/services';

@Resolver()
export class StudentsResolver {
  constructor(private readonly studentsService: StudentsService) { }

  @Query(() => [StudentType])
  async findStudents(
    @Args('input') input: StudentFilterInput,
  ): Promise<IStudent[]> {
    return this.studentsService.findAll(input);
  }

  @Query(() => StudentType)
  async findOneStudent(
    @Args('input') input: StudentFilterInput,
  ): Promise<IStudent> {
    return this.studentsService.findOne(input);
  }

  @Mutation(() => StudentType)
  async upsertStudent(@Args('input') input: StudentInput): Promise<IStudent> {
    return this.studentsService.upsert(input);
  }
}
