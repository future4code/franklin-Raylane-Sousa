CREATE TABLE IF NOT EXISTS AmaroProducts (
    id VARCHAR(255) PRIMARY KEY,
    ProductName VARCHAR(255) NOT NULL,
    tag_id VARCHAR(255),
    FOREIGN KEY (tag_id) REFERENCES AmaroTags(id)
);

CREATE TABLE IF NOT EXISTS AmaroTags (
    id VARCHAR(255) PRIMARY KEY,
    tagName VARCHAR(255) NOT NULL
);

