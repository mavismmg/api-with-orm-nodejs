# Jedi Academy Project
## ORM in Node using Express, Sequelize and MySQL

### This project follows the MVC Architecture

MVC is an architectural pattern which means it rules the whole architecture of the applications. Even though often it is known as design pattern but we may be wrong if we refer it only as a design pattern because design patterns are used to solve a specific technical problem, whereas architecture pattern is used for solving architectural problems, so it affects the entire architecture of our application.

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

**Database**</br>
