import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("irrelevant_words_pkey", ["id"], { unique: true })
@Entity("irrelevant_words", { schema: "public" })
export class IrrelevantWords {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("varchar", { name: "text", nullable: true })
  text: string | null;

  @Column("timestamp", { name: "created_at", default: () => "CURRENT_TIMESTAMP" })
  createdAt: Date;

  @Column("timestamp", { name: "updated_at", default: () => "CURRENT_TIMESTAMP", onUpdate: "CURRENT_TIMESTAMP" })
  updatedAt: Date;
}
