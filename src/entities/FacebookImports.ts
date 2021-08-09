import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("facebook_imports_pkey", ["id"], { unique: true })
@Entity("facebook_imports", { schema: "public" })
export class FacebookImports {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("timestamp", { name: "started_at", nullable: true })
  startedAt: Date | null;

  @Column("varchar", { name: "url", nullable: true })
  url: string | null;

  @Column("integer", { name: "user_id", nullable: true })
  userId: number | null;

  @Column("boolean", { name: "success", nullable: true })
  success: boolean | null;

  @Column("json", { name: "debug_info", nullable: true })
  debugInfo: object | null;

  @Column("varchar", { name: "error", nullable: true })
  error: string | null;

  @Column("timestamp", { name: "created_at", default: () => "CURRENT_TIMESTAMP" })
  createdAt: Date;

  @Column("timestamp", { name: "updated_at", default: () => "CURRENT_TIMESTAMP", onUpdate: "CURRENT_TIMESTAMP" })
  updatedAt: Date;

  @Column("integer", { name: "total_imported_posts", nullable: true })
  totalImportedPosts: number | null;
}
