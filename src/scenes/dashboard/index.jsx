import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import React, { useEffect, useState } from 'react';
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import { useDispatch, useSelector } from 'react-redux';
import { setApiData, setMsApiData } from '../../actions/actions';

import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
import BarChart from "../../components/BarChart";
import StatBox from "../../components/StatBox";
import ProgressCircle from "../../components/ProgressCircle";

import PieChart from "../../components/PieChart";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [dataToShow, setDataToShow] = useState([]);
  const dispatch = useDispatch();
  const apiDataFromStore = useSelector((state) => state.apiData);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/gp-school');
        const result = await response.json();
        dispatch(setApiData(result));
        setDataToShow(result);
      } catch (error) {
        console.error('Error fetching API data:', error);
      }
    };

    fetchData();
  }, [dispatch]);

  const fetchMsSchool = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/ms-school');
      const result = await response.json();
      dispatch(setMsApiData(result));
      setDataToShow(result);
    } catch (error) {
      console.error('Error fetching M.S. School API data:', error);
    }
  };

  const getGpSchool = () => {
    setDataToShow(apiDataFromStore.apiData);
  };

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="GULF UNIVERSITY OF SCIENCE & TECHNOLOGIES DASHBOARD" subtitle="Welcome to your dashboard" />

        <Box>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <DownloadOutlinedIcon sx={{ mr: "10px" }} />
            Download Reports
          </Button>
        </Box>
      </Box>

      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          margin: '30px',
        }}
      >
        <Button
          onClick={() => getGpSchool()}
          style={{
            backgroundColor: '#4cceac',
            color: '#fff',
            fontSize: '14px',
            fontWeight: 'bold',
            padding: '10px 0',
            width: '200px',
            marginRight: '200px',
            height: '75px',
          }}
        >
          <DownloadOutlinedIcon style={{ marginRight: '10px' }} />
          G.P.School
        </Button>

        <Button
          onClick={() => fetchMsSchool()}
          style={{
            backgroundColor: '#4cceac',
            color: '#fff',
            fontSize: '14px',
            fontWeight: 'bold',
            padding: '10px 0',
            width: '200px',
            height: '75px',
          }}
        >
          <DownloadOutlinedIcon style={{ marginRight: '10px' }} />
          M.S School
        </Button>
      </div>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* ROW 1 */}
        <Box
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{
            gridColumn: 'span 3',
          }}
        >
          <StatBox
            title="Boys"
            subtitle={dataToShow.filter(student => student.sex === 'M').length}
            progress="0.44"
            increase="43%"
          />
        </Box>

        <Box
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{
            gridColumn: 'span 3',
          }}
        >
          <StatBox
            title="Girls"
            subtitle={dataToShow.filter(student => student.sex === 'F').length}
            progress="0.56"
            increase="56%"
          />
        </Box>

        <Box
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{
            gridColumn: 'span 3',
          }}
        >
          <StatBox
            title="Urban"
            subtitle={dataToShow.filter(student => student.address === 'U').length}
            progress="0.30"
            increase="+5%"
          />
        </Box>

        <Box
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{
            gridColumn: 'span 3',
          }}
        >
          <StatBox
            title="Rural"
            subtitle={dataToShow.filter(student => student.address === 'R').length}
            progress="0.80"
            increase="+43%"
          />
        </Box>

        {/* ROW 2 */}
        <Box
          backgroundColor={colors.primary[400]}
          gridColumn="span 8"
          gridRow="span 2"
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.grey[100]}
              >
                Grades
              </Typography>
            </Box>
            <Box>
              <IconButton>
                <DownloadOutlinedIcon
                  sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
                />
              </IconButton>
            </Box>
          </Box>
          <Box height="250px" m="-20px 0 0 0">
            <LineChart isDashboard={true} />
          </Box>
        </Box>

        {/* ROW 3 */}
        <Box
          backgroundColor={colors.primary[400]}
          gridColumn="span 4"
          gridRow="span 2"
          p="30px"
        >
          <Typography variant="h5" fontWeight="600">
            Ratio
          </Typography>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            mt="25px"
          >
            <ProgressCircle size="125" />
          </Box>
        </Box>
        <Box
          backgroundColor={colors.primary[400]}
          gridColumn="span 6"
          gridRow="span 3"
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ padding: "30px 30px 0 30px" }}
          >
            Student graph
          </Typography>
          <Box height="400px" mt="-20px">
            <BarChart isDashboard={true} data={dataToShow}/>
          </Box>
        </Box>

        <Box
          backgroundColor={colors.primary[400]}
          gridColumn="span 6"
          gridRow="span 3"
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ padding: "30px 30px 0 30px" }}
          >
            Types of Services
          </Typography>
          <Box height="400px" mt="-20px">
            <PieChart isDashboard={true} data={dataToShow} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
