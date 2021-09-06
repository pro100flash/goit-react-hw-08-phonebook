import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getFilter } from "../../redux/selectors";
import * as actions from "../../redux/actions";

export default function Filter() {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();
  const onChange = (e) => dispatch(actions.changeFilter(e.target.value));

  return (
    <label>
      Find contacts by name{" "}
      <input type="text" value={value} onChange={onChange} />
    </label>
  );
}
