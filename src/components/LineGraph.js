import React from "react";
import { Line } from "react-chartjs-2";
import {
    Chart as ChartJs,
    Title,
    Tooltip,
    LineElement,
    Legend,
    CategoryScale,
    LinearScale,
    PointElement,
    Filler,
} from "chart.js";

ChartJs.register(
    Title,
    Tooltip,
    LineElement,
    Legend,
    CategoryScale,
    LinearScale,
    PointElement,
    Filler
);
export default function LineGraph(props) {
    return (
        <>
            <Line data={props.data} />
        </>
    );
}
