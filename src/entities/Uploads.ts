import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("uploads_pkey", ["id"], { unique: true })
@Entity("uploads", { schema: "public" })
export class Uploads {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("varchar", { name: "md5", nullable: true })
  md5: string | null;

  @Column("varchar", { name: "mime_type", nullable: true })
  mimeType: string | null;

  @Column("integer", { name: "user_id", nullable: true })
  userId: number | null;

  @Column("timestamp", { name: "created_at", default: () => "CURRENT_TIMESTAMP" })
  createdAt: Date;

  @Column("timestamp", { name: "updated_at", default: () => "CURRENT_TIMESTAMP", onUpdate: "CURRENT_TIMESTAMP" })
  updatedAt: Date;

  @Column("timestamp", {
    name: "optimization_start",
    nullable: true,
  })
  optimizationStart: Date | null;

  @Column("timestamp", {
    name: "optimization_end",
    nullable: true,
  })
  optimizationEnd: Date | null;

  @Column("integer", { name: "width", nullable: true })
  width: number | null;

  @Column("integer", { name: "height", nullable: true })
  height: number | null;

  @Column("varchar", { name: "optimized_md5", nullable: true })
  optimizedMd5: string | null;

  @Column("varchar", { name: "thumbnail_md5", nullable: true })
  thumbnailMd5: string | null;

  @Column("integer", { name: "width_cache", nullable: true })
  widthCache: number | null;

  @Column("integer", { name: "height_cache", nullable: true })
  heightCache: number | null;

  @Column("boolean", {
    name: "available_in_cdn",
    nullable: true,
    default: () => "false",
  })
  availableInCdn: boolean | null;

  @Column("boolean", {
    name: "migration_failed",
    nullable: true,
    default: () => "false",
  })
  migrationFailed: boolean | null;

  @Column("varchar", { name: "cdn_md5", nullable: true })
  cdnMd5: string | null;

  @Column("varchar", { name: "cdn_extension", nullable: true })
  cdnExtension: string | null;

  @Column("varchar", { name: "blurhash_cache", nullable: true })
  blurhashCache: string | null;

  @Column("varchar", { name: "optimized_url_cache", nullable: true })
  optimizedUrlCache: string | null;

  @Column("boolean", { name: "optimized_cache", nullable: true })
  optimizedCache: boolean | null;

  @Column("varchar", { name: "cdn_key", nullable: true })
  cdnKey: string | null;

  @Column("json", { name: "cdn_info_cache", nullable: true })
  cdnInfoCache: object | null;

  @Column("varchar", { name: "sha256", nullable: true })
  sha256: string | null;

  @Column("double precision", {
    name: "duration",
    nullable: true,
    precision: 53,
  })
  duration: number | null;

  @Column("boolean", { name: "space", nullable: true, default: () => "false" })
  space: boolean | null;

  @Column("bigint", { name: "content_length_cache", nullable: true })
  contentLengthCache: string | null;

  @Column("integer", { name: "estimated_transcoding_time", nullable: true })
  estimatedTranscodingTime: number | null;

  @Column("varchar", { name: "filename", nullable: true })
  filename: string | null;
}
