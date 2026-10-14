const carros = [
    {
        id: 'ferrari-f8',
        marca: 'FERRARI',
        modelo: 'F8 TRIBUTO',
        ano: 2024,
        km: 6100,
        preco: 4200000,
        cor: 'AMARELO',
        carroceria: 'COUPÉ',
        cambio: 'AUTOMÁTICO',
        combustivel: 'GASOLINA',
        descricao: 'A Ferrari F8 Tributo é a evolução da 488 GTB e uma homenagem ao motor V8 biturbo mais premiado da marca. Equipada com o 3.9 V8 de 720 cv e câmbio de dupla embreagem de sete marchas, acelera de 0 a 100 km/h em 2,9 segundos e passa dos 340 km/h. Aerodinâmica refinada, cockpit voltado ao piloto e o inconfundível design italiano compõem um superesportivo de uso real.',
        fotos: [
            '../images/ferrari-f8-tributo/ferrarif8.jpeg'
        ]
    },
    {
        id: 'audi-rsq8',
        marca: 'AUDI',
        modelo: 'RSQ8',
        ano: 2025,
        km: 1400,
        preco: 1600000,
        cor: 'PRETO',
        carroceria: 'SUV',
        cambio: 'AUTOMÁTICO',
        combustivel: 'GASOLINA',
        descricao: 'O Audi RSQ8 une a praticidade de um SUV cupê ao desempenho de um esportivo. Seu motor 4.0 V8 TFSI biturbo entrega 600 cv e 800 Nm de torque, com câmbio automático de oito marchas e tração integral quattro, levando o conjunto de 0 a 100 km/h em 3,8 segundos. Por dentro, acabamento premium, tecnologia de ponta e espaço para até cinco ocupantes.',
        fotos: [
            '../images/audi-rsq8/audirsq8.jpeg'
        ]
    },
    {
        id: 'ferrari-purosangue',
        marca: 'FERRARI',
        modelo: 'PUROSANGUE 6.5 V12 AUTOMÁTICO',
        ano: 2025,
        km: 7000,
        preco: 7900000,
        cor: 'VERMELHO',
        carroceria: 'SUV',
        cambio: 'AUTOMÁTICO',
        combustivel: 'GASOLINA',
        descricao: 'O Ferrari Purosangue é o primeiro SUV de luxo da Ferrari e também o primeiro modelo da marca italiana com quatro portas e quatro lugares reais. Equipado com um potente motor V12 6.5 aspirado, combina alto desempenho, conforto e tecnologia avançada, mantendo a esportividade característica da fabricante. O modelo é produzido pela Ferrari S.p.A. e fabricado na cidade de Maranello, na região da Emília-Romanha, Itália, sede histórica da marca.',
        fotos: [
            '../images/ferrari-purosangue/purosangue.jpeg',
        ]
    },
    {
        id: 'lamborghini-urus',
        marca: 'LAMBORGHINI',
        modelo: 'URUS',
        ano: 2024,
        km: 15200,
        preco: 3400000,
        cor: 'PRETO',
        carroceria: 'SUV',
        cambio: 'AUTOMÁTICO',
        combustivel: 'GASOLINA',
        descricao: 'A Lamborghini Urus, apresentada como o primeiro Super SUV do mundo, combina o DNA de um superesportivo com o conforto e a versatilidade de um utilitário de luxo. O motor 4.0 V8 biturbo gera na casa dos 650 cv, com tração integral e câmbio automático de oito marchas, acelerando de 0 a 100 km/h em cerca de 3,6 segundos. Presença imponente, interior sofisticado e desempenho para diferentes terrenos.',
        fotos: [
            '../images/lambo-urus/lambo-uruss.jpeg'
        ]
    },

    {
        id: 'mercedes-amg-g63',
        marca: 'MERCEDES-BENZ',
        modelo: 'AMG G63',
        ano: 2025,
        km: 11200,
        preco: 2390000,
        cor: 'PRETO FOSCO',
        carroceria: 'SUV',
        cambio: 'AUTOMÁTICO',
        combustivel: 'GASOLINA',
        descricao: 'O Mercedes-AMG G 63 é a versão mais potente e icônica do clássico off-road alemão, que preserva o visual quadrado desde o original. Equipado com motor 4.0 V8 biturbo de 585 cv e 850 Nm, câmbio automático de nove marchas e tração integral 4MATIC, acelera de 0 a 100 km/h em 4,5 segundos. Bloqueios de diferencial, interior luxuoso e tecnologia de ponta fazem dele um símbolo de status e capacidade, aqui com acabamento em preto fosco que reforça sua presença imponente.',
        fotos: [
            '../images/mercedes-amg-g63/merceg63.jpeg'
        ]
    },
    {
        id: 'lamborghini-huracan-evo',
        marca: 'LAMBORGHINI',
        modelo: 'HURACÁN EVO',
        ano: 2023,
        km: 4000,
        preco: 3500000,
        cor: 'ROXO',
        carroceria: 'COUPÉ',
        cambio: 'AUTOMÁTICO',
        combustivel: 'GASOLINA',
        descricao: 'A Lamborghini Huracán EVO é um superesportivo de motor central equipado com o lendário V10 5.2 aspirado, que entrega 640 cv e 600 Nm de torque com som inconfundível. Com câmbio de dupla embreagem de sete marchas e tração integral, acelera de 0 a 100 km/h em 2,9 segundos e ultrapassa os 325 km/h. Aerodinâmica refinada, sistema integrado de dinâmica veicular e design agressivo definem uma das máquinas mais emocionantes da marca, aqui em um marcante tom de roxo.',
        fotos: [
            '../images/lamboevo/huracanevo.jpeg'
        ]
    },
        {
        id: 'porsche-cayenne-turbo-gt',
        marca: 'PORSCHE',
        modelo: 'CAYENNE TURBO GT',
        ano: 2026,
        km: 0,
        preco: 1540000,
        cor: 'CINZA',
        carroceria: 'SUV COUPÉ',
        cambio: 'AUTOMÁTICO',
        combustivel: 'GASOLINA',
        descricao: 'O Porsche Cayenne Turbo GT é o SUV mais potente e radical da linha Cayenne, na carroceria cupê. Seu motor 4.0 V8 biturbo entrega 640 cv e 850 Nm de torque, associado ao câmbio Tiptronic S de oito marchas e tração integral, para acelerar de 0 a 100 km/h em 3,3 segundos e chegar a 300 km/h. Suspensão adaptativa, aerofólio traseiro ativo, freios com pinças em destaque e interior esportivo unem performance de pista e conforto no dia a dia. Zero quilômetro.',
        fotos: [
            '../images/cayenne/cayenne.jpeg'
        ]
    },
    {
        id: 'bmw-m4-competition',
        marca: 'BMW',
        modelo: 'M4 COMPETITION',
        ano: 2025,
        km: 6000,
        preco: 915000,
        cor: 'PRATA',
        carroceria: 'COUPÉ',
        cambio: 'AUTOMÁTICO',
        combustivel: 'GASOLINA',
        descricao: 'O BMW M4 Competition é um cupê esportivo de alta performance da divisão M, com motor 3.0 de seis cilindros em linha biturbo que entrega 510 cv e 650 Nm. Aliado ao câmbio automático M Steptronic de oito marchas, acelera de 0 a 100 km/h em menos de 4 segundos. Suspensão esportiva, freios de alto desempenho e bancos esportivos tornam a condução precisa na pista e confortável no dia a dia. Esta unidade combina a pintura prata com interior em laranja, para um visual sofisticado e esportivo.',
        fotos: [
            '../images/bmw/bmww.jpeg'
        ]
    },
    {
        id: 'bugatti-chiron',
        marca: 'BUGATTI',
        modelo: 'CHIRON',
        ano: 2022,
        km: 2000,
        preco: 50000000,
        cor: 'PRETO',
        carroceria: 'COUPÉ',
        cambio: 'AUTOMÁTICO',
        combustivel: 'GASOLINA',
        descricao: 'O Bugatti Chiron é um dos hipercarros mais exclusivos e extremos já produzidos. Seu motor 8.0 W16 com quatro turbocompressores entrega 1.500 cv e 1.600 Nm de torque, com câmbio de dupla embreagem de sete marchas e tração integral. Acelera de 0 a 100 km/h em 2,4 segundos e alcança 420 km/h. Fabricado artesanalmente em Molsheim, na França, combina desempenho extraordinário, luxo e design atemporal, aqui em um elegante preto.',
        fotos: [
            '../images/bugatti/bugattichiron.jpeg'
        ]
    }
];