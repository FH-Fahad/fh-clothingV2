/* eslint-disable react-refresh/only-export-components */
import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./directory.styles.css";

import MenuItem from "../menu-item/menu-item.component";

import { selectDirectorySelections } from "../../redux/directory/directory.selectors";

const Directory = ({ sections }) => (
  <div className="directory-menu">
    {sections.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySelections,
});

export default connect(mapStateToProps)(Directory);
