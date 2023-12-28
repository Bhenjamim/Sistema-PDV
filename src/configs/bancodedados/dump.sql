
DROP DATABASE IF EXISTS pdv;
CREATE DATABASE pdv;


DROP TABLE IF EXISTS usuarios;
CREATE TABLE usuarios (
    id serial PRIMARY KEY,
    nome varchar(100) NOT NULL,
    email varchar(100) NOT NULL UNIQUE,
    senha text NOT NULL
);


DROP TABLE IF EXISTS categorias;
CREATE TABLE categorias (
    id serial PRIMARY KEY,
    descricao text NOT NULL
);


INSERT INTO categorias (descricao)
VALUES
    ('Informática'),
    ('Celulares'),
    ('Beleza e Perfumaria'),
    ('Mercado'),
    ('Livros e Papelaria'),
    ('Brinquedos'),
    ('Moda'),
    ('Bebê'),
    ('Games');



CREATE TABLE produtos (
    id serial PRIMARY KEY,
    descricao VARCHAR(255) NOT NULL,
    quantidade_estoque INTEGER NOT NULL,
    valor INTEGER NOT NULL,
    categoria_id INTEGER,
    FOREIGN KEY (categoria_id) REFERENCES categorias(id)
);


CREATE TABLE clientes (
    id serial PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    cpf VARCHAR(14) UNIQUE NOT NULL
);

CREATE TABLE enderecos (
    id serial PRIMARY KEY,
    cliente_id INTEGER NOT NULL,
    cep VARCHAR(8),
    rua VARCHAR(100),
    numero VARCHAR(10),
    bairro VARCHAR(50),
    cidade VARCHAR(100),
    estado VARCHAR(2),
    FOREIGN KEY (cliente_id) REFERENCES clientes(id)
);


CREATE TABLE pedidos (
    id serial PRIMARY KEY,
    cliente_id INTEGER NOT NULL,
    observacao TEXT,
    valor_total INTEGER NOT NULL,
    FOREIGN KEY (cliente_id) REFERENCES clientes(id)
);

CREATE TABLE pedido_produtos (
    id serial PRIMARY KEY,
    pedido_id INTEGER NOT NULL,
    produto_id INTEGER NOT NULL,
    quantidade_produto INTEGER NOT NULL,
    valor_produto INTEGER NOT NULL,
    FOREIGN KEY (pedido_id) REFERENCES pedidos(id),
    FOREIGN KEY (produto_id) REFERENCES produtos(id)
);


ALTER TABLE produtos
ADD COLUMN produto_imagem VARCHAR(255);