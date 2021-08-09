import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("url_metadata_pkey", ["id"], { unique: true })
@Entity("url_metadata", { schema: "public" })
export class UrlMetadata {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("varchar", { name: "url", nullable: true })
  url: string | null;

  @Column("json", { name: "metadata", nullable: true })
  metadata: object | null;

  @Column("timestamp", { name: "created_at", default: () => "CURRENT_TIMESTAMP" })
  createdAt: Date;

  @Column("timestamp", { name: "updated_at", default: () => "CURRENT_TIMESTAMP", onUpdate: "CURRENT_TIMESTAMP" })
  updatedAt: Date;
}
