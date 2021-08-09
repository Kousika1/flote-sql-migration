import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("authenticated_accounts_pkey", ["id"], { unique: true })
@Entity("authenticated_accounts", { schema: "public" })
export class AuthenticatedAccounts {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("integer", { name: "provider", nullable: true })
  provider: number | null;

  @Column("varchar", { name: "api_key", nullable: true })
  apiKey: string | null;

  @Column("integer", { name: "user_id", nullable: true })
  userId: number | null;

  @Column("timestamp", { name: "created_at", default: () => "CURRENT_TIMESTAMP" })
  createdAt: Date;

  @Column("timestamp", { name: "updated_at", default: () => "CURRENT_TIMESTAMP", onUpdate: "CURRENT_TIMESTAMP" })
  updatedAt: Date;

  @Column("varchar", { name: "token", nullable: true })
  token: string | null;

  @Column("varchar", { name: "access_token", nullable: true })
  accessToken: string | null;

  @Column("varchar", { name: "access_token_secret", nullable: true })
  accessTokenSecret: string | null;
}
