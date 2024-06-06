/* informação importante sobre o arquivo package.json:

dentro do arquivo package.json na parte de scripts podemos alterar para o nome que nos quisermos no caso alterei o nome para "gera"
lembre-se de sempre usar ASPAS DUPLAS
em seguida voce coloca o comando "webpack-w":
esse comando serve basicamente para fazer com que o webpack fique nos assistindo e converta o nosso codigo para um codigo antigo
essa conversação fica no arquivo que sera gerado chamado bundle.js
agora dentro do arquivo index.js execute o terminal e digite esse comando para executar o webpack: --------------- npm run gera ------------------
lembre-se "gera" e o nome do nosso script que possui o valor "webpack -w" que esta dentro do arquivo package.json

quando voce digitar o comando npm run gera, automaticamente vai gerar o arquivo bundle.js e bundle.js.map esses 2 arquivos vão ficar dentro da pasta js
esses 2 arquivos que foram gerados voce NUNCA vai mexer neles porque eles são os arquivos que vão converte seu codigo que esta dentro de SRC/index.js
para acessar o html voce vai usar o live server ou aperta alt+l+o no arquivo index.js e vá em public

caso voce não queria que o webpack fique assistindo voce, ou seja, o webpack converta em tempo real tudo o que voce faz no index.js para o bundle.js e bundle.js.map
use no terminal ctrl+c para parar a execução do webpack e quando voce quiser atualizar o bundle execute novamente o comando --> npm run gera

existe um comando --> timeout 30 npm run gera (NÃO FUNCIONA NO WINDOWS APENAS NO LINUX E MAC). inves disso use:

$timeout = 30 # tempo em segundos
$command = "run gera" # seu comando

$job = Start-Job -ScriptBlock { Invoke-Expression $using:command }

if (Wait-Job -Job $job -Timeout $timeout) {
    Receive-Job -Job $job
} else {
    Stop-Job -Job $job
    Write-Host "O comando '$command' foi interrompido após $timeout segundos."
}
esse comando faz com que a cada 30segundos o bundle seja atualizado, ou seja, mesmo que voce feche o vscode o script continua em execução

caso a pasta node-modules seja excluida, use o comando npm i e ele sera instalado novamente
*/

console.log(4444444444444444444)