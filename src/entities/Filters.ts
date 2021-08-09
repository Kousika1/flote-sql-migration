import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("filters_pkey", ["id"], { unique: true })
@Entity("filters", { schema: "public" })
export class Filters {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("varchar", { name: "word", nullable: true })
  word: string | null;

  @Column("timestamp", { name: "created_at", default: () => "CURRENT_TIMESTAMP" })
  createdAt: Date;

  @Column("timestamp", { name: "updated_at", default: () => "CURRENT_TIMESTAMP", onUpdate: "CURRENT_TIMESTAMP" })
  updatedAt: Date;
}
