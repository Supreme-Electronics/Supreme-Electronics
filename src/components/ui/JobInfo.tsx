import React from 'react';
import { useTranslation } from 'react-i18next';

interface PersonInfo {
  position: string;
  name: string;
  experience: string[];
  currentRoles: string[];
}

interface CollapseListProps {
  people: PersonInfo[];
  primaryColor?: string;
}

const JobInfo: React.FC<CollapseListProps> = ({ people, primaryColor = '#FF8D50' }) => {
  const { t } = useTranslation();
  
  const oddPeople = people.filter((_, index) => index % 2 === 0);
  const evenPeople = people.filter((_, index) => index % 2 !== 0);

  return (
    <div className="grid xl:grid-cols-2 xl:gap-12 mt-12">
      <div className="flex flex-col gap-4">
        {oddPeople.map((person, index) => (
          <div className="collapse collapse-arrow shadow p-4 mb-4 overflow-hidden relative bg-gray-50 " key={index}>
            <input type="checkbox" className="peer" />
            <div className="collapse-title flex">
              <span className="w-32 text-lg">{person.position}</span>
              <span className="ml-4 tracking-widest font-light text-2xl" style={{ color: primaryColor }}>
                {person.name}
              </span>
            </div>
            <div className="collapse-content bg-gray-50">
              <div className="mt-6">
                <p className="mt-2">{t("common.experienceTitle")}</p>
                <ul className="content list-disc pl-8 tracking-wide mt-2">
                  {person.experience.map((item, idx) => (
                    <li key={idx} className="my-1">{item}</li>
                  ))}
                </ul>
                <p className="mt-12">{t("common.currentRolesTitle")}</p>
                <ul className="content list-disc pl-8 tracking-wide mt-2">
                  {person.currentRoles.map((role, idx) => (
                    <li key={idx} className="my-1">{role}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-4 mt-4 xl:mt-0">
        {evenPeople.map((person, index) => (
          <div className="collapse collapse-arrow shadow p-4 mb-4 bg-gray-50 " key={index}>
            <input type="checkbox" />
            <div className="collapse-title flex">
              <span className="w-32 text-lg">{person.position}</span>
              <span className="ml-4 font-light tracking-widest text-2xl" style={{ color: primaryColor }}>
                {person.name}
              </span>
            </div>
            <div className="collapse-content bg-gray-50">
              <div className="mt-6">
                <p>{t("common.experienceTitle")}</p>
                <ul className="content list-disc pl-8 tracking-wide mt-4">
                  {person.experience.map((item, idx) => (
                    <li key={idx} className="my-1">{item}</li>
                  ))}
                </ul>
                <p className="mt-12">{t("common.currentRolesTitle")}</p>
                <ul className="content list-disc pl-8 tracking-wide mt-4">
                  {person.currentRoles.map((role, idx) => (
                    <li key={idx} className="my-1">{role}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobInfo;
