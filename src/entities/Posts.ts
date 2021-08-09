import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("index_posts_on_created_at", ["createdAt"], {})
@Index("index_posts_on_dead", ["dead"], {})
@Index("index_posts_on_featured_in_frontpage", ["featuredInFrontpage"], {})
@Index("posts_pkey", ["id"], { unique: true })
@Index("index_posts_on_post_id", ["postId"], {})
@Index("index_posts_on_repost_id", ["repostId"], {})
@Index("index_posts_on_user_id", ["userId"], {})
@Index("index_posts_on_uuid", ["uuid"], {})
@Entity("posts", { schema: "public" })
export class Posts {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("integer", { name: "user_id", nullable: true })
  userId: number | null;

  @Column("json", { name: "content", nullable: true })
  content: object | null;

  @Column("varchar", { name: "post_type", nullable: true })
  postType: string | null;

  @Column("timestamp", { name: "created_at", default: () => "CURRENT_TIMESTAMP" })
  createdAt: Date;

  @Column("timestamp", { name: "updated_at", default: () => "CURRENT_TIMESTAMP", onUpdate: "CURRENT_TIMESTAMP" })
  updatedAt: Date;

  @Column("varchar", { name: "uuid", nullable: true })
  uuid: string | null;

  @Column("boolean", { name: "edited", nullable: true, default: () => "false" })
  edited: boolean | null;

  @Column("integer", { name: "post_id", nullable: true })
  postId: number | null;

  @Column("integer", { name: "tier", nullable: true, default: () => "0" })
  tier: number | null;

  @Column("boolean", { name: "dead", nullable: true, default: () => "false" })
  dead: boolean | null;

  @Column("integer", { name: "reports_count", nullable: true })
  reportsCount: number | null;

  @Column("integer", { name: "likes_count", nullable: true })
  likesCount: number | null;

  @Column("varchar", { name: "thread_id", nullable: true })
  threadId: string | null;

  @Column("integer", { name: "bitbacker_id", nullable: true })
  bitbackerId: number | null;

  @Column("integer", { name: "quoted_post_id", nullable: true })
  quotedPostId: number | null;

  @Column("integer", { name: "board_id", nullable: true })
  boardId: number | null;

  @Column("integer", {
    name: "score_cache",
    nullable: true,
    default: () => "0",
  })
  scoreCache: number | null;

  @Column("boolean", { name: "deleted", nullable: true })
  deleted: boolean | null;

  @Column("text", { name: "text", nullable: true })
  text: string | null;

  @Column("boolean", { name: "contains_image", nullable: true })
  containsImage: boolean | null;

  @Column("boolean", { name: "contains_media", nullable: true })
  containsMedia: boolean | null;

  @Column("boolean", { name: "contains_audio", nullable: true })
  containsAudio: boolean | null;

  @Column("boolean", { name: "contains_video", nullable: true })
  containsVideo: boolean | null;

  @Column("integer", { name: "uploads_counter_cache", nullable: true })
  uploadsCounterCache: number | null;

  @Column("integer", { name: "repost_counter_cache", nullable: true })
  repostCounterCache: number | null;

  @Column("integer", { name: "like_counter_cache", nullable: true })
  likeCounterCache: number | null;

  @Column("json", { name: "url_metadata_cache", nullable: true })
  urlMetadataCache: object | null;

  @Column("integer", {
    name: "views_counter_cache",
    nullable: true,
    default: () => "0",
  })
  viewsCounterCache: number | null;

  @Column("integer", { name: "replies_counter_cache", nullable: true })
  repliesCounterCache: number | null;

  @Column("integer", { name: "likes_counter_cache", nullable: true })
  likesCounterCache: number | null;

  @Column("boolean", {
    name: "migrated_to_bucket_cache",
    nullable: true,
    default: () => "false",
  })
  migratedToBucketCache: boolean | null;

  @Column("numeric", { name: "nsfw_score", nullable: true })
  nsfwScore: string | null;

  @Column("boolean", {
    name: "featured_in_frontpage",
    nullable: true,
    default: () => "false",
  })
  featuredInFrontpage: boolean | null;

  @Column("integer", { name: "fb_timestamp", nullable: true })
  fbTimestamp: number | null;

  @Column("varchar", { name: "fb_hash", nullable: true })
  fbHash: string | null;

  @Column("integer", { name: "repost_id", nullable: true })
  repostId: number | null;
}
