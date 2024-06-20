# Projeto

### Cenário

Vamos implementar um sistema de vendas online com a possibilidade de realizar pedidos com múltiplos itens, cada um deles com uma quantidade variável, calculando o frete, os impostos, aplicando um cupom de desconto e ainda interagindo com o estoque. Além disso teremos ainda fluxos de pagamento e cancelamento do pedido realizado.

## Índice
[Validação do cpf](#parte-1)<br>
[Validação do cupon de desconto](#parte-2)<br>
[Anotações](#anotações)<br>
 - [1. Code Smells](#1-code-smells)<br>

## Parte 1

### Testes

1 - Não deve criar um pedido com cpf inválido <br>
2 - Deve criar um pedido com 3 itens (com descrição, preço e quantidade) <br>
3 - Deve criar um pedido com cupom de desconto (percentual sobre o total do pedido) <br>


### Considere
Refatorar o algoritmo de validação de cpf: https://github.com/rodrigobranas/cccat7_refactoring/blob/master/src/example2/cpfBefore.ts

### Sugestões

Utilize a sua linguagem e biblioteca de teste de sua preferência
Faça a modelagem da forma que desejar e não se preocupe por enquanto, vamos implementar juntos na aula seguinte com influências de DDD e Clean Architecture

### Dicas
Devem existir no mínimo 2 arquivos, um de teste e outro que implementa os cenários propostos
Tente seguir com disciplina, criando primeiro um teste que falha, depois fazendo e teste passar e refatorando

## Parte 2

### Testes
1. Não deve aplicar cupom de desconto expirado
2. Ao fazer um pedido, a quantidade de um item não pode ser negativa
3. Ao fazer um pedido, o mesmo item não pode ser informado mais de uma vez
4. Nenhuma dimensão do item pode ser negada
5. O peso do item não pode ser negativo
6. Deve calcular o valor do fret com base nas dimensões (altura, largura e profundidade em cm) e o pese dos produgos (em kg)
7. Deve retornar o preço mínimo de frete caso ele seja superior ao valor calculado.

### Considere

- O valor mínimo é de R$ 10,00
- Por enquanto, como não temos uma forma de calcular a distância entre o CEP de origem e o destino, será de 1000 km (fixo)
- Utilize a fórmula abaixo para calcular o valor do frete

### Fórmula do frete

Valor do Frete = distância (km) * volume (m3) * (densidade/100)

#### Exemplos de volume ocupado (cubagem)<br>
|     ITEN   |        CÁLCULO       |   VOLUME (m3) |
| :--------: | :------------------: | :------------:|
| Camera     | 20cm x 15 cm x 10 cm |   0,003 m3    |
| Guitarra   | 100cm x 30cm x 10cm  |    0,03 m3    |
| Geladeira  | 200cm x 100cm x 50cm |      1 m3     | 


#### Exemplos de densidade

|     ITEN   |        CÁLCULO       |   DENSIDADE (m3) |
| :--------: | :------------------: | :---------------:|
|   Camera   |    1kg / 0,003 m3    |      333kg/m3    |
|  Guitarra  |    3kg / 0,03 m3     |      100kg/m3    |
| Geladeira  |       40kg / 1 m3    |       40kg/m3    |

<details>
<summary>Exemplos</summary>
produto: Camera
distância: 1000 (fixo)
volume: 0,003
densidade: 333
preço: R$9,90 (1000 * 0,003 * (333/100))
preço mínimo: R$10,00

produto: Guitarra
distância: 1000 (fixo)
volume: 0,03
densidade: 100
preço: R$30,00 (1000 * 0,03 * (100/100))<br>
produto: Geladeira
distância: 1000 (fixo)
volume: 1
densidade: 40
preço: R$400,00 (1000 * 1 * (40/100))
</details>


### Anotações

#### 1. Code Smells
<details>
<summary>1. Nome estranho</summary>

  - calc.ts     - calculateRide.ts
  - dist        - distance
  - ds          - date
  - mov         - segment
  - movArray    - segments
  - result      - fare<br>
  Obs.: Renomear variável, método, função, classe, arquivo
</details>

<details>
<summary>2. Linhas em branco</summary>

  - Medida vertical que o código ocupa na tela. 
  - A medida ideal é que o código caiba na tela do monitor.
  - Apagar linha em branco
  - Extrair Método
</details>

<details>
<summary>3. Comentários</summary>

  - Se o comentário é necessário o código não está claro, vc pode extrair para uma variável auto explicativa, ou extrair para uma função que possa ser testada.
  - Introduzir variável explicativa
  - Extrair Método
  - Apagar comentário
</details>

<details>
<summary>4. Código morto</summary>

  - Apagar código Morto
</details>

<details>
<summary>5. Condições confusas e aninhadas</summary>

  - Inverter as condiçães para introduzir cláusulas quarda
  - consolidar condições
  - Introduzir ternários
</details>

<details>
<summary>6. Magic number</summary>

  - Extrair constantes explicativas
</details>

<details>
<summary>7. Tratamento inadequado de exceptions</summary>

  - introduzir tratamento de exceptions <br>
===> codigo -> design (arte)
</details>

<details>
<summary>8. Excesso de parâmetros</summary>

  - quanto menos melhor
  - introduza instâncias
</details>

<details>
<summary>9. Métodos grandes</summary>

  - extrair método
</details>

<details>
<summary>10. Classes grandes</summary>

  - extrair classes
</details>
