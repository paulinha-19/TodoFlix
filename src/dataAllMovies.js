import { v4 as uuid } from 'uuid';
const unique_id = uuid().slice(0, 8);
export const dataAllMovies = {
    movies: [
        {
            id: 1,
            title: "Capitão Fantástico",
            overview: "Nas florestas do estado de Washington, um pai cria seus seis filhos longe da civilização, em uma rígida rotina de aventuras. Ele é forçado a deixar o isolamento e leva sua família para encarar o mundo, desafiando sua ideia do que significa ser pai.",
            poster: require('./assets/img/capitao-fantastico.png'),
            watched: true,
            highlight: false,
            rating: []
        },
        {
            id: 2,
            title: "Shrek",
            overview: "Para resgatar uma princesa das garras de um dragão que cospe fogo, o ogro Shrek se une a um companheiro improvável: um burro brincalhão.",
            poster: require('./assets/img/shrek.png'),
            watched: false,
            highlight: true,
            rating: []
        },
        {
            id: 3,
            title: "Hoje Eu Quero Voltar Sozinho",
            overview: "Um novo colega de sala transforma a vida do estudante Leonardo, que também é cego, e complica sua amizade com sua melhor amiga",
            poster: require('./assets/img/hoje-eu-quero-voltar-sozinho.png'),
            watched: false,
            highlight: true,
            rating: []
        },
        {
            id: 4,
            title: "Um Sonho de Liberdade",
            overview: "Condenado pelo assassinato da esposa e do amante dela, um banqueiro se apega à esperança e à amizade com um detento chamado Red para sobreviver à prisão.",
            poster: require('./assets/img/um-sonho-de-liberdade.png'),
            watched: false,
            highlight: true,
            rating: []
        },
        {
            id: 5,
            title: "Spider-man",
            overview: "Após ser picado por uma aranha radioativa, o garoto Miles Morales logo aprende a lançar teias com seus parceiros de um universo alternativo.",
            poster: require('./assets/img/spider-man.png'),
            watched: false,
            highlight: true,
            rating: []
        },
        {
            id: 6,
            title: "Que Horas Ela Volta",
            overview: "Val é a fiel empregada doméstica de uma família rica. Mas a chegada de sua filha gera tensão na casa e faz com que ela comece a questionar esse papel.",
            poster: require('./assets/img/que-horas-ela-volta.png'),
            watched: false,
            highlight: true,
            rating: []
        },
        {
            id: 7,
            title: "A Fuga das Galinhas",
            overview: "O galo Rocky e a galinha Ginger querem ajudar todas as outras galinhas a fugirem da granja onde vivem em cativeiro.",
            poster: require('./assets/img/a-fuga-das-galinhas.jpg'),
            watched: false,
            highlight: false,
            rating: []
        },
        {
            id: 8,
            title: "AmarElo",
            overview: "Nos bastidores do show no Theatro Municipal de São Paulo, o rapper e ativista Emicida celebra o grande legado da cultura negra brasileira.",
            poster: require('./assets/img/amarelo.jpg'),
            watched: false,
            highlight: false,
            rating: []
        },
        {
            id: 9,
            title: "Rocketman",
            overview: "Em reabilitação, Elton John relembra suas origens humildes, as músicas atemporais e os momentos de inspiração e excesso. Baseado em sua verdadeira história.",
            poster: require('./assets/img/rocketman.jpeg'),
            watched: false,
            highlight: false,
            rating: []
        },
    ]
};