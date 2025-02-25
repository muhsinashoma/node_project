import { Request, Response } from 'express';
import { UserModel, IUser } from '../models/User';

export class UserController {
    // Get all users
    static async getAll(req: Request, res: Response) {
        try {
            const users = await UserModel.findAll();
            res.render('users/index', { users });
        } catch (error) {
            res.status(500).render('error', { error: 'Failed to fetch users' });
        }
    }

    // Show single user
    static async show(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id);
            const user = await UserModel.findById(id);
            if (user) {
                res.render('users/show', { user });
            } else {
                res.status(404).render('error', { error: 'User not found' });
            }
        } catch (error) {
            res.status(500).render('error', { error: 'Failed to fetch user' });
        }
    }

    // Show create form
    static createForm(req: Request, res: Response) {
        res.render('users/create');
    }



    // Create user                 //3rd start from here

    static async create(req: Request, res: Response) {
        try {
            const user: IUser = {
                name: req.body.name,
                email: req.body.email
            };
            await UserModel.create(user);
            res.redirect('/users');
        } catch (error) {
            res.status(500).render('error', { error: 'Failed to create user' });
        }
    }

    // Show edit form
    static async editForm(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id);
            const user = await UserModel.findById(id);
            if (user) {
                res.render('users/edit', { user });
            } else {
                res.status(404).render('error', { error: 'User not found' });
            }
        } catch (error) {
            res.status(500).render('error', { error: 'Failed to fetch user' });
        }
    }

    // Update user
    static async update(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id);
            const user: IUser = {
                name: req.body.name,
                email: req.body.email
            };
            const success = await UserModel.update(id, user);
            if (success) {
                res.redirect('/users');
            } else {
                res.status(404).render('error', { error: 'User not found' });
            }
        } catch (error) {
            res.status(500).render('error', { error: 'Failed to update user' });
        }
    }

    // Delete user
    static async delete(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id);
            await UserModel.delete(id);
            res.redirect('/users');
        } catch (error) {
            res.status(500).render('error', { error: 'Failed to delete user' });
        }
    }
}