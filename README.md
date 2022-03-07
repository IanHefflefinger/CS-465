# CS-465
CS 465 Full Stack Development with MEAN

### Architecture
- Compare and contrast the types of frontend development you used in your full stack project, including Express HTML, JavaScript, and the single-page application (SPA).
There were two parts of the frontend: the customer facing portion of the site and the administrative portion of the site. 

The customer facing part of the site is built using Handlebars/Express to dynamically build webpages that are then sent with css to the client browser. This part of the site puts the processesing emphasis on the server (Node.js/Express.js) so that the webpages can be loaded quickly and easily indexed by search engines. The customer facing portion of the site is relativly simple and follows a MVC (model-view-controller) design on the server-side. Customers will abondon a site that takes too long to load - this was a hige consideration in choosing this design.

The admin SPA (single page application) uses Angular.js as a framework on the client. Nearly the entire site is sent to the client with calls to the server only being made to fetch/add/modify data by the server. In this design, the server only delivers the initial payload and any data needed by the frontend application. This design is slower to initially load, but faster once loaded - admins typically will not mind waiting an extra second for the site to initially load, but might be a little urched if they have to wait multiple times between pages.

- Why did the backend use a NoSQL MongoDB database?
NoSQL MongoDB was chosen because it is JavaScript-based. The stack (MEAN) is made of languages and frameworks that are all JavaScript-based so as to streamline the development process. MongoDB is also JSON-centric, making the process of analyzing data much easier - the change in data from the frontend to the backend is minimal. MongoDB is also rising in popularity, making future changes to the site easier to implement.


### Functionality
- How is JSON different from Javascript and how does JSON tie together the frontend and backend development pieces?
JSON is JavaScript Object Notation, how JavaScript stores objects. JSON makes tying together the backend and frontend easier by keeping the data in one format. In SQL, the server needs to change the format of the data into JSON in order for it to be used by the client (or it has to be changed into JSON data by the cleint from some other format, like XML, which might be even more difficult). JSON, unlike JavaScript, is a data format where JavaScript is a programming language. JSON only represents data.

- Provide instances in the full stack process when you refactored code to improve functionality and efficiencies, and name the benefits that come from reusable user interface (UI) components.
At various points in the development process, static webpages were modified to become more dynamic. Handlebars, an Express templating engine, was used to remove reducdancy from the webpages - this allowed for dry code where headers and footers could be written in one place and included as a short blip of code in various other places. Handlebars was also used to dynamicaly render data from the database - this substantially reduced the amount of code on each page and allowed for data to be updated in only one location (as opposed to several).

The site was also refactored to the MVC (model view controller) architecture - this allowed for a better seperation of concerns and a more organized application. With this architecture, the site became more modularized and modifications could be made to the site with greater ease in the future. 

The Admin portion of the site also used Angular as a framework - this modularized the frontend of the site and made adding new features a breeze. The UI then became a simple application to change as new features were brought into the system.


### Testing
- Methods for request and retrieval necessitate various types of API testing of endpoints, in addition to the difficulties of testing with added layers of security. Explain your understanding of methods, endpoints, and security in a full stack application.
Testing should typically be done in three (in very simple applications) parts of the application: on the database, on the server, and on the client. In this case, the server used an ODM to communicate with the server and therfore very little testing was needed on the database server itself. 

Consoling information was common on the server to ensure that GET, POST, PUT, and DELETE requests were successful. It was also useful to console information in various stages to ensure data integrity. Security features (using Passport.js) were put into place on the Express.js application to ensure that the information and requests it is receiving is legitimate (contains a token/is authorized/etc.). 

Server requests can be fabricated in other programs (such as Postman), which is why it is important to have security features on the backend to prevent tampering with data, but it is also important to add security features on the front end (as redundancy AND as a way to reduce the load on the server - if the front end does data checks, then the server doesn't have to do as much work). Various checks were put in place to make sure that data integrity is not compromised and that the user is authorized (with a token).


### Reflection
- How has this course helped you in reaching your professional goals? What skills have you learned, developed, or mastered in this course to help you become a more marketable candidate in your career field?
The world is increasingly becoming more interested in using web-based applications and the development community seems to be gearing towards using as few languages as possible. With JavaScript being the language of the internet, it seems logical to learn JS-based technologies. 

MEAN (MongoDB, Express.js, Angular.js, Node.js) stack what we used in this course and is still very relevant. It is a full-stack and is still in high demand. MERN (MongoDB, Express.js, React.js, Node.js) is the new kid on the black and is the most popular. The only difference between the two is the frontend frameworks (React/Angular). Knowing these technologies is vital i to entering todays web-development market. 

I have prior experience with Node.js/Express.js and basic HTML/CSS/JavaScript. I also have expreience with MongoDB and various templating engines for Express, but this was my first time using Handlebars. I have gained a much better appreciation for Express and it's various packages. I feel much more comfortable in developing JavaScript-based full stack applications using these technologies. I also feel more comfortable with web applications as a whole, regardless of database, server language, or front end framework (or lack thereof).
