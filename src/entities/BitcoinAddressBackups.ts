import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("bitcoin_address_backups_pkey", ["id"], { unique: true })
@Entity("bitcoin_address_backups", { schema: "public" })
export class BitcoinAddressBackups {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("integer", { name: "bitcoin_address_id", nullable: true })
  bitcoinAddressId: number | null;

  @Column("varchar", { name: "private_key", nullable: true })
  privateKey: string | null;

  @Column("varchar", { name: "salt", nullable: true })
  salt: string | null;

  @Column("timestamp", { name: "created_at", default: () => "CURRENT_TIMESTAMP" })
  createdAt: Date;

  @Column("timestamp", { name: "updated_at", default: () => "CURRENT_TIMESTAMP", onUpdate: "CURRENT_TIMESTAMP" })
  updatedAt: Date;

  @Column("varchar", { name: "wif", nullable: true })
  wif: string | null;
}
