const express = require("express");
const studentEventSchema = require("../validators/validate");
const { getAllStudent, createStudent } = require('../services/service');

const router = express.Router();


// Create a new student event
router.post('/add', async (req, res) => {
  try {
    const validatedData = studentEventSchema.parse(req.body);
    const student = await createStudent(validatedData);
    res.status(201).json(student);
  } catch (error) {
    console.error('Error in POST /students:', error);
    res.status(400).json({ error: error.message }); // Respond with a 400 status and error message
  }
});


// Get all student events
router.get("/see", async (req, res) => {
  try {
    const result = await getAllStudent(); // Fetch all events
    res.status(200).json( {result} ); // Send events as response
  } catch (error) {
    res.status(500).json({ error: error.message }); // Handle server errors
  }
});

module.exports = router;


/*
// Get a student event by ID
router.get("/student-events/:id", async (req, res) => {
  try {
    const result = await StudentEventService.getStudentEventById(req.params.id);
    if (result) {
      res.json(result);
    } else {
      res.status(404).json({ error: "Event not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

// Update a student event
router.put("/student-events/:id", async (req, res) => {
  try {
    const validatedData = studentEventSchema.parse(req.body);
    const result = await StudentEventService.updateStudentEvent(req.params.id, validatedData);
    res.json(result);
  } catch (error) {
    res.status(400).json({ error: error.errors || "Validation failed" });
  }
});

// Delete a student event
router.delete("/student-events/:id", async (req, res) => {
  try {
    const result = await StudentEventService.deleteStudentEvent(req.params.id);
    res.json({ message: "Event deleted successfully", result });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

*/


