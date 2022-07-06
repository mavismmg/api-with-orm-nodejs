# Jedi Academy Project
## ORM in Node using Express, Sequelize and MySQL

### This project follows the MVC Architecture

MVC is an architectural pattern which means it rules the whole architecture of the applications. Even though often it is known as design pattern but we may be wrong if we refer it only as a design pattern because design patterns are used to solve a specific technical problem, whereas architecture pattern is used for solving architectural problems, so it affects the entire architecture of our application.

### Dependencies

**Dependencies**</br>

- "body-parser": "^1.20.0"
- "express": "^4.18.1"
- "mysql2": "^2.3.3"
- "path": "^0.12.7"
- "sequelize": "^6.21.2
- "sequelize-cli": "^6.4.1

**Development Dependencies**</br>

- "nodemon": "^2.0.18"

### Database

> The project is built in a MySQL database.

![Database Diagram](/images/db_diagram.png)

*Note that People(Pessoas), Levels(Niveis) are composed with only to Primary Keys and Grade(Turma), Enrolls(Matriculas) are composed with two Primary Keys and Two Foregein Keys*

### Routes

**GET Routes:**</br>

> http://localhost:port/people

```
.get("/people", PeopleController.listPeople)
```

> http://localhost:port/people/:id

```
.get("/people/:id", PeopleController.listPeopleById)

```

> http://localhost:port/people/:padawanId/enroll/:enrollId

```
.get("/people/:padawanId/enroll/:enrollId", PeopleController.pullPeopleEnroll)
```

**POST Routes:**</br>

> http://localhost:port/people/

```
.post("/people", PeopleController.createPeople)

```

> http://localhost:port/people/:padawanId/enroll

```
.post("/people/:padawanId/enroll", PeopleController.createPeopleEnroll)
```

**PUT Routes:**</br>

> http://localhost:port/people/:id

```
.put("/people/:id", PeopleController.updatePeople)
```

> http://localhost:port/people/:padawanId/enroll/:enrollId

```
.put("/people/:padawanId/enroll/:enrollId", PeopleController.updatePeopleEnroll)
```

**DELETE Routes:**</br>

> http://localhost:port/people/:id

```
.delete("/people/:id", PeopleController.deletePeople)
```

> http://localhost:port/people/:padawanId/enroll/:enrollId

```
.delete("/people/:padawanId/enroll/:enrollId", PeopleController.deletePeopleEnroll);
```

### License

MIT License</br>

Copyright (c) 2022 Mateus Jorge</br>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:</br>

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.</br>

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.</br>
