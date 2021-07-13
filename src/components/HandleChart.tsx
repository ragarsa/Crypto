
import { Line } from 'react-chartjs-2';
import { Props } from "react-chartjs-2/dist/types";




export const HandleChart = (props: Props | any) => {
    const values:number[] = []
    const labels: number[] = []
    props.props.forEach((price:any, index:any) => {
        values.push(price.close)
        labels.push(index+1)
    })
    
    const data = {
        labels: labels,
        datasets: [
            {
                label: 'Cotización',
                data: values,
                fill: true,
                backgroundColor: 'rgba(100, 100, 200, 0.5)',
                borderColor: 'rgba(255, 99, 132, 0.2)',
            },
        ],
    };

    const options = {
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true,
                    },
                },
            ],
        },
    };

    return (
        <>
            <div className='header'>
                <h1 className='title'>Precios del día</h1>
                <div className='links'>
                </div>
            </div>
            <Line type="line" data={data} options={options} />
        </>)
}
