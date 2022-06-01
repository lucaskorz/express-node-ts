import { Travel } from "../../model/travel";
import { TravelValidator } from "./response";

const travels: Travel[] = []

export const create = async (travelValidator: TravelValidator) => {
    const travel = new Travel;

    Object.assign(travel, {
        description: travelValidator.description
    })

    travels.push(travel);
    return travel;
}

export const getAll = async () => {
    return travels;
}
