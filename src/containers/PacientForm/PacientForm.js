import React from 'react'
import { connect } from 'react-redux';
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import * as actions from '../../store/actions/index';
import NamesInputArea from '../../components/NamesInputArea/NamesInputArea'
import PersonalDataArea from '../../components/PersonalDataArea/PersonalDataArea'
import DetailsArea from '../../components/DetailsArea/DetailsArea'
import ExaminationArea from '../../components/ExaminationArea/ExaminationArea'



const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(2),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(20),
      fontWeight: theme.typography.h2,
    },  
  }));
const PacientForm = (props) => {
    React.useEffect(() => {
        if(props.countryData.length == 0) {
          props.onInitFormData();
        }
    })
    const [formData, setFormData] = React.useState({
      first_name: '',
      second_name: '',
      last_name: '',
      second_last_name: '',
      birth_date: Date.now(),
      gender: '',
      blood_type: '',
      marital_status: '',
      documentType: 'V-',
      document: '',
      telephone: '',
      telephone2: '',
      direction: '',
      country: '',
      state: '',
      municipality: '',
      description: '',
      personal_background: '',
      family_background: '',
      allergy: '',
      vaccine: '',
      observations: '',
      medicine: '',
      fisical_exam: '',
      cognitions: '',
      surgeries: ''
    })
    const handleChange = function(event) {
      if(event.target) {
        if(event.target.name === "country" && event.target.value != formData.country) {
          props.fetchStates(event.target.value)
          setFormData({
            ...formData,
            "country": event.target.value,
            "state": '',
            "municipality": ''
          })
        } else if (event.target.name === "state" && event.target.value != formData.state) {
          props.fetchMunicipalities(event.target.value)
          setFormData({
            ...formData,
            "state": event.target.value,
            "municipality": ''
          })
        } else {
          setFormData({
            ...formData,
            [event.target.name]: event.target.value
          })
        }
      } else {
        setFormData({
          ...formData,
          "birth_date": event
        })
      }
      
    };
    const handlePrefixedInput = name => event => {
      setFormData({
        ...formData,
        [name]: event.target.value
      })
    }
    const handleSubmit = (event) => {
      event.preventDefault()

      props.saveClinicalStory(formData, props.token)
    }
    const classes = useStyles()
    return (
            <Container component="main" className={classes.paper}>
              <CssBaseline />
                <Avatar className={classes.avatar} >
                    <PersonAddIcon />
                </Avatar>
                <h2>Historia Medica</h2>
                <form onSubmit={handleSubmit}>
                    <NamesInputArea
                      first_name={formData.first_name}
                      second_name={formData.second_name}
                      last_name={formData.last_name}
                      second_last_name={formData.second_last_name}
                      onChangeFnc={handleChange}
                    />
                    <PersonalDataArea 
                      birth_date={formData.birth_date}
                      gender={formData.gender}
                      blood_type={formData.blood_type}
                      marital_status={formData.marital_status}
                      documentType={formData.documentType}
                      document={formData.document}
                      telephone={formData.telephone}
                      telephone2={formData.telephone2}
                      direction={formData.direction}
                      country={formData.country}
                      countriesList={props.countryData}
                      state={formData.state}
                      statesList={props.stateData}
                      municipality={formData.municipality}
                      municipalitiesList={props.municipalityData}
                      onChangeFnc={handleChange}
                      onChangePrefixed={handlePrefixedInput}
                    />
                    <Typography variant="h6" color="initial">Detalles</Typography>
                    <DetailsArea 
                      description={formData.description}
                      personal_background={formData.personal_background}
                      personalBackgroundList={props.personalBackgroundData}
                      family_background={formData.family_background}
                      familyBackgroundList={props.familyBackgroundData}
                      allergy={formData.allergy}
                      allergyList={props.allergyData}
                      vaccine={formData.vaccine}
                      vaccineList={props.vaccineData}
                      onChangeFnc={handleChange}
                    />
                    <ExaminationArea
                      observations={props.observations}
                      medicine={props.medicine}
                      medicineList={props.medicineData}
                      fisical_exam={props.fisical_exam}
                      cognitions={props.cognitions}
                      surgeries={props.surgeries}
                      onChangeFnc={handleChange}
                    />
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      color="primary"
                      className={classes.submit}
                    >
                      Registrar Historia
                    </Button>
                </form>
            </Container>
        )

}
const mapStateToProps = state => {
  return {
    countryData: state.formData.countries,
    stateData: state.formData.states,
    municipalityData: state.formData.municipalities,
    personalBackgroundData: state.formData.personalBackgrounds,
    familyBackgroundData: state.formData.familyBackgrounds,
    allergyData: state.formData.allergies,
    vaccineData: state.formData.vaccines,
    medicineData: state.formData.medicines,
    token: state.auth.token
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onInitFormData: () => dispatch(actions.initFormData()),
    fetchStates: (country_id) => dispatch(actions.fetchStates(country_id)),
    fetchMunicipalities: (state_id) => dispatch(actions.fetchMunicipalities(state_id)),
    saveClinicalStory: (clinicalStoryData, token) => dispatch(actions.saveClinicalStory(clinicalStoryData, token))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PacientForm)