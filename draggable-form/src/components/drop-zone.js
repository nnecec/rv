// @flow
import React from 'react';
import styled from 'styled-components';

const grid = 8

const Container = styled.div`
  /* stop the list collapsing when empty */
  height: 100%;
  /*
    not relying on the items for a margin-bottom
    as it will collapse when the list is empty
  */
  padding-bottom: ${grid}px;
`;

const DropZone = props => {
  const { dropProvided, children } = props;

  return (
    <Container ref={dropProvided.innerRef}>
      {children}
      {dropProvided.placeholder}
    </Container>
  );


}

export default DropZone