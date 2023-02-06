import React from "react";
import '../../assets/css/style.css';
import LineGraph from "../../components/LineGraph";
import BarGraph from "../../components/BarGraph";
import dataGraph from "../../common/data";
export default function Home() {
    return (
        <>
            <div className="charts">
                <LineGraph data={dataGraph.line_graph_one} />
                <LineGraph data={dataGraph.line_graph_two} />
                <BarGraph data={dataGraph.line_graph_two} />
            </div>
        </>
    );
}
