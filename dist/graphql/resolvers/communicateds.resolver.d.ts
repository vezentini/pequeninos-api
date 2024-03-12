import { CommunicatedFilterInput, CommunicatedInput } from 'src/entities/inputs';
import { ICommunicated } from 'src/entities/interfaces';
import { CommunicatedsService } from 'src/services';
export declare class CommunicatedsResolver {
    private readonly communicatedsService;
    constructor(communicatedsService: CommunicatedsService);
    findCommunicateds(input: CommunicatedFilterInput): Promise<ICommunicated[]>;
    findOneCommunicated(input: CommunicatedFilterInput): Promise<ICommunicated>;
    upsertCommunicated(input: CommunicatedInput): Promise<ICommunicated>;
}
