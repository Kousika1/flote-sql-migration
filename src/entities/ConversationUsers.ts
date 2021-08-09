import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("conversation_users_pkey", ["id"], { unique: true })
@Index("index_conversation_users_on_user_id", ["userId"], {})
@Entity("conversation_users", { schema: "public" })
export class ConversationUsers {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("integer", { name: "user_id", nullable: true })
  userId: number | null;

  @Column("integer", { name: "conversation_id", nullable: true })
  conversationId: number | null;

  @Column("timestamp", { name: "created_at", default: () => "CURRENT_TIMESTAMP" })
  createdAt: Date;

  @Column("timestamp", { name: "updated_at", default: () => "CURRENT_TIMESTAMP", onUpdate: "CURRENT_TIMESTAMP" })
  updatedAt: Date;

  @Column("boolean", { name: "muted", nullable: true })
  muted: boolean | null;

  @Column("boolean", {
    name: "deprecated",
    nullable: true,
    default: () => "false",
  })
  deprecated: boolean | null;

  @Column("boolean", { name: "isread", nullable: true, default: () => "true" })
  isread: boolean | null;
}
