import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class HistoricFilterInput {
  @Field({ nullable: true })
  readonly id: string | null;
  @Field({ nullable: true })
  readonly studentId: string | null;
}
