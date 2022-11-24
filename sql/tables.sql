-- Table create scripts here
CREATE TABLE client(
    id serial not null primary key,
    first_name text not null,
    last_name text not null,
    phone_number char(15) NULL);
);

CREATE TABLE treatments(
    id serial not null primary key,
    type_treatment text not null,
    code text not null,
    price text not null
);

CREATE TABLE stylist(
    id serial not null primary key,
     first_name  text not null,
    last_name text not null,
    phone_number char(15) NULL);
    commission_percentage decimal(3,2)
);

create table booking (
    id serial not null primary key,
    booking_date date not null,
    booking_time time not null,
    client_id int not null,
    type_treatment_id int not null,
    stylist_id int not null,
    foreign key (client_id) references client(id),
    foreign key (type_treatment_id) references treatments(id),
    foreign key (stylist_id) references stylist(id)
);
