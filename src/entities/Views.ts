import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("views_pkey", ["id"], { unique: true })
@Entity("views", { schema: "public" })
export class Views {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("integer", { name: "upload_id", nullable: true })
  uploadId: number | null;

  @Column("timestamp", { name: "created_at", default: () => "CURRENT_TIMESTAMP" })
  createdAt: Date;

  @Column("timestamp", { name: "updated_at", default: () => "CURRENT_TIMESTAMP", onUpdate: "CURRENT_TIMESTAMP" })
  updatedAt: Date;

  @Column("varchar", { name: "session_id", nullable: true })
  sessionId: string | null;

  @Column("integer", { name: "livestream_id", nullable: true })
  livestreamId: number | null;

  @Column("timestamp", { name: "last_ping", nullable: true })
  lastPing: Date | null;

  @Column("integer", { name: "post_id", nullable: true })
  postId: number | null;
}
