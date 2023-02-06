import React from "react";
import BarGraph from "../../components/BarGraph";
import LineGraph from "../../components/LineGraph";

export default function home() {
    return (
        <div>
            <LineGraph />
            <BarGraph />
        </div>
    );
}
