import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Avion } from '../../aviones/entities/avion.entity';
import { ESTADO_OPERATIVO } from 'src/common/enums/estado-operativo.enum';
import { CategoriaModelo } from 'src/common/enums/categoria-modelo.enum';

@Entity()
export class ModeloAvion {
  @PrimaryGeneratedColumn()
  modelo_Avion_Id: number;

  @Column({ nullable: false, length: 25 })
  modelo_Avion_Nombre: string;

  @Column({ nullable: false, type: 'enum', enum: ESTADO_OPERATIVO })
  modelo_Avion_Estado: ESTADO_OPERATIVO;

  @Column({ nullable: false, type: 'enum', enum: CategoriaModelo })
  modelo_Avion_Categoria: CategoriaModelo;

  @OneToMany(() => Avion, (avion) => avion.modeloAvionId)
  avion_Id: Avion[];
}
