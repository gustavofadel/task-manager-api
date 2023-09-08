# Task Manager API

## Overview

The Task Manager API is a solution for managing tasks using Node.js and the csv-parser library. It simplifies the process of task creation, retrieval, updating, and deletion while also providing the ability to import tasks from CSV files.

## Features

- **Create Task (POST /tasks):** Create new tasks by sending `title` and `description` in the request body. The `id`, `created_at`, `updated_at`, and `completed_at` fields are automatically generated.

- **List Tasks (GET /tasks):** Retrieve a list of all tasks or perform searches based on `title` and `description`.

- **Update Task (PUT /tasks/:id):** Update task details by `id`. Send `title` and/or `description` in the request body.

- **Delete Task (DELETE /tasks/:id):** Delete tasks by `id`.

- **Complete Task (PATCH /tasks/:id/complete):** Mark tasks as complete or not complete.

- **CSV Import:** Import tasks from CSV files asynchronously using the csv-parser library.

## Getting Started

1. Clone this repository.
2. Install the required dependencies with `npm install`.
3. Start the API with `npm run dev`.

## API Endpoints

### Create Task (POST /tasks)

- Request:
  ```json
  POST /tasks
  {
    "title": "Task Title",
    "description": "Task Description"
  }
  ```

- Response (201 Created):

### List Tasks (GET /tasks)

- Request:
  ```json
  GET /tasks
  ```

- Response (200 OK):
  ```json
  [
    {
      "id": "12345",
      "title": "Task 1",
      "description": "Description 1",
      "created_at": "2023-09-08T12:00:00Z",
      "updated_at": "2023-09-08T12:00:00Z",
      "completed_at": null
    },
    {
      "id": "67890",
      "title": "Task 2",
      "description": "Description 2",
      "created_at": "2023-09-08T13:00:00Z",
      "updated_at": "2023-09-08T13:00:00Z",
      "completed_at": null
    }
  ]
  ```

### Update Task (PUT /tasks/:id)

- Request:
  ```json
  PUT /tasks/12345
  {
    "title": "Updated Title"
  }
  ```

- Response (204 No Content):

### Delete Task (DELETE /tasks/:id)

- Request:
  ```
  DELETE /tasks/12345
  ```

- Response (204 No Content)

### Complete Task (PATCH /tasks/:id)

- Request:
  ```
  PATCH /tasks/12345
  ```

- Response (204 No Content):

---

Made with 💜 by Gustavo Fadel.
