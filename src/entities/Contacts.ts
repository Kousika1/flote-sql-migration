import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("contacts_pkey", ["id"], { unique: true })
@Entity("contacts", { schema: "public" })
export class Contacts {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("integer", { name: "user_id", nullable: true })
  userId: number | null;

  @Column("integer", { name: "fb_friendship_timestamp", nullable: true })
  fbFriendshipTimestamp: number | null;

  @Column("varchar", { name: "name", nullable: true })
  name: string | null;

  @Column("boolean", { name: "match", nullable: true })
  match: boolean | null;

  @Column("timestamp", { name: "created_at", default: () => "CURRENT_TIMESTAMP" })
  createdAt: Date;

  @Column("timestamp", { name: "updated_at", default: () => "CURRENT_TIMESTAMP", onUpdate: "CURRENT_TIMESTAMP" })
  updatedAt: Date;
}
