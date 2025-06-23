import { useState } from 'react';

export default function Player({ initialName, symbol, isActive, onChangeName }) {
    const [ isEditing, setIsEditing ] = useState(false);
    const [ playerName, setPlayerName ] = useState(initialName);

    function handleClick() {
      setIsEditing((editing) => !editing);
    }

    function handleChange(event) {
      setPlayerName(event.target.value);

      if(isEditing) {
        onChangeName(symbol, event.target.value);
      }
    }

    let playerNameField = <span className='player-name'>{playerName}</span>;

    if (isEditing) {
      playerNameField = <input type="text" value={playerName} required onChange={handleChange} />
    }

    return (
      <li className={isActive ? 'active' : undefined}>
        <span className='player'>
          {playerNameField}
          <span className='player-symbol'>{symbol}</span>
        </span>
        <button onClick={handleClick}>{ !isEditing ? "Edit" : "Save" }</button>
      </li>
    );
}