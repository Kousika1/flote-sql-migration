import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("user_logs_pkey", ["id"], { unique: true })
@Entity("user_logs", { schema: "public" })
export class UserLogs {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("integer", { name: "user_id", nullable: true })
  userId: number | null;

  @Column("timestamp", { name: "created_at", default: () => "CURRENT_TIMESTAMP" })
  createdAt: Date;

  @Column("timestamp", { name: "updated_at", default: () => "CURRENT_TIMESTAMP", onUpdate: "CURRENT_TIMESTAMP" })
  updatedAt: Date;

  @Column("json", { name: "content", nullable: true })
  content: object | null;
}
