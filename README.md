# Trabalho_01_S206

Repositório para entrega do Primeiro Projeto Prático utilizando Cypress para teste de UI (Interface de Usuário)

WebSite testado: Aprendendo a Testar

Funcionalidades testadas:
- Ação do botão 'História e Conceitos de Testes';
- Ação do botão 'Comunidade de Testadores';
- Ação do botão 'Gestão de Testes';
- Ação do botão 'Ferramentas para Testes';
- Ação de Registro de Dado no site com Sucesso;
- Ação de Registro de Dado no site com Falha (com campo nome "em branco").

Para realizar a execução dos testes basta clonar esse projeto para uma pasta local no dispositivo e executar o cypress através de um terminal seguindo o comando ./node_modules/.bin/cypress open  de dentro da pasta "testes" deste projeto.

Para gerar o relatório, basta executar o comando ./node_modules/.bin/cypress run --spec 'cypress/e2e/**/'  via terminal estando dentro da pasta "testes".
O mesmo será gerado na aba "reports\html"
 - nome do arquivo: index.html
 Para acessá-lo, basta clicar com o botão direito do mouse em cima do nome do arquivo, copiar o caminho do mesmo, colar este caminho em um navegador e assim terá disponível todo o conteúdo testado e os resultados do mesmo.




