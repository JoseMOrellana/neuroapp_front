import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Tab from '@material-ui/core/Tab';
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import TabPanel from '../TabPanel/TabPanel';
import PersonalBackgroundPicker from '../UI/Pickers/PersonalBackgroundPicker/PersonalBackgroundPicker'
import FamilyBackgroundPicker from '../UI/Pickers/FamilyBackgroundPicker/FamilyBackgroundPicker'
import AllergyPicker from '../UI/Pickers/AllergyPicker/AllergyPicker'
import VaccinePicker from '../UI/Pickers/VaccinePicker/VaccinePicker'



const DetailsArea = React.memo((props) => {
    const theme = useTheme()
    const [tab1value, settab1Value] = React.useState(0);
    const tab1handleChange = (event, newValue) => {
        settab1Value(newValue);
      };
    function tab1handleChangeIndex(index) {
        settab1Value(index);
      };
    function a11yProps(index) {
        return {
          id: `full-width-tab-${index}`,
          'aria-controls': `full-width-tabpanel-${index}`,
        };
      }
    return(
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
            <AppBar position="static" color="default" >
                <Tabs
                  value={tab1value}
                  onChange={tab1handleChange}
                  indicatorColor="primary"
                  textColor="primary"
                  centered
                  FullWidthTabs
                  aria-label="full width tabs example"
                >
                    <Tab label="Motivo de consulta" {...a11yProps(0)} />
                    <Tab label="Ant. personales" {...a11yProps(1)} />
                    <Tab label="Ant. familiares" {...a11yProps(2)} />
                    <Tab label="Vacunas" {...a11yProps(4)} />
                </Tabs>
            </AppBar>
            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={tab1value}
                onChangeIndex={tab1handleChangeIndex}
            >
                <TabPanel value={tab1value} index={0} dir={theme.direction}>                  
                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                      <TextField
                        name="description"
                        variant="outlined"
                        required
                        multiline
                        fullWidth
                        rowsMax="10"
                        id="motivo_consulta"
                        label="Motivo de consulta"
                        value={props.description}
                        onChange={props.onChangeFnc}
                      />
                    </Grid>
            </TabPanel>
            <TabPanel value={tab1value} index={1} dir={theme.direction}>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                      <PersonalBackgroundPicker 
                        value={props.background}
                        valuesList={props.backgroundList}
                        onChangeFnc={props.onChangeFnc}
                      />
                    </Grid>
            </TabPanel>
            <TabPanel value={tab1value} index={2} dir={theme.direction}>
              <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                      <FamilyBackgroundPicker
                        value={props.background}
                        valuesList={props.backgroundList}
                        onChangeFnc={props.onChangeFnc}
                      />
                    </Grid>
            </TabPanel>
            <TabPanel value={tab1value} index={4} dir={theme.direction}>
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                      <VaccinePicker
                        value={props.vaccine}
                        valuesList={props.vaccineList}
                        onChangeFnc={props.onChangeFnc}
                      />
                    </Grid>
            </TabPanel>      
          </SwipeableViews>
            </Grid>
    )
}, (prevProps, nextProps) => {
  return Object.keys(nextProps).reduce((currentResult, name) => {
    if ( name == "onChangeFnc") {
        return currentResult
    }
    return currentResult && ( prevProps[name] === nextProps[name] )
}, true) 
      
})

export default DetailsArea