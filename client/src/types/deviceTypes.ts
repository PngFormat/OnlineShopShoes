import * as console from "console";

export interface IType{
    id?: number;
    name?: string;
}

export interface IBrand{
    id?: number;
    name?: string;
}

export interface IDevice{
    img?: string;
    id?: number;
    name?: string;
    price?: number;
    rating?: number;
    info?: any[];

}

export interface ISupplier {
    name: string,
    surname: string,
    items: {
        title: string,
        price: number | string
    }
}

export interface IInfo{
    title: string;
    description: string;
    number: number;
}

export interface IPagi{
    rows: number[];
    count: number[];
}