import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useNavigate } from 'react-router-dom';

export function MainText() {
  const navigate = useNavigate();
  return (
    <div className='Avoid_space'>
      <h1 className='Avoid_space'>Hire an freelancers for your job by online.</h1>
      <div>

        <h3>Millions of  freelancers available here.</h3>
        <Button variant='contained' color="success" onClick={() => navigate("/project")}>Hire a freelancers</Button>
      </div>
      <div className='borderTop'>
        <h1>Need something to done?</h1>
        <div className='Split'>
          <div className='makespace'>
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <h3>
                  Post a job
                </h3>
                <p>
                  It’s free and easy to post a job. Simply fill the needed informations like title, description and budget.
                </p>
              </CardContent>
            </Card>

          </div>
          <div className='makespace'>
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <h3>

                  Choose freelancers
                </h3>
                <p>
                  You can get freelancers for your jobs of any size or budget. No job is too complex. We can get it done!
                </p>
              </CardContent>
            </Card>

          </div>
          <div className='makespace'>
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <h3>
                  We’re here to help
                </h3>
                <p>
                  We having an talented team of recruiters who can help you to  find the best freelancer for your job.

                </p>
              </CardContent>
            </Card>

          </div>
          <div className='makespace'>
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <h3>
                  Pay safely
                </h3>
                <p>
                  Pay only for work which has been completed and you're 100% satisfied with the quality using our milestone payment system.
                </p>
              </CardContent>
            </Card>

          </div>


        </div>
      </div>
    </div>
  );
}
