import React from "react";
import "../css/OutOfService.css";

function OutOfService() {
  return (
    <div className="out-service-container">
      <div className="out-service-box">
        <div className="out-service-logo">Logo</div>
        <h3>⛑️ 점검중...</h3>
        <h2>현재 서비스 점검 중입니다.</h2>
        <h5>더 나은 서비스로 찾아뵙겠습니다.</h5>
      </div>
    </div>
  );
}

export default OutOfService;
