import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("metrics_pkey", ["id"], { unique: true })
@Entity("metrics", { schema: "public" })
export class Metrics {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("varchar", { name: "key", nullable: true })
  key: string | null;

  @Column("double precision", { name: "value", nullable: true, precision: 53 })
  value: number | null;

  @Column("timestamp", { name: "created_at", default: () => "CURRENT_TIMESTAMP" })
  createdAt: Date;

  @Column("timestamp", { name: "updated_at", default: () => "CURRENT_TIMESTAMP", onUpdate: "CURRENT_TIMESTAMP" })
  updatedAt: Date;
}
