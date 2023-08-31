const express = require('express')

const app = express()

// get => informações do back-end para o front-end
// post => recebe informações do front-end no back-end

app.get('/', (requisicao, resposta) => {
    resposta.send("Este é o meu Back-End")
})

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000")
})