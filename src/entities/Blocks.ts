import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("index_blocks_on_user_id_and_blocked_id", ["blockedId", "userId"], {})
@Index("blocks_pkey", ["id"], { unique: true })
@Entity("blocks", { schema: "public" })
export class Blocks {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("integer", { name: "user_id", nullable: true })
  userId: number | null;

  @Column("integer", { name: "blocked_id", nullable: true })
  blockedId: number | null;

  @Column("timestamp", { name: "created_at", default: () => "CURRENT_TIMESTAMP" })
  createdAt: Date;

  @Column("timestamp", { name: "updated_at", default: () => "CURRENT_TIMESTAMP", onUpdate: "CURRENT_TIMESTAMP" })
  updatedAt: Date;
}
