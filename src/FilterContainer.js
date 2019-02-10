import React from 'react';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

class FilterContainer extends React.Component {

  state = {
    searchText: '',
    searchType: 'all'
  }

  changeHandler = (event) => {
    this.setState({ searchText: event.target.value });
  }

  changeTypeHandler = (event) => {
    this.setState({ searchType: event.target.value }, () => {
      this.props.search(this.state);
    });
  }

  keyDownHandler = (event) => {
    if (event.keyCode === 13) {
      if (!this.state.searchText) {
        this.props.resetFilters();
        return;
      }
      this.props.search(this.state);
    }
  }

  renderClearFiltersButton() {
    if (this.props.filterActive) {
      return (
        <Button onClick={this.props.resetFilters}>Clear filters</Button>
      );
    }
    return null;
  }

  render() {
    return(
      <Card>
        <CardContent>
          <TextField
            placeholder="Search task..."
            onKeyDown={this.keyDownHandler}
            onChange={this.changeHandler} />
          <Select value="all" onChange={this.changeTypeHandler}>
            <MenuItem value="all">All</MenuItem>
            <MenuItem value="completed">Completed</MenuItem>
            <MenuItem value="incomplete">Incomplete</MenuItem>
          </Select>
          {this.renderClearFiltersButton()}
        </CardContent>
      </Card>
    );
  }
}

export default FilterContainer;
