const datas = {
    mood: ['strong', 'weak', 'normal'],
    muscle: ['chest', 'legs', 'shoulders', 'biceps'],
    typeOfTraining: ['strength', 'muscle growth', 'muscle maintenance'],
    sets: [2, 3, 4],
    reps: [6, 8, 10, 12, 15],
    restTime: [1, 2, 3, 4]
}

const getTypeOfMessage = () => {

    return Math.floor(Math.random() * 3) + 1

}

const generateMessage = () => {

    const mood = datas.mood[Math.floor(Math.random() * datas.mood.length)]
    const muscle = datas.muscle[Math.floor(Math.random() * datas.muscle.length)]
    const typeOfTraining = datas.typeOfTraining[Math.floor(Math.random() * datas.typeOfTraining.length)]
    const sets = datas.sets[Math.floor(Math.random() * datas.sets.length)]
    const reps = datas.reps[Math.floor(Math.random() * datas.reps.length)]
    const restTime = datas.restTime[Math.floor(Math.random() * datas.restTime.length)]

    const typeOfMessage = getTypeOfMessage()

    let message = ''

    if (typeOfMessage === 1) {
        
        message = `
        Today you woke up feeling ${mood}.
        And you should train ${muscle} focusing ${typeOfTraining}.
        You should do ${sets} sets, ${reps} reps and rest ${restTime} minutes between sets.
        `

    } else if (typeOfMessage === 2) {

        message = `
        You got up and felt ${mood}.
        You want to train ${muscle} while focusing ${typeOfTraining}.
        You'll do ${sets} sets with ${reps} reps and rest ${restTime} minutes each set.
        `

    } else {

        message = `
        You woke up not feeling ${mood}.
        You'll probably train ${muscle} today and focus on ${typeOfTraining}.
        Do ${sets} sets, ${reps} reps each and rest for ${restTime} minutes each set.
        `

    }

    console.log(message)

}

generateMessage()