import React,{useState} from "react";
import { Bar,Line, Doughnut, Pie, PolarArea, } from 'react-chartjs-2';
import "./Charts.scss"

const Charts = () => {
    const data:any ={
                labels: ['January', 'February ', 'March ', 'April ', 'May ', 'June '],
                datasets: [{
                    label: 'Sport',
                    data: [12, 19, 3, 5, 2, 3],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                    },
                    {
                        label: 'Food',
                        data: [35,9,51,37,35,3,],
                        backgroundColor: [
                        'rgba(255, 99, 132, 0.4)',
                        'rgba(54, 162, 235, 0.4)',
                        'rgba(255, 206, 86, 0.4)',
                        'rgba(75, 192, 192, 0.4)',
                        'rgba(153, 102, 255, 0.4)',
                        'rgba(255, 159, 64, 0.4)'
                    ],
                        borderColor: ['rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                    }
                ],
                }
    const options: any = {
                maintainAspectRatio: false,
                scales: {
                    yAxes: [{
                        ticks:{
                            beginAtZero: true,
                        }
                    }]
                }
            }
    const Arr = [<Bar type="bar" data={data} options={options}/>,
                <Line type="line" data={data} options={options} />,
                <Doughnut type="doughnut" data={data} options={options} />,
                <Pie type="pie" data={data} options={options}/>,
                <PolarArea type="polarArea" data={data} options={options} />,];
    const [diagram, setDiagram] = useState(Arr[0]);

    return (
        <div className="BarCharts">
        <div className="Charts">
            {diagram}  
        </div>
        <div className="container-btn">
            <button  onClick={(()=>setDiagram(Arr[0]))}>Bar</button>
            <button  onClick={(()=>setDiagram(Arr[1]))}>Line</button>
            <button  onClick={(()=>setDiagram(Arr[2]))}>Doughnut</button>
            <button  onClick={(()=>setDiagram(Arr[3]))}>Pie</button>
            <button  onClick={(()=>setDiagram(Arr[4]))}>PolarArea</button>
        </div>
        </div>
        )
};

export default Charts;
