const TECH = {
    HTMLANDCSS: 'HTML&CSS',
    REACT: 'REACT',
    ANGULAR: 'ANGULAR',
    PHP: 'PHP',
    DOCKER: 'DOCKER',
    GITHUB: 'GITHUB',
    GITLAB: 'GITLAB',
    NEXTJS: 'NEXTJS',
    GRAPHICDESIGN: 'GRAPHIC DESIGN',
    JAVASCRIPT: 'JAVASCRIPT',
    VUEJS: 'VUEJS',
    TYPESCRIPT: 'TYPESCRIPT',
    RUBYONRAILS: 'RUBY ON RAILS',
    PYTHON: 'PYTHON'
}

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
        TECH.HTMLANDCSS,
        TECH.REACT,
        TECH.ANGULAR
    ],
    true,
    true
)

const st_2 = new Student(
    2,
    "Montenegro Sánchez Alejandro",
    "Londres",
    "Reino Unido",
    "+44 644 13 21 00",
    "halepo@gmail.com",
    [
        TECH.REACT,
        TECH.ANGULAR
    ],
    false,
    true
)

const st_3 = new Student(
    3,
    "Ramirez Brown Bradley",
    "Paris",
    "Francia",
    "+33 621 01 00 52",
    "hi@gmail.com",
    [
        TECH.HTMLANDCSS,
        TECH.PHP,
        TECH.REACT,
        TECH.GRAPHICDESIGN
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
    "tuldsc@gmail.com",
    [
        TECH.HTMLANDCSS,
        TECH.DOCKER,
        TECH.GITHUB
    ],
    true,
    false
)

const st_5 = new Student(
    5,
    "Pérez Martínez Marta",
    "Valencia",
    "España",
    "+34 722 81 00 00",
    "ploc@gmail.com",
    [   
        TECH.HTMLANDCSS,
        TECH.GITLAB,
        TECH.NEXTJS,
        TECH.REACT,
        TECH.ANGULAR,
        TECH.PHP
    ],
    true,
    true
)

const st_6 = new Student(
    6,
    "Ramirez Barco Pedro",
    "Londres",
    "Reino Unido",
    "+44 710 20 29 19",
    "tulok@gmail.com",
    [
        TECH.REACT,
        TECH.ANGULAR,
        TECH.PHP
    ],
    true,
    false
)

const st_7 = new Student(
    7,
    "Tarajal Múños Lorena",
    "Paris",
    "Francia",
    "+33 621 00 00 00",
    "edsakd@gmail.com",
    [   
        TECH.HTMLANDCSS,
        TECH.REACT,
        TECH.ANGULAR
    ],
    true,
    true
)

const st_8 = new Student(
    8,
    "Duarte Marcos",
    "Londres",
    "Reino Unido",
    "+44 722 81 00 00",
    "marcosduarte@gmail.com",
    [
        TECH.JAVASCRIPT,
        TECH.GITLAB,
        TECH.VUEJS,
        TECH.PHP,
        TECH.ANGULAR
    ],
    true,
    false
)

const st_9 = new Student(
    9,
    "Fortuna Pacho",
    "Valencia",
    "España",
    "+34 655 55 21 06",
    "terc@gmail.com",
    [   
        TECH.HTMLANDCSS,
        TECH.DOCKER,
        TECH.GITHUB,
        TECH.TYPESCRIPT
    ],
    false,
    false
)

const st_10 = new Student(
    10,
    "Hernández Daniel",
    "Madrid",
    "España",
    "+34 677 63 24 12",
    "daniel.hernandez@gmail.com",
    [
        TECH.HTMLANDCSS,
        TECH.DOCKER,
        TECH.GITLAB,
        TECH.GITLAB,
        TECH.RUBYONRAILS,
        TECH.PYTHON
    ],
    true,
    false
)

const dataTD = [st_1, st_2, st_3, st_4, st_5, st_6, st_7, st_8, st_9, st_10];



function cbxPhysicalJobTrue() {
    const cbxPhysicalJobTrueInput = document.getElementById('cbxPhysicalJobTrue');
    const cbxPhysicalJobFalseInput = document.getElementById('cbxPhysicalJobFalse');

    if(cbxPhysicalJobTrueInput.checked == true) {
        cbxPhysicalJobFalseInput.checked = false;
        result.innerHTML = "";

        for(let student of dataTD) {
            let remote = student.remote;

            if(
                (remote)
            ) {


                result.innerHTML += `
                    <tr id="trID">
                        <td>${student.name}</td>
                        <td>${student.city}</td>
                        <td>${student.country}</td>
                        <td>${student.phone}</td>
                        <td>${student.email}</td>
                        <td>
                            <div class="tech-box-tab">
                                <span class="spanTD">${student.tags[0]}</span>
                                <span class="spanTD">${student.tags[1]}</span>
                                ${student.tags[2] ? `<span class="spanTD">${student.tags[2]}</span>`: `<span style="display: none"></span>`}
                                ${student.tags[3] ? `<span class="spanTD">${student.tags[3]}</span>`: `<span style="display: none"></span>`}
                                ${student.tags[4] ? `<span class="spanTD">${student.tags[4]}</span>`: `<span style="display: none"></span>`}
                                ${student.tags[5] ? `<span class="spanTD">${student.tags[5]}</span>`: `<span style="display: none"></span>`}
                                ${student.tags[6] ? `<span class="spanTD">${student.tags[6]}</span>`: `<span style="display: none"></span>`}
                                ${student.tags[7] ? `<span class="spanTD">${student.tags[7]}</span>`: `<span style="display: none"></span>`}
                                ${student.tags[8] ? `<span class="spanTD">${student.tags[8]}</span>`: `<span style="display: none"></span>`}
                                ${student.tags[9] ? `<span class="spanTD">${student.tags[9]}</span>`: `<span style="display: none"></span>`}
                                ${student.tags[10] ? `<span class="spanTD">${student.tags[10]}</span>`: `<span style="display: none"></span>`}
                                ${student.tags[11] ? `<span class="spanTD">${student.tags[11]}</span>`: `<span style="display: none"></span>`}
                                ${student.tags[12] ? `<span class="spanTD">${student.tags[12]}</span>`: `<span style="display: none"></span>`}
                            </div>
                        </td>
                    </tr>
                `
            }
        }
    } else {
        doSearch();
    }
}

function cbxMovingJobTrue() {
    const cbxMovingJobTrueInput = document.getElementById('cbxMovingJobTrue');
    const cbxMovingJobFalseInput = document.getElementById('cbxMovingJobFalse');


    if(cbxMovingJobTrueInput.checked == true) {
        cbxMovingJobFalseInput.checked = false;
        result.innerHTML = "";

        for(let student of dataTD) {
            let moving = student.moving;

            if(
                (moving)
            ) {


                result.innerHTML += `
                    <tr id="trID">
                        <td>${student.name}</td>
                        <td>${student.city}</td>
                        <td>${student.country}</td>
                        <td>${student.phone}</td>
                        <td>${student.email}</td>
                        <td>
                            <div class="tech-box-tab">
                                <span class="spanTD">${student.tags[0]}</span>
                                <span class="spanTD">${student.tags[1]}</span>
                                ${student.tags[2] ? `<span class="spanTD">${student.tags[2]}</span>`: `<span style="display: none"></span>`}
                                ${student.tags[3] ? `<span class="spanTD">${student.tags[3]}</span>`: `<span style="display: none"></span>`}
                                ${student.tags[4] ? `<span class="spanTD">${student.tags[4]}</span>`: `<span style="display: none"></span>`}
                                ${student.tags[5] ? `<span class="spanTD">${student.tags[5]}</span>`: `<span style="display: none"></span>`}
                                ${student.tags[6] ? `<span class="spanTD">${student.tags[6]}</span>`: `<span style="display: none"></span>`}
                                ${student.tags[7] ? `<span class="spanTD">${student.tags[7]}</span>`: `<span style="display: none"></span>`}
                                ${student.tags[8] ? `<span class="spanTD">${student.tags[8]}</span>`: `<span style="display: none"></span>`}
                                ${student.tags[9] ? `<span class="spanTD">${student.tags[9]}</span>`: `<span style="display: none"></span>`}
                                ${student.tags[10] ? `<span class="spanTD">${student.tags[10]}</span>`: `<span style="display: none"></span>`}
                                ${student.tags[11] ? `<span class="spanTD">${student.tags[11]}</span>`: `<span style="display: none"></span>`}
                                ${student.tags[12] ? `<span class="spanTD">${student.tags[12]}</span>`: `<span style="display: none"></span>`}
                            </div>
                        </td>
                    </tr>
                `
            }
        }
    } else {
        doSearch();
    }
}

function cbxPhysicalJobFalse() {
    const cbxPhysicalJobTrueInput = document.getElementById('cbxPhysicalJobTrue');
    const cbxPhysicalJobFalseInput = document.getElementById('cbxPhysicalJobFalse');

    if (cbxPhysicalJobFalseInput.checked == true){
        cbxPhysicalJobTrueInput.checked = false;
        result.innerHTML = "";

        for(let student of dataTD) {
            let remote = student.remote;

            if(
                (!remote)
            ) {


                result.innerHTML += `
                    <tr id="trID">
                        <td>${student.name}</td>
                        <td>${student.city}</td>
                        <td>${student.country}</td>
                        <td>${student.phone}</td>
                        <td>${student.email}</td>
                        <td>
                            <div class="tech-box-tab">
                                <span class="spanTD">${student.tags[0]}</span>
                                <span class="spanTD">${student.tags[1]}</span>
                                ${student.tags[2] ? `<span class="spanTD">${student.tags[2]}</span>`: `<span style="display: none"></span>`}
                                ${student.tags[3] ? `<span class="spanTD">${student.tags[3]}</span>`: `<span style="display: none"></span>`}
                                ${student.tags[4] ? `<span class="spanTD">${student.tags[4]}</span>`: `<span style="display: none"></span>`}
                                ${student.tags[5] ? `<span class="spanTD">${student.tags[5]}</span>`: `<span style="display: none"></span>`}
                                ${student.tags[6] ? `<span class="spanTD">${student.tags[6]}</span>`: `<span style="display: none"></span>`}
                                ${student.tags[7] ? `<span class="spanTD">${student.tags[7]}</span>`: `<span style="display: none"></span>`}
                                ${student.tags[8] ? `<span class="spanTD">${student.tags[8]}</span>`: `<span style="display: none"></span>`}
                                ${student.tags[9] ? `<span class="spanTD">${student.tags[9]}</span>`: `<span style="display: none"></span>`}
                                ${student.tags[10] ? `<span class="spanTD">${student.tags[10]}</span>`: `<span style="display: none"></span>`}
                                ${student.tags[11] ? `<span class="spanTD">${student.tags[11]}</span>`: `<span style="display: none"></span>`}
                                ${student.tags[12] ? `<span class="spanTD">${student.tags[12]}</span>`: `<span style="display: none"></span>`}
                            </div>
                        </td>
                    </tr>
                `
            }
        }
    } else {
        doSearch();
    }
}

function cbxMovingJobFalse() {
    const cbxMovingJobTrueInput = document.getElementById('cbxMovingJobTrue');
    const cbxMovingJobFalseInput = document.getElementById('cbxMovingJobFalse');


    if(cbxMovingJobFalseInput.checked == true) {
        cbxMovingJobTrueInput.checked = false;
        result.innerHTML = "";

        for(let student of dataTD) {
            let moving = student.moving;

            if(
                (!moving)
            ) {


                result.innerHTML += `
                    <tr id="trID">
                        <td>${student.name}</td>
                        <td>${student.city}</td>
                        <td>${student.country}</td>
                        <td>${student.phone}</td>
                        <td>${student.email}</td>
                        <td>
                            <div class="tech-box-tab">
                                <span class="spanTD">${student.tags[0]}</span>
                                <span class="spanTD">${student.tags[1]}</span>
                                ${student.tags[2] ? `<span class="spanTD">${student.tags[2]}</span>`: `<span style="display: none"></span>`}
                                ${student.tags[3] ? `<span class="spanTD">${student.tags[3]}</span>`: `<span style="display: none"></span>`}
                                ${student.tags[4] ? `<span class="spanTD">${student.tags[4]}</span>`: `<span style="display: none"></span>`}
                                ${student.tags[5] ? `<span class="spanTD">${student.tags[5]}</span>`: `<span style="display: none"></span>`}
                                ${student.tags[6] ? `<span class="spanTD">${student.tags[6]}</span>`: `<span style="display: none"></span>`}
                                ${student.tags[7] ? `<span class="spanTD">${student.tags[7]}</span>`: `<span style="display: none"></span>`}
                                ${student.tags[8] ? `<span class="spanTD">${student.tags[8]}</span>`: `<span style="display: none"></span>`}
                                ${student.tags[9] ? `<span class="spanTD">${student.tags[9]}</span>`: `<span style="display: none"></span>`}
                                ${student.tags[10] ? `<span class="spanTD">${student.tags[10]}</span>`: `<span style="display: none"></span>`}
                                ${student.tags[11] ? `<span class="spanTD">${student.tags[11]}</span>`: `<span style="display: none"></span>`}
                                ${student.tags[12] ? `<span class="spanTD">${student.tags[12]}</span>`: `<span style="display: none"></span>`}
                            </div>
                        </td>
                    </tr>
                `
            }
        }
    } else {
        doSearch();
    }
}

function slctCity() {
    const slctCity = document.getElementById('slctCity').value.toLowerCase();
    switch (slctCity) {
        case "valencia":
            filterByCity();
        case "londres":
            filterByCity();
        case "paris":
            filterByCity();
        case "madrid":
            filterByCity();
        default:
            break;
    }

    function filterByCity() {
        result.innerHTML = "";

        for(let student of dataTD) {
            let city = student.city.toLowerCase();

            if(
                (slctCity == city)
            ) {


                result.innerHTML += `
                    <tr id="trID">
                        <td>${student.name}</td>
                        <td>${student.city}</td>
                        <td>${student.country}</td>
                        <td>${student.phone}</td>
                        <td>${student.email}</td>
                        <td>
                            <div class="tech-box-tab">
                                <span class="spanTD">${student.tags[0]}</span>
                                <span class="spanTD">${student.tags[1]}</span>
                                ${student.tags[2] ? `<span class="spanTD">${student.tags[2]}</span>`: `<span style="display: none"></span>`}
                                ${student.tags[3] ? `<span class="spanTD">${student.tags[3]}</span>`: `<span style="display: none"></span>`}
                                ${student.tags[4] ? `<span class="spanTD">${student.tags[4]}</span>`: `<span style="display: none"></span>`}
                                ${student.tags[5] ? `<span class="spanTD">${student.tags[5]}</span>`: `<span style="display: none"></span>`}
                                ${student.tags[6] ? `<span class="spanTD">${student.tags[6]}</span>`: `<span style="display: none"></span>`}
                                ${student.tags[7] ? `<span class="spanTD">${student.tags[7]}</span>`: `<span style="display: none"></span>`}
                                ${student.tags[8] ? `<span class="spanTD">${student.tags[8]}</span>`: `<span style="display: none"></span>`}
                                ${student.tags[9] ? `<span class="spanTD">${student.tags[9]}</span>`: `<span style="display: none"></span>`}
                                ${student.tags[10] ? `<span class="spanTD">${student.tags[10]}</span>`: `<span style="display: none"></span>`}
                                ${student.tags[11] ? `<span class="spanTD">${student.tags[11]}</span>`: `<span style="display: none"></span>`}
                                ${student.tags[12] ? `<span class="spanTD">${student.tags[12]}</span>`: `<span style="display: none"></span>`}
                            </div>
                        </td>
                    </tr>
                `
            }
        }
    }
    
}

function slctCountry() {
    const slctCountry = document.getElementById('slctCountry').value.toLowerCase();
    switch (slctCountry) {
        case "españa":
            filterByCountry();
        case "reino unido":
            filterByCountry();
        case "francia":
            filterByCountry();
        default:
            break;
    }

    function filterByCountry() {
        result.innerHTML = "";

        for(let student of dataTD) {
            let country = student.country.toLowerCase();

            if(
                (slctCountry == country)
            ) {


                result.innerHTML += `
                    <tr id="trID">
                        <td>${student.name}</td>
                        <td>${student.city}</td>
                        <td>${student.country}</td>
                        <td>${student.phone}</td>
                        <td>${student.email}</td>
                        <td>
                            <div class="tech-box-tab">
                                <span class="spanTD">${student.tags[0]}</span>
                                <span class="spanTD">${student.tags[1]}</span>
                                ${student.tags[2] ? `<span class="spanTD">${student.tags[2]}</span>`: `<span style="display: none"></span>`}
                                ${student.tags[3] ? `<span class="spanTD">${student.tags[3]}</span>`: `<span style="display: none"></span>`}
                                ${student.tags[4] ? `<span class="spanTD">${student.tags[4]}</span>`: `<span style="display: none"></span>`}
                                ${student.tags[5] ? `<span class="spanTD">${student.tags[5]}</span>`: `<span style="display: none"></span>`}
                                ${student.tags[6] ? `<span class="spanTD">${student.tags[6]}</span>`: `<span style="display: none"></span>`}
                                ${student.tags[7] ? `<span class="spanTD">${student.tags[7]}</span>`: `<span style="display: none"></span>`}
                                ${student.tags[8] ? `<span class="spanTD">${student.tags[8]}</span>`: `<span style="display: none"></span>`}
                                ${student.tags[9] ? `<span class="spanTD">${student.tags[9]}</span>`: `<span style="display: none"></span>`}
                                ${student.tags[10] ? `<span class="spanTD">${student.tags[10]}</span>`: `<span style="display: none"></span>`}
                                ${student.tags[11] ? `<span class="spanTD">${student.tags[11]}</span>`: `<span style="display: none"></span>`}
                                ${student.tags[12] ? `<span class="spanTD">${student.tags[12]}</span>`: `<span style="display: none"></span>`}
                            </div>
                        </td>
                    </tr>
                `
            }
        }
    }
    
}



const inputSearchTag = document.getElementById('i-tags');
inputSearchTag.addEventListener("keyup", filter);
document.getElementById('showListTech').addEventListener("click", showListTech);
const borderBoxSearchTag = document.getElementById('__filter__pc__dv');
const cnt_span = document.getElementById('cnt-span');

const result = document.querySelector('#results');

const boxSearchTag = document.getElementById('box-search');
boxSearchTag.innerHTML += `
    <li>${TECH.HTMLANDCSS}</li>
    <li>${TECH.REACT}</li>
    <li>${TECH.ANGULAR}</li>
    <li>${TECH.PHP}</li>
    <li>${TECH.DOCKER}</li>
    <li>${TECH.GITHUB}</li>
    <li>${TECH.GITLAB}</li>
    <li>${TECH.NEXTJS}</li>
    <li>${TECH.GRAPHICDESIGN}</li>
    <li>${TECH.JAVASCRIPT}</li>
    <li>${TECH.VUEJS}</li>
    <li>${TECH.TYPESCRIPT}</li>
    <li>${TECH.RUBYONRAILS}</li>
    <li>${TECH.PYTHON}</li>
`

function showListTech() {
    liHTMLCOLLECTION = boxSearchTag.getElementsByTagName('li');
    liList = [...liHTMLCOLLECTION];
    liList.forEach(li => {
        li.addEventListener("click", function(){

            if (liTextArr.includes(li.innerText)) {
                console.log("Already exists!")
            } else {
                tmpLiText.push(li.innerText);
                const tmpLiTextArr = new Set(tmpLiText);
                let liTextArr = [...tmpLiTextArr];

                let newSpan = "";
                liTextArr.forEach(liTextArrValue => {
                    newSpan += `<span>${liTextArrValue}</span>`;
                    cnt_span.innerHTML = newSpan;
                })

                filterBySpanBox();
                function filterBySpanBox(){
                    result.innerHTML = "";

                    for(let student of dataTD) {
                        let st_tags = student.tags.toString().toUpperCase();

                        if(
                            (st_tags.indexOf(liTextArr.join(',')) !== -1)
                        ) {


                            result.innerHTML += `
                                <tr id="trID">
                                    <td>${student.name}</td>
                                    <td>${student.city}</td>
                                    <td>${student.country}</td>
                                    <td>${student.phone}</td>
                                    <td>${student.email}</td>
                                    <td>
                                        <div class="tech-box-tab">
                                            <span class="spanTD">${student.tags[0]}</span>
                                            <span class="spanTD">${student.tags[1]}</span>
                                            ${student.tags[2] ? `<span class="spanTD">${student.tags[2]}</span>`: `<span style="display: none"></span>`}
                                            ${student.tags[3] ? `<span class="spanTD">${student.tags[3]}</span>`: `<span style="display: none"></span>`}
                                            ${student.tags[4] ? `<span class="spanTD">${student.tags[4]}</span>`: `<span style="display: none"></span>`}
                                            ${student.tags[5] ? `<span class="spanTD">${student.tags[5]}</span>`: `<span style="display: none"></span>`}
                                            ${student.tags[6] ? `<span class="spanTD">${student.tags[6]}</span>`: `<span style="display: none"></span>`}
                                            ${student.tags[7] ? `<span class="spanTD">${student.tags[7]}</span>`: `<span style="display: none"></span>`}
                                            ${student.tags[8] ? `<span class="spanTD">${student.tags[8]}</span>`: `<span style="display: none"></span>`}
                                            ${student.tags[9] ? `<span class="spanTD">${student.tags[9]}</span>`: `<span style="display: none"></span>`}
                                            ${student.tags[10] ? `<span class="spanTD">${student.tags[10]}</span>`: `<span style="display: none"></span>`}
                                            ${student.tags[11] ? `<span class="spanTD">${student.tags[11]}</span>`: `<span style="display: none"></span>`}
                                            ${student.tags[12] ? `<span class="spanTD">${student.tags[12]}</span>`: `<span style="display: none"></span>`}
                                        </div>
                                    </td>
                                </tr>
                            `
                        }
                    }
                }
            }
            boxSearchTag.classList.remove('showBox');
        });
    });

    boxSearchTag.classList.toggle('showBox');
    if (boxSearchTag.classList.contains('showBox')) {
        borderBoxSearchTag.style.borderBottomLeftRadius = "0px";
        borderBoxSearchTag.style.borderBottomRightRadius = "0px";
    } else {
        borderBoxSearchTag.style.borderBottomLeftRadius = "8px";
        borderBoxSearchTag.style.borderBottomRightRadius = "8px";
    };
    
};

var tmpLiText = [];
var liTextArr = [];

function filter() {
    inputSearchTagValue = inputSearchTag.value.toUpperCase();
    liHTMLCOLLECTION = boxSearchTag.getElementsByTagName('li');
    liList = [...liHTMLCOLLECTION];

    // Running through the Elements to filter by means of li Elements
    for (let i = 0; i < liList.length; i++) {
        liText = liList[i].innerText;

        if (liText.toUpperCase().indexOf(inputSearchTagValue) > -1) {
            borderBoxSearchTag.style.borderBottomLeftRadius = "0px";
            borderBoxSearchTag.style.borderBottomRightRadius = "0px";
            boxSearchTag.classList.add("showBox");
            liList[i].style.display = "";

            if (inputSearchTagValue === "") {
                boxSearchTag.classList.toggle("showBox");
            }

        } else {
            liList[i].style.display = "none";
        }

    }

    liList.forEach(li => {
        li.addEventListener("click", function(){

            if (liTextArr.includes(li.innerText)) {
                console.log("Already exists!")
            } else {
                tmpLiText.push(li.innerText);
                const tmpLiTextArr = new Set(tmpLiText);
                let liTextArr = [...tmpLiTextArr];

                let newSpan = "";
                liTextArr.forEach(liTextArrValue => {
                    newSpan += `<span>${liTextArrValue}</span>`;
                    cnt_span.innerHTML = newSpan;
                    boxSearchTag.classList.remove('showBox');
                })
                filterBySpanBox();
                function filterBySpanBox(){
                    result.innerHTML = "";

                    for(let student of dataTD) {
                        let st_tags = student.tags.toString().toUpperCase();

                        if(
                            (st_tags.indexOf(liTextArr.join(',')) !== -1)
                        ) {


                            result.innerHTML += `
                                <tr id="trID">
                                    <td>${student.name}</td>
                                    <td>${student.city}</td>
                                    <td>${student.country}</td>
                                    <td>${student.phone}</td>
                                    <td>${student.email}</td>
                                    <td>
                                        <div class="tech-box-tab">
                                            <span class="spanTD">${student.tags[0]}</span>
                                            <span class="spanTD">${student.tags[1]}</span>
                                            ${student.tags[2] ? `<span class="spanTD">${student.tags[2]}</span>`: `<span style="display: none"></span>`}
                                            ${student.tags[3] ? `<span class="spanTD">${student.tags[3]}</span>`: `<span style="display: none"></span>`}
                                            ${student.tags[4] ? `<span class="spanTD">${student.tags[4]}</span>`: `<span style="display: none"></span>`}
                                            ${student.tags[5] ? `<span class="spanTD">${student.tags[5]}</span>`: `<span style="display: none"></span>`}
                                            ${student.tags[6] ? `<span class="spanTD">${student.tags[6]}</span>`: `<span style="display: none"></span>`}
                                            ${student.tags[7] ? `<span class="spanTD">${student.tags[7]}</span>`: `<span style="display: none"></span>`}
                                            ${student.tags[8] ? `<span class="spanTD">${student.tags[8]}</span>`: `<span style="display: none"></span>`}
                                            ${student.tags[9] ? `<span class="spanTD">${student.tags[9]}</span>`: `<span style="display: none"></span>`}
                                            ${student.tags[10] ? `<span class="spanTD">${student.tags[10]}</span>`: `<span style="display: none"></span>`}
                                            ${student.tags[11] ? `<span class="spanTD">${student.tags[11]}</span>`: `<span style="display: none"></span>`}
                                            ${student.tags[12] ? `<span class="spanTD">${student.tags[12]}</span>`: `<span style="display: none"></span>`}
                                        </div>
                                    </td>
                                </tr>
                            `
                        }
                    }
                }
                
            }

        });
    });
};


function sortTableByColumn(table, column, asc = true) {
    const dirModifier = asc ? 1 : -1;
    const tBody = table.tBodies[0];
    const rows = Array.from(tBody.querySelectorAll("tr"));

    // Sort each row
    const sortedRows = rows.sort((a, b) => {
        const aColText = a.querySelector(`td:nth-child(${ column + 1 })`).textContent.trim();
        const bColText = b.querySelector(`td:nth-child(${ column + 1 })`).textContent.trim();
        return aColText > bColText ? (1 * dirModifier) : (-1 * dirModifier);
    });

    // Remove all existing TRs from the table
    while (tBody.firstChild) {
        tBody.removeChild(tBody.firstChild);
    }

    // Re-add the newly sorted rows
    tBody.append(...sortedRows);

    // Remember how the column is currently sorted
    table.querySelectorAll("th").forEach(th => th.classList.remove("th-sort-asc", "th-sort-desc"));
    table.querySelector(`th:nth-child(${ column + 1})`).classList.toggle("th-sort-asc", asc);
    table.querySelector(`th:nth-child(${ column + 1})`).classList.toggle("th-sort-desc", !asc);
}

document.querySelectorAll("table th").forEach(headerCell => {
    headerCell.addEventListener("click", () => {
        const tableElement = headerCell.parentElement.parentElement.parentElement;
        const headerIndex = Array.prototype.indexOf.call(headerCell.parentElement.children, headerCell);
        const currentIsAscending = headerCell.classList.contains("th-sort-asc");

        sortTableByColumn(tableElement, headerIndex, !currentIsAscending);
    });
});

// FIN

/**
 * SEARCH FILTER
 */
const doSearch = () => {
    const srchInput = document.querySelector("#srchInput");
    const textInput = srchInput.value.toLowerCase()
    result.innerHTML = "";

    for(let student of dataTD) {
        let name = student.name.toLowerCase();
        let city = student.city.toLowerCase();
        let country = student.country.toLowerCase();
        let phone = student.phone;
        let email = student.email.toLowerCase();
        let st_tags = student.tags.toString().toLowerCase();

        if(
            (name.indexOf(textInput) !== -1) ||
            (city.indexOf(textInput) !== -1) ||
            (country.indexOf(textInput) !== -1) ||
            (phone.indexOf(textInput) !== -1) ||
            (email.indexOf(textInput) !== -1) ||
            (st_tags.indexOf(textInput) !== -1)
        ) {


            result.innerHTML += `
                <tr id="trID">
                    <td>${student.name}</td>
                    <td>${student.city}</td>
                    <td>${student.country}</td>
                    <td>${student.phone}</td>
                    <td>${student.email}</td>
                    <td>
                        <div class="tech-box-tab">
                            <span class="spanTD">${student.tags[0]}</span>
                            <span class="spanTD">${student.tags[1]}</span>
                            ${student.tags[2] ? `<span class="spanTD">${student.tags[2]}</span>`: `<span style="display: none"></span>`}
                            ${student.tags[3] ? `<span class="spanTD">${student.tags[3]}</span>`: `<span style="display: none"></span>`}
                            ${student.tags[4] ? `<span class="spanTD">${student.tags[4]}</span>`: `<span style="display: none"></span>`}
                            ${student.tags[5] ? `<span class="spanTD">${student.tags[5]}</span>`: `<span style="display: none"></span>`}
                            ${student.tags[6] ? `<span class="spanTD">${student.tags[6]}</span>`: `<span style="display: none"></span>`}
                            ${student.tags[7] ? `<span class="spanTD">${student.tags[7]}</span>`: `<span style="display: none"></span>`}
                            ${student.tags[8] ? `<span class="spanTD">${student.tags[8]}</span>`: `<span style="display: none"></span>`}
                            ${student.tags[9] ? `<span class="spanTD">${student.tags[9]}</span>`: `<span style="display: none"></span>`}
                            ${student.tags[10] ? `<span class="spanTD">${student.tags[10]}</span>`: `<span style="display: none"></span>`}
                            ${student.tags[11] ? `<span class="spanTD">${student.tags[11]}</span>`: `<span style="display: none"></span>`}
                            ${student.tags[12] ? `<span class="spanTD">${student.tags[12]}</span>`: `<span style="display: none"></span>`}
                        </div>
                    </td>
                </tr>
            `
        }
    }
}

function deleteAll() {
    var cbxPhysicalJobTrueInput = document.getElementById('cbxPhysicalJobTrue');
    cbxPhysicalJobTrueInput.checked = false;
    var cbxPhysicalJobFalseInput = document.getElementById('cbxPhysicalJobFalse');
    cbxPhysicalJobFalseInput.checked = false;
    var cbxMovingJobTrueInput = document.getElementById('cbxMovingJobTrue');
    cbxMovingJobTrueInput.checked = false;
    var cbxMovingJobFalseInput = document.getElementById('cbxMovingJobFalse');
    cbxMovingJobFalseInput.checked = false;
    var slctCountry = document.getElementById('slctCountry');
    slctCountry.value = "";
    var slctCity = document.getElementById('slctCity');
    slctCity.value = "";
    cnt_span.innerHTML = '';
    tmpLiText = [];
    liTextArr = [];
    doSearch();
}
// FIN



function studentPageForm() {
    const formContainerSt = document.getElementById("form-container-st");
    stId = dataTD[0].id -1; // USEEEEEEEEEEEEEEER!!

    function stCountry(id){
        switch(dataTD[id].country){
            case 'España':
                return (`<option value="spain" selected>España</option>
                <option value="french">Francia</option>
                <option value="uk">Reino Unido</option>`);
            case 'Francia':
                return (`<option value="spain">España</option>
                <option value="france" selected>Francia</option>
                <option value="uk">Reino Unido</option>`);
            case 'Reino Unido':
                return (`<option value="spain">España</option>
                <option value="france">Francia</option>
                <option value="uk" selected>Reino Unido</option>`);
            default:
                return null;
        }
    }

    function stCity(id){
        switch(dataTD[id].city){
            case 'Valencia':
                return (`<option value="valencia" selected>Valencia</option>
                <option value="madrid">Madrid</option>
                <option value="london">Londres</option>
                <option value="paris">Paris</option>`);
            case 'Madrid':
                return (`<option value="valencia" >Valencia</option>
                <option value="madrid" selected>Madrid</option>
                <option value="london">Londres</option>
                <option value="paris">Paris</option>`);
            case 'Paris':
                return (`<option value="valencia" >Valencia</option>
                <option value="madrid">Madrid</option>
                <option value="london">Londres</option>
                <option value="paris" selected>Paris</option>`);
            case 'Londres':
                return (`<option value="valencia" >Valencia</option>
                <option value="madrid">Madrid</option>
                <option value="london" selected>Londres</option>
                <option value="paris">Paris</option>`);
            default:
                return null;
        }
    }

    function stMoving(id){
        switch(dataTD[id].moving){
            case true:
                return (`<option value="transportNo">No</option>
                <option value="transportYes" selected>Sí</option>`);
            case false:
                return (`<option value="transportNo" false>No</option>
                <option value="transportYes">Sí</option>`);
            default:
                return null;
        }
    }

    function stRemote(id){
        switch(dataTD[id].moving){
            case true:
                return (`<option value="remote" selected>Remoto</option>
                <option value="onSide">Presencial</option>`);
            case false:
                return (`<option value="remote">Remoto</option>
                <option value="onSide" selected>Presencial</option>`);
            default:
                return null;
        }
    }

    const contentOfFormContainer = document.createElement("DIV");
    contentOfFormContainer.innerHTML = `
        <div class="form-container-st__header-form">
            <div class="header-form__img-wrapper">
                <img src="../assets/img/avatar-user.jpg" alt="">
            </div>
            <div class="header-form__txt-wrapper">
                <h2>${dataTD[stId].name}</h2>
                <div><i class="bi bi-geo-alt"></i><span> ${dataTD[stId].city} | ${dataTD[0].country}</span></div>
            </div>
        </div>
        <div class="form-container__body-form">
            <div class="body-form__box">
                <div class="innerBox-1pc">
                    <label for="">Nombre y Apellidos</label>
                    <input type="text" value="${dataTD[stId].name}">
                </div>
            </div>

            <div class="body-form__box">
                <div class="box__innerBox-2pc">
                    <span>
                        <label for="">Nº Teléfono</label>
                        <input type="text" value="${dataTD[stId].phone}">
                    </span>
                    <span>
                        <label for="">Email</label>
                        <input type="text" value="${dataTD[stId].email}">
                    </span>
                </div>
            </div>

            <div class="body-form__box">
                <div class="box__innerBox-2pc">
                    <span>
                        <label for="">País</label>
                        <select name="" id="">
                            <optgroup>
                                ${stCountry(stId)}
                            </optgroup>
                        </select>
                    </span>
                    <span>
                        <label for="">Ciudad</label>
                        <select name="" id="">
                            <optgroup>
                                ${stCity(stId)}
                            </optgroup>
                        </select>
                    </span>
                </div>
            </div>

            <div class="body-form__box">
                <div class="box__innerBox-2pc">
                    <span>
                        <label for="">Traslado</label>
                        <select name="" id="">
                            <optgroup>
                                ${stMoving(stId)}
                            </optgroup>
                        </select>
                    </span>
                    <span>
                        <label for="">Presencialidad</label>
                        <select name="" id="">
                            <optgroup>
                                ${stRemote(stId)}
                            </optgroup>
                        </select>
                    </span>
                </div>
            </div>

            <div class="body-form__box">
                <h5>Documento CV</h5>
                <div class="box__innerBox-2pc-CV">
                    <span>
                        <label> <i class="bi bi-cloud-arrow-up"></i> Subir de nuevo
                            <input id="inputFile" type="file">
                        </label>
                    </span>
                    <span>
                        <a id="removeCV">
                            <i class="bi bi-trash"></i>
                                Borrar
                        </a>
                    </span>
                </div>
            </div>

            <div class="body-form__box">
                <div class="innerBox-1pc">
                    <label for="">Etiquetas</label>
                    <input type="text" placeholder="Escribe para buscar">
                    <div class="box__innerBox-tags">
                        ${dataTD[stId].tags[0] ?
                            `<span>${dataTD[stId].tags[0]} <i class="bi bi-x-lg"></i></span>`:
                            `<span style="display: none"></span>`
                        }
                        ${dataTD[stId].tags[1] ?
                            `<span>${dataTD[stId].tags[1]} <i class="bi bi-x-lg"></i></span>`:
                            `<span style="display: none"></span>`
                        }
                        ${dataTD[stId].tags[2] ?
                            `<span>${dataTD[stId].tags[2]} <i class="bi bi-x-lg"></i></span>`:
                            `<span style="display: none"></span>`
                        }
                        ${dataTD[stId].tags[3] ?
                            `<span>${dataTD[stId].tags[3]} <i class="bi bi-x-lg"></i></span>`:
                            `<span style="display: none"></span>`
                        }
                        ${dataTD[stId].tags[4] ?
                            `<span>${dataTD[stId].tags[4]} <i class="bi bi-x-lg"></i></span>`:
                            `<span style="display: none"></span>`
                        }
                        ${dataTD[stId].tags[5] ?
                            `<span>${dataTD[stId].tags[5]} <i class="bi bi-x-lg"></i></span>`:
                            `<span style="display: none"></span>`
                        }
                        ${dataTD[stId].tags[6] ?
                            `<span>${dataTD[stId].tags[6]} <i class="bi bi-x-lg"></i></span>`:
                            `<span style="display: none"></span>`
                        }
                    </div>
                </div>
            </div>
        </div>
    `;

    formContainerSt.append(contentOfFormContainer);


    // UPLOAD CV
    const inputFile = document.querySelector("#inputFile");
    var fileList;
    
    inputFile.addEventListener("change", (e) => {
        if (inputFile.files.length > 0) {
            fileList = [...inputFile.files];
            let fileCVNAME = "../assets/tmp/pdf/" + fileList[0].name;
            dataTD[stId].cv = fileCVNAME;
            let formData = new FormData();
            formData.append("myCV", fileList[0]); // En la posición 0; es decir, el primer elemento
            fetch("../services/uploadFile.php", {
                method: 'POST',
                body: formData,
            })
                .then(respuesta => respuesta.text())
                .then(decodificado => {
                    console.log(decodificado);
                });

            dataTD[stId].cv = fileCVNAME;
            const objectDATA = document.getElementById('object-data');
            objectDATA.setAttribute('data', dataTD[stId].cv);
            e.preventDefault();
        }
    });

    const e_a_removeCV = document.getElementById("removeCV");
    e_a_removeCV.addEventListener("click", () => {
        if(fileList.length > 0){
            location.reload();
        }
    });
}

studentPageForm();