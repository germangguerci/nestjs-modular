import { Module, Global } from '@nestjs/common';

const API_KEY = '123123123';
const API_KEY_PRODUCTION = '321321321';

@Global()
@Module({
  providers: [
    {
      provide: 'API_KEY',
      useValue:
        process.env.NODE_ENV === 'production' ? API_KEY_PRODUCTION : API_KEY,
    },
  ],
  exports: ['API_KEY'],
})
export class DatabaseModule {}
