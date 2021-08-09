import { Column, Entity, Index, PrimaryGeneratedColumn, CreateDateColumn } from "typeorm";

@Index("ad_clicks_pkey", ["id"], { unique: true })
@Entity("ad_clicks", { schema: "public" })
export class AdClicks {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("integer", { name: "ad_id", nullable: true })
  adId: number | null;

  @Column("timestamp", { name: "created_at", default: () => "CURRENT_TIMESTAMP" })
  createdAt: Date;

  @Column("timestamp", { name: "updated_at", default: () => "CURRENT_TIMESTAMP", onUpdate: "CURRENT_TIMESTAMP" })
  updatedAt: Date;

  @Column("numeric", { name: "price", nullable: true })
  price: string | null;
}
