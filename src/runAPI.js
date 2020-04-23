/* eslint-disable indent */
/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */


export function runAPIcall(stockSymbol, interval) {
	fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${stockSymbol}&interval=${interval}min&apikey=${process.env.ALPHAVANTAGE}`)
		.then(function(response) {
			if (response.ok && response.status == 200) {
				return response.json();
			} else {
				return false;
			}

			}
		)
	.catch(function(error) {
	return false;
	})
	.then(function(jsonifiedResponse) {
		let intervals = jsonifiedResponse[`Time Series (${interval}min)`];

		for (const timeStamp in intervals) {
      for(const pair in intervals[timeStamp]){
        console.log(`${timeStamp} : ${pair} : ${intervals[timeStamp][pair]}`);
      }
	}



	});
}
