import db from '../../config/database';

export interface IUser {
    id?: number;
    name: string;
    email: string;
    age?: number;
    class?:number;
    section:string;
    created_at?: Date;
}

export class UserModel {
    static async findAll(): Promise<IUser[]> {

        const [rows] = await db.query('SELECT * FROM users WHERE status=1 order by id desc');
        return rows as IUser[];
    }

    static async findById(id: number): Promise<IUser | null> {
        const [rows] = await db.query('SELECT * FROM users WHERE id = ?', [id]);
        const users = rows as IUser[];
        return users[0] || null;
    }


    //4th step Start from here
    static async create(user: IUser): Promise<number> {
        const [result] = await db.query(
            'INSERT INTO users (name, email, age, class, section) VALUES (?, ? , ?, ?, ?)',
            [user.name, user.email, user.age, user.class, user.section]
        );
        return (result as any).insertId;
    }

    static async update(id: number, user: IUser): Promise<boolean> {
        const [result] = await db.query(
            'UPDATE users SET name = ?, email = ? WHERE id = ?',
            [user.name, user.email, id]
        );
        return (result as any).affectedRows > 0;
    }


    static async delete(id: number): Promise<boolean> {
        const [result] = await db.query('UPDATE users SET status=0 WHERE id = ?', [id]);
        return (result as any).affectedRows > 0;
    }

}