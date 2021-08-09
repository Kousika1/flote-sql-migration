import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Messages } from "./Messages";

@Index("files_pkey", ["id"], { unique: true })
@Entity("files", { schema: "public" })
export class Files {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("varchar", {
    name: "file_name",
    nullable: true,
    length: 255,
  })
  fileName: string | null;

  @Column("varchar", { name: "url", nullable: true, length: 1000 })
  url: string | null;

  @Column("timestamp", { name: "created_at", default: () => "CURRENT_TIMESTAMP" })
  createdAt: Date;

  @Column("timestamp", { name: "updated_at", default: () => "CURRENT_TIMESTAMP", onUpdate: "CURRENT_TIMESTAMP" })
  updatedAt: Date;

  @ManyToOne(() => Messages, (messages) => messages.files, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "message_id", referencedColumnName: "id" }])
  message: Messages;
}
