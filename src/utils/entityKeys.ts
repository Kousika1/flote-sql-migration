export const AdCampaigns = `
    id,
    user_id AS "userId",
    created_at AS "createdAt",
    updated_at AS "updatedAt",
    name,
    active,
    archived,
    start_date AS "startDate",
    end_date AS "endDate",
    content,
    cpm,
    budget,
    uuid,
    goal,
    cpc
`

export const AdClicks = `
    id,
    ad_id AS "adId",
    created_at AS "createdAt",
    updated_at AS "updatedAt",
    price
`

export const AdCredits = `
  id,
  user_id AS "userId",
  amount,
  created_at AS "createdAt",
  updated_at AS "updatedAt"
`

export const Adds  = `
  id,
  report,
  category,
  post_id AS "postId",
  text,
  created_at AS "createdAt",
  updated_at AS "updatedAt"
`

export const AdImpressions = `
  id,
  ad_id AS "adId",
  user_id AS "userId",
  created_at AS "createdAt",
  updated_at AS "updatedAt",
  price
`

export const AdminAlerts = `
  id,
  message,
  created_at AS "createdAt",
  updated_at AS "updatedAt"
`

export const AdPlacements = `
  id,
  name,
  created_at AS "createdAt",
  updated_at AS "updatedAt",
  uuid
`

export const Ads = `
  id,
  campaign_id AS "campaignId",
  html_code AS "htmlCode",
  created_at AS "createdAt",
  updated_at AS "updatedAt",
  archived,
  active,
  name,
  ad_format AS "adFormat",
  vast_url AS "vastUrl",
  uuid,
  title,
  text, 
  url,
  post_id AS "postId"
`

export const ArInternalMetadata = `
  key,
  value,
  created_at AS "createdAt",
  updated_at AS "updatedAt"
`

export const AuthenticatedAccounts = `
  id,
  provider,
  api_key AS "apiKey",
  user_id AS "userId",
  created_at AS "createdAt", 
  updated_at AS "updatedAt",
  token,
  access_token AS "accessToken",
  access_token_secret AS "accessTokenSecret"
`

export const AverageTransactionFees = `
  id,
  sat_byte AS "satByte",
  created_at AS "createdAt",
  updated_at AS "updatedAt"
`

export const BitcoinAddressBackups = `
  id,
  bitcoin_address_id AS "bitcoinAddressId",
  private_key AS "privateKey",
  salt,
  created_at AS "createdAt",
  updated_at AS "updatedAt",
  wif
`

export const BitcoinAddresses = `
  id,
  address,
  private_key AS "privateKey",
  public_key AS "publicKey",
  wif,
  salt,
  created_at AS "createdAt",
  updated_at AS "updatedAt",
  user_id AS "userId",
  disabled,
  password_lost AS "passwordLost"
`

export const BitcoinPurchases = `
  id,
  user_id AS "userId",
  amount,
  wyre_transaction_id AS "wyreTransactionId",
  created_at AS "createdAt",
  updated_at AS "updatedAt"
`

export const BitcoinWallets = `
  id,
  private_key AS "privateKey",
  public_key AS "publicKey",
  address,
  wif,
  user_id AS "userId",
  created_at AS "createdAt",
  updated_at AS "updatedAt",
  salt
`

export const Blocks = `
  id,
  user_id AS "userId",
  blocked_id AS "blockedId",
  created_at AS "createdAt",
  updated_at AS "updatedAt"
`

export const Boards = `
  id,
  display_name AS "displayName",
  url_name AS "urlName",
  description,
  stealth,
  user_id AS "userId",
  created_at AS "createdAt",
  updated_at AS "updatedAt"
`

export const Channels = `
  id,
  user_id AS "userId",
  created_at AS "createdAt",
  updated_at AS "updatedAt"
`

export const Comments = `
  id,
  post_id AS "postId",
  score,
  content,
  created_at AS "createdAt",
  updated_at AS "updatedAt",
  user_id AS "userId",
  uuid,
  comment_id AS "commentId",
  edited
`

export const Contacts = `
  id,
  user_id AS "userId",
  fb_friendship_timestamp AS "fbFriendshipTimestamp",
  name,
  match,
  created_at AS "createdAt",
  updated_at AS "updatedAt"
`

