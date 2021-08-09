import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("post_boosts_pkey", ["id"], { unique: true })
@Entity("post_boosts", { schema: "public" })
export class PostBoosts {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("integer", { name: "post_id", nullable: true })
  postId: number | null;

  @Column("integer", { name: "impressions", nullable: true })
  impressions: number | null;

  @Column("timestamp", { name: "created_at", default: () => "CURRENT_TIMESTAMP" })
  createdAt: Date;

  @Column("timestamp", { name: "updated_at", default: () => "CURRENT_TIMESTAMP", onUpdate: "CURRENT_TIMESTAMP" })
  updatedAt: Date;
}
