import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { PassportModule } from '@nestjs/passport';
import EnvVars from './constants/EnvVars';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    PassportModule.register({ session: true }),
    ConfigModule.forRoot({ isGlobal: true, expandVariables: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: EnvVars.DatabaseUrl,
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
