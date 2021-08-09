import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("supports_pkey", ["id"], { unique: true })
@Entity("supports", { schema: "public" })
export class Supports {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("integer", { name: "user_id", nullable: true })
  userId: number | null;

  @Column("integer", { name: "creator_id", nullable: true })
  creatorId: number | null;

  @Column("integer", { name: "amount", nullable: true })
  amount: number | null;

  @Column("timestamp", { name: "created_at", default: () => "CURRENT_TIMESTAMP" })
  createdAt: Date;

  @Column("timestamp", { name: "updated_at", default: () => "CURRENT_TIMESTAMP", onUpdate: "CURRENT_TIMESTAMP" })
  updatedAt: Date;

  @Column("timestamp", { name: "timelock", nullable: true })
  timelock: Date | null;

  @Column("integer", {
    name: "failed_payments",
    nullable: true,
    default: () => "0",
  })
  failedPayments: number | null;

  @Column("timestamp", { name: "last_paid", nullable: true })
  lastPaid: Date | null;

  @Column("boolean", {
    name: "cancelled",
    nullable: true,
    default: () => "false",
  })
  cancelled: boolean | null;

  @Column("varchar", { name: "uuid", nullable: true })
  uuid: string | null;

  @Column("boolean", {
    name: "deleted",
    nullable: true,
    default: () => "false",
  })
  deleted: boolean | null;
}
