const TeddyBear = require('../js/objects/TeddyBear');

// On vérifie que l'id du produit est bien sauvegardé

// On vérifie que l'image du produit est bien sauvegardée

// On vérifie que le nom du produit est bien sauvegardé
test("save TeddyBear's name", () => {
    let teddyBear = new TeddyBear("23", "image.png", "Robert", "Coucou", ["red", "blue", "green"], 2900, 0)
    expect(teddyBear.Name).toBe("Robert");
});

// On vérifie que la description du produit est bien sauvegardée

// On vérifie que la couleur par défaut du produit est bien rouge
test("check TeddyBear's default color has been set", () => {
    let teddyBear = new TeddyBear("23", "image.png", "Robert", "Coucou", ["red", "blue", "green"], 2900, 0)
    expect(teddyBear.Color).toBe("red");
});

// On vérifie si une couleur n'est pas définie par défaut pour le produit
test("check TeddyBear's default color does not exist", () => {
    let teddyBear = new TeddyBear("23", "image.png", "Robert", "Coucou", [], 2900, 0)
    expect(teddyBear.Color).toBe("red");
});

// On vérifie que le prix du produit est bien sauvegardé

// On vérifie si une quantité est définie par défaut pour le produit

// On vérifie que l'on peut donner un nouvel id au produit

// On vérifie que l'on peut donner une nouvelle image au produit

// On vérifie que l'on peut donner un nouveau nom au produit

// On vérifie que l'on peut donner une nouvelle description au produit

// On vérifie que l'on peut donner un nouveau prix au produit

// On vérifie que l'on peut donner une nouvelle quantité au produit

// On vérifie que l'on peut donner une nouvelle couleur au produit

