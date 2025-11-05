import * as BookModel from '../models/BookModel.js';

export const fetchBooks = async (req, res) => {
    try {
        const books = await BookModel.getBooks();
        res.status(200).json({success: true, messsage: books});
    }catch (e){
        console.log(e);
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })
    }
}

export const createBook = async (req, res) => {
    const {tittle, genre, status } = req.body;
    try {
        const insertId = await BookModel.insertBook(tittle, genre, status);
        res.status(200).json({success: true, message: insertId})
    } catch (e) {
        console.log(e);
        res.status(500).json({success: false, message: "Internal Server Error"});
    }
}

export const editBooks = async (req,res) =>{
    const {tittle, genre, status} = req.body;
    const {bookId}= req.params;

    try{
        const updateId = await BookModel.updateBook(tittle, genre, status, bookId);
        res.status(200).json({
            success:true,
            message: updateId
        });
    }catch(e){
        console.log(e);
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
}

export const deleteBooks = async(req,res)=>{

    const {bookId}= req.params;

    try{
        const deleteID = await BookModel.deleteBook(bookId);
        res.status(200).json ({
            success:true,
            messsage: deleteID
        });
    }catch(e){
        console.log(e);
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
}

