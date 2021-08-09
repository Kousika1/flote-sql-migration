import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("unfollows_pkey", ["id"], { unique: true })
@Entity("unfollows", { schema: "public" })
export class Unfollows {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("integer", { name: "user_id", nullable: true })
  userId: number | null;

  @Column("integer", { name: "unfollowed_id", nullable: true })
  unfollowedId: number | null;

  @Column("timestamp", { name: "created_at", default: () => "CURRENT_TIMESTAMP" })
  createdAt: Date;

  @Column("timestamp", { name: "updated_at", default: () => "CURRENT_TIMESTAMP", onUpdate: "CURRENT_TIMESTAMP" })
  updatedAt: Date;
}
