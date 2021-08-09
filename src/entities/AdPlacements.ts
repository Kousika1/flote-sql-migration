import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("ad_placements_pkey", ["id"], { unique: true })
@Entity("ad_placements", { schema: "public" })
export class AdPlacements {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("varchar", { name: "name", nullable: true })
  name: string | null;

  @Column("timestamp", { name: "created_at", default: () => "CURRENT_TIMESTAMP" })
  createdAt: Date;

  @Column("timestamp", { name: "updated_at", default: () => "CURRENT_TIMESTAMP", onUpdate: "CURRENT_TIMESTAMP" })
  updatedAt: Date;

  @Column("varchar", { name: "uuid", nullable: true })
  uuid: string | null;
}
