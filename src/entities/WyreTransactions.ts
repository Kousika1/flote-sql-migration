import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("wyre_transactions_pkey", ["id"], { unique: true })
@Entity("wyre_transactions", { schema: "public" })
export class WyreTransactions {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("integer", { name: "user_id", nullable: true })
  userId: number | null;

  @Column("boolean", {
    name: "confirmed",
    nullable: true,
    default: () => "false",
  })
  confirmed: boolean | null;

  @Column("varchar", { name: "wyre_id", nullable: true })
  wyreId: string | null;

  @Column("integer", { name: "support_id", nullable: true })
  supportId: number | null;

  @Column("timestamp", { name: "created_at", default: () => "CURRENT_TIMESTAMP" })
  createdAt: Date;

  @Column("timestamp", { name: "updated_at", default: () => "CURRENT_TIMESTAMP", onUpdate: "CURRENT_TIMESTAMP" })
  updatedAt: Date;
}
