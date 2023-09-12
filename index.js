const express = require('express');
const cron = require('node-cron');
const { executeScritpsPython } = require('./cronJob');

const app = express();
const PORT = process.env.PORT || 3000;

// Obtenha a data e hora atuais do servidor
const serverStartTime = new Date();
const formattedServerStartTime = serverStartTime.toLocaleString();

console.log(`Servidor iniciado às ${formattedServerStartTime}`);

// Código do servidor Express

// Código do agendador de tarefas com node-cron
cron.schedule('0 15 * * *', () => {
  // Obtenha a data e hora atuais
  const currentTime = new Date();

  // Formate a data e hora para exibição
  const formattedTime = currentTime.toLocaleString();

  console.log(`Executando tarefa diariamente às ${formattedTime}`);

  // Chame a função importada para executar o script Python
  executeScritpsPython();
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