export const Conversations = `
  id,
  created_at AS "createdAt",
  updated_at AS "updatedAt",
  uuid,
  messages_count AS "messageCount",
  owner_id AS "ownerId",
  encrypted,
  powerchat,
  group,
  group_name AS "groupName",
  last_message_id AS "lastMessageId",
  last_message_date AS "lastMessageDate",
  messages_counter_cache AS "messagesCounterCache",
  livestream_user_id AS "livestreamUserId",
  private_conversation AS "privateConversation",
  public_conversation AS "publicConversation"
`

export const ConversationUsers = `
  id,
  user_id AS "userId",
  conversation_id AS "conversationId",
  created_at AS "createdAt",
  updated_at AS "updatedAt",
  muted,
  deprecated,
  isread
`

export const DeletedUserBackups = `
  id,
  private_key AS "privateKey",
  public_key AS "publicKey",
  wif,
  address,
  name,
  created_at AS "createdAt",
  updated_at AS "updatedAt"
`  

export const DeliveryAddresses = `
  id,
  address,
  currency,
  active,
  user_id AS "userId",
  created_at AS "createdAt",
  updated_at AS "updatedAt"
`

export const Events = `
  id,
  channel_id AS "channelId",
  user_id AS "userId",
  tag,
  content,
  created_at AS "createdAt",
  updated_at AS "updatedAt"
`

export const FacebookImports = `
  id,
  started_at AS "startedAt",
  url,
  user_id AS "userId",
  success,
  debug_info AS "debugInfo",
  error,
  created_at AS "createdAt",
  updated_at AS "updatedAt",
  total_imported_posts AS "totalImportedPosts"
`

export const Files = `
  id,
  file_name AS "fileName",
  url,
  created_at AS "createdAt",
  updated_at AS "updatedAt",
  message
`

export const Filters = `
  id,
  word,
  created_at AS "createdAt",
  updated_at AS "updatedAt"
`
​
export const HiddenHashtags =`
  id,
  text,
  created_at AS "createdAt",
  updated_at AS "updatedAt"
`

export const Invites = `
  id,
  code,
  created_at AS "createdAt",
  updated_at AS "updatedAt"
`
​
export const Invoices =  `
  id,
  amount_fiat AS "amountFiat",
  amount,
  currency,
  created_at AS "createdAt",
  updated_at AS "updatedAt",
  payment_address_id AS "paymentAddressId",
  paid,
  user_id AS "userId",
  powerchat_message AS "powerchatMessage"
`
​
export const IrrelevantWords = `  
  id,
  text,
  created_at AS "createdAt",
  updated_at AS "updatedAt"
`

export const Likes = `  
  id,
  user_id AS "userId",
  post_id AS "postId",
  created_at AS "createdAt",
  updated_at AS "updatedAt"
`

export const ListBlocks =  `  
  id,
  user_id AS "userId",
  list_id AS "listId",
  created_at AS "createdAt",
  updated_at AS "updatedAt"
`
​
export const ListMemberships = ` 
  id,
  user_id AS "userId",
  list_id AS "listId",
  created_at AS "createdAt",
  updated_at AS "updatedAt" 
`
​
export const Lists = `  
  id,
  user_id AS "userId",
  name,
  uuid,
  created_at AS "createdAt",
  updated_at AS "updatedAt",
  public,
  show_in_feed AS "showInFeed",
  description
`
  
export const ListSubscriptions = ` 
  id,
  user_id AS "userId",
  list_id AS "listId",
  created_at AS "createdAt",
  updated_at AS "updatedAt"
`
   
export const Livestreams =  `  
  id,
  uuid,
  user_id AS "userId",
  created_at AS "createdAt",
  updated_at AS "updatedAt",
  unavailable,
  screenshot_time AS "screenshotTime",
  ended,
  started,
  title,
  description,
  conversation_uuid AS "conversationUuid",
  started_at AS "startedAt",
  screenshot_url AS "screenshotUrl",
  screenshot_retries AS "screenshotRetries",
  followers_only AS "followersOnly",
  list_id AS "listId",
  url_key AS "urlKey",
  permissions,
  ended_at AS "endedAt",
  last_online_check AS "lastOnlineCheck",
  transcoded_cache AS "transcodedCache",
  transcoding_finished_at AS "transcodingFinishedAt",
  estimated_transcoding_time AS "estimatedTranscodingTime"
`

