import React from "react";
import PropTypes from "prop-types";
import { ResponsiveContainer, PieChart, Pie, Cell, Legend } from "recharts";

const RenderLegend = (props) => {
  const { payload } = props;
  return (
    <ul>
      {payload.map((payload, index) => {
        if (payload.value === "score") {
          return (
            <li key={`item-${index}`} className="score__legend">
              Score
            </li>
          );
        }
        return null;
      })}
    </ul>
  );
};

const Score = ({ scoreData }) => {

  return (
    <div className="score">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={scoreData}
            dataKey="value"
            startAngle={210}
            endAngle={-210}
            innerRadius="70%"
            outerRadius="80%"
            cornerRadius="50%"
          >
            <Cell fill="#FF0000" stroke="#e60000" />
            <Cell fill="transparent" stroke="transparent" />
          </Pie>

          <Pie
            data={[{ name: "circle", value: 100 }]}
            dataKey="value"
            startAngle={210}
            endAngle={-210}
            outerRadius="70%"
            fill="white"
          />
          <Legend
            verticalAlign="top"
            content={RenderLegend}
            wrapperStyle={{ top: "10%", left: "12%" }}
          />
        </PieChart>
      </ResponsiveContainer>
      <div className="score__label">
        <p className="score__number">{scoreData[0].value}%</p>
        <p className="score__text">de votre objectif</p>
      </div>
    </div>
  );
};

Score.propTypes = {
  scoreData: PropTypes.array,
};

export default Score;
