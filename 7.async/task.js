class AlarmClock {
    constructor() {
        this.alarmCollection = [],
        this.timerId = null
    }

    addClock(time, callback, id) {
        if(isNaN(id)) {
            throw new Error('error text');
        }else if (this.alarmCollection.find(item => item.id === id) !== undefined) {
            return console.error("будильник существует");

        } else { 
        return this.alarmCollection.push({id, time, callback});
        }
    }

    removeClock(id) {
        let beegining = this.alarmCollection.length;
        this.alarmCollection = this.alarmCollection.filter(item => item.id !== id);
        return (beegining > this.alarmCollection.length);
    }

    getCurrentFormattedTime() { 
        let endTime = (number) => {
            if (number < 10) {
                return '0' + number;
            }
            return number;
        }
        let thisTime = new Date();
        return endTime(thisTime.getHours()) + ':' + endTime(thisTime.getMinutes());
    }

    start() {
        let checkClock = function(alarm) {
            if (alarm.time === this.getCurrentFormattedTime()) {
                return alarm.callback();
            }
        }
        if (this.timerId === null) {
            this.timerId = setInterval(() => {
                this.alarmCollection.forEach(alarm => checkClock(alarm));
            }, 60);
        }
        return;
    }

    stop() {
        if(this.timerId !== null) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
    } 

    printAlarms() {
        this.alarmCollection.forEach(item => console.log(item.id + ':' + item.time));
    }


    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }  
}