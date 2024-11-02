import React, { useEffect, useState } from "react";
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
import BoardCapabilities from "../ui/BoardCapabilities";
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
  | "BoardCapabilities"
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

interface ComponentConfig {
  type: ComponentType;
  props: any;
}

interface PageConfig {
  title: string;
  background: string;
  components: ComponentConfig[];
}

interface PageRendererProps {
  pageName: string;
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
  BoardCapabilities: BoardCapabilities,
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
  HealthyCertification: HealthyCertification
};

const PageRenderer: React.FC<PageRendererProps> = ({ pageName }) => {
  const [pageConfig, setPageConfig] = useState<PageConfig | null>(null);

  useEffect(() => {
    import(`../../data/pages/${pageName}.json`)
      .then((module) => setPageConfig(module.default))
      .catch((error) => console.error("Error loading page config:", error));
  }, [pageName]);

  if (!pageConfig) return <p>Loading...</p>;

  const renderComponent = (component: ComponentConfig, index: number) => {
    const Component = componentMap[component.type];
    if (!Component) return null;

    if (component.type === "Section" && component.props?.components) {
      return (
        <Component key={index} {...component.props}>
          {component.props.components.map(
            (child: ComponentConfig, idx: number) => renderComponent(child, idx)
          )}
        </Component>
      );
    }

    if (component.type === "Column" && component.props?.components) {
      return (
        <Column
          key={index}
          columns={component.props.columns}
          position={component.props.position}
        >
          {component.props.components.map(
            (child: ComponentConfig, idx: number) => renderComponent(child, idx)
          )}
        </Column>
      );
    }

    if (component.type === "Tab") {
      const tabs = component.props.tabs as Record<string, ComponentConfig[]>;
      return (
        <Tab
          key={index}
          categories={component.props.categories}
          tabColor={component.props.tabColor}
          icons={component.props.icons}
        >
          {Object.entries(tabs).map(([category, components]) => (
            <div key={category} data-category={category}>
              {components.map((childComponent, childIndex) =>
                renderComponent(childComponent, childIndex)
              )}
            </div>
          ))}
        </Tab>
      );
    }
    if (component.type === "Split") {
      const { leftChildren, rightChildren } = component.props;
      return (
        <Split
          key={index}
          leftChildren={leftChildren.map(
            (child: ComponentConfig, idx: number) => renderComponent(child, idx)
          )}
          rightChildren={rightChildren.map(
            (child: ComponentConfig, idx: number) => renderComponent(child, idx)
          )}
        />
      );
    }

    return <Component key={index} {...component.props} />;
  };

  return (
    <div className="pb-36">
      <Banner
        title={pageConfig.title}
        backgroundImage={pageConfig.background}
      />
      {pageConfig.components.map((component, index) =>
        renderComponent(component, index)
      )}
    </div>
  );
};

export default PageRenderer;
