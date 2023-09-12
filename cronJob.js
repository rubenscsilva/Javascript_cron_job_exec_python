import { exec } from 'node:child_process';
// import { error } from 'node:console';
// import { stderr, stdout } from 'node:process';
import cron from 'node-cron';

// Obtenha a data e hora atuais do servidor
const serverStartTime = new Date();
const formattedServerStartTime = serverStartTime.toLocaleString();

console.log(`Servidor iniciado às ${formattedServerStartTime}`);

const scriptsPythonPath = './scripts_python/test.py';

const pythonCommand = `python ${scriptsPythonPath}`;

function executeScritpsPython() {
  exec(pythonCommand, (error, stdout, stderr) => {
    if (error) {
      console.error(`Erro ao executar o arquivo Python: ${scriptsPythonPath}`);
      return;
    }
    console.log(`Saída do arquivo Python:\n${stdout}`);
    console.error(`Erros do arquivo Python:\n${stderr}`);
  });
}

// Agende para rodar diariamente às 02:48
cron.schedule('48 2 * * *', () => {
  console.log('Executando tarefa diariamente às 02:48');

  // Chame a função importada para executar o script Python
  executeScritpsPython();
});
