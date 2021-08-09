import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("bitcoin_addresses_pkey", ["id"], { unique: true })
@Entity("bitcoin_addresses", { schema: "public" })
export class BitcoinAddresses {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("varchar", { name: "address", nullable: true })
  address: string | null;

  @Column("varchar", { name: "private_key", nullable: true })
  privateKey: string | null;

  @Column("varchar", { name: "public_key", nullable: true })
  publicKey: string | null;

  @Column("varchar", { name: "wif", nullable: true })
  wif: string | null;

  @Column("varchar", { name: "salt", nullable: true })
  salt: string | null;

  @Column("timestamp", { name: "created_at", default: () => "CURRENT_TIMESTAMP" })
  createdAt: Date;

  @Column("timestamp", { name: "updated_at", default: () => "CURRENT_TIMESTAMP", onUpdate: "CURRENT_TIMESTAMP" })
  updatedAt: Date;

  @Column("integer", { name: "user_id", nullable: true })
  userId: number | null;

  @Column("boolean", {
    name: "disabled",
    nullable: true,
    default: () => "false",
  })
  disabled: boolean | null;

  @Column("boolean", {
    name: "password_lost",
    nullable: true,
    default: () => "false",
  })
  passwordLost: boolean | null;
}
