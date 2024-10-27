# BookUnstop

**BookUnstop** is a train ticket booking application that allows users to book seats in a train coach following specific rules on seat availability and booking limits. The app is built using the **MERN stack** (MongoDB, Express, React, Node.js) and is hosted on **Render**.

## Live Deployment 
-- [Deployment](https://bookunstop-v1.onrender.com/)


## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [API Endpoints](#api-endpoints)
- [Future Improvements](#future-improvements)

## Features

- **User-friendly Booking Interface**: Book seats easily within the intuitive UI.
- **Booking Summary**: Displays a summary of booked seats.
- **Error Handling**: Provides helpful messages if issues occur, such as server timeout on the free-tier Render platform.
- **Toast Notifications**: Success and error notifications using `react-hot-toast`.

## Technologies Used

- **Frontend**: React.js, Axios, CSS (for custom styling)
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Notifications**: `react-hot-toast`
- **Hosting**: Render

## Note on Free-Tier Hosting
- The app's backend is hosted on Render’s free tier, which may require a few seconds to start if inactive. A popup modal is implemented to inform users to wait or refresh if the seat map takes time to load.

## Future Improvements
- **In-memory Caching**: Use Redis for efficient seat availability checking.
- **User Authentication**: Implement secure user login.
- **Concurrency Management**: Allow concurrent seat booking while preventing double-booking.
- **Enhanced Booking Summary**: Display detailed information for each booking.


