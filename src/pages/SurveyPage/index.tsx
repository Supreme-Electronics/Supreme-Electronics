import React, { useState } from "react";
import SlideQuestion from "./SlideQuestion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/pro-solid-svg-icons";
import { useTranslation } from "react-i18next";

const ESGSurvey: React.FC = () => {
  const { t } = useTranslation();
  const [answers, setAnswers] = useState<{ [key: string]: string }>({});

  const subQuestions02 = [
    { label: t("survey.governanceDiversity"), name: "q2" },
    { label: t("survey.economicPerformance"), name: "q3" },
    { label: t("survey.integrityManagement"), name: "q4" },
    { label: t("survey.regulatoryCompliance"), name: "q5" },
    { label: t("survey.riskManagement"), name: "q6" },
    { label: t("survey.productQuality"), name: "q7" },
    { label: t("survey.customerService"), name: "q8" },
    { label: t("survey.supplyChainManagement"), name: "q9" },
  ];
  const subQuestions03 = [
    { label: t("survey.climateChangeStrategy"), name: "q10" },
    { label: t("survey.greenProducts"), name: "q11" },
    { label: t("survey.resourceManagement"), name: "q12" },
    { label: t("survey.ghgEmissionReduction"), name: "q13" },
    { label: t("survey.environmentalComplaintMechanism"), name: "q14" },
  ];
  const subQuestions04 = [
    { label: t("survey.communityEngagement"), name: "q15" },
    { label: t("survey.laborRelations"), name: "q16" },
    { label: t("survey.occupationalSafety"), name: "q17" },
    { label: t("survey.trainingDevelopment"), name: "q18" },
    { label: t("survey.equalityDiversity"), name: "q19" },
    { label: t("survey.compensationBenefits"), name: "q20" },
    { label: t("survey.customerPrivacy"), name: "q21" },
  ];
  const subQuestions05 = [
    { label: t("survey.governanceDiversity"), name: "q22" },
    { label: t("survey.economicPerformance"), name: "q23" },
    { label: t("survey.integrityManagement"), name: "q24" },
    { label: t("survey.regulatoryCompliance"), name: "q25" },
    { label: t("survey.riskManagement"), name: "q26" },
    { label: t("survey.productQuality"), name: "q27" },
    { label: t("survey.customerService"), name: "q28" },
    { label: t("survey.supplyChainManagement"), name: "q29" },
  ];
  const subQuestions06 = [
    { label: t("survey.climateChangeStrategy"), name: "q30" },
    { label: t("survey.greenProducts"), name: "q31" },
    { label: t("survey.resourceManagement"), name: "q32" },
    { label: t("survey.ghgEmissionReduction"), name: "q33" },
    { label: t("survey.environmentalComplaintMechanism"), name: "q34" },
  ];
  const subQuestions07 = [
    { label: t("survey.communityEngagement"), name: "q35" },
    { label: t("survey.laborRelations"), name: "q36" },
    { label: t("survey.occupationalSafety"), name: "q37" },
    { label: t("survey.trainingDevelopment"), name: "q38" },
    { label: t("survey.equalityDiversity"), name: "q39" },
    { label: t("survey.compensationBenefits"), name: "q40" },
    { label: t("survey.customerPrivacy"), name: "q41" },
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

      alert(t("survey.thankYou"));
    } catch (error) {
      console.error(t("survey.formError"), error);
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
          {t("survey.relationshipQuestion")}
        </p>

        <div className="flex flex-wrap gap-8 mt-6 ml-7">
          {[
            "employee",
            "investor",
            "partner",
            "customer",
            "government",
            "media",
            "community",
          ].map((value, idx) => (
            <div className="form-control" key={idx}>
              <label className="label cursor-pointer">
                <input
                  type="radio"
                  name="q1"
                  className="radio checked:bg-[#FF8D50]"
                  value={t(`survey.relationshipOptions.${value}`)}
                  onChange={handleInputChange}
                />
                <span className="label-text pl-2">
                  {t(`survey.relationshipOptions.${value}`)}
                </span>
              </label>
            </div>
          ))}
        </div>

        {[2, 3, 4, 5, 6, 7].map((num, idx) => (
          <SlideQuestion
            key={idx}
            questionNumber={num}
            questionText={t(`survey.question${num}`)}
            subQuestions={eval(`subQuestions0${num}`)}
            handleInputChange={handleInputChange}
          />
        ))}

        <p className="text-xl font-semibold tracking-wide">
          {t("survey.suggestions")}
        </p>
        <input
          type="text"
          placeholder={t("survey.placeholder")}
          className="input input-bordered w-full max-w-[900px] mt-4 ml-7"
          onChange={handleInputChange}
          name="q42"
        />

        <div className="my-12">
          <button
            type="submit"
            className="flex px-8 py-4 rounded-full bg-[#FF8D50] text-white items-center justify-between w-[180px] duration-300 hover:w-[200px] hover:shadow-lg"
          >
            {t("survey.submit")}
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </form>
    </>
  );
};

export default ESGSurvey;
