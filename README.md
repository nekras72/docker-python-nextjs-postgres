# Docker-Ready Application with Python Flask Backend and Next.js Frontend
This repository contains a fully Dockerized web application featuring a Python-based backend using Flask and a modern frontend built with Next.js. The setup ensures a seamless development and deployment experience, leveraging the power of Docker for containerization.

## Table of Contents
- [Project Structure](#project-structure)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [Docker Setup](#docker-setup)
- [Environment Variables](#environment-variables)
- [Database](#database)
- [Contributing](#contributing)
- [License](#license)

## Project Structure

<div class="code-block">
  <pre><code class="language-plaintext">
.
├── backend
│   ├── flask.dockerfile
│   ├── app.py
│   └── ...
├── frontend
│   ├── next.dockerfile
│   ├── pages
│   └── ...
├── docker-compose.yml
└── README.md
  </code></pre>
  <button class="copy-button" onclick="copyToClipboard(this)">Copy</button>
</div>

# Features
Next.js Frontend: A modern React framework for building fast and user-friendly web applications.
Flask Backend: A lightweight Python web framework for building robust APIs.
PostgreSQL Database: An open-source relational database for data storage.
Docker: Containerization for easy deployment and consistent environments.

# Prerequisites
Ensure you have the following installed on your machine:

Docker
Docker Compose

# Getting Started
## Installation
Clone the repository:

<div class="code-block">
  <pre><code class="language-sh">git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name</code></pre>
  <button class="copy-button" onclick="copyToClipboard(this)">Copy</button>
</div>

## Running the Application
Start the application using Docker Compose:

<div class="code-block">
  <pre><code class="language-sh">docker-compose up --build</code></pre>
  <button class="copy-button" onclick="copyToClipboard(this)">Copy</button>
</div>

This will build and start all the services defined in the docker-compose.yml file.

# Environment Variables
Ensure to configure the following environment variables:

 - NEXT_PUBLIC_API_URL: The URL for the API (Next.js frontend).
 - DATABASE_URL: The connection string for the PostgreSQL database (Flask backend).

# Database
The application uses PostgreSQL as the database. The database service is defined in the docker-compose.yml file and configured with default credentials.

# Contributing
Contributions are welcome! Please fork this repository and submit a pull request for any improvements.

# License
This project is licensed under the MIT License. See the LICENSE file for details.