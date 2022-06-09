import React from 'react';

import { Button } from '@mantine/core';

// import Button from '@mui/material/Button';

interface Props {}
interface State {}

export class HappiGraph extends React.Component<Props, State> {
  render() {
    return (<>
      <div>Hello from components-library</div>

      <Button>Hello</Button>
    </>);
  }
}
