# Todo API

A simple Todo API with JWT-based authentication.

## Features

- User registration and login
- JWT-based authentication
- CRUD operations for tasks
- Each user has their own set of tasks

## Technologies Used

- Node.js
- Express.js
- MongoDB (with Mongoose)
- JSON Web Tokens (JWT)
- bcrypt for password hashing

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or later)
- [MongoDB](https://www.mongodb.com/) (installed locally or use a cloud service)

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/your-username/todo-api.git
   cd todo-api
   ```

2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a .env file in the root directory and add your MongoDB and JWT configuration

## Running the Project

1. Start the MongoDB server(if using a local MongoDB instance):
   ```sh
   mongod
   ```
2. Start the Node.js server:
   ```sh
   npm start
   ```
3. The server will be running on http://localhost:3000.

## API Endpoints

### User Authentication

- **Register a new user**
- **Endpoint**: `POST /auth/register`
- **Request Body**:

```
{
  "username": "testuser",
  "password": "password123"
}
```

- **Response**:
- `201 Created`: User registered successfully.
- `400 Bad Request`: Registration failed.

- **Login a user**
- **Endpoint**: `POST /auth/login`
- **Request Body**:

```
{
  "username": "testuser",
  "password": "password123"
}
```

- **Response**:
- `200 OK`: Returns a JWT token.
- `401 Unauthorized`: Invalid credentials.

### Task Management

- **Create a new task**
- **Endpoint**: `POST /tasks`
- **Request Body**:

```
{
  "title": "Sample Task",
  "description": "This is a sample task."
}
```

- **Response**:
- `201 Created`: Task created successfully.

- **Fetch all tasks**
- **Endpoint**: `GET /tasks`
- **Response**:
- `200 OK`: Returns an array of tasks.

- **Fetch a task by ID**
- **Endpoint**: `GET /tasks/:id`
- **Response**:
- `200 OK`: Returns the task with the specified ID.
- `404 Not Found`: Task not found.

- **Update a task's status**
- **Endpoint**: `PUT /tasks/:id`
- **Request Body**:

```
{
  "status": "completed"
}
```

- **Response**:
- `200 OK`: Returns the updated task.
- `404 Not Found`: Task not found.

- **Delete a task by ID**
- **Endpoint**: `DELETE /tasks/:id`
- **Response**:
- `204 No Content`: Task deleted successfully.
- `404 Not Found`: Task not found.

## Security Considerations

- Passwords are hashed using bcrypt before being stored in the database.
- JWT tokens are used for authentication and should be kept secure.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Acknowledgements

- [Express.js](https://expressjs.com/)
- [Mongoose](https://mongoosejs.com/)
- [MongoDB](https://www.mongodb.com/)
- [JSON Web Tokens](https://jwt.io/)
