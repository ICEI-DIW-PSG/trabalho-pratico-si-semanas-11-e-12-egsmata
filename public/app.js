// ARQUIVO JSON
const capitais = [
    {
        "id": 1,
        "estado": "Acre",
        "nome": "Rio Branco",
        "anoFundacao": "1882",
        "pop": "143.000",
        "srcImg": "./img/rio_branco.jpg",
        "sobre": "Rio Branco é o ponto de partida para quem quer explorar a imensidão da Amazônia. A cidade mistura o charme urbano com a exuberância da natureza, oferecendo uma experiência única entre o verde das florestas e a cultura local.",
        "conteudo": "Rio Branco é a capital do Acre e a principal porta de entrada para a Amazônia Ocidental brasileira. Localizada às margens do Rio Acre, a cidade combina urbanização com natureza exuberante. Sua arquitetura carrega traços históricos marcantes, como o Palácio Rio Branco, símbolo da organização territorial da região. A cultura local reflete a diversidade dos povos da floresta, com forte presença das tradições indígenas, ribeirinhas e nordestinas. Além disso, Rio Branco vem se modernizando com espaços culturais, parques urbanos e uma crescente preocupação ambiental. É uma cidade que surpreende quem chega pela primeira vez, revelando um Brasil pouco conhecido, mas riquíssimo em cultura e biodiversidade."
    },
    {
        "id": 2,
        "estado": "Amazonas",
        "nome": "Manaus",
        "anoFundacao": "1669",
        "pop": "2.300.000",
        "srcImg": "./img/manaus.jpg",
        "sobre": "Manaus é a capital da Amazônia, onde o encontro das águas dos rios Negro e Solimões revela a grandiosidade da floresta. Com uma rica herança cultural, a cidade é um polo de turismo, história e diversidade natural, sendo porta de entrada para uma das maiores biodiversidades do mundo.",
        "conteudo": "Manaus é a capital do Amazonas e o principal centro urbano da Amazônia brasileira. Situada às margens do Rio Negro, a cidade é famosa pelo fenômeno natural do Encontro das Águas, onde os rios Negro e Solimões correm lado a lado sem se misturar por vários quilômetros. Sua história está profundamente ligada ao ciclo da borracha, o que explica a existência de construções imponentes como o Teatro Amazonas, um verdadeiro ícone da arquitetura e da cultura local. Atualmente, Manaus é um polo industrial e tecnológico graças à Zona Franca, mas também conserva suas raízes culturais com manifestações como o Boi-Bumbá e a culinária regional baseada em peixes amazônicos. Manaus é o ponto de partida ideal para quem deseja explorar a selva e compreender a complexidade da Amazônia brasileira."
    },
    {
        "id": 3,
        "estado": "Bahia",
        "nome": "Salvador",
        "anoFundacao": "1549",
        "pop": "2.900.000",
        "srcImg": "./img/salvador.jpg",
        "sobre": "Salvador é uma explosão de cores, sons e sabores que reflete a alma do Brasil. Com suas ruas históricas, praias encantadoras e uma rica herança africana, a cidade é o berço da cultura e da música brasileira, sendo impossível não se encantar com sua energia contagiante.",
        "conteudo": "Salvador é uma das cidades mais vibrantes e historicamente ricas do Brasil. Primeira capital do país, seu centro histórico, o Pelourinho, é Patrimônio da Humanidade pela UNESCO e guarda um acervo arquitetônico colonial incomparável. A cultura afro-brasileira está presente em cada aspecto da cidade: da música ao candomblé, da culinária aos blocos de carnaval. Com praias paradisíacas, como Porto da Barra e Itapuã, Salvador é um destino turístico completo que une espiritualidade, história e alegria. O pôr do sol na Baía de Todos-os-Santos é um espetáculo à parte. Salvador pulsa cultura, fé, sabor e calor humano em cada esquina."
    },
    {
        "id": 4,
        "estado": "Ceará",
        "nome": "Fortaleza",
        "anoFundacao": "1726",
        "pop": "2.800.000",
        "srcImg": "./img/fortaleza.jpg",
        "sobre": "Fortaleza é um caldeirão de energia, onde o sol brilha o ano todo e a cultura nordestina pulsa em cada esquina. Com suas praias de tirar o fôlego e uma gastronomia rica, a cidade se tornou um dos destinos mais procurados por quem busca diversão e contato direto com a natureza.",
        "conteudo": "Fortaleza é a capital do Ceará e um dos destinos turísticos mais populares do Nordeste brasileiro. Conhecida por suas belas praias urbanas, como a Praia do Futuro e Iracema, a cidade oferece sol praticamente o ano inteiro. Mas Fortaleza vai muito além do litoral: abriga centros culturais importantes como o Theatro José de Alencar e o Centro Dragão do Mar de Arte e Cultura. A cidade também é famosa por sua culinária, com pratos como a peixada e o tradicional baião de dois, além do humor cearense, reconhecido nacionalmente. Com um povo acolhedor e uma energia contagiante, Fortaleza é uma mistura perfeita entre tradição e modernidade."
    },
    {
        "id": 5,
        "estado": "Distrito Federal",
        "nome": "Brasília",
        "anoFundacao": "1960",
        "pop": "3.100.000",
        "srcImg": "./img/brasilia.jpg",
        "sobre": "Brasília é uma cidade única, projetada para ser o coração político e cultural do Brasil. Com sua arquitetura futurista e um planejamento urbano exemplar, a capital federal se destaca pela organização e pela modernidade, sendo um símbolo de inovação e crescimento do país.",
        "conteudo": "Brasília é muito mais que a capital política do Brasil — é um marco da arquitetura moderna e do urbanismo. Projetada por Lúcio Costa e Oscar Niemeyer, a cidade foi inaugurada em 1960 com o objetivo de interiorizar o poder e promover o desenvolvimento do país. Seu plano piloto, em formato de avião, organiza a cidade de forma única, separando áreas residenciais, comerciais e administrativas. Entre suas atrações estão o Congresso Nacional, a Catedral Metropolitana e o Palácio da Alvorada. Mas Brasília também surpreende com seus parques, lagos e vida cultural ativa. É uma cidade pensada para o futuro, que respira arte, política e inovação."
    },
    {
        "id": 6,
        "estado": "Goiás",
        "nome": "Goiânia",
        "anoFundacao": "1933",
        "pop": "1.600.000",
        "srcImg": "./img/goiania.jpeg",
        "sobre": "Goiânia é um verdadeiro refúgio no coração do Brasil, com uma mistura de modernidade e tradições do interior. A cidade se destaca pelo seu dinamismo cultural, pela hospitalidade e pelas suas belezas naturais, sendo um dos destinos mais acolhedores do Centro-Oeste.",
        "conteudo": "Goiânia é uma cidade moderna e arborizada, considerada uma das capitais com melhor qualidade de vida do Brasil. Fundada na década de 1930, ela nasceu para ser a nova capital do estado de Goiás e desde então cresceu rapidamente, tornando-se um importante centro regional. A cidade se destaca por sua hospitalidade, sua vida universitária ativa e sua forte ligação com a música sertaneja. Goiânia também é conhecida por seus parques urbanos, como o Parque Flamboyant e o Vaca Brava, além de uma rica gastronomia goiana, com pratos como empadão, pamonha e pequi. É uma capital que une tradição e modernidade com um estilo de vida tranquilo."
    },
    {
        "id": 7,
        "estado": "Minas Gerais",
        "nome": "Belo Horizonte",
        "anoFundacao": "1897",
        "pop": "2.600.000",
        "srcImg": "./img/belo_horizonte.jpg",
        "sobre": "Belo Horizonte é uma cidade cheia de história, onde a modernidade se mistura com a tradição mineira. Famosa pela hospitalidade e pela culinária, BH é um ponto de encontro para quem busca cultura, arte e os famosos sabores de Minas Gerais.",
        "conteudo": "Belo Horizonte, carinhosamente chamada de BH, é uma cidade planejada que soube crescer sem perder suas raízes mineiras. Rodeada por montanhas e com um pôr do sol famoso, a capital mineira é sinônimo de cultura, história e boa comida. A cidade abriga museus importantes como o Inhotim (em sua região metropolitana) e espaços icônicos como a Pampulha, com obras de Niemeyer. A gastronomia é um dos grandes atrativos — desde os botecos com tira-gostos premiados até os tradicionais pratos como feijão-tropeiro e pão de queijo. BH é uma cidade acolhedora, com espírito coletivo, e representa com orgulho o coração de Minas Gerais."
    },
    {
        "id": 8,
        "estado": "Rio de Janeiro",
        "nome": "Rio de Janeiro",
        "anoFundacao": "1565",
        "pop": "6.700.000",
        "srcImg": "./img/rio_de_janeiro.jpg",
        "sobre": "O Rio de Janeiro é a cidade onde o samba, o sol e o mar se encontram em harmonia. Famosa pelas suas paisagens de tirar o fôlego, como o Cristo Redentor e o Pão de Açúcar, a cidade maravilhosa tem um ritmo vibrante e uma cultura que atrai turistas do mundo todo.",
        "conteudo": "O Rio de Janeiro é um dos cartões-postais mais famosos do mundo. A cidade é abençoada por uma geografia única, com praias deslumbrantes, montanhas e florestas que se encontram em perfeita harmonia. O Cristo Redentor e o Pão de Açúcar são símbolos globais do Brasil. Mas o Rio é também centro de cultura, arte e história, com museus renomados, centros culturais e uma intensa vida musical. A cidade maravilhosa é palco de um dos maiores carnavais do planeta, onde o samba encontra seu auge. Ao mesmo tempo, carrega contrastes e desafios sociais que fazem parte de sua complexidade. Ainda assim, o espírito carioca é leve, criativo e acolhedor, tornando o Rio inesquecível."
    },
    {
        "id": 9,
        "estado": "Santa Catarina",
        "nome": "Florianópolis",
        "anoFundacao": "1673",
        "pop": "600.000",
        "srcImg": "./img/florianopolis.jpg",
        "sobre": "Florianópolis é um destino completo, com suas praias paradisíacas e montanhas cobertas de verde. A capital catarinense é sinônimo de qualidade de vida, oferecendo um equilíbrio perfeito entre natureza, lazer e cultura, com um estilo de vida que agrada a todos.",
        "conteudo": "Florianópolis, carinhosamente chamada de \"Ilha da Magia\", é uma das cidades mais encantadoras do Brasil. Dividida entre ilha e continente, a capital catarinense é conhecida por suas praias paradisíacas, trilhas ecológicas e qualidade de vida invejável. Floripa atrai turistas, surfistas e nômades digitais de todo o mundo em busca de natureza e tranquilidade. Mas a cidade também tem forte identidade cultural, influenciada pelas tradições açorianas, visíveis na arquitetura, festas populares e culinária, com pratos como a sequência de camarão e o pirão de peixe. Florianópolis consegue unir tradição, inovação e belezas naturais em um só lugar."
    },
    {
        "id": 10,
        "estado": "São Paulo",
        "nome": "São Paulo",
        "anoFundacao": "1554",
        "pop": "12.500.000",
        "srcImg": "./img/sao_paulo.jpg",
        "sobre": "São Paulo é a metrópole que nunca dorme, onde culturas do mundo inteiro se encontram em um só lugar. Com seu ritmo acelerado, centros financeiros, arte pulsante e uma gastronomia incomparável, a capital paulista é o coração econômico e multicultural do Brasil.",
        "conteudo": "São Paulo é a maior cidade do Brasil e uma das metrópoles mais influentes do mundo. Centro financeiro, cultural e econômico do país, abriga uma população diversa que reflete todas as regiões do Brasil e do exterior. É uma cidade de contrastes, onde arranha-céus convivem com centros históricos, e o ritmo acelerado se equilibra com parques como o Ibirapuera, um dos maiores espaços verdes urbanos da América Latina. A capital paulista é referência internacional em gastronomia, com milhares de restaurantes que vão desde a comida de rua até alta culinária, representando praticamente todas as cozinhas do mundo. Culturalmente, São Paulo pulsa: são dezenas de museus, teatros, casas de show, galerias e eventos de renome como a Bienal de Arte e a São Paulo Fashion Week. Além disso, é um dos principais polos de inovação e negócios da América Latina, sede de multinacionais e startups, atraindo empreendedores e profissionais de todos os setores. São Paulo é intensa, multifacetada e cheia de possibilidades — uma cidade que nunca dorme e que sempre surpreende quem está disposto a explorá-la."
    }
]

