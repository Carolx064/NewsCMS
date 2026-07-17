-- ==========================================
-- Crónica Sin Filtros
-- Base de datos
-- ==========================================

DROP DATABASE IF EXISTS cronica_sin_filtros;

CREATE DATABASE cronica_sin_filtros
CHARACTER SET utf8mb4
COLLATE utf8mb4_unicode_ci;

USE cronica_sin_filtros;

-- ==========================================
-- TABLA: users
-- ==========================================

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,

    username VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ==========================================
-- TABLA: categories
-- ==========================================

CREATE TABLE categories (
    id INT AUTO_INCREMENT PRIMARY KEY,

    name VARCHAR(50) NOT NULL,
    slug VARCHAR(60) NOT NULL UNIQUE,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ==========================================
-- TABLA: news
-- ==========================================

CREATE TABLE news (
    id INT AUTO_INCREMENT PRIMARY KEY,

    category_id INT NOT NULL,

    title VARCHAR(255) NOT NULL,
    slug VARCHAR(255) NOT NULL UNIQUE,

    summary TEXT NOT NULL,
    content LONGTEXT NOT NULL,

    image VARCHAR(255),

    published BOOLEAN DEFAULT TRUE,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        ON UPDATE CURRENT_TIMESTAMP,

    CONSTRAINT fk_news_category
        FOREIGN KEY (category_id)
        REFERENCES categories(id)
        ON DELETE RESTRICT
        ON UPDATE CASCADE
);

-- ==========================================
-- DATOS INICIALES
-- ==========================================

INSERT INTO categories (name, slug) VALUES
('Política', 'politica'),
('Economía', 'economia'),
('Tecnología', 'tecnologia'),
('Deportes', 'deportes'),
('Cultura', 'cultura'),
('Internacional', 'internacional'),
('Opinión', 'opinion'),
('Sociedad', 'sociedad');

INSERT INTO users (username, email, password)
VALUES (
    'admin',
    'admin@cronicasinfiltros.com',
    'CAMBIAR_POR_HASH_BCRYPT'
);