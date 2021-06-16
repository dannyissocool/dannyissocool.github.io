import React from 'react';
import { Placeholder } from 'semantic-ui-react';

const PlaceholderFluid = () => (
  <Placeholder fluid>
    <Placeholder.Header image>
      <Placeholder.Line />
      <Placeholder.Line />
    </Placeholder.Header>
    <Placeholder.Paragraph>
      <Placeholder.Line />
      <Placeholder.Line />
      <Placeholder.Line />
    </Placeholder.Paragraph>
  </Placeholder>
);

export default PlaceholderFluid;
