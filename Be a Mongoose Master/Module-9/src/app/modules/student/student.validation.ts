import { z } from 'zod';

// Define the validation schema for userName
const userNameValidationSchema = z.object({
  firstName: z
    .string()
    .min(1, { message: 'FirstName is Required' })
    .max(20, { message: 'FirstName cannot be more than 20 characters' }),
  middleName: z.string().optional(),
  lastName: z.string().min(1),
});

// Define the validation schema for guardian
const guardianValidationSchema = z.object({
  fatherName: z.string().min(1, { message: 'Father Name is Required' }),
  fatherOccupation: z
    .string()
    .min(1, { message: 'Father Occupation is Required' }),
  fatherContactNo: z
    .string()
    .min(1, { message: 'Father Contact Number is Required' }),
  motherName: z.string().min(1, { message: 'Mother Name is Required' }),
  motherOccupation: z
    .string()
    .min(1, { message: 'Mother Occupation is Required' }),
  motherContactNo: z
    .string()
    .min(1, { message: 'Mother Contact Number is Required' }),
});

// Define the validation schema for localGuardian
const localGuardianValidationSchema = z.object({
  name: z.string().min(1, { message: 'Local Guardian Name is Required' }),
  occupation: z
    .string()
    .min(1, { message: 'Local Guardian Occupation is Required' }),
  contactNo: z
    .string()
    .min(1, { message: 'Local Guardian Contact Number is Required' }),
  address: z.string().min(1, { message: 'Local Guardian Address is Required' }),
});

// Define the validation schema for student
const studentValidationSchema = z.object({
  id: z.string().min(1, { message: 'Student ID is Required' }),
  password: z.string().min(1, { message: 'Password is Required' }).max(20),
  name: userNameValidationSchema,
  gender: z.enum(['male', 'female', 'other']),
  dateOfBirth: z.string().optional(),
  email: z.string().email({ message: '{VALUE} is not a valid email' }),
  contactNo: z.string().min(1, { message: 'Contact Number is Required' }),
  emergencyContactNo: z
    .string()
    .min(1, { message: 'Emergency Contact Number is Required' }),
  bloodGroup: z
    .enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'])
    .optional(),
  presentAddress: z.string().min(1, { message: 'Present Address is Required' }),
  permanentAddress: z
    .string()
    .min(1, { message: 'Permanent Address is Required' }),
  guardian: guardianValidationSchema,
  localGuardian: localGuardianValidationSchema,
  profileImg: z.string().optional(),
  isActive: z.enum(['active', 'blocked']).default('active'),
  isDeleted: z.boolean(),
});

export default studentValidationSchema;
