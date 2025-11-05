import * as StudentModel from '../models/StudentModels.js';

export const fetchStudents = async (req, res) => {
    try {
        const student = await StudentModel.getStudent();
        res.status(200).json({success: true, messsage: student});
    }catch (e){
        console.log(e);
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })
    }
}

export const createStudents = async (req, res) => {
    const {srcode, name, course } = req.body;
    try {
        const insertId = await StudentModel.insertStudents(srcode, name, course);
        res.status(200).json({success: true, message: insertId})
    } catch (e) {
        console.log(e);
        res.status(500).json({success: false, message: "Internal Server Error"});
    }
}

export const editStudents = async (req,res) =>{
    const {srcode, name, course} = req.body;
    const {studentsId}= req.params;

    try{
        const updateId = await StudentModel.updateBook(srcode, name, course, studentId);
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

export const deleteStudents = async(req,res)=>{

    const {studentId}= req.params;

    try{
        const deleteID = await StudentModel.deleteBook(studentId);
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

