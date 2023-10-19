const selectorCard = document.querySelector(".selector-card")

const userData = [
    {
        "title": "Work",
        "timeframes": {
            "daily": {
                "current": 5,
                "previous": 7
            },
            "weekly": {
                "current": 32,
                "previous": 36
            },
            "monthly": {
                "current": 103,
                "previous": 128
            }
        }
    },
    {
        "title": "Play",
        "timeframes": {
            "daily": {
                "current": 1,
                "previous": 2
            },
            "weekly": {
                "current": 10,
                "previous": 8
            },
            "monthly": {
                "current": 23,
                "previous": 29
            }
        }
    },
    {
        "title": "Study",
        "timeframes": {
            "daily": {
                "current": 0,
                "previous": 1
            },
            "weekly": {
                "current": 4,
                "previous": 7
            },
            "monthly": {
                "current": 13,
                "previous": 19
            }
        }
    },
    {
        "title": "Exercise",
        "timeframes": {
            "daily": {
                "current": 1,
                "previous": 1
            },
            "weekly": {
                "current": 4,
                "previous": 5
            },
            "monthly": {
                "current": 11,
                "previous": 18
            }
        }
    },
    {
        "title": "Social",
        "timeframes": {
            "daily": {
                "current": 1,
                "previous": 3
            },
            "weekly": {
                "current": 5,
                "previous": 10
            },
            "monthly": {
                "current": 21,
                "previous": 23
            }
        }
    },
    {
        "title": "Self Care",
        "timeframes": {
            "daily": {
                "current": 0,
                "previous": 1
            },
            "weekly": {
                "current": 2,
                "previous": 2
            },
            "monthly": {
                "current": 7,
                "previous": 11
            }
        }
    }
]
const [work, play, study, exercise, social, selfCare] = userData

function changeValue(e) {
    e = e.target

    const current = document.querySelectorAll(".current")
    const previous = document.querySelectorAll(".previous")

    const currentWork = current[0], previousWork = previous[0],
        currentPlay = current[1], previousPlay = previous[1],
        currentStudy = current[2], previousStudy = previous[2],
        currentExercise = current[3], previousExercise = previous[3],
        currentSocial = current[4], previousSocial = previous[4],
        currentSelfCare = current[5], previousSelfCare = previous[5];
    
    function constructor(targetCurrent, targetPrevious, arrayTarget) {
        let time = "hrs"
        //Current
        targetCurrent.innerText = arrayTarget.timeframes.daily.current + time;

        //Previous
        targetPrevious.innerText = arrayTarget.timeframes.daily.previous + time;
    }

    if (e.innerText === "Daily") {
        
        constructor(currentWork, previousWork, work)

        currentPlay.innerText = play.timeframes.daily.current + "hrs"
        previousPlay.innerText = play.timeframes.daily.previous + "hrs"

        currentStudy.innerText = study.timeframes.daily.current + "hrs"
        previousStudy.innerText = study.timeframes.daily.previous + "hrs"

        currentExercise.innerText = exercise.timeframes.daily.current + "hrs"
        previousExercise.innerText = exercise.timeframes.daily.previous + "hrs"

        currentSocial.innerText = social.timeframes.daily.current + "hrs"
        previousSocial.innerText = social.timeframes.daily.previous + "hrs"

        currentSelfCare.innerText = selfCare.timeframes.daily.current + "hrs"
        previousSelfCare.innerText = selfCare.timeframes.daily.previous + "hrs"

    } else if (e.innerText === "Weekly") {
        currentWork.innerText = work.timeframes.weekly.current + "hrs"
        previousWork.innerText = work.timeframes.weekly.previous + "hrs"

        currentPlay.innerText = play.timeframes.weekly.current + "hrs"
        previousPlay.innerText = play.timeframes.weekly.previous + "hrs"

        currentStudy.innerText = study.timeframes.weekly.current + "hrs"
        previousStudy.innerText = study.timeframes.weekly.previous + "hrs"

        currentExercise.innerText = exercise.timeframes.weekly.current + "hrs"
        previousExercise.innerText = exercise.timeframes.weekly.previous + "hrs"

        currentSocial.innerText = social.timeframes.weekly.current + "hrs"
        previousSocial.innerText = social.timeframes.weekly.previous + "hrs"

        currentSelfCare.innerText = selfCare.timeframes.weekly.current + "hrs"
        previousSelfCare.innerText = selfCare.timeframes.weekly.previous + "hrs"

    } else if (e.innerText === "Monthly") {
        currentWork.innerText = work.timeframes.monthly.current + "hrs"
        previousWork.innerText = work.timeframes.monthly.previous + "hrs"

        currentPlay.innerText = play.timeframes.monthly.current + "hrs"
        previousPlay.innerText = play.timeframes.monthly.previous + "hrs"

        currentStudy.innerText = study.timeframes.monthly.current + "hrs"
        previousStudy.innerText = study.timeframes.monthly.previous + "hrs"

        currentExercise.innerText = exercise.timeframes.monthly.current + "hrs"
        previousExercise.innerText = exercise.timeframes.monthly.previous + "hrs"

        currentSocial.innerText = social.timeframes.monthly.current + "hrs"
        previousSocial.innerText = social.timeframes.monthly.previous + "hrs"

        currentSelfCare.innerText = selfCare.timeframes.monthly.current + "hrs"
        previousSelfCare.innerText = selfCare.timeframes.monthly.previous + "hrs"
    }
}

selectorCard.addEventListener("click", changeValue)