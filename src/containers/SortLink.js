import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { setSortAttribute, toggleReverse } from "../actions";

const mapStateToProps = (state) => ({
  sort: state.sort,
  reverse: state.reverse,
});

const mapDispatchToProps = (dispatch) => ({
  onSortClick(sort, attribute) {
    if (sort === attribute) {
      dispatch(toggleReverse());
    } else {
      dispatch(setSortAttribute(attribute));
    }
  }
});

export const SortLink = (props) => {
  const { sort, reverse, attribute, children, onSortClick } = props;
  
  let iconClasses;
  if (reverse) {
    iconClasses = "fa-sort-asc align-middle";
  } else {
    iconClasses = "fa-sort-desc align-top";
  }
  
  return (
    <a
      href="#"
      onClick={(e) => {
          e.preventDefault();
          onSortClick(sort, attribute);
        }
      }
    >
      {children}
      { sort === attribute &&
        <i 
          className={`fa ${iconClasses} pl-1`}
          aria-hidden="true">
        </i>
      }
    </a>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(SortLink);

SortLink.propTypes = {
  sort: PropTypes.string,
  attribute: PropTypes.string,
};
