import { HistoricFilterInput, HistoricInput } from 'src/entities/inputs';
import { IHistoric } from 'src/entities/interfaces';
import { HistoricsService } from 'src/services';
export declare class HistoricsResolver {
    private readonly historicsService;
    constructor(historicsService: HistoricsService);
    findHistorics(input: HistoricFilterInput): Promise<IHistoric[]>;
    findOneHistoric(input: HistoricFilterInput): Promise<IHistoric>;
    createHistoric(input: HistoricInput): Promise<IHistoric>;
}
