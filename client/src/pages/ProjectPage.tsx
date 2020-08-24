import React, { FC, ReactElement } from 'react';
import { Link } from 'react-router-dom';

import { Project } from '../components/types';

import { LinkButton, LinkText } from '../components';

interface ProjectPageProps {
  project: Project;
}

const ProjectPage: FC<ProjectPageProps> = ({ project }): ReactElement => {
  const { content, title } = project;

  return (
    <div
      className="mx-auto section lg:p-0"
    >
      {/* Content */}
      {content.map((section, index) => {
        if (index === 0) {
          return (
            <div className="">
              <img
                className="mx-auto w-full object-cover"
                style={{ minWidth: '300px', height: '100vh' }}
                src={section.imageSrc as string}
                alt={section.alt as string}
              />
              <div className="wrapper">
                <div className="flex justify-between items-baseline">
                  <h1 className="uppercase text-xl font-sans pt-4 inline-block">{title}</h1>
                  {/* Link Button */}
                  <div className="inline-block">
                    {project.link && <LinkButton link={project.link} />}
                  </div>
                </div>
                {section.text && <p className="block">{section.text}</p>}
              </div>
            </div>
          );
        }
        return (
          <div className="wrapper">
            {section.text && <p>{section.text}</p>}
            {section.imageSrc && (
              <img
                className="mx-auto"
                style={{ maxWidth: '750px', minWidth: '300px' }}
                src={section.imageSrc as string}
                alt={section.alt as string}
              />
            )}
          </div>
        );
      })}

      {/* Collaborator Links */}
      {project.collaborators && (
        <div className="wrapper">
          <h2 className="uppercase">Collaborators</h2>
          {Object.keys(project.collaborators).map((name) => {
            return (
              <LinkText
                link={
                  (project.collaborators as { [key: string]: string })[name]
                }
                text={name}
              />
            );
          })}
        </div>
      )}

      {/* Press Links */}
      {project.press && (
        <div className="wrapper">
          <h2 className="uppercase py-2">Press</h2>
          <ul>
            {Object.keys(project.press).map(story => {
              return (
                <LinkText
                  link={(project.press as { [key: string]: string })[story]}
                  text={story}
                />
              );
            })}
          </ul>
        </div>
      )}
      {/* <div className="footer-feature">
        <p className="text-xs left-align">Featured Project</p>
        <Link to="/up-close"><p className="text-xl left-align">Up Close</p></Link>
      </div> */}
    </div>
  );
};

export default ProjectPage;
