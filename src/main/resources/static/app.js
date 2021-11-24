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

    getEmployees().then(employees => {
        drawEmployees(employees);
    })
}

drawEmployees = (employees) => {
    let elements = document.querySelectorAll(".employee-row");
    elements.forEach(element => {
        element.parentNode.removeChild(element);
    });

    let employeesTable = document.getElementById("tbody-employees");
    employees.forEach((employee, index) => {
        let row = employeesTable.insertRow(index);
        row.className = "employee-row";

        let cell = row.insertCell(0);
        let text = document.createTextNode(employee.id);
        cell.appendChild(text);

        cell = row.insertCell(1);
        text = document.createTextNode(employee.lastName);
        cell.appendChild(text);

        cell = row.insertCell(2);
        text = document.createTextNode(employee.firstName);
        cell.appendChild(text);

        cell = row.insertCell(3);
        text = document.createTextNode(employee.middleName);
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

addEmployee = () => {
    let lastName = document.getElementById("addEmployee-lastName").value;
    let firstName = document.getElementById("addEmployee-firstName").value;
    let middleName = document.getElementById("addEmployee-middleName").value;
    let dateOfBirth = document.getElementById("addEmployee-dateOfBirth").value;
    let category = document.getElementById("addEmployee-category-select").value;
    let education = document.getElementById("addEmployee-education-select").value;
    let position = document.getElementById("addEmployee-position-select").value;

    const dto = {
        lastName: lastName,
        firstName: firstName,
        middleName: middleName,
        dateOfBirth: dateOfBirth,
        categoryId: category,
        educationId: education,
        positionId: position,
    }

    const settings = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(dto)
    };

    fetch(`/employees`, settings).then(() => {
        showEmployees();
    });
}

showAddEmployee = async () => {
    showPage('addEmployee');

    let categorySelect = document.getElementById("addEmployee-category-select");
    getCategories().then(categories => {
        for (let i = 0; i < categories.length; i++) {
            categorySelect.remove(0);
        }

        for (let category of categories) {
            let option = document.createElement("option");
            option.value = category.id;
            option.text = category.name;
            categorySelect.add(option);
        }
    })

    let educationSelect = document.getElementById("addEmployee-education-select");
    getEducations().then(educations => {
        for (let i = 0; i < educations.length; i++) {
            educationSelect.remove(0);
        }

        for (let education of educations) {
            let option = document.createElement("option");
            option.value = education.id;
            option.text = education.name;
            educationSelect.add(option);
        }
    })

    let positionSelect = document.getElementById("addEmployee-position-select");
    getPositions().then(positions => {
        for (let i = 0; i < positions.length; i++) {
            positionSelect.remove(0);
        }

        for (let position of positions) {
            let option = document.createElement("option");
            option.value = position.id;
            option.text = position.name;
            positionSelect.add(option);
        }
    })
}

deleteEmployee = (employee) => {
    if (confirm('Вы уверены, что хотите удалить сотрудника ' + employee.firstName + ' ' + employee.lastName)) {

    }
}

editEmployee = (employee) => {
    document.title = 'Поликлиника - Сотрудники - ' + employee.firstName + ' ' + employee.lastName;

    document.getElementById("editEmployee-id").value = employee.id;
    document.getElementById("editEmployee-lastName").value = employee.lastName;
    document.getElementById("editEmployee-firstName").value = employee.firstName;
    document.getElementById("editEmployee-middleName").value = employee.middleName;
    document.getElementById("editEmployee-dateOfBirth").value = employee.dateOfBirth;

    let categorySelect = document.getElementById("editEmployee-category-select");
    getCategories().then(categories => {
        for (let i = 0; i < categories.length; i++) {
            categorySelect.remove(0);
        }

        for (let category of categories) {
            let option = document.createElement("option");
            option.value = category.id;
            option.text = category.name;

            if (category.id === employee.category.id) {
                option.selected = true;
            }

            categorySelect.add(option);
        }
    })

    let educationSelect = document.getElementById("editEmployee-education-select");
    getEducations().then(educations => {
        for (let i = 0; i < educations.length; i++) {
            educationSelect.remove(0);
        }

        for (let education of educations) {
            let option = document.createElement("option");
            option.value = education.id;
            option.text = education.name;

            if (education.id === employee.education.id) {
                option.selected = true;
            }

            educationSelect.add(option);
        }
    })

    let positionSelect = document.getElementById("editEmployee-position-select");
    getPositions().then(positions => {
        for (let i = 0; i < positions.length; i++) {
            positionSelect.remove(0);
        }

        for (let position of positions) {
            let option = document.createElement("option");
            option.value = position.id;
            option.text = position.name;

            if (position.id === employee.position.id) {
                option.selected = true;
            }

            positionSelect.add(option);
        }
    })

    showPage("editEmployee");
}

saveEmployee = () => {
    let id = document.getElementById("editEmployee-id").value;
    let lastName = document.getElementById("editEmployee-lastName").value;
    let firstName = document.getElementById("editEmployee-firstName").value;
    let middleName = document.getElementById("editEmployee-middleName").value;
    let dateOfBirth = document.getElementById("editEmployee-dateOfBirth").value;
    let position = document.getElementById("editEmployee-position-select").value;
    let education = document.getElementById("editEmployee-education-select").value;
    let category = document.getElementById("editEmployee-category-select").value;

    const dto = {
        id: id,
        lastName: lastName,
        firstName: firstName,
        middleName: middleName,
        dateOfBirth: dateOfBirth,
        categoryId: category,
        educationId: education,
        positionId: position,
    }

    const settings = {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(dto)
    };

    fetch(`/employees`, settings).then(() => {
        showEmployees();
    });
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

    let editEducationSelect = document.getElementById("editEducation-city-select");
    getCities().then(cities => {
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
    });
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

getEmployees = async () => {
    const settings = {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    };

    const fetchResponse = await fetch(`/employees`, settings);
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

searchEmployeeByLastName = async () => {
    let lastName = document.getElementById("searchEmployee-lastName").value;
    if (lastName === '') {
        return;
    }

    document.getElementById("searchEmployee-lastName").value = null;

    const settings = {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    };

    let fetchResponse = await fetch('/employees/search?lastName=' + lastName, settings);

    await fetchResponse.json().then(employees => {
        drawEmployees(employees);
    });
}


showSalary = () => {
    document.title = 'Поликлиника - Зарплаты';
    showPage("salary");

    showAllSalary();

    let employeesSelect = document.getElementById("salary-employee-select");
    getEmployees().then(employees => {
        for (let i = 0; i < employees.length; i++) {
            employeesSelect.remove(0);
        }

        for (let employee of employees) {
            let option = document.createElement("option");
            option.value = employee.id;
            option.text = employee.lastName + ' ' + employee.firstName;
            employeesSelect.add(option);
        }
    })
}

showAllSalary = async () => {
    const settings = {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    };

    let fetchResponse = await fetch('/salary', settings);

    await fetchResponse.json().then(salaries => {
        drawSalary(salaries);
    });
}

searchEmployeeSalary = async () => {
    let employeeId = document.getElementById("salary-employee-select").value;

    console.log(employeeId);

    const settings = {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    };

    let fetchResponse = await fetch('/salary/employee/' + employeeId, settings);

    await fetchResponse.json().then(salaries => {
        drawSalary(salaries);
    });
}

drawSalary = (salaries) => {
    showPage('salary');

    let elements = document.querySelectorAll(".salary-row");
    if (elements) {
        elements.forEach(element => {
            element.parentNode.removeChild(element);
        });
    }

    let salariesTable = document.getElementById("tbody-salaries");
    salaries.forEach((salary, index) => {
        let row = salariesTable.insertRow(index);
        row.className = "salary-row";

        let cell = row.insertCell(0);
        let text = document.createTextNode(index + 1);
        cell.appendChild(text);

        cell = row.insertCell(1);
        text = document.createTextNode(salary.employee.lastName);
        cell.appendChild(text);

        cell = row.insertCell(2);
        text = document.createTextNode(salary.employee.firstName);
        cell.appendChild(text);

        cell = row.insertCell(3);
        text = document.createTextNode(salary.date);
        cell.appendChild(text);

        cell = row.insertCell(4);
        text = document.createTextNode(salary.amount);
        cell.appendChild(text);
    })
}

showAddSalary = () => {
    showPage('addSalary');
    let employeesSelect = document.getElementById("addSalary-employee-select");
    getEmployees().then(employees => {

        console.log(employees);
        for (let i = 0; i < employees.length; i++) {
            employeesSelect.remove(0);
        }

        for (let employee of employees) {
            let option = document.createElement("option");
            option.value = employee.id;
            option.text = employee.lastName + ' ' + employee.firstName;
            employeesSelect.add(option);
        }
    });
}

addSalary = async () => {
    let employeeId = document.getElementById("addSalary-employee-select").value;
    let amount = document.getElementById("addSalary-amount").value;

    const dto = {
        employee: employeeId,
        amount: amount,
    }

    const settings = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(dto)
    };

    let fetchResponse = await fetch('/salary', settings);

    await fetchResponse.json().then(() => {
        showAllSalary();
    });
}