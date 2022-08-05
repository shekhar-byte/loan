import React, { useState } from "react";
import {
  Typography,
  TextField,
  Button,
  Stepper,
  Step,
  StepLabel,
  Grid,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useForm , FormProvider , useFormContext , Controller} from "react-hook-form"

import Personaldetails from "./pages/personaldetails"
import Bussinessdetail from "./pages/bussinessdetails"
import Applicationdetails from "./pages/applicationdetails"
import FinalSubmission from "./pages/finalsubmission"
import Header from "./components/header"
import axios from 'axios'

const useStyles = makeStyles((theme) => ({
  button: {
    marginRight: theme.spacing(1),
  },
}));

function getSteps() {
  return [
    "Personal Information",
    "Bussiness Information",
    "Loan Details",
    "Final Submission",
  ];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return  <Personaldetails />

    case 1:
      return <Bussinessdetail />

    case 2:
      return  <Applicationdetails />

    case 3:
      return   <FinalSubmission />

    default:
      return "unknown step";
  }
}

const LinaerStepper = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);

  const steps = getSteps();
  const methods = useForm({
    defaultValues:{
      firstName:"",
      lastName:"",
      age:"",
      occupation:"",
      fatherName:"",
      motherName:"",
      email:"",
      Number:"",
      address:"",
      pincode:"",
      state:"",
      country:"",
      bussinessName:"",
      bussinessAddress:"",
      shopNo:"",
      gstNo:"",
      bussinessDescription:"",
      bussinessPhoneNumber:"",
      bussinessEmail:"",
      loanAmount:"",
      interestRate:"",
      tenture:"",
      sDate:"",
      eDate:""
    }
  })

  const handleNext =  (data) => {
    if(activeStep ==  steps.length - 1){
      try {
        axios.post("/loanApplication",data)
        console.log("suscessful", data)
        setActiveStep(activeStep + 1)
      } catch (e) {
        console.log(e);
      }

    }
    else{
      setActiveStep(activeStep + 1);

    }

  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

 // const onSubmit = (data) => {
 //    console.log(data)
 // }


  return (
    <div>
      <Header />
      <Stepper alternativeLabel activeStep={activeStep}>
        {steps.map((step, index) => {
          const labelProps = {};
          const stepProps = {};


          return (
            <Step {...stepProps} key={index}>
              <StepLabel {...labelProps}>{step}</StepLabel>
            </Step>
          );
        })}
      </Stepper>

      {activeStep === steps.length ? (
        <Typography variant="h3" align="center">
          Thank You
        </Typography>
      ) : (
        <>
        <FormProvider{...methods}>
          <form  onSubmit={methods.handleSubmit(handleNext)}>{getStepContent(activeStep)}

           <Grid container justify="center">
           <Button

             className={classes.button}
             disabled={activeStep === 0}
             onClick={handleBack}
           >
             back
           </Button>
           <Button

             className={classes.button}
             variant="contained"
             color="primary"
             // onClick={handleNext}
             type="submit"
           >
             {activeStep === steps.length - 1 ? "Submit" : "Next"}
           </Button>
           </Grid>

          </form>
        </FormProvider>

        </>
      )}
    </div>
  );
};

export default LinaerStepper;
