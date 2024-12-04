import { Injectable } from "@nestjs/common";

type UserData = { 
	name: string, 
	email: string 
}

@Injectable()
export class UserService {
  private users = [];
  private idCounter = 1;

  createUser(data: UserData) {
    if (!this.validateEmail(data.email)) {
      throw new Error('Invalid email address');
    }
    const user = { id: this.idCounter++, ...data };
    this.users.push(user);
    return user;
  }

  private validateEmail(email: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
}