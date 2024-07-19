import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Checkbox, FormControlLabel, FormGroup, Typography } from '@mui/material';

const Chart = ({ data }) => {
  // State to manage which metrics are selected for display
  const [selectedMetrics, setSelectedMetrics] = useState({
    impressions: true,
    clicks: true,
    cost: true,
    conversions: true,
  });

  // Handler to toggle the selected metrics
  const handleMetricChange = (metric) => {
    setSelectedMetrics({ ...selectedMetrics, [metric]: !selectedMetrics[metric] });
  };

  // Format the date for display on the X axis
  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString(); // Convert to locale date string without time
  };

  return (
    <div>
      <Typography variant="h6" gutterBottom>
        Metrics Chart
      </Typography>
      {/* Add bottom margin to FormGroup */}
      <FormGroup row style={{ marginBottom: 16 }}>
        {Object.keys(selectedMetrics).map((metric) => (
          <FormControlLabel
            key={metric}
            control={
              <Checkbox
                checked={selectedMetrics[metric]}
                onChange={() => handleMetricChange(metric)}
                name={metric}
              />
            }
            label={metric.charAt(0).toUpperCase() + metric.slice(1)}
            // Add right margin to FormControlLabel
            style={{ marginRight: 8 }}
          />
        ))}
      </FormGroup>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="timestamp" tickFormatter={formatDate} />
          <YAxis width={100} tickFormatter={(value) => value.toLocaleString()} />
          <Tooltip formatter={(value) => value.toLocaleString()} />
          <Legend />
          {selectedMetrics.impressions && <Line type="monotone" dataKey="impressions" stroke="#8884d8" />}
          {selectedMetrics.clicks && <Line type="monotone" dataKey="clicks" stroke="#82ca9d" />}
          {selectedMetrics.cost && <Line type="monotone" dataKey="cost" stroke="#ff7300" />}
          {selectedMetrics.conversions && <Line type="monotone" dataKey="conversions" stroke="#387908" />}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
