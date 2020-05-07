import React from "react";
import { v4 as uuidv4 } from "uuid";
// import { Link } from "react-router-dom";

const SelectInput = (props) => {
  let { data } = props;
  return (
    data.length !== 0 && (
      <React.Fragment>
        <select className="form-control mr-sm-2" name="" id="">
          {data.map((item) => {
            return (
              <option key={uuidv4()} value={item}>
                {item}
              </option>
            );
          })}
        </select>
      </React.Fragment>
    )
  );
};

export default SelectInput;
