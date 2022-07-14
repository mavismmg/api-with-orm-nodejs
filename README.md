# Jedi Academy Project
## ORM in Node using Express, Sequelize and MySQL

### This API follows the MVC Architecture

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

These are the routes of the project:</br>

> http://localhost:port/people
> http://localhost:port/level
> http://localhost:port/grade

**GET Routes:**</br>

> http://localhost:port/{route}

```
.get("/{route}", PeopleController.listPeople)
```

> http://localhost:port/{route}/:id

```
.get("/{route}/:id", PeopleController.listPeopleById)

```

> http://localhost:port/{route}/:padawanId/enroll/:enrollId

```
.get("/{route}/:padawanId/enroll/:enrollId", PeopleController.pullPeopleEnroll)
```

**POST Routes:**</br>

> http://localhost:port/{route}/

```
.post("/{route}", PeopleController.createPeople)

```

> http://localhost:port/{route}/:padawanId/enroll

```
.post("/{route}/:padawanId/enroll", PeopleController.createPeopleEnroll)
```

http://localhost:3333/{route}/1/restore

```
.post("/{route}/:id/restore", PeopleController.resetPeople)
```

**PUT Routes:**</br>

> http://localhost:port/{route}/:id

```
.put("/{route}/:id", PeopleController.updatePeople)
```

> http://localhost:port/{route}/:padawanId/enroll/:enrollId

```
.put("/{route}/:padawanId/enroll/:enrollId", PeopleController.updatePeopleEnroll)
```

**DELETE Routes:**</br>

> http://localhost:port/{route}/:id

```
.delete("/{route}/:id", PeopleController.deletePeople)
```

> http://localhost:port/{route}/:padawanId/enroll/:enrollId

```
.delete("/{route}/:padawanId/enroll/:enrollId", PeopleController.deletePeopleEnroll);
```

### Installation

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
