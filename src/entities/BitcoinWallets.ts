import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("bitcoin_wallets_pkey", ["id"], { unique: true })
@Entity("bitcoin_wallets", { schema: "public" })
export class BitcoinWallets {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("varchar", { name: "private_key", nullable: true })
  privateKey: string | null;

  @Column("varchar", { name: "public_key", nullable: true })
  publicKey: string | null;

  @Column("varchar", { name: "address", nullable: true })
  address: string | null;

  @Column("varchar", { name: "wif", nullable: true })
  wif: string | null;

  @Column("integer", { name: "user_id", nullable: true })
  userId: number | null;

  @Column("timestamp", { name: "created_at", default: () => "CURRENT_TIMESTAMP" })
  createdAt: Date;

  @Column("timestamp", { name: "updated_at", default: () => "CURRENT_TIMESTAMP", onUpdate: "CURRENT_TIMESTAMP" })
  updatedAt: Date;

  @Column("varchar", { name: "salt", nullable: true })
  salt: string | null;
}
