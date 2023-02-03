export type CreateStudentParams = {
    surname: string;
    name: string;
    number: string;
};

export type UpdateStudentParams = {
    surname: string;
    name: string;
    number: string;
};

export type CreateGroupParams = {
    id: number;
    title: string;
    graduationYear: string;
};

export type UpdateGroupParams = {
    id: number;
    title: string;
    graduationYear: string;
};