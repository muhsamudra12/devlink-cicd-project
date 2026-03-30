const express = require("express");
const app = express();

app.use(express.json());

// Basic Route
app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to Task Tracker API" });
});

// Mock Task Data
const tasks = [
  { id: 1, title: "Setup OpenShift Pipeline", status: "In Progress" },
  { id: 2, title: "Configure GitHub Actions", status: "Pending" },
];

app.get("/api/tasks", (req, res) => {
  res.status(200).json(tasks);
});

module.exports = app;
