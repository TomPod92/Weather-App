import React from "react";
import '../styles/form.scss'

const Form = props => {
  return (
    <form className="form" onSubmit={props.onSubmit}>
      <input className="form__input" type="text" placeholder="Podaj miasto" value={props.value} onChange={props.onChange} required/>
      
      <button className="button button--form">Wyszukaj</button>
    </form>
  );
};

export default Form;
