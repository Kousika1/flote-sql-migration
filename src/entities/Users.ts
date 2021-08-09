import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("index_users_on_api_key", ["apiKey"], {})
@Index("users_pkey", ["id"], { unique: true })
@Index("index_users_on_name", ["name"], {})
@Entity("users", { schema: "public" })
export class Users {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("varchar", { name: "name", nullable: true })
  name: string | null;

  @Column("varchar", { name: "email", nullable: true })
  email: string | null;

  @Column("varchar", { name: "password_digest", nullable: true })
  passwordDigest: string | null;

  @Column("timestamp", { name: "created_at", default: () => "CURRENT_TIMESTAMP" })
  createdAt: Date;

  @Column("timestamp", { name: "updated_at", default: () => "CURRENT_TIMESTAMP", onUpdate: "CURRENT_TIMESTAMP" })
  updatedAt: Date;

  @Column("varchar", { name: "api_key", nullable: true })
  apiKey: string | null;

  @Column("varchar", { name: "private_key", nullable: true })
  privateKey: string | null;

  @Column("varchar", { name: "public_key", nullable: true })
  publicKey: string | null;

  @Column("varchar", { name: "address", nullable: true })
  address: string | null;

  @Column("varchar", { name: "wif", nullable: true })
  wif: string | null;

  @Column("varchar", { name: "bio", nullable: true })
  bio: string | null;

  @Column("boolean", {
    name: "featured",
    nullable: true,
    default: () => "false",
  })
  featured: boolean | null;

  @Column("boolean", {
    name: "creator",
    nullable: true,
    default: () => "false",
  })
  creator: boolean | null;

  @Column("json", { name: "preferences", nullable: true })
  preferences: object | null;

  @Column("varchar", { name: "avatar_url", nullable: true })
  avatarUrl: string | null;

  @Column("varchar", { name: "display_name", nullable: true })
  displayName: string | null;

  @Column("varchar", { name: "background_url", nullable: true })
  backgroundUrl: string | null;

  @Column("varchar", { name: "header_url", nullable: true })
  headerUrl: string | null;

  @Column("varchar", { name: "wallpaper_url", nullable: true })
  wallpaperUrl: string | null;

  @Column("varchar", { name: "password_reset_code", nullable: true })
  passwordResetCode: string | null;

  @Column("json", { name: "webpush_subscription", nullable: true })
  webpushSubscription: object | null;

  @Column("varchar", { name: "currency", nullable: true })
  currency: string | null;

  @Column("varchar", { name: "stream_key", nullable: true })
  streamKey: string | null;

  @Column("varchar", { name: "message_private_key", nullable: true })
  messagePrivateKey: string | null;

  @Column("varchar", { name: "uuid", nullable: true })
  uuid: string | null;

  @Column("timestamp", {
    name: "wallet_scanned_at",
    nullable: true,
  })
  walletScannedAt: Date | null;

  @Column("boolean", { name: "notifications_enabled", nullable: true })
  notificationsEnabled: boolean | null;

  @Column("boolean", { name: "judge", nullable: true, default: () => "false" })
  judge: boolean | null;

  @Column("boolean", { name: "super", nullable: true, default: () => "false" })
  super: boolean | null;

  @Column("boolean", {
    name: "dms_open",
    nullable: true,
    default: () => "false",
  })
  dmsOpen: boolean | null;

  @Column("boolean", {
    name: "display_income",
    nullable: true,
    default: () => "false",
  })
  displayIncome: boolean | null;

  @Column("boolean", {
    name: "supporting_enabled",
    nullable: true,
    default: () => "false",
  })
  supportingEnabled: boolean | null;

  @Column("integer", { name: "posts_count", nullable: true })
  postsCount: number | null;

  @Column("integer", { name: "reposts_count", nullable: true })
  repostsCount: number | null;

  @Column("varchar", { name: "location", nullable: true })
  location: string | null;

  @Column("varchar", { name: "website", nullable: true })
  website: string | null;

  @Column("boolean", {
    name: "stealth",
    nullable: true,
    default: () => "false",
  })
  stealth: boolean | null;

  @Column("json", { name: "my_donation_urls", nullable: true })
  myDonationUrls: object | null;

