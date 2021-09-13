import { AdCampaigns } from "../entities/AdCampaigns"
import { AdClicks } from "../entities/AdClicks"
import { AdCredits } from "../entities/AdCredits"
import { Adds } from "../entities/Adds"
import { AdImpressions } from "../entities/AdImpressions"
import { AdminAlerts } from "../entities/AdminAlerts"
import { AdPlacements } from "../entities/AdPlacements"
import { Ads } from "../entities/Ads"
import { ArInternalMetadata } from "../entities/ArInternalMetadata"
import { AuthenticatedAccounts } from "../entities/AuthenticatedAccounts"
import { AverageTransactionFees } from "../entities/AverageTransactionFees"
import { BitcoinAddressBackups } from "../entities/BitcoinAddressBackups"
import { BitcoinAddresses } from "../entities/BitcoinAddresses"
import { BitcoinPurchases } from "../entities/BitcoinPurchases"
import { BitcoinWallets } from "../entities/BitcoinWallets"
import { Blocks } from "../entities/Blocks"
import { Boards } from "../entities/Boards"
import { Channels } from "../entities/Channels"
import { Comments } from "../entities/Comments"
import { Contacts } from "../entities/Contacts"
import { Conversations } from "../entities/Conversations"
import { ConversationUsers } from "../entities/ConversationUsers"
import { DeletedUserBackups } from "../entities/DeletedUserBackups"
import { DeliveryAddresses } from "../entities/DeliveryAddresses"
import { Events } from "../entities/Events"
import { FacebookImports } from "../entities/FacebookImports"
import { Files } from "../entities/Files"
import { Filters } from "../entities/Filters"
import { HiddenHashtags } from "../entities/HiddenHashtags"
import { Invites } from "../entities/Invites"
import { Invoices } from "../entities/Invoices"
import { IrrelevantWords } from "../entities/IrrelevantWords"
import { Likes } from "../entities/Likes"
import { ListBlocks } from "../entities/ListBlocks"
import { ListMemberships } from "../entities/ListMemberships"
import { Lists } from "../entities/Lists"
import { ListSubscriptions } from "../entities/ListSubscriptions"
import { Livestreams } from "../entities/Livestreams"
import { LivestreamViewers } from "../entities/LivestreamViewers"
import { MediaThumbnails } from "../entities/MediaThumbnails"
import { Messages } from "../entities/Messages"
import { MessageUploads } from "../entities/MessageUploads"
import { Metrics } from "../entities/Metrics"
import { Notifications } from "../entities/Notifications"
import { OldSenderKeys } from "../entities/OldSenderKeys"
import { PaymentAddresses } from "../entities/PaymentAddresses"
import { Payments } from "../entities/Payments"
import { PostBoosts } from "../entities/PostBoosts"
import { Posts } from "../entities/Posts"
import { PostUploads } from "../entities/PostUploads"
import { ProductInventories } from "../entities/ProductInventories"
import { Products } from "../entities/Products"
import { ProductUploads } from "../entities/ProductUploads"
import { PurchaseOrders } from "../entities/PurchaseOrders"
import { PurchaseOrderSupports } from "../entities/PurchaseOrderSupports"
import { Purchases } from "../entities/Purchases"
import { Reports } from "../entities/Reports"
import { Reposts } from "../entities/Reposts"
import { Rulings } from "../entities/Rulings"
import { SchemaMigrations } from "../entities/SchemaMigrations"
import { SenderKeys } from "../entities/SenderKeys"
import { ShippingRates } from "../entities/ShippingRates"
import { SubscriptionRequests } from "../entities/SubscriptionRequests"
import { Subscriptions } from "../entities/Subscriptions"
import { SupportPayments } from "../entities/SupportPayments"
import { Supports } from "../entities/Supports"
import { Tiers } from "../entities/Tiers"
import { TokenCredits } from "../entities/TokenCredits"
import { TransactionInputs } from "../entities/TransactionInputs"
import { TransactionOutputs } from "../entities/TransactionOutputs"
import { Transactions } from "../entities/Transactions"
import { Unfollows } from "../entities/Unfollows"
import { Uploads } from "../entities/Uploads"
import { UrlMetadata } from "../entities/UrlMetadata"
import { Users } from "../entities/Users"
import { UserLogs } from "../entities/UserLogs"
import { Views } from "../entities/Views"
import { Votes } from "../entities/Votes"
import { WyreTransactions } from "../entities/WyreTransactions"

import { createConnections, getConnection } from "typeorm"
import "dotenv/config"
import * as async from "async"
import * as keys from '../utils/entityKeys'

