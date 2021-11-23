let cities = [];

init = () => {
    setTimeout(() => {
        showEmployees();
    })
}

init();

showEmployees = () => {
    document.title = 'Поликлиника - Сотрудники';
    showPage("employees");

    let employees = [
        {
            id: 1,
            firstName: 'firstName',
            middleName: 'middleName',
            lastName: 'lastName',
            dateOfBirth: '21-11-2021',
            category: {name: 'category'},
            education: {name: 'education'},
            position: {name: 'position'}
        }
    ];

    let employeesTable = document.getElementById("tbody-employees");

    employees.forEach((employee, index) => {
        let row = employeesTable.insertRow(index);
        let cell = row.insertCell(0);
        let text = document.createTextNode(employee.id);
        cell.appendChild(text);

        cell = row.insertCell(1);
        text = document.createTextNode(employee.firstName);
        cell.appendChild(text);

        cell = row.insertCell(2);
        text = document.createTextNode(employee.middleName);
        cell.appendChild(text);

        cell = row.insertCell(3);
        text = document.createTextNode(employee.lastName);
        cell.appendChild(text);

        cell = row.insertCell(4);
        text = document.createTextNode(employee.dateOfBirth);
        cell.appendChild(text);

        cell = row.insertCell(5);
        text = document.createTextNode(employee.category.name);
        cell.appendChild(text);

        cell = row.insertCell(6);
        text = document.createTextNode(employee.education.name);
        cell.appendChild(text);

        cell = row.insertCell(7);
        text = document.createTextNode(employee.position.name);
        cell.appendChild(text);

        cell = row.insertCell(8);
        let btnEdit = document.createElement("BUTTON");
        btnEdit.className = "btn btn-primary btn-sm";
        btnEdit.innerHTML = "Edit";
        btnEdit.onclick = () => {
            editEmployee(employee);
            return false;
        };

        cell.appendChild(btnEdit);

        let btnDelete = document.createElement("BUTTON");
        btnDelete.className = "btn btn-danger btn-sm";
        btnDelete.innerHTML = "Delete";

        btnDelete.onclick = () => {
            deleteEmployee(employee);
            return false;
        };
        cell.appendChild(btnDelete);
    })
}

deleteEmployee = (employee) => {
    if (confirm('Вы уверены, что хотите удалить сотрудника ' + employee.firstName + ' ' + employee.lastName)) {

    }
}

editEmployee = (employee) => {
    document.title = 'Поликлиника - Сотрудники - ' + employee.firstName + ' ' + employee.lastName;

    let categorySelect = document.getElementById("category-select");
    let option = document.createElement("option");
    option.text = "Kiwi";
    categorySelect.add(option);

    document.getElementById("editEmployee-lastName").value = employee.lastName;
    document.getElementById("editEmployee-firstName").value = employee.firstName;
    document.getElementById("editEmployee-middleName").value = employee.middleName;
    document.getElementById("editEmployee-dateOfBirth").value = employee.dateOfBirth;

    showPage("editEmployee");
}

saveEmployee = () => {
    let lastName = document.getElementById("editEmployee-lastName").value;
    let firstName = document.getElementById("editEmployee-firstName").value;
    let middleName = document.getElementById("editEmployee-middleName").value;
    let dateOfBirth = document.getElementById("editEmployee-dateOfBirth").value;
}

showCities = () => {
    document.title = 'Поликлиника - Города';
    showPage("cities");

    let elements = document.querySelectorAll(".city-row");
    elements.forEach(element => {
        element.parentNode.removeChild(element);
    });

    let citiesTable = document.getElementById("tbody-cities");
    getCities().then(response => {
        response.forEach((city, index) => {
            let row = citiesTable.insertRow(index);
            row.className = "city-row";

            let cell = row.insertCell(0);
            let text = document.createTextNode(index + 1);
            cell.appendChild(text);

            cell = row.insertCell(1);
            text = document.createTextNode(city.name);
            cell.appendChild(text);

            cell = row.insertCell(2);
            let btnEdit = document.createElement("BUTTON");
            btnEdit.className = "btn btn-primary btn-sm";
            btnEdit.innerHTML = "Edit";
            btnEdit.onclick = () => {
                editCity(city);
                return false;
            };

            cell.appendChild(btnEdit);

            let btnDelete = document.createElement("BUTTON");
            btnDelete.className = "btn btn-danger btn-sm";
            btnDelete.innerHTML = "Delete";

            btnDelete.onclick = () => {
                deleteCity(city);
                return false;
            };
            cell.appendChild(btnDelete);
        })
    });
}

