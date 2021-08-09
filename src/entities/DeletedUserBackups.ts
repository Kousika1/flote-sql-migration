import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("deleted_user_backups_pkey", ["id"], { unique: true })
@Entity("deleted_user_backups", { schema: "public" })
export class DeletedUserBackups {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("varchar", { name: "private_key", nullable: true })
  privateKey: string | null;

  @Column("varchar", { name: "public_key", nullable: true })
  publicKey: string | null;

  @Column("varchar", { name: "wif", nullable: true })
  wif: string | null;

  @Column("varchar", { name: "address", nullable: true })
  address: string | null;

  @Column("varchar", { name: "name", nullable: true })
  name: string | null;

  @Column("timestamp", { name: "created_at", default: () => "CURRENT_TIMESTAMP" })
  createdAt: Date;

  @Column("timestamp", { name: "updated_at", default: () => "CURRENT_TIMESTAMP", onUpdate: "CURRENT_TIMESTAMP" })
  updatedAt: Date;
}
