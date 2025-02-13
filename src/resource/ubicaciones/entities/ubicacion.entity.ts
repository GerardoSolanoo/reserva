import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Aeropuerto } from '../../aeropuertos/entities/aeropuerto.entity';
import { TarifaDistancia } from 'src/resource/tarifas-distancia/entities/tarifa-distancia.entity';

@Entity()
export class Ubicacion {
  @PrimaryGeneratedColumn()
  ubicacion_Id: number;

  @Column({ nullable: false, length: 224 })
  ubicacion_Nombre: string;

  @Column({ type: 'decimal', precision: 10, scale: 8, nullable: false })
  latitud: number;

  @Column({ type: 'decimal', precision: 11, scale: 8, nullable: false })
  longitud: number;

  @Column({ type: 'varchar', nullable: false })
  timezone: string

  @OneToMany(() => Aeropuerto, (aeropuerto) => aeropuerto.aeropuerto_Ubicacion)
  aeropuertosId: Aeropuerto[];

  @OneToMany(
    () => TarifaDistancia,
    (tarifaDistancia) => tarifaDistancia.origenId,
  )
  tarifaDistanciaOrigen: TarifaDistancia;

  @OneToMany(
    () => TarifaDistancia,
    (tarifaDistancia) => tarifaDistancia.destinoId,
  )
  tarifaDistanciaDestino: TarifaDistancia;
}
