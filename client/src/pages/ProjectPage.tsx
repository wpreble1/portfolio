import React, { FC, ReactElement } from 'react';

import { Project } from '../components/types';

import { LinkButton, LinkText } from '../components';

interface ProjectPageProps {
  project: Project;
}

const ProjectPage: FC<ProjectPageProps> = ({ project }): ReactElement => {
  const { content, title } = project;

  return (
    <div 
      className="p-8 mx-auto"
      style={{ maxWidth: '900px' }}
    >
      {/* Project Title */}
      <h1 className="uppercase text-xl pb-4 font-mono">{title}</h1>

      {/* Link Button */}
      {project.link && <LinkButton link={project.link} />}

      {/* Content */}
      {content.map((section) => {
        return (
          <div>
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
        <div>
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
        <div>
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
    </div>
  );
};

export default ProjectPage;
