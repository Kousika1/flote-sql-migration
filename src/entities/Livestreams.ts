import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("livestreams_pkey", ["id"], { unique: true })
@Entity("livestreams", { schema: "public" })
export class Livestreams {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("varchar", { name: "uuid", nullable: true })
  uuid: string | null;

  @Column("integer", { name: "user_id", nullable: true })
  userId: number | null;

  @Column("timestamp", { name: "created_at", default: () => "CURRENT_TIMESTAMP" })
  createdAt: Date;

  @Column("timestamp", { name: "updated_at", default: () => "CURRENT_TIMESTAMP", onUpdate: "CURRENT_TIMESTAMP" })
  updatedAt: Date;

  @Column("boolean", { name: "unavailable", nullable: true })
  unavailable: boolean | null;

  @Column("timestamp", {
    name: "screenshot_time",
    nullable: true,
  })
  screenshotTime: Date | null;

  @Column("boolean", { name: "ended", nullable: true })
  ended: boolean | null;

  @Column("boolean", { name: "started", nullable: true })
  started: boolean | null;

  @Column("varchar", { name: "title", nullable: true })
  title: string | null;

  @Column("varchar", { name: "description", nullable: true })
  description: string | null;

  @Column("varchar", { name: "conversation_uuid", nullable: true })
  conversationUuid: string | null;

  @Column("timestamp", { name: "started_at", nullable: true })
  startedAt: Date | null;

  @Column("varchar", { name: "screenshot_url", nullable: true })
  screenshotUrl: string | null;

  @Column("integer", {
    name: "screenshot_retries",
    nullable: true,
    default: () => "0",
  })
  screenshotRetries: number | null;

  @Column("boolean", {
    name: "followers_only",
    nullable: true,
    default: () => "false",
  })
  followersOnly: boolean | null;

  @Column("integer", { name: "list_id", nullable: true })
  listId: number | null;

  @Column("varchar", { name: "url_key", nullable: true })
  urlKey: string | null;

  @Column("integer", { name: "permissions", nullable: true })
  permissions: number | null;

  @Column("timestamp", { name: "ended_at", nullable: true })
  endedAt: Date | null;

  @Column("timestamp", {
    name: "last_online_check",
    nullable: true,
  })
  lastOnlineCheck: Date | null;

  @Column("boolean", {
    name: "transcoded_cache",
    nullable: true,
    default: () => "false",
  })
  transcodedCache: boolean | null;

  @Column("timestamp", {
    name: "transcoding_finished_at",
    nullable: true,
  })
  transcodingFinishedAt: Date | null;

  @Column("integer", { name: "estimated_transcoding_time", nullable: true })
  estimatedTranscodingTime: number | null;
}
