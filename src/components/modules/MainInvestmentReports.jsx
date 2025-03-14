import React, { useState } from "react";
import ReportCard from "./MainReportCard.jsx";
import ReportTabs from "./MainReportTabs.jsx";

const InvestmentReports = ({ defaultTab = 'expert' }) => {
  const [activeTab, setActiveTab] = useState(defaultTab);

  const userReports = [
    {
      analyst: "김민수",
      title: "나의 2024년 투자 전략",
      description: "글로벌 경기 회복과 기술주 강세를 고려하여 포트폴리오를 재구성했습니다. 주요 투자 섹터와 종목 선정 기준을 상세히 설명합니다.",
      date: "2024.03.21",
    },
    {
      analyst: "이지현",
      title: "전기차 섹터 분석",
      description: "전기차 시장의 성장 가능성과 주요 기업들의 기술력을 비교 분석했습니다. 각 기업별 경쟁력과 투자 매력도를 평가합니다.",
      date: "2024.03.18",
    },
    {
      analyst: "박준호",
      title: "월간 포트폴리오 리뷰",
      description: "이번 달 주식 투자 성과와 향후 매매 계획을 정리했습니다. 섹터별 수익률 분석과 다음 달 투자 전략을 제시합니다.",
      date: "2024.03.15",
    }
  ];

  const expertReports = [
    {
      analyst: "김투자 애널리스트",
      title: "테슬라, 2024년 실적 전망과 투자 전략",
      description: "테슬라의 AI 기술 발전과 자율주행 시장 확대로 인한 주가 상승 가능성 분석 및 투자 전략을 제시합니다.",
      date: "2024.03.08",
    },
    {
      analyst: "이본석 애널리스트",
      title: "애플, 신제품 출시 지연과 시장 점유율 하락 분석",
      description: "애플의 신제품 출시 지연과 경쟁사 성장으로 인한 시장 점유율 하락 가능성에 대한 분석 리포트입니다.",
      date: "2024.03.07",
    },
    {
      analyst: "박전문 애널리스트",
      title: "엔비디아, AI 시장 경쟁 심화에 따른 전망",
      description: "엔비디아의 AI 칩 시장 경쟁 심화와 밸류에이션 분석을 통한 투자 관점 리포트입니다.",
      date: "2024.03.06",
    },
  ];

  return (
    <div className="investment-reports">
      <h2 className="title">투자 리포트</h2>
      <p className="subtitle">전문가의 분석 리포트를 확인하고 나만의 투자 리포트를 작성해보세요.</p>
      
      {/* 탭 메뉴 */}
      <ReportTabs activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* 리포트 목록 */}
      <div className="report-list">
        {activeTab === "ai" && aiReports.map((report, index) => (
          <ReportCard key={index} title={report.title} content={report.content} date={report.date} />
        ))}
        {activeTab === "user" && userReports.map((report, index) => (
          <ReportCard 
            key={index} 
            {...report}  // 모든 속성을 그대로 전달
          />
        ))}
        {activeTab === "expert" && expertReports.map((report, index) => (
          <ReportCard key={index} {...report} />
        ))}
      </div>

      {/* 더보기 버튼 */}
      <button className="more-btn">
        {activeTab === 'user' ? '사용자 리포트 더보기' : '전문가 리포트 더보기'}
      </button>
    </div>
  );
};

export default InvestmentReports;