editCity = (city) => {
    showPage("editCity");
    document.getElementById("editCity-id").value = city.id;
    document.getElementById("editCity-name").value = city.name;
}

saveCity = async () => {
    let id = document.getElementById("editCity-id").value;
    let name = document.getElementById("editCity-name").value;

    const settings = {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            id: id,
            name: name
        })
    };

    await fetch(`/cities`, settings);
    showCities();
}

deleteCity = async (city) => {
    if (confirm('Вы уверены, что хотите удалить город ' + city.name + '?')) {
        const settings = {
            method: 'DELETE',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        };

        await fetch(`/cities/` + city.id, settings);

        showCities();
    }
}

editCategory = (category) => {
    showPage("editCategory");
    document.getElementById("editCategory-id").value = category.id;
    document.getElementById("editCategory-name").value = category.name;
}

saveCategory = async () => {
    let id = document.getElementById("editCategory-id").value;
    let name = document.getElementById("editCategory-name").value;

    const settings = {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            id: id,
            name: name
        })
    };

    await fetch(`/categories`, settings);
    showCategories();
}

deleteCategory = async (category) => {
    if (confirm('Вы уверены, что хотите удалить ' + category.name + ' категория?')) {
        const settings = {
            method: 'DELETE',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        };

        await fetch(`/categories/` + category.id, settings);

        showCategories();
    }
}

showEducations = () => {
    document.title = 'Поликлиника - Учебные заведения';
    showPage("educations");

    let elements = document.querySelectorAll(".education-row");
    elements.forEach(element => {
        element.parentNode.removeChild(element);
    });

    let educationsTable = document.getElementById("tbody-educations");
    getEducations().then(response => {
        response.forEach((education, index) => {
            let row = educationsTable.insertRow(index);
            row.className = "education-row";

            let cell = row.insertCell(0);
            let text = document.createTextNode(index + 1);
            cell.appendChild(text);

            cell = row.insertCell(1);
            text = document.createTextNode(education.name);
            cell.appendChild(text);

            cell = row.insertCell(2);
            text = document.createTextNode(education.city.name);
            cell.appendChild(text);

            cell = row.insertCell(3);
            let btnEdit = document.createElement("BUTTON");
            btnEdit.className = "btn btn-primary btn-sm";
            btnEdit.innerHTML = "Edit";
            btnEdit.onclick = () => {
                editEducation(education);
                return false;
            };

            cell.appendChild(btnEdit);

            let btnDelete = document.createElement("BUTTON");
            btnDelete.className = "btn btn-danger btn-sm";
            btnDelete.innerHTML = "Delete";

            btnDelete.onclick = () => {
                deleteEducation(education);
                return false;
            };
            cell.appendChild(btnDelete);
        })
    });
}

editEducation = async (education) => {
    showPage("editEducation");
    document.getElementById("editEducation-id").value = education.id;
    document.getElementById("editEducation-name").value = education.name;

    await getCities();

    let editEducationSelect = document.getElementById("editEducation-city-select");

    for (let i = 0; i < cities.length; i++) {
        editEducationSelect.remove(0);
    }

    for (let city of cities) {
        let option = document.createElement("option");
        option.value = city.id;
        option.text = city.name;

        if (education.city.name === city.name) {
            option.selected = true;
        }
        editEducationSelect.add(option);
    }
}

getEducations = async () => {
    const settings = {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    };

    const fetchResponse = await fetch(`/educations`, settings);
    return await fetchResponse.json();
}

showSalary = () => {
    document.title = 'Поликлиника - Зарплаты';
    showPage("salary");
}

showCategories = () => {
    document.title = 'Поликлиника - Категории';
    showPage("categories");

    let elements = document.querySelectorAll(".category-row");
    elements.forEach(element => {
        element.parentNode.removeChild(element);
    });

    let citiesTable = document.getElementById("tbody-categories");
    getCategories().then(response => {
        response.forEach((category, index) => {
            let row = citiesTable.insertRow(index);
            row.className = "category-row";

            let cell = row.insertCell(0);
            let text = document.createTextNode(index + 1);
            cell.appendChild(text);

            cell = row.insertCell(1);
            text = document.createTextNode(category.name);
            cell.appendChild(text);

            cell = row.insertCell(2);
            let btnEdit = document.createElement("BUTTON");
            btnEdit.className = "btn btn-primary btn-sm";
            btnEdit.innerHTML = "Edit";
            btnEdit.onclick = () => {
                editCategory(category);
                return false;
            };

            cell.appendChild(btnEdit);

            let btnDelete = document.createElement("BUTTON");
            btnDelete.className = "btn btn-danger btn-sm";
            btnDelete.innerHTML = "Delete";

            btnDelete.onclick = () => {
                deleteCategory(category);
                return false;
            };
            cell.appendChild(btnDelete);
        })
    });
}

