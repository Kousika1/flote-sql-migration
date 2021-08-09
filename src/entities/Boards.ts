import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("boards_pkey", ["id"], { unique: true })
@Entity("boards", { schema: "public" })
export class Boards {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("varchar", { name: "display_name", nullable: true })
  displayName: string | null;

  @Column("varchar", { name: "url_name", nullable: true })
  urlName: string | null;

  @Column("text", { name: "description", nullable: true })
  description: string | null;

  @Column("boolean", { name: "stealth", nullable: true })
  stealth: boolean | null;

  @Column("integer", { name: "user_id", nullable: true })
  userId: number | null;

  @Column("timestamp", { name: "created_at", default: () => "CURRENT_TIMESTAMP" })
  createdAt: Date;

  @Column("timestamp", { name: "updated_at", default: () => "CURRENT_TIMESTAMP", onUpdate: "CURRENT_TIMESTAMP" })
  updatedAt: Date;
}
