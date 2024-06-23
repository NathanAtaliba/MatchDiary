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
    - Adicionar Match [ :ok: ]
    - Remover Match [ :ok: ]
    - Editar Match [ :ok: ]
    - Buscar Match [ :ok: ]

    Team:
    - Adicionar Team [ :ok: ]
    - Remover Team [ :ok: ]
    - Editar Team [ :ok: ]
    - Buscar Team [ :ok: ]

## Frameworks e Bibliotecas utilizadas no projeto:

    Frontend -> React
    Backend -> Node.js, Express, 
    Database -> PostgreeSql