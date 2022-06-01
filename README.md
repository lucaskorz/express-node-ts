# express-node-ts
API Node Express w/ Routing Controllers & Class Validator

Simples aplicação que utiliza Node Express com TS utilizando controle de rotas (routing controllers) 
e o class validador para tratar determinados erros no body da requisição.

Também possui um customError que verifica se o erro é do tipo ValidationError (erros do class validator) 
e caso for faz um tratamento de legibilidade e devolve à quem está consumindo a API de forma que possa visualizar
o erro com mais precisão.