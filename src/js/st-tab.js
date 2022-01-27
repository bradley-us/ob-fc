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
    true,
    "../assets/tmp/pdf/sanchez_alvaro.pdf"
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

const dataTD = [st_1, st_2, st_3, st_4];

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

const result = document.querySelector('#results');
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
            <form id="trForm" method="POST" action="../pages/student-form.html/${student.id}">
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
            </form>
            `
        }

        if(result.innerHTML === '') {
            result.innerHTML += `
                <div style="font-size: 16px; font-weight: bold; padding: 15px;">Estudiante no encontrado</div>
            `
        }
    }

    const trID = document.querySelectorAll("#trID")
        
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