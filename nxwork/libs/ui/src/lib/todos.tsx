import React from 'react';
import { Todo } from '@nxwork/data';
import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface TodosProps {}

const StyledTodos = styled.div`
  color: pink;
`;

export const Todos = (props: { todos: Todo[] }) => {
  return (
    <StyledTodos>
      <ul>
        {props.todos.map(t => (
          <li className={'todo'}>{t.title}</li>
        ))}
      </ul>
    </StyledTodos>
  );
};

export default Todos;
