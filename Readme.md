# Express MongoDB Setup with TypeScript

A starter template for building Node.js applications using Express, MongoDB, and TypeScript. This project includes features like middleware setup, database connection, scheduled tasks, and a seed script for initializing the database with dummy data.

## Features

- **Express Framework**: Simplified API routing and middleware handling.
- **MongoDB with Mongoose**: Database modeling and interaction.
- **TypeScript**: Strongly typed code for better maintainability.
- **Cron Jobs**: credit_deduct  using `node-cron`.
- **Security**: Enhanced security with `helmet`.
- **Logging**: HTTP request logging using `morgan`.
- **Database Seeding**: Scripts to insert dummy data for testing.

---

## Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v22+ recommended)
- [MongoDB](https://www.mongodb.com/)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

---

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/express-mongodb-setup.git
   cd express-mongodb-setup
   npm install
   

## **Use Case**
This project is designed to manage container uptime by:
1. Tracking the `last_ping` time of containers in the `ContainerUptime` table.
2. Deducting user credits based on container uptime from the `Credits` table.