export const LivestreamViewers = `  
  id,
  ip_address AS "ipAddress",
  last_ping AS "lastPing",
  channel_user_id AS "channelUserId",
  created_at AS "createdAt",
  updated_at AS "updatedAt",
  livestream_id AS "livestreamId"
`
​
export const MediaThumbnails = `  
  id,
  md5,
  user_id AS "userId",
  url,
  created_at AS "createdAt",
  updated_at AS "updatedAt",
  extension,
  cdn_key AS "cdnKey"
`
​
export const Messages  = `  
  id,
  user_id AS "userId",
  text,
  link,
  created_at AS "createdAt",
  updated_at AS "updatedAt",
  read,
  to,
  from,
  uuid,
  amount,
  conversation_id AS "conversationId",
  from_public_key AS "fromPublicKey",
  to_public_key AS "toPublicKey",
  amount_sat AS "amountSat",
  from_id AS "fromId",
  files
`
​
export const MessageUploads = `
  id,
  message_id AS "messageId",
  upload_id AS "uploadId",
  created_at AS "createdAt",
  updated_at AS "updatedAt"
`
  
export const Metrics =  `  
  id, 
  key,
  value,
  created_at AS "createdAt",
  updated_at AS "updatedAt"
`

export const Notifications = `  
  id, 
  text,
  link,
  user_id AS "userId",
  created_at AS "createdAt",
  updated_at AS "updatedAt",
  read,
  related_user AS "relatedUser",
  tag,
  post_id AS "postId",
  uuid
`
​
export const OldSenderKeys = `  
  id, 
  salt,
  encrypted_key AS "encryptedKey",
  user_id AS "userId",
  created_at AS "createdAt",
  updated_at AS "updatedAt"
`

export const PaymentAddresses = `
    id,
    user_id AS "userId",
    creator_id AS "creatorId",
    priv,
    pub,
    addr,
    wif,
    created_at AS "createdAt",
    updated_at AS "updatedAt",
    delivery_address AS "deliveryAddress",
    currency,
    key,
    funded,
    usd_amount AS "usdAmount",
    crypto_amount AS "cryptoAmount",
    invoice_id AS "invoiceId",
    sent,
    forward_tx_hash AS "forwardTxHash"
`

export const Payments = `
    id,
    user_id AS "userId",
    transaction_id AS "transactionId",
    created_at AS "createdAt",
    updated_at AS "updatedAt"
`

export const PostBoosts = `
    id,
    post_id AS "postId",
    impressions,
    created_at AS "createdAt",
    updated_at AS "updatedAt"
`

export const Posts = `
    id,
    user_id AS "userId",
    content,
    post_type AS "postType",
    created_at AS "createdAt",
    updated_at AS "updatedAt",
    uuid,
    edited,
    post_id AS "postId",
    tier,
    dead,
    reports_count AS "reportsCount",
    likes_count AS "likesCount",
    thread_id AS "threadId",
    bitbacker_id AS "bitbackerId",
    quoted_post_id AS "quotedPostId",
    board_id AS "boardId",
    score_cache AS "scoreCache",
    deleted,
    text,
    contains_image AS "containsImage",
    contains_media AS "containsMedia",
    contains_audio AS "containsAudio",
    contains_video AS "containsVideo",
    uploads_counter_cache AS "uploadsCounterCache",
    repost_counter_cache AS "repostCounterCache",
    like_counter_cache AS "likeCounterCache",
    url_metadata_cache AS "urlMetadataCache",
    views_counter_cache AS "viewsCounterCache",
    replies_counter_cache AS "repliesCounterCache",
    likes_counter_cache AS "likesCounterCache",
    migrated_to_bucket_cache AS "migratedToBucketCache",
    nsfw_score AS "nsfwScore",
    featured_in_frontpage AS "featuredInFrontpage",
    fb_timestamp AS "fbTimestamp",
    fb_hash AS "fbHash",
    repost_id AS "repostId"
`

export const PostUploads = `
    id,
    post_id AS "postId",
    upload_id AS "uploadId",
    created_at AS "createdAt",
    updated_at AS "updatedAt",
    order,
    post_order AS "postOrder"
`

export const ProductInventories = `
    id,
    product_id AS "productId",
    purchase_order_id AS "purchaseOrderId",
    uuid,
    created_at AS "createdAt",
    updated_at AS "updatedAt"
`

