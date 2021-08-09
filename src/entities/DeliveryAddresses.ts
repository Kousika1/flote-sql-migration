import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("delivery_addresses_pkey", ["id"], { unique: true })
@Entity("delivery_addresses", { schema: "public" })
export class DeliveryAddresses {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("varchar", { name: "address", nullable: true })
  address: string | null;

  @Column("varchar", { name: "currency", nullable: true })
  currency: string | null;

  @Column("boolean", { name: "active", nullable: true })
  active: boolean | null;

  @Column("integer", { name: "user_id", nullable: true })
  userId: number | null;

  @Column("timestamp", { name: "created_at", default: () => "CURRENT_TIMESTAMP" })
  createdAt: Date;

  @Column("timestamp", { name: "updated_at", default: () => "CURRENT_TIMESTAMP", onUpdate: "CURRENT_TIMESTAMP" })
  updatedAt: Date;
}
