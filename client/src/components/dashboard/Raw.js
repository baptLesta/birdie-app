import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Tr = styled.tr`
  &:nth-child(even) {
    background-color: rgba(80, 227, 194, 0.4);
  }
  &:nth-child(odd) {
    background-color: white;
  }
`;

const Td = styled.td`
  text-align: left;
  padding: 2px 8px;
`;

const Raw = props => {
  return (
    <Tr>
      <Td>{props.index}</Td>
      <Td>{props.value}</Td>
      <Td>{props.count}</Td>
      <Td>{props.age}</Td>
    </Tr>
  );
};

Raw.propTypes = {
  value: PropTypes.string,
  count: PropTypes.number,
  age: PropTypes.age,
  index: PropTypes.number
};

export default Raw;
