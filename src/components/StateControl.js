import React from "react";
import TeamList from "./TeamList";
import MatchList from './MatchList';
import MatchDetail from "./MatchDetail";
import CustomSearch from "./CustomSearch";

class StateControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterMatchList: [],
      selectedMatch: null,
      search: false
    };
  }

  handleClick = () => {
    if (this.state.selectedMatch != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedMatch: null
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }

  handleChangingSelectedMatch = (id) => {
    const selectedMatch = this.state.masterMatchList.filter(match => match.id === id)[0];
    this.setState({selectedMatch: selectedMatch});
  }

  handleSearchClick = () => {
    this.setState({search: true});
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.search) {
      currentlyVisibleState = <CustomSearch />
      buttonText = "Return to List of Teams"
    } else if(this.state.selectedMatch != null) {
      currentlyVisibleState = <MatchDetail match = {this.state.selectedMatch} />
      buttonText = "Return to List of Teams";
    } else if (this.state.formVisibleOnPage) {
      buttonText = "Return to List of Teams";
      currentlyVisibleState = <MatchList matchList={this.state.masterMatchList} />;
    } else {
      currentlyVisibleState = <TeamList />;
      buttonText = "Custom Search"
    }
    return(
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

export default StateControl;