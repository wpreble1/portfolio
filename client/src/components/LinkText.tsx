import React, { FC, ReactElement } from 'react';

interface LinkTextProps {
  link: string;
  text: string;
}

const LinkText: FC<LinkTextProps> = ({
  link,
  text,
}): ReactElement => {
  return (
    <li>
      <a className="" href={link} target="_blank" rel="noreferrer">{text}</a>
    </li>
  );
};

export default LinkText;
