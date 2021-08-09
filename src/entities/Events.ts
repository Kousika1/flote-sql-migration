import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("events_pkey", ["id"], { unique: true })
@Entity("events", { schema: "public" })
export class Events {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("integer", { name: "channel_id", nullable: true })
  channelId: number | null;

  @Column("integer", { name: "user_id", nullable: true })
  userId: number | null;

  @Column("varchar", { name: "tag", nullable: true })
  tag: string | null;

  @Column("json", { name: "content", nullable: true })
  content: object | null;

  @Column("timestamp", { name: "created_at", default: () => "CURRENT_TIMESTAMP" })
  createdAt: Date;

  @Column("timestamp", { name: "updated_at", default: () => "CURRENT_TIMESTAMP", onUpdate: "CURRENT_TIMESTAMP" })
  updatedAt: Date;
}
