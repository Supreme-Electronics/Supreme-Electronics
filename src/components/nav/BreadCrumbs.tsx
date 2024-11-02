import { faChevronRight } from '@fortawesome/pro-solid-svg-icons';
import { faHouse } from '@fortawesome/pro-light-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

type NavItem = {
  title: string;
  link: string;
  dropdown?: NavItem[];
  children?: NavItem[];
};

type BreadcrumbsProps = {
  items: NavItem[];
};

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);
  const { t } = useTranslation();

  const findBreadcrumbs = (items: NavItem[], pathnames: string[], breadcrumbPath: NavItem[] = []): NavItem[] => {
    for (const item of items) {
      if (item.link === `/${pathnames.join('/')}`) {
        return [...breadcrumbPath, item];
      }
      if (item.dropdown) {
        const found = findBreadcrumbs(item.dropdown, pathnames, [...breadcrumbPath, item]);
        if (found.length) return found;
      }
      if (item.children) {
        const found = findBreadcrumbs(item.children, pathnames, [...breadcrumbPath, item]);
        if (found.length) return found;
      }
    }
    return [];
  };

  const breadcrumbs = findBreadcrumbs(items, pathnames);

  return (
    <nav aria-label="breadcrumb ">
      <ol className="flex">
        <li className='h-[35px] w-[35px] duration-300 flex items-center justify-center rounded-full   hover:text-orange'>
          <Link to="/"><FontAwesomeIcon icon={faHouse} className=' ' /></Link>
        </li>
        {breadcrumbs.map((crumb, index) => (
          <li key={index} className="flex items-center tracking-widest font-light text-sm lg:text-[1rem]">
            <span className="mx-4"><FontAwesomeIcon icon={faChevronRight} className='text-gray-300' /></span>
            {index === breadcrumbs.length - 1 ? (
              <span className=''>{t(crumb.title)}</span>
            ) : (
              <Link to={crumb.link} className='duration-300 hover:text-orange'>{t(crumb.title)}</Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
