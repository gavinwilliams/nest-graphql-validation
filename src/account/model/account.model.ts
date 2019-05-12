import { Field, ObjectType, ID } from 'type-graphql';

@ObjectType({ description: 'An account contains teams, projects and invoices' })
export class Account {
  @Field(type => ID, { description: 'The ID of the account' })
  id: string;

  @Field({ description: 'The name of the account' })
  name: string;

  @Field(type => Date, {
    description: 'The date and time that the project was created',
  })
  created: Date;
}
