import React from 'react';
import { Chart as chartjs } from 'chart.js/auto';
import { Chart } from 'chart.js';
import * as ChartGeo from 'chartjs-chart-geo';

function MapChart() {
    
  fetch('https://unpkg.com/world-atlas/countries-50m.json').then(r => r.json()).then(data => {
    const countries = ChartGeo.topojson.feature(data, data.objects.countries).features;

    const chart = new Chart(document.getElementById("canvas").getContext("2d"), {
      type: 'choropleth',
      data: {
        labels: countries.map(d => d.properties.name),
        datasets: [{
          label: 'Countries',
          data: countries.map(d => ({ feature: d, value: Math.random() })) }] },
      options: {
        showOutline: true,
        showGraticule: true,
        plugins: {
          legend: {
            display: true } },


        scales: {
          xy: {
            projection: 'equalEarth' } } } });
  });

  return (
    <div>
      <canvas id="canvas"></canvas>
    </div>
  )
}

export default MapChart