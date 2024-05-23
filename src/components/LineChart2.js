import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';

const LineChart2 = () => {
  const ref = useRef();
  const [timeRange, setTimeRange] = useState('month');
  const [dimensions, setDimensions] = useState({ width: 0, height: 400 });

  useEffect(() => {
    const handleResize = () => {
      const width = ref.current.parentElement.offsetWidth;
      setDimensions({ width, height: dimensions.height });
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, [dimensions.height]);

  const data = {
    month: [
      { date: new Date(2019, 1, 19), value: 55.88 },
      { date: new Date(2019, 1, 27), value: 78.03 },
      { date: new Date(2019, 1, 28), value: 67.18 },    
    ],
    quarter: [
      { date: new Date(2019, 7, 8), value: 36.49 },
      { date: new Date(2019, 7, 9), value: 43.18 },
      { date: new Date(2019, 7, 10), value: 65.49 },
      { date: new Date(2019, 8, 11), value: 53.03 },
      { date: new Date(2019, 9, 12), value: 35.88 },
      { date: new Date(2019, 10, 15), value: 67.03 },
    ],
    year: [
      { date: new Date(2019, 1, 19), value: 55.88 },
      { date: new Date(2019, 1, 27), value: 78.03 },
      { date: new Date(2019, 1, 28), value: 67.18 },
      { date: new Date(2019, 2, 29), value: 61.33 },
      { date: new Date(2019, 3, 1), value: 65.87 },
      { date: new Date(2019, 4, 2), value: 39.03 },
      { date: new Date(2019, 4, 3), value: 46.49 },
      { date: new Date(2019, 5, 4), value: 47.72 },
      { date: new Date(2019, 6, 5), value: 68.18 },
      { date: new Date(2019, 7, 8), value: 36.49 },
      { date: new Date(2019, 7, 9), value: 43.18 },
      { date: new Date(2019, 7, 10), value: 65.49 },
      { date: new Date(2019, 8, 11), value: 53.03 },
      { date: new Date(2019, 9, 12), value: 35.88 },
      { date: new Date(2019, 10, 15), value: 67.03 },
      { date: new Date(2019, 11, 16), value: 34.03 },
      { date: new Date(2019, 12, 17), value: 33.34 },
      { date: new Date(2019, 12, 18), value: 43.03 }, 
    ],
    allTime: [
      { date: new Date(2019, 1, 19), value: 55.88 },
      { date: new Date(2019, 1, 27), value: 78.03 },
      { date: new Date(2019, 1, 28), value: 67.18 },
      { date: new Date(2019, 2, 29), value: 61.33 },
      { date: new Date(2019, 3, 1), value: 65.87 },
      { date: new Date(2019, 4, 2), value: 39.03 },
      { date: new Date(2019, 4, 3), value: 46.49 },
      { date: new Date(2019, 5, 4), value: 47.72 },
      { date: new Date(2019, 6, 5), value: 68.18 },
      { date: new Date(2019, 7, 8), value: 36.49 },
      { date: new Date(2019, 7, 9), value: 43.18 },
      { date: new Date(2019, 7, 10), value: 65.49 },
      { date: new Date(2019, 8, 11), value: 53.03 },
      { date: new Date(2019, 9, 12), value: 35.88 },
      { date: new Date(2019, 10, 15), value: 67.03 },
      { date: new Date(2019, 11, 16), value: 34.03 },
      { date: new Date(2019, 12, 17), value: 33.34 },
      { date: new Date(2019, 12, 18), value: 43.03 },     
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
      .text('TLA'); // Text

    g.append('g')
      .attr('transform', `translate(0,${height})`)
      .call(d3.axisBottom(x).ticks(5));

    g.append('g').call(d3.axisLeft(y));
  }, [timeRange, dimensions]);

  return (
    <div>
      <div className='className=sm:box-content h-auto bg-light-green mx-10 rounded-xl mt-5 pt-5 shadow-xl text-center mb-10 max-w-full'>
        <svg ref={ref} width="auto" height="400" className='pr-3'></svg>
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

export default LineChart2;