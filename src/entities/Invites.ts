import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("invites_pkey", ["id"], { unique: true })
@Entity("invites", { schema: "public" })
export class Invites {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("varchar", { name: "code", nullable: true })
  code: string | null;

  @Column("timestamp", { name: "created_at", default: () => "CURRENT_TIMESTAMP" })
  createdAt: Date;

  @Column("timestamp", { name: "updated_at", default: () => "CURRENT_TIMESTAMP", onUpdate: "CURRENT_TIMESTAMP" })
  updatedAt: Date;
}
