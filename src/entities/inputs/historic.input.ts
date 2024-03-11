import { InputType, Field } from 'type-graphql';

@InputType()
export class HistoricInput {
  @Field()
  readonly id: string | null;
  @Field()
  readonly studentId: string | null;
  @Field(() => [String])
  readonly medications: string[];
}
