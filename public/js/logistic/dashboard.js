const fetchDashDetail = async () => {
  try {
    const response = await fetch('/kartezy/logistic/dashboardDetailFetch', { method: 'post' })
    const jsonRsp = await response.json()
    if (response.status === 200) {
      document.getElementById('totalOrders').innerHTML = jsonRsp.totalOrders
      document.getElementById('pendingOrders').innerHTML = jsonRsp.pendingOrders
      document.getElementById('intransitOrders').innerHTML = jsonRsp.intransitOrders
      document.getElementById('deliveredOrders').innerHTML = jsonRsp.deliveredOrders
      const labelForChartOrder = ['Delivered', 'In-Shippment','In-transit'];
      const valForChartOrder = [jsonRsp.deliveredOrders, jsonRsp.pendingOrders, jsonRsp.intransitOrders];
      renderDelivChart(labelForChartOrder, valForChartOrder, '#chart')
    } else {
      Swal.fire({
        title: jsonRsp.msg,
        icon: "error"
      });
    }
  } catch (error) {
    console.log(error);
  }
}
const oderCityFetch = async () => {
  try {
    const response = await fetch('/kartezy/logistic/dashboardCityOrderFetch', { method: 'post' })
    const jsonRsp = await response.json()
    if (response.status === 200) {
      renderDelivChart(jsonRsp.cities, jsonRsp.orderOfCities, '#odrByCity')
    } else {
      Swal.fire({
        title: jsonRsp.msg,
        icon: "error"
      });
    }
  } catch (error) {
    console.log(error);
  }
}
const ordersDeliveredByMonth = async () => {
  try {
    const response = await fetch('/kartezy/logistic/dashboardMonthOrderFetch', { method: 'post' })
    const jsonRsp = await response.json()
    if (response.status === 200) {
      renderLineChart(jsonRsp.months, jsonRsp.orderOfmonth, '#odrByMonth') 
    } else {
      Swal.fire({
        title: jsonRsp.msg,
        icon: "error"
      });
    }
  } catch (error) {
    console.log(error);
  }
}
fetchDashDetail()
oderCityFetch()
ordersDeliveredByMonth()
const renderDelivChart = (label, val, chart) => {
  var options = {
    series: val,

    chart: {
      width: 380,
      type: 'pie',
    },
    labels: label,
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 200
        },
        legend: {
          position: 'bottom'
        }
      }
    }]
  };
  var chart = new ApexCharts(document.querySelector(chart), options);
  chart.render();

}
const renderLineChart = (label, val, chart) => {
  var options = {
    series: [{
      name: "order ",
      data: val
    }],
    chart: {
      height: 350,
      type: 'line',
      zoom: {
        enabled: false
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    title: {
      text: 'Order Trends by Month',
      align: 'left'
    },
    grid: {
      row: {
        colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
        opacity: 0.5
      },
    },
    xaxis: {

      categories: label,
    }
  };
  var chart = new ApexCharts(document.querySelector(chart), options);
  chart.render();

}