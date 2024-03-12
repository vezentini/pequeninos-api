import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class ClassInput {
  @Field(() => ID)
  readonly id: string;
  @Field()
  readonly name: string;
}
