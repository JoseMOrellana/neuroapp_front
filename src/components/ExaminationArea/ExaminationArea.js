import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Tab from '@material-ui/core/Tab';
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import TabPanel from '../TabPanel/TabPanel';
import ExpansionArea from '../UI/ExpansionArea/ExpansionArea';
import MedicinePicker from '../UI/Pickers/MedicinePicker/MedicinePicker';

const ExaminationArea = React.memo((props) => {
  const theme = useTheme()
  const [tab2value, settab2Value] = React.useState(0);
  const tab2handleChange = (event, newValue) => {
    settab2Value(newValue);
  };

  const tab2handleChangeIndex = index => {
    settab2Value(index);
  };
  function tab2Props(index) {
    return {
      id: `full-width-tab-${index}`,
      'aria-controls': `full-width-tabpanel-${index}`,
    };
  }
  return(
    <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
      <ExpansionArea title="Examinación">
          <Grid container spacing={2}>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
              <AppBar position="static" color="default" >
                <Tabs
                  value={tab2value}
                  onChange={tab2handleChange}
                  indicatorColor="primary"
                  textColor="primary"
                  centered
                  FullWidthTabs
                  aria-label="full width tabs example"
                >
                  <Tab label="Observaciones" {...tab2Props(0)} />
                  <Tab label="Medicamentos" {...tab2Props(1)} />
                  <Tab label="Examen Fisico" {...tab2Props(2)} />
                  <Tab label="Signos Cognitivos" {...tab2Props(3)} />
                  <Tab label="Intervenciones Quirurgicas" {...tab2Props(4)} />
                </Tabs>
              </AppBar>
              <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={tab2value}
                onChangeIndex={tab2handleChangeIndex}
              >
                <TabPanel value={tab2value} index={0} dir={theme.direction}>                  
                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                      <TextField
                        autoComplete=""
                        name="observations"
                        variant="outlined"
                        required
                        multiline
                        fullWidth
                        rowsMax="10"
                        id="observations"
                        label="Observaciones"
                        autoFocus
                        value={props.observations}
                        onChange={props.onChangeFnc}
                      />
                    </Grid>
            </TabPanel>
            <TabPanel value={tab2value} index={1} dir={theme.direction}>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                      <MedicinePicker 
                        value={props.medicine}
                        valuesList={props.medicineList}
                        onChangeFnc={props.onChangeFnc}
                      />
                    </Grid>
            </TabPanel>
            <TabPanel value={tab2value} index={2} dir={theme.direction}>
              <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                      <TextField
                        autoComplete=""
                        name="fisical_exam"
                        variant="outlined"
                        required
                        multiline
                        fullWidth
                        rowsMax="10"
                        id="fisical_exam"
                        label="Examen Fisico"
                        autoFocus
                        value={props.fisical_exam}
                        onChange={props.onChangeFnc}
                      />
                    </Grid>
            </TabPanel>
            <TabPanel value={tab2value} index={3} dir={theme.direction}>
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                      <TextField
                        autoComplete=""
                        name="cognitions"
                        variant="outlined"
                        multiline
                        fullWidth
                        rowsMax="10"
                        id="allergies"
                        label="Signos Cognitivos"
                        autoFocus
                        value={props.cognitions}
                        onChange={props.onChangeFnc}
                      />
                    </Grid>
            </TabPanel>
            <TabPanel value={tab2value} index={4} dir={theme.direction}>
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                      <TextField
                        autoComplete=""
                        name="surgeries"
                        variant="outlined"
                        required
                        multiline
                        fullWidth
                        rowsMax="10"
                        id="surgeries"
                        label="Intervenciones quirurgicas"
                        autoFocus
                        value={props.surgeries}
                        onChange={props.onChangeFnc}
                      />
                    </Grid>
            </TabPanel>
              </SwipeableViews>
            </Grid>
          </Grid>
      </ExpansionArea>
    </Grid>
  )
})

export default ExaminationArea