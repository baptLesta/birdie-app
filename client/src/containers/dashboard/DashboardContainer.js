import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCategories, boundSetSelectedCategorie } from '../../actions';

// Import custom components
import Dashboard from '../../components/dashboard/Dashboard';

class DashboardContainer extends Component {

  constructor(props) {
    super(props);

    props.getCategories();
  }

  render() {
    const {
      categories, selectedCategorie, isLoading, data, undisplayNumber, boundSetSelectedCategorie
    } = this.props;

    return (
      <Dashboard
        categories={categories}
        selectedCategorie={selectedCategorie}
        data={data}
        isLoading={isLoading}
        handleSelectChange={boundSetSelectedCategorie}
        undisplayNumber= {undisplayNumber}
      />
    );
  }
}

/**
 * Map the state to props.
 */
const mapStateToProps = state => ({
  categories: state.demographic.categories,
  data: state.demographic.data,
  isLoading: state.demographic.isLoading,
  selectedCategorie: state.demographic.selectedCategorie,
  undisplayNumber: state.demographic.undisplayNumber
});

export default connect(
  mapStateToProps,
  { getCategories, boundSetSelectedCategorie }
)(DashboardContainer);
