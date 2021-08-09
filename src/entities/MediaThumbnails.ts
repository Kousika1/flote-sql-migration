import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("media_thumbnails_pkey", ["id"], { unique: true })
@Entity("media_thumbnails", { schema: "public" })
export class MediaThumbnails {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("varchar", { name: "md5", nullable: true })
  md5: string | null;

  @Column("integer", { name: "user_id", nullable: true })
  userId: number | null;

  @Column("varchar", { name: "url", nullable: true })
  url: string | null;

  @Column("timestamp", { name: "created_at", default: () => "CURRENT_TIMESTAMP" })
  createdAt: Date;

  @Column("timestamp", { name: "updated_at", default: () => "CURRENT_TIMESTAMP", onUpdate: "CURRENT_TIMESTAMP" })
  updatedAt: Date;

  @Column("varchar", { name: "extension", nullable: true })
  extension: string | null;

  @Column("varchar", { name: "cdn_key", nullable: true })
  cdnKey: string | null;
}
