import React from 'react';
import { Container, Grid, Paper, Box, Typography } from '@mui/material';
import Chart from './Chart';
import DataTable from './DataTable';
import CustomPieChart from './PieChart';
import sampleData from '../sampleData.json';

const Dashboard = () => {
  return (
    <Container>
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Website Metrics Dashboard
        </Typography>
      </Box>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Paper elevation={3}>
            <Box p={2}>
              <Chart data={sampleData.data} />
            </Box>
          </Paper>
        </Grid>
        <Grid container item spacing={4}>
          <Grid item xs={12} md={4}>
            <Paper elevation={3}>
              <Box p={2}>
                <CustomPieChart data={sampleData.data} />
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} md={8}>
            <Paper elevation={3}>
              <Box p={2}>
                <DataTable data={sampleData.data} />
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;
