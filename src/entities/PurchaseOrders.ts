import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("purchase_orders_pkey", ["id"], { unique: true })
@Entity("purchase_orders", { schema: "public" })
export class PurchaseOrders {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("integer", { name: "product_id", nullable: true })
  productId: number | null;

  @Column("integer", { name: "price", nullable: true })
  price: number | null;

  @Column("bigint", { name: "price_sat", nullable: true })
  priceSat: string | null;

  @Column("timestamp", { name: "created_at", default: () => "CURRENT_TIMESTAMP" })
  createdAt: Date;

  @Column("timestamp", { name: "updated_at", default: () => "CURRENT_TIMESTAMP", onUpdate: "CURRENT_TIMESTAMP" })
  updatedAt: Date;

  @Column("varchar", { name: "uuid", nullable: true })
  uuid: string | null;

  @Column("integer", { name: "user_id", nullable: true })
  userId: number | null;

  @Column("boolean", { name: "paid", nullable: true, default: () => "false" })
  paid: boolean | null;

  @Column("varchar", { name: "tx_hash", nullable: true })
  txHash: string | null;

  @Column("integer", { name: "purchase_id", nullable: true })
  purchaseId: number | null;

  @Column("integer", { name: "ad_credit_id", nullable: true })
  adCreditId: number | null;

  @Column("integer", { name: "ad_credit", nullable: true })
  adCredit: number | null;

  @Column("integer", { name: "support_id", nullable: true })
  supportId: number | null;

  @Column("varchar", { name: "address", nullable: true })
  address: string | null;

  @Column("varchar", { name: "country", nullable: true })
  country: string | null;

  @Column("integer", { name: "zipcode", nullable: true })
  zipcode: number | null;

  @Column("varchar", { name: "state", nullable: true })
  state: string | null;

  @Column("integer", { name: "shipping_rate_price_sat", nullable: true })
  shippingRatePriceSat: number | null;

  @Column("numeric", { name: "shipping_rate_price", nullable: true })
  shippingRatePrice: string | null;

  @Column("integer", { name: "seller_id", nullable: true })
  sellerId: number | null;

  @Column("integer", { name: "gift_for_user_id", nullable: true })
  giftForUserId: number | null;

  @Column("boolean", {
    name: "refunded",
    nullable: true,
    default: () => "false",
  })
  refunded: boolean | null;

  @Column("integer", { name: "fee_sat", nullable: true })
  feeSat: number | null;

  @Column("varchar", { name: "support_user_name", nullable: true })
  supportUserName: string | null;

  @Column("integer", { name: "support_amount", nullable: true })
  supportAmount: number | null;

  @Column("integer", { name: "support_user_id", nullable: true })
  supportUserId: number | null;

  @Column("varchar", { name: "street_name", nullable: true })
  streetName: string | null;

  @Column("varchar", { name: "building_number", nullable: true })
  buildingNumber: string | null;

  @Column("json", { name: "tx_skeleton", nullable: true })
  txSkeleton: object | null;

  @Column("boolean", { name: "shipped", nullable: true })
  shipped: boolean | null;

  @Column("timestamp", { name: "shipped_at", nullable: true })
  shippedAt: Date | null;

  @Column("text", { name: "shipping_information", nullable: true })
  shippingInformation: string | null;

  @Column("integer", {
    name: "shipment_status",
    nullable: true,
    default: () => "0",
  })
  shipmentStatus: number | null;

  @Column("varchar", { name: "deliver_to_name", nullable: true })
  deliverToName: string | null;

  @Column("text", { name: "delivery_notes", nullable: true })
  deliveryNotes: string | null;

  @Column("boolean", {
    name: "cancelled",
    nullable: true,
    default: () => "false",
  })
  cancelled: boolean | null;

  @Column("varchar", { name: "address_2", nullable: true })
  address_2: string | null;

  @Column("varchar", { name: "region", nullable: true })
  region: string | null;

  @Column("varchar", { name: "city", nullable: true })
  city: string | null;

  @Column("varchar", { name: "address_1", nullable: true })
  address_1: string | null;

  @Column("text", { name: "shipping_note", nullable: true })
  shippingNote: string | null;
}
