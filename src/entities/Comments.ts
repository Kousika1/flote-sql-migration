import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("comments_pkey", ["id"], { unique: true })
@Entity("comments", { schema: "public" })
export class Comments {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("integer", { name: "post_id", nullable: true })
  postId: number | null;

  @Column("integer", { name: "score", nullable: true })
  score: number | null;

  @Column("json", { name: "content", nullable: true })
  content: object | null;

  @Column("timestamp", { name: "created_at", default: () => "CURRENT_TIMESTAMP" })
  createdAt: Date;

  @Column("timestamp", { name: "updated_at", default: () => "CURRENT_TIMESTAMP", onUpdate: "CURRENT_TIMESTAMP" })
  updatedAt: Date;

  @Column("integer", { name: "user_id", nullable: true })
  userId: number | null;

  @Column("varchar", { name: "uuid", nullable: true })
  uuid: string | null;

  @Column("integer", { name: "comment_id", nullable: true })
  commentId: number | null;

  @Column("boolean", { name: "edited", nullable: true, default: () => "false" })
  edited: boolean | null;
}
