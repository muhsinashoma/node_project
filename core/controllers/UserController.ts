import { Request, Response } from 'express';
import { IUser } from '../models/UserModel';
import { UserService } from '../services/UserService';

export class UserController {

    static async getAll(req: Request, res: Response) {
        try {
            const users = await UserService.getAllUsers();
            res.json(users);
        } catch (err) {
            res.status(500).json({ error: 'Failed to fetch users' });
        }
    }

    static async show(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id);
            const user = await UserService.getUserById(id);
            if (!user) return res.status(404).json({ error: 'User not found' });
            res.json(user);
        } catch (err) {
            res.status(500).json({ error: 'Failed to fetch user' });
        }
    }

    static async create(req: Request, res: Response) {
        try {
            const user: IUser = req.body;
            const newUser = await UserService.createUser(user);
            res.status(201).json(newUser);
        } catch (err) {
            res.status(400).json({ error: 'Failed to create user' });
        }
    }

    static async update(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id);
            const success = await UserService.updateUser(id, req.body);
            if (!success) return res.status(404).json({ error: 'User not found' });
            res.json({ message: 'User updated successfully' });
        } catch (err) {
            res.status(500).json({ error: 'Failed to update user' });
        }
    }

    static async delete(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id);
            const success = await UserService.deleteUser(id);
            if (!success) return res.status(404).json({ error: 'User not found' });
            res.json({ message: 'User deleted successfully' });
        } catch (err) {
            res.status(500).json({ error: 'Failed to delete user' });
        }
    }
}
