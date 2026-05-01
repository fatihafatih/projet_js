import { Injectable } from '@nestjs/common';
import { readFile, writeFile } from 'fs/promises';

@Injectable()
export class AuthService {
    private filePath = "C:/Users/pc/Desktop/projet_js/back-end/src/data/users.json"
    private users: any = [];

    async register(username: string, email: string, password: string): Promise<string> {
        let data;
        try {
            const file = await readFile(this.filePath, 'utf-8');
            data = JSON.parse(file);
        } catch (error) {
            return "erreur! "+error;
        }

        const newUser = {
            id: this.users.length+1,
            username,
            email,
            password
        };

        data.users.push(newUser);

        await writeFile(this.filePath, JSON.stringify(data, null, 2));
        return 'Utilisateur enregistré avec succès';
    }
}
