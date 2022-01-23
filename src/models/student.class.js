export class Student {
    name = '';
    city = '';
    country = '';
    phone = '';
    email = '';
    tags = [];

    constructor(name1, city1, country1, phone1, email1, tags1) {
        this.name = name1;
        this.city = city1;
        this.country = country1;
        this.phone = phone1;
        this.email = email1;
        this.tags = tags1;
    }
}