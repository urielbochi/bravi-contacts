# Bravi  | Contact List

Uma lista de contatos onde você pode adicionar, remover ou editar um contato. Cada usuário possuí sua própria lista de contatos. Não foi utilizado JWT para o desenvolvimento dessa aplicação, portanto, o acesso aos usuários é através do id contido na URL. 

Exemplo:

```http
`http://localhost:3001/2`  // Acessa o usuário 2
```

```http
`http://localhost:3001/1`  // Acessa o usuário 1
```



## Instruções

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

  * Abra seu terminal dentro da pasta backend
  *  Digite o comando **npm install**

  * Repita o mesmo processo, só que dessa vez, na pasta frontend.

* **Para os próximos passos, você deve ter instalado em sua máquina o [My SQL Workbench](https://www.mysql.com/products/workbench/), pois será necessária a execução de uma query.**
  * Abra o arquivo **ContactsQuery** localizado no destino ``bravi-contacts\backend`` com o programa My SQL Workbench.
  * Execute o script através do botão de raio localizado no topo.

Exemplo (Cadastro):

```apl
MÉTODO: POST

http://localhost:3001/user

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

