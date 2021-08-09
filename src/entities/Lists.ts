import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("lists_pkey", ["id"], { unique: true })
@Entity("lists", { schema: "public" })
export class Lists {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("integer", { name: "user_id", nullable: true })
  userId: number | null;

  @Column("varchar", { name: "name", nullable: true })
  name: string | null;

  @Column("varchar", { name: "uuid", nullable: true })
  uuid: string | null;

  @Column("timestamp", { name: "created_at", default: () => "CURRENT_TIMESTAMP" })
  createdAt: Date;

  @Column("timestamp", { name: "updated_at", default: () => "CURRENT_TIMESTAMP", onUpdate: "CURRENT_TIMESTAMP" })
  updatedAt: Date;

  @Column("boolean", { name: "public", nullable: true })
  public: boolean | null;

  @Column("boolean", { name: "show_in_feed", nullable: true })
  showInFeed: boolean | null;

  @Column("varchar", { name: "description", nullable: true })
  description: string | null;
}
