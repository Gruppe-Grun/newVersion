const USER_TABLE = ` CREATE TABLE IF NOT EXISTS users ( 
    StudentID int(11) NOT NULL AUTO_INCREMENT,
    Username varchar(64) NOT NULL,
    Password varchar(64) NOT NULL,
    Role varchar(64),
    PRIMARY KEY (StudentID)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
`


const APPLICATION_TABLE = `
CREATE TABLE IF NOT EXISTS applications ( 
    ApplicationID int(11) NOT NULL AUTO_INCREMENT,
    StudentID int(11) NOT NULL,
    Name varchar(64),
    Surname varchar(64),
    Street_HouseNR varchar(64,
    PLZ_City varchar(64),
    Country varchar(64),
    AHV_NR varchar(64),
    Educator varchar(64),
    DateOfBirth date,
    Class varchar(12),
    YearQP varchar(24),
    GradesQP varchar(24),
    ApplicationStatus varchar(64)) NOT NULL,
    Company varchar(64) NOT NULL,
    ResponsiblePerson varchar(64) NOT NULL,
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
    KEY fk_Application_Student (StudentID),
    CONSTRAINT fk_Application_Student FOREIGN KEY (StudentID) REFERENCES users (StudentID)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
`

export { USER_TABLE, APPLICATION_TABLE}
