# # AT5---Front-End-e-Copilotagem-com-IA
## 📝 Descrição do Projeto Efeito Vitrine

Este projeto consiste em um site informativo e interativo chamama **Efeito Vitrine** que investiga como a comparação social com conquistas publicadas no LinkedIn alimenta o FOMO profissional e a corrida por certificações em estudantes de TI. O objetivo principal é mostrar, com dados e pesquisa, como a "vitrine" de conquistas alheias gera ansiedade de produtividade, síndrome do impostor e a sensação de estar atrasado na carreira, propondo uma reflexão crítica sobre o tema.

O site reúne contexto, teoria, evidências, um olhar crítico sobre a corrida por certificações, o lado positivo da rede e um autoteste de reflexão.

Desenvolvido em dupla como parte da disciplina de **Desenvolvimento Front-End Para Web (2026.2)**, o projeto cruza os eixos do **Futuro do Trabalho** (hiperconectividade e validação em tempo real) e das **dimensões socioemocionais da Geração Z**. O sistema combina uma base estrutural desenvolvida de forma autoral em HTML5 estritamente semântico, CSS3 com variáveis customizadas (Design System) e Bootstrap 5, integrada a recursos avançados co-desenvolvidos criticamente com Inteligência Artificial Generativa.


## 🔗 Link do repositório
https://github.com/leaoduda1911-cyber/AT5---Front-End-e-Copilotagem-com-IA


## 📄 Páginas do site

| Página | Arquivo | Conteúdo |

