import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { LoginModule } from './login/login.module';

@Module({
  imports: [
		MongooseModule.forRoot('mongodb://localhost/nest-tdd', {
			dbName: 'nest-tdd'
		}),
		LoginModule,
	],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}