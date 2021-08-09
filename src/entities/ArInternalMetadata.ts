import { Column, Entity, Index } from "typeorm";

@Index("ar_internal_metadata_pkey", ["key"], { unique: true })
@Entity("ar_internal_metadata", { schema: "public" })
export class ArInternalMetadata {
  @Column("varchar", { primary: true, name: "key" })
  key: string;

  @Column("varchar", { name: "value", nullable: true })
  value: string | null;

  @Column("timestamp", { name: "created_at", default: () => "CURRENT_TIMESTAMP" })
  createdAt: Date;

  @Column("timestamp", { name: "updated_at", default: () => "CURRENT_TIMESTAMP", onUpdate: "CURRENT_TIMESTAMP" })
  updatedAt: Date;
}
