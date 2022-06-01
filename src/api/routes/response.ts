import { IsString, MaxLength } from 'class-validator';
  
  export class TravelValidator {
    @IsString()
    @MaxLength(10)
    description: string;
  }