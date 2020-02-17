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
            familyText: "Amarilidáceas, o liláceas al igual que la cebolla, puerro o verdeo.",
            image: "http://comemasplantas.app/images/ajo-cover.png",
            imageAlignment: "center"
        },
        {
            order: 1,
            delay: 2000,
            type: "info",
            image: "http://comemasplantas.app/images/ajo-info.png",
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
            seasons: [5, 6]
        },
        {
            order: 3,
            delay: 3000,
            type: "tips",
            tips: [
                "Si tiene olor, y te lo deja en las manos, ya que picás, picá más, cubrilo con aceite y guardalo en la heladera.",
                "Úsalo aplastado en salsas, salteados, en el horno.",
                "Confitalo, con aceite a fuego muy muy bajo.",
                "Si crudo te parece fuerte, metelo entero en el horno, envuelto en aluminio. Después lo usas.",
                "Ajo y jengibre: dupla asiática. Picados, crudo o cocidos en aceite, como base de una preparación o salsa.",
                "Aplastado, picado, en laminas, rallado (en pasta), cada uno se usa distinto."
            ]
        },
        {
            order: 4,
            delay: 3000,
            type: "tips",
            tips: [
                "Guardar dientes limpios o picados con aceite en frascos en la heladera.",
                "Te podés sacar el olor a ajo de las manos frotándote las manos bajo agua fría con algo de acero inoxidable.",
                "Si tenes que pelar muchos, remoja los dientes en agua unos minutos. Se pela más fácil.",
                "Sano. Ojo, solo crudo y picado o machacado. Solo ahí se genera alicina, que es lo que hace bien.",
                "¡El ajo es salud! Hace bien porque es antioxidante, cuando está CRUDO. Cuando pasa los 45 grados se modifica y pierde todas las propiedades.",
                "El ajo brotado lo repetís, se pone fuerte."
            ]
        },
        {
            order: 5,
            delay: 3000,
            type: "pairing",
            title: "Queda bien con",
            text: "Todo: \n Ajo, jengibre, chile \n Ajo, perejil \n Ajo, albahaca, queso \n Ajo, hongos, limón \n Ajo, pimentón, oliva \n Ajo, vino blanco, limón \n Ajo, soja, vinagre \n Ajo, romero, pimienta",
        },
        {
            order: 6,
            delay: 2000,
            type: "more",
            image: "http://comemasplantas.app/images/ajo-more.png",
            imageAlignment: "bottom"
        }
    ],
}