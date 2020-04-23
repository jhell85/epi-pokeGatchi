/* eslint-disable indent */
/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */


export function runAPIcall() {
	fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=GDXJ&interval=5min&apikey=${process.env.ALPHAVANTAGE}`)
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
		console.log(jsonifiedResponse);
	});
}

