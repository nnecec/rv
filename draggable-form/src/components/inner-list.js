// @flow
import React, { Component } from 'react';
import styled from '@emotion/styled';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import QuoteItem from '../components/quote-item';
import Title from '../components/title';

const grid = 8

const DropZone = styled.div`
  /* stop the list collapsing when empty */
  height: 100%;
  /*
    not relying on the items for a margin-bottom
    as it will collapse when the list is empty
  */
  padding-bottom: ${grid}px;
`;
/* stylelint-disable block-no-empty */
const Container = styled.div``;
/* stylelint-enable */

const InnerList = props => {
  const { quotes, title, dropProvided } = props;
  const InnerQuoteList = React.memo(function InnerQuoteList (
    props,
  ) {
    return props.quotes.map((quote, index) => (
      <Draggable key={quote.id} draggableId={quote.id} index={index}>
        {(
          dragProvided,
          dragSnapshot,
        ) => (
            <QuoteItem
              key={quote.id}
              quote={quote}
              isDragging={dragSnapshot.isDragging}
              isGroupedOver={Boolean(dragSnapshot.combineTargetFor)}
              provided={dragProvided}
            />
          )}
      </Draggable>
    ));
  });


  return (
    <Container>
      {<Title>{title}</Title> || null}
      <DropZone ref={dropProvided.innerRef}>
        <InnerQuoteList quotes={quotes} />
        {dropProvided.placeholder}
      </DropZone>
    </Container>
  );


}

export default InnerList