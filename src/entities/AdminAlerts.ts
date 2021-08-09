import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("admin_alerts_pkey", ["id"], { unique: true })
@Entity("admin_alerts", { schema: "public" })
export class AdminAlerts {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("text", { name: "message", nullable: true })
  message: string | null;

  @Column("timestamp", { name: "created_at", default: () => "CURRENT_TIMESTAMP" })
  createdAt: Date;

  @Column("timestamp", { name: "updated_at", default: () => "CURRENT_TIMESTAMP", onUpdate: "CURRENT_TIMESTAMP" })
  updatedAt: Date;
}
