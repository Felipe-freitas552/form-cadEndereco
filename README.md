## Consulta CEP ViaCEP - JavaScript
![cep](img/cep.gif)
# Descrição:
Este código JavaScript implementa uma funcionalidade de consulta de CEP utilizando a API do ViaCEP. Ao inserir um CEP válido em um campo de formulário, o script busca as informações correspondentes no banco de dados do ViaCEP e preenche automaticamente os campos de rua, bairro, cidade e estado.


Funcionalidades:
Validação de CEP: Verifica se o CEP inserido possui 8 dígitos numéricos.
Consulta à API ViaCEP: Realiza uma requisição à API do ViaCEP para obter as informações do endereço.
Preenchimento automático do formulário: Preenche os campos do formulário com as informações retornadas pela API.
Limpeza do formulário: Limpa os campos do formulário antes de realizar uma nova consulta.
Mensagem de erro: Exibe uma mensagem de erro caso o CEP seja inválido ou não seja encontrado.
Como utilizar:
Incluir o código: Copie e cole o código JavaScript em um arquivo HTML.
Criar o formulário: Crie um formulário HTML com os campos cep, rua, bairro, cidade e estado.
Associar o evento: Associe o evento focusout ao campo cep para que a função pesquisarCep seja chamada quando o campo perder o foco.
Exemplo de HTML:


# Exemplo com imagens

![exemplo](img/img_exemple.png)
<br>
***limparFormulario:*** Limpa os campos do formulário antes de realizar uma nova consulta.

![exemplo2](img/Captura%20de%20tela%202024-10-03%20074035.png)
<br>
***preencherFormulario:*** Preenche os campos do formulário com as informações do endereço.

![exemplo3](img/img_pesquisarCep.png)
<br>
***pesquisarCep:*** Executa código para mostrar as informações do CEP.


# Explicação do Código:
***use strict: Ativa o modo restrito do JavaScript, * evitando erros comuns e facilitando a depuração.***

eNumero: Verifica se uma string contém apenas dígitos numéricos utilizando uma expressão regular.
cepValido: Verifica se o CEP possui 8 dígitos numéricos.
Limpa o formulário.
Verifica se o CEP é válido.
Realiza uma requisição à API do ViaCEP.
Verifica se o endereço foi encontrado.
*Preenche o formulário ou exibe uma mensagem de erro.*
<br>

addEventListener: Associa o evento focusout ao campo cep para chamar a função pesquisarCep.
Observações:
API ViaCEP: Certifique-se de que a API do ViaCEP esteja disponível e funcionando corretamente.
<br>

Async/Await: O código utiliza async/await para lidar com requisições assíncronas de forma mais clara.
<br>

Expressões Regulares: A expressão regular ^[0-9]+$ é utilizada para validar se uma string contém apenas dígitos numéricos.
<br>

Propriedade hasOwnProperty: É utilizada para verificar se o objeto retornado pela API possui dados, indicando que o CEP foi encontrado.
<br>

Tratamento de erros: Implementar um tratamento de erros mais robusto para lidar com situações como falhas na conexão com a API.
<br>

Interface do usuário: Melhorar a interface do usuário com mensagens mais claras e feedback visual.
<br>

## Tecnologias Utilizadas
* [<code><img height="32" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png" alt="HTML5"/></code>](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
* [<code><img height="32" src="https://www.malwarebytes.com/wp-content/uploads/sites/2/2023/01/asset_upload_file97293_255583.jpg" alt="Git"/></code>](https://git-scm.com/)
* [<code><img height="32" src="https://img.shields.io/badge/VSCode-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white" alt="VisualStudio"/></code>](https://code.visualstudio.com/)
* [<code><img height="32" src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="GitHub"/></code>](https://github.com/)
* [<code><img height="32" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png" alt="javascript"/></code>](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
* [<code><img height="32" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png" alt="Css3"/></code>](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
tem menu de contexto


tem menu de contexto

# Autor
## Felipe André de Freitas Loução