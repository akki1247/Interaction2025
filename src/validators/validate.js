const { z } = require('zod')

const studentEventSchema = z.object({
  Id: z.string().optional(), 
  Name: z.string(),
  Mobile: z.string().min(10, ' at least 10 digits').max(10, 'up to 10 digits'),
  Email: z.string().email('Invalid email address'),
  College: z.string(),
  Section: z.string(),
  Day1 :z.string(),
  Day2 :z.string(),
  Amount: z.string(),
  Country:z.string(),
  State:z.string(),
  Image: z.string(),
  Date: z.date().default(() => new Date()),
  Status: z.string(),
});

module.exports = studentEventSchema 