| [Início](https://leaoduda1911-cyber.github.io/AT5---Front-End-e-Copilotagem-com-IA/index.html) | `index.html` | Apresentação do projeto |

| [A vitrine](https://leaoduda1911-cyber.github.io/AT5---Front-End-e-Copilotagem-com-IA/contexto.html) | `contexto.html` | A carreira como vitrine pública no LinkedIn |

| [Teoria](https://leaoduda1911-cyber.github.io/AT5---Front-End-e-Copilotagem-com-IA/teoria.html) | `teoria.html` | Base teórica sobre comparação social e FOMO |

| [Evidências](https://leaoduda1911-cyber.github.io/AT5---Front-End-e-Copilotagem-com-IA/evidencias.html) | `evidencias.html` | Dados e estudos que sustentam o tema |

| [Certificações](https://leaoduda1911-cyber.github.io/AT5---Front-End-e-Copilotagem-com-IA/certificacoes.html) | `certificacoes.html` | A corrida por selos (AWS, Azure, CompTIA) e o outro lado deles |

| [Lado positivo](https://leaoduda1911-cyber.github.io/AT5---Front-End-e-Copilotagem-com-IA/contraponto.html)| `contraponto.html` | Contraponto: benefícios do LinkedIn |

| [Autoteste](https://leaoduda1911-cyber.github.io/AT5---Front-End-e-Copilotagem-com-IA/termometro.html) | `termometro.html` | Termômetro da Vitrine, com 10 afirmações |

| [Transparência](https://leaoduda1911-cyber.github.io/AT5---Front-End-e-Copilotagem-com-IA/transparencia.html) | `transparencia.html` | Referências e transparência do projeto |


## 📝 Termômetro da Vitrine
Autoteste de reflexão com 10 afirmações sobre o uso do LinkedIn, respondidas em uma escala de 1 (discordo totalmente) a 5 (concordo totalmente).

- Barra de progresso mostrando quantas afirmações foram respondidas.
- O resultado só aparece depois que todas as perguntas são respondidas.
- Botão **Refazer** para limpar as respostas e recomeçar.

> **Aviso:** o teste **não é um diagnóstico**. É uma ferramenta de reflexão, não validada nem clínica. Foi inspirado na escala de FoMO de Przybylski et al. (2013), com itens escritos pela equipe.


## 🚀 Tecnologias Utilizadas
* **Linguagem:** HTML5 semântico, CSS3 e JavaScript
* **Bibliotecas:** Bootstrap 5, Chart.js
* **Ferramentas:** VSCode, Git e GitHub
* **Modelo de IA:** Gemini e Claude
* **Fontes:** [DM Sans](https://fonts.google.com/specimen/DM+Sans) e [Manrope](https://fonts.google.com/specimen/Manrope) (Google Fonts)

## 🛠️ Recursos
- Layout responsivo, com menu que se adapta ao celular
- Alternância entre **tema claro e escuro**
- Cards, acordeões e alertas com estilo próprio
- Atenção à acessibilidade: `aria-label`, `aria-live`, foco visível e respeito à preferência de movimento reduzido


## ⛩️ Estrutura do projeto
```
.
├── index.html
├── contexto.html
├── teoria.html
├── evidencias.html
├── certificacoes.html
├── contraponto.html
├── termometro.html
├── transparencia.html
├── css/
│   └── styles.css
├── js/
│   ├── app.js
│   └── termometro.js
└── README.md
```

## 📊 Resultados e Aprendizados
A aplicação atingiu excelente adaptação em diferentes tamanhos de tela (smartphones, tablets e desktops) utilizando o sistema de Grid de 12 colunas do Bootstrap. 

* **Pesquisa e Delimitação:** Investigamos criticamente o impacto do FOMO profissional (Fear of Missing Out) e da comparação social constante no ambiente digital da Geração Z. Os dados e estudos analisados revelaram como a vitrine de sucessos alheios nas redes de carreira gera ansiedade de performance, Síndrome do Impostor e fadiga crônica, fundamentando o recorte inovador do projeto longe de clichês superficiais.  

* **Microaplicação Interativa:** Desenvolvemos uma ferramenta prática voltada para a autoavaliação do usuário frente ao uso corporativo e digital. Especificamente, implementamos um formulário interativo composto por 10 afirmações graduadas de 1 (discordo totalmente) a 5 (concordo totalmente) focado no uso do LinkedIn, permitindo que os usuários possam saber seu nível de esgotamento e recebam um diagnóstico pontuado com recomendações de bem-estar.

* **Visualização de Dados:** Integramos um componente gráfico dinâmico utilizando a biblioteca Chart.js, apresentando de forma visual métricas empíricas sobre a distribuição de horas de foco, picos de estresse laboral e a prevalência de sintomas de Burnout e ansiedade de produtividade na rotina dos jovens trabalhadores.  

* **Arquitetura Front-End Autoral e Acessível:** Estruturação rigorosa com tags semânticas priorizando a acessibilidade digital (WCAG 2.1 AA) e boas práticas de SEO.  

* **Recursos Avançados e Copilotagem Crítica:** Implementação bem-sucedida gráficos dinâmicos com Chart.js e sistema de alternância de temas (Dark/Light mode) validados através de um rigoroso processo de auditoria de código gerado por IA (documentado no AUDITORIA_IA.md).  

* **Boas Práticas de Versionamento:** Aprimoramos a colaboração em equipe por meio de uma divisão de tarefas equilibrada e do uso rigoroso do Git. Aplicamos o padrão de Conventional Commits (feat:, fix:, style:, docs:, refactor:) para registrar de forma clara a evolução do projeto no repositório compartilhado e garantir um deploy limpo no GitHub Pages.

## ✍️ Autoras
- Julia Sarai Tolentino Pereira
- Maria Eduarda Almeida Pereira

## ⚠️ Aviso
Conteúdo educativo. Não substitui avaliação psicológica, orientação de carreira ou consulta às fontes originais.

## 🧠 Declaração de Uso Ético da IA
Este projeto utilizou inteligência artificial Gemini e Claude estritamente como suporte tecnológico para a copilotagem de recursos avançados para a estruturação de gráficos em Chart.js, microaplicação interativa do modo claro/ escuro e lógica de interações dinâmicas, passando por um rigoroso processo de auditoria técnica. Todo o código gerado foi revisado, testado e compreendido por mim, garantindo a minha responsabilidade integral sobre a autoria final, integridade e funcionamento da aplicação.

## 💻 Deploy do projeto
[Clique para acessar](https://leaoduda1911-cyber.github.io/AT5---Front-End-e-Copilotagem-com-IA/)
---
[Voltar ao início](https://github.com/juliasaraitp-ops/portfolio-julia-sarai-tolentino-pereira)
