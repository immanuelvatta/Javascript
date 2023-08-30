//example routes file
// importing controller file 
const JobController = require("../controllers/job.controller");

module.exports = app => {
    app.get("/api/job", JobController.findAllJobs)
    app.get("/api/job/:id", JobController.findOneJob)
    app.post("/api/job/new", JobController.createJob)
    app.put("/api/job/edit/:id", JobController.updateJob)
    app.delete("/api/job/delete/:id", JobController.deleteJob)
}