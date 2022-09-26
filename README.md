# how to configure project?

### If you have docker you need to run this command

````
    - docker build . -t israel/node-app
````
then for run project
````
    - docker run -p 3000:3000 -d israel/node-app
````
to use the project, go to postman and execute with the url:
``
    http://localhost:3000/api/{route}
``

### else go project root and run next command
````
    - npm i
    - npm run start
````

### Routes.

| Method      | Route |
| :---        |    :----:   | 
| GET      | /projects       |
| GET   | /project/:id?        |
| POST      | /save-project       |
| PUT   | /project/:id       |
| DELETE   | /project/:id        |


good hacking...