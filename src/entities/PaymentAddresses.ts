import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("payment_addresses_pkey", ["id"], { unique: true })
@Entity("payment_addresses", { schema: "public" })
export class PaymentAddresses {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("integer", { name: "user_id", nullable: true })
  userId: number | null;

  @Column("integer", { name: "creator_id", nullable: true })
  creatorId: number | null;

  @Column("varchar", { name: "priv", nullable: true })
  priv: string | null;

  @Column("varchar", { name: "pub", nullable: true })
  pub: string | null;

  @Column("varchar", { name: "addr", nullable: true })
  addr: string | null;

  @Column("varchar", { name: "wif", nullable: true })
  wif: string | null;

  @Column("timestamp", { name: "created_at", default: () => "CURRENT_TIMESTAMP" })
  createdAt: Date;

  @Column("timestamp", { name: "updated_at", default: () => "CURRENT_TIMESTAMP", onUpdate: "CURRENT_TIMESTAMP" })
  updatedAt: Date;

  @Column("varchar", { name: "delivery_address", nullable: true })
  deliveryAddress: string | null;

  @Column("varchar", { name: "currency", nullable: true })
  currency: string | null;

  @Column("varchar", { name: "key", nullable: true })
  key: string | null;

  @Column("boolean", { name: "funded", nullable: true, default: () => "false" })
  funded: boolean | null;

  @Column("integer", { name: "usd_amount", nullable: true })
  usdAmount: number | null;

  @Column("double precision", {
    name: "crypto_amount",
    nullable: true,
    precision: 53,
  })
  cryptoAmount: number | null;

  @Column("integer", { name: "invoice_id", nullable: true })
  invoiceId: number | null;

  @Column("boolean", { name: "sent", nullable: true, default: () => "false" })
  sent: boolean | null;

  @Column("varchar", { name: "forward_tx_hash", nullable: true })
  forwardTxHash: string | null;
}
