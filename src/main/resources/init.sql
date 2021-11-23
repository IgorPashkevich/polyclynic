create sequence city_id_seq start 1 increment 1;
create sequence category_id_seq start 1 increment 1;
create sequence position_id_seq start 1 increment 1;
create sequence education_id_seq start 1 increment 1;
create sequence salary_id_seq start 1 increment 1;
create sequence employee_id_seq start 1 increment 1;

create table city
(
    id bigint not null,
    name varchar(255) unique not null,
    primary key (id)
);

create table category
(
    id   bigint not null,
    name varchar(255) unique not null,
    primary key (id)
);

create table position
(
    id   bigint not null,
    name varchar(255) unique not null,
    primary key (id)
);

create table education
(
    id   bigint not null,
    name varchar(255) unique not null,
    city_id bigint not null,
    primary key (id),
    FOREIGN KEY (city_id) REFERENCES city(id)
);

create table employee
(
    id bigint not null,
    first_name varchar(255) not null,
    middle_name varchar(255) not null,
    last_name varchar(255) not null,
    date_of_Birth DATE not null,
    category_id bigint not null,
    education_id bigint not null,
    position_id bigint not null,

    primary key (id),
    FOREIGN KEY (category_id) REFERENCES category(id),
    FOREIGN KEY (education_id) REFERENCES education(id),
    FOREIGN KEY (position_id) REFERENCES position(id)
);

create table salary
(
    id   bigint not null,
    date DATE not null,
    employee_id bigint not null,
    amount numeric not null,
    primary key (id),
    FOREIGN KEY (employee_id) REFERENCES employee(id)
);


