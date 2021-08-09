import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("invoices_pkey", ["id"], { unique: true })
@Entity("invoices", { schema: "public" })
export class Invoices {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("numeric", { name: "amount_fiat", nullable: true })
  amountFiat: string | null;

  @Column("double precision", { name: "amount", nullable: true, precision: 53 })
  amount: number | null;

  @Column("varchar", { name: "currency", nullable: true })
  currency: string | null;

  @Column("timestamp", { name: "created_at", default: () => "CURRENT_TIMESTAMP" })
  createdAt: Date;

  @Column("timestamp", { name: "updated_at", default: () => "CURRENT_TIMESTAMP", onUpdate: "CURRENT_TIMESTAMP" })
  updatedAt: Date;

  @Column("integer", { name: "payment_address_id", nullable: true })
  paymentAddressId: number | null;

  @Column("boolean", { name: "paid", nullable: true })
  paid: boolean | null;

  @Column("integer", { name: "user_id", nullable: true })
  userId: number | null;

  @Column("text", { name: "powerchat_message", nullable: true })
  powerchatMessage: string | null;
}