  @Column("json", { name: "my_social_urls", nullable: true })
  mySocialUrls: object | null;

  @Column("boolean", {
    name: "show_initial_recommendations",
    nullable: true,
    default: () => "true",
  })
  showInitialRecommendations: boolean | null;

  @Column("varchar", { name: "message_public_key", nullable: true })
  messagePublicKey: string | null;

  @Column("timestamp", { name: "last_seen", nullable: true })
  lastSeen: Date | null;

  @Column("boolean", {
    name: "disabled",
    nullable: true,
    default: () => "false",
  })
  disabled: boolean | null;

  @Column("integer", { name: "livestream_permissions", nullable: true })
  livestreamPermissions: number | null;

  @Column("integer", { name: "livestream_list_id", nullable: true })
  livestreamListId: number | null;

  @Column("varchar", { name: "livestream_title", nullable: true })
  livestreamTitle: string | null;

  @Column("varchar", {
    name: "livestream_description",
    nullable: true,
  })
  livestreamDescription: string | null;

  @Column("integer", { name: "livestream_conversation_id", nullable: true })
  livestreamConversationId: number | null;

  @Column("boolean", {
    name: "livestream_live",
    nullable: true,
    default: () => "false",
  })
  livestreamLive: boolean | null;

  @Column("varchar", { name: "livestream_url_key", nullable: true })
  livestreamUrlKey: string | null;

  @Column("varchar", {
    name: "livestream_screenshot_url",
    nullable: true,
  })
  livestreamScreenshotUrl: string | null;

  @Column("integer", {
    name: "livestream_screenshot_retries",
    nullable: true,
    default: () => "0",
  })
  livestreamScreenshotRetries: number | null;

  @Column("bigint", {
    name: "balance_cache",
    nullable: true,
    default: () => "0",
  })
  balanceCache: string | null;

  @Column("varchar", {
    name: "firebase_registration_id",
    nullable: true,
  })
  firebaseRegistrationId: string | null;

  @Column("varchar", { name: "wyre_account_id", nullable: true })
  wyreAccountId: string | null;

  @Column("varchar", { name: "cell_phone_number", nullable: true })
  cellPhoneNumber: string | null;

  @Column("varchar", { name: "legal_name", nullable: true })
  legalName: string | null;

  @Column("timestamp", {
    name: "wallet_imported",
    nullable: true,
  })
  walletImported: Date | null;

  @Column("boolean", {
    name: "monetization_enabled",
    nullable: true,
    default: () => "false",
  })
  monetizationEnabled: boolean | null;

  @Column("timestamp", {
    name: "last_scanned_wallet",
    nullable: true,
  })
  lastScannedWallet: Date | null;

  @Column("varchar", { name: "websockets_channel", nullable: true })
  websocketsChannel: string | null;

  @Column("boolean", {
    name: "is_partner",
    nullable: true,
    default: () => "false",
  })
  isPartner: boolean | null;

  @Column("varchar", { name: "tx_hook_id", nullable: true })
  txHookId: string | null;

  @Column("integer", { name: "score_cache", nullable: true })
  scoreCache: number | null;

  @Column("integer", {
    name: "unconfirmed_balance_cache",
    nullable: true,
    default: () => "0",
  })
  unconfirmedBalanceCache: number | null;

  @Column("integer", {
    name: "final_balance_cache",
    nullable: true,
    default: () => "0",
  })
  finalBalanceCache: number | null;

  @Column("boolean", {
    name: "hide_locked_posts",
    nullable: true,
    default: () => "false",
  })
  hideLockedPosts: boolean | null;

  @Column("varchar", { name: "avatar_md5", nullable: true })
  avatarMd5: string | null;

  @Column("varchar", { name: "avatar_file", nullable: true })
  avatarFile: string | null;

  @Column("varchar", { name: "avatar_uuid", nullable: true })
  avatarUuid: string | null;

  @Column("integer", { name: "transactions_counter_cache", nullable: true })
  transactionsCounterCache: number | null;

  @Column("varchar", { name: "ios_push_token", nullable: true })
  iosPushToken: string | null;

  @Column("varchar", { name: "android_push_token", nullable: true })
  androidPushToken: string | null;

  @Column("integer", {
    name: "unread_notifications_counter_cache",
    nullable: true,
  })
  unreadNotificationsCounterCache: number | null;

