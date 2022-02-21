class Student {
    id;
    name = '';
    city = '';
    country = '';
    phone = '';
    email = '';
    tags = [];
    moving = false;
    remote = true;
    cv;

    constructor(id1, name1, city1, country1, phone1, email1, tags1, moving1, workType1, cv1) {
        this.id = id1;
        this.name = name1;
        this.city = city1;
        this.country = country1;
        this.phone = phone1;
        this.email = email1;
        this.tags = tags1;
        this.moving = moving1;
        this.remote = workType1;
        this.cv = cv1;
    }
}

const st_1 = new Student(
    1,
    "Sánchez Monteagudo Álvaro",
    "Valencia",
    "España",
    "+34 644 83 29 12",
    "smonteagudo@gmail.com",
    [
        "HTML&CSS",
        "REACT",
        "ANGULAR"
    ],
    true,
    true
)

const st_2 = new Student(
    2,
    "Montenegro Sánchez Alejandro",
    "Londres",
    "Reino Unido",
    "+34 644 13 21 00",
    "halepo@gmail.com",
    [
        "REACT",
        "ANGULAR"
    ],
    false,
    true
)

const st_3 = new Student(
    3,
    "Ramirez Brown Bradley",
    "Paris",
    "Francia",
    "+34 621 01 00 52",
    "hi@gmail.com",
    [
        "PHP8",
        "HTML&CSS",
        "REACT",
        "GRAPHIC DESIGN"
    ],
    false,
    false
)

const st_4 = new Student(
    4,
    "Barrera Rodriguez Laureano",
    "Madrid",
    "España",
    "+34 722 81 00 00",
    "ploc@gmail.com",
    [
        "DOCKER",
        "GITHUB",
        "HTML5"
    ],
    true,
    false
)

const st_5 = new Student(
    5,
    "Barrera Rodriguez Laureano",
    "Madrid",
    "España",
    "+34 722 81 00 00",
    "ploc@gmail.com",
    [
        "DOCKER",
        "GITHUB",
        "HTML5"
    ],
    true,
    true
)

const st_6 = new Student(
    6,
    "Barrera Rodriguez Laureano",
    "Madrid",
    "España",
    "+34 722 81 00 00",
    "ploc@gmail.com",
    [
        "DOCKER",
        "GITHUB",
        "HTML5"
    ],
    true,
    true
)

const st_7 = new Student(
    7,
    "Barrera Rodriguez Laureano",
    "Madrid",
    "España",
    "+34 722 81 00 00",
    "ploc@gmail.com",
    [
        "DOCKER",
        "GITHUB",
        "HTML5"
    ],
    true,
    true
)

const st_8 = new Student(
    8,
    "Barrera Rodriguez Laureano",
    "Madrid",
    "España",
    "+34 722 81 00 00",
    "ploc@gmail.com",
    [
        "DOCKER",
        "GITHUB",
        "HTML5"
    ],
    true,
    true
)

const st_9 = new Student(
    9,
    "Barrera Rodriguez Laureano",
    "Madrid",
    "España",
    "+34 722 81 00 00",
    "ploc@gmail.com",
    [
        "DOCKER",
        "GITHUB",
        "HTML5"
    ],
    true,
    true
)

const st_10 = new Student(
    10,
    "Barrera Rodriguez Laureano",
    "Madrid",
    "España",
    "+34 722 81 00 00",
    "ploc@gmail.com",
    [
        "DOCKER",
        "GITHUB",
        "HTML5"
    ],
    true,
    true
)

export const dataTD = [st_1, st_2, st_3, st_4, st_5, st_6, st_7, st_8, st_9, st_10];