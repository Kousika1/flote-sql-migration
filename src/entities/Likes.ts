import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("likes_pkey", ["id"], { unique: true })
@Index("index_likes_on_post_id", ["postId"], {})
@Entity("likes", { schema: "public" })
export class Likes {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("integer", { name: "user_id", nullable: true })
  userId: number | null;

  @Column("integer", { name: "post_id", nullable: true })
  postId: number | null;

  @Column("timestamp", { name: "created_at", default: () => "CURRENT_TIMESTAMP" })
  createdAt: Date;

  @Column("timestamp", { name: "updated_at", default: () => "CURRENT_TIMESTAMP", onUpdate: "CURRENT_TIMESTAMP" })
  updatedAt: Date;
}
