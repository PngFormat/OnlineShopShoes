import { IBrand, IDevice, IType } from "../types/deviceTypes";
import {$authHost, $host} from "./index";

export const createType = async (type: IType) => {
    const {data} = await $authHost.post('api/type', type)
    return data
}

export const fetchTypes = async () => {
    const {data} = await $host.get('api/type')
    return data
}

export const createBrand = async (brand: IBrand) => {
    const {data} = await $authHost.post('api/brand', brand)
    return data
}

export const fetchBrands = async () => {
    const {data} = await $host.get('api/brand', )
    return data
}



export const createDevice = async (device: IDevice | object) => {
    const {data} = await $authHost.post('api/device', device)
    return data
}

export const fetchDevices = async ( page?: number, limit: number = 5) => {
    const {data} = await $host.get('api/device', {params: {
        page, limit
        }})
    return data
}

export const fetchOneDevice = async (id: number) => {
    const {data} = await $host.get('api/device/' + id)
    return data
}

export const getSuppliers = async () => {
    const {data} = await $host.get('api/supplier');
    return data;
}

export const createSupplier = async (name: string, surname: string) => {
    const {data} = await $host.post('api/supplier', {name, surname})
    return data;
}
