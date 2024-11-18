import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    service = new UserService();
  });

  it('should create a new user', () => {
    const user = service.createUser({ name: 'John', email: 'john@example.com' });
    expect(user).toEqual({ id: expect.any(Number), name: 'John', email: 'john@example.com' });
  });

  it('should not create a user with invalid email', () => {
    expect(() => {
      service.createUser({ name: 'John', email: 'invalid-email' });
    }).toThrow('Invalid email address');
  });
});