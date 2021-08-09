import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("average_transaction_fees_pkey", ["id"], { unique: true })
@Entity("average_transaction_fees", { schema: "public" })
export class AverageTransactionFees {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("integer", { name: "sat_byte", nullable: true })
  satByte: number | null;

  @Column("timestamp", { name: "created_at", default: () => "CURRENT_TIMESTAMP" })
  createdAt: Date;

  @Column("timestamp", { name: "updated_at", default: () => "CURRENT_TIMESTAMP", onUpdate: "CURRENT_TIMESTAMP" })
  updatedAt: Date;
}
