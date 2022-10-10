// ===========================|| DASHBOARD - TOTAL GROWTH BAR CHART ||=========================== //

const TeacherAndStudentChart = {
    height: 480,
    type: 'area',
    options: {
        chart: {
            id: 'bar-chart',
            stacked: true,
            toolbar: {
                show: true
            },
            zoom: {
                enabled: true
            }
        },
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
                horizontal: true,
                columnWidth: '100%'
            }
        },
        xaxis: {
            type: 'category',
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        legend: {
            show: true,
            fontSize: '14px',
            fontFamily: `'Roboto', sans-serif`,
            position: 'bottom',
            offsetX: 20,
            labels: {
                useSeriesColors: false
            },
            markers: {
                width: 16,
                height: 16,
                radius: 3
            },
            itemMargin: {
                horizontal: 15,
                vertical: 8
            }
        },
        fill: {
            type: 'solid',
            gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.5,
                opacityTo: 0,
                stops: [0, 80, 100]
            }
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
            name: 'teachers',
            data: [11, 16, 26, 35, 101, 168, 178,189,99,72,63,10]
        },
        {
            name: 'students',
            data: [10, 20, 30, 40, 100, 160, 170,180,90,72,63,10]
        }
     
    ]
};
export default TeacherAndStudentChart;
