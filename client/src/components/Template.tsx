import React, { FC, ReactElement, useState, useEffect } from 'react';

interface TemplateProps {
}

const Template: FC<TemplateProps> = (): ReactElement => {
  const [example, setExample] = useState();

  useEffect(() => {
  });

  return (
    <div className="">
    </div>
  );
};

export default Template;
