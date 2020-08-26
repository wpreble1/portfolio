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
    <li className="px-4">
      <a className="text-sm hover:text-purple" href={link} target="_blank" rel="noreferrer noopener">{text}</a>
    </li>
  );
};

export default LinkText;
