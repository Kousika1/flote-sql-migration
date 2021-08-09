import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("ad_campaigns_pkey", ["id"], { unique: true })
@Entity("ad_campaigns", { schema: "public" })
export class AdCampaigns {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("integer", { name: "user_id", nullable: true })
  userId: number | null;

  @Column("timestamp", { name: "created_at", default: () => "CURRENT_TIMESTAMP" })
  createdAt: Date;

  @Column("timestamp", { name: "updated_at", default: () => "CURRENT_TIMESTAMP", onUpdate: "CURRENT_TIMESTAMP" })
  updatedAt: Date;

  @Column("varchar", { name: "name", nullable: true })
  name: string | null;

  @Column("boolean", { name: "active", nullable: true })
  active: boolean | null;

  @Column("boolean", { name: "archived", nullable: true })
  archived: boolean | null;

  @Column("timestamp", { name: "start_date", nullable: true })
  startDate: Date | null;

  @Column("timestamp", { name: "end_date", nullable: true })
  endDate: Date | null;

  @Column("boolean", { name: "content", nullable: true })
  content: boolean | null;

  @Column("numeric", { name: "cpm", nullable: true })
  cpm: string | null;

  @Column("numeric", { name: "budget", nullable: true })
  budget: string | null;

  @Column("varchar", { name: "uuid", nullable: true })
  uuid: string | null;

  @Column("integer", { name: "goal", nullable: true, default: () => "0" })
  goal: number | null;

  @Column("numeric", { name: "cpc", nullable: true })
  cpc: string | null;
}
