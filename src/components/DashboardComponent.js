import React from "react";
import { connect } from "react-redux";

import SearchForm from "./SearchFormComponent";

import { initiateGetResult } from "../redux/ActionCreators";

function DashboardComponent({ initiateGetResult, history }) {
  const handleSearch = (searchTerm) => {
    initiateGetResult(searchTerm);
  };

  return (
    <React.Fragment>
      <div>
        <SearchForm handleSearch={handleSearch} />
      </div>
    </React.Fragment>
  );
}

export default connect(null, { initiateGetResult })(DashboardComponent);
