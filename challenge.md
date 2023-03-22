# considerações
- pensei em responsabilidades unicas por isso criei a lógica separada do controller
- utilizei recursividade para ambos montar ou deleter o menu
- busquei todos os menus antes de montar ou deletar para otimizar a quantidade de consultas
- nomeei as variaveis e funções pensando em cleancode`
- criei testes para validar a logica

# como funciona a callstack da recursividade no node?
  - existe um limite máximo que vem configurado por padrão, pode estourar caso ultrapasse esse limite

# como rodar?
  - rode o mongodb
  `docker run -d -p 27017:27017 --name=mongo-base39 mongo:latest` ou `docker start mongo-base39`
  - npm run start
  - npm run test