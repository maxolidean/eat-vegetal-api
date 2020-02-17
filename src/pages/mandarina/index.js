module.exports = {
    id: "mandarina",
    name: "Mandarina",
    textColor: "aabb33cc",
    backgroundColor: "ffdd44dc",
    iconImage: "http://comemasplantas.app/images/mandarina-icon.png",
    pages: [
        {
            order: 0,
            delay: 2000,
            type: "cover",
            familyColor: "dd4488ff",
            familyText: "Rutáceas, al igual que la naranja, limón y pomelo.",
            image: "http://comemasplantas.app/images/mandarina-cover.png",
            imageAlignment: "center"
        },
        {
            order: 1,
            delay: 2000,
            type: "info",
            image: "http://comemasplantas.app/images/mandarina-info.png",
            imageAlignment: "left",
            originText: "Asia central",
            varietiesText: "Blanco, negro, rosado, violeta, morado, colorado, castaño",
            harvestPlaceText: "Mendoza y San Juan"
        },
        {
            order: 2,
            delay: 2000,
            type: "season",
            title: "¿Cuando está más rico?",
            seasons: [0, 1, 2]
        },
        {
            order: 3,
            delay: 3000,
            type: "tips",
            tips: [
                "Frescas o congeladas, un abismo con las de lata",
                "Con manteca, un chorrito de jugo de limón y sal",
                "Tienen una temporada corta, hay que aprovecharlas",
                "Si están frescas, pelarlas es una tarea larga pero entretenida y ayuda",
                "Fideos de sopa, mucho queso, crema, arvejas",
                "Blanquearlas (agua hirviendo con sal) unos minutos, tienen que quedar bien verdes no grises"
            ]
        },
        {
            order: 4,
            delay: 3000,
            type: "pairing",
            title: "Queda bien con",
            text: "Manteca, eneldo, menta, tomillo, perejil, papa, chauchas, ajo, limón, morrones, tomate, salsa de tomate, espinacas, huevo, hongos, espárragos, puerro, cebolla, echalotte, pimentón, azafrán, chorizo colorado, jamón crudo, jamón cocido, panceta, calamares, pescado blanco, quesos duros, queso de cabra, ricota, quesos picantes, crema, leche, arroz, pastas, almendras, avellanas",
        }
        {
            order: 5,
            delay: 2000,
            type: "more",
            image: "http://comemasplantas.app/images/mandarina-info.png",
            imageAlignment: "left"
        }
    ]

}