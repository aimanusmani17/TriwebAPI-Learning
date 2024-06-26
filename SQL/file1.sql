CREATE DATABASE College;
use College;

--------------------------------------------------------------

create TABLE teacher(
id int(11) NOT null AUTO_INCREMENT PRIMARY KEY, 
teacher_name varchar(255) NOT null,
mobile varchar(100) NOT null    
)

CREATE TABLE classes(
id int(11) not null AUTO_INCREMENT,
class_name varchar(100) not null,
teacher_id int(11) NOT null,
PRIMARY KEY(id),
FOREIGN KEY(teacher_id) REFERENCES teacher(id)   
)
--------------------------------------------------------------
- change column name

ALTER table students
CHANGE class class_id int(11) NOT null;

- alter and add foreign key
ALTER table students
ADD FOREIGN KEY (class_id) REFERENCES classes(id);


- delete table
DROP TABLE teacher123



--------------------------------------------------------------
CRUD

C-create
INSERT INTO teacher(mobile, teacher_name) VALUES('1111','t1');

output: 1 row inserted.
		Inserted row id: 1
		

R- Retrieve
SELECT * FROM `teacher`;

U - Update
UPDATE teacher SET mobile='2222' 

D - Delete
DELETE from teacher;


--------------------------------------------------------------
INSERT
INSERT into classes(class_name,teacher_id) VALUES('Class One',1)
INSERT into classes (id,class_name,teacher_id) VALUES(2,'Class Two',2)
INSERT into students(id,student_name,class_id,mobile) VALUES(1,'John',2,'1123');

--------------------------------------------------------------
Update
UPDATE classes SET class_name="Class Four" WHERE id=4;

--------------------------------------------------------------
Retrieve
- select all
SELECT * from students;

- select with where
SELECT * from students WHERE class_id=3

- select with AND 
SELECT * FROM `students` WHERE class_id = 2 and mobile=2344

- select with OR
SELECT * FROM `students` WHERE class_id = 2 OR class_id = 3

- IN query
SELECT * FROM `students` WHERE class_id IN (2,3)

- select custome fields
SELECT student_name FROM `students` WHERE id = 1

SELECT student_name,mobile FROM `students` WHERE id = 1

- How to change name of column while fetching the data- Alias
SELECT student_name as NameOfStudent,mobile as MobileNumber FROM `students` WHERE id = 1

- How to create object of table
select st.* 
FROM students st 
where id = 2

select st.student_name 
FROM students st 
where st.id = 2
----------------------------------------------------------------
- Use of JOIN

select st.student_name,cl.class_name 
FROM students st 
INNER JOIN classes cl ON st.class_id = cl.id 
where st.id = 2

select st.student_name,cl.class_name 
FROM students st 
INNER JOIN classes cl ON st.class_id = cl.id 


select st.student_name,cl.class_name, t.teacher_name as ClassTeacher
FROM students st 
INNER JOIN classes cl ON st.class_id = cl.id
INNER JOIN teacher t on cl.teacher_id = t.id

---------------------------------------------------------------

DELETE
DELETE from teacher;

Delete -> It only delete the records in table, it cannot reset the auto increament value
Truncate - TRUNCATE TABLE classes : It reset the table

-->  Cannot truncate a table referenced in a foreign key constraint 
---------------------------------------------------------------
=====
Day 2
=====

-> create database workshop2
-> use workshop2

---------------------------------------------------------------
->
create TABLE teachers(
id int NOT null AUTO_INCREMENT PRIMARY KEY, 
teacher_name varchar(255) NOT null,
mobile varchar(100) NOT null,
salary int 
)
---------------------------------------------------------------
-> CREATE TABLE classes(
id int not null AUTO_INCREMENT,
class_name varchar(100) not null,
teacher_id int NOT null,
PRIMARY KEY(id),
FOREIGN KEY(teacher_id) REFERENCES teachers(id)   
)
---------------------------------------------------------------
->
CREATE TABLE students(
id int not null AUTO_INCREMENT,
student_name varchar(100) not null,
mobile varchar(20) default 0,
class_id int NOT null,
PRIMARY KEY(id),
FOREIGN KEY(class_id) REFERENCES classes(id)   
)
---------------------------------------------------------------
--> - MySQL INSERT INTO Statement
insert into teachers(teacher_name, mobile, salary ) values('Ajay', '1234', 5000)

- MySQL INSERT INTO Statement - Multiple records
insert into teachers(teacher_name, mobile, salary ) values('Vijay', '1235', 5000),('Azhar', '1236', 4000)

- insert into teachers values(4,'Amar','1237',10000)

insert into classes(class_name, teacher_id) values('Class 6', 1)
insert into classes(class_name, teacher_id) values('Class 7', 1),('Class 8', 2),('Class 9', 3),('Class 10', 4)
insert into classes(id,class_name, teacher_id) values(1,'Class 5', 3)


insert into students(student_name, mobile, class_id) values('Alex','9876', 5),('Genie','9875', 5),('Arya','9874', 5),('Adi','8888', 6),('Bata','8887', 6),('Vani','7777', 1),('Joona','6666', 2),('Peter','5555', 3),('Durgesh','4444', 3),('Sayed','3333', 4),('Azfal','2222', 4)

---------------------------------------------------------------

- MySQL WHERE Clause

update classes set class_name = 'Class 5' where id = 1
update students set mobile='2222' where id=12

select * from students where class_id = 5;
select * from students where class_id = 4 or class_id = 5;
select * from students where mobile = '2222' and class_id=5

---------------------------------------------------------------

-> Get all the records of students of class 1,2,3,4,5 but not 6
- select * from students where class_id=1 or class_id=2 or class_id=3 or class_id=4 or class_id=5
- select * from students where class_id <> 6

---------------------------------------------------------------

- MySQL ORDER BY Keyword
select * from students where class_id <> 6 order by class_id
select * from students where class_id <> 6 order by class_id asc
select * from students where class_id <> 6 order by class_id desc

---------------------------------------------------------------




