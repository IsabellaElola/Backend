import pool from './db.js';

export const getBooks = async () => {
    const [rows] = await pool.query ('SELECT * FROM tblbook');
    return rows;
}

export const insertBook = async (tittle, genre, status) => {
    const [result] = await pool.query(
        'INSERT INTO tblbook (tittle, genre, status) values(?, ?, ?)',
        [tittle, genre, status] 
    );
    return result.insertId;
}

export const updateBook = async (tittle, genre, status, bookId) => {
    const [result] = await pool.query(
    "Update tblbook Set tittle=?, genre=?,status=? WHERE id=?",
    [tittle, genre, status, bookId]
    )
    return result.affectedRows;
}
export const deleteBook =  async (bookId) =>{
    const [result] = await pool.query(
    "delete from tblbook Where id=?",
    [bookId]
    )
}

