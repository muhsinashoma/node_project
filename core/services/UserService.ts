// core/services/UserService.ts
import { IUser, UserModel } from '../models/User';

export class UserService {
    static async getAllUsers(): Promise<IUser[]> {
        // Business logic here (filtering, validation, etc.)
        return UserModel.findAll();
    }

    static async getUserById(id: number): Promise<IUser | null> {
        // Validation and business logic
        if (id <= 0) throw new Error('Invalid user ID');
        return UserModel.findById(id);
    }

    static async createUser(userData: IUser): Promise<number> {
        // Validation
        if (!userData.email || !userData.name) {
            throw new Error('Name and email are required');
        }

        // Business logic - e.g., email validation
        if (!this.isValidEmail(userData.email)) {
            throw new Error('Invalid email format');
        }

        return UserModel.create(userData);
    }

    static async updateUser(id: number, userData: IUser): Promise<boolean> {
        // Similar validation and business logic
        if (id <= 0) throw new Error('Invalid user ID');
        if (!userData.email || !userData.name) {
            throw new Error('Name and email are required');
        }

        return UserModel.update(id, userData);
    }

    static async deleteUser(id: number): Promise<boolean> {
        if (id <= 0) throw new Error('Invalid user ID');
        return UserModel.delete(id);
    }

    private static isValidEmail(email: string): boolean {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
}