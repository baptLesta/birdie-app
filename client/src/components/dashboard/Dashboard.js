import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// Import custom components
import SelectBox from './SelectBox';
import Table from './Table';

const Container = styled.div`
  padding: 3em;
`;

const Dashboard = props => {
  const {
    categories, selectedCategorie, isLoading, data, undisplayNumber
  } = props;
  let content;

  if (isLoading) {
    content = <div className="loader"></div>;
  } else {
    content = <Table
      selectedCategorie={selectedCategorie}
      data={data}
      undisplayNumber={undisplayNumber}
    />;
  }

  return (
    <Container>
      <SelectBox
        handleChange={props.handleSelectChange}
        categories={categories}
      />
      {selectedCategorie !== null &&
        content
      }
    </Container>
  );
};

Dashboard.propTypes = {
  selectedCategorie: PropTypes.string,
  isLoading: PropTypes.bool,
  categories: PropTypes.array,
  data: PropTypes.array,
  handleSelectChange: PropTypes.fun,
  undisplayNumber: PropTypes.number
};

export default Dashboard;
