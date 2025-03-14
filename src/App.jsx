import "./App.css";
import MainStockCard from "./components/modules/MainStockCard";
import MainReportCard from "./components/modules/MainReportCard";
import MainReportTabs from "./components/modules/MainReportTabs";
import MainInvestmentReports from "./components/modules/MainInvestmentReports";

function App() {
  return (
    <div className="container">
      <h1 className="title">뉴스 AI 분석 종목</h1>
      <p className="subtitle">
        최신 뉴스 및 미디어 분석을 통해 AI가 선별한 종목 입니다.
      </p>

      <div className="card-container">
        <MainStockCard
          stockName="테슬라"
          aiAnalysis="매수 추천"
          imageSrc="/public/images/image-13.png"
        />
        <MainStockCard
          stockName="테슬라"
          aiAnalysis="매수 추천"
          imageSrc="/public/images/image-13.png"
        />
        <MainStockCard
          stockName="테슬라"
          aiAnalysis="매수 추천"
          imageSrc="/public/images/image-13.png"
        />
        <MainStockCard
          stockName="테슬라"
          aiAnalysis="매수 추천"
          imageSrc="/public/images/image-13.png"
        />
      </div>
      <MainInvestmentReports />
    </div>
  );
}

export default App;
