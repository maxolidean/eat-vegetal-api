module.exports = {
    id: "berenjena",
    name: "Berenjena",
    textColor: "aabb33cc",
    backgroundColor: "ffdd44dc",
    iconImage: "http://comemasplantas.app/images/berenjena-icon.png",
    pages: [
        {
            order: 0,
            delay: 2000,
            type: "cover",
            familyColor: "dd4488ff",
            fontSize: 12,
            familyText: "Solanáceas, como el tomate, la papa y el morrón.",
            image: "http://comemasplantas.app/images/berenjena-cover.png",
            imageAlignment: "center"
        },
        {
            order: 1,
            delay: 2000,
            type: "info",
            image: "http://comemasplantas.app/images/berenjena-info.png",
            imageAlignment: "left",
            fontSize: 12,
            originText: "India y China.",
            varietiesText: "Japonesa (menos amarga), negra (amarga y picante), blanca (suave, no se come la piel) y vetada (sabor mas delicado).",
            harvestPlaceText: "Centro y norte del país."
        },
        {
            order: 2,
            delay: 2000,
            type: "season",
            fontSize: 14,
            title: "¿Cuando está más rico?",
            seasons: [0, 15]
        },
        {
            order: 3,
            delay: 3000,
            type: "tips",
            fontSize: 12,
            tips: [
                "Es gauchita ,aguanta todo: Hervida, al vapor, brasas, apanada, parrilla, sarten, escabeche, horno, frita, hasta fuego directo.",
                "Si la piel es fina, se come.",
                "La berenjena blanca, siempre sin piel.",
                "Mientras más vieja, más amarga, o sea, la comprás y la comés.",
                "Si esta arrugada o tiene muchas semillas, ponele sal gruesa, dejala reposar, y escurrila como hacía tu abuela, o la mía.",
                "Absorbe mucha aceite.",
            ]
        },
        {
            order: 4,
            delay: 3000,
            type: "tips",
            fontSize: 12,
            tips: [
                "Para congelar: cocida o al dente.",
                "Entera en la hornalla o a las brasas, se pela sin lavar. La gloria misma.",
                "Queda bien con todas las carnes, especialmente cordero.",
                "Elegilas cuando están firmes, brillantes, las que sean más rectas (grandes o chicas).",
                "Duran bien, 2 o 3 días en lugar seco y fresco, ¡No las guardes en heladera!.",
            ]
        },
        {
            order: 5,
            delay: 3000,
            type: "pairing",
            titleFontSize: 14,
            title: "Queda bien con",
            textFontSize: 12,
            text: "Comino, coriandro, pimentón, nuez moscada, romero, tomillo, yogurt, menta, albahaca, coco, curry, sésamo, vinagres, salsa de soja, verdeo, tomate, limón, cilantro, perejil, albahaca, queso, frutos secos, jengibre, ajo, aceitunas, miel, miso, panceta, lentejas, garbanzos, chiles, morrón, cebolla, alcaparras. Carnes todas, especialmente cordero.",
        },
        {
            order: 6,
            delay: 2000,
            type: "more",
            image: "http://comemasplantas.app/images/berenjena-info.png",
            imageAlignment: "left"
        }
    ],
}