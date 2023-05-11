const USER_TABLE = `
CREATE TABLE IF NOT EXISTS users (
    StudentID int(11) NOT NULL AUTO_INCREMENT,
    Username varchar(64) NOT NULL,
    Password varchar(64) NOT NULL,
    Role varchar(64),
    Name varchar(64),
    Surname varchar(64),
    Street varchar(64),
    HouseNR varchar(64),
    PLZ varchar(64),
    City varchar(64),
    AHV_NR varchar(64),
    EducatorID int(11),
    DateOfBirth date,
    Class varchar(12),
    YearQP varchar(24),
    GradesQP varchar(24),
    Mail varchar(250),
    Tel varchar(64),
    PRIMARY KEY (StudentID),
    KEY fk_Student_Educator (EducatorID),
    CONSTRAINT fk_Student_Educator FOREIGN KEY (EducatorID) REFERENCES educators (EducatorID)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
`
const DB1 = `
CREATE TABLE IF NOT EXISTS educators (
    EducatorID int(11) NOT NULL AUTO_INCREMENT,
    EducatorName varchar(64) NOT NULL,
    EducatorSurname varchar(64) NOT NULL,
    EducatorDateOfBirth date NOT NULL,
    EducatorMail varchar(250) NOT NULL,
    EducatorTel varchar(64) NOT NULL,
    PRIMARY KEY (EducatorID)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
`
const DB2 = `
CREATE TABLE IF NOT EXISTS responsiblepersons (
    ResponsiblePersonID int(11) NOT NULL AUTO_INCREMENT,
    Name varchar(64) NOT NULL,
    Surname varchar(64) NOT NULL,
    DateOfBirth date NOT NULL,
    Mail varchar(250) NOT NULL,
    Tel varchar(64) NOT NULL,
    PRIMARY KEY (ResponsiblePersonID)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
`
const DB3 = `
CREATE TABLE IF NOT EXISTS companys (
    CompanyID int(11) NOT NULL AUTO_INCREMENT,
    CompanyName varchar(64) NOT NULL,
    Street varchar(64) NOT NULL,
    HouseNR varchar(64) NOT NULL,
    PLZ varchar(64) NOT NULL,
    City varchar(64) NOT NULL,
    ResponsiblePersonID int(11) NOT NULL,
    CooperationAgreement blob DEFAULT NULL,
    PRIMARY KEY (CompanyID),
    KEY fk_Company_ResponsiblePerson (ResponsiblePersonID),
    CONSTRAINT fk_Company_ResponsiblePerson FOREIGN KEY (ResponsiblePersonID) REFERENCES responsiblepersons (ResponsiblePersonID)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE=utf8mb4_general_ci;
`
const DB4 = `
CREATE TABLE IF NOT EXISTS applications ( 
    ApplicationID int(11) NOT NULL AUTO_INCREMENT,
    ApplicationStatus tinyint(1) NOT NULL,
    StudentID int(11) NOT NULL,
    CompanyID int(11) NOT NULL,
    ApplicationDate date NOT NULL,
    InterviewDate date DEFAULT NULL,
    TrialVisitDate date DEFAULT NULL,
    StudentImage blob DEFAULT NULL,
    Discipline varchar(64) NOT NULL,
    IntershipContract blob DEFAULT NULL,
    CopyEFZfile blob DEFAULT NULL,
    ContractSigningDate date DEFAULT NULL,
    Salary_1_Year varchar(24) DEFAULT NULL,
    Salary_2_Year varchar(24) DEFAULT NULL,
    MBA_Permission date DEFAULT NULL,
    PRIMARY KEY (ApplicationID),
    KEY fk_Application_Company (CompanyID),
    KEY fk_Application_Student (StudentID),
    CONSTRAINT fk_Application_Company FOREIGN KEY (CompanyID) REFERENCES companys (CompanyID),
    CONSTRAINT fk_Application_Student FOREIGN KEY (StudentID) REFERENCES users (StudentID)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
`

export { USER_TABLE, DB1, DB2, DB3, DB4}
