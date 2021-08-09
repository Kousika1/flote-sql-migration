import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("purchases_pkey", ["id"], { unique: true })
@Entity("purchases", { schema: "public" })
export class Purchases {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("integer", { name: "product_id", nullable: true })
  productId: number | null;

  @Column("integer", { name: "user_id", nullable: true })
  userId: number | null;

  @Column("timestamp", { name: "created_at", default: () => "CURRENT_TIMESTAMP" })
  createdAt: Date;

  @Column("timestamp", { name: "updated_at", default: () => "CURRENT_TIMESTAMP", onUpdate: "CURRENT_TIMESTAMP" })
  updatedAt: Date;

  @Column("varchar", { name: "uuid", nullable: true })
  uuid: string | null;

  @Column("integer", { name: "purchase_order_id", nullable: true })
  purchaseOrderId: number | null;

  @Column("integer", { name: "ad_credit_id", nullable: true })
  adCreditId: number | null;
}
