import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("transaction_inputs_pkey", ["id"], { unique: true })
@Entity("transaction_inputs", { schema: "public" })
export class TransactionInputs {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("varchar", { name: "address", nullable: true })
  address: string | null;

  @Column("numeric", { name: "value", nullable: true })
  value: string | null;

  @Column("integer", { name: "transaction_id", nullable: true })
  transactionId: number | null;

  @Column("timestamp", { name: "created_at", default: () => "CURRENT_TIMESTAMP" })
  createdAt: Date;

  @Column("timestamp", { name: "updated_at", default: () => "CURRENT_TIMESTAMP", onUpdate: "CURRENT_TIMESTAMP" })
  updatedAt: Date;

  @Column("bigint", { name: "amount_sat", nullable: true })
  amountSat: string | null;
}
