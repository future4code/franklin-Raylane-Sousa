
### PROJECT TO DO LIST

This task is part of the backend module of the Labenu institution course.

### TABLE USER (TodoListUser)

~~~SQL
CREATE TABLE TodoListUser (
		id INT PRIMARY KEY AUTO_INCREMENT, 
    name VARCHAR(255) NULL, 
    nickname VARCHAR(255) UNIQUE NOT NULL, 
    email VARCHAR(255) UNIQUE NOT NULL
);
~~~

### TABLE TASK (TodoListTask)
 - Relationship: *Creator User* and *Task* 
 - A user can create as many tasks as he wants. But a task has only one creator user.]

~~~SQL
CREATE TABLE TodoListTask (
		id INT PRIMARY KEY AUTO_INCREMENT, 
    title VARCHAR(255) NOT NULL, 
    description TEXT NOT NULL, 
    status VARCHAR(255) NOT NULL DEFAULT "to_do",
    limit_date DATE NOT NULL,
    user_id varchar(255) NOT NULL,
    FOREIGN KEY (user_id) REFERENCES TodoListUser(id)
);
~~~
- We use the DEFAULT operator to always create a task with status to_do, as a task always starts as "to do".
- Task statuses are 3: *to do*, *doing* and *done*.

### TABLE  (TodoListUserTaskRelation)
 - Relationship: *User responsible* and *Task* 
 - A user can be responsible for as many tasks as he wants. And a task can have more than one responsible user.
 - TodoListTaskRelation: *user* + *task*
 
~~~SQL
CREATE TABLE TodoListUserTaskRelation (
		task_id INT ,
    resp_user_id INT,
    FOREIGN KEY (task_id) REFERENCES TodoListTask(id),
    FOREIGN KEY (resp_user_id) REFERENCES TodoListUser(id)
);
~~~
## USER AND TASK (1:N)

- In the system, a user can create as many tasks as he wants. But a task has only one creator user. 

~~~
foreign key = user_id (1) references id of table TodoListUser
table -> TodoListTask (N)
~~~

- In this way, each *1* user is related to *N* tasks he created.



