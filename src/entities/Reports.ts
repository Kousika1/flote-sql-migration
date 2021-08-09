import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("reports_pkey", ["id"], { unique: true })
@Entity("reports", { schema: "public" })
export class Reports {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("integer", { name: "user_id", nullable: true })
  userId: number | null;

  @Column("integer", { name: "post_id", nullable: true })
  postId: number | null;

  @Column("integer", { name: "category", nullable: true })
  category: number | null;

  @Column("varchar", { name: "text", nullable: true })
  text: string | null;

  @Column("timestamp", { name: "created_at", default: () => "CURRENT_TIMESTAMP" })
  createdAt: Date;

  @Column("timestamp", { name: "updated_at", default: () => "CURRENT_TIMESTAMP", onUpdate: "CURRENT_TIMESTAMP" })
  updatedAt: Date;
}
