import React from "react";

const Form = props => {
  return (
    <form onSubmit={props.onSubmit}>
      <input type="text" placeholder="Podaj miasto" value={props.value} onChange={props.onChange} required/>
      <button>Wyszukaj</button>
    </form>
  );
};

export default Form;
