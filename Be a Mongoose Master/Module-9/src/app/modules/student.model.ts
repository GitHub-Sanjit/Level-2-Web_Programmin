/* eslint-disable @typescript-eslint/no-this-alias */
import { Schema, model } from 'mongoose';
import validator from 'validator';
import bcrypt from 'bcrypt';
import {
  TGuardian,
  TLocalGuardian,
  TStudent,
  // StudentMethods,
  StudentModel,
  TUserName,
} from './student/student.interface';
import config from '../config';
// import studentValidationSchema from './student/student.validation';

// 2. Create a Schema corresponding to the document interface.

const userNameSchema = new Schema<TUserName>({
  firstName: {
    type: String,
    required: [true, 'FirstName is Required'],
    trim: true,
    maxlength: [20, 'FirstName cannot be more than 20 character'],
    validate: {
      validator: function (value: string) {
        const firstNameStr = value.charAt(0).toUpperCase() + value.slice(1);
        return firstNameStr === value;
      },
      message: '{VALUE} is Not in Capitalize format',
    },
  },
  middleName: { type: String, trim: true },
  lastName: {
    type: String,
    trim: true,
    required: [true, 'LastName is Required'],
    validate: {
      validator: (value: string) => validator.isAlpha(value),
      message: '{VALUE} is Not Valid',
    },
  },
});

const guardianSchema = new Schema<TGuardian>({
  fatherName: { type: String, required: true },
  fatherOccupation: { type: String, required: true },
  fatherContactNo: { type: String, required: true },
  motherName: { type: String, required: true },
  motherOccupation: { type: String, required: true },
  motherContactNo: { type: String, required: true },
});

const localGuardianSchema = new Schema<TLocalGuardian>({
  name: { type: String, required: true },
  occupation: { type: String, required: true },
  contactNo: { type: String, required: true },
  address: { type: String, required: true },
});

const studentSchema = new Schema<TStudent, StudentModel>(
  {
    id: { type: String, required: true, unique: true },
    password: {
      type: String,
      required: [true, 'Password is required'],
      maxlength: [20, 'Password can not be more than 20 characters'],
    },
    name: {
      type: userNameSchema,
      required: true,
    },
    gender: {
      type: String,
      enum: {
        values: ['male', 'female', 'other'],
        message: '{VALUES} is not supported/valid',
      },
      required: true,
    },
    dateOfBirth: { type: String },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: (value: string) => validator.isEmail(value),
        message: '{VALUE} is not valid Email Type',
      },
    },
    contactNo: { type: String, required: true },
    emergencyContactNo: { type: String, required: true },
    bloodGroup: {
      type: String,
      enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
    },
    presentAddress: { type: String, required: true },
    permanentAddress: { type: String, required: true },
    guardian: { type: guardianSchema, required: true },
    localGuardian: { type: localGuardianSchema, required: true },
    profileImg: { type: String },
    isActive: { type: String, enum: ['active', 'blocked'], default: 'active' },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
  },
);


// Virtual..
studentSchema.virtual('fullName').get(function () {
  return `${this.name.firstName} ${this.name.middleName} ${this.name.lastName}`;
});

// Pre save middleware/ hook : will work on create() or save()
studentSchema.pre('save', async function (next) {
  // console.log(this, 'Pre hook, we will save the data');
  // hashing password and save into DB
  const user = this; //doc
  user.password = await bcrypt.hash(
    user.password,
    Number(config.bcrypt_salt_rounds),
  );
  next();
});



// Post save middleware / hook: will work on create() or save()
studentSchema.post('save', function (doc, next) {
  // console.log(this, 'Post hook, we did save the data');
  doc.password = '';

  next();
});

// Query Middleware

studentSchema.pre('find', function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});

studentSchema.pre('findOne', function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});

// [ { '$match': { isDeleted: true } },{ '$match': { id: '123459' } } ]
studentSchema.pre('aggregate', function (next) {
  this.pipeline().unshift({ $match: { isDeleted: { $ne: true } } });
  next();
});

// Creating a custom static method
studentSchema.statics.isUserExists = async function (id: string) {
  const existingUser = await Student.findOne({ id });

  return existingUser;
};

//    Creating a custom instance method.....
// studentSchema.methods.isUserExists = async function (id: string) {
//   const existingUser = await Student.findOne({ id });
//   return existingUser;
// }

export const Student = model<TStudent, StudentModel>('Student', studentSchema);
