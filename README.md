# MatchDiary
Repositorio destinado para um projeto de um diario de torcedor

## Database

CREATE TABLE Matchs (
    id INT PRIMARY KEY,
    date DATE,
    team_one VARCHAR(255),
    team_two VARCHAR(255),
    score_team_one INT,
    score_team_two INT
);

CREATE TABLE Teams (
    id INT PRIMARY KEY,
    name VARCHAR(255),
    state VARCHAR(2),
    photo_url VARCHAR(255)
);

## Requisitos a se conquistar no projeto

- Interface (frontend) [ NOT STARTED]
- Rotas para requisição(backend) [ IN PROGRESS ]
- Requisitos do CRUD de Match e CRUD de Team:

    Match:
    - Adicionar Match [ NOT STARTED ]
    - Remover Match [ NOT STARTED ]
    - Editar Match [ NOT STARTED ]
    - Buscar Match [ NOT STARTED ]

    Team:
    - Adicionar Team [ NOT STARTED ]
    - Remover Team [ NOT STARTED ]
    - Editar Team [ NOT STARTED ]
    - Buscar Team [ NOT STARTED ]

## Frameworks e Bibliotecas utilizadas no projeto:

    Frontend -> React
    Backend -> Node.js, Express, 
    Database -> PostgreeSql