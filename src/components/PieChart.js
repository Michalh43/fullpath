import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Typography } from '@mui/material';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

// Calculate total cost for each category
const calculateTotalCost = (data) => {
  const totals = data.reduce((acc, item) => {
    acc.impressions = (acc.impressions || 0) + item.impressions;
    acc.clicks = (acc.clicks || 0) + item.clicks;
    acc.conversions = (acc.conversions || 0) + item.conversions;
    return acc;
  }, {});
  return [
    { name: 'Total Clicks', value: totals.clicks },
    { name: 'Total Conversions', value: totals.conversions }
  ];
};

const CustomPieChart = ({ data }) => {
  const pieData = calculateTotalCost(data);
  const totalValue = pieData.reduce((acc, item) => acc + item.value, 0);

  const formatNumber = (value) => new Intl.NumberFormat().format(value);

  const tooltipFormatter = (value, name) => {
    const percentage = ((value / totalValue) * 100).toFixed(2);
    return `${formatNumber(value)} (${percentage}%)`;
  };

  const renderLabel = ({ percent }) => {
    const percentage = (percent * 100).toFixed(2);
    return `${percentage}%`;
  };

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Clicks and Conversions Distribution
      </Typography>
      <ResponsiveContainer width="100%" height={280}>
        <PieChart>
          <Pie
            data={pieData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={90}
            fill="#8884d8"
            labelLine={false}
            label={renderLabel}
          >
            {pieData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip formatter={tooltipFormatter} />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </>
  );
};

export default CustomPieChart;
