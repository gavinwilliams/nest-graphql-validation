import { Module } from '@nestjs/common';
import { AccountResolver } from './resolver/account.resolver';

@Module({
  providers: [AccountResolver],
})
export class AccountModule {}
