CREATE DATABASE Diskapp;

USE Diskapp;

CREATE TABLE
    users (
        id INT NOT NULL AUTO_INCREMENT,
        name VARCHAR(100) NOT NULL,
        email VARCHAR(100) NOT NULL,
        password VARCHAR(64) NOT NULL,
        role ENUM('administrator', 'employee') NOT NULL,
        PRIMARY KEY (id)
    );

INSERT INTO
    users (name, email, password, role)
VALUES (
        'Usuário 1',
        'usuario1@email.com',
        'senha123',
        'administrator'
    ), (
        'Usuário 2',
        'usuario2@email.com',
        'outrasenha456',
        'employee'
    ), (
        'Admin',
        'admin@email.com',
        'senhaAdmin789',
        'employee'
    );

CREATE TABLE
    customers (
        id INT NOT NULL AUTO_INCREMENT,
        name VARCHAR(100) NOT NULL,
        phone VARCHAR(20) NOT NULL,
        type ENUM('CPF', 'CNPJ') NOT NULL,
        cpf_cnpj VARCHAR(20) NOT NULL,
        address VARCHAR(100) NOT NULL,
        PRIMARY KEY (id),
        UNIQUE KEY (cpf_cnpj)
    );

INSERT INTO
    customers (
        name,
        phone,
        type,
        cpf_cnpj,
        address
    )
VALUES (
        'Cliente A',
        '111-222-3333',
        'CPF',
        '123.456.789-01',
        'Rua Cliente A, 123'
    ), (
        'Cliente B',
        '222-333-4444',
        'CNPJ',
        '12.345.678/0001-23',
        'Av. Cliente B, 456'
    );

CREATE TABLE
    products (
        id INT NOT NULL AUTO_INCREMENT,
        product_name VARCHAR(100) NOT NULL,
        description VARCHAR(255) NOT NULL,
        PRIMARY KEY (id),
        UNIQUE KEY (product_name)
    );

INSERT INTO
    products (product_name, description)
VALUES (
        'Produto A',
        'Descrição do Produto A'
    ), (
        'Produto B',
        'Descrição do Produto B'
    ), (
        'Produto C',
        'Descrição do Produto C'
    );

CREATE TABLE
    sales (
        id INT NOT NULL AUTO_INCREMENT,
        customer_id INT NOT NULL,
        product_id INT NOT NULL,
        quantity INT NOT NULL,
        unit_price DECIMAL(9, 2) NOT NULL,
        total_price DECIMAL(9, 2) NOT NULL,
        PRIMARY KEY (id),
        FOREIGN KEY (customer_id) REFERENCES customers(id),
        FOREIGN KEY (product_id) REFERENCES products(id)
    );

INSERT INTO
    sales (
        customer_id,
        product_id,
        quantity,
        unit_price,
        total_price
    )
VALUES (1, 1, 10, 9.99, 99.90), (2, 2, 20, 10.99, 219.80);

CREATE TABLE
    customer_prices (
        id INT NOT NULL AUTO_INCREMENT,
        customer_id INT NOT NULL,
        product_id INT NOT NULL,
        price DECIMAL(9, 2) NOT NULL,
        PRIMARY KEY (id),
        FOREIGN KEY (customer_id) REFERENCES customers(id),
        FOREIGN KEY (product_id) REFERENCES products(id)
    );

INSERT INTO
    customer_prices (customer_id, product_id, price)
VALUES (1, 1, 9.99), (2, 1, 10.99), (1, 2, 14.99), (2, 2, 13.99);

CREATE TABLE
    purchase (
        id INT NOT NULL AUTO_INCREMENT,
        invoice_number VARCHAR(20) NOT NULL,
        purchase_date DATE NOT NULL,
        product_id INT NOT NULL,
        quantity INT NOT NULL,
        unit_price DECIMAL(9, 2) NOT NULL,
        total_price DECIMAL(9, 2) NOT NULL,
        PRIMARY KEY (id),
        FOREIGN KEY (product_id) REFERENCES products(id)
    );

INSERT INTO
    purchase (
        invoice_number,
        purchase_date,
        product_id,
        quantity,
        unit_price,
        total_price
    )
VALUES (
        'NotaFiscal001',
        '2023-09-15',
        1,
        100,
        9.99,
        999.99
    ), (
        'NotaFiscal002',
        '2023-09-16',
        2,
        50,
        10.99,
        549.50
    ), (
        'NotaFiscal003',
        '2023-09-17',
        1,
        75,
        9.99,
        749.25
    );