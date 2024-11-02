import {
  faChartPie,
  faChevronRight,
  faGavel,
  faTruck,
  faUserFriends,
  faUsers,
} from "@fortawesome/pro-light-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import List from "./List";
import { faHandsHelping } from "@fortawesome/pro-light-svg-icons";

interface GoalTableProps {
  goals: string[];
  children: React.ReactNode;
  icons: React.ReactNode[];
  tabColor?: string;
}

const SideTabWithIcon: React.FC<GoalTableProps> = ({
  goals,
  children,
  icons,
  tabColor = "#FF8D50",
}) => {
  const [selectedGoal, setSelectedGoal] = useState(goals[0]);

  return (
    <div className="mt-[50px] flex gap-8">
      <div className="flex flex-col w-[25%] gap-4">
        {goals.map((goal, index) => (
          <div
            key={goal}
            onClick={() => setSelectedGoal(goal)}
            className={`relative w-full  tracking-wide py-2 cursor-pointer group duration-300  hover:bg-gray-100 hover:-translate-x-2 p-2 rounded-xl `}
            style={{
              color: selectedGoal === goal ? tabColor : "#D9D9D9",
            }}
          >
            <span className="relative z-10 flex items-center gap-6">
              <div className="min-w-[55px] items-center justify-center flex">
                {icons[index]}
              </div>
              <p className="text-md">{goal}</p>
              <FontAwesomeIcon
                icon={faChevronRight}
                className="absolute right-0 top-1/2 -translate-y-1/2"
                style={{
                  color: selectedGoal === goal ? tabColor : "transparent",
                }}
              />
            </span>
          </div>
        ))}
      </div>
      <div className="tracking-wide w-[75%]">
        <AnimatePresence mode="wait">
          {React.Children.map(children, (child) =>
            React.isValidElement(child) &&
            child.props["data-goal"] === selectedGoal ? (
              <motion.div
                key={selectedGoal}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {child}
              </motion.div>
            ) : null
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

const StackHolderPanel: React.FC = () => {
  const icons = [
    <FontAwesomeIcon icon={faUserFriends} className="w-[40px] h-fit" />,
    <FontAwesomeIcon icon={faTruck} className="w-[40px] h-fit" />,
    <FontAwesomeIcon icon={faUsers} className="w-[40px] h-fit" />,
    <FontAwesomeIcon icon={faChartPie} className="w-[40px] h-fit" />,
    <FontAwesomeIcon icon={faGavel} className="w-[40px] h-fit" />,
    <FontAwesomeIcon icon={faHandsHelping} className="w-[40px] h-fit" />,
  ];

  const goals = [
    "客戶",
    "供應商",
    "員工",
    "投資人 / 股東",
    "政府與主管機關",
    "非營利組織 / 社區",
  ];
  return (
    <SideTabWithIcon goals={goals} icons={icons} tabColor="">
      <div data-goal="客戶">
        <div className="grid grid-cols-2 bg-orange-light bg-opacity-40 rounded-[20px] border border-orange p-8">
          <div className="border-r border-orange pr-8">
            <p className="border-b border-orange pb-4 font-semibold text-orange">
              說明
            </p>
            <p className="py-8">
              「客戶至上」是公司經營理念之一，我們傾聽客戶需要、致力於提供優質且高品質的產品與掌握產業趨勢並提供專業服務，與客戶攜手共創永續未來。
            </p>

            <p className="border-b border-orange pb-4 font-semibold text-orange">
              溝通方式
            </p>
            <List
              items={[
                { label: "電話、電子郵件" },
                { label: "檢討會議" },
                {
                  label:
                    "設置業務後勤單位，由專人處理相關申訴或爭議事項，以保障客戶之權益",
                },
              ]}
            />

            <p className="border-b border-orange pb-4 font-semibold text-orange mt-12">
              頻率
            </p>

            <List items={[{ label: "即時" }, { label: "每週" }]} />
          </div>
          <div className="ml-8">
            <p className="border-b border-orange pb-4 font-semibold text-orange ">
              關注議題
            </p>
            <List items={[{ label: "產品品質" }, { label: "價格/交期" }]} />

            <p className="border-b border-orange pb-4 font-semibold text-orange mt-12">
              利害關係人溝通實績
            </p>
            <List
              items={[
                { label: "積極依客戶產品發展需求提供完整且即時的技術支援" },
                { label: "積極協助處理客戶申訴或爭議事項" },
                { label: "選擇財務體質健全之客戶" },
              ]}
            />
          </div>
        </div>
      </div>
      <div data-goal="政府與主管機關">
        <div className="grid grid-cols-2 bg-orange-light bg-opacity-40 rounded-[20px] border border-orange p-8">
          <div className="border-r border-orange pr-8">
            <p className="border-b border-orange pb-4 font-semibold text-orange">
              說明
            </p>
            <p className="py-8">
              除遵循政府機關相關規範、主動積極配合政策施行，與相關政府單位亦保持有效暢通的溝通管道，掌握最新法規趨勢，避免誤觸法網、確保公司穩健運營。
            </p>
            <p className="border-b border-orange pb-4 font-semibold text-orange">
              溝通方式
            </p>
            <List
              items={[
                { label: "公司網站" },
                { label: "公開資訊觀測站" },
                { label: "股東會年報" },
                { label: "永續報告書" },
                { label: "參與主管機關宣導會議" },
              ]}
            />
            <p className="border-b border-orange pb-4 font-semibold text-orange mt-12">
              頻率
            </p>
            <List
              items={[
                { label: "即時" },
                { label: "不定期" },
                { label: "每年一次" },
              ]}
            />
          </div>
          <div className="ml-8">
            <p className="border-b border-orange pb-4 font-semibold text-orange ">
              關注議題
            </p>
            <List
              items={[
                { label: "報導具可靠性" },
                { label: "及時性" },
                { label: "透明性" },
                { label: "符合相關規範" },
                { label: "法令規章之遵循" },
              ]}
            />
            <p className="border-b border-orange pb-4 font-semibold text-orange mt-12">
              利害關係人溝通實績
            </p>

            <List
              items={[
                { label: "違反法令遭處份事件：0" },
                { label: "發布年度永續報告書" },
                { label: "董事／經理人法令宣導：5次" },
              ]}
            />
          </div>
        </div>
      </div>
      <div data-goal="員工">
        <div className="grid grid-cols-2 bg-orange-light bg-opacity-40 rounded-[20px] border border-orange p-8">
          <div className="border-r border-orange pr-8">
            <p className="border-b border-orange pb-4 font-semibold text-orange">
              說明
            </p>
            <p className="py-8">
              員工為本公司重要資產。除保障員工基本權益外，亦尊重並照顧關懷員工，同時積極吸引人才、培育與留任，使其與本公司同步成長茁壯。
            </p>
            <p className="border-b border-orange pb-4 font-semibold text-orange">
              溝通方式
            </p>
            <List
              items={[
                { label: "新人教育訓練" },
                { label: "公司重要營運訊息等訊息" },
                { label: "透過員工意見信箱收集員工意見" },
                {
                  label:
                    "公告各項員工福利事項（健檢、及團險等）、福委會資訊（慶生會、電影欣賞）",
                },
                { label: "教育訓練課程資訊" },
                { label: "年度績效管理作業評量" },
                { label: "座談會" },
                { label: "內部推動員工福利及訓練" },
                { label: "舉辦健康諮詢" },
              ]}
            />
            <p className="border-b border-orange pb-4 font-semibold text-orange mt-12">
              頻率
            </p>
            <List items={[{ label: "定期" }, { label: "不定期議" }]} />
          </div>
          <div className="ml-8">
            <p className="border-b border-orange pb-4 font-semibold text-orange ">
              關注議題
            </p>
            <List
              items={[
                { label: "法規遵循" },
                { label: "誠信經營" },
                { label: "人權" },
                { label: "勞動條件" },
                { label: "學習與成長" },
                { label: "健康安全" },
              ]}
            />

            <p className="border-b border-orange pb-4 font-semibold text-orange mt-12">
              利害關係人溝通實績
            </p>
            <List
              items={[
                { label: "教育訓練總時數：3,527／HR" },
                { label: "人均時數：17.81／HR" },
                { label: "職業災害事件：0" },
                {
                  label:
                    "健康諮詢：醫護 3次/月（共計36次）、醫師 3次/年（共計3次）",
                },
                { label: "員工健檢人數：170人" },
                { label: "健檢率：99%" },
                { label: "新進員工入職進行新人導引訓練。" },
                { label: "安排健康諮詢、績效評量" },
                { label: "視需求安排宣導座談會" },
              ]}
            />
          </div>
        </div>
      </div>
      <div data-goal="投資人 / 股東">
        <div className="grid grid-cols-2 bg-orange-light bg-opacity-40 rounded-[20px] border border-orange p-8">
          <div className="border-r border-orange pr-8">
            <p className="border-b border-orange pb-4 font-semibold text-orange">
              說明
            </p>
            <p className="py-8">
              股東及投資人的支持與關注，是企業永續價值提升的驅動力，而優異的經營績效可展現公司價值，獲得穩定資金來源，產生正向循環。
            </p>
            <p className="border-b border-orange pb-4 font-semibold text-orange">
              溝通方式
            </p>
            <List
              items={[
                { label: "年度股東常會" },
                { label: "公開資訊觀測站" },
                { label: "中／英文重大訊息" },
                { label: "設置獨立董事直接收信之通報信箱管道" },
                { label: "公司網站" },
                { label: "法說會" },
              ]}
            />
            <p className="border-b border-orange pb-4 font-semibold text-orange mt-12">
              頻率
            </p>
            <List
              items={[
                { label: "即時" },
                { label: "不定期" },
                { label: "一年兩次" },
                { label: "每年" },
              ]}
            />
          </div>
          <div className="ml-8">
            <p className="border-b border-orange pb-4 font-semibold text-orange ">
              關注議題
            </p>
            <List
              items={[
                { label: "產業展望、公司競爭優勢及未來成長潛力" },
                { label: "公司獲利能力及股利政策" },
                { label: "股票價值" },
                { label: "公司治理 / 風險管理" },
                { label: "資訊揭露透明度" },
                { label: "永續發展" },
                { label: "營運績效" },
              ]}
            />

            <p className="border-b border-orange pb-4 font-semibold text-orange mt-12">
              利害關係人溝通實績
            </p>
            <List
              items={[
                { label: "發布年度永續報告書" },
                { label: "即時回覆股東來電諮詢" },
                { label: "與法人分析師維持溝通良好關係" },
                { label: "股東通報事件：0" },
                { label: "召開2次自辦法說會" },
                { label: "公告中/英文重大訊息各40則" },
              ]}
            />
          </div>
        </div>
      </div>
      <div data-goal="供應商">
        <div className="grid grid-cols-2 bg-orange-light bg-opacity-40 rounded-[20px] border border-orange p-8">
          <div className="border-r border-orange pr-8">
            <p className="border-b border-orange pb-4 font-semibold text-orange">
              說明
            </p>
            <p className="py-8">
              供應商是本公司重要的經營策略夥伴，提供高品質的產品或服務，彼此信賴及緊密合作，建立良好的合作互信關係。
            </p>
            <p className="border-b border-orange pb-4 font-semibold text-orange">
              溝通方式
            </p>
            <List
              items={[
                {
                  label:
                    "邀請供應商簽署「人權、環境永續暨誠信經營承諾書」，確認遵照各面向及責任商業聯盟行為準則之綱要標準經營企業",
                },
                {
                  label:
                    "與主要供應商，依業務說明、產品技術、市場發展等召開實體討論會議",
                },
                { label: "以電話、電子郵件保持溝通管道暢通" },
              ]}
            />
            <p className="border-b border-orange pb-4 font-semibold text-orange mt-12">
              頻率
            </p>
            <List
              items={[
                { label: "即時" },
                { label: "定期" },
                { label: "不定期" },
              ]}
            />
          </div>
          <div className="ml-8">
            <p className="border-b border-orange pb-4 font-semibold text-orange ">
              關注議題
            </p>
            <List
              items={[
                { label: "報導具可靠性、及時性、透明性及符合相關規範" },
                { label: "法令規章之遵循" },
                { label: "價格競爭力" },
                { label: "持續平穩的供給" },
                { label: "技術能力" },
                { label: "符合各項法規要求" },
                { label: "工作環境安全" },
              ]}
            />

            <p className="border-b border-orange pb-4 font-semibold text-orange mt-12">
              利害關係人溝通實績
            </p>
            <List
              items={[
                { label: "選擇信譽卓越之供應商" },
                {
                  label:
                    "與供應商溝通簽署「人權、環境永續暨誠信經營承諾書」，確認遵照各面向及責任商業聯盟行為準則之綱要標準經營企業",
                },
                { label: "業務實體討論會議34次" },
              ]}
            />
          </div>
        </div>
      </div>
      <div data-goal="非營利組織 / 社區">
        <div className="grid grid-cols-2 bg-orange-light bg-opacity-40 rounded-[20px] border border-orange p-8">
          <div className="border-r border-orange pr-8">
            <p className="border-b border-orange pb-4 font-semibold text-orange">
              說明
            </p>
            <p className="py-8">
              公司高度重視企業社會責任，積極投入社區發展，以多元化的具體行動回饋社會，提升社會正面影響力。
            </p>
            <p className="border-b border-orange pb-4 font-semibold text-orange">
              溝通方式
            </p>
            <List
              items={[
                { label: "公司網站" },
                { label: "舉辦公益活動或參與外部公益活動" },
                { label: "股東會年報" },
                { label: "永續報告書" },
                { label: "公開資訊觀測站" },
              ]}
            />

            <p className="border-b border-orange pb-4 font-semibold text-orange mt-12">
              頻率
            </p>
            <List
              items={[
                { label: "即時" },
                { label: "不定期" },
                { label: "每年一次" },
              ]}
            />
          </div>
          <div className="ml-8">
            <p className="border-b border-orange pb-4 font-semibold text-orange ">
              關注議題
            </p>
            <List
              items={[
                { label: "能源與水資源管理" },
                { label: "廢棄物管理與回收" },
                { label: "人文及特色教育發展" },
                { label: "社會及社區公益參與" },
                { label: "環境保護" },
                { label: "永續發展策略" },
              ]}
            />

            <p className="border-b border-orange pb-4 font-semibold text-orange mt-12">
              利害關係人溝通實績
            </p>
            <List
              items={[
                { label: "辦理淨灘公益活動，總計共撿拾37.5公斤海洋廢棄物" },
                { label: "志工參與捐血活動及自辦愛心捐血活動，共計495袋" },
                { label: "公司股東會贈品購買環保材質(小麥桿)製品" },
              ]}
            />
          </div>
        </div>
      </div>
    </SideTabWithIcon>
  );
};
export default StackHolderPanel;
