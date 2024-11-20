import { Constants } from '@/src/Constants/Constants';

export const getImageUrl = (path: string, high?: boolean) =>
    `${
        high
            ? Constants.IMAGE_URL_HIGH_RESOLUTION
            : Constants.IMAGE_URL_MIN_SOLUTION
    }${path}`;
