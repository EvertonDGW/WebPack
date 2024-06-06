const path = require('path'); //path é um modulo do node que estamos requisitando

//===============================================================================================================================================

//esse comando é usado para criar um modulo que vai se exportado/importado para outros arquivos, ou seja,
//é um modulo pronto que pode ser requisitado por outros arquivos

module.exports = {
    //mode é uma chave e developmente eo valor dessa chave. VOCE pode alterar de development para production isso afeta a maneira como o bundle exibira as coisas
    //quando voce fizer alterações no webpack.config.js voce deve executa o comando npm run gera no terminal do index.js para atualizar essa modificação
    mode: 'production', 

    entry: './src/index.js', //quando usamos entry: './src/index.js', estamos dizendo ao Webpack: "Comece a partir deste arquivo quando estiver montando o projeto".

    // o comando __dirname dentro do arquivo webpack.config.js diz respeito a pasta que nos criamos que é MODELO-WEBPACK
    //a função path.resolve() ela vai instruir o webpack a chegar no arquivos public , assets, js
    //isso é um objeto
    output: {
        path: path.resolve(__dirname, 'public', 'assets', 'js'),
        // chave:             valor referente a chave path

        //O comando filename: 'bundle.js' especifica o nome do arquivo que será gerado após a compilação feita pelo Webpack.
        filename: 'bundle.js'
    },

    module: {
        rules: [{ //aqui dentro vamos estabelecer regras. rules é basicamente um array com varios objetos

            //estamos excluindo a pasta node_modules, ou seja, o webpack não vai analisar essa pasta, estamos fazendo isso porque essa pasta é muito grande e vai deixar o nosso sistema lento
            exclude: /node_modules/, //chamamos isso de expressão regular
            test: /\.js$/, //é o arquivo que vai ser analisado é atraves dele que o bundle.js vai ser gerado. aqui tambem é uma expressão regular
            use: {
                loader: 'babel-loader', //esse babel-loader é um arquivo dentro de package.json
                options: {
                    presets: ['@babel/env']
                }
            }
        }]
    },

    //devtool serve para mapear quando ocorrer um erro, esse erro sera localizado no arquivo original e não no arquivo bundle.js
    devtool: 'source-map'
}

