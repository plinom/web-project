import ApexCharts from 'apexcharts'
import React, { useEffect } from 'react'

function mean(numbers) {
  const numericArray = numbers.map(Number).filter(num => !isNaN(num));
  const sum = numericArray.reduce((acc, val) => acc + val, 0);
  return sum / numericArray.length;
}

const Graphs = () => {
  useEffect(() => {
    const options = {
      chart: {
        height: '100%',
        maxWidth: '100%',
        type: 'area',
        fontFamily: 'Inter, sans-serif',
        dropShadow: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
      },
      tooltip: {
        enabled: true,
        x: {
          show: false,
        },
      },
      fill: {
        type: 'gradient',
        gradient: {
          opacityFrom: 0.55,
          opacityTo: 0,
          shade: '#1C64F2',
          gradientToColors: ['#1C64F2'],
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: 6,
      },
      grid: {
        show: false,
        strokeDashArray: 4,
        padding: {
          left: 2,
          right: 2,
          top: 0,
        },
      },
      series: [
        {
          name: 'Lifted weight',
          data: (localStorage.getItem('results')||"").split(','),
          color: '#1A56DB',
        },
      ],
      xaxis: {
        categories: [
          '6-th previous',
          '5-th previous',
          '4-th previous',
          '3-th previous',
          '2-th previous',
          'Last training',
          '',
        ],
        labels: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      yaxis: {
        show: false,
      },
    }

    if (document.getElementById('area-chart')) {
      const chart = new ApexCharts(
        document.getElementById('area-chart'),
        options
      )
      chart.render()
    }
    
  }, [])
  const color = (Number((localStorage.getItem('results')||"").split(',')[5])-Number((localStorage.getItem('results')||"").split(',')[4]))/Number((localStorage.getItem('results')||"").split(',')[4]) > 0 ? 'green': 'red'

  return (
    <div className='mx-20 max-w-full bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6'>
      <div className='flex justify-between'>
        <div>
          <h5 className='leading-none text-3xl font-bold text-gray-900 dark:text-white pb-2'>
            {
              mean((localStorage.getItem('results')||"").split(',')).toFixed(1)
            }

          </h5>
          <p className='text-base font-normal text-gray-500 dark:text-gray-400'>
            Avarage weight lifted per training
          </p>
        </div>
        <div className={`flex items-center px-2.5 py-0.5 text-base font-semibold text-${color}-500 dark:text-${color}-500 text-center`}>
          {
            ((Number((localStorage.getItem('results')||"").split(',')[5])-Number((localStorage.getItem('results')||"").split(',')[4]))/Number((localStorage.getItem('results')||"").split(',')[4])*100).toFixed(1).toString() + '%'
          }


        </div>
      </div>
      <div id='area-chart'></div>
      <div className='grid grid-cols-1 items-center border-gray-200 border-t dark:border-gray-700 justify-between'>
        <div className='flex justify-between items-center pt-5'>
          <div
            id='lastDaysdropdown'
            className='z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700'>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Graphs
