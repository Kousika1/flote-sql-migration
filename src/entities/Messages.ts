import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Files } from "./Files";

@Index(
  "index_messages_on_read_and_conversation_id",
  ["conversationId", "read"],
  {}
)
@Index("index_messages_on_conversation_id", ["conversationId"], {})
@Index("messages_pkey", ["id"], { unique: true })
@Index("index_messages_on_read", ["read"], {})
@Entity("messages", { schema: "public" })
export class Messages {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("integer", { name: "user_id", nullable: true })
  userId: number | null;

  @Column("varchar", { name: "text", nullable: true })
  text: string | null;

  @Column("varchar", { name: "link", nullable: true })
  link: string | null;

  @Column("timestamp", { name: "created_at", default: () => "CURRENT_TIMESTAMP" })
  createdAt: Date;

  @Column("timestamp", { name: "updated_at", default: () => "CURRENT_TIMESTAMP", onUpdate: "CURRENT_TIMESTAMP" })
  updatedAt: Date;

  @Column("boolean", { name: "read", nullable: true, default: () => "false" })
  read: boolean | null;

  @Column("integer", { name: "to", nullable: true })
  to: number | null;

  @Column("integer", { name: "from", nullable: true })
  from: number | null;

  @Column("varchar", { name: "uuid", nullable: true })
  uuid: string | null;

  @Column("numeric", { name: "amount", nullable: true })
  amount: string | null;

  @Column("integer", { name: "conversation_id", nullable: true })
  conversationId: number | null;

  @Column("varchar", { name: "from_public_key", nullable: true })
  fromPublicKey: string | null;

  @Column("varchar", { name: "to_public_key", nullable: true })
  toPublicKey: string | null;

  @Column("integer", { name: "amount_sat", nullable: true })
  amountSat: number | null;

  @Column("text", { name: "from_id", nullable: true })
  fromId: string | null;

  @OneToMany(() => Files, (files) => files.message)
  files: Files[];
}
