import { Test, TestingModule } from '@nestjs/testing';
import { LoginService } from './login.service';
import { Model } from 'mongoose';
import { UserDocument } from './user.schema';

describe('LoginService', () => {
  let loginService: LoginService;
	let userModel = Model<UserDocument>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
				LoginService,
				{ provide: userModel, useValue: { findOne: jest.fn() } }
			],
    }).compile();

    loginService = module.get<LoginService>(LoginService);
  });

  //? afterEach(() => {
  //?   jest.restoreAllMocks();
  //? });

  it('should respond with user id, name and email when the login is successful', () => {

  });

	it('should return false when the user tries to log in without being registered', () => {

	});
});