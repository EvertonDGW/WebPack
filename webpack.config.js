const path = require('path'); //path é um modulo do node que estamos requisitando

//===============================================================================================================================================

//esse comando é usado para criar um modulo que vai se exportado/importado para outros arquivos, ou seja,
//é um modulo pronto que pode ser requisitado por outros arquivos

module.exports = {
    // mode é uma chave e development é o valor dessa chave. Você pode alterar de development para production isso afeta a maneira como o bundle exibirá as coisas
    // quando você fizer alterações no webpack.config.js você deve executar o comando npm run gera no terminal do index.js para atualizar essa modificação
    mode: 'production',

    entry: './src/main.js', // quando usamos entry: './src/index.js', estamos dizendo ao Webpack: "Comece a partir deste arquivo quando estiver montando o projeto".

    // o comando __dirname dentro do arquivo webpack.config.js diz respeito à pasta que nós criamos que é MODELO-WEBPACK
    // a função path.resolve() vai instruir o webpack a chegar nos arquivos public, assets, js
    // isso é um objeto
    output: {
        path: path.resolve(__dirname, 'public', 'assets', 'js'),
        // chave: valor referente a chave path

        // O comando filename: 'bundle.js' especifica o nome do arquivo que será gerado após a compilação feita pelo Webpack.
        filename: 'bundle.js'
    },

    module: {
        rules: [
            {
                // estamos excluindo a pasta node_modules, ou seja, o webpack não vai analisar essa pasta,
                // estamos fazendo isso porque essa pasta é muito grande e vai deixar o nosso sistema lento
                exclude: /node_modules/, // chamamos isso de expressão regular
                test: /\.js$/, // é o arquivo que vai ser analisado e através dele que o bundle.js vai ser gerado. aqui também é uma expressão regular
                use: {
                    loader: 'babel-loader', // esse babel-loader é um arquivo dentro de package.json
                    options: {
                        presets: ['@babel/env']
                    }
                }
            },
            {
                test: /\.css$/, //esses 2 comandos servem para carrega o css
                use: ['style-loader', 'css-loader']
            }
        ]
    },

    // devtool serve para mapear quando ocorrer um erro, esse erro será localizado no arquivo original e não no arquivo bundle.js
    devtool: 'source-map'
};