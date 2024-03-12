import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class HistoricInput {
  @Field()
  readonly id: string | null;
  @Field()
  readonly studentId: string | null;
  @Field(() => [String])
  readonly medications: string[];
}
