const { z } = require('zod')

const studentEventSchema = z.object({
  id: z.string().optional(), 
  name: z.string(),
  mobile: z.string().min(10, ' at least 10 digits').max(10, 'up to 10 digits'),
  email: z.string().email('Invalid email address'),
  college: z.string(),
  section: z.string(),
  event: z.record(z.array(z.string())), 
  amount: z.string(),
  country:z.string(),
  state:z.string(),
  image: z.string(),
  date: z.date().default(() => new Date()),
  status: z.string(),
});

module.exports = studentEventSchema 
