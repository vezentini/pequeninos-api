import { PhotoFilterInput, PhotoInput } from 'src/entities/inputs';
import { IPhoto } from 'src/entities/interfaces';
import { PhotosService } from 'src/services';
export declare class PhotosResolver {
    private readonly photosService;
    constructor(photosService: PhotosService);
    findPhotos(input: PhotoFilterInput): Promise<IPhoto[]>;
    findOnePhoto(input: PhotoFilterInput): Promise<IPhoto>;
    upsertPhoto(input: PhotoInput): Promise<IPhoto>;
}
