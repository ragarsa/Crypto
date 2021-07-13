import { useReducer, Dispatch } from 'react';
import { createContext } from 'react';
import { ActionType, CryptoActions, Data } from '../interfaces/interfaceChart';
import ChartReduce from './ChartReduce';
import axios from 'axios';




const initialState: Data = {
    data: [{
        close: 0,
        conversionSymbol: '',
        conversionType: '',
        high: 0,
        low: 0,
        time: 0,
        volumeFrom: 0,
        volumeTo: 0
    }]
}


export const ChartContext = createContext<{ data: Data; dispatch: Dispatch<CryptoActions>, GetData: (name: any) => void }>({ data: initialState, dispatch: () => undefined, GetData: (name: any) => null });


export const ChartState = (props: any) => {
    const [data, dispatch] = useReducer(ChartReduce, initialState)

    const GetData = async (Name: any) => {


        const res = await axios.get(`https://min-api.cryptocompare.com/data/v2/histohour?fsym=${Name}&tsym=MXN&limit=10`);
        dispatch({ type: ActionType.GET_DATA, payload: res.data.Data.Data })


    }

    return (
        <ChartContext.Provider
            value={{ data, dispatch, GetData }}
        >
            {props.children}
        </ChartContext.Provider>
    )

}

