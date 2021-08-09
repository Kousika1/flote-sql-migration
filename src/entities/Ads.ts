import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("ads_pkey", ["id"], { unique: true })
@Entity("ads", { schema: "public" })
export class Ads {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("integer", { name: "campaign_id", nullable: true })
  campaignId: number | null;

  @Column("text", { name: "html_code", nullable: true })
  htmlCode: string | null;

  @Column("timestamp", { name: "created_at", default: () => "CURRENT_TIMESTAMP" })
  createdAt: Date;

  @Column("timestamp", { name: "updated_at", default: () => "CURRENT_TIMESTAMP", onUpdate: "CURRENT_TIMESTAMP" })
  updatedAt: Date;

  @Column("boolean", {
    name: "archived",
    nullable: true,
    default: () => "false",
  })
  archived: boolean | null;

  @Column("boolean", { name: "active", nullable: true, default: () => "false" })
  active: boolean | null;

  @Column("varchar", { name: "name", nullable: true })
  name: string | null;

  @Column("integer", { name: "ad_format", nullable: true, default: () => "0" })
  adFormat: number | null;

  @Column("varchar", { name: "vast_url", nullable: true })
  vastUrl: string | null;

  @Column("varchar", { name: "uuid", nullable: true })
  uuid: string | null;

  @Column("varchar", { name: "title", nullable: true })
  title: string | null;

  @Column("varchar", { name: "text", nullable: true })
  text: string | null;

  @Column("text", { name: "url", nullable: true })
  url: string | null;

  @Column("integer", { name: "post_id", nullable: true })
  postId: number | null;
}
