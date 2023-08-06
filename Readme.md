# REST API

## Endpoints for Job Postings

### 1. Login/Register Operations

- **POST** `/api/signup`: Create a new user.
- **POST** `/api/login`: login a prior user.

### 2. Jobs CRUD Operations

- **GET** `/jobs`: Get a list of all job postings.
- **GET** `/jobs/:id`: Get details of a specific job posting.
- **POST** `/jobs`: Create a new job posting.
- **PUT** `/jobs/:id`: Update all fields of a specific job posting.
- **DELETE** `/jobs/:id`: Delete a specific job posting.

### 3. Jobs Search

- **GET** `/jobs/search/categories/:category`: Search all jobs based on category.
- **GET** `/jobs/search/locations/:location`: Search all jobs based on location.
- **GET** `/jobs/search/titles/:title`: Search all jobs based on title.

### 4. Suggest Domestic Jobs

- **GET** `/jobs/suggest/categories`: Get all the suggested category names in which jobs can be found.
- **GET** `/jobs/suggest/categories/:category`: Get all the suggested jobs from the selected category name.

---
