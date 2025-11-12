import pool from './db.js';
import validator from "validator";
import bcrypt from 'bcryptjs'; 

export const createUser = async (email, password) => {
    if (email === ''){
        throw new Error ('Invalid email');
    }

    if(!validator.isEmail(email)){
        throw new Error('Invalid Email')

    }
     const [user] = await pool.query('SELECT * FROM  tbluser where email =?',
        [email]
    )
    if(user.length > 0){
        throw new Error('An account already created with the email')
    }
    if (password == ''){
        throw new Error('Invalid Password');
    }
    if(!validator.isStrongPassword(password)){
        throw new Error('Password too weak');
    }

    const salt = bcrypt.genSaltSync(10);
    const newPassword = bcrypt.hashSync(password,salt);

    const [newUser] = await pool.query(
        "Insert INTO tbluser(email, password) VALUES(?,?)",
        [email, newPassword]
    )
    return newUser.insertId;
}