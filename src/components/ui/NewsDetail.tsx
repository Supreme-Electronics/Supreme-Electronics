import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import H1 from "../ui/H1";
import H2 from "../ui/H2";
import P from "../ui/P";
import Img from "../ui/Img";
import Section from "../ui/Section";
import Banner from "../ui/Banner";
import Goal from "../ui/Goal";
import Tab from "../ui/Tab";
import List from "../ui/List";
import DocDownload from "../ui/DocDownload";
import Column from "../ui/Column";
import AuditProcess from "../ui/AuditProcess";
import Quote from "../ui/Quote";
import Note from "../ui/Note";
import Button from "../ui/Button";
import StatDisplay from "../ui/StateDisplay";
import JobInfo from "../ui/JobInfo";
import Table from "../ui/Table";
import SustainbilityJobs from "../ui/SustainbilityJobs";
import MessageFromChairman from "../ui/MessageFromChairman";
import Split from "../ui/Split";
import StepProcess from "../ui/StepProcess";
import KeyTopicsMatrix from "../ui/KeyTopicsMatrix";
import KeyTopicsList from "../ui/KeyTopicList";
import ValueChainTable from "../ui/ValueChainTable";
import ESGSurvey from "../../pages/SurveyPage";
import RiskProcess from "../ui/RiskProcess";
import StackedBarChart from "../ui/StackedBarChart";
import ImageSwiper from "../ui/ImageSwiper";
import HealthyCertification from "../ui/HealthyCertification";
import Card from "../ui/Card";
import Panel from "../ui/Panel";
import IconGrid from "../ui/IconGrid";
import Step from "../ui/Step";
import BarChart from "../ui/BarChart";
import Tree from "../ui/Tree";
import OverviewGrid from "../ui/OverviewGrid";
import NewsList from "../ui/NewsList";

import { useNavigate } from "react-router-dom";
import { faChevronCircleLeft } from "@fortawesome/pro-light-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";

type ComponentType =
  | "H1"
  | "H2"
  | "P"
  | "Img"
  | "Section"
  | "Goal"
  | "Tab"
  | "List"
  | "DocDownload"
  | "Column"
  | "AuditProcess"
  | "Quote"
  | "Note"
  | "Button"
  | "StatDisplay"
  | "JobInfo"
  | "Table"
  | "SustainbilityJobs"
  | "MessageFromChairman"
  | "Split"
  | "StepProcess"
  | "KeyTopicsMatrix"
  | "KeyTopicsList"
  | "ValueChainTable"
  | "ESGSurvey"
  | "RiskProcess"
  | "StackedBarChart"
  | "ImageSwiper"
  | "HealthyCertification"
  | "Card"
  | "Panel"
  | "IconGrid"
  | "Step"
  | "BarChart"
  | "Tree"
  | "OverviewGrid"
  | "NewsList";

interface ComponentConfig {
  type: ComponentType;
  props: any;
}

const componentMap: Record<ComponentType, React.FC<any>> = {
  H1: H1,
  H2: H2,
  P: P,
  Img: Img,
  Section: Section,
  Goal: Goal,
  Tab: Tab,
  List: List,
  DocDownload: DocDownload,
  Column: Column,
  AuditProcess: AuditProcess,
  Quote: Quote,
  Note: Note,
  Button: Button,
  StatDisplay: StatDisplay,
  JobInfo: JobInfo,
  Table: Table,
  SustainbilityJobs: SustainbilityJobs,
  MessageFromChairman: MessageFromChairman,
  Split: Split,
  StepProcess: StepProcess,
  KeyTopicsMatrix: KeyTopicsMatrix,
  KeyTopicsList: KeyTopicsList,
  ValueChainTable: ValueChainTable,
  ESGSurvey: ESGSurvey,
  RiskProcess: RiskProcess,
  StackedBarChart: StackedBarChart,
  ImageSwiper: ImageSwiper,
  HealthyCertification: HealthyCertification,
  Card: Card,
  Panel: Panel,
  IconGrid: IconGrid,
  Step: Step,
  BarChart: BarChart,
  Tree: Tree,
  OverviewGrid: OverviewGrid,
  NewsList: NewsList,
};

interface NewsContent {
  type: string;
  props: any;
}

interface NewsDetailProps {
  id: number;
  title: string;
  thumbnail: string;
  category: string;
  date: string;
  content: NewsContent[];
}

const NewsDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [newsDetail, setNewsDetail] = useState<NewsDetailProps | null>(null);
  const navigate = useNavigate();
  const { i18n, t } = useTranslation();


  useEffect(() => {
    const fileName = i18n.language === "zh_TW" ? "news.json" : "news-en.json";

    import(`../../data/${fileName}`)
      .then((data) => {
        const news = data.default.find(
          (item: { id: number; }) => item.id === Number(id)
        );
        setNewsDetail(news || null);
      })
      .catch((error) => console.error("Error loading news detail:", error));
  }, [id, i18n.language]); 

  if (!newsDetail) return <p>Loading...</p>;

  return (
    <div className="pt-36 ">
      <div className="content-container ">
        <div className=" w-[100%] lg:w-[90%] mx-auto">
          <div
            className="px-2 py-10  lg:p-12 flex items-center group cursor-pointer w-fit text-gray-500"
            onClick={() => navigate(-1)}
          >
            <FontAwesomeIcon
              icon={faChevronCircleLeft}
              className="mr-4 text-3xl text-gray-300 duration-300 group-hover:mr-6 group-hover:scale-105 group-hover:text-orange"
            />
            {t("common.previousPage")}
          </div>
          <div className="bg-white rounded-t-[2rem] py-24 px-8 lg:px-24">
            <h1 className="font-light text-3xl tracking-wide mb-4">
              {newsDetail.title}
            </h1>
            <div className="text-sm tracking-wide text-gray-500 mb-4 flex items-center">
              {newsDetail.date}
              <div className="h-[10px] w-[1px] bg-gray-400 mx-3"></div>{" "}
              <span className="text-orange">{newsDetail.category}</span>
            </div>
            <img
              src={newsDetail.thumbnail}
              className="mt-4 mb-12"
              alt="Thumbnail"
            />
            {newsDetail.content.map((component, index) => {
              const Component = componentMap[component.type as ComponentType];
              return Component ? (
                <Component key={index} {...component.props} />
              ) : null;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetail;
