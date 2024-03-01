export class Product {
    constructor( public id: number, public title: string, public description: string, public photo : string, public price: number) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.photo = photo;
        this.price = price;

    }
}
