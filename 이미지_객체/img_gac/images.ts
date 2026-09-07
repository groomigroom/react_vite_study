import groomi1 from './imgs/20220911_094742.jpg';
import groomi2 from './imgs/20220911_173913.jpg';
import groomi3 from './imgs/20220911_173940.jpg';

export const IMAGES = {
    groomi1,
    groomi2,
    groomi3,
} as const;

export type ImageKeys = keyof typeof IMAGES;
