import React from 'react'
import { useHistory } from "react-router-dom";

function Header () {
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
    <div>
    <button type="button" onClick={handleClickCreateCharacter}>
      Criar Personagem
    </button>
    <button type="button" onClick={handleClickUtilities}>
      Utilities
    </button>
    <button type="button" onClick={handleClickCreatedCharacters}>
      Personagens criados
    </button>
    </div>
  );
}

export default Header;