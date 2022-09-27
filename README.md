# Bravi  | Contact List

Uma lista de contatos onde você pode adicionar, remover ou editar um contato. Cada usuário possuí sua própria lista de contatos. Não foi utilizado JWT para o desenvolvimento dessa aplicação, portanto, o acesso aos usuários é através do id contido na URL. 

Há uma query logo abaixo que após ser executada, popula o banco de dados com 5 usuários. Apenas o usuário /1 e usuário /2 estão populados com contatos. É possível adicionar novos ao conferir a documentação da API.

Exemplo:

```http
`http://localhost:3001/1`  // Acessa o usuário 1
```

```http
`http://localhost:3001/2`  // Acessa o usuário 2
```



## Instalação de dependências

* Clonando o repositório (você deve ter o [Git](https://git-scm.com/) instalado)

  * Entre em um destino de sua preferência, abra o terminal e digite o comando:

  ```bash
  git clone https://github.com/urielbochi/bravi-contacts
  ```

* Entre no repositório clonado

  ````bash
  cd bravi-contacts
  ````

* Em seguida, acesse a pasta backend

  * Abra seu terminal dentro do diretório **backend**
  * Digite o comando **npm install**

  * Repita o mesmo processo, só que dessa vez, no diretório **frontend**.

* **Para os próximos passos, você deve ter instalado em sua máquina o [My SQL Workbench](https://www.mysql.com/products/workbench/), pois será necessária a execução de uma query.**
  * Entre no diretório backend
  * Encontre o arquivo **.env.sample**
  * Altere as configurações do arquivo para tornar possível a conexão de sua database.
  * Após a conexão ter sucesso, abra o arquivo **ContactsQuery** localizado no destino ``bravi-contacts\backend`` com o programa My SQL Workbench.
  * Execute o script através do botão de raio localizado no topo.



## Inicializando o projeto

* Agora, com a sua database populada, entre na pasta backend novamente
  * Abra seu terminal dentro da pasta
  * Digite o comando **node index**
  * Um terminal irá iniciar, se a mensagem ``Conectado a porta 3001`` aparecer, significa que houve êxito. 
* Após ligar o servidor, acesse a pasta frontend
  * Abra seu terminal dentro da pasta.
  * Digite o comando **npm start**.
  * O site irá abrir se tudo ocorrer com êxito.



## Stacks utilizadas

**Front-end**: Typescript, React js (Context, Hooks, Router), HTML, CSS

**Back-end:** Node.js, JavaScript, Sequelize, MySQL, Express



# Documentação da API

 ## 	Usuário 



## 	POST

* **Realiza o registro de um usuário**

  ```json
  MÉTODO: POST
  
  http://localhost:3001/user/
  
  BODY:
  
  {
      "name": "Lilian Santos",
      "email": "liliansantos@gmail.com"
  }
  ```

  Saída:

  ```json
  {
      "id": 6,
      "name": "Lilian Santos",
      "email": "liliansantos@gmail.com"
  }
  ```

  

  ## DELETE

* **Realiza a exclusão de um usuário (Exclui o usuário e todos os seus contatos)**

  ```json
  MÉTODO: DELETE
  
  http://localhost:3001/user/:id
  ```

* Saída

  ````json
  {
      "id": 1,
      "message": "User deleted",
      "status": "Success"
  }
  ````



## Contatos



## POST

* Realiza o registro de um contato para determinado usuário

  ```json
  MÉTODO: POST
  
  http://localhost:3001/contacts/
  
  {
      "name": "Matheus Pepe",
      "phone": "41 66852148",
      "email": "mathpepe@gmail.com",
      "whatsapp": "489982567",
      "userId": 1
  }
  ```

* Saída:

  ```json
  {
      "id": 13,
      "name": "Pepe",
      "phone": "41 66852148",
      "email": "lilianalmeida@gmail.com",
      "whatsapp": "47996251585",
      "userId": 1
  }
  ```

  

## GET

* Realiza a obtenção de todos os registros do banco

  ```json
  MÉTODO: GET
  
  http://localhost:3001/contacts/
  ```

* Saída:

  ````json
  [
      {
          "id": 1,
          "name": "Matheus Pepe",
          "phone": "+55 11 98152-0245",
          "email": "matheuspepe@gmail.com",
          "whatsapp": "+55 11 98152-0245",
          "userId": 1
      },
      {
          "id": 2,
          "name": "Luiz Fernando",
          "phone": "+55 13 99611-9313",
          "email": "luizfernando@gmail.com",
          "whatsapp": "+55 13 99611-9313",
          "userId": 2
      },
      {
          "id": 3,
          "name": "Lilian Almeida",
          "phone": "+55 21 98323-8716",
          "email": "julianahapataix@gmail.com",
          "whatsapp": "+55 21 98323-8716",
          "userId": 1
      }
   ]
  ````

  * Realiza a obtenção de todos os contatos de um usuário especifico

  ````json
  MÉTODO: GET
  
  http://localhost:3001/contacts/:id
  ````

  * Saída:

  ````json
  [
      {
          "id": 7,
          "name": "Raphael Soares",
          "phone": "+55 84 9613-9498",
          "email": "raphsoares@gmail.com",
          "whatsapp": "+55 84 9613-9498",
          "userId": 2
      },
      {
          "id": 8,
          "name": "Ruan Afonso",
          "phone": "+55 53 8128-4404",
          "email": "ruanafonso@gmail.com",
          "whatsapp": "+55 53 8128-4404",
          "userId": 2
      }
  ]
  ````

  * Realiza a obtenção de um único contato

  ````json
  MÉTODO: GET
  
  http://localhost:3001/contacts//item/1
  ````

  * Saída:

  ```json
  {
      "id": 1,
      "name": "Matheus Pepe",
      "phone": "+55 11 98152-0245",
      "email": "matheuspepe@gmail.com",
      "whatsapp": "+55 11 98152-0245",
      "userId": 1
  }
  ```

  

  ## DELETE

  * Realiza a exclusão de um contato especifico

  ````json
  MÉTODO: DELETE
  
  http://localhost:3000/contacts/:id
  ````

  

  ## PUT

  * Atualiza um contato especifico

  ````json
  MÉTODO: PUT
  
  http://localhost:3001/contacts/:id
  ````

  * Saída:

  ````json
  {
      "id": "21",
      "message": "User updated",
      "status": "Success"
  }
  ````

  

  

  ## Ferramentas adicionais

  * https://joeschmoe.io/ (API de avatares)

  

  

  ## Próximos passos

  * Desenvolver um chat funcional;
  * Utilizar o type correto de todos os elementos;
  * Permitir a criação de contas front-end;
  * Utilizar JWT para autenticação;
  * Tornar a search bar funcional;
  * Adicionar seções no menu hamburguer;
  * Docker;

  

