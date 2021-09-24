const init = {
    cars: ['BMW']
}

export default function reduce(state = init, action, args) {
    switch (action) {
        case "ADD":
            const [newCar] = args;
            console.log({
                ...state,
                cars: [...state.cars, newCar],
            });
            return {
                ...state,
                cars: [...state.cars, newCar],
            };
            break;
        default:
            return state;
    }
}