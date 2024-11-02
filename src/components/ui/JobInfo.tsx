import React from 'react';

interface PersonInfo {
  position: string;
  name: string;
  experience: string[];
  currentRoles: string[];
}

interface CollapseListProps {
  people: PersonInfo[];
}

const JobInfo: React.FC<CollapseListProps> = ({ people }) => {
  const oddPeople = people.filter((_, index) => index % 2 === 0);
  const evenPeople = people.filter((_, index) => index % 2 !== 0);

  return (
    <div className="grid xl:grid-cols-2 xl:gap-12 mt-12">
      <div className="flex flex-col gap-4">
        {oddPeople.map((person, index) => (
          <div className="collapse collapse-arrow shadow p-4 mb-4 overflow-hidden relative bg-gray-50 " key={index}>
            <input type="checkbox"  className="peer" />
            {/* <div className='absolute top-0 left-0 w-full h-[80px] peer-checked:bg-blue duration-300'></div> */}
            <div className="collapse-title flex">
              <span className="w-32 text-lg">{person.position}</span>
              <span className="ml-4 tracking-widest font-light text-2xl  text-orange">
                {person.name}
              </span>
            </div>
            <div className="collapse-content bg-gray-50 ">
              <div className="mt-6">
                <p className='mt-2'>主要經（學）歷：</p>
                <ul className="content list-disc pl-8 tracking-wide mt-2">
                  {person.experience.map((item, idx) => (
                    <li key={idx} className='my-1'>{item}</li>
                  ))}
                </ul>
                <p className="mt-12">目前兼任本公司及其他公司之職務：</p>
                <ul className="content list-disc pl-8 tracking-wide mt-2">
                  {person.currentRoles.map((role, idx) => (
                    <li key={idx} className='my-1'>{role}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-4 mt-4 xl:mt-0">
        {evenPeople.map((person, index) => (
          <div className="collapse collapse-arrow shadow p-4 mb-4  bg-gray-50 " key={index}>
            <input type="checkbox" />
            <div className="collapse-title flex">
              <span className="w-32 text-lg">{person.position}</span>
              <span className="ml-4 text-orange font-light tracking-widest text-2xl">
                {person.name}
              </span>
            </div>
            <div className="collapse-content bg-gray-50">
              <div className="mt-6">
                <p>主要經（學）歷：</p>
                <ul className="content list-disc pl-8 tracking-wide mt-4">
                  {person.experience.map((item, idx) => (
                    <li key={idx} className='my-1'>{item}</li>
                  ))}
                </ul>
                <p className="mt-12">目前兼任本公司及其他公司之職務：</p>
                <ul className="content list-disc pl-8 tracking-wide mt-4">
                  {person.currentRoles.map((role, idx) => (
                    <li key={idx} className='my-1'>{role}</li>
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
