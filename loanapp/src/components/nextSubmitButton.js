import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  button: {
    marginRight: theme.spacing(1),
  },
}));

import {
  Typography,
  TextField,
  Button,
  Stepper,
  Step,
  StepLabel,
} from "@material-ui/core";

const NextSubmitButton = ({fn , type , value}) => {
    const classes = useStyles();
    return (
      <>
      <Button
        className={classes.button}
        variant="contained"
        color="primary"
        onClick={fn}
        type={type}
      >
        {value}
      </Button>
     </>
    )
}


export default NextSubmitButton
