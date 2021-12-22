import React from 'react'
import { useHistory } from "react-router-dom";

function HeaderButtons () {
  let history = useHistory();

  function handleClickCreateCharacter() {
    const location = window.location.href;
    const splicedLocation = location.slice(21);
    if (splicedLocation !== '/') {
      history.push(`/`)
    }
  }
  function handleClickUtilities() {
    const location = window.location.href;
    const splicedLocation = location.slice(21);
    if (splicedLocation !== '/utilities') {
      history.push(`/utilities`)
    }
  }
  function handleClickCreatedCharacters() {
    const location = window.location.href;
    const splicedLocation = location.slice(21);
    if (splicedLocation !== '/created') {
      history.push(`/created`)
    }
  }

  return (
    <div className="header-buttons">
    <span onClick={handleClickCreateCharacter}>
      Create a Character
    </span>
    <span onClick={handleClickUtilities}>
      Utilities
    </span>
    <span onClick={handleClickCreatedCharacters}>
      Created Characters
    </span>
    </div>
  );
}

export default HeaderButtons;