
## Git / GitHub

## Sumário
- [Semana 1](#semana-1--fundamentos)
  - [Aula 1 – Introdução ao Git](###aula-1:--introdução-ao-git)
  - [Aula 2 – Estrutura do Git e Comandos Básicos](#aula-2--estrutura-do-git-e-comandos-básicos)
- [Semana 2](#semana-2--operações-essenciais)
  - [Aula 3 – Histórico e Inspeção](#aula-3--histórico-e-inspeção)
  - [Aula 4 – Desfazendo Mudanças](#aula-4--desfazendo-mudanças)
- [Semana 3](#semana-3--repositórios-remotos)
  - [Aula 5 – Conectando ao GitHub](#aula-5--conectando-ao-github)
  - [Aula 6 – Clonando e Sincronizando](#aula-6--clonando-e-sincronizando)
- [Semana 4](#semana-4--branches-e-colaboração)
  - [Aula 7 – Trabalhando com Branches](#aula-7--trabalhando-com-branches)
  - [Aula 8 – Merge e Conflitos](#aula-8--merge-e-conflitos)
- [Semana 5](#semana-5--recursos-importantes)
  - [Aula 9 – Tags e Releases](#aula-9--tags-e-releases)
  - [Aula 10 – Stash e Rebase](#aula-10--stash-e-rebase)
- [Semana 6](#semana-6--boas-práticas-e-simulação)
  - [Aula 11 – Fluxos de Trabalho e Commits](#aula-11--fluxos-de-trabalho-e-commits)
  - [Aula 12 – Projeto Final (Simulação de Equipe)](#aula-12--projeto-final-simulação-de-equipe)

---

### Aula-1: Introdução ao Git
#### Git
- Git é um sistema de controle de versão distribuído , gratuito e de código aberto, projetado para lidar com tudo, desde projetos pequenos até muito grandes, com rapidez e eficiência.

- Git é um sistema de controle de versão de código aberto, enquanto o GitHub, GitLab e Bitbucket são plataformas web que utilizam o Git para hospedar, gerenciar e colaborar em repositórios de código de forma remota

- Sistemas de controle de versão (centralizado vs distribuído):
    centralizados, onde um único servidor armazena todo o código e todos os usuários interagem com ele diretamente para extrair e enviar alterações; e distribuídos, onde cada desenvolvedor tem uma cópia local completa do repositório, permitindo trabalhar offline, criar ramificações rapidamente e ter backups locais do projeto.

| Tipo             | Descrição |
| -----------------| ----------|
| Centralizado     | SVN ,CVCS |
| Descentralizado  | GIT       |

#### Instalação

1. Linux Ubuntu
```bash
 sudo apt-get install git
```
2. Windows

    [Click here download install for windows](https://git-scm.com/downloads/win)

### Aula-2: Estrutura do Git e Comandos Básicos

Working directory, staging area, repository

- Inicia o rastreamento de alterção de código / conteúdo em um diretório.
```sh
    git init
```
- Identifica arquivos alterados, revemovidos ou adicionados ao repositório.
```sh
    git status
```
- Identifica arquivos alterados, revemovidos ou adicionados ao repositório.
```sh
    git add 
    git add file_name
```
- Configuração de Email e Nome de usuário.
```sh
    git config --global user.name "Your Name"
    git config --global user.email "your.name@teste.com"
```
- Lista as configurações local do repositório.
```sh
    git config --list
```
- Salva todas as alterações realizadas no repositório
```sh
    git commit 
    
    git commit -m "mensagem_do_commit"
```
-  Trocar de branch
```sh
  git checkout branch_name
```
- Criar e trocar para uma nova branch
```sh
  git checkout -b branch_name
```
## Aula-3: Histórico e inspeção
- Rastreia todos os commits realizados na branch em questão.
```sh
   git log
```   
- Lista o último commit realizados na branch em questão.
```sh
   git show 
```
- Identifica o que foi alterado em arquivos modificados. 
```sh
   git diff
```
Exercício: visualizar histórico e comparar versões
## Aula-4: Desfazendo Mudanças
- Desfazer mudanças não salvas (no working directory)
```sh
  git restore 
```
- Remover arquivos do stage
```sh  
  git restore --stage file_name.js
```
- Restaurar um arquivo para um commit específico
```sh 
  git restore --source=abc1234 meu_arquivo.txt
```
- Tirar arquivo do stage
```sh
  git reset tile_name.js
```
- Reset “soft” – voltar commits mas manter mudanças no stage
```sh
  git reset --soft HEAD~1
```
Módulo 3: Repositórios Remotos

Conectando ao GitHub/GitLab

 - Criar repositório remoto
```sh
  git remote add, git push, git pull, git fetch
```
- Clonando repositórios
```
  git clone
```
Fluxo de alterações (local → remoto e remoto → local)
## Documentation

[Documentation](https://linktodocumentation)