showPositions = () => {
    document.title = 'Поликлиника - Должности';
    showPage("positions");

    let elements = document.querySelectorAll(".position-row");
    elements.forEach(element => {
        element.parentNode.removeChild(element);
    });

    let citiesTable = document.getElementById("tbody-positions");
    getPositions().then(response => {
        response.forEach((position, index) => {
            let row = citiesTable.insertRow(index);
            row.className = "position-row";

            let cell = row.insertCell(0);
            let text = document.createTextNode(index + 1);
            cell.appendChild(text);

            cell = row.insertCell(1);
            text = document.createTextNode(position.name);
            cell.appendChild(text);

            cell = row.insertCell(2);
            let btnEdit = document.createElement("BUTTON");
            btnEdit.className = "btn btn-primary btn-sm";
            btnEdit.innerHTML = "Edit";
            btnEdit.onclick = () => {
                editPosition(position);
                return false;
            };

            cell.appendChild(btnEdit);

            let btnDelete = document.createElement("BUTTON");
            btnDelete.className = "btn btn-danger btn-sm";
            btnDelete.innerHTML = "Delete";

            btnDelete.onclick = () => {
                deletePosition(position);
                return false;
            };
            cell.appendChild(btnDelete);
        })
    });
}

editPosition = (category) => {
    showPage("editPosition");
    document.getElementById("editPosition-id").value = category.id;
    document.getElementById("editPosition-name").value = category.name;
}

showPage = (page) => {
    let pages = document.querySelectorAll(".page");
    pages.forEach(element => {
        element.style = 'display: none';
    });

    let element = document.getElementById(page);
    if (element != null) {
        element.style = 'display: inline';
    }
}

addCity = async () => {
    let element = document.getElementById("addCity-name");
    let dto = {
        name: element.value
    };

    const settings = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(dto)
    };

    await fetch(`/cities`, settings);
    showCities();
}

getCities = async () => {
    const settings = {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    };

    const fetchResponse = await fetch(`/cities`, settings);
    cities = await fetchResponse.json();

    return cities;
}

getCategories = async () => {
    const settings = {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    };

    const fetchResponse = await fetch(`/categories`, settings);
    return await fetchResponse.json();
}

getPositions = async () => {
    const settings = {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    };

    const fetchResponse = await fetch(`/positions`, settings);
    return await fetchResponse.json();
}

addCategory = async () => {
    let element = document.getElementById("addCategory-name");
    let dto = {
        name: element.value
    };

    const settings = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(dto)
    };

    await fetch(`/categories`, settings);
    showCategories();
}

addPosition = async () => {
    let element = document.getElementById("addPosition-name");
    let dto = {
        name: element.value
    };

    const settings = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(dto)
    };

    await fetch(`/positions`, settings);
    showPositions();
}

addEducation = async () => {
    let element = document.getElementById("addEducation-name");
    let cityElement = document.getElementById("addEducation-city-select");

    let dto = {
        name: element.value,
        cityId: cityElement.value
    };

    const settings = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(dto)
    };

    await fetch(`/educations`, settings);
    showEducations();
}

showAddEducation = async () => {
    showPage('addEducation');

    await getCities();

    let addEducationSelect = document.getElementById("addEducation-city-select");
    for (let city of cities) {
        let option = document.createElement("option");
        option.value = city.id;
        option.text = city.name;
        addEducationSelect.add(option);
    }

}

savePosition = async () => {
    let id = document.getElementById("editPosition-id").value;
    let name = document.getElementById("editPosition-name").value;

    const settings = {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            id: id,
            name: name
        })
    };

    await fetch(`/positions`, settings);
    showPositions();
}

saveEducation = async () => {
    let id = document.getElementById("editEducation-id").value;
    let name = document.getElementById("editEducation-name").value;
    let city = document.getElementById("editEducation-city-select").value;

    console.log(city);

    const settings = {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            id: id,
            name: name,
            cityId: city
        })
    };

    await fetch(`/educations`, settings);
    showEducations();
}

deletePosition = async (position) => {
    if (confirm('Вы уверены, что хотите удалить должность ' + position.name + '?')) {
        const settings = {
            method: 'DELETE',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        };

        await fetch(`/positions/` + position.id, settings);

        showPositions();
    }
}