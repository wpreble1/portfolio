import React, { FC, ReactElement } from 'react';

interface LinkButtonProps {
  link: string;
  type: 'github' | 'link';
}

const LinkButton: FC<LinkButtonProps> = ({ link, type }): ReactElement => {
  return (
    <a
      className="uppercase left-underline"
      href={link}
      target="_blank"
      rel="noreferrer noopener"
    >
      {type === 'link' ? 'Link' : 'Code'}
    </a>
  );
};

export default LinkButton;
