import {
  faComment,
  faRecycle,
  faBalanceScale,
  faExclamationTriangle,
  faEye,
  faFolderOpen,
  faFileSignature,
  faLock,
  faDatabase,
  faFileInvoice,
  faFingerprint,
  faHandshake,
  faUserCheck,
  faBatteryFull,
  faCloud,
  faCogs,
  faHeartbeat,
  faMicrochip,
  faWifi,
  faChalkboardUser,
  faUserTieHair,
  faUserGroup,
  faBuilding,
  faBook,
  faUserTie,
  faRankingStar,
  faAmbulance,
  faChalkboardTeacher,
  faFileMedical

} from "@fortawesome/pro-light-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

const stepsData = {
  keyTopics: [
    {
      icon: faComment,
      step: "Step 1",
      title: "鑑別溝通對象",
      text: "依循AA1000SES利害關係人議合原則 （ AA1000 Stakeholder EngagementStandard）的五個面向：影響力、關注度、責任、依賴度和多元觀點，向至上電子全體同仁(含管理層) 發送利害關係人鑑別問卷，統計結果經公司核定後，依重要性歸類為6類利害關係人群體：客戶、員工、股東/投資人、供應商與承攬商、政府與主管機關、非營利組織/社區。",
    },
    {
      icon: faRecycle,
      step: "Step 2",
      title: "蒐集永續議題",
      text: "參考GRI、SASB、TCFD等國際永續準則、聯合國永續發展目標（SDGs）及國內外同業永續報告書與產業關注之主題，由永續發展委員會-執行小組進行各項議題之討論與鑑別，並諮詢外部顧問，彙整出至上電子2023年永續議題清單，共23項永續議題。",
    },
    {
      icon: faBalanceScale,
      step: "Step 3",
      title: "評估衝擊",
      text: "由內部管理階層對公司的利害關係人、內部單位主管及高層進行《永續議題衝擊評估問卷調查》，針對各項永續議題對經濟、環境和社會造成之實際及潛在的正負面衝擊之發生機率與規模進行評估。負面衝擊：依嚴重性、發生可能性進行評估，並考量議題的負面人權衝擊。正面衝擊：依影響規模與範疇大小、發生可能性進行評估。",
    },
    {
      icon: faExclamationTriangle,
      step: "Step 4",
      title: "衝擊顯著性排序",
      text: "彙整問卷調查結果，正面與負面衝擊得分加總，依分數高低將各項議題按照衝擊顯著性排序。內部管理階層討論排序結果，進行等權分析，考量產業重大議題、國際趨勢、並參考外部顧問意見，設定重大主題門檻值，初步擬定「經營績效」、「資訊安全」、「誠信經營」、「產品與客戶服務」、「風險管理」、「氣候變遷對策及溫室氣體管理/能源管理」、「公司治理」、「人才培育與留任」、「勞雇/勞資關係」，共9項永續議題為2023年度重大主題，並呈報最高治理單位-董事會。",
    },
    {
      icon: faEye,
      step: "Step 5",
      title: "確認及揭露重大主題",
      text: "董事會再次檢視、檢驗所鑑別之重大主題及門檻標準之合適性，確認應優先報導之重大主題未有疏漏、不足處，以確保其完整、包容、宏觀性及與本公司永續發展策略的一致程度。董事會核准確立上述9項重大主題，內部管理階層進一步討論確認該等重大主題對於本公司內外應考量之邊界範圍，確保重要的永續資訊已於報告書中完整揭露。內部管理階層依據重大主題報導要求於本報告書說明相關因應策略、管理行動、指標及目標等內容，確保報告書允當且忠實表達公司ESG落實情形。",
    },
  ],
  intellectualProperty: [
    {
      icon: faFolderOpen,
      step: "Step 1",
      title: "成案",
      text: "由研發、法務、業務及其他相關人員共同分析研擬，確認專利價值及申請之必要性後，送研發會議討論後決行，並記錄於會議紀錄中。",
    },
    {
      icon: faFileSignature,
      step: "Step 2",
      title: "申請",
      text: "由研發部人員擬具專利佈局規劃，並負責專利之申請、答辯及維護。必要時，由研發、法務人員與專利事務所接洽，討論智慧財產相關事宜，並由法務、業務人員與客戶溝通，研發人員從旁協助。上述發明、新型或設計，於未申請獲准專利前，所有接觸該發明或創作之工作人員，就與該發明或創作有關之資料均應負保密義務。",
    },
    {
      icon: faLock,
      step: "Step 3",
      title: "保管、訴訟及維護",
      text: "研發人員應妥善保存智慧財產權研發過程之報告或紀錄，作為智慧財產權爭訟時之舉證資料，各該報告或紀錄之管理方法由研發部門依其性質訂定。本公司所有之智慧財產權遭第三人提出異議、無效或法律爭訟程序時，該智慧財產權之開發人員應協助公司進行合法防禦，如係遭他人侵權之案件，亦應協助公司進行侵害可能性之鑑定工作，以確保本公司及利害關係人之合法權益。專利證書由研發部門負責保管及每年專利維護。",
    },
  ],
  supplyChain: [
    {
      icon: faUserCheck,
      step: "",
      title: "供應商遴選",
      text: "對於新供應商之遴選,除應慎選信譽良好之廠商外,尚應考量其產品品質、財務狀況、價格、供貨數量、環保議題、勞工安全與衛生等各面向進行評核。",
    },
    {
      icon: faFingerprint,
      step: "",
      title: "供應商鑑別",
      text: "(1)對供應商進行間接環境考量面鑑別。(2)評估供應商是否有影響環境與社會之紀錄。",
    },
    {
      icon: faFileInvoice,
      step: "",
      title: "供應商新增及異動",
      text: "於新增供應商時，應由業務部填寫「供應商基本資料表」，經權責主管核准後，再由業務後勤部至系統建立供應商基本資料；資料有異動時，及時更新供應商資料。",
    },
    {
      icon: faHandshake,
      step: "",
      title: "重要採購",
      text: "本公司係與選定之供應商進行長期合作，與其簽訂代理業務合約以保障自身之代理權。與之簽訂之合約或協議，均須符合內稽內控之流程，經權責主管及法務人員覆核後始簽訂，並由風險管理部妥善保管合約或交易協議。",
    },
    {
      icon: faDatabase,
      step: "",
      title: "供應商資本資料維護",
      text: "供應商資料有異動時，及時更新供應商資料。",
    },
  ],
  productCustomerService: [
    {
      icon: faCogs,
      step: "",
      title: "解決方案及通路",
      text: "提供全面的解決方案及行銷通路。",
    },
    {
      icon: faBatteryFull,
      step: "",
      title: "新能源/BMS",
      text: "專注於新能源技術及電池管理系統的開發。",
    },
    {
      icon: faMicrochip,
      step: "",
      title: "IC設計/光電科技",
      text: "提升產品與服務，供應下游廠商在IC設計及光電技術的研發和應用。",
    },
    {
      icon: faWifi,
      step: "",
      title: "物聯網/智能載具",
      text: "因應物聯網及智能載具的創新和整合，為下游廠商提供全面與高效服務。",
    },
    {
      icon: faHeartbeat,
      step: "",
      title: "大健康",
      text: "推動智慧生物醫療及人工智慧即時檢測技術的研發。",
    },
    {
      icon: faCloud,
      step: "",
      title: "大數據/雲計算/雲服務",
      text: "快速回應市場需求，為客戶提供高效能的數據處理方案。",
    },
  ],
  diverseGrowthCultivation: [
    {
      icon: faChalkboardUser,
      step: "",
      title: "教育訓練",
      text: "注重「標竿學習」的精神，以開放接納的胸襟，盡情學習產業內外最佳的經驗、共通技術流程指導、管理經驗技巧教授及產品/服務發展趨勢，使學習充分發揮效益於策略目標之達成。",
    },
    {
      icon: faUserGroup,
      step: "",
      title: "良師益友",
      text: "強調「輔助教育」的精神，針對各自不同的專業領域，透過資深及專業能手加強對業務需求的深度教導及諮詢，縮短差異化及學習歷程。",
    },
    {
      icon: faUserTieHair,
      step: "",
      title: "專家養成",
      text: "強調「深度發展」的精神，透過職能發展，協助同仁不斷的在專業上自我成長，以提昇工作績效，並推動公司的整體競爭優勢。",
    }
  ],
  diverseGrowthLecture: [
    {
      icon: faBuilding,
      step: "",
      title: "文化發展",
      text: "強調組織價值觀、企業文化和倫理道德的培養，確立員工對組織的認同感，並促進積極的工作態度和合作精神。",
    },
    {
      icon: faBook,
      step: "",
      title: "職能發展",
      text: "提升員工專業領域技能和知識，確保員工得以勝任並不斷進步。",
    },
    {
      icon: faUserTie,
      step: "",
      title: "主管培育",
      text: "針對管理階層人才，培育領導能力、人際關係和決策技能。",
    },
    {
      icon: faRankingStar,
      step: "",
      title: "競爭力發展",
      text: "協助員工提升職場能力和競爭力。",
    }
  ],
  riskManagement:[
    {
      icon: faAmbulance, 
      step: "Step 1",
      title: "緊急送醫支援", 
      text: "事故發生時，及時協助受傷者送醫。"
    },
    {
      icon: faFileMedical, 
      step: "Step 2",
      title: "勞保及團保申請協助", 
      text: "協助申請勞保給付及團保給付。"
    },
    {
      icon: faExclamationTriangle, 
      step: "Step 3",
      title: "事故原因檢討與預防", 
      text: "檢討事故發生原因並預防類似情況發生。"
    },
    {
      icon: faChalkboardTeacher, 
      step: "Step 4",
      title: "職災預防教育訓練", 
      text: "製作案例並對員工實施職災預防教育訓練。"
    },

  ]
};

