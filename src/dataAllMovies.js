const id = Date.now();
export const dataAllMovies = {
    movies: [
        {
            id: id,
            title: "Capitão Fantástico",
            overview: "Nas florestas do estado de Washington, um pai cria seus seis filhos longe da civilização, em uma rígida rotina de aventuras. Ele é forçado a deixar o isolamento e leva sua família para encarar o mundo, desafiando sua ideia do que significa ser pai.",
            poster: require('./assets/img/capitao-fantastico.png'),
            watched: true,
            highlight: false,
            nota: []
        },
        {
            id: id,
            title: "Shrek",
            overview: "Para resgatar uma princesa das garras de um dragão que cospe fogo, o ogro Shrek se une a um companheiro improvável: um burro brincalhão.",
            poster: require('./assets/img/shrek.png'),
            watched: false,
            highlight: true,
            nota: []
        },
        {
            id: id,
            title: "Hoje Eu Quero Voltar Sozinho",
            overview: "Um novo colega de sala transforma a vida do estudante Leonardo, que também é cego, e complica sua amizade com sua melhor amiga",
            poster: require('./assets/img/hoje-eu-quero-voltar-sozinho.png'),
            watched: false,
            highlight: true,
            nota: []
        },
        {
            id: id,
            title: "Um Sonho de Liberdade",
            overview: "Condenado pelo assassinato da esposa e do amante dela, um banqueiro se apega à esperança e à amizade com um detento chamado Red para sobreviver à prisão.",
            poster: require('./assets/img/um-sonho-de-liberdade.png'),
            watched: false,
            highlight: true,
            nota: []
        },
        {
            id: id,
            title: "Que Horas Ela Volta",
            overview: "Val é a fiel empregada doméstica de uma família rica. Mas a chegada de sua filha gera tensão na casa e faz com que ela comece a questionar esse papel.",
            poster: require('./assets/img/que-horas-ela-volta.png'),
            watched: false,
            highlight: true,
            nota: []
        },
    ]
};