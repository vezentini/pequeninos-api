import { Field, ID, InputType } from 'type-graphql';

@InputType()
export class ClassInput {
  @Field(() => ID)
  readonly id: string;
  @Field()
  readonly name: string;
}
