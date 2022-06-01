import { Middleware, ExpressErrorMiddlewareInterface } from 'routing-controllers';
import { ValidationError } from 'class-validator';

@Middleware({ type: 'after' })
export class CustomErrorHandler implements ExpressErrorMiddlewareInterface {
    public error(error: any, request: any, response: any, next: (err: any) => any) {
        if (error?.errors?.every((error: any) => error instanceof ValidationError)) {
            const parsedError = error?.errors?.map((error) => {
                return this.parseValidationError(error);
            })
            return response.status(error.httpCode).json(parsedError);
        }
        return response.status(error.httpCode).json(error);
    }

    parseValidationError(error: ValidationError): any {
        return {
            property: error?.property,
            reicevedValue: error?.value,
            validation: Object.values(error?.constraints ?? {})
        }
    }
}