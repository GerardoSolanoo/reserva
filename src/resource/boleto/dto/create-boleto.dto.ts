import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateBoletoDto {
  @ApiProperty({
    description: 'ID del usuario',
    nullable: false,
  })
  @IsNotEmpty()
  Usuario: number;

  @ApiProperty({
    description: 'ID del viaje',
    nullable: false,
  })
  @IsNotEmpty()
  Viaje: number;

  @ApiProperty({
    description: 'Número de boleto',
    nullable: false,
  })
  @IsNotEmpty()
  Numero_Boleto: string;

  @ApiProperty({
    description: 'Fecha de compra del boleto',
    nullable: false,
  })
  @IsNotEmpty()
  Fecha_Compra: Date;

  @ApiProperty({
    description: 'Precio del boleto',
    nullable: false,
  })
  @IsNotEmpty()
  Precio: number;

  @ApiProperty({
    description: 'Estado de pago del boleto',
    nullable: false,
  })
  @IsNotEmpty()
  Estado_Pago: boolean;
}
