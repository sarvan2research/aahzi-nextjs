import { z, number, string} from 'zod';

const formSchema = z.object({
    mobileNumber: string().refine((value) => /^\d{10}$/.test(value), {
      message: "Please Enter a valid 10 digit number",
    }),
    physicsMarks: number().refine((value) => value >= 0 && value <= 100, {
      message: "Please enter valid marks for physics (0-100).",
    }),
    chemistryMarks: number().refine((value) => value >= 0 && value <= 100, {
      message: "Please enter valid marks for chemistry (0-100).",
    }),
    mathsMarks: number().refine((value) => value >= 0 && value <= 100, {
      message: "Please enter valid marks for maths (0-100).",
    }),
    collegeName: string().min(1, "Please enter the name of your college."),
  });
  
  export default formSchema;