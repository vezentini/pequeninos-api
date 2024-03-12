import { StudentFilterInput, StudentInput } from 'src/entities/inputs';
import { IStudent } from 'src/entities/interfaces';
import { StudentsService } from 'src/services';
export declare class StudentsResolver {
    private readonly studentsService;
    constructor(studentsService: StudentsService);
    findStudents(input: StudentFilterInput): Promise<IStudent[]>;
    findOneStudent(input: StudentFilterInput): Promise<IStudent>;
    upsertStudent(input: StudentInput): Promise<IStudent>;
}
