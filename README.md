## About

An API for the evaluation tool I made as a final project for my programming course. It uses [Feathers](http://feathersjs.com) with Mongoose. It hosts four services: users, students, batches, and evaluations. Its intended for teachers (users) to track their students' performance. The core feature is a random student selector: if at any point a teacher wants to ask a question, the app returns a (weighted) random student from the batch they are currently teaching.

Working on this project taught me a lot about utilising hooks in an API. My personal challenge was to contain all business logic in the API, which means that I put the weighted random function in a hook.

## Getting Started

Getting up and running is as easy as 1, 2, 3.

1. Make sure you have [NodeJS](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed.
2. Install your dependencies

    ```
    cd path/to/evaluation-tool-api; npm install
    ```

3. Start your app

    ```
    npm start
    ```

## License

Copyright (c) 2016

Licensed under the [MIT license](LICENSE).
