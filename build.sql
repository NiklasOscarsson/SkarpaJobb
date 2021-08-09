CREATE TABLE ROLES(
    id SERIAL PRIMARY KEY NOT NULL,
    user_role VARCHAR(50) NOT NULL,
    can_create_jobs BOOLEAN NOT NULL DEFAULT false,
    can_take_jobs BOOLEAN NOT NULL DEFAULT false,
    can_edit_all BOOLEAN NOT NULL DEFAULT false,
    can_assign_jobs BOOLEAN NOT NULL DEFAULT false,
    can_cancel_jobs BOOLEAN NOT NULL DEFAULT false
);

CREATE TABLE role_relation(
    id SERIAL PRIMARY KEY NOT NULL,
    users_id INTEGER REFERENCES users(id),
    role_id INTEGER REFERENCES roles(id)
);

CREATE TABLE users(
    id SERIAL PRIMARY KEY NOT NULL,
    role_id INTEGER REFERENCES roles(id),
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    password VARCHAR(50) NOT NULL,
    img VARCHAR(100),
    bio VARCHAR(500),
    rating REAL DEFAULT 0,
    -- teacher_assigned INTEGER REFERENCES (id),
    -- assigned_students INTEGER REFERENCES (id),
);

CREATE TABLE groups(
    id SERIAL PRIMARY KEY NOT NULL,
    group_leader_id INTEGER REFERENCES users(id),
    name VARCHAR(50) NOT NULL,
    img VARCHAR(100),
    bio VARCHAR(500)
);

CREATE TABLE group_relations(
    id SERIAL PRIMARY KEY NOT NULL,
    group_id INTEGER NOT NULL REFERENCES groups(id),
    users_id INTEGER NOT NULL REFERENCES users(id)
);

CREATE TABLE categorys(
    id SERIAL PRIMARY KEY NOT NULL,
    category_name VARCHAR(50) NOT NULL,
    category_description VARCHAR(250) NOT NULL,
    category_icon VARCHAR(50)
);

CREATE TABLE jobs(
    id SERIAL PRIMARY KEY NOT NULL,
    owner_id INTEGER REFERENCES users(id) NOT NULL,
    title VARCHAR(50) NOT NULL,
    description VARCHAR(500) NOT NULL,
    short_description VARCHAR(70) NOT NULL,
    category INTEGER REFERENCES categorys(id) NOT NULL,
    img VARCHAR(100),
    expectations VARCHAR(100),
    rating REAL,
    comments VARCHAR(250),
    completed BOOLEAN DEFAULT false,
    canceled BOOLEAN DEFAULT false,
    reason_canceled VARCHAR(250)
);
CREATE TABLE jobs_taken(
    id SERIAL PRIMARY KEY NOT NULL,
    jobs_id INTEGER REFERENCES jobs(id) NOT NULL,
    group_id INTEGER REFERENCES groups(id),
    student_id INTEGER REFERENCES users(id),
    teacher_id INTEGER REFERENCES users(id) NOT NULL
);

