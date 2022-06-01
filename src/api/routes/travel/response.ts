import { IsString, MaxLength } from 'class-validator';
  
class TravelValidator {
  @IsString()
  @MaxLength(100)
  description: string;
}

export { TravelValidator }