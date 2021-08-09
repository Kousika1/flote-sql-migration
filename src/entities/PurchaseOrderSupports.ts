import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("purchase_order_supports_pkey", ["id"], { unique: true })
@Entity("purchase_order_supports", { schema: "public" })
export class PurchaseOrderSupports {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("integer", { name: "purchase_order_id", nullable: true })
  purchaseOrderId: number | null;

  @Column("integer", { name: "support_id", nullable: true })
  supportId: number | null;

  @Column("timestamp", { name: "created_at", default: () => "CURRENT_TIMESTAMP" })
  createdAt: Date;

  @Column("timestamp", { name: "updated_at", default: () => "CURRENT_TIMESTAMP", onUpdate: "CURRENT_TIMESTAMP" })
  updatedAt: Date;
}
