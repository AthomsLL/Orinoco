export class TeddyBear {
    constructor(id, image, name, description, colorList, price) {
        this.id = id;
        this.image = image;
        this.name = name;
        this.description = description;
        this.colorList = colorList;
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

    get ColorList() {
        return this.colorList;
    }

    get Price() {
        return this.price;
    }

    set Quantity(quantity) {

    }

    set ChosenColor(color) {
        
    }
}