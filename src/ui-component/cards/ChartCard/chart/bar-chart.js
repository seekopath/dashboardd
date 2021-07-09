import value from '../../../../assets/scss/_themes-vars.module.scss';

const chartData = {
    height: 480,
    type: 'bar',
    options: {
        chart: {
            stacked: true,
            toolbar: {
                show: true
            },
            zoom: {
                enabled: true
            }
        },
        colors: [value['blue200'], value['blue500'], value['blue800'], value['deepPurple200'], value['deepPurple500'], value['deepPurple800']],
        responsive: [
            {
                breakpoint: 480,
                options: {
                    legend: {
                        position: 'bottom',
                        offsetX: -10,
                        offsetY: 0
                    }
                }
            }
        ],
        plotOptions: {
            bar: {
                horizontal: false
            }
        },
        xaxis: {
            type: 'string',
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
            labels: {
                style: {
                    colors: []
                }
            }
        },
        yaxis: {
            labels: {
                style: {
                    colors: []
                }
            }
        },
        legend: {
            show: true,
            fontSize: '14px',
            fontFamily: `'Roboto', sans-serif`,
            position: 'bottom',
            offsetX: 10,
            labels: {
                colors: value['grey500'],
                useSeriesColors: false
            },
            markers: {
                width: 16,
                height: 16,
                radius: 5
            },
            itemMargin: {
                horizontal: 15,
                vertical: 8
            }
        },
        fill: {
            type: 'solid'
        },
        dataLabels: {
            enabled: false
        },
        grid: {
            show: true
        }
    },
    series: [
        {
            name: 'Pedestrians',
            data: [32, 124, 32, 32, 32, 80, 32]
        },
        {
            name: 'Bikes',
            data: [32, 15, 15, 32, 64, 38, 78]
        },
        {
            name: 'Cars',
            data: [32, 145, 32, 32, 19, 102, 100]
        },
        {
            name: 'PM 2.5',
            data: [28, 22, 38, 54, 20, 61]
        },
        {
            name: 'CO2 /PPM',
            data: [221, 189, 232, 289, 119, 202, 290]
        },
        {
            name: 'Temperature',
            data: [7, 5, 8, 2, 4, 12]
        }
    ]
};
export default chartData;
