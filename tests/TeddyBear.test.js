import {TeddyBear} from '../js/objects/TeddyBear.js';

// Pack de tests concernant la classe TeddyBear
describe('Pack TeddyBear tests', () => {

    // On vérifie que l'id du produit est bien sauvegardé
    test("save TeddyBear's id", () => {
        let teddyBear = new TeddyBear("23", "image.png", "Robert", "Coucou", ["red", "blue", "green"], 2900, 0)
        expect(teddyBear.Id).toBe("23");
    });

    // On vérifie que l'image du produit est bien sauvegardée
    test("save TeddyBear's image", () => {
        let teddyBear = new TeddyBear("23", "image.png", "Robert", "Coucou", ["red", "blue", "green"], 2900, 0)
        expect(teddyBear.Image).toBe("image.png");
    });

    // On vérifie que le nom du produit est bien sauvegardé
    test("save TeddyBear's name", () => {
        let teddyBear = new TeddyBear("23", "image.png", "Robert", "Coucou", ["red", "blue", "green"], 2900, 0)
        expect(teddyBear.Name).toBe("Robert");
    });

    // On vérifie que la description du produit est bien sauvegardée
    test("save TeddyBear's description", () => {
        let teddyBear = new TeddyBear("23", "image.png", "Robert", "Coucou", ["red", "blue", "green"], 2900, 0)
        expect(teddyBear.Description).toBe("Coucou");
    });

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
    test("save TeddyBear's price", () => {
        let teddyBear = new TeddyBear("23", "image.png", "Robert", "Coucou", ["red", "blue", "green"], 2900, 0)
        expect(teddyBear.Price).toBe(29);
    });

    // On vérifie si une quantité est définie par défaut pour le produit
    test("check TeddyBear's default quantity has been set", () => {
        let teddyBear = new TeddyBear("23", "image.png", "Robert", "Coucou", ["red", "blue", "green"], 2900, 0)
        expect(teddyBear.Quantity).toBe(0);
    });

    // On vérifie que l'on peut donner un nouvel id au produit
    test("check if new TeddyBear's id should set", () => {
        let teddyBear = new TeddyBear("23", "image.png", "Robert", "Coucou", ["red", "blue", "green"], 2900, 0)
        teddyBear.Id = "46";
        expect(teddyBear.Id).toBe("46");
    });

    // On vérifie que l'on peut donner une nouvelle image au produit
    test("check if new TeddyBear's image should set", () => {
        let teddyBear = new TeddyBear("23", "image.png", "Robert", "Coucou", ["red", "blue", "green"], 2900, 0)
        teddyBear.Image = "image2.png";
        expect(teddyBear.Image).toBe("image2.png");
    });

    // On vérifie que l'on peut donner un nouveau nom au produit
    test("check if new TeddyBear's name should set", () => {
        let teddyBear = new TeddyBear("23", "image.png", "Robert", "Coucou", ["red", "blue", "green"], 2900, 0)
        teddyBear.Name = "Jean-Claude";
        expect(teddyBear.Name).toBe("Jean-Claude");
    });

    // On vérifie que l'on peut donner une nouvelle description au produit
    test("check if new TeddyBear's description should set", () => {
        let teddyBear = new TeddyBear("23", "image.png", "Robert", "Coucou", ["red", "blue", "green"], 2900, 0)
        teddyBear.Description = "Salut je suis la nouvelle description";
        expect(teddyBear.Description).toBe("Salut je suis la nouvelle description");
    });

    // On vérifie que l'on peut donner une nouvelle couleur au produit
    test("check if new TeddyBear's color should set", () => {
        let teddyBear = new TeddyBear("23", "image.png", "Robert", "Coucou", ["red", "blue", "green"], 2900, 0)
        teddyBear.ChosenColor = "Indigo";
        expect(teddyBear.Color).toBe("Indigo");
    });

    // On vérifie que l'on peut donner un nouveau prix au produit
    test("check if new TeddyBear's price should set", () => {
        let teddyBear = new TeddyBear("23", "image.png", "Robert", "Coucou", ["red", "blue", "green"], 2900, 0)
        teddyBear.Price = 5900;
        expect(teddyBear.Price).toBe(59);
    });

    // On vérifie que l'on peut donner une nouvelle quantité au produit
    test("check if new TeddyBear's quantity should set", () => {
        let teddyBear = new TeddyBear("23", "image.png", "Robert", "Coucou", ["red", "blue", "green"], 2900, 0)
        teddyBear.Quantity = 4;
        expect(teddyBear.Quantity).toBe(4);
    });
})


