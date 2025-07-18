import { IsBoolean, IsInt, IsNotEmpty } from 'class-validator';

export class CreateMesaDTO {
  @IsInt()
  @IsNotEmpty()
  numero: number;

  @IsInt()
  @IsNotEmpty()
  capacidade: number;

  @IsBoolean()
  @IsNotEmpty()
  disponivel?: boolean;
}
