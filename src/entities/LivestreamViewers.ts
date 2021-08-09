import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("livestream_viewers_pkey", ["id"], { unique: true })
@Entity("livestream_viewers", { schema: "public" })
export class LivestreamViewers {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("varchar", { name: "ip_address", nullable: true })
  ipAddress: string | null;

  @Column("timestamp", { name: "last_ping", nullable: true })
  lastPing: Date | null;

  @Column("integer", { name: "channel_user_id", nullable: true })
  channelUserId: number | null;

  @Column("timestamp", { name: "created_at", default: () => "CURRENT_TIMESTAMP" })
  createdAt: Date;

  @Column("timestamp", { name: "updated_at", default: () => "CURRENT_TIMESTAMP", onUpdate: "CURRENT_TIMESTAMP" })
  updatedAt: Date;

  @Column("integer", { name: "livestream_id", nullable: true })
  livestreamId: number | null;
}
