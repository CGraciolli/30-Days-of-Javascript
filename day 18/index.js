const timeNodes = [...document.querySelectorAll("[data-time]")] //we need to change from a nodelist to an array

const seconds = timeNodes.map(node => node.dataset.time)
                        .map(timecode => {
                            const [min, sec] = timecode.split(":").map(parseFloat)
                            const total_sec = 60*min + sec
                            return total_sec
                        })
                        .reduce((total, secs) => total + secs)

console.log(seconds)

const secondsLeft = seconds % 60
const minutesLeft = Math.floor(seconds/60) % 60
const hours = Math.floor(seconds/3600)

console.log(`${hours} hours, ${minutesLeft} minutes and ${secondsLeft} seconds.`)