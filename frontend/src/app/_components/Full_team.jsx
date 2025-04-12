import React from "react";
import Event_lead from "./Event_lead";
import Core_council from "./Core_council";
import Chairperson from "./Chairperson";
import Vice_chair from "./Vice_chair";
import Sec from "./Sec";
import Dept_lead from "./Dept_lead";

const Full_team = () => {
  return (
    <div>
      <div>
        <Event_lead />
      </div>
      <div className="lg:-mt-20">
        <Core_council />
      </div>
      <div className="lg:-mt-20">
        <Chairperson />
      </div>
      <div className="lg:-mt-20">
        <Vice_chair />
      </div>
      <div className="lg:-mt-32">
        <Sec />
      </div>
      <div className="lg:-mt-20">
        <Dept_lead />
      </div>
    </div>
  );
};

export default Full_team;
