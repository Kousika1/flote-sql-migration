import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("adds_pkey", ["id"], { unique: true })
@Entity("adds", { schema: "public" })
export class Adds {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("varchar", { name: "report", nullable: true })
  report: string | null;

  @Column("integer", { name: "category", nullable: true })
  category: number | null;

  @Column("integer", { name: "post_id", nullable: true })
  postId: number | null;

  @Column("varchar", { name: "text", nullable: true })
  text: string | null;

  @Column("timestamp", { name: "created_at", default: () => "CURRENT_TIMESTAMP" })
  createdAt: Date;

  @Column("timestamp", { name: "updated_at", default: () => "CURRENT_TIMESTAMP", onUpdate: "CURRENT_TIMESTAMP" })
  updatedAt: Date;
}
