# Cypress-Test

Este repositório contém o código-fonte e os testes automatizados desenvolvidos para o Trabalho de Conclusão de Curso (TCC) intitulado Cypress-Test.

## Descrição

O projeto consiste em uma suíte de testes automatizados utilizando o framework Cypress. Os testes são executados em uma aplicação web para verificar o correto funcionamento de suas funcionalidades.

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

- Node.js
- Cypress

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
npm run open
```

5. Na janela do Cypress, selecione o teste desejado a partir da estrutura de pastas exibida.

6. O teste selecionado será executado e você poderá acompanhar a execução na interface do Cypress.

## Personalização dos testes

Você pode personalizar e adicionar mais testes no diretório `integration`, organizando-os em subpastas conforme necessário. Além disso, é possível configurar plugins personalizados e adicionar comandos personalizados no diretório `plugins` e `support`, respectivamente.

## CI (Integração Contínua)

O projeto utiliza GitHub Actions para execução de testes automatizados em ambientes de integração contínua. A configuração do fluxo de trabalho pode ser encontrada no arquivo `.github/workflows`:

### Arquivo: .github/workflows/main.yml

```yaml
name: End-to-End Tests 🧪
```

## Licença

Este projeto está licenciado sob a licença ISC.