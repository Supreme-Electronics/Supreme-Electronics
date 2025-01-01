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

  // 按照一半分割資料
  const middleIndex = Math.ceil(people.length / 2);
  const leftColumn = people.slice(0, middleIndex);
  const rightColumn = people.slice(middleIndex);

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 xl:gap-12 mt-12">
      {/* 左側 */}
      <div className="flex flex-col gap-4">
        {leftColumn.map((person, index) => (
          <div
            className="collapse collapse-arrow shadow p-4 mb-4 bg-gray-50"
            key={`left-${index}`}
          >
            <input type="checkbox" className="peer" />
            <div className="collapse-title flex">
              <span className="w-32 text-lg">{person.position}</span>
              <span
                className="ml-4 tracking-widest font-light text-2xl"
                style={{ color: primaryColor }}
              >
                {person.name}
              </span>
            </div>
            <div className="collapse-content bg-gray-50">
              <div className="mt-6">
                <p className="mt-2">{t("common.experienceTitle")}</p>
                <ul className="content list-disc pl-8 tracking-wide mt-2">
                  {person.experience.map((item, idx) => (
                    <li key={idx} className="my-1">
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-12">{t("common.currentRolesTitle")}</p>
                <ul className="content list-disc pl-8 tracking-wide mt-2">
                  {person.currentRoles.map((role, idx) => (
                    <li key={idx} className="my-1">
                      {role}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 右側 */}
      <div className="flex flex-col gap-4">
        {rightColumn.map((person, index) => (
          <div
            className="collapse collapse-arrow shadow p-4 mb-4 bg-gray-50"
            key={`right-${index}`}
          >
            <input type="checkbox" className="peer" />
            <div className="collapse-title flex">
              <span className="w-32 text-lg">{person.position}</span>
              <span
                className="ml-4 tracking-widest font-light text-2xl"
                style={{ color: primaryColor }}
              >
                {person.name}
              </span>
            </div>
            <div className="collapse-content bg-gray-50">
              <div className="mt-6">
                <p className="mt-2">{t("common.experienceTitle")}</p>
                <ul className="content list-disc pl-8 tracking-wide mt-2">
                  {person.experience.map((item, idx) => (
                    <li key={idx} className="my-1">
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-12">{t("common.currentRolesTitle")}</p>
                <ul className="content list-disc pl-8 tracking-wide mt-2">
                  {person.currentRoles.map((role, idx) => (
                    <li key={idx} className="my-1">
                      {role}
                    </li>
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
