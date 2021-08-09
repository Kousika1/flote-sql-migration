import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("sender_keys_pkey", ["id"], { unique: true })
@Entity("sender_keys", { schema: "public" })
export class SenderKeys {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("varchar", { name: "encrypted_key", nullable: true })
  encryptedKey: string | null;

  @Column("integer", { name: "channel_id", nullable: true })
  channelId: number | null;

  @Column("integer", { name: "sender_id", nullable: true })
  senderId: number | null;

  @Column("integer", { name: "receiver_id", nullable: true })
  receiverId: number | null;

  @Column("timestamp", { name: "created_at", default: () => "CURRENT_TIMESTAMP" })
  createdAt: Date;

  @Column("timestamp", { name: "updated_at", default: () => "CURRENT_TIMESTAMP", onUpdate: "CURRENT_TIMESTAMP" })
  updatedAt: Date;

  @Column("integer", { name: "conversation_id", nullable: true })
  conversationId: number | null;

  @Column("integer", { name: "user_id", nullable: true })
  userId: number | null;

  @Column("text", { name: "encrypted_private_key", nullable: true })
  encryptedPrivateKey: string | null;
}
