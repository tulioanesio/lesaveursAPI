import {
  IsDateString,
  IsEmail,
  IsInt,
  IsNotEmpty,
  IsPhoneNumber,
  Length,
} from 'class-validator';

export class CreateReservaDTO {
  @IsNotEmpty()
  @Length(3, 100)
  nome: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsPhoneNumber("BR")
  telefone: string;

  @IsDateString()
  @IsNotEmpty()
  data: Date;

  @IsInt()
  @IsNotEmpty()
  mesaId: number;
}
