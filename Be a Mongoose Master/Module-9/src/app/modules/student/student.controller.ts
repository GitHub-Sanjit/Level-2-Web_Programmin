import { Request, Response } from 'express';
import { StudentServices } from './student.service';
// import { z } from 'zod';
import studentValidationSchema from './student.validation';

// // import Joi from 'joi';
// import studentValidationSchema from './student.validation';

const createStudent = async (req: Request, res: Response) => {
  try {
    // Creating a schema validation Zod

    const { student: studentData } = req.body;

    // Data validation using Joi
    // const { error,value } = studentValidationSchema.validate(studentData);

    // data validation using zod

    const zodparsedData = studentValidationSchema.parse(studentData);

    const result = await StudentServices.createStudentIntoDB(zodparsedData);

    // if (error) {
    //   res.status(500).json({
    //     success: false,
    //     message: 'something went wrong',
    //     error: error.details,
    //   });
    // }

    res.status(200).json({
      success: true,
      message: 'Student is created successfully',
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'something went wrong',
      error: error,
    });
  }
};

const getAllStudents = async (req: Request, res: Response) => {
  try {
    const result = await StudentServices.getAllStudentsFromDB();

    res.status(200).json({
      success: true,
      message: 'Students are retrieved successfully',
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'something went wrong',
      error: error,
    });
  }
};

const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;
    const result = await StudentServices.getSingleStudentFromDB(studentId);
    // console.log(result);

    res.status(200).json({
      success: true,
      message: 'A Single Student is retrieved successfully',
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'something went wrong',
      error: error,
    });
  }
};

const deleteStudent = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;
    const result = await StudentServices.deleteStudentFromDB(studentId);
    // console.log(result);

    res.status(200).json({
      success: true,
      message: 'A Single Student is deleted successfully',
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'something went wrong',
      error: error,
    });
  }
};

export const StudentControllers = {
  createStudent,
  getAllStudents,
  getSingleStudent,
  deleteStudent,
};