const entities = [
  AdCampaigns,
  AdClicks,
  AdCredits,
  Adds,
  AdImpressions,
  AdminAlerts,
  AdPlacements,
  Ads,
  ArInternalMetadata,
  AuthenticatedAccounts,
  AverageTransactionFees,
  BitcoinAddressBackups,
  BitcoinAddresses,
  BitcoinPurchases,
  BitcoinWallets,
  Blocks,
  Boards,
  Channels,
  Comments,
  Contacts,
  Conversations,
  ConversationUsers,
  DeletedUserBackups,
  DeliveryAddresses,
  Events,
  FacebookImports,
  Files,
  Filters,
  HiddenHashtags,
  Invites,
  Invoices,
  IrrelevantWords,
  Likes,
  ListBlocks,
  ListMemberships,
  Lists,
  ListSubscriptions,
  Livestreams,
  LivestreamViewers,
  MediaThumbnails,
  Messages,
  MessageUploads,
  Metrics,
  Notifications,
  OldSenderKeys,
  PaymentAddresses,
  Payments,
  PostBoosts,
  Posts,
  PostUploads,
  Products,
  ProductInventories,
  PurchaseOrders,
  PurchaseOrderSupports,
  Purchases,
  Reports,
  Reposts,
  Rulings,
  SchemaMigrations,
  SenderKeys,
  ShippingRates,
  SubscriptionRequests,
  Subscriptions,
  SupportPayments,
  Supports,
  Tiers,
  TokenCredits,
  TransactionInputs,
  TransactionOutputs,
  Transactions,
  Unfollows,
  Uploads,
  UrlMetadata,
  UserLogs,
  Users,
  Views,
  Votes,
  WyreTransactions,
  ProductUploads,
]

let pgConnection

function getTime() {
  let today = new Date()
  return `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}:${today.getMilliseconds()}`
}

function insertData(repository, name, table) {
  return new Promise(async (resolve, reject) => {
    console.log("=================================")
    console.log("TABLE:", table)
    console.log("Start time:", getTime())

    const result = await pgConnection.query(
      `SELECT ${keys[name]} FROM ${table}`
    )
    console.log(result.length);
    async.mapSeries(
      result,
      async (data, callback) => {
        await getConnection("default").getRepository(repository).insert(data)

        callback(null, result)
      },
      (err, results) => {
        if (err) {
          console.log(`Error: ${err}`)
          reject(err)
        } else {
          console.log(`Migration done for ${table}`)
          console.log("End time:", getTime())
          console.log("=================================")
          resolve({})
        }
      }
    )
  })
}

