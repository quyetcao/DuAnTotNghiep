import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ChooseLocation from './choose-location';
import ChooseSeat from './choose-seat';
import { callApiSeat } from '../../redux/info-bus/infobus-asynThunk';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';



export default function HorizontalLinearStepper({index,car_id,itemallthongtincx}){
  console.log("car-itemallthongtincx",itemallthongtincx);

  const dispatch = useDispatch();


  React.useEffect(() => {
      dispatch(callApiSeat(car_id));
  },[])
    const steps = ['Chỗ mong muốn', 'Điểm đón trả'];
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };



    return (
        
    <Box sx={{ width: '95%',margin:'auto',marginTop:'20px', borderTop:'1px solid grey',padding:'20px', }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>

      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleReset}>Xóa</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>

          
          <Typography sx={{ mt: 2, mb: 1 }}>
          {activeStep + 1 === 1 ? <ChooseSeat seat_car_id={car_id} itemallthongtincx={itemallthongtincx} /> : <ChooseLocation car_id={car_id}  itemallthongtincx={itemallthongtincx}/> }

          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Quay về 
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            {isStepOptional(activeStep) && (
              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                Skip
              </Button>
            )}
            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? <Link to={'/thanhtoanlanmot/'+itemallthongtincx.id} >Tiếp Tục</Link> : 'Tiếp Tục'}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}
   