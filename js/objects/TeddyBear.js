export class TeddyBear {
    constructor(id, image, name, description, colors, price) {
        this.id = id;
        this.image = image;
        this.name = name;
        this.description = description;
        this.colors = colors;
        this.price = price;
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
        return this.price;
    }

    set Quantity(quantity) {
        quantity = document.getElementById('quantity').value;
    }

    set ChosenColor(color) {
        color = document.getElementById('color-select').value;
    }
}