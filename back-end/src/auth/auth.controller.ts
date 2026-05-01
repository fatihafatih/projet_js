import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private readonly AuthService: AuthService) { }

    //endpoint: http://localhost:3000/auth/register
    @Post('register')
    async register(
        @Body() body: { username: string; email: string; password: string }
    ): Promise<string> {
        const { email, password, username } = body;
        return await this.AuthService.register(username, email, password);
    }
}
