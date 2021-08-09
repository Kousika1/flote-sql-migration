import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("votes_pkey", ["id"], { unique: true })
@Entity("votes", { schema: "public" })
export class Votes {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("boolean", { name: "up", nullable: true })
  up: boolean | null;

  @Column("integer", { name: "post_id", nullable: true })
  postId: number | null;

  @Column("integer", { name: "user_id", nullable: true })
  userId: number | null;

  @Column("timestamp", { name: "created_at", default: () => "CURRENT_TIMESTAMP" })
  createdAt: Date;

  @Column("timestamp", { name: "updated_at", default: () => "CURRENT_TIMESTAMP", onUpdate: "CURRENT_TIMESTAMP" })
  updatedAt: Date;
}
