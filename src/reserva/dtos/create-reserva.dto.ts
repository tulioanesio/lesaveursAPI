import {
  IsDateString,
  IsEmail,
  IsInt,
  IsNotEmpty,
  IsPhoneNumber,
  IsString,
  Length,
  Matches,
} from 'class-validator';

export class CreateReservaDTO {
  @IsNotEmpty()
  @Length(3, 100)
  @Matches(/[a-zA-ZÀ-ú]/, { message: 'O nome deve conter letras.' })
  nome: string;

  @IsNotEmpty()
  @IsEmail({}, { message: 'O e-mail deve ser um endereço de e-mail válido.' })
  email: string;

  @IsNotEmpty()
  @IsPhoneNumber("BR", { message: 'O telefone deve ser um número de telefone válido.' })
  telefone: string;

  @IsDateString()
  @IsNotEmpty({ message: 'A data é obrigatória.' })
  data: Date;

  @IsInt()
  @IsNotEmpty()
  mesaId: number;
}
