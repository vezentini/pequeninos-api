import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class ClassFilterInput {
  @Field(() => ID, { nullable: true })
  readonly id: string | null;
  @Field({ nullable: true })
  readonly name: string | null;
}
