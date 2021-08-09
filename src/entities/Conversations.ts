import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("conversations_pkey", ["id"], { unique: true })
@Index("index_conversations_on_uuid", ["uuid"], {})
@Entity("conversations", { schema: "public" })
export class Conversations {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("timestamp", { name: "created_at", default: () => "CURRENT_TIMESTAMP" })
  createdAt: Date;

  @Column("timestamp", { name: "updated_at", default: () => "CURRENT_TIMESTAMP", onUpdate: "CURRENT_TIMESTAMP" })
  updatedAt: Date;

  @Column("varchar", { name: "uuid", nullable: true })
  uuid: string | null;

  @Column("integer", { name: "messages_count", nullable: true })
  messagesCount: number | null;

  @Column("integer", { name: "owner_id", nullable: true })
  ownerId: number | null;

  @Column("boolean", { name: "encrypted", nullable: true })
  encrypted: boolean | null;

  @Column("boolean", {
    name: "powerchat",
    nullable: true,
    default: () => "false",
  })
  powerchat: boolean | null;

  @Column("boolean", { name: "group", nullable: true, default: () => "false" })
  group: boolean | null;

  @Column("varchar", { name: "group_name", nullable: true })
  groupName: string | null;

  @Column("integer", { name: "last_message_id", nullable: true })
  lastMessageId: number | null;

  @Column("timestamp", {
    name: "last_message_date",
    nullable: true,
  })
  lastMessageDate: Date | null;

  @Column("integer", { name: "messages_counter_cache", nullable: true })
  messagesCounterCache: number | null;

  @Column("integer", { name: "livestream_user_id", nullable: true })
  livestreamUserId: number | null;

  @Column("boolean", { name: "private_conversation", nullable: true })
  privateConversation: boolean | null;

  @Column("boolean", { name: "public_conversation", nullable: true })
  publicConversation: boolean | null;
}
