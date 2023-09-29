# Cypress-Test

Este repositório contém o código-fonte e os testes automatizados utilizados para o Trabalho de Conclusão de Curso (TCC) Refatoração de testes automatizados utilizando inteligência artificial.

## Descrição

O projeto consiste na refatoração de uma suíte de testes automatizados com framework Cypress. Os testes são executados em uma aplicação web Real World App para verificar o correto funcionamento de suas funcionalidades.

## Hierarquia de pastas

- `cypress`: Contém os arquivos de configuração e os testes automatizados.
- `fixture`: Armazena os arquivos de dados usados nos testes.
- `integration`: Contém os testes automatizados, organizados em subpastas para diferentes categorias de testes.
- `plugins`: Contém plugins personalizados para estender as funcionalidades do Cypress.
- `screenshots`: Armazena os screenshots capturados durante a execução dos testes.
- `support`: Contém arquivos de suporte, como comandos personalizados e configurações adicionais.
- `videos`: Armazena os vídeos de gravação dos testes.

## Requisitos

Para executar os testes automatizados, é necessário ter o seguinte ambiente configurado:

- Node.js 16+
- Cypress 9.6.0 

Certifique-se de ter essas tecnologias instaladas em sua máquina antes de executar os testes.

## Como executar os testes

Siga as etapas abaixo para executar os testes automatizados:

1. Certifique-se de ter clonado este repositório em sua máquina local.

2. No terminal, navegue até o diretório raiz do projeto.

3. Execute o seguinte comando para instalar as dependências:

```shell
npm install
```

4. Execute o seguinte comando para abrir a interface do Cypress:

```shell
npm run cy:open
```

5. Na janela do Cypress, selecione o teste desejado a partir da estrutura de pastas exibida.

6. O teste selecionado será executado e você poderá acompanhar a execução na interface do Cypress.

## Personalização dos testes

Você pode personalizar e adicionar mais testes no diretório `integration`, organizando-os em subpastas conforme necessário. Além disso, é possível configurar plugins personalizados e adicionar comandos personalizados no diretório `plugins` e `support`, respectivamente.

Testes antes de serem Refatorados com auxilio de IA


https://github.com/M4deN/Cypress-Test/assets/43422425/9d6744d5-f4ea-4f5c-9dbe-54528eaed800


Testes pós serem Refatorados com auxilio de IA


https://github.com/M4deN/Cypress-Test/assets/43422425/b20ef3ad-802c-4794-a0be-954464f5a3d0


## CI (Integração Contínua)

O projeto utiliza GitHub Actions para execução de testes automatizados em ambientes de integração contínua. A configuração do fluxo de trabalho pode ser encontrada no arquivo `.github/workflows`:

### Arquivo: .github/workflows/mai

n.yml

```yaml
name: Integração Contínua Cypress Tests TCC 🧪
```

## Licença

Este projeto está licenciado sob a licença MIT.
