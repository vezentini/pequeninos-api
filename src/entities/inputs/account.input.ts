import { InputType, Field } from 'type-graphql';
import { ProfileTypes } from '../enums';

@InputType()
export class AccountInput {
  @Field()
  readonly id: string | null;
  @Field()
  readonly name: string;
  @Field()
  readonly username: string;
  @Field()
  readonly password: string;
  @Field()
  readonly phone: string;
  @Field()
  readonly document: string;
  @Field(() => [String])
  readonly studentIds: string[];
  @Field(() => ProfileTypes)
  readonly profile: ProfileTypes;
}