// FUNÇÕES ----------------------------------------------------------------------------------
// NÚMERO ALEATORIO
function randInt(maximo, minimo) {
    return Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
}

// PEGAR TRÊS CAPITAIS PARA A HOME PAGE
function setCards() {

    // PEGA O ELEMENTO 'MAIN' DO HTML
    let container = document.getElementById('containerMain');
    let lastID = 0;

    // FAZ 3 CARDS, UM CARD A CADA REPETIÇÃO
    for (var i = 0; i < 3; i++) {

        // PEGA UM ID ALEATÓRIO
        let id = randInt(1, 10);

        // VERIFICA SE PEGOU UM ID IGUAL AO ANTERIOR
        while (i > 0 && id == lastID) {
            id = randInt(1, 10);
        }

        // EVITA DOIS CARDS IGUAIS
        lastID = id;

        // A PARTIR DO ID, POVOA O CARD E PASSA PRO PRÓXIMO
        const capital = capitais.find(c => c.id === id);

        // GERA A ESTRUTURA DE UM CARD NO HTML
        container.innerHTML += `
            <article class="bg-light text-dark w-75 ms-3 mb-3 p-3 border border-dark rounded-4 d-flex flex-column align-items-center">
                <a href="detalhes.html?id=${id}" class="text-decoration-none text-dark id="linkCard">
                    <h1 class="text-uppercase" id="tituloCidade${i}"></h1>
                    <img id="imgCidade${i}" class="img-fluid w-100 mw-100 h-auto d-inline-block">
                    <p class="fs-3" id="textoCidade${i}"></p>
                </a>
            </article>
        `;

        // COLETA OS ELEMENTOS HTML PARA POVOAR COM INFORMAÇÕES DO JSON
        var tituloCidade = document.getElementById(`tituloCidade${i}`);
        var imgCidade = document.getElementById(`imgCidade${i}`);
        var textoCidade = document.getElementById(`textoCidade${i}`);

        tituloCidade.innerHTML = capital.nome;
        imgCidade.src = capital.srcImg;
        textoCidade.innerHTML = capital.sobre;
    }
}

function getURL() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    return id;
}

function montarCard() {
    const id = getURL();
    const capital = capitais.find(c => c.id == id);

    let cidade = document.getElementById('cidade');
    cidade.innerHTML += `
        <div class="w-75 p-5 bg-primary bg-opacity-50 rounded-5" style="background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.3)), url(${capital.srcImg}); background-size: cover; height: 500px; border: 3px solid black">
            <div>
                <h1 class="text-danger" id="nomeCard"></h1>
                <p class="fs-2" id="conteudoCard"></p>
            </div>
        </div>
    `;

    let nomeCard = document.getElementById('nomeCard');
    let conteudoCard = document.getElementById('conteudoCard');

    nomeCard.innerHTML = capital.nome;
    conteudoCard.innerHTML = capital.conteudo;
}