import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  categoriaEscolhida: string = '';
  
  
  filmesSuspense = [
    { titulo: 'OPENHEIMER', descricao: 'O físico J. Robert Oppenheimer trabalha com uma equipe de cientistas durante o Projeto Manhattan, levando ao desenvolvimento da bomba atômica.', imagem: 'https://media.fstatic.com/F2gTSQnA27ykooMIlsOjKfKQip0=/322x478/smart/filters:format(webp)/media/movies/covers/2023/07/william-j-harris-oppenheimer-movie-poster-2023-v2.jpg' },

    { titulo: 'Parasita', descricao: 'Toda a família de Ki-taek está desempregada, vivendo em um porão sujo e apertado. Por obra do acaso, ele começa a dar aulas de inglês para uma garota de família rica. Fascinados com a vida luxuosa destas pessoas, pai, mãe e filhos bolam um plano para se infiltrar também na abastada família', imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkCMR43nRyfpAcv8RRx_dkQaoAKUw047kPSQ&usqp=CAU' },

    { titulo: 'Corra', descricao: 'Chris é um jovem fotógrafo negro que está prestes a conhecer os pais de Rose, sua namorada caucasiana. Na luxuosa propriedade dos pais dela, Chris percebe que a família esconde algo muito perturbador.', imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCvyNklyYPlidonfzbB8DO6ORAzu_p2CogbA&usqp=CAU' },

    { titulo: 'Sorria', descricao: 'Após um paciente cometer um suicídio brutal em sua frente, a psiquiatra Rose é perseguida por uma entidade maligna que muda de forma. Enquanto tenta escapar desse pesadelo, Rose também precisa enfrentar seu passado conturbado para sobreviver.', imagem: 'https://br.web.img2.acsta.net/c_310_420/pictures/22/09/20/15/51/1507365.jpg'},

    { titulo: 'IT a coisa', descricao: 'Um grupo de crianças se une para investigar o misterioso desaparecimento de vários jovens em sua cidade. Eles descobrem que o culpado é Pennywise, um palhaço cruel que se alimenta de seus medos e cuja violência teve origem há vários séculos.', imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjgJaPZtlWxMJ-4EdO-RIKPm8RyX5dYj6VQw&usqp=CAU'},
  ];

  filmesAnimacao = [
    { titulo: 'UP', descricao: 'Carl Fredricksen (Edward Asner) é um vendedor de balões que, aos 78 anos, está prestes a perder a casa em que sempre viveu com sua esposa, a falecida Ellie. O terreno onde a casa fica localizada interessa a um empresário, que deseja construir no local um edifício. Após um incidente em que acerta um homem com sua bengala, Carl é considerado uma ameaça pública e forçado a ser internado em um asilo. Para evitar que isto aconteça, ele enche milhares de balões em sua casa, fazendo com que ela levante vôo', imagem: 'https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/92/03/73/20176438.jpg' },

    { titulo: 'Soul', descricao: 'Em Soul, duas perguntas se destacam: Você já se perguntou de onde vêm sua paixão, seus sonhos e seus interesses? O que é que faz de você... Você? Joe Gardner é um professor de música do ensino médio que sempre sonhou em ser músico de jazz. Mas quando, finalmente, tem a chance de impressionar outros músicos durante um ensaio aberto, sofre um acidente que faz com que sua alma seja separada de seu corpo e transportada para um centro no qual as almas se desenvolvem e ganham paixões antes de serem enviadas para um recém-nascido. Joe deve trabalhar com 22, uma das almas em treinamento, que tem uma visão obscura da vida depois de ficar presa por anos no centro evitando seguir para a Terra.', imagem: 'https://br.web.img2.acsta.net/c_310_420/pictures/20/10/09/10/12/0923276.jpg' },

    { titulo: 'O Gato de botas', descricao: 'Muito antes de conhecer o ogro Shrek e sua turma, Gato de Botas (Antonio Banderas) vai viver uma grande aventura ao lado de Humpty Dumpty (Zach Galifianakis) e Kitty Pata Mansa (Salma Hayek). Dipostos a roubar os feijões mágicos do casal fora da lei Jack (Billy Bob Thornton) e Jill (Amy Sedaris), o trio quer mesmo é botar as mãos na famosa gansa que bota ovos de ouro.', imagem: 'https://br.web.img3.acsta.net/pictures/23/06/21/21/10/1335465.jpg' },

    { titulo: 'Pixels', descricao: 'A humanidade sempre buscou vida fora da Terra e, em busca de algum contato, enviou imagens e sons variados sobre a cultura terrestre nos mais diversos satélites já lançados no universo. Um dia, um deles foi encontrado. Disposta a conquistar o planeta, a raça alienígena resolveu criar monstros digitais inspirados em videogames clássicos dos anos 1980. Para combatê-los, a única alternativa é chamar especialistas nos jogos.', imagem: 'https://br.web.img3.acsta.net/c_310_420/pictures/14/12/16/19/46/414417.jpg' },
    
    { titulo: 'O rei leão', descricao: 'JLive action do clássico da Disney, em O Rei Leão, Simba (Donald Glover) é um jovem leão cujo destino é se tornar o rei da selva. Entretanto, uma armadilha elaborada por seu tio Scar (Chiwetel Ejiofor) faz com que Mufasa (James Earl Jones), o atual rei, morra ao tentar salvar o filhote. Consumido pela culpa, Simba deixa o reino rumo a um local distante, onde encontra amigos que o ensinam a mais uma vez ter prazer pela vida.', imagem: 'https://br.web.img3.acsta.net/c_310_420/pictures/19/05/07/20/54/2901026.jpg' },
    
  ];


  filmesRomance = [
    { titulo: 'Como eu era antes de você', descricao: 'm Como Eu Era Antes de Você, o rico e bem sucedido Will (Sam Claflin) leva uma vida repleta de conquistas, viagens e esportes radicais até ser atingido por uma moto. O acidente o torna tetraplégico, obrigando-o a permanecer em uma cadeira de rodas. A situação o torna depressivo e extremamente cínico, para a preocupação de seus pais (Janet McTeer e Charles Dance). É neste contexto que Louisa Clark (Emilia Clarke) é contratada para cuidar de Will. De origem modesta, com dificuldades financeiras e sem grandes aspirações na vida, ela faz o possível para melhorar o estado de espírito de Will e, aos poucos, acaba se envolvendo com ele', imagem: 'https://br.web.img3.acsta.net/c_310_420/pictures/16/02/03/19/11/303307.jpg' },

    { titulo: 'Minha culpa', descricao: 'Baseado na trilogia best-seller de Mercedes Ron, Culpa Mía segue a história da jovem Noah, que deve deixar sua cidade, namorado e amigos para se mudar para a mansão de William Leister, o novo e rico novo marido de sua mãe. Aos 17 anos, orgulhosa e independente, Noah reluta em viver cercada de luxo, mas tudo começa a mudar quando ela conhece Nick, seu novo meio-irmão, com quem ela se desentende constantemente devido às suas personalidades fortes. Não demora muito para Noah descobrir que por trás de sua imagem de filho modelo, Nick esconde uma vida de luta, jogos de azar e corridas de carros ilegais. Apesar do abismo que os separa, ambos começam a sentir uma atração irresistível que logo se transformará em puro fogo e paixão desenfreada.', imagem: 'https://br.web.img3.acsta.net/c_310_420/pictures/23/05/10/18/46/3247366.png' },

    { titulo: 'A noiva cadáver', descricao: 'A Noiva-Cadáver se passa em um vilarejo europeu do século XIX, onde vive Victor Van Dorst (Johnny Depp), um jovem que está prestes a se casar com Victoria Everglot (Emily Watson). Porém, acidentalmente, Victor se casa com a Noiva-Cadáver (Helena Bonham Carter), que o leva para conhecer a Terra dos Mortos. Desejando desfazer o ocorrido para poder enfim se casar com Victoria, aos poucos Victor percebe que a Terra dos Mortos é bem mais animada do que o meio vitoriano em que nasceu e cresceu.', imagem: 'https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/91/33/59/20140728.jpg' },

    { titulo: 'Amor esquecido', descricao: 'Amor Esquecido é a história de Rafal Wilczur, um conceituado cirurgião e professor. Abandonado pela esposa, ele é assaltado e acaba perdendo a memória. O filme é baseado no lendário romance polonês “Znachor” (The Quack), de Tadeusz Dołęga-Mostowicz.', imagem: 'https://br.web.img2.acsta.net/c_310_420/pictures/23/09/26/16/00/3944598.png'},

    { titulo: 'A vida em si', descricao: 'O relacionamento amoroso vivido por um casal (Oscar Isaac e Olivia Wilde), é contado através de diferentes décadas e continentes, desde as ruas de Nova York até Espanha e como diferentes pessoas acabam se conectando a ela através de um evento marcante', imagem: 'https://br.web.img2.acsta.net/c_310_420/pictures/18/10/16/18/59/5373986.jpg' },
    
  ];
}