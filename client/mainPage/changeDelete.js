//get token form local storage

const token = localStorage.getItem('token');

//if token is not present, redirect to login page
if (!token) {
    window.location.href = '/index.html';
    }
    document.addEventListener('DOMContentLoaded', async () => {
        const applicationForm = document.getElementById('application-form-Change');
        applicationForm.addEventListener('submit', async (e) => {
          e.preventDefault();


          const applicationName = document.getElementById('firstName').value;
          const applicationLastName = document.getElementById('lastName').value;
          const applicationImage = document.getElementById('applicantImage').value;
          const applicationAdress = document.getElementById('address').value;
          const applicationCityandZip = document.getElementById('cityAndZip').value;
          const applicationCountry = document.getElementById('country').value;
          const applicationfield = document.getElementById('field').value;
          const applicationClass = document.getElementById('class').value;
          const applicationYear = document.getElementById('qvYear').value;
          const applicationCertificate = document.getElementById('certificate').value;
          const applicationGrade = document.getElementById('noteQV').value;
          const applicationinternshipContract = document.getElementById('internshipContract').value;
          const applicationefzCopy = document.getElementById('efzCopy').value;
          const applicationParents = document.getElementById('firstNameP').value;
          const applicationParentsapplicationDate = document.getElementById('applicationDateP').value;
          const applicationInternshipCompany = document.getElementById('internshipCompany').value;
          const applicationResponsiblePerson = document.getElementById('responsiblePerson').value;
          const applicationStatus = document.getElementById('applicationStatus').value;
          const applicationinterviewDate = document.getElementById('interviewDate').value;
          const applicationtrialVisitDate = document.getElementById('trialVisitDate').value;
          const applicationcontractCreationDate = document.getElementById('contractCreationDate').value;
          const applicationinternshipSalary1 = document.getElementById('internshipSalary1').value;
          const applicationinternshipSalary2 = document.getElementById('internshipSalary2').value;
          const applicationapprovalDate = document.getElementById('mbaApprovalDate').value;
          const applicationbirthDate = document.getElementById('birthDate').value;
          const applicationahvNumber = document.getElementById('ahvNumber').value;

const application = await fetch('/application:id', {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json',
        Authorization: token,
    },
    body: JSON.stringify({
        applicationName,
        applicationLastName,
        applicationImage,
        applicationAdress,
        applicationCityandZip,
        applicationCountry,
        applicationfield,
        applicationClass,
        applicationYear,
        applicationCertificate,
        applicationGrade,
        applicationinternshipContract,
        applicationefzCopy,
        applicationParents,
        applicationParentsapplicationDate,
        applicationInternshipCompany,
        applicationResponsiblePerson,
        applicationStatus,
        applicationinterviewDate,
        applicationtrialVisitDate,
        applicationcontractCreationDate,
        applicationinternshipSalary1,
        applicationinternshipSalary2,
        applicationapprovalDate,
        applicationbirthDate,
        applicationahvNumber,
    }),
});
if (application.ok) {
    window.location.href = '/mainPage/index.html';
}
else {
    alert('Error updating application');
}
});
});

const username = document.cookie.split('=')[1];

document.addEventListener('DOMContentLoaded', () => {
    const deleteForm = document.getElementById('deleteForm');
    deleteForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const response = await fetch(`/article/delete/${username}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: token,
        },
      });
      if (response.ok) {
        window.location.href = '/mainPage/index.html';
        console.warn('Article deleted');
      } else {
        alert('Error deleting article');
      }
    });
  });

