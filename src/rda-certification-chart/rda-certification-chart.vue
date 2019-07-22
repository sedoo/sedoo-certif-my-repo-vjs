<template>
<div>
  <h1>{{projectName}}</h1>
  <p>
  <vue-chart type="radar" :data="chartData" :options="chartOptions" ></vue-chart>
  </p>
  </div>
</template>
 
<script>
export default {

  
  data() {
    return {
      projectName: 'Mon Projet',
      chartData: {
        labels: ['R1', 'R2','R3', 'R4', 'R5', 'R6','R7', 'R8','R9', 'R10', 'R11', 'R12', 'R13', 'R14', 'R15', 'R16'],
    	datasets: [{
        	data: [0, 1, 4, 2,2, 1, 4, 2]
    	}]
    	},
    chartOptions : {
    		onClick: alert("toto"),
			maintainAspectRatio: true,
			 scale: {
        		ticks: {
		            beginAtZero: true,
		            max: 4,
		            stepSize: 1
        		}
    		}
			
	    }
    }
  },
  methods: {
    
    
    
  } // methods
} // default
</script>