import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("payments_pkey", ["id"], { unique: true })
@Entity("payments", { schema: "public" })
export class Payments {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("integer", { name: "user_id", nullable: true })
  userId: number | null;

  @Column("integer", { name: "transaction_id", nullable: true })
  transactionId: number | null;

  @Column("timestamp", { name: "created_at", default: () => "CURRENT_TIMESTAMP" })
  createdAt: Date;

  @Column("timestamp", { name: "updated_at", default: () => "CURRENT_TIMESTAMP", onUpdate: "CURRENT_TIMESTAMP" })
  updatedAt: Date;
}
