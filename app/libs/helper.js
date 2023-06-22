import moment from "moment";

function timestampToHuman(timestamp) {
    const yesterday = moment(timestamp);
    const today = moment();
    const difference = today.diff(yesterday, "days");
    const agoFormat = difference === 1 ? "1 day ago" : `${difference} days ago`;
    return agoFormat;
}


module.exports = {
    timestampToHuman,
}

