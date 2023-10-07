import { Request, Response, NextFunction } from 'express'
import { NewUser } from "../interfaces/IUsers"

const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const regexPassword = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

const validateNewUser = (value: string, field: string) => {
    if (!value || value.trim() === '') {
        throw new Error(`O campo "${field}" é obrigatório`);
    }
};

const validateUserData = (req: Request, res: Response, next: NextFunction) => {
    const { name, email, password }: NewUser = req.body;

    try {
        validateNewUser(name, 'name');
        if (name.length < 3) {
            throw new Error('O "name" deve ter pelo menos 3 caracteres');
        }

        validateNewUser(email, 'email');
        if (!regexEmail.test(email)) {
            throw new Error('O "email" deve ter o formato "email@email.com"');
        }

        validateNewUser(password, 'password');
        if (password.length < 6) {
            throw new Error('O "password" deve ter pelo menos 6 caracteres');
        }
        if (!regexPassword.test(password)) {
            throw new Error('O "password" deve ter pelo menos 1 letra maiúscula, 1 letra minúscula, 1 número e 1 caractere especial');
        }

        next();
    } catch (error: any) {
        return res.status(400).json({ message: error.message });
    }
};


export { validateUserData };
