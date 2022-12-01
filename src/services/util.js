
export const utilService = {
    getDate,
    getRandomColor,
    // timeSince,
    // getTimeDiff,
    // getDateByTimestamp,
    // dueDateFormat
}


function getDate(newDate) {
    const date = new Date(newDate)
    const minutes =
        date.getMinutes() > 9
            ? date.getMinutes()
            : `0${date.getMinutes()}`;
    const seconds =
        date.getSeconds() > 9
            ? date.getSeconds()
            : `0${date.getSeconds()}`;
    const currDate = `${date.getDay()}/${date.getMonth() + 1}`
    const time = `${date.getHours()}:${minutes}`;
    const res = `${currDate},  ${time}  `
    return time
}

function getRandomColor(num) {

    const colors = ['#112e3e', '#0f6f02', '#b75b53', '#211407', '#12435a', '#0e601b', '#2077d8', '#890000', '#001c00', '#442547', '#e96dac', '#0d2379', '#ff8d3e', '#00f697', '#ffd5f4', '#99850b', '#bc0050', '#0f6f02', '#112e3e', '#0f6f02', '#b75b53', , '#0e601b', '#2077d8', '#890000', '#001c00', '#442547', '#e96dac', '#0d2379', '#ff8d3e', '#00f697', '#ffd5f4', '#99850b', '#bc0050', '#0f6f02', '#112e3e', '#0f6f02', '#b75b53', '#112e3e', '#0f6f02', '#b75b53', '#211407', '#12435a', '#0e601b', '#2077d8', '#890000', '#001c00', '#442547',]
    if (num > colors.length) {
        return 'black'
    }

    return colors[num];
}

// function timeSince(date) {
//     var seconds = Math.floor((new Date() - date) / 1000);

//     var interval = seconds / 31536000;

//     if (interval > 1) {
//         if (Math.floor(interval) === 1) return "a year ago";
//         return Math.floor(interval) + " years ago";
//     }
//     interval = seconds / 2592000;
//     if (interval > 1) {
//         if (Math.floor(interval) === 1) return "a month ago";
//         return Math.floor(interval) + " months ago";
//     }
//     interval = seconds / 86400;
//     if (interval > 1) {
//         if (Math.floor(interval) === 1) return "a day ago";
//         return Math.floor(interval) + " days ago";
//     }
//     interval = seconds / 3600;
//     if (interval > 1) {
//         if (Math.floor(interval) === 1) return "an hour ago";
//         return Math.floor(interval) + " hours ago";
//     }
//     interval = seconds / 60;
//     if (interval > 1) {
//         if (Math.floor(interval) === 1) return "Just now";
//         return Math.floor(interval) + " minutes ago";
//     }
//     if (Math.floor(seconds) === 0) return "Just now";
//     return Math.floor(seconds) + " seconds ago";
// }



// const _duration = (difference) => {
//     let secondsInMiliseconds = 1000,
//         minutesInMiliseconds = 60 * secondsInMiliseconds,
//         hoursInMiliseconds = 60 * minutesInMiliseconds;
//     var differenceInHours = difference / hoursInMiliseconds,
//         differenceInMinutes = differenceInHours % 1 * 60,
//         differenceInSeconds = differenceInMinutes % 1 * 60;
//     return {
//         "hours": Math.floor(differenceInHours),
//         "minutes": Math.floor(differenceInMinutes),
//         "seconds": Math.floor(differenceInSeconds)
//     }
// }
// function getTimeDiff(createdAt, action = "Added") {
//     const timeDiff = _duration(Date.now() - createdAt)
//     if (timeDiff.seconds && !timeDiff.minutes && !timeDiff.hours) {
//         return `${action}  ${timeDiff.seconds} seconds ago`
//     } else if (timeDiff.minutes && !timeDiff.hours) {
//         return `${action}  ${timeDiff.minutes} minutes ago`
//     } else {
//         return `${action}  ${timeDiff.hours} hours ago`
//     }
// }
// function getDateByTimestamp(timestamp) {
//     const currYear = new Date().getFullYear()
//     const dueYear = new Date(timestamp).getFullYear()
//     let strDate = ''
//     strDate += `${new Date(timestamp).toLocaleString('en-GB', { day: 'numeric' })} `
//     strDate += `${new Date(timestamp).toLocaleString('en-GB', { month: 'short' })} at `
//     if (dueYear !== currYear) {
//         strDate += `${dueYear} `
//     }
//     strDate += `${new Date(timestamp).toLocaleString('en-GB', { hour: 'numeric', minute: 'numeric', hour12: true }).toLocaleUpperCase()}`
//     return strDate
// }
// function dueDateFormat(dueDate) {
//     const currYear = new Date().getFullYear()
//     const dueYear = new Date(dueDate).getFullYear()
//     let strDate = ''
//     strDate += `${new Date(dueDate).toLocaleString('en-GB', { day: 'numeric' })} `
//     strDate += `${new Date(dueDate).toLocaleString('en-GB', { month: 'short' })} at `
//     if (dueYear !== currYear) {
//         strDate += `${dueYear} `
//     }
//     strDate += `${new Date(dueDate).toLocaleString('en-GB', { hour: 'numeric', minute: 'numeric', hour12: true }).toLocaleUpperCase()}`
//     return strDate
// }