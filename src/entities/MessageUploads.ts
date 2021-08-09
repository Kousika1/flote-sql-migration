import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("message_uploads_pkey", ["id"], { unique: true })
@Entity("message_uploads", { schema: "public" })
export class MessageUploads {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("integer", { name: "message_id", nullable: true })
  messageId: number | null;

  @Column("integer", { name: "upload_id", nullable: true })
  uploadId: number | null;

  @Column("timestamp", { name: "created_at", default: () => "CURRENT_TIMESTAMP" })
  createdAt: Date;

  @Column("timestamp", { name: "updated_at", default: () => "CURRENT_TIMESTAMP", onUpdate: "CURRENT_TIMESTAMP" })
  updatedAt: Date;
}
