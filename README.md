# LookBook Search Engine

This is a book search engine that allows users to search for books, create an account, log in, save books to their account, view their saved books, and manage their saved books. With this application, users can easily search for books, save their favorite titles, and access them later. The following sections provide an overview of the project, installation instructions, usage guide, and other relevant details.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Contributing](#contributing)
- [License](#license)

## Installation

To set up the book search engine locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/griffinwoj/LookBook

2. Install the dependencies:
npm install

3. Configure the environment variables:

Create a .env file in the root directory of the project.
Specify the required environment variables in the .env file, such as database credentials and API keys.

4. Start the application:
npm start

Access the application by visiting http://localhost:3000 in your web browser.

## Usage
Once the application is running, follow these steps to use the book search engine:

```md
Load the search engine:

Open your web browser and navigate to the application URL.
You will be presented with a menu containing the options "Search for Books" and "Login/Signup."
The menu also includes an input field to search for books and a submit button.
Search for books:

Click on the "Search for Books" menu option.
An input field to search for books and a submit button will be displayed.
Enter a search term in the input field and click the submit button.
If you are not logged in, you will be presented with several search results.
Each search result will include a book's title, author, description, image, and a link to that book on the Google Books site.
Login/Signup:

Click on the "Login/Signup" menu option.
A modal will appear on the screen with a toggle between the options to "Log in" or "Sign up."
If you choose "Signup," you will be presented with three inputs for a username, an email address, and a password, as well as a signup button.
If you choose "Login," you will be presented with two inputs for an email address and a password, as well as a login button.
Account Creation and Login:

To create a new account, enter a valid email address, create a password, and click on the signup button.
Once your user account is created, you will be automatically logged into the site.
To log in to an existing account, enter your account's email address and password and click on the login button.
The modal will close, and you will be logged into the site.
Manage Account:

When you are logged into the site, the menu options will change to "Search for Books," "My Saved Books," and "Logout."
You can search for books while logged in by entering a search term in the input field and clicking the submit button.
The search results will include a book's title, author, description, image, a link to that book on the Google Books site, and a button to save the book to your account.
Save and View Saved Books:

Click on the "Save" button on a book to save its information to your account.
To view your saved books, click on the "My Saved Books" option.
You will be presented with all the books you have saved to your account.
Each saved book will include the book's title, author, description, image, a link to that book on the Google Books site, and a button to remove the book from your account.
Remove Book and Logout:

Click on the "Remove" button on a book to delete it from your saved books list.
To log out of the site, click on the "Logout" button.
You will be logged out and presented with a menu containing the options "Search for Books" and "Login/Signup."
The menu also includes an input field to search for books and a submit button.
``````
## Features
Search for books using a book search engine.
Create a new user account or log in to an existing account.
Save books to your account for easy access later.
View your saved books, including the book's details and a link to the Google Books site.
Remove books from your saved books list.
Logout from the site to protect your account.
Contributing
Contributions to the book search engine project are always welcome. If you have any suggestions, bug reports, or feature requests, please open an issue on the project's GitHub repository.


License
The LookBook search engine project is cloned from starter code from edX.