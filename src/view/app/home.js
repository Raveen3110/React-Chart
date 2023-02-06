import React from "react";
import LineGraph from "../../components/LineGraph";
import BarGraph from "../../components/BarGraph";
import dataGraph from "../../common/data";
export default function Home() {
    return (
        <>
            <div style={{ backgroundColor: "#F6F7F4" }}>
                <div style={{ width: "750px" }}>
                    <LineGraph data={dataGraph.line_graph_one} />
                </div>
                <div style={{ width: "750px" }}>
                    <LineGraph data={dataGraph.line_graph_two} />
                </div>
                <div style={{ width: "750px" }}>
                    <BarGraph data={dataGraph.line_graph_two} />
                </div>
            </div>
        </>
    );
}
