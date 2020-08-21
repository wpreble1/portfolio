import React, { FC, ReactElement } from 'react';

interface LinkButtonProps {
  link: string;
}

const LinkButton: FC<LinkButtonProps> = ({ link }): ReactElement => {
  return (
    <a className="uppercase" href={link} target="_blank" rel="noreferrer">Live Site</a>
  );
};

export default LinkButton;
