---
title: "Hash tables"
prev: "fundamentals/data-structures/6-deque"
next: "fundamentals/data-structures/8-trees"
---

# Hash tables

## Conceito e Funcionamento

Uma tabela de hash é uma estrutura de dados que utiliza uma função de hash para mapear chaves (ou chaves de busca) para valores. A função de hash transforma a chave em um índice da tabela, onde o valor associado à chave é armazenado ou recuperado. A principal característica das tabelas de hash é a busca e recuperação de dados em tempo quase constante, tornando-as ideais para problemas em que a velocidade é crucial.

## Funções de Hash

A eficácia de uma tabela de hash depende em grande parte da qualidade da função de hash. Uma função de hash ideal distribui as chaves de forma uniforme pela tabela, minimizando colisões e maximizando a eficiência da busca. No entanto, é difícil criar funções de hash perfeitas para todas as situações. Além disso, a qualidade de uma função de hash está diretamente relacionada à previsibilidade e distribuição dos dados de entrada.

## Colisões e Resolução de Colisões

Colisões ocorrem quando duas chaves diferentes são mapeadas para o mesmo índice da tabela de hash. Existem várias abordagens para resolver colisões:

1. **Encadeamento separado:** Cada slot da tabela mantém uma lista encadeada de elementos que mapeiam para o mesmo índice.
2. **Endereçamento aberto:** Quando ocorre uma colisão, o algoritmo de busca percorre a tabela em busca do próximo slot vazio.
3. **Hashing duplo:** Uma segunda função de hash é usada para calcular um deslocamento a ser aplicado ao índice original em caso de colisão.

## Aplicações

As tabelas de hash têm uma ampla gama de aplicações, incluindo:

- **Dicionários e bancos de dados:** Utilizadas para armazenar e recuperar informações de forma eficiente, como em sistemas de gerenciamento de bancos de dados e na implementação de dicionários.
- **Armazenamento de cache:** Usadas para armazenar temporariamente dados frequentemente acessados, como na implementação de caches em sistemas de processamento.
- **Verificação de integridade:** Em criptografia, as tabelas de hash são usadas para verificar se os dados foram alterados, garantindo a integridade das informações.

## Complexidade Temporal

A eficiência das tabelas de hash é notável em suas operações principais:

- **Inserção:** O(1) (tempo médio, considerando uma boa função de hash e resolução de colisões adequada)
- **Busca:** O(1) (tempo médio, sob as mesmas considerações)
- **Remoção:** O(1) (tempo médio, sob as mesmas considerações)

## Distinção

### Hash Tables

Uma tabela de hash (hash table) é uma estrutura de dados abstrata que mapeia chaves a valores, permitindo a recuperação eficiente desses valores usando suas chaves. Ela usa uma função de hash para calcular o índice onde os dados serão armazenados. As tabelas de hash são flexíveis e podem ser implementadas de várias maneiras diferentes, incluindo separação de encadeamentos, resolução de colisões e rehashing. Elas são a base para muitas estruturas de dados e são usadas em uma ampla variedade de aplicações, como bancos de dados, caches e sistemas de busca.

### HashSets

Um `HashSet` é uma estrutura de dados que armazena elementos únicos, sem permitir duplicatas. Ele é implementado utilizando a técnica de hash, onde os elementos são mapeados diretamente para índices em uma tabela usando uma função de hash. A principal característica do `HashSet` é sua capacidade de verificação eficiente para a presença de elementos, tornando-o ideal para verificar pertencimento e eliminar duplicatas.

### HashMaps

Um `HashMap` é uma estrutura de dados que armazena pares chave-valor. Ele também é implementado utilizando a técnica de hash, onde as chaves são mapeadas para índices em uma tabela usando uma função de hash. A chave é usada para buscar o valor correspondente. Isso permite recuperação rápida de valores associados a chaves específicas. `HashMaps` são amplamente usados para implementar dicionários, bancos de dados em memória e caches.

> Em resumo, **Hash tables** são a "definição"/teoria enquanto `HashSets` e `HashMaps` são implementações. `HashSets` são usados para armazenar elementos únicos, `HashMaps` para armazenar pares chave-valor, e hash tables são estruturas de dados abstratas que permitem mapeamento eficiente de chaves para valores.

## Conclusão

As tabelas de hash são ferramentas poderosas que proporcionam eficiência na busca e no armazenamento de dados. No entanto, a escolha da função de hash e da estratégia de resolução de colisões é crucial para garantir um desempenho otimizado. Com sua capacidade de oferecer buscas rápidas e acesso eficiente a informações, as tabelas de hash são uma adição valiosa ao conjunto de estruturas de dados e algoritmos de qualquer programador.
