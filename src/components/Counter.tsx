import { useState } from 'react'

import { Button } from '@material-ui/core'
import CurrencyData from '../states/currencyState';


export const Counter = () => {

    const [money, setMoney] = useState(0)
    
    const addMoney = (num: number = 10): void => {
        setMoney(money + num)
    }

    return (
        <>
        
            <div>
                {/* <h3> Dinero inicial </h3>
                <span>Valor: ${money}</span> */}
                <CurrencyData/>
            </div>
            <div>
                {/* <Button
                    color="primary"
                    variant="contained"
                    onClick={() => addMoney(20)}
                >
                    Ingresar dinero
                </Button>

                <Button
                    color="secondary"
                    variant="contained"
                    onClick={() => addMoney(20)}
                >
                    Ingresar dinero
                </Button> */}
            </div>
            
        </>
    )

}
