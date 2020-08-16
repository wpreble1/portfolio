import React, { FC, ReactElement } from 'react';

import { Project } from '../components/types';

interface AbitaSpringsHotelProps {
  project: Project;
}

const AbitaSpringsHotel: FC<AbitaSpringsHotelProps> = ({
  project,
}): ReactElement => {
  return (
    <div className="">
      <h1>Abita Springs Hotel</h1>
      <p>
        This is some text about the Abita Springs Hotel.
      </p>
    </div>
  );
};

export default AbitaSpringsHotel;
