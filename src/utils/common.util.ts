import bcrypt from 'bcryptjs';

export interface MetaObj {
    [key: string]: string | number;
}

export const structureResponse = (body: any, success: boolean, message: string) => {
    return {
        header: {
            success,
            message
        },
        body: body
    }
};

export const hashPassword = async (password:string) => {
    
    if (password) {
        return await bcrypt.hash(password, 8);
    };

    return null
};