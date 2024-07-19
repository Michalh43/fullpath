import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Typography, Box } from '@mui/material';

// Define the columns for the DataGrid
const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'timestamp', headerName: 'Timestamp', width: 180 },
  {
    field: 'impressions', 
    headerName: 'Impressions', 
    width: 130,
    // Custom cell renderer to format numbers with commas
    renderCell: (params) => new Intl.NumberFormat().format(params.value)
  },
  {
    field: 'clicks', 
    headerName: 'Clicks', 
    width: 100,
    // Custom cell renderer to format numbers with commas
    renderCell: (params) => new Intl.NumberFormat().format(params.value)
  },
  {
    field: 'cost', 
    headerName: 'Cost', 
    width: 100,
    // Custom cell renderer to format numbers with commas
    renderCell: (params) => new Intl.NumberFormat().format(params.value)
  },
  {
    field: 'conversions', 
    headerName: 'Conversions', 
    width: 130,
    // Custom cell renderer to format numbers with commas
    renderCell: (params) => new Intl.NumberFormat().format(params.value)
  },
];

const DataTable = ({ data }) => {
  // Map data to rows format required by DataGrid
  const rows = data.map((item, index) => ({
    id: index + 1,
    ...item,
  }));

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Metrics Data Table
      </Typography>
      <Box sx={{ height: 420, width: '100%' }}>
        {/* Render the DataGrid with rows and columns */}
        <DataGrid rows={rows} columns={columns} pageSize={10} />
      </Box>
    </>
  );
};

export default DataTable;
