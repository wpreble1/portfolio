import React, { FC, ReactElement, useState, useEffect } from 'react';

interface ProjectListProps {
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

const ProjectList: FC<ProjectListProps> = ({
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

export default ProjectList;