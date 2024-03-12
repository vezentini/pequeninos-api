import { SummaryFilterInput, SummaryInput } from 'src/entities/inputs';
import { ISummary } from 'src/entities/interfaces';
import { SummariesService } from 'src/services';
export declare class SummariesResolver {
    private readonly summariesService;
    constructor(summariesService: SummariesService);
    findSummarys(input: SummaryFilterInput): Promise<ISummary[]>;
    findOneSummary(input: SummaryFilterInput): Promise<ISummary>;
    upsertSummary(input: SummaryInput): Promise<ISummary>;
}