export const Products = `
    id,
    name,
    description,
    user_id AS "userId",
    price,
    enabled,
    quantity,
    created_at AS "createdAt",
    updated_at AS "updatedAt",
    uuid,
    file,
    dead,
    image,
    kind,
    ships_from AS "shipsFrom",
    stock,
    images,
    stock_left_cache AS "stockLeftCache",
    seller_score_cache AS "sellerScoreCache",
    sales_counter_cache AS "salesCounterCache"
`

export const ProductUploads = `
    id,
    product_id AS "productId",
    upload_id AS "uploadId",
    created_at AS "createdAt",
    updated_at AS "updatedAt"
`

export const PurchaseOrders = ` 
    id,
    product_id AS "productId",
    price,
    price_sat AS "priceSat",
    created_at AS "createdAt",
    updated_at AS "updatedAt",
    uuid,
    user_id AS "userId",
    paid,
    tx_hash AS "txHash",
    purchase_id AS "purchaseId",
    ad_credit_id AS "adCreditId",
    ad_credit AS "adCredit",
    support_id AS "supportId",
    address,
    country,
    zipcode,
    state,
    shipping_rate_price_sat AS "shippingRatePriceSat",
    shipping_rate_price AS "shippingRatePrice",
    seller_id AS "sellerId",
    gift_for_user_id AS "giftForUserId",
    refunded,
    fee_sat AS "feeSat",
    support_user_name AS "supportUserName",
    support_amount AS "supportAmount",
    support_user_id AS "supportUserId",
    street_name AS "streetName",
    building_number AS "buildingNumber",
    tx_skeleton AS "txSkeleton",
    shipped,
    shipped_at AS "shippedAt",
    shipping_information AS "shippingInformation",
    shipment_status AS "shipmentStatus",
    deliver_to_name AS "deliverToName",
    delivery_notes AS "deliveryNotes",
    cancelled,
    address_2,
    region,
    city,
    address_1,
    shipping_note AS "shippingNote"
`

export const PurchaseOrderSupports = `
    id,
    purchase_order_id As "purchaseOrderId",
    support_id As "supportId",
    created_at As "createdAt",
    updated_at As "updatedAt"
`

export const Purchases = `
    id,
    product_id AS "productId",
    user_id AS "userId",
    created_at, AS "createdAt",
    updated_at AS "updatedAt",
    uuid,
    purchase_order_id AS "purchaseOrderId",
    ad_credit_id AS "adCreditId"
  `

export const Reports = `
    id,
    user_id As "userId",
    post_id As "postId",
    category,
    text,
    created_at As "createdAt",
    updated_at As "updatedAt"  
  `

export const Reposts = `
  id,
  user_id AS "userId",
  post_id AS "postId",
  created_at As "createdAt",
  updated_at As "updatedAt",
  post_user_disabled_cache AS "postUserDisabledCache",
  post_dead_cache AS "postDeadCache"
`

export const Rulings = `
    id, 
    user_id As "userId",
    post_id As "postId",
    comment,
    created_at As "createdAt",
    updated_at As "updatedAt"
`

export const SchemaMigrations = `
    version
  `

export const SenderKeys = `
    id,
    encrypted_key As "encryptedKey",
    channel_id As "channelId",
    sender_id As "senderId",
    receiver_id As "receiverId",
    created_at As "createdAt"
    updated_at As "updatedAt",
    conversation_id As "conversationId",
    user_id As "userId",
    encrypted_private_key As "encryptedPrivateKey"
    
  `

export const ShippingRates = `
    id,
    product_id As "productId",
    country,
    price,
    created_at As "createdAt",
    updated_at As "updatedAt",
    uuid
  `

export const SubscriptionRequests = `
    id,
    user_id As "userId",
    creator_id As "creatorId",
    created_at, As "createdAt",
    updated_at As "updatedAt",  
    uuid
  `

export const Subscriptions = `
    id,
    user_id AS "userId",
    creator_id As "creatorId" ,
    created_at As "createdAt",
    updated_at As "updatedAt",
    timelock,
    amount,
    last_paid AS "lastPaid",
    uuid,
    auto_renew AS "autoRenew"
  `

export const SupportPayments = `
    id,
    support_id As "supportId",
    successful,
    error,
    created_at, As "createdAt"
    updated_at As "updatedAt",
    amount,
    tx_hash As "txHash"

  `

