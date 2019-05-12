import { Resolver, Query, Arg, Args } from 'type-graphql';
import { Account } from '../model/account.model';
import { ResolveProperty, Parent, Mutation } from '@nestjs/graphql';
import { CreateAccountInput } from '../input/create-account.input';
import { UsePipes, ValidationPipe } from '@nestjs/common';

@Resolver(of => Account)
export class AccountResolver {
  @Query(returns => Account)
  async account(@Arg('id') id: string) {
    return new Account();
  }

  @Mutation(returns => Boolean)
  async createAccount(_parent: any, @Arg('input') input: CreateAccountInput) {
    console.log(input);
    return true;
  }
}
