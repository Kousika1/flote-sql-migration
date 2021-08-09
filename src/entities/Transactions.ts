import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("index_transactions_on_from", ["from"], {})
@Index("transactions_pkey", ["id"], { unique: true })
@Index("index_transactions_on_to", ["to"], {})
@Index("index_transactions_on_tx_hash", ["txHash"], {})
@Entity("transactions", { schema: "public" })
export class Transactions {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("integer", { name: "user_id", nullable: true })
  userId: number | null;

  @Column("varchar", { name: "tx_hash", nullable: true })
  txHash: string | null;

  @Column("timestamp", { name: "created_at", default: () => "CURRENT_TIMESTAMP" })
  createdAt: Date;

  @Column("timestamp", { name: "updated_at", default: () => "CURRENT_TIMESTAMP", onUpdate: "CURRENT_TIMESTAMP" })
  updatedAt: Date;

  @Column("boolean", {
    name: "confirmed",
    nullable: true,
    default: () => "false",
  })
  confirmed: boolean | null;

  @Column("integer", { name: "subscription_id", nullable: true })
  subscriptionId: number | null;

  @Column("varchar", { name: "to", nullable: true })
  to: string | null;

  @Column("varchar", { name: "from", nullable: true })
  from: string | null;

  @Column("numeric", { name: "amount", nullable: true })
  amount: string | null;

  @Column("numeric", { name: "amount_usd", nullable: true })
  amountUsd: string | null;

  @Column("varchar", { name: "message", nullable: true })
  message: string | null;

  @Column("integer", { name: "post_id", nullable: true })
  postId: number | null;

  @Column("timestamp", { name: "received", nullable: true })
  received: Date | null;

  @Column("numeric", { name: "fee", nullable: true })
  fee: string | null;

  @Column("varchar", { name: "wyre_id", nullable: true })
  wyreId: string | null;

  @Column("timestamp", {
    name: "transmitted_at",
    nullable: true,
  })
  transmittedAt: Date | null;

  @Column("integer", { name: "from_user_id", nullable: true })
  fromUserId: number | null;

  @Column("integer", { name: "to_user_id", nullable: true })
  toUserId: number | null;

  @Column("numeric", { name: "amount_fiat", nullable: true })
  amountFiat: string | null;

  @Column("integer", { name: "amount_sat", nullable: true })
  amountSat: number | null;

  @Column("boolean", {
    name: "notified",
    nullable: true,
    default: () => "false",
  })
  notified: boolean | null;

  @Column("boolean", { name: "failed", nullable: true, default: () => "false" })
  failed: boolean | null;

  @Column("timestamp", {
    name: "confirmed_at",
    nullable: true,
  })
  confirmedAt: Date | null;

  @Column("timestamp", {
    name: "last_updated_on",
    nullable: true,
  })
  lastUpdatedOn: Date | null;

  @Column("boolean", { name: "external", nullable: true })
  external: boolean | null;

  @Column("json", { name: "inputs", nullable: true })
  inputs: object | null;

  @Column("json", { name: "outputs", nullable: true })
  outputs: object | null;

  @Column("integer", { name: "fee_sat", nullable: true })
  feeSat: number | null;

  @Column("numeric", { name: "btc_price", nullable: true })
  btcPrice: string | null;
}
