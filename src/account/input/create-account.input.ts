import { InputType, Field } from 'type-graphql';
import { IsDate, IsNotEmpty, IsDateString } from 'class-validator';

@InputType()
export class CreateAccountInput implements Partial<Account> {
  @IsNotEmpty()
  @Field({ description: `The name of the account` })
  name: string;

  @IsNotEmpty()
  @IsDateString()
  @Field(type => Date, {
    description: `The date and time the account was created`,
  })
  created: Date;
}
