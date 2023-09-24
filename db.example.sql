DROP SCHEMA IF EXISTS Diskapp;

CREATE SCHEMA Diskapp;

USE Diskapp;

-- Tabela de Usuários

CREATE TABLE
    users (
        id INT NOT NULL AUTO_INCREMENT,
        email VARCHAR(100) NOT NULL,
        password VARCHAR(64) NOT NULL,
        role ENUM('admin', 'usuario') NOT NULL,
        PRIMARY KEY (id),
        UNIQUE KEY (email)
    );

-- Tabela de Clientes

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

-- Tabela de Produtos

CREATE TABLE
    products (
        id INT NOT NULL AUTO_INCREMENT,
        product_name VARCHAR(100) NOT NULL,
        description VARCHAR(255) NOT NULL,
        PRIMARY KEY (id),
        UNIQUE KEY (product_name)
    );

-- Tabela de Compras

CREATE TABLE
    purchases (
        id INT NOT NULL AUTO_INCREMENT,
        purchase_date DATE NOT NULL,
        product_id INT NOT NULL,
        quantity INT NOT NULL,
        price DECIMAL(9, 2) NOT NULL,
        PRIMARY KEY (id),
        FOREIGN KEY (product_id) REFERENCES products(id)
    );

-- Tabela de Itens de Venda

CREATE TABLE
    sale_items (
        id INT NOT NULL AUTO_INCREMENT,
        customer_id INT NOT NULL,
        product_id INT NOT NULL,
        quantity INT NOT NULL,
        price DECIMAL(9, 2) NOT NULL,
        sale_date DATE NOT NULL,
        PRIMARY KEY (id),
        FOREIGN KEY (customer_id) REFERENCES customers(id),
        FOREIGN KEY (product_id) REFERENCES products(id)
    );

-- Tabela de Notas Fiscais

CREATE TABLE
    notes (
        id INT NOT NULL AUTO_INCREMENT,
        customer_id INT NOT NULL,
        reason VARCHAR(255),
        note_date DATE NOT NULL,
        PRIMARY KEY (id),
        FOREIGN KEY (customer_id) REFERENCES customers(id)
    );

-- Tabela de Preços Personalizados para Clientes e Produtos

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

-- Inserção de dados fictícios

INSERT INTO
    users (email, password, role)
VALUES (
        'usuario1@email.com',
        'senha123',
        'usuario'
    ), (
        'usuario2@email.com',
        'outrasenha456',
        'usuario'
    ), (
        'admin@email.com',
        'senhaAdmin789',
        'admin'
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

INSERT INTO
    customer_prices (customer_id, product_id, price)
VALUES (1, 1, 9.99), (2, 1, 10.99), (1, 2, 14.99), (2, 2, 13.99);

INSERT INTO
    purchases (
        purchase_date,
        product_id,
        quantity,
        price
    )
VALUES ('2023-09-15', 1, 100, 999.99), ('2023-09-16', 2, 50, 499.99), ('2023-09-17', 1, 75, 749.99);

INSERT INTO
    sale_items (
        customer_id,
        product_id,
        quantity,
        price,
        sale_date
    )
VALUES (1, 1, 10, 109.99, '2023-09-18'), (2, 2, 20, 299.99, '2023-09-19');

INSERT INTO
    notes (customer_id, reason, note_date)
VALUES (
        1,
        'Nota fiscal de venda para Cliente A',
        '2023-09-18'
    ), (
        2,
        'Nota fiscal de venda para Cliente B',
        '2023-09-19'
    );