import React, { Fragment } from "react";
import AnsweredPetition from "./answered/AnsweredPetition";
import ExpiredPetition from "./expired/ExpriedPetition";
import OngoingPetition from "./ongoing/OngoingPetition";
import PendingPetition from "./pending/PendingPetition";
import Sidebar from "../sidebar/Sidebar";
import "./PetitionTemplate.css";

const PetitionOngiongList = [
  {
    id: 20,
    title: "전공동아리 시간을 좀 더 늘려주세요!",
    agreed: 85,
    end_at: "2020.11.09",
  },
  {
    id: 19,
    title: "점심시간에 운동장에 노래 틀어주세요..",
    agreed: 40,
    end_at: "2020.11.09",
  },
  {
    id: 18,
    title: "1학년 싱가포르 보내주세요 제발요",
    agreed: 100,
    end_at: "2020.11.08",
  },
  {
    id: 17,
    title: "2학년 자유여행 꼭 보내주세요",
    agreed: 168,
    end_at: "2020.11.07",
  },
  {
    id: 16,
    title: "전공캠프 횟수를 늘려주세요!!",
    agreed: 20,
    end_at: "2020.11.05",
  },
];

const PetitionPendingList = [
  {
    id: 15,
    title: "전공캠프 횟수를 늘려주세요!!",
    agreed: 150,
    end_at: "2020.09.09",
  },
  {
    id: 19,
    title: "점심시간에 운동장에 노래 틀어주세요..",
    agreed: 40,
    end_at: "2020.11.09",
  },
  {
    id: 18,
    title: "1학년 싱가포르 보내주세요 제발요",
    agreed: 100,
    end_at: "2020.11.08",
  },
  {
    id: 17,
    title: "2학년 자유여행 꼭 보내주세요",
    agreed: 168,
    end_at: "2020.11.07",
  },
  {
    id: 16,
    title: "전공캠프 횟수를 늘려주세요!!",
    agreed: 20,
    end_at: "2020.11.05",
  },
];

const PetitionExpiredList = [
  {
    id: 15,
    title: "급식을 좀 더 맛있게 만들어주세요",
    agreed: 20,
    end_at: "2020.09.09",
  },
  {
    id: 19,
    title: "점심시간에 운동장에 노래 틀어주세요..",
    agreed: 40,
    end_at: "2020.11.09",
  },
  {
    id: 18,
    title: "1학년 싱가포르 보내주세요 제발요",
    agreed: 100,
    end_at: "2020.11.08",
  },
  {
    id: 17,
    title: "2학년 자유여행 꼭 보내주세요",
    agreed: 168,
    end_at: "2020.11.07",
  },
  {
    id: 16,
    title: "전공캠프 횟수를 늘려주세요!!",
    agreed: 20,
    end_at: "2020.11.05",
  },
];

const PetitionAnsweredList = [
  {
    id: 15,
    title: "급식을 좀 더 맛있게 만들어주세요",
    agreed: 20,
    end_at: "2020.09.09",
  },
  {
    id: 19,
    title: "점심시간에 운동장에 노래 틀어주세요..",
    agreed: 40,
    end_at: "2020.11.09",
  },
  {
    id: 18,
    title: "1학년 싱가포르 보내주세요 제발요",
    agreed: 100,
    end_at: "2020.11.08",
  },
];

const CurrentPath = (Path) => {
  switch (Path) {
    case "ongoing":
      return <OngoingPetition />;
    case "expired":
      return <ExpiredPetition />;
    case "pending":
      return <PendingPetition />;
    case "answered":
      return <AnsweredPetition />;
    default:
      return <OngoingPetition />;
  }
};

const CurrentData = (Path) => {
  switch (Path) {
    case "ongoing":
      return PetitionOngiongList;
    case "expired":
      return PetitionExpiredList;
    case "pending":
      return PetitionPendingList;
    case "answered":
      return PetitionAnsweredList;
    default:
      return PetitionOngiongList;
  }
};

const PetitionTemplate = ({ match }) => {
  return (
    <div className="body-container">
      <div className="list-container">
        <div className="list-header">{CurrentPath(match.params.status)}</div>
        {match.params.status !== "answered" ? (
          <div className="petition-list-wrapper">
            <div className="petition-list-header">
              <div style={{ width: "29.5%", paddingLeft: 35 }}>번호</div>
              <div style={{ width: "33.5%" }}>제목</div>
              <div style={{ width: "21%" }}>참여인원</div>
              <div style={{ width: "10%" }}>청원 만료일</div>
            </div>
            <div className="petition-list">
              {CurrentData(match.params.status).map((list, idx) => (
                <Fragment key={idx}>
                  <div className="petition-list-content-wrapper">
                    <div style={{ width: "19%", paddingLeft: 44 }}>
                      {list.id}
                    </div>
                    <div style={{ width: "44.7%" }}>{list.title}</div>
                    <div style={{ width: "20.2%", color: "#6372A8" }}>
                      {list.agreed}명
                    </div>
                    <div style={{ width: "10%" }}>{list.end_at}</div>
                  </div>
                  <div className="petition-list-line" />
                </Fragment>
              ))}
            </div>
          </div>
        ) : (
          <div className="petition-list-wrapper">
            {CurrentData(match.params.status).map((list, idx) => (
              <Fragment key={idx}>
                <div className="petition-answered-list">
                  <div className="petition-answered-title-wrapper">
                    <div className="petition-answered-id">
                      청원답변 {list.id}호
                    </div>
                    <div className="petition-answered-title">{list.title}</div>
                  </div>
                  <div className="petition-answered-gray-box">
                    <div className="petition-answered-member">
                      <div>참여인원</div>
                      <div className="agreed-member">
                        168
                        <span
                          style={{
                            fontSize: 15,
                            fontFamily: "Roboto Slab",
                            color: "#ffffff",
                          }}
                        >
                          명
                        </span>
                      </div>
                    </div>
                    <div className="petition-answered-date">
                      <div>답변일</div>
                      <div className="answered-date">2020.12.21</div>
                    </div>
                  </div>
                </div>
              </Fragment>
            ))}
            <div className="petition-answered-page"></div>
          </div>
        )}
      </div>
      <Sidebar />
    </div>
  );
};
export default PetitionTemplate;