interface KeyTopicsProcessProps {
  type: keyof typeof stepsData;
}

const StepProcess: React.FC<KeyTopicsProcessProps> = ({ type }) => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });
  const steps = stepsData[type];

  return (
    <div ref={containerRef} className="flex flex-col gap-6 mt-12">
      {steps.map((item, index) => (
        <motion.div
          key={index}
          className="flex items-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
          transition={{ delay: index * 0.2, duration: 0.5 }}
        >
          <div className="lg:flex hidden h-[100px] w-[100px] min-w-[100px] rounded-full bg-orange text-white flex-col gap-2 items-center justify-center relative">
            <FontAwesomeIcon icon={item.icon} className="text-4xl" />
          </div>
          <div className="hidden lg:block h-[1px] w-[40px] min-w-[40px] bg-orange"></div>
          <div className="bg-gray-50 p-8 flex-grow relative">
            <p className="text-[1.2rem] mb-3 font-light tracking-wide leading-7 text-justify text-gray-600 flex items-center gap-4">
              {item.step && (
                <span className="text-sm text-orange">{item.step}</span>
              )}
              <FontAwesomeIcon
                icon={item.icon}
                className="text-2xl text-orange lg:hidden"
              />
              {item.title}
            </p>
            <p className="text-[1rem] tracking-wide leading-7 text-justify text-gray-600">
              {item.text}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default StepProcess;
