import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("post_uploads_pkey", ["id"], { unique: true })
@Entity("post_uploads", { schema: "public" })
export class PostUploads {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("integer", { name: "post_id", nullable: true })
  postId: number | null;

  @Column("integer", { name: "upload_id", nullable: true })
  uploadId: number | null;

  @Column("timestamp", { name: "created_at", default: () => "CURRENT_TIMESTAMP" })
  createdAt: Date;

  @Column("timestamp", { name: "updated_at", default: () => "CURRENT_TIMESTAMP", onUpdate: "CURRENT_TIMESTAMP" })
  updatedAt: Date;

  @Column("integer", { name: "order", nullable: true })
  order: number | null;

  @Column("integer", { name: "post_order", nullable: true })
  postOrder: number | null;
}
