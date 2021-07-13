import { useEffect, useState, ReactNode } from 'react';
import HandleData from './handleData'
import axios from 'axios'
import { FetchData, InitialData } from '../interfaces/interfaceFetch';


const CurrencyData = (props: ReactNode) => {

    const [currencies, setCurrencies] = useState<FetchData[] | []>([]);


    useEffect(() => {
        const getData = async () => {


            const response = await axios.get("https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=MXN")
            const { Data } = response.data
            const res = Data.map(({ CoinInfo, DISPLAY }: InitialData) => (
                {
                    Id: CoinInfo?.Id,
                    Name: CoinInfo?.Name,
                    Price: DISPLAY?.MXN.PRICE,
                    FullName: CoinInfo?.FullName,
                    Image: CoinInfo?.ImageUrl
                }
            ))
            setCurrencies(res)
            
        };
        getData();
    }, [])


    return (
        <>
            <HandleData currencies={currencies} />

        </>
    )
}
export default CurrencyData;
