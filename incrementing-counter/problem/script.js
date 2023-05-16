const metrics = {
    followers:  {
        count: 0,
        max: 10000
    },
    subscribers: {
        count: 0,
        max: 2500
    },
    fans: {
        count: 0,
        max: 5000,
    }
}

class counterUI {

}

const timeLimit = 1500;
const periodicDelay = 10;

function updateCounter(title, metric){
    const counter = document.querySelector(`.${title}-count`);
    counter.textContent = metric.count;
}

function increment(title, metric){
    let timeElapsed = 0;
    const rate = Math.floor(metric.max / (timeLimit / periodicDelay));
    console.log('rate: ', rate);
    const incrementer = setInterval(() => {
        // console.log('count: ', metric.count);
        // console.log('time in ms: ', timeElapsed);
        metric.count += rate;
        timeElapsed += periodicDelay;
        updateCounter(title, metric);
        if(timeElapsed >= timeLimit){
            // set to max, in case there's a rounding error
            metric.count = metric.max;
            updateCounter(title, metric);
            clearInterval(incrementer)
        } 

    }, periodicDelay);
    // console.log(metric.count)/
}

// increment(metrics.followers);

window.addEventListener('DOMContentLoaded', event => {
    const keys = Object.keys(metrics);
    keys.forEach(key => {
        increment(key, metrics[key]);

    })
})