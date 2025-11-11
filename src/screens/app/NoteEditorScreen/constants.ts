import { HtmlStyle } from "react-native-enriched";
import { StylesState } from "./NoteEditorScreen";

export const DEFAULT_STYLE: StylesState = {
  isBold: false,
  isItalic: false,
  isUnderline: false,
  isStrikeThrough: false,
  isInlineCode: false,
  isH1: false,
  isH2: false,
  isH3: false,
  isBlockQuote: false,
  isCodeBlock: false,
  isOrderedList: false,
  isUnorderedList: false,
  isLink: false,
  isImage: false,
  isMention: false,
};

export const htmlStyle: HtmlStyle = {
  h1: {
    fontSize: 25,
    bold: true,
  },
  h2: {
    fontSize: 18,
    bold: true,
  },
  h3: {
    fontSize: 15,
    bold: true,
  },
};

export const html = `<html> <h1>As Leis de Newton: Fundamentos da Dinâmica</h1> <br> <p>As Leis de Newton são três princípios fundamentais da física que descrevem o movimento dos objetos e as forças que atuam sobre eles. Formuladas por Isaac Newton, elas constituem a base da mecânica clássica e são essenciais para compreender como o universo funciona em escalas que vão do cotidiano aos movimentos celestes.</p> <h2>Isaac Newton e o Contexto Histórico</h2> <br> <p>Isaac Newton (1643-1727) foi um proeminente físico, matemático e astrônomo inglês, cujas descobertas revolucionaram a ciência. Suas leis do movimento e a lei da gravitação universal foram publicadas em sua obra seminal <em>Philosophiae Naturalis Principia Mathematica</em>, em 1687.</p> <br> <blockquote> <p>Newton unificou as observações de Galileu sobre o movimento e as ideias de Kepler sobre os planetas, estabelecendo um sistema coerente para descrever e prever o movimento dos corpos no universo.</p> </blockquote> <br> <h2>Primeira Lei de Newton: Lei da Inércia</h2> <br> <h3>O que é a Inércia?</h3> <br> <p>A primeira lei de Newton, também conhecida como Lei da Inércia, postula que:</p> <br> <blockquote> <p><u>Um corpo em repouso tende a permanecer em repouso, e um corpo em movimento tende a permanecer em movimento em linha reta com velocidade constante, a menos que uma força externa atue sobre ele.</u></p> </blockquote> <br> <p>Em outras palavras, os objetos resistem a mudanças em seu estado de movimento. A massa de um objeto é a medida de sua inércia.</p> <p>Exemplos práticos da Lei da Inércia:</p> <ul> <li>Um livro que está parado sobre uma mesa só se moverá se alguma força externa o empurrar ou puxar.</li> <li>Quando um veículo freia bruscamente, os passageiros são lançados para frente, pois seus corpos tendem a manter o movimento que tinham.</li> <li>Um corpo no espaço, longe de qualquer influência gravitacional ou atrito, manteria seu movimento retilíneo uniforme indefinidamente.</li> </ul> <br> <h2>Segunda Lei de Newton: Princípio Fundamental da Dinâmica</h2> <br> <h3>Relação entre Força, Massa e Aceleração</h3> <br> <p>A segunda lei de Newton estabelece uma relação quantitativa crucial entre a força resultante que age sobre um objeto, sua massa e a aceleração que ele adquire. Ela pode ser enunciada da seguinte forma:</p> <br> <blockquote> <p><em>A força resultante que atua sobre um corpo é diretamente proporcional ao produto de sua massa pela aceleração que ele adquire.</em></p> </blockquote> <br> <p>A formulação matemática para esta lei é:</p> <pre><code>F = m * a</code></pre> <p>Onde os termos representam:</p> <ul> <li><code>F</code>: a <strong>Força resultante</strong>, medida em Newtons (N).</li> <li><code>m</code>: a <strong>massa</strong> do objeto, medida em quilogramas (kg).</li> <li><code>a</code>: a <strong>aceleração</strong> do objeto, medida em metros por segundo ao quadrado (m/s<sup>2</sup>).</li> </ul> <br> <p>Esta lei nos mostra que, se aplicarmos a mesma força a dois objetos de massas diferentes, o objeto de menor massa terá uma aceleração maior.</p> <p>Exemplos:</p> <ul> <li>É consideravelmente mais fácil empurrar um carrinho de supermercado vazio do que um cheio, pois a mesma força resultará em uma aceleração maior no carrinho vazio.</li> <li>Um jogador de futebol ao chutar uma bola (menor massa) produz uma aceleração muito mais significativa do que se aplicasse a mesma força a uma bola de boliche (maior massa).</li> </ul> <br> <h2>Terceira Lei de Newton: Lei da Ação e Reação</h2> <br> <h3>Pares de Forças</h3> <br> <p>A terceira lei de Newton, conhecida como Lei da Ação e Reação, descreve a natureza das forças interativas entre os objetos. Ela afirma que:</p> <br> <blockquote> <p><em>Para toda ação, existe uma reação igual e oposta.</em></p> </blockquote> <br> <p>Isso significa que, quando um corpo exerce uma força sobre outro (a "ação"), o segundo corpo exerce uma força de igual magnitude e direção oposta sobre o primeiro (a "reação"). É fundamental compreender que essas forças atuam em <strong>corpos distintos</strong>, e por isso, não se anulam.</p> <p>As características importantes dos pares de ação e reação incluem:</p> <ul> <li>Possuem a mesma intensidade (módulo).</li> <li>Possuem a mesma direção.</li> <li>Atuam em sentidos opostos.</li> <li>Atuam sempre em corpos diferentes.</li> </ul> <br> <p>Exemplos cotidianos:</p> <ul> <li>Ao empurrar uma parede (ação), a parede empurra você de volta com a mesma força (reação).</li> <li>Um foguete é impulsionado para cima pela força de reação dos gases quentes expelidos em alta velocidade para baixo.</li> <li>Quando uma pessoa caminha, seus pés empurram o chão para trás (ação) e o chão, por sua vez, empurra os pés da pessoa para frente (reação), impulsionando-a.</li> </ul> <br> <h2>Aplicações e Importância</h2> <br> <p>As Leis de Newton são a pedra angular para o estudo da mecânica e possuem aplicações em uma vasta gama de campos. Desde a engenharia civil e automotiva até a astronomia e a exploração espacial, elas nos permitem prever e controlar o movimento de objetos. Sua compreensão é indispensável para o avanço tecnológico e o conhecimento científico do universo.</p> <h2>Resumo Final das Leis de Newton</h2> <br> <p>Para consolidar, as três Leis de Newton podem ser resumidas da seguinte forma:</p> <ol> <li> <p><strong>Primeira Lei (Inércia):</strong> Um corpo manterá seu estado de repouso ou de movimento retilíneo uniforme, a menos que seja obrigado a mudar esse estado por forças que atuem sobre ele.</p> </li> <li> <p><strong>Segunda Lei (Princípio Fundamental da Dinâmica):</strong> A força resultante que atua sobre um corpo é igual ao produto de sua massa pela aceleração que ele adquire (<pre><code>F = m * a</code></pre>).</p> </li> <li> <p><strong>Terceira Lei (Ação e Reação):</strong> Para toda força de ação, há uma força de reação de igual intensidade, mesma direção e sentido oposto, atuando em corpos distintos.</p> </li> </ol> <br> <p>O domínio dessas leis é crucial para qualquer estudo sério em física e para uma compreensão profunda do funcionamento do mundo físico ao nosso redor.</p> </html>`;
