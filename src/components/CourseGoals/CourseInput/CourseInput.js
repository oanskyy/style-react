import React, { useState } from "react";
// import styled from "styled-components";
import styles from "./CourseInput.module.css";

import Button from "../../UI/Button/Button";
import "./CourseInput.css";

// const FormControl = styled.div`
//   margin: 0.5rem 0;

//   & label {
//     font-weight: bold;
//     display: block;
//     margin-bottom: 0.5rem;
//     color: ${(props) => (props.invalid ? "red" : "#ccc")};
//   }

//   & input {
//     display: block;
//     width: 100%;
//     border: 1px solid ${(props) => (props.invalid ? "#ccc" : "")};
//     background: ${(props) => (props.invalid ? "#ffd7d7" : "transparent")};
//     font: inherit;
//     line-height: 1.5rem;
//     padding: 0 0.25rem;
//   }

//   & input:focus {
//     outline: none;
//     background: #fad0ec;
//     border-color: #8b005d;
//   }

//   /* &.invalid input {
//     border-color: red;
//     background: #ffd7d7;
//   }

//   &.invalid label {
//     color: red;
//   } */
// `;

const CourseInput = (props) => {
  const [isValid, setIsValid] = useState();
  const [enteredValue, setEnteredValue] = useState("");

  const goalInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      {/* <FormControl invalid={!isValid}>
        <label style={{ color: !isValid ? "red" : "green" }}>Course Goal</label>
        <input
          style={{
            borderColor: !isValid ? "red" : "green",
            background: !isValid ? "salmon" : "transparent",
          }}
          type="text"
          onChange={goalInputChangeHandler}
        />
      </FormControl> */}
      <div invalid={!isValid} className={styles["form-control"]}>
        <label style={{ color: !isValid ? "red" : "green" }}>Course Goal</label>
        <input
          style={{
            borderColor: !isValid ? "red" : "green",
            background: !isValid ? "salmon" : "transparent",
          }}
          type="text"
          onChange={goalInputChangeHandler}
        />
      </div>

      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
