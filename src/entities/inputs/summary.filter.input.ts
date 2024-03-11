import { Field, ID, InputType } from 'type-graphql';

@InputType()
export class SummaryFilterInput {
  @Field(() => ID)
  readonly id: string;
  @Field(() => ID)
  readonly studentId: string;
  @Field()
  readonly date: string;
}
