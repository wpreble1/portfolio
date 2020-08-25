import React, { FC, ReactElement } from 'react';

import { Project } from '../components/types';

import { LinkButton, LinkText, Slideshow } from '../components';

interface ProjectPageProps {
  project: Project;
}

const ProjectPage: FC<ProjectPageProps> = ({ project }): ReactElement => {
  const { content, cover, title } = project;

  return (
    <div className="mx-auto pt-16 px-6 pb-6 lg:p-0">
      {/* Full bleed cover photo */}
      {cover.fullscreen && (
      <div>
        <img
          className="mx-auto w-full object-cover"
          style={{ minWidth: '300px', height: '100vh' }}
          src={cover.imageSrc as string}
          alt={cover.alt as string}
        />
      </div>
      )}
      <div className="h-full lg:mx-40">
        <div className="lg:mx-12 lg:pt-24">
          {/* Standard cover photo */}
          {!cover.fullscreen && typeof cover.imageSrc === 'string' && (
            <img
              className="mx-auto"
              style={{ minWidth: '300px' }}
              src={cover.imageSrc as string}
              alt={cover.alt as string}
            />
          )}
          {/* Cover photo slideshow */}
          {!cover.fullscreen && Array.isArray(cover.imageSrc) && (
            <Slideshow images={cover.imageSrc} alt={cover.alt} />
          )}

          {/* Title and Link */}
          <div className="flex justify-between items-baseline">
            <h1 className="uppercase text-xl font-sans pt-4 inline-block">{title}</h1>
            <div className="inline-block">
              <div className="inline-block mr-4">
                {project.link && <LinkButton type="link" link={project.link} />}
              </div>
              <div className="inline-block">
                {project.github && <LinkButton type="github" link={project.github} />}
              </div>
            </div>
          </div>

          {/* Content - Images and Text */}
          {content.map((section) => (
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
          ))}

          {/* Collaborator Links */}
          {project.collaborators && (
            <div className="pt-4">
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
            <div className="pt-4">
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
      </div>
      {/* <div className="footer-feature">
        <p className="text-xs left-align">Featured Project</p>
        <Link to="/up-close"><p className="text-xl left-align">Up Close</p></Link>
      </div> */}
    </div>
  );
};

export default ProjectPage;
