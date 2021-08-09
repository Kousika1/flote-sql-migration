import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("support_payments_pkey", ["id"], { unique: true })
@Entity("support_payments", { schema: "public" })
export class SupportPayments {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("integer", { name: "support_id", nullable: true })
  supportId: number | null;

  @Column("boolean", { name: "successful", nullable: true })
  successful: boolean | null;

  @Column("varchar", { name: "error", nullable: true })
  error: string | null;

  @Column("timestamp", { name: "created_at", default: () => "CURRENT_TIMESTAMP" })
  createdAt: Date;

  @Column("timestamp", { name: "updated_at", default: () => "CURRENT_TIMESTAMP", onUpdate: "CURRENT_TIMESTAMP" })
  updatedAt: Date;

  @Column("integer", { name: "amount", nullable: true })
  amount: number | null;

  @Column("varchar", { name: "tx_hash", nullable: true })
  txHash: string | null;
}
