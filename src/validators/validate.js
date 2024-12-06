const { z } = require('zod')

const studentEventSchema = z.object({
  name: z.string().min(1, 'Name is required'),

  mobile: z
    .string()
    .length(10, 'Mobile number must be exactly 10 digits') // Ensures length is exactly 10
    .regex(/^\d{10}$/, 'Mobile number must contain only digits'),
  email: z.string().email('Invalid email format'),
  // Removes leading and trailing spaces
  roll_no: z.string().min(1, 'Roll number is required'),

  college: z.string().min(1, 'College name is required'),

  section: z.string().min(1, 'Section is required'),

  event: z.array(z.string()).min(1, 'At least one event is required'), // Ensures there's at least one event
  amount: z.number()
  .min(1, 'Amount must be a positive number greater than or equal to 1') // Ensures the number is at least 1
  .refine(value => Number.isFinite(value) && value > 0, {
    message: 'Amount must be a positive float'}),// Custom error message
  status: z.string()
})

module.exports = studentEventSchema
