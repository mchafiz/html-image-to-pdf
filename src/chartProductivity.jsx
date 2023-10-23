/* eslint-disable react/prop-types */
import { Card, Divider, Stack, Typography } from "@mui/material";
import Chart from "react-apexcharts";

function CardChart({ dataArr }) {
  const chartProductivityCompany = {
    series: [
      {
        name: "Billable",
        data: dataArr?.map((data) => data?.billable?.toFixed(2)),
      },
      {
        name: "Non Billable",
        data: dataArr?.map((data) => data?.non_billable?.toFixed(2)),
      },
      {
        name: "RnD",
        data: dataArr?.map((data) => data?.rnd?.toFixed(2)),
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 350,
        toolbar: {
          show: false,
          tools: {
            download: false,
          },
        },
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "55%",
          endingShape: "rounded",
          dataLabels: {
            position: "top",
          },
        },
      },
      dataLabels: {
        enabled: true,
        style: {
          colors: ["#333"],
          fontSize: "10px",
          fontFamily: "inter",
        },
        offsetY: -20,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
      },
      xaxis: {
        categories: dataArr?.map((data) => data?.name),
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      legend: {
        show: true,
        position: "top",
        horizontalAlign: "right",
        fontSize: "13px",
        fontFamily: "Inter",
        fontWeight: 500,
      },
      yaxis: {
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        labels: {
          show: true,
        },
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return val;
          },
        },
      },
    },
  };
  return (
    <Card id="chart-productivity">
      <Stack px={2} py={1.5}>
        <Typography variant="h4">Chart of Productivity</Typography>
        <Typography variant="subtitle2">
          Showing chart data from productivity table
        </Typography>
      </Stack>
      <Divider />
      <Stack p={1}>
        <Chart
          options={chartProductivityCompany.options}
          series={chartProductivityCompany.series}
          type="bar"
          height={350}
        />
      </Stack>
    </Card>
  );
}

export default CardChart;
