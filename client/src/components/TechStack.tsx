import React, { FC, ReactElement } from 'react';

import {
  Arduino,
  CPlusPlus,
  ExpressTech,
  GCP,
  JavaScript,
  MySQL,
  Node,
  ReactRouter,
  ReactTech,
  Sequelize,
  Tailwind,
  TypeScript,
  Vue,
} from '../techs';

interface TechStackProps {
  techs: string[];
}

interface TechProps {
  classes: string;
}

const TechStack: FC<TechStackProps> = ({ techs }): ReactElement => {
  const techLookup: {[key: string]: FC<TechProps>} = {
    Arduino,
    CPlusPlus,
    ExpressTech,
    GCP,
    JavaScript,
    MySQL,
    Node,
    ReactRouter,
    ReactTech,
    Sequelize,
    Tailwind,
    TypeScript,
    Vue,
  };

  return (
    <div className="">
      <h1 className="uppercase text-md">Tech Stack</h1>
      <div className="mx-auto">
        {techs.map(tech => {
          const Tech = techLookup[tech];
          return <Tech classes="w-24 h-24 inline-block p-4" />;
        })}
      </div>
    </div>
  );
};

export default TechStack;
