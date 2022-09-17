import * as React from 'react';
import MainPic from "../../Assets/mainPic.jpg";

export function BelowNav() {
  const Pic = MainPic;
  return (
    <div className='Below'>
      <img id='MainPic' src={Pic} alt="Picture can't able to load please wait"></img>

    </div>
  );
}
