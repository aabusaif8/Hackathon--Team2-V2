import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const PieChart = () => {
  const ref = useRef();

  useEffect(() => {
    // Example data
    const data = [
      { label: 'A', value: 30 },
      { label: 'B', value: 20 },
      { label: 'C', value: 50 },
    ];

    // Set up dimensions and radius
    const width = 200;
    const height = 400;
    const outerRadius = Math.min(width, height) / 2;
    const innerRadius = outerRadius * 0.7; // Adjust this to make the lines thinner

    // Create a color scale
    const color = d3.scaleOrdinal(d3.schemeCategory10);

    // Create a pie generator
    const pie = d3.pie().value(d => d.value);

    // Create an arc generator with an adjusted inner radius
    const arc = d3.arc().innerRadius(innerRadius).outerRadius(outerRadius);

    // Clear the previous rendering
    d3.select(ref.current).select('svg').remove();

    // Create the SVG container
    const svg = d3
      .select(ref.current)
      .append('svg')
      .attr('width', width)
      .attr('height', height)
      .append('g')
      .attr('transform', `translate(${width / 2},${height / 2})`);

    // Create the pie chart
    const arcs = svg
      .selectAll('arc')
      .data(pie(data))
      .enter()
      .append('g')
      .attr('class', 'arc');

    // Append the path (the pie segments)
    arcs
      .append('path')
      .attr('d', arc)
      .attr('fill', d => color(d.data.label));

    // Append the text labels
    arcs
      .append('text')
      .attr('transform', d => `translate(${arc.centroid(d)})`)
      .attr('text-anchor', 'middle')
      .text(d => d.data.label);
  }, []);

  return <div ref={ref}></div>;
};

export default PieChart;