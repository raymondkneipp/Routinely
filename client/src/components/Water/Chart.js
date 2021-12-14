import { ResponsiveBar } from "@nivo/bar";

const theme = {
	textColor: "white",
	axis: {
		domain: {
			line: {
				strokeWidth: 0,
			},
		},
		ticks: {
			line: {
				stroke: "#374151",
				strokeWidth: 1,
			},
		},
	},
	grid: {
		line: {
			stroke: "#374151",
			strokeWidth: 1,
		},
	},
};

const Chart = ({ chartData }) => {
	return (
		<div className="h-64">
			<ResponsiveBar
				data={chartData}
				keys={["amount"]}
				maxValue={600}
				indexBy="time"
				margin={{ top: 50, right: 0, bottom: 50, left: 50 }} // left 50
				padding={0.4}
				valueScale={{ type: "linear" }}
				borderRadius={7}
				animate={true}
				isInteractive={false}
				enableLabel={false}
				enableGridX={true}
				gridYValues={[100, 300, 500]}
				axisTop={null}
				axisRight={null}
				colors={chartData.map((c) => c.color)}
				colorBy="index"
				axisLeft={{
					tickSize: 0,
					tickPadding: 5,
					tickRotation: 0,
					tickValues: [100, 300, 500],
				}}
				axisBottom={{
					tickSize: 0,
					tickPadding: 5,
					tickRotation: 0,
				}}
				theme={theme}
			/>
		</div>
	);
};

export default Chart;
