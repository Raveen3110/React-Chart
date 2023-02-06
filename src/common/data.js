const dataGraph = {
    line_graph_one: {
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
                label: 'Line Chart with Fill',
                data: [80, 85, 30, 150, 85, -40, 10.5, 32, 50, 60, 20, -25, -14],
                backgroundColor: "#E3F3BB",
                borderColor: "gray",
                tension: 0.2,
                fill: true,
                // pointStyle: "rect",
                pointBackgroundColor: "red",
                borderWidth: 2,
            },
        ],
    },
    line_graph_two: {
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
                label: "Line Graph",
                data: [140,10,100,80,70,-60, 20, 75, 10.5, 32, -50, -14],
                backgroundColor: "#B1DFDE",
                borderColor: "green",
                // tension: 0.2,
                fill: false,
                pointStyle: "rect",
                pointBackgroundColor: "red",
                borderWidth: 1,
            },
        ],
    },
};
export default dataGraph;
