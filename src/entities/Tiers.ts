import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("tiers_pkey", ["id"], { unique: true })
@Entity("tiers", { schema: "public" })
export class Tiers {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("integer", { name: "user_id", nullable: true })
  userId: number | null;

  @Column("numeric", { name: "amount", nullable: true })
  amount: string | null;

  @Column("varchar", { name: "name", nullable: true })
  name: string | null;

  @Column("timestamp", { name: "created_at", default: () => "CURRENT_TIMESTAMP" })
  createdAt: Date;

  @Column("timestamp", { name: "updated_at", default: () => "CURRENT_TIMESTAMP", onUpdate: "CURRENT_TIMESTAMP" })
  updatedAt: Date;

  @Column("varchar", { name: "description", nullable: true })
  description: string | null;

  @Column("varchar", { name: "title", nullable: true })
  title: string | null;

  @Column("varchar", { name: "currency", nullable: true })
  currency: string | null;

  @Column("integer", { name: "bitbacker_id", nullable: true })
  bitbackerId: number | null;

  @Column("varchar", { name: "uuid", nullable: true })
  uuid: string | null;
}
