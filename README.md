# MERN Stack Project - Frontend Query
This project is a MERN (MongoDB, Express, React, Node.js) stack application that performs a desired query on the database when a button is clicked on the frontend.

## Installation
To install the dependencies, run the following command in the root directory:

Copy code
npm install
## Configuration
### Backend
To configure the backend, create a .env file in the root directory with the following content:

makefile
Copy code
MONGO_URI=<your_mongodb_uri>
Replace <your_mongodb_uri> with the URI of your MongoDB database.

### Frontend
To configure the frontend, create a .env file in the client directory with the following content:

arduino
Copy code
REACT_APP_API_URL=http://localhost:5000
Replace http://localhost:5000 with the URL of your backend server.

## Usage
To start the development server, run the following command in the root directory:

arduino
Copy code
npm run dev
This will start the backend server on port 5000 and the frontend server on port 3000. You can access the application by navigating to http://localhost:3000 in your web browser.

When you click the "Query Database" button on the frontend, the backend server will perform a desired query on the database and return the results to the frontend. The frontend will then display the results on the screen.

## Contributing
If you find any issues with the application, feel free to open a new issue or submit a pull request.


