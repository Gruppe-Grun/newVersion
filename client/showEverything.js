//get token from localstorage
const token = localStorage.getItem('token');

//get username from cookie
const username = document.cookie.split('=')[1];


//show all applications of the user by username and display it with a div and a table
document.addEventListener('DOMContentLoaded', async () => {
    const response = await fetch(`/application/${username}`, {
        headers: {
            Authorization: token,
        },
    });
    const applications = await response.json();
    const applicationDiv = document.getElementById('applicationDiv');
    applications.forEach((application) => {
        const applicationTable = document.createElement('table');
        applicationTable.classList.add('applicationTable');
        const applicationName = document.createElement('tr');
        const applicationLastName = document.createElement('tr');
        const applicationImage = document.createElement('tr');
        const applicationAdress = document.createElement('tr');
        const applicationCityandZip = document.createElement('tr');
        const applicationCountry = document.createElement('tr');
        const applicationfield = document.createElement('tr');
        const applicationClass = document.createElement('tr');
        const applicationYear = document.createElement('tr');
        const applicationCertificate = document.createElement('tr');
        const applicationGrade = document.createElement('tr');
        const applicationinternshipContract = document.createElement('tr');
        const applicationefzCopy = document.createElement('tr');
        const applicationParents = document.createElement('tr');
        const applicationParentsapplicationDate = document.createElement('tr');
        const applicationInternshipCompany = document.createElement('tr');
        const applicationResponsiblePerson = document.createElement('tr');
        const applicationStatus = document.createElement('tr');
        const applicationinterviewDate = document.createElement('tr');
        const applicationtrialVisitDate = document.createElement('tr');
        const applicationcontractCreationDate = document.createElement('tr');
        const applicationinternshipSalary1 = document.createElement('tr');
        const applicationinternshipSalary2 = document.createElement('tr');
        const applicationapprovalDate = document.createElement('tr');
        const applicationbirthDate = document.createElement('tr');
        const applicationahvNumber = document.createElement('tr');
        applicationName.innerHTML = `<td>Name: ${application.applicationName}</td>`;
        applicationLastName.innerHTML = `<td>Lastname: ${application.applicationLastName}</td>`;
        applicationImage.innerHTML = `<td>Image: ${application.applicationImage}</td>`;
        applicationAdress.innerHTML = `<td>Adress: ${application.applicationAdress}</td>`;
        applicationCityandZip.innerHTML = `<td>City and Zip: ${application.applicationCityandZip}</td>`;
        applicationCountry.innerHTML = `<td>Country: ${application.applicationCountry}</td>`;
        applicationfield.innerHTML = `<td>Field: ${application.applicationfield}</td>`;
        applicationClass.innerHTML = `<td>Class: ${application.applicationClass}</td>`;
        applicationYear.innerHTML = `<td>Year: ${application.applicationYear}</td>`;
        applicationCertificate.innerHTML = `<td>Certificate: ${application.applicationCertificate}</td>`;
        applicationGrade.innerHTML = `<td>Grade: ${application.applicationGrade}</td>`;
        applicationinternshipContract.innerHTML = `<td>Internship Contract: ${application.applicationinternshipContract}</td>`;
        applicationefzCopy.innerHTML = `<td>EFZ Copy: ${application.applicationefzCopy}</td>`;
        applicationParents.innerHTML = `<td>Parents: ${application.applicationParents}</td>`;
        applicationParentsapplicationDate.innerHTML = `<td>Parents Application Date: ${application.applicationParentsapplicationDate}</td>`;
        applicationInternshipCompany.innerHTML = `<td>Internship Company: ${application.applicationInternshipCompany}</td>`;
        applicationResponsiblePerson.innerHTML = `<td>Responsible Person: ${application.applicationResponsiblePerson}</td>`;
        applicationStatus.innerHTML = `<td>Status: ${application.applicationStatus}</td>`;
        applicationinterviewDate.innerHTML = `<td>Interview Date: ${application.applicationinterviewDate}</td>`;
        applicationtrialVisitDate.innerHTML = `<td>Trial Visit Date: ${application.applicationtrialVisitDate}</td>`;
        applicationcontractCreationDate.innerHTML = `<td>Contract Creation Date: ${application.applicationcontractCreationDate}</td>`;
        applicationinternshipSalary1.innerHTML = `<td>Internship Salary 1: ${application.applicationinternshipSalary1}</td>`;
        applicationinternshipSalary2.innerHTML = `<td>Internship Salary 2: ${application.applicationinternshipSalary2}</td>`;
        applicationapprovalDate.innerHTML = `<td>Approval Date: ${application.applicationapprovalDate}</td>`;
        applicationbirthDate.innerHTML = `<td>Birth Date: ${application.applicationbirthDate}</td>`;
        applicationahvNumber.innerHTML = `<td>AHV Number: ${application.applicationahvNumber}</td>`;
        applicationTable.append(applicationName);
        applicationTable.append(applicationLastName);
        applicationTable.append(applicationImage);
        applicationTable.append(applicationAdress);
        applicationTable.append(applicationCityandZip);
        applicationTable.append(applicationCountry);
        applicationTable.append(applicationfield);
        applicationTable.append(applicationClass);
        applicationTable.append(applicationYear);
        applicationTable.append(applicationCertificate);
        applicationTable.append(applicationGrade);
        applicationTable.append(applicationinternshipContract);
        applicationTable.append(applicationefzCopy);
        applicationTable.append(applicationParents);
        applicationTable.append(applicationParentsapplicationDate);
        applicationTable.append(applicationInternshipCompany);
        applicationTable.append(applicationResponsiblePerson);
        applicationTable.append(applicationStatus);
        applicationTable.append(applicationinterviewDate);
        applicationTable.append(applicationtrialVisitDate);
        applicationTable.append(applicationcontractCreationDate);
        applicationTable.append(applicationinternshipSalary1);
        applicationTable.append(applicationinternshipSalary2);
        applicationTable.append(applicationapprovalDate);
        applicationTable.append(applicationbirthDate);
        applicationTable.append(applicationahvNumber);
        applicationDiv.append(applicationTable);
    });
});
