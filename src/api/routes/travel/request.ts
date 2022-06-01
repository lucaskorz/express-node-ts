import { Body, Get, JsonController, OnUndefined, Post } from "routing-controllers";
import { TravelValidator } from "./response";
import { create, getAll } from "./service";


@JsonController('/travel')
export class TravelController {

    // rota de criação de viagem
    @Post('')
    @OnUndefined(201)
    create(@Body() createTravel: TravelValidator) {
        return create(createTravel);
    }

    @Get('')
    getAllTravels() {
        return getAll();
    }
}