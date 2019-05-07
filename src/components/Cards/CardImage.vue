<template>
    <div class="canvas_container">
        <img :src="canvasToImage()" alt="chartImage" title="chartImage" class="canvas_mirror" />
        <canvas id="cardchart" class="canvas_canvas" ref="cardChart" width="90" height="90" title="Card data" ></canvas>
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
            chart: null,
            chartImg: "data:image/png,"
        };
    },
    watch: {
        chartData: function() {
            if (this.chart !== null) {
                this.chart.update();
                this.chartImg = this.canvasToImage();
            }
        }
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
                        display: true
                    },
                    legend: {
                        display: false
                    }
                }
            };
            this.chart = new Chart(ctx, options);
        },
        canvasToImage() {
            if (this.chart) {
                const ctx = this.$refs.cardChart;
                return ctx.toDataURL("image/png");
            } else {
                return "";
            }
        }
    },
    mounted: function() {
        this.drawChart();
    }
};
</script>