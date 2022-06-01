import { Body, JsonController, Post } from "routing-controllers";
import { TravelValidator } from "./response";
import { create } from "./service";


@JsonController('/travel')
export class TravelController {

    // rota de criação de viagem
    @Post('')
    create(@Body() createTravel: TravelValidator) {
        return create(createTravel);
    }
}