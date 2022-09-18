CREATE TABLE IF NOT EXISTS UserCook (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    role ENUM("NORMAL", "ADMIN") DEFAULT "NORMAL" NOT NULL
);


CREATE TABLE IF NOT EXISTS RecipeCook (
    id VARCHAR(255) PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description VARCHAR(300) NOT NULL DEFAULT "This is a new recipe for you to learn and feed yourself",
    prepare TEXT(500) NOT NULL,
    created DATE NOT NULL DEFAULT (CURRENT_DATE())
);


/* In progress */
CREATE TABLE IF NOT EXISTS FollowUsers (
    user_id VARCHAR(255),
    follower_id VARCHAR(255),
    FOREIGN KEY (user_id) REFERENCES UserCook(id),
);

CREATE TABLE IF NOT EXISTS FollowUsers (
    user_id VARCHAR(255),
    follower_id VARCHAR(255),
    FOREIGN KEY (user_id) REFERENCES UserCook(id),
);