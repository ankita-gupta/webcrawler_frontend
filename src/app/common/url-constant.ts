import { environment } from '../../environments/environment';

let URL = environment.apiUrl;

export const URLS = {
    SCRAPDATA : URL + '/api/v1/scrapdata/'
}