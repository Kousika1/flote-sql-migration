import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("old_sender_keys_pkey", ["id"], { unique: true })
@Entity("old_sender_keys", { schema: "public" })
export class OldSenderKeys {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("varchar", { name: "salt", nullable: true })
  salt: string | null;

  @Column("varchar", { name: "encrypted_key", nullable: true })
  encryptedKey: string | null;

  @Column("integer", { name: "user_id", nullable: true })
  userId: number | null;

  @Column("timestamp", { name: "created_at", default: () => "CURRENT_TIMESTAMP" })
  createdAt: Date;

  @Column("timestamp", { name: "updated_at", default: () => "CURRENT_TIMESTAMP", onUpdate: "CURRENT_TIMESTAMP" })
  updatedAt: Date;
}
