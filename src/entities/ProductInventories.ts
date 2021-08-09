import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("product_inventories_pkey", ["id"], { unique: true })
@Entity("product_inventories", { schema: "public" })
export class ProductInventories {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("integer", { name: "product_id", nullable: true })
  productId: number | null;

  @Column("integer", { name: "purchase_order_id", nullable: true })
  purchaseOrderId: number | null;

  @Column("varchar", { name: "uuid", nullable: true })
  uuid: string | null;

  @Column("timestamp", { name: "created_at", default: () => "CURRENT_TIMESTAMP" })
  createdAt: Date;

  @Column("timestamp", { name: "updated_at", default: () => "CURRENT_TIMESTAMP", onUpdate: "CURRENT_TIMESTAMP" })
  updatedAt: Date;
}
