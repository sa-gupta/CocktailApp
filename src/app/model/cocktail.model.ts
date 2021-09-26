export interface Cocktail {
    id: string;
    name: string;
    category: string;
    instruction: string;
    imgUrl: string;
    alcoholic: string;
    glass: string;
    ingredients: Array<string>;
}
