import * as React from 'react';
import WorkPic from "../../Assets/WorkPage.jpg";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

export function Works() {
  const WorkPhoto = WorkPic;
  return (
    <div>
      <img className='WorkPic' src={WorkPhoto} alt="Photo is loading..."></img>
      <div>
        <h1>
          How can freelancers help your business?
        </h1>
        <p>
          Business owners are responsible for training costs, benefits, health insurance, paid time-off, and payroll taxes. In contrast, hiring a freelancer allows your business to eliminate many of these overhead costs.
        </p>
      </div>
      <div className='markBorder'>
        <div className='makeleft'>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <h3>
                Flexible payment terms
              </h3>
              <p>
                Pay your freelancers a fixed price. All secured by the Milestone Payments system.
              </p>
            </CardContent>
          </Card>
        </div>
        <div className='makeleft'>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <h3>
                Diverse talent
              </h3>
              <p>
                Choose from expert freelancers, from all around the globe.
              </p>
            </CardContent>
          </Card>
        </div>
        <div className='makeleft'>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <h3>
                Any sized project
              </h3>
              <p>
                Get any job done. From small one-off tasks to large, multi-stage projects.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
