# HW21 Book Search Engine - Project

## Project Description

This application will enable users search for books. For implementation we will be harnessing the power of GraphQL to provide us with only the data properties we need. This project will be developed using GraphQL, Apollo Server, MongoDB, Mongoose, Git, ReactJS, NPM Modules, HTML5, Bootstrap. For live deployement I will be using, Heroku and Mongodb Atlas.

---

## Table of Content

1. [Project Description](https://github.com/Brondchux/hw20-my-portfolio-in-react#project-description)
2. [Author Info](https://github.com/Brondchux/hw20-my-portfolio-in-react#author-info)
3. [User Story](https://github.com/Brondchux/hw20-my-portfolio-in-react#user-story)
4. [Acceptance Criteria](https://github.com/Brondchux/hw20-my-portfolio-in-react#acceptance-criteria)
5. [Mock-Up Preview](https://github.com/Brondchux/hw20-my-portfolio-in-react#mock-up-preview)
6. [Useful Links](https://github.com/Brondchux/hw20-my-portfolio-in-react#useful-links)
7. [Tech Stack](https://github.com/Brondchux/hw20-my-portfolio-in-react#tech-stack)
8. [Credits](https://github.com/Brondchux/hw20-my-portfolio-in-react#credits)
9. [License](https://github.com/Brondchux/hw20-my-portfolio-in-react#license)

---

## Author Info

Name: Gospel Chukwu

Email: hello@gospelchukwu.com

Portfolio: [www.gospelchukwu.com](https://brondchux.github.io/hw2-my-portfolio/)

---

## User Story

```md
AS AN avid reader
I WANT to search for new books to read
SO THAT I can keep a list of books to purchase
```

---

## Acceptance Criteria

```md
GIVEN a book search engine
WHEN I load the search engine
THEN I am presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button
WHEN I click on the Search for Books menu option
THEN I am presented with an input field to search for books and a submit button
WHEN I am not logged in and enter a search term in the input field and click the submit button
THEN I am presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site
WHEN I click on the Login/Signup menu option
THEN a modal appears on the screen with a toggle between the option to log in or sign up
WHEN the toggle is set to Signup
THEN I am presented with three inputs for a username, an email address, and a password, and a signup button
WHEN the toggle is set to Login
THEN I am presented with two inputs for an email address and a password and login button
WHEN I enter a valid email address and create a password and click on the signup button
THEN my user account is created and I am logged in to the site
WHEN I enter my account’s email address and password and click on the login button
THEN I the modal closes and I am logged in to the site
WHEN I am logged in to the site
THEN the menu options change to Search for Books, an option to see my saved books, and Logout
WHEN I am logged in and enter a search term in the input field and click the submit button
THEN I am presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site and a button to save a book to my account
WHEN I click on the Save button on a book
THEN that book’s information is saved to my account
WHEN I click on the option to see my saved books
THEN I am presented with all of the books I have saved to my account, each featuring the book’s title, author, description, image, and a link to that book on the Google Books site and a button to remove a book from my account
WHEN I click on the Remove button on a book
THEN that book is deleted from my saved books list
WHEN I click on the Logout button
THEN I am logged out of the site and presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button
```

---

## Mock-Up Preview

The following photo(s) shows a preview of the application in production mode

![Animation shows "star wars" typed into a search box and books about Star Wars appearing as results.](./public/assets/images/book-search-demo.gif)

A user can view their saved books on a separate page, as shown in the following animation:

![The Viewing Lernantino's Books page shows the books that the user Lernaninto has saved.](./public/assets/images/book-search-demo-03.gif)

---

## Useful Links

1. 🗂 [Click me to view github repository for this project](https://github.com/Brondchux/hw20-my-portfolio-in-react/)
2. 🌍 [Click me to view deployed application via github pages](https://brondchux.github.io/hw20-my-portfolio-in-react/)

---

## Tech Stack

![apollo logo](./public/assets/images/techs/apollo.png)
![reactjs logo](./public/assets/images/techs/reactjs.png)
![mongodb logo](./public/assets/images/techs/mongodb.png)
![graphql logo](./public/assets/images/techs/graphql.png)

---

## Credits

Appreciations to Ben 🙌🏾 of [Columbia University, Software Engineering Coding Boot Camp](https://bootcamp.cvn.columbia.edu/coding/landing-ftpt/?s=Google-Brand&msg_cv_scta=4&msg_cv_stbn=1&msg_cv_fcta=1&dki=Learn%20Coding&pkw=%2Bcolumbia%20%2Bcoding%20%2Bbootcamp&pcrid=471112563836&pmt=b&utm_source=google&utm_medium=cpc&utm_campaign=GGL%7CCOLUMBIA-UNIVERSITY%7CSEM%7CCODING%7C-%7COFL%7CTIER-1%7CALL%7CBRD%7CBMM%7CCore%7CBootcamp&utm_term=%2Bcolumbia%20%2Bcoding%20%2Bbootcamp&s=google&k=%2Bcolumbia%20%2Bcoding%20%2Bbootcamp&utm_adgroupid=111600049635&utm_locationphysicalms=9067609&utm_matchtype=b&utm_network=g&utm_device=c&utm_content=471112563836&utm_placement=&gclid=CjwKCAjwlrqHBhByEiwAnLmYUA8CIItksRJF6IT6XMX8WOOJBO-jtCRkzXZhI2gvsZrFEpYdRXy54RoC6jQQAvD_BwE&gclsrc=aw.ds) for being our tutor in this bootcamp.

Special thanks to [Google](https://www.google.com) for helping me find the accurate answers to my questions in a very timely manner.

---

## License

[![LICENSE](https://img.shields.io/badge/License-MIT-blue)](https://opensource.org/licenses/MIT)
