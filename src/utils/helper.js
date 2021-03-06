// let objData = {
// 	oftenFreq: "12",
// 	name: "aspirin",
// 	type: "tablet",
// 	strength: "10",
// 	unit: "mg",
// 	description: "white round tablet",
// 	amount: "1",
// 	ampm1: "AM",
// 	hour1: "08",
// 	minute1: "00",
// 	ampm2: "PM",
// 	hour2: "09",
// 	minute2: "30",
// 	ampm11: "PM",
// 	hour11: "09",
// 	minute11: "30",
// 	ampm15: "PM",
// 	hour15: "09",
// 	minute15: "30",
// 	priority: "Medium",
// 	notes: "Eat with food.",
// 	supply: "10",
// };
function convertData(objData) {
	for (const prop in objData) {
		let match = prop.match(/\d+/); // only matching numbers
		if (match && match[0] <= +objData.oftenFreq) {
			// if the key has a number then rename new key timepoint number at the end (e.g. timepoint1)
			let time_point = "time_point" + match[0];
			objData[time_point] = { ...objData[time_point], [prop]: objData[prop] }; //creating a new key in objData with values of key: and prop, using spread operator to keep existing values
			delete objData[prop]; //deleting prop from the main object
		} else if (match) {
			delete objData[prop]; // detects another key value with numbers and deletes
		}
	}
	return objData;
}

const timePointCombiner = (objData, results) => {
	for (const prop in objData) {
		let match = prop.match(/\d+/);
		if (match) {
			let time_point = "time_point" + match[0];
			let hour = "hour" + match[0];
			let minute = "minute" + match[0];
			let ampm = "ampm" + match[0];
			let timePointObj = objData[time_point];
			let timePointString =
				timePointObj[hour] + ":" + timePointObj[minute] + timePointObj[ampm];

			results[timePointString] = {
				...results[timePointString],
				[objData.id]: {
					name: objData.name,
					strength: objData.strength,
					unit: objData.unit,
					amount: objData.amount,
					type: objData.type,
					id: objData.id,
					taken: objData[time_point].taken,
					time_point: time_point,
				},
			};
		}
	}
	return results;
};

function compare(a, b) {
	let comparison = 0;
	if (a > b) comparison = 1;
	if (a < b) comparison = -1;
	if (a[0].includes("AM") && b[0].includes("PM")) comparison = -1;
	if (a[0].includes("PM") && b[0].includes("AM")) comparison = 1;
	return comparison;
}

function timePoints(fetchDataObj) {
	let result = {};
	fetchDataObj.forEach(x => {
		return timePointCombiner(x, result);
	});
	return Object.entries(result)
		.sort(compare)
		.map(e => {
			return { [e[0]]: e[1] };
		});
}

export { convertData, timePointCombiner, timePoints };
