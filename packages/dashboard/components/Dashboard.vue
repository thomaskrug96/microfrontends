<template>
  <div>
    <h1>My Dashboard</h1>
    <p>Here's my dashboard using Vue.js and PrimeVue.</p>
    <div class="chart-container">
      <canvas ref="myChart"></canvas>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import PrimeVue from 'primevue/config';
import Chart from 'chart.js/auto';

export default {
  name: 'App',
  setup() {
    const myChart = ref(null);

    onMounted(() => {
      new Chart(myChart.value, {
        type: 'bar',
        data: {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
          datasets: [{
            label: 'My Dataset',
            data: [65, 59, 80, 81, 56, 55, 40],
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
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    });

    return {
      myChart
    };
  },
  directives: {
    'primevue/config': PrimeVue
  }
};
</script>

<style>
.chart-container {
  width: 100%;
  margin: 10px 0;
}
</style>
