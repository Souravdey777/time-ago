const SECOND = 1000,
    MINUTE = SECOND * 60,
    HOUR = MINUTE * 60,
    DAY = HOUR * 24,
    MONTH = DAY * 30,
    YEAR = DAY * 365;

function getTimeAgoString(timestamp, short = false) {
    const elapsed = Date.now() - timestamp,
        getElapsedString = (value, unit) => {
            const round = Math.round(elapsed / value);
            return `${round} ${unit}${round > 1
                ? 's'
                : ''}`;
        };
    if (elapsed < MINUTE) {
        return getElapsedString(SECOND, short ? 'sec' : 'second');
    }
    if (elapsed < HOUR) {
        return getElapsedString(MINUTE, short ? 'min' : 'minute');
    }
    if (elapsed < DAY) {
        return getElapsedString(HOUR, short ? 'hr' : 'hour');
    }
    if (elapsed < MONTH) {
        return getElapsedString(DAY, short ? 'd' : 'day');
    }
    if (elapsed < YEAR) {
        return getElapsedString(MONTH, short ? 'mth' : 'month');
    }
    return getElapsedString(YEAR, short ? 'yr' : 'year');
};

module.exports = getTimeAgoString