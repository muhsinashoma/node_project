import { IUser, UserModel } from '../models/UserModel';

export class UserService {
    static async getAllUsers(): Promise<IUser[]> {
        return await UserModel.findAll();
    }

    static async getUserById(id: number): Promise<IUser | null> {
        return await UserModel.findById(id);
    }

    static async createUser(userData: IUser): Promise<IUser> {
        return await UserModel.create(userData);
    }

    static async updateUser(id: number, userData: IUser): Promise<boolean> {
        return await UserModel.update(id, userData);
    }

    static async deleteUser(id: number): Promise<boolean> {
        return await UserModel.delete(id);
    }
}
