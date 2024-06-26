import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';

const LineChart3 = () => {
  const ref = useRef();
  const [timeRange, setTimeRange] = useState('month');
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

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
      { date: new Date(2019, 7, 8), value: 37.56 },
      { date: new Date(2019, 7, 9), value: 44.21 },
      { date: new Date(2019, 7, 10), value: 64.35 },    
    ],
    quarter: [
      { date: new Date(2019, 4, 2), value: 38.29 },
      { date: new Date(2019, 4, 3), value: 47.36 },
      { date: new Date(2019, 5, 4), value: 48.65 },
      { date: new Date(2019, 6, 5), value: 69.23 },
      { date: new Date(2019, 7, 8), value: 37.56 },
      { date: new Date(2019, 7, 9), value: 44.21 },
      { date: new Date(2019, 7, 10), value: 64.35 },
    ],
    year: [
      { date: new Date(2019, 1, 19), value: 56.97 },
      { date: new Date(2019, 1, 27), value: 79.12 },
      { date: new Date(2019, 1, 28), value: 68.24 },
      { date: new Date(2019, 2, 29), value: 60.45 },
      { date: new Date(2019, 3, 1), value: 66.78 },
      { date: new Date(2019, 4, 2), value: 38.29 },
      { date: new Date(2019, 4, 3), value: 47.36 },
      { date: new Date(2019, 5, 4), value: 48.65 },
      { date: new Date(2019, 6, 5), value: 69.23 },
      { date: new Date(2019, 7, 8), value: 37.56 },
      { date: new Date(2019, 7, 9), value: 44.21 },
      { date: new Date(2019, 7, 10), value: 64.35 },
      { date: new Date(2019, 8, 11), value: 54.11 },
      { date: new Date(2019, 9, 12), value: 36.77 },
      { date: new Date(2019, 10, 15), value: 66.12 },
      { date: new Date(2019, 11, 16), value: 35.14 },
      { date: new Date(2019, 12, 17), value: 32.45 },
      { date: new Date(2019, 12, 18), value: 44.15 },
    ],
    allTime: [
      { date: new Date(2019, 1, 19), value: 56.97 },
      { date: new Date(2019, 1, 27), value: 79.12 },
      { date: new Date(2019, 1, 28), value: 68.24 },
      { date: new Date(2019, 2, 29), value: 60.45 },
      { date: new Date(2019, 3, 1), value: 66.78 },
      { date: new Date(2019, 4, 2), value: 38.29 },
      { date: new Date(2019, 4, 3), value: 47.36 },
      { date: new Date(2019, 5, 4), value: 48.65 },
      { date: new Date(2019, 6, 5), value: 69.23 },
      { date: new Date(2019, 7, 8), value: 37.56 },
      { date: new Date(2019, 7, 9), value: 44.21 },
      { date: new Date(2019, 7, 10), value: 64.35 },
      { date: new Date(2019, 8, 11), value: 54.11 },
      { date: new Date(2019, 9, 12), value: 36.77 },
      { date: new Date(2019, 10, 15), value: 66.12 },
      { date: new Date(2019, 11, 16), value: 35.14 },
      { date: new Date(2019, 12, 17), value: 32.45 },
      { date: new Date(2019, 12, 18), value: 44.15 },     
    ]
  };

  useEffect(() => {
    if (dimensions.width === 0 || dimensions.height === 0) return;

    const svg = d3.select(ref.current);
    svg.selectAll('*').remove(); // Clear previous content

    const margin = { top: 20, right: 30, bottom: 30, left: 40 };
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
      .attr('y', margin.top / .9)
      .attr('text-anchor', 'middle')
      .style('font-size', '15px')
      .style('font-weight', 'bold')
      .attr('fill', '#F7700C')
      .text('APL'); // Text

    g.append('g')
      .attr('transform', `translate(0,${height})`)
      .call(d3.axisBottom(x).ticks(5));

    g.append('g').call(d3.axisLeft(y));
  }, [timeRange, dimensions]);

  return (
    <div className='w-[100%]'>
      <svg ref={ref} width="100%" height="100%" className='pr-3'></svg>
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
  );
};

export default LineChart3;