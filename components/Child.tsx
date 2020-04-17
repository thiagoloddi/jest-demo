import React, { useState } from 'react';
import multiplyWidth from '../helpers/multiplyWidth';

const Child = () => {
  const [number, setNumber] = useState("");
  const [text, setText] = useState("");

  const onFormSubmit = (e) => {
    e.preventDefault();

    setText(String(multiplyWidth(number)));
  }

  return (
    <form onSubmit={onFormSubmit}>
      <input type="number" value={number} onChange={e => setNumber(e.target.value)} />&nbsp;
      <button type="submit">Click Me!</button>&nbsp;&nbsp;
      <span id="result">{text}</span>
    </form>
  )
}

export default Child;