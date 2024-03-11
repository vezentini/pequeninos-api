import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
export class HistoricType {
  @Field(() => ID)
  readonly id: string;
  @Field(() => ID)
  readonly studentId: string;
  @Field(() => [String])
  readonly medications: string[];
}
