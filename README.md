# News App

[![News App](https://img.shields.io/badge/Visit-News%20App-blue)](https://news-page-4ceda.web.app/)


## Description

The News App is a simple web application that allows users to fetch and view the latest news articles based on search keywords, country, and category. It leverages the GNews API to provide real-time news updates and is built using React for the frontend and Node.js with Express for the backend.

## Features

- **Search Functionality**: Users can search for news articles using keywords.
- **Filter Options**: Articles can be filtered by country and category.
- **Responsive Design**: The app is designed to be fully functional on both mobile and desktop devices.
- **No Pagination**: Articles are displayed without pagination to simplify the user experience.

## Technologies Used

- **Frontend**: React
- **Backend**: Node.js with Express
- **API**: GNews API
- **Styling**: CSS

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/News-App.git

2. Navigate to the Project Directory:

   ```bash
   cd News-App

3. Install Frontend Dependencies:

   ```bash
   cd frontend
   npm install

4. Install Backend Dependencies:

   ```bash
   cd ../backend
   npm install

## Set Up Environment Variables

Create a .env file in both the frontend and backend directories with the following variables:

- For Frontend:

  ```bash
  REACT_APP_API_BASE_URL=https://your-api-url.com

- For Backend:

  ```bash
  GNEWS_API_KEY=your_gnews_api_key

## Running the Application

1. Start the Backend Server:

   ```bash
   cd backend
   npm start

2. Start the Frontend Development Server:

   ```bash
   cd ../frontend
   npm start



