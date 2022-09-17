import * as React from 'react';
import { ResponsiveAppBar } from './ResponsiveAppBar.js';

export function NavBar({ setNavstate, NavState }) {
  return (
    <div>
      <ResponsiveAppBar NavState={NavState} setNavstate={setNavstate} />

    </div>
  );
}
