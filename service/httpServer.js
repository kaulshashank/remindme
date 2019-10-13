const http = require("http");
const notifier = require("./notifier.js");

/**
 * RemindMe Notifications server
 * @description Starts an HTTP server on port 80.
 * 
 * Returns a Promise whose resolution value is the
 * httpServer object.
 * 
 * 
 * =========================== END POINTS =============================
 * 
 * GET /reminder
 * Response status codes
 * 		If succesful: 200
 * 		If incorrect request from client: 400
 * 		If an error occured on the server: 500
 * Response body 
 * 		If succesful: should contain a JSON object of the form, { "reminders" : [ {id, task, type, duration}, ... ] }
 * 		If inccorect request from the client: { message: "Incorrect input" }
 * 		If an error occured on the server: { error: <Error object> }
 * 
 * 
 * POST /reminder
 * Response status codes
 * 		If succesful: 200
 * 		If incorrect request from client: 400
 * 		If an error occured on the server: 500
 * Response body
 * 		If succesful: should contain a JSON object of the form, { "taskId": "Some task identifier generated by the server" }
 * 		If incorrect request from client: { message: "Incorrect input" }
 * 		If an error occured on the server: { error: <Error object> }
 * 
 * 
 * DELETE /reminder: 
 * Response status codes
 * 		If succesfull: 200
 * 		If incorrect request from client: 400
 * 		If an error occured on the server: 500
 * Response body 
 * 		If succesful: should be an empty object, {}
 * 		If incorrect request from client: { message: "Incorrect input" }
 * 		If an error occured on the server: { error: <Error object> }
 * 
 * 
 * ANY OTHER *:
 * Response status code: 404
 * Response body: { "message": "Not Found." }
 * 
 * ====================================================================
 */
const run = function () { }

module.exports = run;