export const Supports = `
    id,
    user_id As "userId",
    creator_id As "creatorId",
    amount,
    created_at As "createdAt",
    updated_at As "updatedAt",
    timelock,
    failed_payments As "failedPayments",
    last_paid As "lastPaid",
    cancelled,
    uuid,
    deleted

  `

export const Tiers = ` 
    id,
    user_id As "userId",
    amount,
    name,
    created_at, As "createdAt"
    updated_at As "updatedAt,"   
    description,
    title,
    currency,
    bitbacker_id As "bitbackerId",
    uuid
  `

export const TokenCredits = `
    id,
    amount,
    user_id As "userId",
    campaign_id As "campaignId",
    created_at, As "createdAt",
    updated_at As "updatedAt" 
`

export const TransactionInputs = `
    id,
    address,
    value,
    transaction_id As "transactionId",
    created_at, As "createdAt",
    updated_at As "updatedAt",  
    amount_sat As "amountSat"

  `

export const TransactionOutputs = `
    id,
    address,
    value,
    transaction_id  As "transactionId",
    created_at  As "createdAt",
    updated_at As "updatedAt",
    amount_sat As "amountSat"
    
  `

export const Transactions = `
    id,
    user_id As "userId",
    tx_hash As "txHash",
    created_at, As "createdAt"
    updated_at As "updatedAt",
    confirmed,
    subscription_id As "subscriptionId" ,
    to,
    from,
    amount,
    amount_usd As "amountUsd",
    message,
    post_id As "postId",
    received,
    fee,
    wyre_id As "wyreId",
    transmitted_at AS "transmittedAt",
    from_user_id As "fromUserId",
    to_user_id As "toUserId",
    amount_fiat As "amountFiat", 
    amount_sat As "amountSat",
    notified,
    failed,
    confirmed_at As "confirmedAt",
    last_updated_on As "lastUpdatedOn" ,
    external,
    inputs,
    outputs,
    fee_sat As "feeSat",
    btc_price As "btcPrice"

  `

export const Unfollows = `
  id,
  user_id AS "userId",
  unfollowed_id AS "unfollowedId",
  created_at AS "createdAt",
  updated_at AS "updatedAt"
`  

export const Uploads = `
  id,
  md5,
  mime_type AS "mimeType",
  user_id AS "userId",
  created_at AS "createdAt",
  updated_at AS "updatedAt",
  optimization_start AS "optimizationStart",
  optimization_end AS "optimizationEnd",
  width,
  height,
  optimized_md5 AS "optimizationMd5",
  thumbnail_md5 AS "thumbnailMd5",
  width_cache AS "widthCache",
  height_cache AS "heightCache",
  available_in_cdn AS "availableInCdn",
  migration_failed AS "migrationFailed",
  cdn_md5 AS "cdnMd5",
  cdn_extension AS "cdnExtension",
  blurhash_cache AS "blurhashCache",
  optimized_url_cache AS "optimizedUrlCache",
  optimized_cache AS "optimizedCache",
  cdn_key AS "cdnKey",
  cdn_info_cache AS "cdnInfoCache",
  sha256,
  duration,
  space,
  content_length_cache AS "contentLengthCache",
  estimated_transcoding_time AS "estimatedTranscodingTime",
  filename
`

export const UrlMetadata = `
  id,
  url,
  metadata,
  created_at AS "createdAt",
  updated_at AS "updatedAt"
`

export const UserLogs = `
  id,
  user_id AS "userId",
  created_at AS "createdAt",
  updated_at AS "updatedAt",
  content
`

