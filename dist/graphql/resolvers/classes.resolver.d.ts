import { ClassFilterInput, ClassInput } from 'src/entities/inputs';
import { IClass } from 'src/entities/interfaces';
import { ClassesService } from 'src/services';
export declare class ClassesResolver {
    private readonly studentsService;
    constructor(studentsService: ClassesService);
    findClasses(input: ClassFilterInput): Promise<IClass[]>;
    findOneClass(input: ClassFilterInput): Promise<IClass>;
    upsertClass(input: ClassInput): Promise<IClass>;
}
