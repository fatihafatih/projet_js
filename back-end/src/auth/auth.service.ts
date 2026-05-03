import { Injectable } from '@nestjs/common';
import { readFile, writeFile } from 'fs/promises';
import * as path from 'path';

@Injectable()
export class AuthService {
    private filePath = path.join(process.cwd(), 'src/data', 'users.json');
    private users: any = [];

    async register(username: string, email: string, password: string): Promise<string> {
        let data;
        try {
            const file = await readFile(this.filePath, 'utf-8');
            data = JSON.parse(file);
        } catch (error) {
            return "erreur! " + error;
        }

        const user = data.users.find(
            (u: any) => u.email === email
        );
        if (user) {
            return 'email deja utilise! '
        }

        const newUser = {
            id: data.users.length + 1,
            nom:username,
            email,
            motDePasse:password,
            avatar:"IN"
        };
        data.users.push(newUser);
        await writeFile(this.filePath, JSON.stringify(data, null, 2));
        return 'Utilisateur enregistré avec succès';
    }

    async login(email: string, password: string) {
        let data;
        try {
            const file = await readFile(this.filePath, 'utf-8');
            data = JSON.parse(file);
        } catch (error) {
            return {
                message: "erreur! " + error,
                user: null
            }
                ;
        }
        const user = data.users.find(
            (u: any) => u.email === email && u.motDePasse === password
        );

        if (!user) {
            return {
                message: "Email ou mot de passe incorrect",
                user
            };
        }
        return {
            message: `Bienvenue ${user.nom} !`,
            user
        };
    }


}
