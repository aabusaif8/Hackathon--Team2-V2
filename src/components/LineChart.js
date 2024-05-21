import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';

const LineChart = () => {
  const ref = useRef();
  const [timeRange, setTimeRange] = useState('month');

  const data = {
    month: [
      { date: new Date(2023, 4, 1), value: 30 },
      { date: new Date(2023, 4, 8), value: 50 },
      { date: new Date(2023, 4, 15), value: 40 },
      { date: new Date(2023, 4, 22), value: 80 },
      { date: new Date(2023, 4, 29), value: 120 }
    ],
    quarter: [
      { date: new Date(2023, 2, 1), value: 20 },
      { date: new Date(2023, 3, 1), value: 40 },
      { date: new Date(2023, 4, 1), value: 30 },
      { date: new Date(2023, 4, 8), value: 50 },
      { date: new Date(2023, 4, 15), value: 40 },
      { date: new Date(2023, 4, 22), value: 80 },
      { date: new Date(2023, 4, 29), value: 120 }
    ],
    year: [
      { date: new Date(2022, 4, 1), value: 50 },
      { date: new Date(2022, 7, 1), value: 70 },
      { date: new Date(2022, 10, 1), value: 60 },
      { date: new Date(2023, 1, 1), value: 80 },
      { date: new Date(2023, 4, 1), value: 30 },
      { date: new Date(2023, 4, 8), value: 50 },
      { date: new Date(2023, 4, 15), value: 40 },
      { date: new Date(2023, 4, 22), value: 80 },
      { date: new Date(2023, 4, 29), value: 120 }
    ],
    allTime: [
      { date: new Date(2020, 4, 1), value: 10 },
      { date: new Date(2021, 4, 1), value: 30 },
      { date: new Date(2022, 4, 1), value: 50 },
      { date: new Date(2022, 7, 1), value: 70 },
      { date: new Date(2022, 10, 1), value: 60 },
      { date: new Date(2023, 1, 1), value: 80 },
      { date: new Date(2023, 4, 1), value: 30 },
      { date: new Date(2023, 4, 8), value: 50 },
      { date: new Date(2023, 4, 15), value: 40 },
      { date: new Date(2023, 4, 22), value: 80 },
      { date: new Date(2023, 4, 29), value: 120 }
    ]
  };

  useEffect(() => {
    const svg = d3.select(ref.current);
    svg.selectAll('*').remove(); // Clear previous content

    const margin = { top: 20, right: 30, bottom: 30, left: 40 };
    const width = 500 - margin.left - margin.right;
    const height = 300 - margin.top - margin.bottom;

    const x = d3.scaleTime().range([0, width]);
    const y = d3.scaleLinear().range([height, 0]);

    const line = d3
      .line()
      .x(d => x(d.date))
      .y(d => y(d.value))
      .curve(d3.curveMonotoneX); // Curves the line

    const area = d3
    .area()
    .x(d => x(d.date))
    .y0(height)
    .y1(d => y(d.value))
    .curve(d3.curveMonotoneX); // Smooth the area

    const g = svg
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    const selectedData = data[timeRange];

    x.domain(d3.extent(selectedData, d => d.date));
    y.domain([0, d3.max(selectedData, d => d.value)]);

    g.append('path')
      .datum(selectedData)
      .attr('fill', '#FBB785') // Area fill color
      .attr('d', area);

    g.append('path')
      .datum(selectedData)
      .attr('fill', 'none')
      .attr('stroke', '#F7700C') // Line color
      .attr('stroke-width', 4)
      .attr('d', line);

    g.selectAll('.dot')
      .data(selectedData)
      .enter()
      .append('circle')
      .attr('class', 'dot')
      .attr('cx', d => x(d.date))
      .attr('cy', d => y(d.value))
      .attr('r', 6)
      .attr('fill', '#F7700C'); // Dot color

    g.append('g')
      .attr('transform', `translate(0,${height})`)
      .call(d3.axisBottom(x).ticks(5));

    g.append('g').call(d3.axisLeft(y));
  }, [timeRange]);

  return (
    <div>
      <div className='className=sm:box-content h-auto bg-light-green mx-10 rounded-xl mt-5 pt-5 shadow-xl text-center mb-60'>
        <svg ref={ref} width="auto" height="300" className='pr-3'></svg>
        <div className='space-x-5 text-lg'>
          <button className={`btn ${timeRange === 'month' ? 'active' : ''}`} onClick={() => setTimeRange('month')}>
            Month
          </button>
          <button className={`btn ${timeRange === 'quarter' ? 'active' : ''}`} onClick={() => setTimeRange('quarter')}>
            Quarter
          </button>
          <button className={`btn ${timeRange === 'year' ? 'active' : ''}`} onClick={() => setTimeRange('year')}>
            Year
          </button>
          <button className={`btn ${timeRange === 'allTime' ? 'active' : ''}`} onClick={() => setTimeRange('allTime')}>
            All Time
          </button>
        </div>
      </div>     
    </div>
  );
};

export default LineChart;
