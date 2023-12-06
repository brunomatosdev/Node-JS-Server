# Node.js CRUD Server with MongoDB

## Description

This is a Node.js server project created using Visual Studio Code. The server is designed to perform CRUD operations on a MongoDB database for managing user information.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/brunomatosdev/Node-JS-Server

    Navigate to the project directory:

    bash
   ```

cd Node-JS-Server

Install dependencies:

bash

    npm install

    Configure MongoDB:

    Update the MongoDB connection details in the config.js file.

Usage

    Start the server:

    bash

    npm start

    The server will start running on the specified port (default is 8080).

    Access the API:

    Open your web browser or use a tool like Postman to interact with the following API endpoints.

Configuration

    MongoDB Connection:

    Update the MongoDB connection details in the config.js file.

    Environment Variables:

    Customize environment variables in the .env file.

API Endpoints

1. Create a User

   Endpoint: POST /api/users
   Request Body:

   json

   {
   "name": "John Doe",
   "email": "john.doe@example.com",
   "password": "securepassword"
   }

2. Get All Users

   Endpoint: GET /api/users

3. Get User by ID

   Endpoint: GET /api/users/:id

4. Update User by ID

   Endpoint: PUT /api/users/:id
   Request Body:

   json

   {
   "name": "Updated Name",
   "email": "updated.email@example.com"
   }

5. Delete User by ID

   Endpoint: DELETE /api/users/:id

Contributing

If you would like to contribute to the project, please follow these steps:

    Fork the repository.
    Create a new branch for your feature or bug fix.
    Make your changes and submit a pull request.

License

This project is licensed under the MIT License - see the LICENSE file for details.
