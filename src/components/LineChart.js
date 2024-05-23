import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';

const LineChart = () => {
  const ref = useRef();
  const [timeRange, setTimeRange] = useState('month');
  const [dimensions, setDimensions] = useState({ width: 1000, height: 0 });

  useEffect(() => {
    const handleResize = () => {
      const width = ref.current.parentElement.offsetWidth;
      const height = ref.current.parentElement.offsetHeight;
      setDimensions({ width, height });
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const data = {
    month: [
      { date: new Date(2019, 6, 8), value: 68.25 },
      { date: new Date(2019, 6, 15), value: 67.03 },
      { date: new Date(2019, 6, 16), value: 42.25 },
      { date: new Date(2019, 6, 24), value: 57.25 },     
    ],
    quarter: [
      { date: new Date(2019, 4, 10), value: 53.02 },
      { date: new Date(2019, 4, 13), value: 65.32 },
      { date: new Date(2019, 5, 14), value: 80.95 },
      { date: new Date(2019, 6, 15), value: 67.03 },
      { date: new Date(2019, 6, 16), value: 42.25 },
      { date: new Date(2019, 7, 17), value: 86.18 },
    ],
    year: [
      { date: new Date(2019, 1, 6), value: 75.95 },
      { date: new Date(2019, 2, 7), value: 41.17 },
      { date: new Date(2019, 2, 8), value: 68.25 },
      { date: new Date(2019, 3, 9), value: 82.02 },
      { date: new Date(2019, 4, 10), value: 53.02 },
      { date: new Date(2019, 4, 13), value: 65.32 },
      { date: new Date(2019, 5, 14), value: 80.95 },
      { date: new Date(2019, 6, 15), value: 67.03 },
      { date: new Date(2019, 6, 16), value: 42.25 },
      { date: new Date(2019, 7, 17), value: 86.18 },
      { date: new Date(2019, 8, 20), value: 43.03 },
      { date: new Date(2019, 9, 21), value: 91.33 },
      { date: new Date(2019, 10, 22), value: 91.33 },
      { date: new Date(2019, 11, 23), value: 80.18 },
      { date: new Date(2019, 12, 24), value: 57.25 },
      { date: new Date(2020, 1, 23), value: 71.25 }
    ],
    allTime: [
      { date: new Date(2015, 6, 6), value: 75.95 },
      { date: new Date(2015, 6, 14), value: 80.95 },
      { date: new Date(2016, 6, 9), value: 82.02 },
      { date: new Date(2016, 6, 10), value: 53.02 },
      { date: new Date(2016, 6, 15), value: 67.03 },
      { date: new Date(2016, 6, 20), value: 43.03 },
      { date: new Date(2018, 6, 7), value: 41.17 },
      { date: new Date(2018, 6, 17), value: 86.18 },
      { date: new Date(2018, 6, 23), value: 80.18 },
      { date: new Date(2019, 1, 6), value: 75.95 },
      { date: new Date(2019, 2, 7), value: 41.17 },
      { date: new Date(2019, 2, 8), value: 68.25 },
      { date: new Date(2019, 3, 9), value: 82.02 },
      { date: new Date(2019, 4, 10), value: 53.02 },
      { date: new Date(2019, 4, 13), value: 65.32 },
      { date: new Date(2019, 5, 14), value: 80.95 },
      { date: new Date(2019, 6, 8), value: 68.25 },
      { date: new Date(2019, 6, 15), value: 67.03 },
      { date: new Date(2019, 6, 16), value: 42.25 },     
      { date: new Date(2019, 6, 24), value: 57.25 },
      { date: new Date(2019, 7, 17), value: 86.18 },
      { date: new Date(2019, 8, 20), value: 43.03 },
      { date: new Date(2019, 9, 21), value: 91.33 },
      { date: new Date(2019, 10, 22), value: 91.33 },
      { date: new Date(2019, 11, 23), value: 80.18 },
      { date: new Date(2019, 12, 24), value: 57.25 },
      { date: new Date(2020, 1, 23), value: 71.25 },    
      { date: new Date(2020, 6, 13), value: 65.32 },
      { date: new Date(2020, 6, 21), value: 91.33 },
      { date: new Date(2020, 6, 22), value: 91.33 },     
    ]
  };

  useEffect(() => {
    const svg = d3.select(ref.current);
    svg.selectAll('*').remove(); // Clear previous content

    const margin = { top: 50, right: 30, bottom: 30, left: 40 };
    const width = dimensions.width - margin.left - margin.right;
    const height = dimensions.height - margin.top - margin.bottom;

    const x = d3.scaleTime().range([0, width]);
    const y = d3.scaleLinear().range([height, 0]);

    const line = d3
      .line()
      .x(d => x(d.date))
      .y(d => y(d.value))
      .curve(d3.curveMonotoneX); // Smooth the line

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
      .attr('fill', '#FBB785')
      .attr('fill-opacity', 0.3) // Light opacity for the area fill
      .attr('d', area);

    g.append('path')
      .datum(selectedData)
      .attr('fill', 'none')
      .attr('stroke', '#F7700C')
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

    svg.append('text')
      .attr('x', dimensions.width / 2)
      .attr('y', margin.top)
      .attr('text-anchor', 'middle')
      .style('font-size', '25px')
      .style('font-weight', 'bold')
      .attr('fill', '#F7700C')
      .text('IBA'); // Text

    g.append('g')
      .attr('transform', `translate(0,${height})`)
      .call(d3.axisBottom(x).ticks(5));

    g.append('g').call(d3.axisLeft(y));
  }, [timeRange, dimensions]);

  return (
    <div>
      <div className='max-w-full'> 
        <svg ref={ref} width="700" height="400" className='pr-3'></svg>
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