class Student {
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

const st_1 = new Student(
    "Sánchez Monteagudo Álvaro",
    "Valencia",
    "España",
    "+34 644 83 29 12",
    "smonteagudo@gmail.com",
    [
        "HTML&CSS",
        "REACT",
        "ANGULAR"
    ]
)

const st_2 = new Student(
    "Montenegro Sánchez Alejandro",
    "Londres",
    "Reino Unido",
    "+34 644 13 21 00",
    "halepo@gmail.com",
    [
        "REACT",
        "ANGULAR"
    ]
)

const st_3 = new Student(
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
    ]
)

const st_4 = new Student(
    "Barrera Rodriguez Laureano",
    "Madrid",
    "España",
    "+34 722 81 00 00",
    "ploc@gmail.com",
    [
        "DOCKER",
        "GITHUB",
        "HTML5"
    ]
)

const dataTD = [st_1, st_2, st_3, st_4];

// console.log(tmpDATA[0].name)

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
    const result = document.querySelector('#results');
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
            <tr>
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

        if(result.innerHTML === '') {
            result.innerHTML += `
                <div style="font-size: 16px; font-weight: bold; padding: 15px;">Estudiante no encontrado</div>
            `
        }
    }
}

// FIN