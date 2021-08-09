import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("notifications_pkey", ["id"], { unique: true })
@Index("index_notifications_on_user_id", ["userId"], {})
@Entity("notifications", { schema: "public" })
export class Notifications {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("varchar", { name: "text", nullable: true })
  text: string | null;

  @Column("varchar", { name: "link", nullable: true })
  link: string | null;

  @Column("integer", { name: "user_id", nullable: true })
  userId: number | null;

  @Column("timestamp", { name: "created_at", default: () => "CURRENT_TIMESTAMP" })
  createdAt: Date;

  @Column("timestamp", { name: "updated_at", default: () => "CURRENT_TIMESTAMP", onUpdate: "CURRENT_TIMESTAMP" })
  updatedAt: Date;

  @Column("boolean", { name: "read", nullable: true })
  read: boolean | null;

  @Column("integer", { name: "related_user", nullable: true })
  relatedUser: number | null;

  @Column("varchar", { name: "tag", nullable: true })
  tag: string | null;

  @Column("integer", { name: "post_id", nullable: true })
  postId: number | null;

  @Column("varchar", { name: "uuid", nullable: true })
  uuid: string | null;
}
