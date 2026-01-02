# User Authentication API with Bcrypt

A simple Node.js Express API demonstrating user authentication with bcrypt password hashing. This project is built for learning purposes to understand how to securely handle user passwords in a backend application.

## Features

- User registration with password hashing
- In-memory user storage (for demonstration)
- Bcrypt password hashing with salt
- RESTful API endpoints
- Input validation
- JSON request/response format

## Tech Stack

- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **Bcrypt** - Password hashing library
- **JavaScript ES6+** - Modern JavaScript features

## API Endpoints

### POST `/user`
Register a new user.

**Request Body:**
```json
{
  "userName": "john_doe",
  "email": "john@example.com",
  "password": "your_password"
}
```

**Response:**
```json
{
  "message": "User created successfully"
}
```

### GET `/user`
Retrieve all registered users.

**Response:**
```json
[
  {
    "userName": "john_doe",
    "email": "john@example.com",
    "hashedPassword": "$2b$10$..."
  }
]
```

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd <project-directory>
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
node server.js
```

The server will start on `http://localhost:5000`.

## Project Structure

```
├── server.js          # Main server file
├── package.json       # Dependencies and scripts
└── README.md          # Documentation
```

## How It Works

1. **Password Hashing**: When a user registers, their password is hashed using bcrypt with a salt round of 10
2. **Secure Storage**: Only the hashed password is stored in memory
3. **Data Validation**: All required fields are validated before processing
4. **JSON API**: All requests and responses use JSON format

## Security Features

- Passwords are never stored in plain text
- Bcrypt automatically generates and manages salts
- Input validation prevents malformed requests
- HTTP status codes indicate operation results

## Learning Points

This project demonstrates:
- How to use bcrypt for password hashing
- Creating RESTful API endpoints with Express
- Handling asynchronous operations with async/await
- Implementing input validation
- Structuring a basic Node.js backend application

## Testing the API

You can test the API using curl, Postman, or any HTTP client:

```bash
# Create a new user
curl -X POST http://localhost:5000/user \
  -H "Content-Type: application/json" \
  -d '{"userName":"testuser","email":"test@example.com","password":"securepass123"}'

# Get all users
curl http://localhost:5000/user
```

## Dependencies

- `express`: ^4.18.2
- `bcrypt`: ^5.1.1

## Future Enhancements

Potential improvements for this project:
- Add user login endpoint with password verification
- Implement persistent database storage
- Add JWT authentication
- Create user update and delete endpoints
- Add unit tests
- Implement rate limiting
- Add request logging

## License

This project is open source and available for educational purposes.

## Contributing

This is a learning project. Feel free to fork and modify for your own learning purposes.
