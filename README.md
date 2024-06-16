# Dynamic Forms Application

This project demonstrates a web application built using the SQL, Express, React, and Node.js (SERN) stack. The application features dynamic forms based on user interaction, with data stored in an SQL database and synchronized with an online Excel sheet (Google Sheets).

![image](https://github.com/Krishna-Aggarwal-11/medWander/assets/146480861/6d71729e-232a-490c-87b3-c10ee8daf003)


## Installation Steps

### Backend
1. **Navigate to the main folder**:
    ```sh
    cd merWander
    ```
2. **Install dependencies**:
    ```sh
    npm install
    ```
3. **Configure your database**:
    - Open `server\model\Form.js`.
    - Update the database configuration with your database credentials.
    ```js
    const sequelize = new Sequelize('database', 'username', 'password', {
        host: 'localhost',
        dialect: 'mysql'
    });
    ```
4. **Run the backend server**:
   -Main folder terminate
    ```sh
    npm run dev
    ```

### Frontend
1. **Navigate to the frontend folder**:
    ```sh
    cd path/to/frontend
    ```
2. **Install dependencies**:
    ```sh
    npm install
    ```
3. **Run the React application**:
    ```sh
    npm run dev
    ```

## How to run the application
1. **Start the backend server**:
    ```sh
    cd medWander
    npm run dev
    ```
2. **Start the frontend React application**:
    ```sh
    cd path/to/frontend
    npm start
    ```
3. ** Backend Url**:
    ```
    http://localhost:3000
    ```
4. ** Frontend Url**:
    ```
    http://localhost:5173
    ```

## Functionality
- **Dynamic Forms**: The application features two buttons ("Form A" and "Form B"). Each button leads to a form with a heading dynamically displaying "Form A" or "Form B".
- **Form Validation**:
    - Name: Must not be empty and contain only alphabetic characters.
    - Country Code: Must be selected from a predefined list of codes.
    - Phone Number: Must be numeric and conform to the format specified by the selected country code.
- **Data Storage**: Form data is stored in an SQL database, capturing the form type, name, country code, and phone number.
- **Data Synchronization**: A "Refresh" button is included to update an online Excel sheet with new data from the SQL database whenever clicked.


## Additional Features
- **Local Storage**: User data (name, country code, phone number) is saved in local storage to prevent re-entry on returning to the application. If data exists in local storage, the listing screen is shown directly instead of the form screen.
- **Responsive Design**: The UI is responsive for both mobile and desktop views.

## Repository
- [GitHub Repository Link](https://github.com/Krishna-Aggarwal-11/medWander)
