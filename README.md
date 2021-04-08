# 🕒time-ago

Get the time difference with current time as string with a simple npm package.

## Installation

```
npm install @souravdey/time-ago
```

## Usage

```
import getTimeAgoString from '@souravdey/time-ago';

var timeAgo = getTimeAgoString(unixtimestamp);
var timeAgoAbbreviation = getTimeAgoString(unixtimestamp,true);

console.log(timeAgo) // output eg. 21 minutes
console.log(timeAgoAbbreviation) // output eg. 21 mins
```

#### params for the function

- unixtimestamp in miliseconds eg. 1617799359000
- abbreviation as `true` or `false`. It is not a mandatory feild and default value is false. If passed true it will abbreviate the units eg. minutes to mins.

`getTimeAgoString` function returns a string as per the time diffrence of the current time.

- `x seconds/secs` if the diffrence between current time and unix timestamp is within 59 secs.

- `x minutes/mins` if the diffrence between current time and unix timestamp is within 1 min to 59 mins.

- `x hours/hrs` if the diffrence between current time and unix timestamp is within 1 hr to 23 hrs.

- `x days/ds` if the diffrence between current time and unix timestamp is within 1 day to 30 days.

- `x months/mths` if the diffrence between current time and unix timestamp is within 1 month to 11 months.

- `x years/yrs` if the diffrence between current time and unix timestamp is more than 1 year.