export const Users = `
  id,
  name,
  email,
  password_digest As "passwordDigest",
  created_at AS "createdAt",
  updated_at AS "updatedAt",
  api_key As "apiKey",
  private_key AS "privateKey",
  public_key AS "publicKey",
  address,
  wif,
  bio,
  featured,
  creator,
  preferences,
  avatar_url As "avatarUrl",
  display_name AS "displayName",
  background_url As "backgroundUrl",
  header_url As "headerUrl",
  wallpaper_url As "wallpaperUrl",
  password_reset_code As "passwordResetCode",
  webpush_subscription As "webpushSubscription",
  currency,
  stream_key As "streamKey",
  message_private_key AS "messagePrivateKey",
  uuid,
  wallet_scanned_at As "walletScannedAt",
  notifications_enabled As "notificationsEnabled",
  judge,
  super,
  dms_open As "dmsOpen",
  display_income As "displayIncome",
  supporting_enabled As "supportingEnabled",
  posts_count As "postsCount",
  reposts_count As "repostsCount",
  location,
  website,
  stealth,
  my_donation_urls As "myDonationUrls",
  my_social_urls As "mySocialUrls",
  show_initial_recommendations As "showInitialRecommendations",
  message_public_key AS "messagePublicKey",
  last_seen As "lastSeen",
  disabled,
  livestream_permissions As "livestreamPermissions",
  livestream_list_id AS "livestreamListId",
  livestream_title As "livestreamTitle",
  livestream_description As "livestreamDescription", 
  livestream_conversation_id As "livestreamConversationId",
  livestream_live As "livestreamLive",
  livestream_url_key As "livestreamUrlKey",
  livestream_screenshot_url As "livestreamScreenshotUrl", 
  livestream_screenshot_retries As "livestreamScreenshotRetries",
  balance_cache As "balanceCache",
  firebase_registration_id As "firebaseRegistrationId",
  wyre_account_id As "wyreAccountId",
  cell_phone_number As "cellPhoneNumber",
  legal_name As "legalName",
  wallet_imported As "walletImported",
  monetization_enabled As "monetizationEnabled",
  last_scanned_wallet As "lastScannedWallet",
  websockets_channel As "websocketsChannel",
  is_partner As "isPartner",
  tx_hook_id As "txHookId",
  score_cache As "scoreCache",
  unconfirmed_balance_cache As "unconfirmedBalanceCache",
  final_balance_cache As "finalBalanceCache",
  hide_locked_posts As "hideLockedPosts",
  avatar_md5 As "avatarMd5",
  avatar_file As "avatarFile",
  avatar_uuid As "avatarUuid",
  transactions_counter_cache As "transactionsCounterCache",
  ios_push_token As "iosPushToken",
  android_push_token As "androidPushToken",
  unread_notifications_counter_cache As "unreadNotificationsCounterCache",
  beta_tester As "betaTester",
  block_counter_cache As "blockCounterCache",
  notifications_counter_cache As "notificationsCounterCache",
  posts_counter_cache As "postsCounterCache",
  unread_messages_counter_cache As "unreadMessagesCounterCache",
  reposts_counter_cache As "repostsCounterCache",
  last_indexed As "lastIndexed",
  avatar_extension As "avatarExtension",
  subscriptions_counter_cache As "subscriptionsCounterCache",
  subscribers_counter_cache As "subscribersCounterCache",
  support_goal As "supportGoal",
  supports_counter_cache As "supportsCounterCache",
  sender_key_encryption_seed As "senderkeyEncryptionSeed",
  sender_key_encryption_salt As "senderKeyEncryptionSalt",
  last_post_date As "lastPostDate",
  seller_score_cache As "sellerScoreCache",
  show_nsfw_posts As "showNsfwPosts",
  blur_nsfw As "blurNsfw",
  old_avatar_url As "oldAvatarUrl",
  admin_nsfw As "adminNsfw",
  uploads_enabled As "uploadsEnabled",
  storage_used_cache As "storageUsedCache",
  plus_manually_enabled As "plusManuallyEnabled",
  google_secret As "googleSecret",
  mfa_secret As "mfaSecret",
  wallet_salt As "walletSalt",
  wallet_cache As "walletCache",
  manually_enabled_pro As "manuallyEnabledPro",
  user_nsfw As "userNsfw",
  failed_login_attempts As "failedLoginAttempts",
  segwit_enabled As "segwitEnabled",
  import_data_url As "importDataUrl",
  filtered_word_list As "filteredWordList",
  platform_information As "platformInformation"
`

export const Views = `
  id,
  upload_id AS "uploadId",
  created_at AS "createdAt",
  updated_at AS "updatedAt",
  session_id AS "sessionId",
  livestream_id AS "livestreamId",
  last_ping AS "lastPing",
  post_id AS "postId"
`

export const Votes = `
  id,
  up,
  post_id AS "postId",
  user_id AS "userId",
  created_at AS "createdAt",
  updated_at AS "updatedAt"
`

export const WyreTransactions = `
  id,
  user_id AS "userId",
  confirmed,
  wyre_id AS "wyreId",
  support_id AS "supportId",
  created_at AS "createdAt",
  updated_at AS "updatedAt"
` 
