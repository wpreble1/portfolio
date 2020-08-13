import React, { FC, ReactElement, useState, useEffect } from 'react';

interface ProjectPageProps {
  user: {
    id: number,
    nameFirst: string,
    nameLast: string,
    username: string,
    email: string,
    avatar: string,
    googleId: string,
  };
}

const ProjectPage: FC<ProjectPageProps> = ({
  user,
}): ReactElement => {
  const [example, setExample] = useState();

  useEffect(() => {
  });

  return (
    <div className="">
      {user}
    </div>
  );
};

export default ProjectPage;
