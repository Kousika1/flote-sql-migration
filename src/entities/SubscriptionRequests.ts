import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("subscription_requests_pkey", ["id"], { unique: true })
@Entity("subscription_requests", { schema: "public" })
export class SubscriptionRequests {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("integer", { name: "user_id", nullable: true })
  userId: number | null;

  @Column("integer", { name: "creator_id", nullable: true })
  creatorId: number | null;

  @Column("timestamp", { name: "created_at", default: () => "CURRENT_TIMESTAMP" })
  createdAt: Date;

  @Column("timestamp", { name: "updated_at", default: () => "CURRENT_TIMESTAMP", onUpdate: "CURRENT_TIMESTAMP" })
  updatedAt: Date;

  @Column("varchar", { name: "uuid", nullable: true })
  uuid: string | null;
}
