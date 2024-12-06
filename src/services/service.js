const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Function to fetch all student events
const getAllStudent = async () => {
  try {
    return await prisma.register.findMany(); // Fetches all student events
  } catch (error) {
    console.error("Error fetching student events:", error); // Log error for debugging
    throw new Error("Unable to fetch student events"); // Throw a custom error message
  }
};

const createStudent = async (data) => {
  try {
    // Creating a new student record in the Register table
    const student = await prisma.register.create({
      data,
    });
    return student; // Return the created student
  } catch (error) {
    console.error('Error inserting student events:', error); // Log error for debugging
    throw new Error(`Unable to insert student events: ${error.message}`); // Custom error message with context
  }
};
// Export the function to be used in other files
module.exports = {getAllStudent, createStudent };
 


 /*
  static async getStudentEventById(id) {
    return await prisma.Registration.findUnique({ where: { id } });
  }

  static async updateStudentEvent(id, data) {
    return await prisma.Registration.update({ where: { id }, data });
  }

  static async deleteStudentEvent(id) {
    return await prisma.Registration.delete({ where: { id } });
  }*/

