create sequence city_id_seq start 1 increment 1;
create sequence category_id_seq start 1 increment 1;

create table city
(
    id   bigint not null,
    name varchar(255) unique not null,
    primary key (id)
);

create table category
(
    id   bigint not null,
    name varchar(255) unique not null,
    primary key (id)
);


