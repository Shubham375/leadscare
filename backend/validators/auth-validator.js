const {z} = require("zod");

const emailSchema = z.object({
    

    email:z
    .string({required_error:"Email is required"})
    .trim()
    .email({message:"Invalid Email"})
    .min(3,{message:"Name must be atleast of 3 characters"}),

   

    password:z
    .string({required_error:"Password is required"})
    .trim()
    .min(8,{message:"Password must be atleast of 8 characters"}),
});

const detailsSchema = z.object({
    fristname:z
    .string({required_error:"Name is required"})
    .trim()
    .min(3,{message:"Frist Name must be atleast of 3 characters"}),

    lastname:z
    .string({required_error:"Last Name is required"})
    .trim()
    .min(3,{message:"Name must be atleast of 3 characters"}),

    number:z
    .string({required_error:"Phone number is required"})
    .trim()
    .min(10,{message:"Phone number must be atleast of 10 digit"}),

    age:z
    .string({required_error:"age is required"}),

    gender:z
    .string({required_error:"Gender is required"})
})

module.exports = {emailSchema,detailsSchema};