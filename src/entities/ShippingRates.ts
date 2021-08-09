import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("shipping_rates_pkey", ["id"], { unique: true })
@Entity("shipping_rates", { schema: "public" })
export class ShippingRates {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("integer", { name: "product_id", nullable: true })
  productId: number | null;

  @Column("varchar", { name: "country", nullable: true })
  country: string | null;

  @Column("numeric", { name: "price", nullable: true })
  price: string | null;

  @Column("timestamp", { name: "created_at", default: () => "CURRENT_TIMESTAMP" })
  createdAt: Date;

  @Column("timestamp", { name: "updated_at", default: () => "CURRENT_TIMESTAMP", onUpdate: "CURRENT_TIMESTAMP" })
  updatedAt: Date;

  @Column("varchar", { name: "uuid", nullable: true })
  uuid: string | null;
}
