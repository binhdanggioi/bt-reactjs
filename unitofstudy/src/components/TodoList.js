/* eslint-disable react/no-typos */
import React from "react";
import PropTypes from "prop-types";
function TodoList(props) {
  
  }
TodoList.PropTypes = {
  list: PropTypes.array.isRequire,
  onItemClick: PropTypes.func.isRequire,
  onRemoveItem: PropTypes.func.isRequire
};
export default TodoList;
