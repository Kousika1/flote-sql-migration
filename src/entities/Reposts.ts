import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("reposts_pkey", ["id"], { unique: true })
@Index("index_reposts_on_user_id", ["userId"], {})
@Entity("reposts", { schema: "public" })
export class Reposts {
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

  @Column("boolean", { name: "post_user_disabled_cache", nullable: true })
  postUserDisabledCache: boolean | null;

  @Column("boolean", { name: "post_dead_cache", nullable: true })
  postDeadCache: boolean | null;
}
