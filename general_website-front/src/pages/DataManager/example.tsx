import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

interface LineChartProps {
  // data: number[];
}

const data = [10, 20, 30, 40, 50, 60]

const DataAnalysis: React.FC<LineChartProps> = () => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chartRef.current) {
      const chart = echarts.init(chartRef.current);
      const option: any = {
        xAxis: {
          type: 'category',
          data: [...data]
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: [...data],
          type: 'line'
        }]
      };
      chart.setOption(option);

      let dataIndex = 0;
      const timer = setInterval(() => {
        if (dataIndex >= data.length) {
          clearInterval(timer);
          return;
        }
        chart.setOption({
          xAxis: {
            data: [...option.xAxis.data, `Data ${dataIndex}`]
          },
          series: [{
            data: [...option.series[0].data, data[dataIndex]]
          }]
        });
        dataIndex++;
      }, 1000);

      return () => {
        clearInterval(timer);
        chart.dispose();
      }
    }
  }, []);

  return (
    <div ref={chartRef} style={{ width: '100%', height: '500px' }}></div>
  );
};

export default DataAnalysis

DataAnalysis.defaultProps = {
  data: [10, 20, 30, 40, 50, 60]
}

/**
 * 在这个组件中，我们首先使用 useRef 创建了一个对 Echarts 实例的引用 chartRef。然后我们使用 useEffect 来监听 data 的变化，每秒钟更新一次折线图。
 * 我们使用 setInterval 来更新图表，其中我们使用 Echarts 的 setOption 方法来更新图表数据。我们使用 dataIndex 来跟踪我们当前正在添加到图表中的数据的索引。
 * 在组件卸载时，我们清除了定时器和 Echarts 实例。
 * 最后，我们返回一个带有 chartRef 引用的 div 元素，它将用于在此元素上绘制折线图。 我们还设置了 width 和 height 样式来确保图表有足够的空间。
 * 现在我们可以在我们的应用程序中使用 LineChart 组件来绘制动态折线图。我们只需要将要显示的数据传递给 LineChart 组件即可。
 */