import React from 'react';

// function component: FC
// generic = tipo do ts que pode receber um parâmetro

// estamos criando um formato pras props desse reader
// ?: não obrigatório
interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = (props) => {
  return (
    <header>
      <h1>{props.title}</h1>
    </header>
  )
}

export default Header;