# School ERP System

This is a School ERP system built using Node.js that allows for role-based authentication and token-based authentication. The system provides functionality for managing teachers, students, and profiles with role-specific permissions. 

## Features

### Authentication
- **Token-Based Authentication**: JWT (JSON Web Token) used for authentication.
- **Role-Based Authentication**: Differentiates access control for Admin, Teacher, and Student roles.

### Admin Features
- **Manage Teachers**: 
  - Add, Update, Delete teachers
- **Manage Students**: 
  - Add, Update, Delete students

### Teacher Features
- **Manage Students**: 
  - Add, Update, Delete students
- **View Profile**: View teacher's own profile and student profiles they are assigned to.

### Student Features
- **View Profile**: Students can view their own profile only.

### Access Control
- **Admin Role**: Full access to manage teachers and students.
- **Teacher Role**: Can view own profile and assigned student profiles.
- **Student Role**: Can only view their own profile.

## Requirements

- Node.js (version >= 14.x.x)
- MongoDB (or any database of your choice)
- Postman or similar tool for API testing

## Installation

1. Clone this repository:

```bash
git clone https://github.com/nilesh-paradva/School-ERP-node-js.git

```
2. Navigate into the project directory:

```bash
cd School-ERP-node-js

```
3. Install dependencies:

```bash
npm install
```
4. Run:

```bash
npm run dev
