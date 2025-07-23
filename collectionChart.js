const collectionData = [
    { month: 'Jan', amount: 4200 },
    { month: 'Feb', amount: 4800 },
    { month: 'Mar', amount: 5100 },
    { month: 'Apr', amount: 5600 },
    { month: 'May', amount: 5200 },
    { month: 'June', amount: 5200 },
    { month: 'July', amount: 5200 },
    { month: 'Aug', amount: 5200 },
    { month: 'Sep', amount: 5200 },
    { month: 'Oct', amount: 5200 },
    { month: 'Dec', amount: 5200 },
];

const chartArea = document.getElementById("collection-chart-area");
const chartLabels = document.getElementById("collection-chart-labels");

const maxAmount = Math.max(...collectionData.map(item => item.amount));

chartArea.innerHTML = '';
chartLabels.innerHTML = '';

const totalBars = collectionData.length;
const barWidthPercent = 100 / totalBars;

collectionData.forEach(item => {
    const heightPercent = (item.amount / maxAmount) * 100;

    const bar = document.createElement("div");
    bar.className = "collection-chart-bar";
    bar.style.height = `${heightPercent}%`;
    bar.style.width = `${barWidthPercent}%`; // dynamically adjust width
    bar.setAttribute("data-value", `${item.month}: $${item.amount.toLocaleString()}`);

    const label = document.createElement("div");
    label.className = "collection-chart-label";
    label.innerHTML = item.month;
    label.style.width = `${barWidthPercent}%`; // same as bar
    label.style.transform = "rotate(-45deg)";
    label.style.transformOrigin = "top left";
    label.style.whiteSpace = "nowrap";
    label.style.fontSize = "0.8rem";
    label.style.textAlign = "center";

    chartArea.appendChild(bar);
    chartLabels.appendChild(label);
});
