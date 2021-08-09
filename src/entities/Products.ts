import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("products_pkey", ["id"], { unique: true })
@Entity("products", { schema: "public" })
export class Products {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("varchar", { name: "name", nullable: true })
  name: string | null;

  @Column("text", { name: "description", nullable: true })
  description: string | null;

  @Column("integer", { name: "user_id", nullable: true })
  userId: number | null;

  @Column("numeric", { name: "price", precision: 8, scale: 2 })
  price: string;

  @Column("boolean", { name: "enabled", nullable: true })
  enabled: boolean | null;

  @Column("integer", { name: "quantity", nullable: true })
  quantity: number | null;

  @Column("timestamp", { name: "created_at", default: () => "CURRENT_TIMESTAMP" })
  createdAt: Date;

  @Column("timestamp", { name: "updated_at", default: () => "CURRENT_TIMESTAMP", onUpdate: "CURRENT_TIMESTAMP" })
  updatedAt: Date;

  @Column("varchar", { name: "uuid", nullable: true })
  uuid: string | null;

  @Column("json", { name: "file", nullable: true })
  file: object | null;

  @Column("boolean", { name: "dead", nullable: true, default: () => "false" })
  dead: boolean | null;

  @Column("json", { name: "image", nullable: true })
  image: object | null;

  @Column("integer", { name: "kind", nullable: true, default: () => "0" })
  kind: number | null;

  @Column("varchar", { name: "ships_from", nullable: true })
  shipsFrom: string | null;

  @Column("integer", { name: "stock", nullable: true })
  stock: number | null;

  @Column("json", { name: "images", nullable: true })
  images: object | null;

  @Column("integer", { name: "stock_left_cache", nullable: true })
  stockLeftCache: number | null;

  @Column("integer", {
    name: "seller_score_cache",
    nullable: true,
    default: () => "0",
  })
  sellerScoreCache: number | null;

  @Column("integer", { name: "sales_counter_cache", nullable: true })
  salesCounterCache: number | null;
}