  @Column("boolean", {
    name: "beta_tester",
    nullable: true,
    default: () => "false",
  })
  betaTester: boolean | null;

  @Column("integer", { name: "block_counter_cache", nullable: true })
  blockCounterCache: number | null;

  @Column("integer", { name: "notifications_counter_cache", nullable: true })
  notificationsCounterCache: number | null;

  @Column("integer", { name: "posts_counter_cache", nullable: true })
  postsCounterCache: number | null;

  @Column("integer", { name: "unread_messages_counter_cache", nullable: true })
  unreadMessagesCounterCache: number | null;

  @Column("integer", { name: "reposts_counter_cache", nullable: true })
  repostsCounterCache: number | null;

  @Column("timestamp", {
    name: "last_indexed",
    nullable: true,
  })
  lastIndexed: Date | null;

  @Column("varchar", { name: "avatar_extension", nullable: true })
  avatarExtension: string | null;

  @Column("integer", { name: "subscriptions_counter_cache", nullable: true })
  subscriptionsCounterCache: number | null;

  @Column("integer", { name: "subscribers_counter_cache", nullable: true })
  subscribersCounterCache: number | null;

  @Column("integer", { name: "support_goal", nullable: true })
  supportGoal: number | null;

  @Column("integer", { name: "supports_counter_cache", nullable: true })
  supportsCounterCache: number | null;

  @Column("varchar", {
    name: "sender_key_encryption_seed",
    nullable: true,
  })
  senderKeyEncryptionSeed: string | null;

  @Column("varchar", {
    name: "sender_key_encryption_salt",
    nullable: true,
  })
  senderKeyEncryptionSalt: string | null;

  @Column("timestamp", {
    name: "last_post_date",
    nullable: true,
  })
  lastPostDate: Date | null;

  @Column("integer", {
    name: "seller_score_cache",
    nullable: true,
    default: () => "0",
  })
  sellerScoreCache: number | null;

  @Column("boolean", {
    name: "show_nsfw_posts",
    nullable: true,
    default: () => "false",
  })
  showNsfwPosts: boolean | null;

  @Column("boolean", {
    name: "blur_nsfw",
    nullable: true,
    default: () => "true",
  })
  blurNsfw: boolean | null;

  @Column("varchar", { name: "old_avatar_url", nullable: true })
  oldAvatarUrl: string | null;

  @Column("boolean", {
    name: "admin_nsfw",
    nullable: true,
    default: () => "false",
  })
  adminNsfw: boolean | null;

  @Column("boolean", {
    name: "uploads_enabled",
    nullable: true,
    default: () => "true",
  })
  uploadsEnabled: boolean | null;

  @Column("bigint", { name: "storage_used_cache", nullable: true })
  storageUsedCache: string | null;

  @Column("boolean", {
    name: "plus_manually_enabled",
    nullable: true,
    default: () => "false",
  })
  plusManuallyEnabled: boolean | null;

  @Column("varchar", { name: "google_secret", nullable: true })
  googleSecret: string | null;

  @Column("varchar", { name: "mfa_secret", nullable: true })
  mfaSecret: string | null;

  @Column("varchar", { name: "wallet_salt", nullable: true })
  walletSalt: string | null;

  @Column("json", { name: "wallet_cache", nullable: true })
  walletCache: object | null;

  @Column("boolean", {
    name: "manually_enabled_pro",
    nullable: true,
    default: () => "false",
  })
  manuallyEnabledPro: boolean | null;

  @Column("boolean", {
    name: "user_nsfw",
    nullable: true,
    default: () => "false",
  })
  userNsfw: boolean | null;

  @Column("integer", {
    name: "failed_login_attempts",
    nullable: true,
    default: () => "0",
  })
  failedLoginAttempts: number | null;

  @Column("boolean", {
    name: "segwit_enabled",
    nullable: true,
    default: () => "false",
  })
  segwitEnabled: boolean | null;

  @Column("varchar", { name: "import_data_url", nullable: true })
  importDataUrl: string | null;

  @Column("text", { name: "filtered_word_list", nullable: true })
  filteredWordList: string | null;

  @Column("varchar", { name: "platform_information", nullable: true })
  platformInformation: string | null;
}
