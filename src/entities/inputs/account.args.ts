import { ArgsType, Field } from '@nestjs/graphql';
import { ProfileTypes } from '../enums';

@ArgsType()
export class AccountArgs {
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
