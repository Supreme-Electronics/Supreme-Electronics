import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageRenderer from "./components/render/PageRenderer";
import MainLayout from "./layouts/MainLayout";
import NewsDetail from "./components/ui/NewsDetail";
import LandingPage from "./pages";
import ScrollToTop from "./components/utils/scrollToTop";
import './i18n'
import { useEffect } from 'react';
import i18n from "./i18n";
function App() {
  useEffect(() => {
    i18n.on('languageChanged', (lng) => {
      if (lng === 'en') {
        document.body.classList.add('text-left');
        document.body.classList.remove('text-justify');
      } else {
        document.body.classList.remove('text-left');
        document.body.classList.add('text-justify');
      }
    });

    return () => {
      i18n.off('languageChanged');
    };
  }, []);


  return (
    <BrowserRouter basename={`${process.env.PUBLIC_URL}`}>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainLayout />}>
        <Route path="" element={<LandingPage />} />
        <Route path="/news/:id" element={<NewsDetail />} />
        <Route path="news" element={<PageRenderer pageName="news" />} />
        <Route path="download" element={<PageRenderer pageName="download" />} />
        <Route path="society" element={<PageRenderer pageName="society" />} />
        <Route path="sustainability" element={<PageRenderer pageName="sustainability" />} />
        <Route path="sustainability/message-from-chairman" element={<PageRenderer pageName="message-from-chairman" />} />
        <Route path="sustainability/governance" element={<PageRenderer pageName="governance" />} />
        <Route path="sustainability/ethical-management" element={<PageRenderer pageName="ethical-management" />} />
        <Route path="sustainability/board" element={<PageRenderer pageName="board" />} />
        <Route path="sustainability/survey" element={<PageRenderer pageName="survey" />} />
        <Route path="sustainability/sustainbility-committee" element={<PageRenderer pageName="sustainbility-committee" />} />
        <Route path="sustainability/compensation-committee" element={<PageRenderer pageName="compensation-committee" />} />
        <Route path="sustainability/audit-committee" element={<PageRenderer pageName="audit-committee" />} />
        <Route path="sustainability/stakeholder-engagement" element={<PageRenderer pageName="stakeholder-engagement" />} />
        <Route path="sustainability/intellectual-property" element={<PageRenderer pageName="intellectual-property" />} />
        <Route path="sustainability/risk-management" element={<PageRenderer pageName="risk-management" />} />
        <Route path="sustainability/information-security" element={<PageRenderer pageName="information-security" />} />
        <Route path="sustainability/supply-chain" element={<PageRenderer pageName="supply-chain" />} />
        <Route path="sustainability/product-customer-service" element={<PageRenderer pageName="product-customer-service" />} />
        <Route path="sustainability/key-topics" element={<PageRenderer pageName="key-topics" />} />
        <Route path="enterprise" element={<PageRenderer pageName="enterprise" />} />
        <Route path="enterprise/hr-distribution" element={<PageRenderer pageName="hr-distribution" />} />
        <Route path="enterprise/welfare-care" element={<PageRenderer pageName="welfare-care" />} />
        <Route path="enterprise/rights-protection" element={<PageRenderer pageName="rights-protection" />} />
        <Route path="enterprise/diverse-growth" element={<PageRenderer pageName="diverse-growth" />} />
        <Route path="enterprise/human-rights-policy" element={<PageRenderer pageName="human-rights-policy" />} />
        <Route path="enterprise/occupational-safety" element={<PageRenderer pageName="occupational-safety" />} />
        <Route path="enterprise/healthy-workplace" element={<PageRenderer pageName="healthy-workplace" />} />
        <Route path="enterprise/performance-compensation" element={<PageRenderer pageName="performance-compensation" />} />
        <Route path="symbiosis" element={<PageRenderer pageName="symbiosis" />} />
        <Route path="symbiosis/climate-change" element={<PageRenderer pageName="climate-change" />} />
        <Route path="symbiosis/energy-management" element={<PageRenderer pageName="energy-management" />} />
        <Route path="symbiosis/green-energy" element={<PageRenderer pageName="green-energy" />} />
        <Route path="symbiosis/greenhouse-gases" element={<PageRenderer pageName="greenhouse-gases" />} />
        <Route path="symbiosis/waste-management" element={<PageRenderer pageName="waste-management" />} />
        <Route path="symbiosis/water-management" element={<PageRenderer pageName="water-management" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
