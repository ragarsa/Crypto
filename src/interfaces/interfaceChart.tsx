

export interface DataCrypto {
    close: number;
    conversionSymbol: string;
    conversionType: string;
    high: number;
    low: number;
    time: number;
    volumeFrom: number;
    volumeTo: number
}

export interface Data {
    data: DataCrypto[]
}

export enum ActionType {
    GET_DATA = 'GET_DATA', 
    CALL_NAME = 'CALL_NAME'
}


interface GetData {
    type: ActionType.GET_DATA, 
    payload: Data[]
}

interface CallName {
    type: ActionType.CALL_NAME, 
    payload: Data[]
}

export type CryptoActions  = GetData | CallName

