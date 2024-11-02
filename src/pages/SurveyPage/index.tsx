import React, { useState } from "react";
import SlideQuestion from "./SlideQuestion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/pro-solid-svg-icons";

const ESGSurvey: React.FC = () => {
  const [answers, setAnswers] = useState<{ [key: string]: string }>({});

  const subQuestions02 = [
    { label: "多元治理", name: "q2" },
    { label: "經濟績效", name: "q3" },
    { label: "誠信經營", name: "q4" },
    { label: "法規遵循", name: "q5" },
    { label: "風險管理", name: "q6" },
    { label: "產品品質與技術", name: "q7" },
    { label: "客戶服務", name: "q8" },
    { label: "供應鏈管理", name: "q9" },
  ];
  const subQuestions03 = [
    { label: "氣候變遷對策", name: "q10" },
    { label: "綠色產品 / 服務", name: "q11" },
    { label: "能源（電力、汽油）、水資源、廢棄物管理", name: "q12" },
    { label: "溫室氣體排放與減量", name: "q13" },
    { label: "環保問題申訴機制", name: "q14" },
  ];
  const subQuestions04 = [
    { label: "社會 / 社區參與", name: "q15" },
    { label: "勞雇 / 勞資關係", name: "q16" },
    { label: "職業安全衛生", name: "q17" },
    { label: "教育訓練與職涯發展", name: "q18" },
    { label: "平等與多元化", name: "q19" },
    { label: "薪酬與福利", name: "q20" },
    { label: "顧客隱私管理", name: "q21" },
  ];
  const subQuestions05 = [
    { label: "多元治理", name: "q22" },
    { label: "經濟績效", name: "q23" },
    { label: "誠信經營", name: "q24" },
    { label: "法規遵循", name: "q25" },
    { label: "風險管理", name: "q26" },
    { label: "產品品質與技術", name: "q27" },
    { label: "客戶服務", name: "q28" },
    { label: "供應鏈管理", name: "q29" },
  ];
  const subQuestions06 = [
    { label: "氣候變遷對策", name: "q30" },
    { label: "綠色產品 / 服務", name: "q31" },
    { label: "能源（電力、汽油）、水資源、廢棄物管理", name: "q32" },
    { label: "溫室氣體排放與減量", name: "q33" },
    { label: "環保問題申訴機制", name: "q34" },
  ];
  const subQuestions07 = [
    { label: "社會 / 社區參與", name: "q35" },
    { label: "勞雇 / 勞資關係", name: "q36" },
    { label: "職業安全衛生", name: "q37" },
    { label: "教育訓練與職涯發展", name: "q38" },
    { label: "平等與多元化", name: "q39" },
    { label: "薪酬與福利", name: "q40" },
    { label: "顧客隱私管理", name: "q41" },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formUrl =
      "https://docs.google.com/forms/u/0/d/e/1FAIpQLSdhDEak-ahujte4pYuU3o9uWlKnDHayUqhxjZgiBRStfZPKuw/formResponse";

    const formData = new FormData();

    formData.append("entry.37356711", answers["q1"] || "");
    formData.append("entry.578982829", answers["q2"] || "");
    formData.append("entry.1370695277", answers["q3"] || "");
    formData.append("entry.1140171261", answers["q4"] || "");
    formData.append("entry.1671306465", answers["q5"] || "");
    formData.append("entry.1987343775", answers["q6"] || "");
    formData.append("entry.1651724361", answers["q7"] || "");
    formData.append("entry.36317584", answers["q8"] || "");
    formData.append("entry.9015848", answers["q9"] || "");
    formData.append("entry.1082566279", answers["q10"] || "");
    formData.append("entry.1152892070", answers["q11"] || "");
    formData.append("entry.2146282616", answers["q12"] || "");
    formData.append("entry.1080873489", answers["q13"] || "");
    formData.append("entry.1897444392", answers["q14"] || "");
    formData.append("entry.658500991", answers["q15"] || "");
    formData.append("entry.709609655", answers["q16"] || "");
    formData.append("entry.104985359", answers["q17"] || "");
    formData.append("entry.26677283", answers["q18"] || "");
    formData.append("entry.1816682175", answers["q19"] || "");
    formData.append("entry.1724366849", answers["q20"] || "");
    formData.append("entry.85146750", answers["q21"] || "");
    formData.append("entry.2051556986", answers["q22"] || "");
    formData.append("entry.1094880506", answers["q23"] || "");
    formData.append("entry.2035658746", answers["q24"] || "");
    formData.append("entry.928546463", answers["q25"] || "");
    formData.append("entry.661073600", answers["q26"] || "");
    formData.append("entry.1731561873", answers["q27"] || "");
    formData.append("entry.345180256", answers["q28"] || "");
    formData.append("entry.1083064081", answers["q29"] || "");
    formData.append("entry.1108330238", answers["q30"] || "");
    formData.append("entry.1138673564", answers["q31"] || "");
    formData.append("entry.2097675876", answers["q32"] || "");
    formData.append("entry.720083090", answers["q33"] || "");
    formData.append("entry.2123043604", answers["q34"] || "");
    formData.append("entry.1697480224", answers["q35"] || "");
    formData.append("entry.1453042780", answers["q36"] || "");
    formData.append("entry.354846239", answers["q37"] || "");
    formData.append("entry.1908949958", answers["q38"] || "");
    formData.append("entry.374173742", answers["q39"] || "");
    formData.append("entry.1985134340", answers["q40"] || "");
    formData.append("entry.599512319", answers["q41"] || "");
    formData.append("entry.1686149838", answers["q42"] || "");

    console.log(formData);
    try {
      await fetch(formUrl, {
        method: "POST",
        mode: "no-cors",
        body: formData,
      });

      alert("謝謝您的寶貴意見！");
    } catch (error) {
      console.error("表單因伺服器問題傳送失敗，請稍後再試。", error);
    }
  };

  return (
    <>
            <form
              id="google-form"
              onSubmit={handleSubmit}
              className="mt-24  text-[#555555]  "
            >
              <p className="text-xl font-semibold tracking-wide">
                1. 您與至上電子股份有限公司的關係？
              </p>
              <div className="flex flex-wrap gap-8 mt-6 ml-7">
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <input
                      type="radio"
                      name="q1"
                      className="radio checked:bg-[#FF8D50]"
                      value="員工"
                      onChange={handleInputChange}
                    />
                    <span className="label-text pl-2">員工</span>
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <input
                      type="radio"
                      name="q1"
                      className="radio checked:bg-[#FF8D50]"
                      value="投資人/股東"
                      onChange={handleInputChange}
                    />
                    <span className="label-text pl-2">投資人/股東</span>
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <input
                      type="radio"
                      name="q1"
                      className="radio checked:bg-[#FF8D50]"
                      value="股東合作夥伴(供應商，承攬商)"
                      onChange={handleInputChange}
                    />
                    <span className="label-text pl-2">
                      股東合作夥伴(供應商，承攬商)
                    </span>
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <input
                      type="radio"
                      name="q1"
                      className="radio checked:bg-[#FF8D50]"
                      value="客戶"
                      onChange={handleInputChange}
                    />
                    <span className="label-text pl-2">客戶</span>
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <input
                      type="radio"
                      name="q1"
                      className="radio checked:bg-[#FF8D50]"
                      value="政府與主管機關"
                      onChange={handleInputChange}
                    />
                    <span className="label-text pl-2">政府與主管機關</span>
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <input
                      type="radio"
                      name="q1"
                      className="radio checked:bg-[#FF8D50]"
                      value="媒體"
                      onChange={handleInputChange}
                    />
                    <span className="label-text pl-2">媒體</span>
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <input
                      type="radio"
                      name="q1"
                      className="radio checked:bg-[#FF8D50]"
                      value="社區居民"
                      onChange={handleInputChange}
                    />
                    <span className="label-text pl-2">社區居民</span>
                  </label>
                </div>
              </div>

              <SlideQuestion
                questionNumber={2}
                questionText="您主要關注至上電子股份有限公司的議題為何？【公司治理面（經濟面）】（1-5分）"
                subQuestions={subQuestions02}
                handleInputChange={handleInputChange}
              />
              <SlideQuestion
                questionNumber={3}
                questionText="您主要關注至上電子的哪些議題？【環境面】（1-5分）"
                subQuestions={subQuestions03}
                handleInputChange={handleInputChange}
              />
              <SlideQuestion
                questionNumber={4}
                questionText="您主要關注至上電子的哪些議題？【社會面】（1-5分）"
                subQuestions={subQuestions04}
                handleInputChange={handleInputChange}
              />
              <SlideQuestion
                questionNumber={5}
                questionText="您覺得這些議題對於經濟 / 社會 / 環境的影響大不大？【公司治理面（經濟面）】（1-5分）"
                subQuestions={subQuestions05}
                handleInputChange={handleInputChange}
              />
              <SlideQuestion
                questionNumber={6}
                questionText="您覺得這些議題對於經濟 / 社會 / 環境的影響大不大？【環境面】（1-5分）"
                subQuestions={subQuestions06}
                handleInputChange={handleInputChange}
              />
              <SlideQuestion
                questionNumber={7}
                questionText="您覺得這些議題對於經濟 / 社會 / 環境的影響大不大？【社會面】（1-5分）"
                subQuestions={subQuestions07}
                handleInputChange={handleInputChange}
              />

              <p className="text-xl font-semibold tracking-wide">
                8. 您對於至上電子股份有限公司的治理 / 社會 /
                環境方面有什麼建議呢？
              </p>

              <input
                type="text"
                placeholder="您的寶貴意見"
                className="input input-bordered  w-full max-w-[900px] mt-4 ml-7"
                onChange={handleInputChange}
                name="q42"
              />


              <div className="my-12">
                <button
                  type="submit"
                  className="flex px-8 py-4 rounded-full bg-[#FF8D50] text-white items-center justify-between w-[180px] duration-300 hover:w-[200px] hover:shadow-lg"
                >
                  送出
                  <FontAwesomeIcon icon={faArrowRight} />
                </button>
              </div>
            </form>
    </>
  );
};

export default ESGSurvey;
