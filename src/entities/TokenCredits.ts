import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("token_credits_pkey", ["id"], { unique: true })
@Entity("token_credits", { schema: "public" })
export class TokenCredits {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("integer", { name: "amount", nullable: true })
  amount: number | null;

  @Column("integer", { name: "user_id", nullable: true })
  userId: number | null;

  @Column("integer", { name: "campaign_id", nullable: true })
  campaignId: number | null;

  @Column("timestamp", { name: "created_at", default: () => "CURRENT_TIMESTAMP" })
  createdAt: Date;

  @Column("timestamp", { name: "updated_at", default: () => "CURRENT_TIMESTAMP", onUpdate: "CURRENT_TIMESTAMP" })
  updatedAt: Date;
}