async function migrateDataTables() {
  await createConnections([
    {
      name: "default",
      type: "mysql",
      host: process.env["MYSQL_HOST"],
      port: +process.env["MYSQL_PORT"],
      username: process.env["MYSQL_USERNAME"],
      password: process.env["MYSQL_PASSWORD"],
      database: process.env["MYSQL_DATABASE"],
      entities: [...entities],
      // connectTimeout: 400000,
      synchronize: false,
      extra: {
        // connectionLimit: 3000000,
        // utf8mb4_unicode_ci charset is important for storing emojis
        charset: "utf8mb4_unicode_ci",
      },
    },
    {
      name: "pg-connection",
      type: "postgres",
      ssl: true,
      extra: {
        ssl: {
          rejectUnauthorized: false,
        },
        connectionLimit: 300000,
        requestTimeout: 300000,
        pool: {
          max: 20,
        },
      },
      host: process.env["POSTGRESQL_HOST"],
      port: +process.env["POSTGRESQL_PORT"],
      username: process.env["POSTGRESQL_USERNAME"],
      password: process.env["POSTGRESQL_PASSWORD"],
      database: process.env["POSTGRESQL_DATABASE"],
      entities: [...entities],
    },
  ])

  pgConnection = getConnection("pg-connection")

   /**
   *          DATA SET - 1
   */
  //  await insertData(Adds, 'Adds', 'adds')
  //  await insertData(BitcoinAddressBackups, 'BitcoinAddressBackups', 'bitcoin_address_backups')
  //  await insertData(BitcoinPurchases, 'BitcoinPurchases', 'bitcoin_purchases')
  //  await insertData(BitcoinWallets, 'BitcoinWallets', 'bitcoin_wallets')
  //  await insertData(Boards, 'Boards', 'boards')
  //  await insertData(Channels, 'Channels', 'channels')
  //  await insertData(DeliveryAddresses, 'DeliveryAddresses', 'delivery_addresses')
  //  await insertData(Events, 'Events', 'events')
  //  await insertData(Files, 'Files', 'files')
  //  await insertData(Invoices, 'Invoices', 'invoices')
  //  await insertData(IrrelevantWords, 'IrrelevantWords', 'irrelevant_words')
  //  await insertData(MessageUploads, 'MessageUploads', 'message_uploads')
  //  await insertData(PostBoosts, 'PostBoosts', 'post_boosts')
  //  await insertData(ProductInventories, 'ProductInventories', 'product_inventories')
  //  await insertData(Reports, 'Reports', 'reports')
  //  await insertData(Rulings, 'Rulings', 'rulings')
  //  await insertData(SenderKeys, 'SenderKeys', 'sender_keys')
  //  await insertData(TokenCredits, 'TokenCredits', 'token_credits')
  //  await insertData(WyreTransactions, 'WyreTransactions', 'wyre_transactions')
 
   /**
    *          DATA SET - 2
    */
    // await insertData(AdCredits, 'AdCredits', 'ad_credits')
    //  await insertData(Ads, 'Ads', 'ads')
    //  await insertData(FacebookImports, 'FacebookImports', 'facebook_imports')
    //  await insertData(MediaThumbnails, 'MediaThumbnails', 'media_thumbnails')
    //  await insertData(AverageTransactionFees, 'AverageTransactionFees', 'average_transaction_fees')
    //  await insertData(ListBlocks, 'ListBlocks', 'list_blocks')
    //  await insertData(Votes, 'Votes', 'votes')
    //  await insertData(ProductUploads, 'ProductUploads', 'product_uploads')
    //  await insertData(AdPlacements, 'AdPlacements', 'ad_placements')
    //  await insertData(ArInternalMetadata, 'ArInternalMetadata', 'ar_internal_metadata')
    //  await insertData(Comments, 'Comments', 'comments')
    //  await insertData(Filters, 'Filters', 'filters')
    //  await insertData(HiddenHashtags, 'HiddenHashtags', 'hidden_hashtags')
    //  await insertData(Invites, 'Invites', 'invites')
    //  await insertData(ShippingRates, 'ShippingRates', 'shipping_rates')
    //  await insertData(ListSubscriptions, 'ListSubscriptions', 'list_subscriptions')
    //  await insertData(Payments, 'Payments', 'payments')
    //  await insertData(AdCampaigns, 'AdCampaigns', 'ad_campaigns')
    //  await insertData(AdClicks, 'AdClicks', 'ad_clicks')
    //  await insertData(DeletedUserBackups, 'DeletedUserBackups', 'deleted_user_backups')
    //  await insertData(Purchases, 'Purchases', 'purchases')
    //  await insertData(PaymentAddresses, 'PaymentAddresses', 'payment_addresses')
    //  await insertData(Products, 'Products', 'products')
    //  await insertData(OldSenderKeys, 'OldSenderKeys', 'old_sender_keys')
    //  await insertData(PurchaseOrderSupports, 'PurchaseOrderSupports', 'purchase_order_supports')
    //  await insertData(SchemaMigrations, 'SchemaMigrations', 'schema_migrations')
  
    // /**
    //  *          DATA SET - 3
    //  */
    // await insertData(Supports, 'Supports', 'supports')
    // await insertData(Lists, 'Lists', 'lists')
    // await insertData(ListMemberships,'ListMemberships','list_memberships')
    // await insertData(TransactionInputs,'TransactionInputs' ,'transaction_inputs')
    // await insertData(Blocks, 'Blocks','blocks')
    // await insertData(UserLogs, 'UserLogs','user_logs')
    // await insertData(AuthenticatedAccounts,'AuthenticatedAccounts','authenticated_accounts')
    // await insertData(TransactionOutputs,'TransactionOutputs' ,'transaction_outputs')
    // await insertData(Tiers, 'Tiers','tiers')
    // await insertData(SubscriptionRequests,'SubscriptionRequests', 'subscription_requests')
    // await insertData(PurchaseOrders, 'PurchaseOrders','purchase_orders')
    // await insertData(LivestreamViewers,'LivestreamViewers' ,'livestream_viewers')
    
    // await insertData(Livestreams,'Livestreams', 'livestreams')
    // await insertData(BitcoinAddresses,'BitcoinAddresses', 'bitcoin_addresses')
    // await insertData(Transactions,'Transactions' ,'transactions')
    // await insertData(Contacts,'Contacts', 'contacts')
    // await insertData(SupportPayments,'SupportPayments', 'support_payments')
    // await insertData(Reposts, 'Reposts','reposts')
    // await insertData(Unfollows,'Unfollows' ,'unfollows')
  
    // /**
    // *          DATA SET - 4
    //  */
    await insertData(Views, 'Views','views')
    await insertData(UrlMetadata,'UrlMetadata' ,'url_metadata')
    await insertData(ConversationUsers,'ConversationUsers' ,'conversation_users')
    await insertData(PostUploads, 'PostUploads',"post_uploads")
    await insertData(Conversations,'Conversations', 'conversations')
    await insertData(Metrics, 'Metrics','metrics')
    await insertData(Users, 'Users','users')
  
    // /**
    //  *          DATA SET - 5
    //  */
    // await insertData(Messages, 'Messages', 'messages')
    // await insertData(AdImpressions,'AdImpressions', 'ad_impressions')
    // await insertData(AdminAlerts, 'AdminAlerts','admin_alerts')
    // await insertData(Subscriptions, 'Subscriptions','subscriptions')
    // await insertData(Likes, 'Likes','likes')
    // await insertData(Notifications, 'Notifications','notifications')
    // await insertData(Uploads,'Uploads' ,'uploads')
  
    // /**
    //  *          DATA SET - 6
    //  */
    // await insertData(Posts,'Posts', "posts")
  

  console.log("Migration done successfully!")
}

migrateDataTables()
