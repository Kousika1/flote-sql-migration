import { Column, Entity, Index, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import { Users } from "./Users"
@Index("index_subscriptions_on_creator_id", ["creatorId"], {})
@Index("subscriptions_pkey", ["id"], { unique: true })
@Index("index_subscriptions_on_user_id", ["userId"], {})
@Entity("subscriptions", { schema: "public" })
export class Subscriptions {
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

  @Column("timestamp", { name: "timelock", nullable: true })
  timelock: Date | null;

  @Column("numeric", { name: "amount", nullable: true })
  amount: string | null;

  @Column("timestamp", { name: "last_paid", nullable: true })
  lastPaid: Date | null;

  @Column("varchar", { name: "uuid", nullable: true })
  uuid: string | null;

  @Column("boolean", { name: "auto_renew", nullable: true })
  autoRenew: boolean | null;
}
