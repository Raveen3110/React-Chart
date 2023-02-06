import React, { useState } from "react";
import BarGraph from "../../components/BarGraph";
import LineGraph from "../../components/LineGraph";

export default function Home() {
    const [data, setData] = useState({
        labels: [
            "Jan",
            "Feb",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
        ],
        datasets: [
            {
                label: "Line Graph with Fill",
                data: [
                    80, 85, 30, 150, 85, 40, 10.5, 32, 50, 60, 20, 250, 140
                ],
                backgroundColor: "yellow",
                borderColor: "red",
                tension: 0.2,
                fill: true,
                pointStyle: "rect",
                pointBackgroundColor: "blue",
            },
        ],
    });
    return (
        <div>
            <div style={{ width: "800px", height: "800px" }}>
                <LineGraph data={data} />
            </div>
            <BarGraph />
        </div>
    );
}
