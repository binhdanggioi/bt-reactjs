/* eslint-disable no-undef */
/* eslint-disable react/no-typos */
import React from "react";
import PropTypes from "prop-types";
function TodoItem(props) {
  const { name, complete, onRemoveItem, onItemClick } = props;
  return (
    //sự kiện onClick bắt vào onItemClick(App) gồm style,className(toán tử 3 ngôi)
    <div>
        <div
        onClick={onItemClick}
        style={{ cursor: "pointer" }}
        className={complete ? "completed" : ""}
        >
        <h1>{name}</h1>
        </div>
        <button onClick={onRemoveItem}>xoa</button>
    </div>
  );
}
TodoItem.PropTypes = {
  name: PropTypes.string.isRequire,
  complete: PropTypes.bool.isRequire,
  onItemClick: PropTypes.func.isRequire,
  onRemoveItem: PropTypes.func.isRequire
};
export default TodoItem;
