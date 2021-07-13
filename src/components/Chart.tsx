import { useContext } from 'react'
import { ChartContext } from '../chart/ChartContext';
import { HandleChart } from './HandleChart';




export const Chart = () => {

    const chartState = useContext(ChartContext);

    const { data } = chartState
    const chart = data.data.map(elem => {
        return ({
            close: elem.close
        })

    })
    console.log(data.data)
    return (
        <>

            <h1>
                Gráfica
            </h1>

            {
                chart.length === 1
                    ?
                    <p> Selecciona una cryptomoneda</p>
                    : <HandleChart key={chart} props={chart} />

            }






        </>
    )
}
