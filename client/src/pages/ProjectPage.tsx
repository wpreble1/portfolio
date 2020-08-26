import React, { FC, ReactElement, useEffect } from 'react';
import { v4 as uuid } from 'uuid';

import { Project } from '../components/types';

import { LinkButton, LinkText, Slideshow, TechStack } from '../components';

interface ProjectPageProps {
  project: Project;
  setFullCover: any;
}

const ProjectPage: FC<ProjectPageProps> = ({ project, setFullCover }): ReactElement => {
  const { content, cover, title } = project;

  useEffect(() => {
    setFullCover(!!project.cover.fullscreen);
  }, []);

  return (
    <div className="mx-auto pt-16 px-6 mb-8 lg:p-0">
      {/* Full bleed cover photo */}
      {cover.fullscreen && (
      <div>
        <img
          className="mx-auto w-full object-cover lg:max-h-screen"
          style={{ minWidth: '300px' }}
          src={cover.imageSrc as string}
          alt={cover.alt as string}
        />
      </div>
      )}

      <div className="h-full lg:mx-40">
        <div className={`lg:mx-12 ${project.cover.fullscreen ? '' : 'lg:pt-24'}`}>
          {/* Standard cover photo */}
          {!cover.fullscreen && typeof cover.imageSrc === 'string' && (
            <img
              className="mx-auto w-full"
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
            <h1 className="uppercase text-xl font-sans pt-8 inline-block">{title}</h1>
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
            <div key={uuid()}>
              {section.text && <p className="my-8 lg:text-lg">{section.text}</p>}
              {section.imageSrc && (
                <img
                  className="mx-auto max-h-screen mx-8 pt-8 shadow-md"
                  style={{ minWidth: '300px' }}
                  src={section.imageSrc as string}
                  alt={section.alt as string}
                />
              )}
            </div>
          ))}

          {/* Tech Stack */}
          {project.techs && <TechStack techs={project.techs} />}

          {/* Collaborator Links */}
          {project.collaborators && (
            <div className="pt-4">
              <h2 className="uppercase py-1">Collaborators</h2>
              <ul className="list-none">
                {Object.keys(project.collaborators).map((name) => {
                  return (
                    <LinkText
                      link={
                        (project.collaborators as { [key: string]: string })[name]
                      }
                      text={name}
                      key={uuid()}
                    />
                  );
                })}
              </ul>
            </div>
          )}

          {/* Press Links */}
          {project.press && (
            <div className="pt-4">
              <h2 className="uppercase py-1">Press</h2>
              <ul className="list-none">
                {Object.keys(project.press).map(story => {
                  return (
                    <LinkText
                      key={uuid()}
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
