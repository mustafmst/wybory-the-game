<template>
    <div class="canvas-container">
        <canvas id="cardchart" class="card-canvas" ref="cardChart" width=80 height=80 title="Card data" ></canvas>
    </div>
</template>

<script>
import { Chart } from "chart.js";

export default {
    name: "CardImage",
    props: {
        chartData: {
            type: Object,
            default: () => {}
        }
    },
    data: function() {
        return {
            chart: null
        };
    },
    methods: {
        drawChart() {
            const ctx = this.$refs.cardChart;
            const options = {
                type: "radar",
                data: this.chartData,
                options: {
                    pointStyle: "circle",
                    borderWidth: 1,
                    fill: true,
                    scale: {
                        labels: {
                            color: "#000000"
                        },
                        display: true,
                        pointLabels: {
                            fontSize: 13,
                            fontColor: "#000000"
                        },
                        gridLines: {
                            color: "#000000",
                            lineWidth: 1
                        },
                        angleLines: {
                            color: "#000000",
                            lineWidth: 1
                        },
                        ticks: {
                            fontColor: "#000000"
                        }

                    },
                    legend: {
                        display: false
                    }
                }
            };
            this.chart = new Chart(ctx, options);
        }
    },
    mounted: function() {
        this.drawChart();
    }
};
</script>

<style lang="scss" scoped>
$canvas-size: 205px;
.card-canvas {
    height: $canvas-size !important;
    width: $canvas-size !important;
    margin: auto;
    position: absolute;
    bottom: 55px;
    left: 5px;
}

@media print {

.card-canvas {
    bottom: 55px;
    left: 35px;
}
}
</style>
