import React from 'react';
import {BarChart} from 'react-native-chart-kit';
import {screenWidth} from '../../configs/Constants';

const GroupedBarChartComponent = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        data: [5, 10, 15, 20, 25, 20],
      },
    ],
  };
  return (
    <>
      <BarChart
        data={data}
        width={screenWidth - 40}
        height={220}
        chartConfig={{
          backgroundGradientFrom: 'white',
          backgroundGradientTo: 'white',
          decimalPlaces: 2,
          color: () => `white`,
          labelColor: () => `black`,
          propsForDots: {
            r: '10',
            strokeWidth: '10',
            stroke: 'black',
          },
          count: 7,
          linejoinType: 'bevel',
          useShadowColorFromDataset: false,
          fillShadowGradient: 'red',
          fillShadowGradientFrom: 'green',
          fillShadowGradientFromOffset: 0,
          fillShadowGradientFromOpacity: 1,
          fillShadowGradientOpacity: 1,
          fillShadowGradientTo: 'black',
          fillShadowGradientToOffset: 1,
          fillShadowGradientToOpacity: 1,
        }}
        style={{
          marginVertical: 8,
        }}
        yAxisLabel="$"
        verticalLabelRotation={0}
      />
    </>
  );
};

export default GroupedBarChartComponent;
