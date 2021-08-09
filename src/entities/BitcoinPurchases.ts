import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("bitcoin_purchases_pkey", ["id"], { unique: true })
@Entity("bitcoin_purchases", { schema: "public" })
export class BitcoinPurchases {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("integer", { name: "user_id", nullable: true })
  userId: number | null;

  @Column("integer", { name: "amount", nullable: true })
  amount: number | null;

  @Column("varchar", { name: "wyre_transaction_id", nullable: true })
  wyreTransactionId: string | null;

  @Column("timestamp", { name: "created_at", default: () => "CURRENT_TIMESTAMP" })
  createdAt: Date;

  @Column("timestamp", { name: "updated_at", default: () => "CURRENT_TIMESTAMP", onUpdate: "CURRENT_TIMESTAMP" })
  updatedAt: Date;
}
