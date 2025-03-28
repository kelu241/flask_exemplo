CREATE DATABASE pockemons
GO

USE pockemons

create table pockemons(
    id INT PRIMARY KEY IDENTITY(1,1),
    nome VARCHAR(50),
    valor BIGINT 
)
GO

INSERT INTO dbo.pockemons(nome, valor) VALUES
('PIKACHU', 1),
('Charmander', 2),
('Bulbasaur', 3)

GO