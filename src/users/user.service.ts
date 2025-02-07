// src/services/UserService.ts
import { PrismaClient } from '@prisma/client';
import { IUser } from './user.entity';

class UserService {
  private prismaService: PrismaClient;

  constructor() {
    this.prismaService = new PrismaClient();
  }

  // Create a new user
  async createUser(username: string, email: string, password: string): Promise<IUser> {
    try {
      return await this.prismaService.user.create({
        data: {
          username,
          email,
          password, // In a production environment, you should hash the password
        },
      });
    } catch (error) {
      console.error('Error creating user:', error);
      throw new Error('Unable to create user');
    }
  }

  // Get all users with pagination
  async getAllUsers(page: String = "1", limit: String = "10"): Promise<IUser[]> {
    try {
      return await this.prismaService.user.findMany({
        // skip: Number(page - 1) * Number(limit),
        // take: Number(limit),
      });
    } catch (error) {
      console.error('Error fetching users:', error);
      throw new Error('Unable to fetch users');
    }
  }

  // Get a single user by username
  async getUserByUsername(username: string): Promise<IUser | null> {
    try {
      return await this.prismaService.user.findUnique({
        where: { username },
      });
    } catch (error) {
      console.error('Error fetching user:', error);
      throw new Error('Unable to fetch user');
    }
  }

  // Update user details
  async updateUser(username: string, email: string, password: string): Promise<IUser> {
    try {
      return await this.prismaService.user.update({
        where: { username },
        data: {
          email,
          password, // In a production environment, you should hash the password
        },
      });
    } catch (error) {
      console.error('Error updating user:', error);
      throw new Error('Unable to update user');
    }
  }

  // Delete a user by username
  async deleteUser(username: string): Promise<IUser> {
    try {
      return await this.prismaService.user.delete({
        where: { username },
      });
    } catch (error) {
      console.error('Error deleting user:', error);
      throw new Error('Unable to delete user');
    }
  }
}

export default UserService;
