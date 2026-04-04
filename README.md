Guess the Capital - IBM Full Stack Developer Project

This repository contains the project for the IBM Full Stack Software Developer Professional Certificate on Coursera. The application is an interactive geography quiz designed to demonstrate proficiency in frontend development and cloud-native deployment strategies.

Project Overview
The application challenges users to identify the correct capital of a randomly selected country from four multiple-choice options. It features dynamic data loading and immediate visual feedback based on user interaction.

Core Technologies
Frontend: HTML5, CSS3, and Bootstrap 5 for responsive UI design.
Logic: JavaScript and jQuery for DOM manipulation and game mechanics.
Data Management: Asynchronous data fetching from a local data.json repository.
DevOps and Infrastructure: Docker containerization using an Nginx base image.
Cloud Deployment: Optimized for IBM Cloud Code Engine and hosted via GitHub Pages.

Technical Implementation
The core logic resides in script.js, which utilizes the Fetch API to retrieve country data. The application randomly shuffles the correct answer with three distractors to ensure a unique experience in every round.

Containerization with Docker
The project is fully containerized to ensure environment parity across different stages of the development lifecycle.

Build and Run Instructions

Build the image: docker build -t guess-the-capital .

Run the container: docker run -p 8080:80 guess-the-capital

Access the app: Navigate to http://localhost:8080 in your browser.

## Live Demo
The live version of this project is available at the following URL:https://andreea-popa13.github.io/Guess-the-capital/





















