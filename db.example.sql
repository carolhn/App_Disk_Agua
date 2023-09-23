DROP DATABASE IF EXISTS `Disk-app`;

CREATE DATABASE IF NOT EXISTS `Disk-app`;

USE `Disk-app`;

CREATE TABLE
    IF NOT EXISTS users (
        id INT NOT NULL AUTO_INCREMENT,
        name VARCHAR(100) NOT NULL,
        email VARCHAR(100) NOT NULL,
        password VARCHAR(32) NOT NULL,
        role VARCHAR(20) NOT NULL,
    );

CREATE TABLE
    IF NOT EXISTS customer (
        id INT NOT NULL AUTO_INCREMENT,
        name VARCHAR(100) NOT NULL,
        phone VARCHAR(20) NOT NULL,
        type VARCHAR(20) NOT NULL,
`CPF / CNPJ`VARCHAR(20) NOT NULL,
        address VARCHAR(100) NOT NULL,
        PRIMARY KEY (id),
        UNIQUE KEY`CPF / CNPJ` (`CPF / CNPJ`)
    );

CREATE TABLE
    IF NOT EXISTS products (
        id INT NOT NULL AUTO_INCREMENT,
        name VARCHAR(100) NOT NULL,
        price DECIMAL(4, 2) NOT NULL,
        url_image VARCHAR(200) NOT NULL DEFAULT '',
        PRIMARY KEY(id),
        UNIQUE KEY`name` (name)
    );

CREATE TABLE
    IF NOT EXISTS sales (
        request_id INT NOT NULL,
        product_id INT NOT NULL,
        quantity INT NOT NULL,
        PRIMARY KEY(request_id, product_id),
        FOREIGN KEY(request_id) REFERENCES request(id),
        FOREIGN KEY(product_id) REFERENCES products(id)
    );

CREATE TABLE
    IF NOT EXISTS request (
        id INT NOT NULL AUTO_INCREMENT,
        customer_id INT NOT NULL,
        request_date DATETIME NOT NULL,
        total_price DECIMAL(9, 2) NOT NULL,
        PRIMARY KEY(request_id),
        FOREIGN KEY (user_id) REFERENCES users(id),
        FOREIGN KEY (products_ID) REFERENCES products(id),
        FOREIGN KEY (sales_ID) REFERENCES sales(id),
    );

INSERT INTO users (id, name, email, password, role) VALUES 

INSERT INTO products (id, name, price, url_image) VALUES 