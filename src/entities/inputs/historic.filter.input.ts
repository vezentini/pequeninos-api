import { InputType, Field } from 'type-graphql';

@InputType()
export class HistoricFilterInput {
  @Field({ nullable: true })
  readonly id: string | null;
  @Field({ nullable: true })
  readonly studentId: string | null;
}
