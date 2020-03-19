export class TeddyBear {
    constructor(id, image, name, description, colors, price, quantity = 0, color) {
        this.id = id;
        this.image = image;
        this.name = name;
        this.description = description;
        this.colors = colors;
        this.price = price;
        this.quantity = quantity;
        if(typeof(color) == "undefined") {
            this.color = colors[0];
        } else {
            this.color = color;
        }
    }

    get Id() {
        return this.id;
    }

    get Image() {
        return this.image;
    }

    get Name() {
        return this.name;
    }

    get Description() {
        return this.description;
    }

    get Colors() {
        return this.colors;
    }

    get Price() {
        return this.price / 100;
    }

    get Quantity() {
        return this.quantity;
    }

    get Color() {
        return this.color;
    }

    set Quantity(quantity) {
        this.quantity = quantity;
    }

    set ChosenColor(color) {
        this.color = color;
    }
}