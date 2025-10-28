import { QueryResult } from 'pg';
import db from '../../database';

export interface IUser {
    id?: number;
    name: string;
    email: string;
    age?: number;
    class?: number;
    section: string;
    created_at?: Date;
}

export class UserModel {
    static async findAll(): Promise<IUser[]> {
        const result: QueryResult<IUser> = await db.query(
            'SELECT * FROM users WHERE status=1 ORDER BY id DESC'
        );
        return result.rows;
    }

    static async findById(id: number): Promise<IUser | null> {
        const result: QueryResult<IUser> = await db.query(
            'SELECT * FROM users WHERE id=$1 AND status=1',
            [id]
        );
        return result.rows[0] || null;
    }

    static async create(user: IUser): Promise<IUser> {
        const result: QueryResult<IUser> = await db.query(
            `INSERT INTO users (name,email,age,class,section) 
             VALUES ($1,$2,$3,$4,$5) RETURNING *`,
            [user.name, user.email, user.age, user.class, user.section]
        );
        return result.rows[0];
    }

    static async update(id: number, user: IUser): Promise<boolean> {
        const result: QueryResult = await db.query(
            `UPDATE users 
             SET name=$1,email=$2,age=$3,class=$4,section=$5 
             WHERE id=$6 AND status=1`,
            [user.name, user.email, user.age, user.class, user.section, id]
        );
        return result.rowCount! > 0;
    }

    static async delete(id: number): Promise<boolean> {
        const result: QueryResult = await db.query(
            'UPDATE users SET status=0 WHERE id=$1',
            [id]
        );
        return result.rowCount! > 0;
    }
}
