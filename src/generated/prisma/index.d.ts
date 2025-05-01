
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Player
 * 
 */
export type Player = $Result.DefaultSelection<Prisma.$PlayerPayload>
/**
 * Model Deck
 * 
 */
export type Deck = $Result.DefaultSelection<Prisma.$DeckPayload>
/**
 * Model Pod
 * 
 */
export type Pod = $Result.DefaultSelection<Prisma.$PodPayload>
/**
 * Model PlayerPod
 * 
 */
export type PlayerPod = $Result.DefaultSelection<Prisma.$PlayerPodPayload>
/**
 * Model Game
 * 
 */
export type Game = $Result.DefaultSelection<Prisma.$GamePayload>
/**
 * Model GamePlayer
 * 
 */
export type GamePlayer = $Result.DefaultSelection<Prisma.$GamePlayerPayload>
/**
 * Model GameDeck
 * 
 */
export type GameDeck = $Result.DefaultSelection<Prisma.$GameDeckPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Players
 * const players = await prisma.player.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Players
   * const players = await prisma.player.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.player`: Exposes CRUD operations for the **Player** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Players
    * const players = await prisma.player.findMany()
    * ```
    */
  get player(): Prisma.PlayerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.deck`: Exposes CRUD operations for the **Deck** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Decks
    * const decks = await prisma.deck.findMany()
    * ```
    */
  get deck(): Prisma.DeckDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pod`: Exposes CRUD operations for the **Pod** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pods
    * const pods = await prisma.pod.findMany()
    * ```
    */
  get pod(): Prisma.PodDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.playerPod`: Exposes CRUD operations for the **PlayerPod** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PlayerPods
    * const playerPods = await prisma.playerPod.findMany()
    * ```
    */
  get playerPod(): Prisma.PlayerPodDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.game`: Exposes CRUD operations for the **Game** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Games
    * const games = await prisma.game.findMany()
    * ```
    */
  get game(): Prisma.GameDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.gamePlayer`: Exposes CRUD operations for the **GamePlayer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GamePlayers
    * const gamePlayers = await prisma.gamePlayer.findMany()
    * ```
    */
  get gamePlayer(): Prisma.GamePlayerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.gameDeck`: Exposes CRUD operations for the **GameDeck** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GameDecks
    * const gameDecks = await prisma.gameDeck.findMany()
    * ```
    */
  get gameDeck(): Prisma.GameDeckDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Player: 'Player',
    Deck: 'Deck',
    Pod: 'Pod',
    PlayerPod: 'PlayerPod',
    Game: 'Game',
    GamePlayer: 'GamePlayer',
    GameDeck: 'GameDeck'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "player" | "deck" | "pod" | "playerPod" | "game" | "gamePlayer" | "gameDeck"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Player: {
        payload: Prisma.$PlayerPayload<ExtArgs>
        fields: Prisma.PlayerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlayerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlayerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>
          }
          findFirst: {
            args: Prisma.PlayerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlayerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>
          }
          findMany: {
            args: Prisma.PlayerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>[]
          }
          create: {
            args: Prisma.PlayerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>
          }
          createMany: {
            args: Prisma.PlayerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PlayerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>[]
          }
          delete: {
            args: Prisma.PlayerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>
          }
          update: {
            args: Prisma.PlayerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>
          }
          deleteMany: {
            args: Prisma.PlayerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlayerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PlayerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>[]
          }
          upsert: {
            args: Prisma.PlayerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>
          }
          aggregate: {
            args: Prisma.PlayerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlayer>
          }
          groupBy: {
            args: Prisma.PlayerGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlayerGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlayerCountArgs<ExtArgs>
            result: $Utils.Optional<PlayerCountAggregateOutputType> | number
          }
        }
      }
      Deck: {
        payload: Prisma.$DeckPayload<ExtArgs>
        fields: Prisma.DeckFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DeckFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeckPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DeckFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeckPayload>
          }
          findFirst: {
            args: Prisma.DeckFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeckPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DeckFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeckPayload>
          }
          findMany: {
            args: Prisma.DeckFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeckPayload>[]
          }
          create: {
            args: Prisma.DeckCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeckPayload>
          }
          createMany: {
            args: Prisma.DeckCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DeckCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeckPayload>[]
          }
          delete: {
            args: Prisma.DeckDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeckPayload>
          }
          update: {
            args: Prisma.DeckUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeckPayload>
          }
          deleteMany: {
            args: Prisma.DeckDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DeckUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DeckUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeckPayload>[]
          }
          upsert: {
            args: Prisma.DeckUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeckPayload>
          }
          aggregate: {
            args: Prisma.DeckAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDeck>
          }
          groupBy: {
            args: Prisma.DeckGroupByArgs<ExtArgs>
            result: $Utils.Optional<DeckGroupByOutputType>[]
          }
          count: {
            args: Prisma.DeckCountArgs<ExtArgs>
            result: $Utils.Optional<DeckCountAggregateOutputType> | number
          }
        }
      }
      Pod: {
        payload: Prisma.$PodPayload<ExtArgs>
        fields: Prisma.PodFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PodFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PodPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PodFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PodPayload>
          }
          findFirst: {
            args: Prisma.PodFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PodPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PodFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PodPayload>
          }
          findMany: {
            args: Prisma.PodFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PodPayload>[]
          }
          create: {
            args: Prisma.PodCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PodPayload>
          }
          createMany: {
            args: Prisma.PodCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PodCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PodPayload>[]
          }
          delete: {
            args: Prisma.PodDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PodPayload>
          }
          update: {
            args: Prisma.PodUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PodPayload>
          }
          deleteMany: {
            args: Prisma.PodDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PodUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PodUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PodPayload>[]
          }
          upsert: {
            args: Prisma.PodUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PodPayload>
          }
          aggregate: {
            args: Prisma.PodAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePod>
          }
          groupBy: {
            args: Prisma.PodGroupByArgs<ExtArgs>
            result: $Utils.Optional<PodGroupByOutputType>[]
          }
          count: {
            args: Prisma.PodCountArgs<ExtArgs>
            result: $Utils.Optional<PodCountAggregateOutputType> | number
          }
        }
      }
      PlayerPod: {
        payload: Prisma.$PlayerPodPayload<ExtArgs>
        fields: Prisma.PlayerPodFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlayerPodFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPodPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlayerPodFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPodPayload>
          }
          findFirst: {
            args: Prisma.PlayerPodFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPodPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlayerPodFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPodPayload>
          }
          findMany: {
            args: Prisma.PlayerPodFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPodPayload>[]
          }
          create: {
            args: Prisma.PlayerPodCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPodPayload>
          }
          createMany: {
            args: Prisma.PlayerPodCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PlayerPodCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPodPayload>[]
          }
          delete: {
            args: Prisma.PlayerPodDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPodPayload>
          }
          update: {
            args: Prisma.PlayerPodUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPodPayload>
          }
          deleteMany: {
            args: Prisma.PlayerPodDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlayerPodUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PlayerPodUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPodPayload>[]
          }
          upsert: {
            args: Prisma.PlayerPodUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPodPayload>
          }
          aggregate: {
            args: Prisma.PlayerPodAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlayerPod>
          }
          groupBy: {
            args: Prisma.PlayerPodGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlayerPodGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlayerPodCountArgs<ExtArgs>
            result: $Utils.Optional<PlayerPodCountAggregateOutputType> | number
          }
        }
      }
      Game: {
        payload: Prisma.$GamePayload<ExtArgs>
        fields: Prisma.GameFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GameFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GameFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          findFirst: {
            args: Prisma.GameFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GameFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          findMany: {
            args: Prisma.GameFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>[]
          }
          create: {
            args: Prisma.GameCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          createMany: {
            args: Prisma.GameCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GameCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>[]
          }
          delete: {
            args: Prisma.GameDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          update: {
            args: Prisma.GameUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          deleteMany: {
            args: Prisma.GameDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GameUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GameUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>[]
          }
          upsert: {
            args: Prisma.GameUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          aggregate: {
            args: Prisma.GameAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGame>
          }
          groupBy: {
            args: Prisma.GameGroupByArgs<ExtArgs>
            result: $Utils.Optional<GameGroupByOutputType>[]
          }
          count: {
            args: Prisma.GameCountArgs<ExtArgs>
            result: $Utils.Optional<GameCountAggregateOutputType> | number
          }
        }
      }
      GamePlayer: {
        payload: Prisma.$GamePlayerPayload<ExtArgs>
        fields: Prisma.GamePlayerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GamePlayerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePlayerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GamePlayerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePlayerPayload>
          }
          findFirst: {
            args: Prisma.GamePlayerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePlayerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GamePlayerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePlayerPayload>
          }
          findMany: {
            args: Prisma.GamePlayerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePlayerPayload>[]
          }
          create: {
            args: Prisma.GamePlayerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePlayerPayload>
          }
          createMany: {
            args: Prisma.GamePlayerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GamePlayerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePlayerPayload>[]
          }
          delete: {
            args: Prisma.GamePlayerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePlayerPayload>
          }
          update: {
            args: Prisma.GamePlayerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePlayerPayload>
          }
          deleteMany: {
            args: Prisma.GamePlayerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GamePlayerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GamePlayerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePlayerPayload>[]
          }
          upsert: {
            args: Prisma.GamePlayerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePlayerPayload>
          }
          aggregate: {
            args: Prisma.GamePlayerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGamePlayer>
          }
          groupBy: {
            args: Prisma.GamePlayerGroupByArgs<ExtArgs>
            result: $Utils.Optional<GamePlayerGroupByOutputType>[]
          }
          count: {
            args: Prisma.GamePlayerCountArgs<ExtArgs>
            result: $Utils.Optional<GamePlayerCountAggregateOutputType> | number
          }
        }
      }
      GameDeck: {
        payload: Prisma.$GameDeckPayload<ExtArgs>
        fields: Prisma.GameDeckFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GameDeckFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameDeckPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GameDeckFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameDeckPayload>
          }
          findFirst: {
            args: Prisma.GameDeckFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameDeckPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GameDeckFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameDeckPayload>
          }
          findMany: {
            args: Prisma.GameDeckFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameDeckPayload>[]
          }
          create: {
            args: Prisma.GameDeckCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameDeckPayload>
          }
          createMany: {
            args: Prisma.GameDeckCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GameDeckCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameDeckPayload>[]
          }
          delete: {
            args: Prisma.GameDeckDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameDeckPayload>
          }
          update: {
            args: Prisma.GameDeckUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameDeckPayload>
          }
          deleteMany: {
            args: Prisma.GameDeckDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GameDeckUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GameDeckUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameDeckPayload>[]
          }
          upsert: {
            args: Prisma.GameDeckUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameDeckPayload>
          }
          aggregate: {
            args: Prisma.GameDeckAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGameDeck>
          }
          groupBy: {
            args: Prisma.GameDeckGroupByArgs<ExtArgs>
            result: $Utils.Optional<GameDeckGroupByOutputType>[]
          }
          count: {
            args: Prisma.GameDeckCountArgs<ExtArgs>
            result: $Utils.Optional<GameDeckCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    player?: PlayerOmit
    deck?: DeckOmit
    pod?: PodOmit
    playerPod?: PlayerPodOmit
    game?: GameOmit
    gamePlayer?: GamePlayerOmit
    gameDeck?: GameDeckOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type PlayerCountOutputType
   */

  export type PlayerCountOutputType = {
    decks: number
    games: number
    pods: number
  }

  export type PlayerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    decks?: boolean | PlayerCountOutputTypeCountDecksArgs
    games?: boolean | PlayerCountOutputTypeCountGamesArgs
    pods?: boolean | PlayerCountOutputTypeCountPodsArgs
  }

  // Custom InputTypes
  /**
   * PlayerCountOutputType without action
   */
  export type PlayerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerCountOutputType
     */
    select?: PlayerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PlayerCountOutputType without action
   */
  export type PlayerCountOutputTypeCountDecksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeckWhereInput
  }

  /**
   * PlayerCountOutputType without action
   */
  export type PlayerCountOutputTypeCountGamesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GamePlayerWhereInput
  }

  /**
   * PlayerCountOutputType without action
   */
  export type PlayerCountOutputTypeCountPodsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlayerPodWhereInput
  }


  /**
   * Count Type DeckCountOutputType
   */

  export type DeckCountOutputType = {
    games: number
  }

  export type DeckCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    games?: boolean | DeckCountOutputTypeCountGamesArgs
  }

  // Custom InputTypes
  /**
   * DeckCountOutputType without action
   */
  export type DeckCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeckCountOutputType
     */
    select?: DeckCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DeckCountOutputType without action
   */
  export type DeckCountOutputTypeCountGamesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameDeckWhereInput
  }


  /**
   * Count Type PodCountOutputType
   */

  export type PodCountOutputType = {
    games: number
    players: number
  }

  export type PodCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    games?: boolean | PodCountOutputTypeCountGamesArgs
    players?: boolean | PodCountOutputTypeCountPlayersArgs
  }

  // Custom InputTypes
  /**
   * PodCountOutputType without action
   */
  export type PodCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PodCountOutputType
     */
    select?: PodCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PodCountOutputType without action
   */
  export type PodCountOutputTypeCountGamesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameWhereInput
  }

  /**
   * PodCountOutputType without action
   */
  export type PodCountOutputTypeCountPlayersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlayerPodWhereInput
  }


  /**
   * Count Type GameCountOutputType
   */

  export type GameCountOutputType = {
    decks: number
    players: number
  }

  export type GameCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    decks?: boolean | GameCountOutputTypeCountDecksArgs
    players?: boolean | GameCountOutputTypeCountPlayersArgs
  }

  // Custom InputTypes
  /**
   * GameCountOutputType without action
   */
  export type GameCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameCountOutputType
     */
    select?: GameCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GameCountOutputType without action
   */
  export type GameCountOutputTypeCountDecksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameDeckWhereInput
  }

  /**
   * GameCountOutputType without action
   */
  export type GameCountOutputTypeCountPlayersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GamePlayerWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Player
   */

  export type AggregatePlayer = {
    _count: PlayerCountAggregateOutputType | null
    _min: PlayerMinAggregateOutputType | null
    _max: PlayerMaxAggregateOutputType | null
  }

  export type PlayerMinAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PlayerMaxAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PlayerCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PlayerMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PlayerMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PlayerCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PlayerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Player to aggregate.
     */
    where?: PlayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Players to fetch.
     */
    orderBy?: PlayerOrderByWithRelationInput | PlayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Players from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Players.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Players
    **/
    _count?: true | PlayerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlayerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlayerMaxAggregateInputType
  }

  export type GetPlayerAggregateType<T extends PlayerAggregateArgs> = {
        [P in keyof T & keyof AggregatePlayer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlayer[P]>
      : GetScalarType<T[P], AggregatePlayer[P]>
  }




  export type PlayerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlayerWhereInput
    orderBy?: PlayerOrderByWithAggregationInput | PlayerOrderByWithAggregationInput[]
    by: PlayerScalarFieldEnum[] | PlayerScalarFieldEnum
    having?: PlayerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlayerCountAggregateInputType | true
    _min?: PlayerMinAggregateInputType
    _max?: PlayerMaxAggregateInputType
  }

  export type PlayerGroupByOutputType = {
    id: string
    name: string
    createdAt: Date
    updatedAt: Date
    _count: PlayerCountAggregateOutputType | null
    _min: PlayerMinAggregateOutputType | null
    _max: PlayerMaxAggregateOutputType | null
  }

  type GetPlayerGroupByPayload<T extends PlayerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlayerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlayerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlayerGroupByOutputType[P]>
            : GetScalarType<T[P], PlayerGroupByOutputType[P]>
        }
      >
    >


  export type PlayerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    decks?: boolean | Player$decksArgs<ExtArgs>
    games?: boolean | Player$gamesArgs<ExtArgs>
    pods?: boolean | Player$podsArgs<ExtArgs>
    _count?: boolean | PlayerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["player"]>

  export type PlayerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["player"]>

  export type PlayerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["player"]>

  export type PlayerSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PlayerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt" | "updatedAt", ExtArgs["result"]["player"]>
  export type PlayerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    decks?: boolean | Player$decksArgs<ExtArgs>
    games?: boolean | Player$gamesArgs<ExtArgs>
    pods?: boolean | Player$podsArgs<ExtArgs>
    _count?: boolean | PlayerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PlayerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PlayerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PlayerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Player"
    objects: {
      decks: Prisma.$DeckPayload<ExtArgs>[]
      games: Prisma.$GamePlayerPayload<ExtArgs>[]
      pods: Prisma.$PlayerPodPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["player"]>
    composites: {}
  }

  type PlayerGetPayload<S extends boolean | null | undefined | PlayerDefaultArgs> = $Result.GetResult<Prisma.$PlayerPayload, S>

  type PlayerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlayerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlayerCountAggregateInputType | true
    }

  export interface PlayerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Player'], meta: { name: 'Player' } }
    /**
     * Find zero or one Player that matches the filter.
     * @param {PlayerFindUniqueArgs} args - Arguments to find a Player
     * @example
     * // Get one Player
     * const player = await prisma.player.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlayerFindUniqueArgs>(args: SelectSubset<T, PlayerFindUniqueArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Player that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlayerFindUniqueOrThrowArgs} args - Arguments to find a Player
     * @example
     * // Get one Player
     * const player = await prisma.player.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlayerFindUniqueOrThrowArgs>(args: SelectSubset<T, PlayerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Player that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerFindFirstArgs} args - Arguments to find a Player
     * @example
     * // Get one Player
     * const player = await prisma.player.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlayerFindFirstArgs>(args?: SelectSubset<T, PlayerFindFirstArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Player that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerFindFirstOrThrowArgs} args - Arguments to find a Player
     * @example
     * // Get one Player
     * const player = await prisma.player.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlayerFindFirstOrThrowArgs>(args?: SelectSubset<T, PlayerFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Players that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Players
     * const players = await prisma.player.findMany()
     * 
     * // Get first 10 Players
     * const players = await prisma.player.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const playerWithIdOnly = await prisma.player.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlayerFindManyArgs>(args?: SelectSubset<T, PlayerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Player.
     * @param {PlayerCreateArgs} args - Arguments to create a Player.
     * @example
     * // Create one Player
     * const Player = await prisma.player.create({
     *   data: {
     *     // ... data to create a Player
     *   }
     * })
     * 
     */
    create<T extends PlayerCreateArgs>(args: SelectSubset<T, PlayerCreateArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Players.
     * @param {PlayerCreateManyArgs} args - Arguments to create many Players.
     * @example
     * // Create many Players
     * const player = await prisma.player.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlayerCreateManyArgs>(args?: SelectSubset<T, PlayerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Players and returns the data saved in the database.
     * @param {PlayerCreateManyAndReturnArgs} args - Arguments to create many Players.
     * @example
     * // Create many Players
     * const player = await prisma.player.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Players and only return the `id`
     * const playerWithIdOnly = await prisma.player.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PlayerCreateManyAndReturnArgs>(args?: SelectSubset<T, PlayerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Player.
     * @param {PlayerDeleteArgs} args - Arguments to delete one Player.
     * @example
     * // Delete one Player
     * const Player = await prisma.player.delete({
     *   where: {
     *     // ... filter to delete one Player
     *   }
     * })
     * 
     */
    delete<T extends PlayerDeleteArgs>(args: SelectSubset<T, PlayerDeleteArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Player.
     * @param {PlayerUpdateArgs} args - Arguments to update one Player.
     * @example
     * // Update one Player
     * const player = await prisma.player.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlayerUpdateArgs>(args: SelectSubset<T, PlayerUpdateArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Players.
     * @param {PlayerDeleteManyArgs} args - Arguments to filter Players to delete.
     * @example
     * // Delete a few Players
     * const { count } = await prisma.player.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlayerDeleteManyArgs>(args?: SelectSubset<T, PlayerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Players.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Players
     * const player = await prisma.player.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlayerUpdateManyArgs>(args: SelectSubset<T, PlayerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Players and returns the data updated in the database.
     * @param {PlayerUpdateManyAndReturnArgs} args - Arguments to update many Players.
     * @example
     * // Update many Players
     * const player = await prisma.player.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Players and only return the `id`
     * const playerWithIdOnly = await prisma.player.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PlayerUpdateManyAndReturnArgs>(args: SelectSubset<T, PlayerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Player.
     * @param {PlayerUpsertArgs} args - Arguments to update or create a Player.
     * @example
     * // Update or create a Player
     * const player = await prisma.player.upsert({
     *   create: {
     *     // ... data to create a Player
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Player we want to update
     *   }
     * })
     */
    upsert<T extends PlayerUpsertArgs>(args: SelectSubset<T, PlayerUpsertArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Players.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerCountArgs} args - Arguments to filter Players to count.
     * @example
     * // Count the number of Players
     * const count = await prisma.player.count({
     *   where: {
     *     // ... the filter for the Players we want to count
     *   }
     * })
    **/
    count<T extends PlayerCountArgs>(
      args?: Subset<T, PlayerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlayerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Player.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PlayerAggregateArgs>(args: Subset<T, PlayerAggregateArgs>): Prisma.PrismaPromise<GetPlayerAggregateType<T>>

    /**
     * Group by Player.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PlayerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlayerGroupByArgs['orderBy'] }
        : { orderBy?: PlayerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PlayerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlayerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Player model
   */
  readonly fields: PlayerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Player.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlayerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    decks<T extends Player$decksArgs<ExtArgs> = {}>(args?: Subset<T, Player$decksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeckPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    games<T extends Player$gamesArgs<ExtArgs> = {}>(args?: Subset<T, Player$gamesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GamePlayerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    pods<T extends Player$podsArgs<ExtArgs> = {}>(args?: Subset<T, Player$podsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerPodPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Player model
   */
  interface PlayerFieldRefs {
    readonly id: FieldRef<"Player", 'String'>
    readonly name: FieldRef<"Player", 'String'>
    readonly createdAt: FieldRef<"Player", 'DateTime'>
    readonly updatedAt: FieldRef<"Player", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Player findUnique
   */
  export type PlayerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * Filter, which Player to fetch.
     */
    where: PlayerWhereUniqueInput
  }

  /**
   * Player findUniqueOrThrow
   */
  export type PlayerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * Filter, which Player to fetch.
     */
    where: PlayerWhereUniqueInput
  }

  /**
   * Player findFirst
   */
  export type PlayerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * Filter, which Player to fetch.
     */
    where?: PlayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Players to fetch.
     */
    orderBy?: PlayerOrderByWithRelationInput | PlayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Players.
     */
    cursor?: PlayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Players from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Players.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Players.
     */
    distinct?: PlayerScalarFieldEnum | PlayerScalarFieldEnum[]
  }

  /**
   * Player findFirstOrThrow
   */
  export type PlayerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * Filter, which Player to fetch.
     */
    where?: PlayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Players to fetch.
     */
    orderBy?: PlayerOrderByWithRelationInput | PlayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Players.
     */
    cursor?: PlayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Players from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Players.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Players.
     */
    distinct?: PlayerScalarFieldEnum | PlayerScalarFieldEnum[]
  }

  /**
   * Player findMany
   */
  export type PlayerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * Filter, which Players to fetch.
     */
    where?: PlayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Players to fetch.
     */
    orderBy?: PlayerOrderByWithRelationInput | PlayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Players.
     */
    cursor?: PlayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Players from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Players.
     */
    skip?: number
    distinct?: PlayerScalarFieldEnum | PlayerScalarFieldEnum[]
  }

  /**
   * Player create
   */
  export type PlayerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * The data needed to create a Player.
     */
    data: XOR<PlayerCreateInput, PlayerUncheckedCreateInput>
  }

  /**
   * Player createMany
   */
  export type PlayerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Players.
     */
    data: PlayerCreateManyInput | PlayerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Player createManyAndReturn
   */
  export type PlayerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * The data used to create many Players.
     */
    data: PlayerCreateManyInput | PlayerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Player update
   */
  export type PlayerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * The data needed to update a Player.
     */
    data: XOR<PlayerUpdateInput, PlayerUncheckedUpdateInput>
    /**
     * Choose, which Player to update.
     */
    where: PlayerWhereUniqueInput
  }

  /**
   * Player updateMany
   */
  export type PlayerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Players.
     */
    data: XOR<PlayerUpdateManyMutationInput, PlayerUncheckedUpdateManyInput>
    /**
     * Filter which Players to update
     */
    where?: PlayerWhereInput
    /**
     * Limit how many Players to update.
     */
    limit?: number
  }

  /**
   * Player updateManyAndReturn
   */
  export type PlayerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * The data used to update Players.
     */
    data: XOR<PlayerUpdateManyMutationInput, PlayerUncheckedUpdateManyInput>
    /**
     * Filter which Players to update
     */
    where?: PlayerWhereInput
    /**
     * Limit how many Players to update.
     */
    limit?: number
  }

  /**
   * Player upsert
   */
  export type PlayerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * The filter to search for the Player to update in case it exists.
     */
    where: PlayerWhereUniqueInput
    /**
     * In case the Player found by the `where` argument doesn't exist, create a new Player with this data.
     */
    create: XOR<PlayerCreateInput, PlayerUncheckedCreateInput>
    /**
     * In case the Player was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlayerUpdateInput, PlayerUncheckedUpdateInput>
  }

  /**
   * Player delete
   */
  export type PlayerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * Filter which Player to delete.
     */
    where: PlayerWhereUniqueInput
  }

  /**
   * Player deleteMany
   */
  export type PlayerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Players to delete
     */
    where?: PlayerWhereInput
    /**
     * Limit how many Players to delete.
     */
    limit?: number
  }

  /**
   * Player.decks
   */
  export type Player$decksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deck
     */
    select?: DeckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deck
     */
    omit?: DeckOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeckInclude<ExtArgs> | null
    where?: DeckWhereInput
    orderBy?: DeckOrderByWithRelationInput | DeckOrderByWithRelationInput[]
    cursor?: DeckWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DeckScalarFieldEnum | DeckScalarFieldEnum[]
  }

  /**
   * Player.games
   */
  export type Player$gamesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GamePlayer
     */
    select?: GamePlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GamePlayer
     */
    omit?: GamePlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GamePlayerInclude<ExtArgs> | null
    where?: GamePlayerWhereInput
    orderBy?: GamePlayerOrderByWithRelationInput | GamePlayerOrderByWithRelationInput[]
    cursor?: GamePlayerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GamePlayerScalarFieldEnum | GamePlayerScalarFieldEnum[]
  }

  /**
   * Player.pods
   */
  export type Player$podsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerPod
     */
    select?: PlayerPodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerPod
     */
    omit?: PlayerPodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerPodInclude<ExtArgs> | null
    where?: PlayerPodWhereInput
    orderBy?: PlayerPodOrderByWithRelationInput | PlayerPodOrderByWithRelationInput[]
    cursor?: PlayerPodWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlayerPodScalarFieldEnum | PlayerPodScalarFieldEnum[]
  }

  /**
   * Player without action
   */
  export type PlayerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
  }


  /**
   * Model Deck
   */

  export type AggregateDeck = {
    _count: DeckCountAggregateOutputType | null
    _min: DeckMinAggregateOutputType | null
    _max: DeckMaxAggregateOutputType | null
  }

  export type DeckMinAggregateOutputType = {
    id: string | null
    name: string | null
    commanderName: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
    playerId: string | null
  }

  export type DeckMaxAggregateOutputType = {
    id: string | null
    name: string | null
    commanderName: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
    playerId: string | null
  }

  export type DeckCountAggregateOutputType = {
    id: number
    name: number
    commanderName: number
    description: number
    createdAt: number
    updatedAt: number
    playerId: number
    _all: number
  }


  export type DeckMinAggregateInputType = {
    id?: true
    name?: true
    commanderName?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    playerId?: true
  }

  export type DeckMaxAggregateInputType = {
    id?: true
    name?: true
    commanderName?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    playerId?: true
  }

  export type DeckCountAggregateInputType = {
    id?: true
    name?: true
    commanderName?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    playerId?: true
    _all?: true
  }

  export type DeckAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Deck to aggregate.
     */
    where?: DeckWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Decks to fetch.
     */
    orderBy?: DeckOrderByWithRelationInput | DeckOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DeckWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Decks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Decks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Decks
    **/
    _count?: true | DeckCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DeckMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DeckMaxAggregateInputType
  }

  export type GetDeckAggregateType<T extends DeckAggregateArgs> = {
        [P in keyof T & keyof AggregateDeck]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDeck[P]>
      : GetScalarType<T[P], AggregateDeck[P]>
  }




  export type DeckGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeckWhereInput
    orderBy?: DeckOrderByWithAggregationInput | DeckOrderByWithAggregationInput[]
    by: DeckScalarFieldEnum[] | DeckScalarFieldEnum
    having?: DeckScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DeckCountAggregateInputType | true
    _min?: DeckMinAggregateInputType
    _max?: DeckMaxAggregateInputType
  }

  export type DeckGroupByOutputType = {
    id: string
    name: string
    commanderName: string
    description: string | null
    createdAt: Date
    updatedAt: Date
    playerId: string
    _count: DeckCountAggregateOutputType | null
    _min: DeckMinAggregateOutputType | null
    _max: DeckMaxAggregateOutputType | null
  }

  type GetDeckGroupByPayload<T extends DeckGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DeckGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DeckGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DeckGroupByOutputType[P]>
            : GetScalarType<T[P], DeckGroupByOutputType[P]>
        }
      >
    >


  export type DeckSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    commanderName?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    playerId?: boolean
    player?: boolean | PlayerDefaultArgs<ExtArgs>
    games?: boolean | Deck$gamesArgs<ExtArgs>
    _count?: boolean | DeckCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["deck"]>

  export type DeckSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    commanderName?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    playerId?: boolean
    player?: boolean | PlayerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["deck"]>

  export type DeckSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    commanderName?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    playerId?: boolean
    player?: boolean | PlayerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["deck"]>

  export type DeckSelectScalar = {
    id?: boolean
    name?: boolean
    commanderName?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    playerId?: boolean
  }

  export type DeckOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "commanderName" | "description" | "createdAt" | "updatedAt" | "playerId", ExtArgs["result"]["deck"]>
  export type DeckInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    player?: boolean | PlayerDefaultArgs<ExtArgs>
    games?: boolean | Deck$gamesArgs<ExtArgs>
    _count?: boolean | DeckCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DeckIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    player?: boolean | PlayerDefaultArgs<ExtArgs>
  }
  export type DeckIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    player?: boolean | PlayerDefaultArgs<ExtArgs>
  }

  export type $DeckPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Deck"
    objects: {
      player: Prisma.$PlayerPayload<ExtArgs>
      games: Prisma.$GameDeckPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      commanderName: string
      description: string | null
      createdAt: Date
      updatedAt: Date
      playerId: string
    }, ExtArgs["result"]["deck"]>
    composites: {}
  }

  type DeckGetPayload<S extends boolean | null | undefined | DeckDefaultArgs> = $Result.GetResult<Prisma.$DeckPayload, S>

  type DeckCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DeckFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DeckCountAggregateInputType | true
    }

  export interface DeckDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Deck'], meta: { name: 'Deck' } }
    /**
     * Find zero or one Deck that matches the filter.
     * @param {DeckFindUniqueArgs} args - Arguments to find a Deck
     * @example
     * // Get one Deck
     * const deck = await prisma.deck.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DeckFindUniqueArgs>(args: SelectSubset<T, DeckFindUniqueArgs<ExtArgs>>): Prisma__DeckClient<$Result.GetResult<Prisma.$DeckPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Deck that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DeckFindUniqueOrThrowArgs} args - Arguments to find a Deck
     * @example
     * // Get one Deck
     * const deck = await prisma.deck.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DeckFindUniqueOrThrowArgs>(args: SelectSubset<T, DeckFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DeckClient<$Result.GetResult<Prisma.$DeckPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Deck that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeckFindFirstArgs} args - Arguments to find a Deck
     * @example
     * // Get one Deck
     * const deck = await prisma.deck.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DeckFindFirstArgs>(args?: SelectSubset<T, DeckFindFirstArgs<ExtArgs>>): Prisma__DeckClient<$Result.GetResult<Prisma.$DeckPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Deck that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeckFindFirstOrThrowArgs} args - Arguments to find a Deck
     * @example
     * // Get one Deck
     * const deck = await prisma.deck.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DeckFindFirstOrThrowArgs>(args?: SelectSubset<T, DeckFindFirstOrThrowArgs<ExtArgs>>): Prisma__DeckClient<$Result.GetResult<Prisma.$DeckPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Decks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeckFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Decks
     * const decks = await prisma.deck.findMany()
     * 
     * // Get first 10 Decks
     * const decks = await prisma.deck.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const deckWithIdOnly = await prisma.deck.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DeckFindManyArgs>(args?: SelectSubset<T, DeckFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeckPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Deck.
     * @param {DeckCreateArgs} args - Arguments to create a Deck.
     * @example
     * // Create one Deck
     * const Deck = await prisma.deck.create({
     *   data: {
     *     // ... data to create a Deck
     *   }
     * })
     * 
     */
    create<T extends DeckCreateArgs>(args: SelectSubset<T, DeckCreateArgs<ExtArgs>>): Prisma__DeckClient<$Result.GetResult<Prisma.$DeckPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Decks.
     * @param {DeckCreateManyArgs} args - Arguments to create many Decks.
     * @example
     * // Create many Decks
     * const deck = await prisma.deck.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DeckCreateManyArgs>(args?: SelectSubset<T, DeckCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Decks and returns the data saved in the database.
     * @param {DeckCreateManyAndReturnArgs} args - Arguments to create many Decks.
     * @example
     * // Create many Decks
     * const deck = await prisma.deck.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Decks and only return the `id`
     * const deckWithIdOnly = await prisma.deck.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DeckCreateManyAndReturnArgs>(args?: SelectSubset<T, DeckCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeckPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Deck.
     * @param {DeckDeleteArgs} args - Arguments to delete one Deck.
     * @example
     * // Delete one Deck
     * const Deck = await prisma.deck.delete({
     *   where: {
     *     // ... filter to delete one Deck
     *   }
     * })
     * 
     */
    delete<T extends DeckDeleteArgs>(args: SelectSubset<T, DeckDeleteArgs<ExtArgs>>): Prisma__DeckClient<$Result.GetResult<Prisma.$DeckPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Deck.
     * @param {DeckUpdateArgs} args - Arguments to update one Deck.
     * @example
     * // Update one Deck
     * const deck = await prisma.deck.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DeckUpdateArgs>(args: SelectSubset<T, DeckUpdateArgs<ExtArgs>>): Prisma__DeckClient<$Result.GetResult<Prisma.$DeckPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Decks.
     * @param {DeckDeleteManyArgs} args - Arguments to filter Decks to delete.
     * @example
     * // Delete a few Decks
     * const { count } = await prisma.deck.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DeckDeleteManyArgs>(args?: SelectSubset<T, DeckDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Decks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeckUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Decks
     * const deck = await prisma.deck.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DeckUpdateManyArgs>(args: SelectSubset<T, DeckUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Decks and returns the data updated in the database.
     * @param {DeckUpdateManyAndReturnArgs} args - Arguments to update many Decks.
     * @example
     * // Update many Decks
     * const deck = await prisma.deck.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Decks and only return the `id`
     * const deckWithIdOnly = await prisma.deck.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DeckUpdateManyAndReturnArgs>(args: SelectSubset<T, DeckUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeckPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Deck.
     * @param {DeckUpsertArgs} args - Arguments to update or create a Deck.
     * @example
     * // Update or create a Deck
     * const deck = await prisma.deck.upsert({
     *   create: {
     *     // ... data to create a Deck
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Deck we want to update
     *   }
     * })
     */
    upsert<T extends DeckUpsertArgs>(args: SelectSubset<T, DeckUpsertArgs<ExtArgs>>): Prisma__DeckClient<$Result.GetResult<Prisma.$DeckPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Decks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeckCountArgs} args - Arguments to filter Decks to count.
     * @example
     * // Count the number of Decks
     * const count = await prisma.deck.count({
     *   where: {
     *     // ... the filter for the Decks we want to count
     *   }
     * })
    **/
    count<T extends DeckCountArgs>(
      args?: Subset<T, DeckCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DeckCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Deck.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeckAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DeckAggregateArgs>(args: Subset<T, DeckAggregateArgs>): Prisma.PrismaPromise<GetDeckAggregateType<T>>

    /**
     * Group by Deck.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeckGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DeckGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DeckGroupByArgs['orderBy'] }
        : { orderBy?: DeckGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DeckGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDeckGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Deck model
   */
  readonly fields: DeckFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Deck.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DeckClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    player<T extends PlayerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PlayerDefaultArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    games<T extends Deck$gamesArgs<ExtArgs> = {}>(args?: Subset<T, Deck$gamesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameDeckPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Deck model
   */
  interface DeckFieldRefs {
    readonly id: FieldRef<"Deck", 'String'>
    readonly name: FieldRef<"Deck", 'String'>
    readonly commanderName: FieldRef<"Deck", 'String'>
    readonly description: FieldRef<"Deck", 'String'>
    readonly createdAt: FieldRef<"Deck", 'DateTime'>
    readonly updatedAt: FieldRef<"Deck", 'DateTime'>
    readonly playerId: FieldRef<"Deck", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Deck findUnique
   */
  export type DeckFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deck
     */
    select?: DeckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deck
     */
    omit?: DeckOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeckInclude<ExtArgs> | null
    /**
     * Filter, which Deck to fetch.
     */
    where: DeckWhereUniqueInput
  }

  /**
   * Deck findUniqueOrThrow
   */
  export type DeckFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deck
     */
    select?: DeckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deck
     */
    omit?: DeckOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeckInclude<ExtArgs> | null
    /**
     * Filter, which Deck to fetch.
     */
    where: DeckWhereUniqueInput
  }

  /**
   * Deck findFirst
   */
  export type DeckFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deck
     */
    select?: DeckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deck
     */
    omit?: DeckOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeckInclude<ExtArgs> | null
    /**
     * Filter, which Deck to fetch.
     */
    where?: DeckWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Decks to fetch.
     */
    orderBy?: DeckOrderByWithRelationInput | DeckOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Decks.
     */
    cursor?: DeckWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Decks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Decks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Decks.
     */
    distinct?: DeckScalarFieldEnum | DeckScalarFieldEnum[]
  }

  /**
   * Deck findFirstOrThrow
   */
  export type DeckFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deck
     */
    select?: DeckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deck
     */
    omit?: DeckOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeckInclude<ExtArgs> | null
    /**
     * Filter, which Deck to fetch.
     */
    where?: DeckWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Decks to fetch.
     */
    orderBy?: DeckOrderByWithRelationInput | DeckOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Decks.
     */
    cursor?: DeckWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Decks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Decks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Decks.
     */
    distinct?: DeckScalarFieldEnum | DeckScalarFieldEnum[]
  }

  /**
   * Deck findMany
   */
  export type DeckFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deck
     */
    select?: DeckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deck
     */
    omit?: DeckOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeckInclude<ExtArgs> | null
    /**
     * Filter, which Decks to fetch.
     */
    where?: DeckWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Decks to fetch.
     */
    orderBy?: DeckOrderByWithRelationInput | DeckOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Decks.
     */
    cursor?: DeckWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Decks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Decks.
     */
    skip?: number
    distinct?: DeckScalarFieldEnum | DeckScalarFieldEnum[]
  }

  /**
   * Deck create
   */
  export type DeckCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deck
     */
    select?: DeckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deck
     */
    omit?: DeckOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeckInclude<ExtArgs> | null
    /**
     * The data needed to create a Deck.
     */
    data: XOR<DeckCreateInput, DeckUncheckedCreateInput>
  }

  /**
   * Deck createMany
   */
  export type DeckCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Decks.
     */
    data: DeckCreateManyInput | DeckCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Deck createManyAndReturn
   */
  export type DeckCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deck
     */
    select?: DeckSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Deck
     */
    omit?: DeckOmit<ExtArgs> | null
    /**
     * The data used to create many Decks.
     */
    data: DeckCreateManyInput | DeckCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeckIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Deck update
   */
  export type DeckUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deck
     */
    select?: DeckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deck
     */
    omit?: DeckOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeckInclude<ExtArgs> | null
    /**
     * The data needed to update a Deck.
     */
    data: XOR<DeckUpdateInput, DeckUncheckedUpdateInput>
    /**
     * Choose, which Deck to update.
     */
    where: DeckWhereUniqueInput
  }

  /**
   * Deck updateMany
   */
  export type DeckUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Decks.
     */
    data: XOR<DeckUpdateManyMutationInput, DeckUncheckedUpdateManyInput>
    /**
     * Filter which Decks to update
     */
    where?: DeckWhereInput
    /**
     * Limit how many Decks to update.
     */
    limit?: number
  }

  /**
   * Deck updateManyAndReturn
   */
  export type DeckUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deck
     */
    select?: DeckSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Deck
     */
    omit?: DeckOmit<ExtArgs> | null
    /**
     * The data used to update Decks.
     */
    data: XOR<DeckUpdateManyMutationInput, DeckUncheckedUpdateManyInput>
    /**
     * Filter which Decks to update
     */
    where?: DeckWhereInput
    /**
     * Limit how many Decks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeckIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Deck upsert
   */
  export type DeckUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deck
     */
    select?: DeckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deck
     */
    omit?: DeckOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeckInclude<ExtArgs> | null
    /**
     * The filter to search for the Deck to update in case it exists.
     */
    where: DeckWhereUniqueInput
    /**
     * In case the Deck found by the `where` argument doesn't exist, create a new Deck with this data.
     */
    create: XOR<DeckCreateInput, DeckUncheckedCreateInput>
    /**
     * In case the Deck was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DeckUpdateInput, DeckUncheckedUpdateInput>
  }

  /**
   * Deck delete
   */
  export type DeckDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deck
     */
    select?: DeckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deck
     */
    omit?: DeckOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeckInclude<ExtArgs> | null
    /**
     * Filter which Deck to delete.
     */
    where: DeckWhereUniqueInput
  }

  /**
   * Deck deleteMany
   */
  export type DeckDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Decks to delete
     */
    where?: DeckWhereInput
    /**
     * Limit how many Decks to delete.
     */
    limit?: number
  }

  /**
   * Deck.games
   */
  export type Deck$gamesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameDeck
     */
    select?: GameDeckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameDeck
     */
    omit?: GameDeckOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameDeckInclude<ExtArgs> | null
    where?: GameDeckWhereInput
    orderBy?: GameDeckOrderByWithRelationInput | GameDeckOrderByWithRelationInput[]
    cursor?: GameDeckWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GameDeckScalarFieldEnum | GameDeckScalarFieldEnum[]
  }

  /**
   * Deck without action
   */
  export type DeckDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deck
     */
    select?: DeckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deck
     */
    omit?: DeckOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeckInclude<ExtArgs> | null
  }


  /**
   * Model Pod
   */

  export type AggregatePod = {
    _count: PodCountAggregateOutputType | null
    _min: PodMinAggregateOutputType | null
    _max: PodMaxAggregateOutputType | null
  }

  export type PodMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PodMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PodCountAggregateOutputType = {
    id: number
    name: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PodMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PodMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PodCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PodAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pod to aggregate.
     */
    where?: PodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pods to fetch.
     */
    orderBy?: PodOrderByWithRelationInput | PodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pods
    **/
    _count?: true | PodCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PodMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PodMaxAggregateInputType
  }

  export type GetPodAggregateType<T extends PodAggregateArgs> = {
        [P in keyof T & keyof AggregatePod]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePod[P]>
      : GetScalarType<T[P], AggregatePod[P]>
  }




  export type PodGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PodWhereInput
    orderBy?: PodOrderByWithAggregationInput | PodOrderByWithAggregationInput[]
    by: PodScalarFieldEnum[] | PodScalarFieldEnum
    having?: PodScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PodCountAggregateInputType | true
    _min?: PodMinAggregateInputType
    _max?: PodMaxAggregateInputType
  }

  export type PodGroupByOutputType = {
    id: string
    name: string
    description: string | null
    createdAt: Date
    updatedAt: Date
    _count: PodCountAggregateOutputType | null
    _min: PodMinAggregateOutputType | null
    _max: PodMaxAggregateOutputType | null
  }

  type GetPodGroupByPayload<T extends PodGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PodGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PodGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PodGroupByOutputType[P]>
            : GetScalarType<T[P], PodGroupByOutputType[P]>
        }
      >
    >


  export type PodSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    games?: boolean | Pod$gamesArgs<ExtArgs>
    players?: boolean | Pod$playersArgs<ExtArgs>
    _count?: boolean | PodCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pod"]>

  export type PodSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["pod"]>

  export type PodSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["pod"]>

  export type PodSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PodOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["pod"]>
  export type PodInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    games?: boolean | Pod$gamesArgs<ExtArgs>
    players?: boolean | Pod$playersArgs<ExtArgs>
    _count?: boolean | PodCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PodIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PodIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PodPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pod"
    objects: {
      games: Prisma.$GamePayload<ExtArgs>[]
      players: Prisma.$PlayerPodPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["pod"]>
    composites: {}
  }

  type PodGetPayload<S extends boolean | null | undefined | PodDefaultArgs> = $Result.GetResult<Prisma.$PodPayload, S>

  type PodCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PodFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PodCountAggregateInputType | true
    }

  export interface PodDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pod'], meta: { name: 'Pod' } }
    /**
     * Find zero or one Pod that matches the filter.
     * @param {PodFindUniqueArgs} args - Arguments to find a Pod
     * @example
     * // Get one Pod
     * const pod = await prisma.pod.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PodFindUniqueArgs>(args: SelectSubset<T, PodFindUniqueArgs<ExtArgs>>): Prisma__PodClient<$Result.GetResult<Prisma.$PodPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pod that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PodFindUniqueOrThrowArgs} args - Arguments to find a Pod
     * @example
     * // Get one Pod
     * const pod = await prisma.pod.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PodFindUniqueOrThrowArgs>(args: SelectSubset<T, PodFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PodClient<$Result.GetResult<Prisma.$PodPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pod that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PodFindFirstArgs} args - Arguments to find a Pod
     * @example
     * // Get one Pod
     * const pod = await prisma.pod.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PodFindFirstArgs>(args?: SelectSubset<T, PodFindFirstArgs<ExtArgs>>): Prisma__PodClient<$Result.GetResult<Prisma.$PodPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pod that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PodFindFirstOrThrowArgs} args - Arguments to find a Pod
     * @example
     * // Get one Pod
     * const pod = await prisma.pod.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PodFindFirstOrThrowArgs>(args?: SelectSubset<T, PodFindFirstOrThrowArgs<ExtArgs>>): Prisma__PodClient<$Result.GetResult<Prisma.$PodPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pods that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PodFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pods
     * const pods = await prisma.pod.findMany()
     * 
     * // Get first 10 Pods
     * const pods = await prisma.pod.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const podWithIdOnly = await prisma.pod.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PodFindManyArgs>(args?: SelectSubset<T, PodFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PodPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pod.
     * @param {PodCreateArgs} args - Arguments to create a Pod.
     * @example
     * // Create one Pod
     * const Pod = await prisma.pod.create({
     *   data: {
     *     // ... data to create a Pod
     *   }
     * })
     * 
     */
    create<T extends PodCreateArgs>(args: SelectSubset<T, PodCreateArgs<ExtArgs>>): Prisma__PodClient<$Result.GetResult<Prisma.$PodPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pods.
     * @param {PodCreateManyArgs} args - Arguments to create many Pods.
     * @example
     * // Create many Pods
     * const pod = await prisma.pod.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PodCreateManyArgs>(args?: SelectSubset<T, PodCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pods and returns the data saved in the database.
     * @param {PodCreateManyAndReturnArgs} args - Arguments to create many Pods.
     * @example
     * // Create many Pods
     * const pod = await prisma.pod.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pods and only return the `id`
     * const podWithIdOnly = await prisma.pod.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PodCreateManyAndReturnArgs>(args?: SelectSubset<T, PodCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PodPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Pod.
     * @param {PodDeleteArgs} args - Arguments to delete one Pod.
     * @example
     * // Delete one Pod
     * const Pod = await prisma.pod.delete({
     *   where: {
     *     // ... filter to delete one Pod
     *   }
     * })
     * 
     */
    delete<T extends PodDeleteArgs>(args: SelectSubset<T, PodDeleteArgs<ExtArgs>>): Prisma__PodClient<$Result.GetResult<Prisma.$PodPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pod.
     * @param {PodUpdateArgs} args - Arguments to update one Pod.
     * @example
     * // Update one Pod
     * const pod = await prisma.pod.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PodUpdateArgs>(args: SelectSubset<T, PodUpdateArgs<ExtArgs>>): Prisma__PodClient<$Result.GetResult<Prisma.$PodPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pods.
     * @param {PodDeleteManyArgs} args - Arguments to filter Pods to delete.
     * @example
     * // Delete a few Pods
     * const { count } = await prisma.pod.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PodDeleteManyArgs>(args?: SelectSubset<T, PodDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PodUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pods
     * const pod = await prisma.pod.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PodUpdateManyArgs>(args: SelectSubset<T, PodUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pods and returns the data updated in the database.
     * @param {PodUpdateManyAndReturnArgs} args - Arguments to update many Pods.
     * @example
     * // Update many Pods
     * const pod = await prisma.pod.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pods and only return the `id`
     * const podWithIdOnly = await prisma.pod.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PodUpdateManyAndReturnArgs>(args: SelectSubset<T, PodUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PodPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Pod.
     * @param {PodUpsertArgs} args - Arguments to update or create a Pod.
     * @example
     * // Update or create a Pod
     * const pod = await prisma.pod.upsert({
     *   create: {
     *     // ... data to create a Pod
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pod we want to update
     *   }
     * })
     */
    upsert<T extends PodUpsertArgs>(args: SelectSubset<T, PodUpsertArgs<ExtArgs>>): Prisma__PodClient<$Result.GetResult<Prisma.$PodPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PodCountArgs} args - Arguments to filter Pods to count.
     * @example
     * // Count the number of Pods
     * const count = await prisma.pod.count({
     *   where: {
     *     // ... the filter for the Pods we want to count
     *   }
     * })
    **/
    count<T extends PodCountArgs>(
      args?: Subset<T, PodCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PodCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pod.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PodAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PodAggregateArgs>(args: Subset<T, PodAggregateArgs>): Prisma.PrismaPromise<GetPodAggregateType<T>>

    /**
     * Group by Pod.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PodGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PodGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PodGroupByArgs['orderBy'] }
        : { orderBy?: PodGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PodGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPodGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pod model
   */
  readonly fields: PodFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pod.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PodClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    games<T extends Pod$gamesArgs<ExtArgs> = {}>(args?: Subset<T, Pod$gamesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    players<T extends Pod$playersArgs<ExtArgs> = {}>(args?: Subset<T, Pod$playersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerPodPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Pod model
   */
  interface PodFieldRefs {
    readonly id: FieldRef<"Pod", 'String'>
    readonly name: FieldRef<"Pod", 'String'>
    readonly description: FieldRef<"Pod", 'String'>
    readonly createdAt: FieldRef<"Pod", 'DateTime'>
    readonly updatedAt: FieldRef<"Pod", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Pod findUnique
   */
  export type PodFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pod
     */
    select?: PodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pod
     */
    omit?: PodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PodInclude<ExtArgs> | null
    /**
     * Filter, which Pod to fetch.
     */
    where: PodWhereUniqueInput
  }

  /**
   * Pod findUniqueOrThrow
   */
  export type PodFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pod
     */
    select?: PodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pod
     */
    omit?: PodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PodInclude<ExtArgs> | null
    /**
     * Filter, which Pod to fetch.
     */
    where: PodWhereUniqueInput
  }

  /**
   * Pod findFirst
   */
  export type PodFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pod
     */
    select?: PodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pod
     */
    omit?: PodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PodInclude<ExtArgs> | null
    /**
     * Filter, which Pod to fetch.
     */
    where?: PodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pods to fetch.
     */
    orderBy?: PodOrderByWithRelationInput | PodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pods.
     */
    cursor?: PodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pods.
     */
    distinct?: PodScalarFieldEnum | PodScalarFieldEnum[]
  }

  /**
   * Pod findFirstOrThrow
   */
  export type PodFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pod
     */
    select?: PodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pod
     */
    omit?: PodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PodInclude<ExtArgs> | null
    /**
     * Filter, which Pod to fetch.
     */
    where?: PodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pods to fetch.
     */
    orderBy?: PodOrderByWithRelationInput | PodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pods.
     */
    cursor?: PodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pods.
     */
    distinct?: PodScalarFieldEnum | PodScalarFieldEnum[]
  }

  /**
   * Pod findMany
   */
  export type PodFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pod
     */
    select?: PodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pod
     */
    omit?: PodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PodInclude<ExtArgs> | null
    /**
     * Filter, which Pods to fetch.
     */
    where?: PodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pods to fetch.
     */
    orderBy?: PodOrderByWithRelationInput | PodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pods.
     */
    cursor?: PodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pods.
     */
    skip?: number
    distinct?: PodScalarFieldEnum | PodScalarFieldEnum[]
  }

  /**
   * Pod create
   */
  export type PodCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pod
     */
    select?: PodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pod
     */
    omit?: PodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PodInclude<ExtArgs> | null
    /**
     * The data needed to create a Pod.
     */
    data: XOR<PodCreateInput, PodUncheckedCreateInput>
  }

  /**
   * Pod createMany
   */
  export type PodCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pods.
     */
    data: PodCreateManyInput | PodCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pod createManyAndReturn
   */
  export type PodCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pod
     */
    select?: PodSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pod
     */
    omit?: PodOmit<ExtArgs> | null
    /**
     * The data used to create many Pods.
     */
    data: PodCreateManyInput | PodCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pod update
   */
  export type PodUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pod
     */
    select?: PodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pod
     */
    omit?: PodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PodInclude<ExtArgs> | null
    /**
     * The data needed to update a Pod.
     */
    data: XOR<PodUpdateInput, PodUncheckedUpdateInput>
    /**
     * Choose, which Pod to update.
     */
    where: PodWhereUniqueInput
  }

  /**
   * Pod updateMany
   */
  export type PodUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pods.
     */
    data: XOR<PodUpdateManyMutationInput, PodUncheckedUpdateManyInput>
    /**
     * Filter which Pods to update
     */
    where?: PodWhereInput
    /**
     * Limit how many Pods to update.
     */
    limit?: number
  }

  /**
   * Pod updateManyAndReturn
   */
  export type PodUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pod
     */
    select?: PodSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pod
     */
    omit?: PodOmit<ExtArgs> | null
    /**
     * The data used to update Pods.
     */
    data: XOR<PodUpdateManyMutationInput, PodUncheckedUpdateManyInput>
    /**
     * Filter which Pods to update
     */
    where?: PodWhereInput
    /**
     * Limit how many Pods to update.
     */
    limit?: number
  }

  /**
   * Pod upsert
   */
  export type PodUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pod
     */
    select?: PodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pod
     */
    omit?: PodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PodInclude<ExtArgs> | null
    /**
     * The filter to search for the Pod to update in case it exists.
     */
    where: PodWhereUniqueInput
    /**
     * In case the Pod found by the `where` argument doesn't exist, create a new Pod with this data.
     */
    create: XOR<PodCreateInput, PodUncheckedCreateInput>
    /**
     * In case the Pod was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PodUpdateInput, PodUncheckedUpdateInput>
  }

  /**
   * Pod delete
   */
  export type PodDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pod
     */
    select?: PodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pod
     */
    omit?: PodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PodInclude<ExtArgs> | null
    /**
     * Filter which Pod to delete.
     */
    where: PodWhereUniqueInput
  }

  /**
   * Pod deleteMany
   */
  export type PodDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pods to delete
     */
    where?: PodWhereInput
    /**
     * Limit how many Pods to delete.
     */
    limit?: number
  }

  /**
   * Pod.games
   */
  export type Pod$gamesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    where?: GameWhereInput
    orderBy?: GameOrderByWithRelationInput | GameOrderByWithRelationInput[]
    cursor?: GameWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GameScalarFieldEnum | GameScalarFieldEnum[]
  }

  /**
   * Pod.players
   */
  export type Pod$playersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerPod
     */
    select?: PlayerPodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerPod
     */
    omit?: PlayerPodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerPodInclude<ExtArgs> | null
    where?: PlayerPodWhereInput
    orderBy?: PlayerPodOrderByWithRelationInput | PlayerPodOrderByWithRelationInput[]
    cursor?: PlayerPodWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlayerPodScalarFieldEnum | PlayerPodScalarFieldEnum[]
  }

  /**
   * Pod without action
   */
  export type PodDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pod
     */
    select?: PodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pod
     */
    omit?: PodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PodInclude<ExtArgs> | null
  }


  /**
   * Model PlayerPod
   */

  export type AggregatePlayerPod = {
    _count: PlayerPodCountAggregateOutputType | null
    _min: PlayerPodMinAggregateOutputType | null
    _max: PlayerPodMaxAggregateOutputType | null
  }

  export type PlayerPodMinAggregateOutputType = {
    id: string | null
    playerId: string | null
    podId: string | null
    createdAt: Date | null
  }

  export type PlayerPodMaxAggregateOutputType = {
    id: string | null
    playerId: string | null
    podId: string | null
    createdAt: Date | null
  }

  export type PlayerPodCountAggregateOutputType = {
    id: number
    playerId: number
    podId: number
    createdAt: number
    _all: number
  }


  export type PlayerPodMinAggregateInputType = {
    id?: true
    playerId?: true
    podId?: true
    createdAt?: true
  }

  export type PlayerPodMaxAggregateInputType = {
    id?: true
    playerId?: true
    podId?: true
    createdAt?: true
  }

  export type PlayerPodCountAggregateInputType = {
    id?: true
    playerId?: true
    podId?: true
    createdAt?: true
    _all?: true
  }

  export type PlayerPodAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlayerPod to aggregate.
     */
    where?: PlayerPodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlayerPods to fetch.
     */
    orderBy?: PlayerPodOrderByWithRelationInput | PlayerPodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlayerPodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlayerPods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlayerPods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PlayerPods
    **/
    _count?: true | PlayerPodCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlayerPodMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlayerPodMaxAggregateInputType
  }

  export type GetPlayerPodAggregateType<T extends PlayerPodAggregateArgs> = {
        [P in keyof T & keyof AggregatePlayerPod]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlayerPod[P]>
      : GetScalarType<T[P], AggregatePlayerPod[P]>
  }




  export type PlayerPodGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlayerPodWhereInput
    orderBy?: PlayerPodOrderByWithAggregationInput | PlayerPodOrderByWithAggregationInput[]
    by: PlayerPodScalarFieldEnum[] | PlayerPodScalarFieldEnum
    having?: PlayerPodScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlayerPodCountAggregateInputType | true
    _min?: PlayerPodMinAggregateInputType
    _max?: PlayerPodMaxAggregateInputType
  }

  export type PlayerPodGroupByOutputType = {
    id: string
    playerId: string
    podId: string
    createdAt: Date
    _count: PlayerPodCountAggregateOutputType | null
    _min: PlayerPodMinAggregateOutputType | null
    _max: PlayerPodMaxAggregateOutputType | null
  }

  type GetPlayerPodGroupByPayload<T extends PlayerPodGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlayerPodGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlayerPodGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlayerPodGroupByOutputType[P]>
            : GetScalarType<T[P], PlayerPodGroupByOutputType[P]>
        }
      >
    >


  export type PlayerPodSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    playerId?: boolean
    podId?: boolean
    createdAt?: boolean
    player?: boolean | PlayerDefaultArgs<ExtArgs>
    pod?: boolean | PodDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["playerPod"]>

  export type PlayerPodSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    playerId?: boolean
    podId?: boolean
    createdAt?: boolean
    player?: boolean | PlayerDefaultArgs<ExtArgs>
    pod?: boolean | PodDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["playerPod"]>

  export type PlayerPodSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    playerId?: boolean
    podId?: boolean
    createdAt?: boolean
    player?: boolean | PlayerDefaultArgs<ExtArgs>
    pod?: boolean | PodDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["playerPod"]>

  export type PlayerPodSelectScalar = {
    id?: boolean
    playerId?: boolean
    podId?: boolean
    createdAt?: boolean
  }

  export type PlayerPodOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "playerId" | "podId" | "createdAt", ExtArgs["result"]["playerPod"]>
  export type PlayerPodInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    player?: boolean | PlayerDefaultArgs<ExtArgs>
    pod?: boolean | PodDefaultArgs<ExtArgs>
  }
  export type PlayerPodIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    player?: boolean | PlayerDefaultArgs<ExtArgs>
    pod?: boolean | PodDefaultArgs<ExtArgs>
  }
  export type PlayerPodIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    player?: boolean | PlayerDefaultArgs<ExtArgs>
    pod?: boolean | PodDefaultArgs<ExtArgs>
  }

  export type $PlayerPodPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PlayerPod"
    objects: {
      player: Prisma.$PlayerPayload<ExtArgs>
      pod: Prisma.$PodPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      playerId: string
      podId: string
      createdAt: Date
    }, ExtArgs["result"]["playerPod"]>
    composites: {}
  }

  type PlayerPodGetPayload<S extends boolean | null | undefined | PlayerPodDefaultArgs> = $Result.GetResult<Prisma.$PlayerPodPayload, S>

  type PlayerPodCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlayerPodFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlayerPodCountAggregateInputType | true
    }

  export interface PlayerPodDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PlayerPod'], meta: { name: 'PlayerPod' } }
    /**
     * Find zero or one PlayerPod that matches the filter.
     * @param {PlayerPodFindUniqueArgs} args - Arguments to find a PlayerPod
     * @example
     * // Get one PlayerPod
     * const playerPod = await prisma.playerPod.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlayerPodFindUniqueArgs>(args: SelectSubset<T, PlayerPodFindUniqueArgs<ExtArgs>>): Prisma__PlayerPodClient<$Result.GetResult<Prisma.$PlayerPodPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PlayerPod that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlayerPodFindUniqueOrThrowArgs} args - Arguments to find a PlayerPod
     * @example
     * // Get one PlayerPod
     * const playerPod = await prisma.playerPod.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlayerPodFindUniqueOrThrowArgs>(args: SelectSubset<T, PlayerPodFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlayerPodClient<$Result.GetResult<Prisma.$PlayerPodPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PlayerPod that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerPodFindFirstArgs} args - Arguments to find a PlayerPod
     * @example
     * // Get one PlayerPod
     * const playerPod = await prisma.playerPod.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlayerPodFindFirstArgs>(args?: SelectSubset<T, PlayerPodFindFirstArgs<ExtArgs>>): Prisma__PlayerPodClient<$Result.GetResult<Prisma.$PlayerPodPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PlayerPod that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerPodFindFirstOrThrowArgs} args - Arguments to find a PlayerPod
     * @example
     * // Get one PlayerPod
     * const playerPod = await prisma.playerPod.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlayerPodFindFirstOrThrowArgs>(args?: SelectSubset<T, PlayerPodFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlayerPodClient<$Result.GetResult<Prisma.$PlayerPodPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PlayerPods that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerPodFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PlayerPods
     * const playerPods = await prisma.playerPod.findMany()
     * 
     * // Get first 10 PlayerPods
     * const playerPods = await prisma.playerPod.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const playerPodWithIdOnly = await prisma.playerPod.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlayerPodFindManyArgs>(args?: SelectSubset<T, PlayerPodFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerPodPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PlayerPod.
     * @param {PlayerPodCreateArgs} args - Arguments to create a PlayerPod.
     * @example
     * // Create one PlayerPod
     * const PlayerPod = await prisma.playerPod.create({
     *   data: {
     *     // ... data to create a PlayerPod
     *   }
     * })
     * 
     */
    create<T extends PlayerPodCreateArgs>(args: SelectSubset<T, PlayerPodCreateArgs<ExtArgs>>): Prisma__PlayerPodClient<$Result.GetResult<Prisma.$PlayerPodPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PlayerPods.
     * @param {PlayerPodCreateManyArgs} args - Arguments to create many PlayerPods.
     * @example
     * // Create many PlayerPods
     * const playerPod = await prisma.playerPod.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlayerPodCreateManyArgs>(args?: SelectSubset<T, PlayerPodCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PlayerPods and returns the data saved in the database.
     * @param {PlayerPodCreateManyAndReturnArgs} args - Arguments to create many PlayerPods.
     * @example
     * // Create many PlayerPods
     * const playerPod = await prisma.playerPod.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PlayerPods and only return the `id`
     * const playerPodWithIdOnly = await prisma.playerPod.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PlayerPodCreateManyAndReturnArgs>(args?: SelectSubset<T, PlayerPodCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerPodPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PlayerPod.
     * @param {PlayerPodDeleteArgs} args - Arguments to delete one PlayerPod.
     * @example
     * // Delete one PlayerPod
     * const PlayerPod = await prisma.playerPod.delete({
     *   where: {
     *     // ... filter to delete one PlayerPod
     *   }
     * })
     * 
     */
    delete<T extends PlayerPodDeleteArgs>(args: SelectSubset<T, PlayerPodDeleteArgs<ExtArgs>>): Prisma__PlayerPodClient<$Result.GetResult<Prisma.$PlayerPodPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PlayerPod.
     * @param {PlayerPodUpdateArgs} args - Arguments to update one PlayerPod.
     * @example
     * // Update one PlayerPod
     * const playerPod = await prisma.playerPod.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlayerPodUpdateArgs>(args: SelectSubset<T, PlayerPodUpdateArgs<ExtArgs>>): Prisma__PlayerPodClient<$Result.GetResult<Prisma.$PlayerPodPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PlayerPods.
     * @param {PlayerPodDeleteManyArgs} args - Arguments to filter PlayerPods to delete.
     * @example
     * // Delete a few PlayerPods
     * const { count } = await prisma.playerPod.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlayerPodDeleteManyArgs>(args?: SelectSubset<T, PlayerPodDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PlayerPods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerPodUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PlayerPods
     * const playerPod = await prisma.playerPod.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlayerPodUpdateManyArgs>(args: SelectSubset<T, PlayerPodUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PlayerPods and returns the data updated in the database.
     * @param {PlayerPodUpdateManyAndReturnArgs} args - Arguments to update many PlayerPods.
     * @example
     * // Update many PlayerPods
     * const playerPod = await prisma.playerPod.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PlayerPods and only return the `id`
     * const playerPodWithIdOnly = await prisma.playerPod.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PlayerPodUpdateManyAndReturnArgs>(args: SelectSubset<T, PlayerPodUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerPodPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PlayerPod.
     * @param {PlayerPodUpsertArgs} args - Arguments to update or create a PlayerPod.
     * @example
     * // Update or create a PlayerPod
     * const playerPod = await prisma.playerPod.upsert({
     *   create: {
     *     // ... data to create a PlayerPod
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PlayerPod we want to update
     *   }
     * })
     */
    upsert<T extends PlayerPodUpsertArgs>(args: SelectSubset<T, PlayerPodUpsertArgs<ExtArgs>>): Prisma__PlayerPodClient<$Result.GetResult<Prisma.$PlayerPodPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PlayerPods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerPodCountArgs} args - Arguments to filter PlayerPods to count.
     * @example
     * // Count the number of PlayerPods
     * const count = await prisma.playerPod.count({
     *   where: {
     *     // ... the filter for the PlayerPods we want to count
     *   }
     * })
    **/
    count<T extends PlayerPodCountArgs>(
      args?: Subset<T, PlayerPodCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlayerPodCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PlayerPod.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerPodAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PlayerPodAggregateArgs>(args: Subset<T, PlayerPodAggregateArgs>): Prisma.PrismaPromise<GetPlayerPodAggregateType<T>>

    /**
     * Group by PlayerPod.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerPodGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PlayerPodGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlayerPodGroupByArgs['orderBy'] }
        : { orderBy?: PlayerPodGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PlayerPodGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlayerPodGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PlayerPod model
   */
  readonly fields: PlayerPodFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PlayerPod.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlayerPodClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    player<T extends PlayerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PlayerDefaultArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    pod<T extends PodDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PodDefaultArgs<ExtArgs>>): Prisma__PodClient<$Result.GetResult<Prisma.$PodPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PlayerPod model
   */
  interface PlayerPodFieldRefs {
    readonly id: FieldRef<"PlayerPod", 'String'>
    readonly playerId: FieldRef<"PlayerPod", 'String'>
    readonly podId: FieldRef<"PlayerPod", 'String'>
    readonly createdAt: FieldRef<"PlayerPod", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PlayerPod findUnique
   */
  export type PlayerPodFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerPod
     */
    select?: PlayerPodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerPod
     */
    omit?: PlayerPodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerPodInclude<ExtArgs> | null
    /**
     * Filter, which PlayerPod to fetch.
     */
    where: PlayerPodWhereUniqueInput
  }

  /**
   * PlayerPod findUniqueOrThrow
   */
  export type PlayerPodFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerPod
     */
    select?: PlayerPodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerPod
     */
    omit?: PlayerPodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerPodInclude<ExtArgs> | null
    /**
     * Filter, which PlayerPod to fetch.
     */
    where: PlayerPodWhereUniqueInput
  }

  /**
   * PlayerPod findFirst
   */
  export type PlayerPodFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerPod
     */
    select?: PlayerPodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerPod
     */
    omit?: PlayerPodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerPodInclude<ExtArgs> | null
    /**
     * Filter, which PlayerPod to fetch.
     */
    where?: PlayerPodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlayerPods to fetch.
     */
    orderBy?: PlayerPodOrderByWithRelationInput | PlayerPodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlayerPods.
     */
    cursor?: PlayerPodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlayerPods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlayerPods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlayerPods.
     */
    distinct?: PlayerPodScalarFieldEnum | PlayerPodScalarFieldEnum[]
  }

  /**
   * PlayerPod findFirstOrThrow
   */
  export type PlayerPodFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerPod
     */
    select?: PlayerPodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerPod
     */
    omit?: PlayerPodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerPodInclude<ExtArgs> | null
    /**
     * Filter, which PlayerPod to fetch.
     */
    where?: PlayerPodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlayerPods to fetch.
     */
    orderBy?: PlayerPodOrderByWithRelationInput | PlayerPodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlayerPods.
     */
    cursor?: PlayerPodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlayerPods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlayerPods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlayerPods.
     */
    distinct?: PlayerPodScalarFieldEnum | PlayerPodScalarFieldEnum[]
  }

  /**
   * PlayerPod findMany
   */
  export type PlayerPodFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerPod
     */
    select?: PlayerPodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerPod
     */
    omit?: PlayerPodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerPodInclude<ExtArgs> | null
    /**
     * Filter, which PlayerPods to fetch.
     */
    where?: PlayerPodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlayerPods to fetch.
     */
    orderBy?: PlayerPodOrderByWithRelationInput | PlayerPodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PlayerPods.
     */
    cursor?: PlayerPodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlayerPods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlayerPods.
     */
    skip?: number
    distinct?: PlayerPodScalarFieldEnum | PlayerPodScalarFieldEnum[]
  }

  /**
   * PlayerPod create
   */
  export type PlayerPodCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerPod
     */
    select?: PlayerPodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerPod
     */
    omit?: PlayerPodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerPodInclude<ExtArgs> | null
    /**
     * The data needed to create a PlayerPod.
     */
    data: XOR<PlayerPodCreateInput, PlayerPodUncheckedCreateInput>
  }

  /**
   * PlayerPod createMany
   */
  export type PlayerPodCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PlayerPods.
     */
    data: PlayerPodCreateManyInput | PlayerPodCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PlayerPod createManyAndReturn
   */
  export type PlayerPodCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerPod
     */
    select?: PlayerPodSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerPod
     */
    omit?: PlayerPodOmit<ExtArgs> | null
    /**
     * The data used to create many PlayerPods.
     */
    data: PlayerPodCreateManyInput | PlayerPodCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerPodIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PlayerPod update
   */
  export type PlayerPodUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerPod
     */
    select?: PlayerPodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerPod
     */
    omit?: PlayerPodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerPodInclude<ExtArgs> | null
    /**
     * The data needed to update a PlayerPod.
     */
    data: XOR<PlayerPodUpdateInput, PlayerPodUncheckedUpdateInput>
    /**
     * Choose, which PlayerPod to update.
     */
    where: PlayerPodWhereUniqueInput
  }

  /**
   * PlayerPod updateMany
   */
  export type PlayerPodUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PlayerPods.
     */
    data: XOR<PlayerPodUpdateManyMutationInput, PlayerPodUncheckedUpdateManyInput>
    /**
     * Filter which PlayerPods to update
     */
    where?: PlayerPodWhereInput
    /**
     * Limit how many PlayerPods to update.
     */
    limit?: number
  }

  /**
   * PlayerPod updateManyAndReturn
   */
  export type PlayerPodUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerPod
     */
    select?: PlayerPodSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerPod
     */
    omit?: PlayerPodOmit<ExtArgs> | null
    /**
     * The data used to update PlayerPods.
     */
    data: XOR<PlayerPodUpdateManyMutationInput, PlayerPodUncheckedUpdateManyInput>
    /**
     * Filter which PlayerPods to update
     */
    where?: PlayerPodWhereInput
    /**
     * Limit how many PlayerPods to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerPodIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PlayerPod upsert
   */
  export type PlayerPodUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerPod
     */
    select?: PlayerPodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerPod
     */
    omit?: PlayerPodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerPodInclude<ExtArgs> | null
    /**
     * The filter to search for the PlayerPod to update in case it exists.
     */
    where: PlayerPodWhereUniqueInput
    /**
     * In case the PlayerPod found by the `where` argument doesn't exist, create a new PlayerPod with this data.
     */
    create: XOR<PlayerPodCreateInput, PlayerPodUncheckedCreateInput>
    /**
     * In case the PlayerPod was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlayerPodUpdateInput, PlayerPodUncheckedUpdateInput>
  }

  /**
   * PlayerPod delete
   */
  export type PlayerPodDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerPod
     */
    select?: PlayerPodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerPod
     */
    omit?: PlayerPodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerPodInclude<ExtArgs> | null
    /**
     * Filter which PlayerPod to delete.
     */
    where: PlayerPodWhereUniqueInput
  }

  /**
   * PlayerPod deleteMany
   */
  export type PlayerPodDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlayerPods to delete
     */
    where?: PlayerPodWhereInput
    /**
     * Limit how many PlayerPods to delete.
     */
    limit?: number
  }

  /**
   * PlayerPod without action
   */
  export type PlayerPodDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerPod
     */
    select?: PlayerPodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerPod
     */
    omit?: PlayerPodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerPodInclude<ExtArgs> | null
  }


  /**
   * Model Game
   */

  export type AggregateGame = {
    _count: GameCountAggregateOutputType | null
    _min: GameMinAggregateOutputType | null
    _max: GameMaxAggregateOutputType | null
  }

  export type GameMinAggregateOutputType = {
    id: string | null
    playedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    podId: string | null
    winnerId: string | null
  }

  export type GameMaxAggregateOutputType = {
    id: string | null
    playedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    podId: string | null
    winnerId: string | null
  }

  export type GameCountAggregateOutputType = {
    id: number
    playedAt: number
    createdAt: number
    updatedAt: number
    podId: number
    winnerId: number
    _all: number
  }


  export type GameMinAggregateInputType = {
    id?: true
    playedAt?: true
    createdAt?: true
    updatedAt?: true
    podId?: true
    winnerId?: true
  }

  export type GameMaxAggregateInputType = {
    id?: true
    playedAt?: true
    createdAt?: true
    updatedAt?: true
    podId?: true
    winnerId?: true
  }

  export type GameCountAggregateInputType = {
    id?: true
    playedAt?: true
    createdAt?: true
    updatedAt?: true
    podId?: true
    winnerId?: true
    _all?: true
  }

  export type GameAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Game to aggregate.
     */
    where?: GameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Games to fetch.
     */
    orderBy?: GameOrderByWithRelationInput | GameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Games from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Games.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Games
    **/
    _count?: true | GameCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GameMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GameMaxAggregateInputType
  }

  export type GetGameAggregateType<T extends GameAggregateArgs> = {
        [P in keyof T & keyof AggregateGame]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGame[P]>
      : GetScalarType<T[P], AggregateGame[P]>
  }




  export type GameGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameWhereInput
    orderBy?: GameOrderByWithAggregationInput | GameOrderByWithAggregationInput[]
    by: GameScalarFieldEnum[] | GameScalarFieldEnum
    having?: GameScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GameCountAggregateInputType | true
    _min?: GameMinAggregateInputType
    _max?: GameMaxAggregateInputType
  }

  export type GameGroupByOutputType = {
    id: string
    playedAt: Date
    createdAt: Date
    updatedAt: Date
    podId: string
    winnerId: string | null
    _count: GameCountAggregateOutputType | null
    _min: GameMinAggregateOutputType | null
    _max: GameMaxAggregateOutputType | null
  }

  type GetGameGroupByPayload<T extends GameGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GameGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GameGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GameGroupByOutputType[P]>
            : GetScalarType<T[P], GameGroupByOutputType[P]>
        }
      >
    >


  export type GameSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    playedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    podId?: boolean
    winnerId?: boolean
    pod?: boolean | PodDefaultArgs<ExtArgs>
    decks?: boolean | Game$decksArgs<ExtArgs>
    players?: boolean | Game$playersArgs<ExtArgs>
    _count?: boolean | GameCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["game"]>

  export type GameSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    playedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    podId?: boolean
    winnerId?: boolean
    pod?: boolean | PodDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["game"]>

  export type GameSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    playedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    podId?: boolean
    winnerId?: boolean
    pod?: boolean | PodDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["game"]>

  export type GameSelectScalar = {
    id?: boolean
    playedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    podId?: boolean
    winnerId?: boolean
  }

  export type GameOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "playedAt" | "createdAt" | "updatedAt" | "podId" | "winnerId", ExtArgs["result"]["game"]>
  export type GameInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pod?: boolean | PodDefaultArgs<ExtArgs>
    decks?: boolean | Game$decksArgs<ExtArgs>
    players?: boolean | Game$playersArgs<ExtArgs>
    _count?: boolean | GameCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GameIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pod?: boolean | PodDefaultArgs<ExtArgs>
  }
  export type GameIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pod?: boolean | PodDefaultArgs<ExtArgs>
  }

  export type $GamePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Game"
    objects: {
      pod: Prisma.$PodPayload<ExtArgs>
      decks: Prisma.$GameDeckPayload<ExtArgs>[]
      players: Prisma.$GamePlayerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      playedAt: Date
      createdAt: Date
      updatedAt: Date
      podId: string
      winnerId: string | null
    }, ExtArgs["result"]["game"]>
    composites: {}
  }

  type GameGetPayload<S extends boolean | null | undefined | GameDefaultArgs> = $Result.GetResult<Prisma.$GamePayload, S>

  type GameCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GameFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GameCountAggregateInputType | true
    }

  export interface GameDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Game'], meta: { name: 'Game' } }
    /**
     * Find zero or one Game that matches the filter.
     * @param {GameFindUniqueArgs} args - Arguments to find a Game
     * @example
     * // Get one Game
     * const game = await prisma.game.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GameFindUniqueArgs>(args: SelectSubset<T, GameFindUniqueArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Game that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GameFindUniqueOrThrowArgs} args - Arguments to find a Game
     * @example
     * // Get one Game
     * const game = await prisma.game.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GameFindUniqueOrThrowArgs>(args: SelectSubset<T, GameFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Game that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameFindFirstArgs} args - Arguments to find a Game
     * @example
     * // Get one Game
     * const game = await prisma.game.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GameFindFirstArgs>(args?: SelectSubset<T, GameFindFirstArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Game that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameFindFirstOrThrowArgs} args - Arguments to find a Game
     * @example
     * // Get one Game
     * const game = await prisma.game.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GameFindFirstOrThrowArgs>(args?: SelectSubset<T, GameFindFirstOrThrowArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Games that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Games
     * const games = await prisma.game.findMany()
     * 
     * // Get first 10 Games
     * const games = await prisma.game.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gameWithIdOnly = await prisma.game.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GameFindManyArgs>(args?: SelectSubset<T, GameFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Game.
     * @param {GameCreateArgs} args - Arguments to create a Game.
     * @example
     * // Create one Game
     * const Game = await prisma.game.create({
     *   data: {
     *     // ... data to create a Game
     *   }
     * })
     * 
     */
    create<T extends GameCreateArgs>(args: SelectSubset<T, GameCreateArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Games.
     * @param {GameCreateManyArgs} args - Arguments to create many Games.
     * @example
     * // Create many Games
     * const game = await prisma.game.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GameCreateManyArgs>(args?: SelectSubset<T, GameCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Games and returns the data saved in the database.
     * @param {GameCreateManyAndReturnArgs} args - Arguments to create many Games.
     * @example
     * // Create many Games
     * const game = await prisma.game.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Games and only return the `id`
     * const gameWithIdOnly = await prisma.game.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GameCreateManyAndReturnArgs>(args?: SelectSubset<T, GameCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Game.
     * @param {GameDeleteArgs} args - Arguments to delete one Game.
     * @example
     * // Delete one Game
     * const Game = await prisma.game.delete({
     *   where: {
     *     // ... filter to delete one Game
     *   }
     * })
     * 
     */
    delete<T extends GameDeleteArgs>(args: SelectSubset<T, GameDeleteArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Game.
     * @param {GameUpdateArgs} args - Arguments to update one Game.
     * @example
     * // Update one Game
     * const game = await prisma.game.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GameUpdateArgs>(args: SelectSubset<T, GameUpdateArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Games.
     * @param {GameDeleteManyArgs} args - Arguments to filter Games to delete.
     * @example
     * // Delete a few Games
     * const { count } = await prisma.game.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GameDeleteManyArgs>(args?: SelectSubset<T, GameDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Games.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Games
     * const game = await prisma.game.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GameUpdateManyArgs>(args: SelectSubset<T, GameUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Games and returns the data updated in the database.
     * @param {GameUpdateManyAndReturnArgs} args - Arguments to update many Games.
     * @example
     * // Update many Games
     * const game = await prisma.game.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Games and only return the `id`
     * const gameWithIdOnly = await prisma.game.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GameUpdateManyAndReturnArgs>(args: SelectSubset<T, GameUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Game.
     * @param {GameUpsertArgs} args - Arguments to update or create a Game.
     * @example
     * // Update or create a Game
     * const game = await prisma.game.upsert({
     *   create: {
     *     // ... data to create a Game
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Game we want to update
     *   }
     * })
     */
    upsert<T extends GameUpsertArgs>(args: SelectSubset<T, GameUpsertArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Games.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameCountArgs} args - Arguments to filter Games to count.
     * @example
     * // Count the number of Games
     * const count = await prisma.game.count({
     *   where: {
     *     // ... the filter for the Games we want to count
     *   }
     * })
    **/
    count<T extends GameCountArgs>(
      args?: Subset<T, GameCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GameCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Game.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GameAggregateArgs>(args: Subset<T, GameAggregateArgs>): Prisma.PrismaPromise<GetGameAggregateType<T>>

    /**
     * Group by Game.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GameGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GameGroupByArgs['orderBy'] }
        : { orderBy?: GameGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GameGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGameGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Game model
   */
  readonly fields: GameFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Game.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GameClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pod<T extends PodDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PodDefaultArgs<ExtArgs>>): Prisma__PodClient<$Result.GetResult<Prisma.$PodPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    decks<T extends Game$decksArgs<ExtArgs> = {}>(args?: Subset<T, Game$decksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameDeckPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    players<T extends Game$playersArgs<ExtArgs> = {}>(args?: Subset<T, Game$playersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GamePlayerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Game model
   */
  interface GameFieldRefs {
    readonly id: FieldRef<"Game", 'String'>
    readonly playedAt: FieldRef<"Game", 'DateTime'>
    readonly createdAt: FieldRef<"Game", 'DateTime'>
    readonly updatedAt: FieldRef<"Game", 'DateTime'>
    readonly podId: FieldRef<"Game", 'String'>
    readonly winnerId: FieldRef<"Game", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Game findUnique
   */
  export type GameFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter, which Game to fetch.
     */
    where: GameWhereUniqueInput
  }

  /**
   * Game findUniqueOrThrow
   */
  export type GameFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter, which Game to fetch.
     */
    where: GameWhereUniqueInput
  }

  /**
   * Game findFirst
   */
  export type GameFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter, which Game to fetch.
     */
    where?: GameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Games to fetch.
     */
    orderBy?: GameOrderByWithRelationInput | GameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Games.
     */
    cursor?: GameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Games from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Games.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Games.
     */
    distinct?: GameScalarFieldEnum | GameScalarFieldEnum[]
  }

  /**
   * Game findFirstOrThrow
   */
  export type GameFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter, which Game to fetch.
     */
    where?: GameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Games to fetch.
     */
    orderBy?: GameOrderByWithRelationInput | GameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Games.
     */
    cursor?: GameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Games from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Games.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Games.
     */
    distinct?: GameScalarFieldEnum | GameScalarFieldEnum[]
  }

  /**
   * Game findMany
   */
  export type GameFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter, which Games to fetch.
     */
    where?: GameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Games to fetch.
     */
    orderBy?: GameOrderByWithRelationInput | GameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Games.
     */
    cursor?: GameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Games from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Games.
     */
    skip?: number
    distinct?: GameScalarFieldEnum | GameScalarFieldEnum[]
  }

  /**
   * Game create
   */
  export type GameCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * The data needed to create a Game.
     */
    data: XOR<GameCreateInput, GameUncheckedCreateInput>
  }

  /**
   * Game createMany
   */
  export type GameCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Games.
     */
    data: GameCreateManyInput | GameCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Game createManyAndReturn
   */
  export type GameCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * The data used to create many Games.
     */
    data: GameCreateManyInput | GameCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Game update
   */
  export type GameUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * The data needed to update a Game.
     */
    data: XOR<GameUpdateInput, GameUncheckedUpdateInput>
    /**
     * Choose, which Game to update.
     */
    where: GameWhereUniqueInput
  }

  /**
   * Game updateMany
   */
  export type GameUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Games.
     */
    data: XOR<GameUpdateManyMutationInput, GameUncheckedUpdateManyInput>
    /**
     * Filter which Games to update
     */
    where?: GameWhereInput
    /**
     * Limit how many Games to update.
     */
    limit?: number
  }

  /**
   * Game updateManyAndReturn
   */
  export type GameUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * The data used to update Games.
     */
    data: XOR<GameUpdateManyMutationInput, GameUncheckedUpdateManyInput>
    /**
     * Filter which Games to update
     */
    where?: GameWhereInput
    /**
     * Limit how many Games to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Game upsert
   */
  export type GameUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * The filter to search for the Game to update in case it exists.
     */
    where: GameWhereUniqueInput
    /**
     * In case the Game found by the `where` argument doesn't exist, create a new Game with this data.
     */
    create: XOR<GameCreateInput, GameUncheckedCreateInput>
    /**
     * In case the Game was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GameUpdateInput, GameUncheckedUpdateInput>
  }

  /**
   * Game delete
   */
  export type GameDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter which Game to delete.
     */
    where: GameWhereUniqueInput
  }

  /**
   * Game deleteMany
   */
  export type GameDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Games to delete
     */
    where?: GameWhereInput
    /**
     * Limit how many Games to delete.
     */
    limit?: number
  }

  /**
   * Game.decks
   */
  export type Game$decksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameDeck
     */
    select?: GameDeckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameDeck
     */
    omit?: GameDeckOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameDeckInclude<ExtArgs> | null
    where?: GameDeckWhereInput
    orderBy?: GameDeckOrderByWithRelationInput | GameDeckOrderByWithRelationInput[]
    cursor?: GameDeckWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GameDeckScalarFieldEnum | GameDeckScalarFieldEnum[]
  }

  /**
   * Game.players
   */
  export type Game$playersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GamePlayer
     */
    select?: GamePlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GamePlayer
     */
    omit?: GamePlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GamePlayerInclude<ExtArgs> | null
    where?: GamePlayerWhereInput
    orderBy?: GamePlayerOrderByWithRelationInput | GamePlayerOrderByWithRelationInput[]
    cursor?: GamePlayerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GamePlayerScalarFieldEnum | GamePlayerScalarFieldEnum[]
  }

  /**
   * Game without action
   */
  export type GameDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
  }


  /**
   * Model GamePlayer
   */

  export type AggregateGamePlayer = {
    _count: GamePlayerCountAggregateOutputType | null
    _min: GamePlayerMinAggregateOutputType | null
    _max: GamePlayerMaxAggregateOutputType | null
  }

  export type GamePlayerMinAggregateOutputType = {
    id: string | null
    gameId: string | null
    playerId: string | null
  }

  export type GamePlayerMaxAggregateOutputType = {
    id: string | null
    gameId: string | null
    playerId: string | null
  }

  export type GamePlayerCountAggregateOutputType = {
    id: number
    gameId: number
    playerId: number
    _all: number
  }


  export type GamePlayerMinAggregateInputType = {
    id?: true
    gameId?: true
    playerId?: true
  }

  export type GamePlayerMaxAggregateInputType = {
    id?: true
    gameId?: true
    playerId?: true
  }

  export type GamePlayerCountAggregateInputType = {
    id?: true
    gameId?: true
    playerId?: true
    _all?: true
  }

  export type GamePlayerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GamePlayer to aggregate.
     */
    where?: GamePlayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GamePlayers to fetch.
     */
    orderBy?: GamePlayerOrderByWithRelationInput | GamePlayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GamePlayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GamePlayers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GamePlayers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GamePlayers
    **/
    _count?: true | GamePlayerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GamePlayerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GamePlayerMaxAggregateInputType
  }

  export type GetGamePlayerAggregateType<T extends GamePlayerAggregateArgs> = {
        [P in keyof T & keyof AggregateGamePlayer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGamePlayer[P]>
      : GetScalarType<T[P], AggregateGamePlayer[P]>
  }




  export type GamePlayerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GamePlayerWhereInput
    orderBy?: GamePlayerOrderByWithAggregationInput | GamePlayerOrderByWithAggregationInput[]
    by: GamePlayerScalarFieldEnum[] | GamePlayerScalarFieldEnum
    having?: GamePlayerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GamePlayerCountAggregateInputType | true
    _min?: GamePlayerMinAggregateInputType
    _max?: GamePlayerMaxAggregateInputType
  }

  export type GamePlayerGroupByOutputType = {
    id: string
    gameId: string
    playerId: string
    _count: GamePlayerCountAggregateOutputType | null
    _min: GamePlayerMinAggregateOutputType | null
    _max: GamePlayerMaxAggregateOutputType | null
  }

  type GetGamePlayerGroupByPayload<T extends GamePlayerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GamePlayerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GamePlayerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GamePlayerGroupByOutputType[P]>
            : GetScalarType<T[P], GamePlayerGroupByOutputType[P]>
        }
      >
    >


  export type GamePlayerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gameId?: boolean
    playerId?: boolean
    game?: boolean | GameDefaultArgs<ExtArgs>
    player?: boolean | PlayerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gamePlayer"]>

  export type GamePlayerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gameId?: boolean
    playerId?: boolean
    game?: boolean | GameDefaultArgs<ExtArgs>
    player?: boolean | PlayerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gamePlayer"]>

  export type GamePlayerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gameId?: boolean
    playerId?: boolean
    game?: boolean | GameDefaultArgs<ExtArgs>
    player?: boolean | PlayerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gamePlayer"]>

  export type GamePlayerSelectScalar = {
    id?: boolean
    gameId?: boolean
    playerId?: boolean
  }

  export type GamePlayerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "gameId" | "playerId", ExtArgs["result"]["gamePlayer"]>
  export type GamePlayerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    game?: boolean | GameDefaultArgs<ExtArgs>
    player?: boolean | PlayerDefaultArgs<ExtArgs>
  }
  export type GamePlayerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    game?: boolean | GameDefaultArgs<ExtArgs>
    player?: boolean | PlayerDefaultArgs<ExtArgs>
  }
  export type GamePlayerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    game?: boolean | GameDefaultArgs<ExtArgs>
    player?: boolean | PlayerDefaultArgs<ExtArgs>
  }

  export type $GamePlayerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GamePlayer"
    objects: {
      game: Prisma.$GamePayload<ExtArgs>
      player: Prisma.$PlayerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      gameId: string
      playerId: string
    }, ExtArgs["result"]["gamePlayer"]>
    composites: {}
  }

  type GamePlayerGetPayload<S extends boolean | null | undefined | GamePlayerDefaultArgs> = $Result.GetResult<Prisma.$GamePlayerPayload, S>

  type GamePlayerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GamePlayerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GamePlayerCountAggregateInputType | true
    }

  export interface GamePlayerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GamePlayer'], meta: { name: 'GamePlayer' } }
    /**
     * Find zero or one GamePlayer that matches the filter.
     * @param {GamePlayerFindUniqueArgs} args - Arguments to find a GamePlayer
     * @example
     * // Get one GamePlayer
     * const gamePlayer = await prisma.gamePlayer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GamePlayerFindUniqueArgs>(args: SelectSubset<T, GamePlayerFindUniqueArgs<ExtArgs>>): Prisma__GamePlayerClient<$Result.GetResult<Prisma.$GamePlayerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GamePlayer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GamePlayerFindUniqueOrThrowArgs} args - Arguments to find a GamePlayer
     * @example
     * // Get one GamePlayer
     * const gamePlayer = await prisma.gamePlayer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GamePlayerFindUniqueOrThrowArgs>(args: SelectSubset<T, GamePlayerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GamePlayerClient<$Result.GetResult<Prisma.$GamePlayerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GamePlayer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GamePlayerFindFirstArgs} args - Arguments to find a GamePlayer
     * @example
     * // Get one GamePlayer
     * const gamePlayer = await prisma.gamePlayer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GamePlayerFindFirstArgs>(args?: SelectSubset<T, GamePlayerFindFirstArgs<ExtArgs>>): Prisma__GamePlayerClient<$Result.GetResult<Prisma.$GamePlayerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GamePlayer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GamePlayerFindFirstOrThrowArgs} args - Arguments to find a GamePlayer
     * @example
     * // Get one GamePlayer
     * const gamePlayer = await prisma.gamePlayer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GamePlayerFindFirstOrThrowArgs>(args?: SelectSubset<T, GamePlayerFindFirstOrThrowArgs<ExtArgs>>): Prisma__GamePlayerClient<$Result.GetResult<Prisma.$GamePlayerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GamePlayers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GamePlayerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GamePlayers
     * const gamePlayers = await prisma.gamePlayer.findMany()
     * 
     * // Get first 10 GamePlayers
     * const gamePlayers = await prisma.gamePlayer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gamePlayerWithIdOnly = await prisma.gamePlayer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GamePlayerFindManyArgs>(args?: SelectSubset<T, GamePlayerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GamePlayerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GamePlayer.
     * @param {GamePlayerCreateArgs} args - Arguments to create a GamePlayer.
     * @example
     * // Create one GamePlayer
     * const GamePlayer = await prisma.gamePlayer.create({
     *   data: {
     *     // ... data to create a GamePlayer
     *   }
     * })
     * 
     */
    create<T extends GamePlayerCreateArgs>(args: SelectSubset<T, GamePlayerCreateArgs<ExtArgs>>): Prisma__GamePlayerClient<$Result.GetResult<Prisma.$GamePlayerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GamePlayers.
     * @param {GamePlayerCreateManyArgs} args - Arguments to create many GamePlayers.
     * @example
     * // Create many GamePlayers
     * const gamePlayer = await prisma.gamePlayer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GamePlayerCreateManyArgs>(args?: SelectSubset<T, GamePlayerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GamePlayers and returns the data saved in the database.
     * @param {GamePlayerCreateManyAndReturnArgs} args - Arguments to create many GamePlayers.
     * @example
     * // Create many GamePlayers
     * const gamePlayer = await prisma.gamePlayer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GamePlayers and only return the `id`
     * const gamePlayerWithIdOnly = await prisma.gamePlayer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GamePlayerCreateManyAndReturnArgs>(args?: SelectSubset<T, GamePlayerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GamePlayerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GamePlayer.
     * @param {GamePlayerDeleteArgs} args - Arguments to delete one GamePlayer.
     * @example
     * // Delete one GamePlayer
     * const GamePlayer = await prisma.gamePlayer.delete({
     *   where: {
     *     // ... filter to delete one GamePlayer
     *   }
     * })
     * 
     */
    delete<T extends GamePlayerDeleteArgs>(args: SelectSubset<T, GamePlayerDeleteArgs<ExtArgs>>): Prisma__GamePlayerClient<$Result.GetResult<Prisma.$GamePlayerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GamePlayer.
     * @param {GamePlayerUpdateArgs} args - Arguments to update one GamePlayer.
     * @example
     * // Update one GamePlayer
     * const gamePlayer = await prisma.gamePlayer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GamePlayerUpdateArgs>(args: SelectSubset<T, GamePlayerUpdateArgs<ExtArgs>>): Prisma__GamePlayerClient<$Result.GetResult<Prisma.$GamePlayerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GamePlayers.
     * @param {GamePlayerDeleteManyArgs} args - Arguments to filter GamePlayers to delete.
     * @example
     * // Delete a few GamePlayers
     * const { count } = await prisma.gamePlayer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GamePlayerDeleteManyArgs>(args?: SelectSubset<T, GamePlayerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GamePlayers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GamePlayerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GamePlayers
     * const gamePlayer = await prisma.gamePlayer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GamePlayerUpdateManyArgs>(args: SelectSubset<T, GamePlayerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GamePlayers and returns the data updated in the database.
     * @param {GamePlayerUpdateManyAndReturnArgs} args - Arguments to update many GamePlayers.
     * @example
     * // Update many GamePlayers
     * const gamePlayer = await prisma.gamePlayer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GamePlayers and only return the `id`
     * const gamePlayerWithIdOnly = await prisma.gamePlayer.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GamePlayerUpdateManyAndReturnArgs>(args: SelectSubset<T, GamePlayerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GamePlayerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GamePlayer.
     * @param {GamePlayerUpsertArgs} args - Arguments to update or create a GamePlayer.
     * @example
     * // Update or create a GamePlayer
     * const gamePlayer = await prisma.gamePlayer.upsert({
     *   create: {
     *     // ... data to create a GamePlayer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GamePlayer we want to update
     *   }
     * })
     */
    upsert<T extends GamePlayerUpsertArgs>(args: SelectSubset<T, GamePlayerUpsertArgs<ExtArgs>>): Prisma__GamePlayerClient<$Result.GetResult<Prisma.$GamePlayerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GamePlayers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GamePlayerCountArgs} args - Arguments to filter GamePlayers to count.
     * @example
     * // Count the number of GamePlayers
     * const count = await prisma.gamePlayer.count({
     *   where: {
     *     // ... the filter for the GamePlayers we want to count
     *   }
     * })
    **/
    count<T extends GamePlayerCountArgs>(
      args?: Subset<T, GamePlayerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GamePlayerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GamePlayer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GamePlayerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GamePlayerAggregateArgs>(args: Subset<T, GamePlayerAggregateArgs>): Prisma.PrismaPromise<GetGamePlayerAggregateType<T>>

    /**
     * Group by GamePlayer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GamePlayerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GamePlayerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GamePlayerGroupByArgs['orderBy'] }
        : { orderBy?: GamePlayerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GamePlayerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGamePlayerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GamePlayer model
   */
  readonly fields: GamePlayerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GamePlayer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GamePlayerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    game<T extends GameDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GameDefaultArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    player<T extends PlayerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PlayerDefaultArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the GamePlayer model
   */
  interface GamePlayerFieldRefs {
    readonly id: FieldRef<"GamePlayer", 'String'>
    readonly gameId: FieldRef<"GamePlayer", 'String'>
    readonly playerId: FieldRef<"GamePlayer", 'String'>
  }
    

  // Custom InputTypes
  /**
   * GamePlayer findUnique
   */
  export type GamePlayerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GamePlayer
     */
    select?: GamePlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GamePlayer
     */
    omit?: GamePlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GamePlayerInclude<ExtArgs> | null
    /**
     * Filter, which GamePlayer to fetch.
     */
    where: GamePlayerWhereUniqueInput
  }

  /**
   * GamePlayer findUniqueOrThrow
   */
  export type GamePlayerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GamePlayer
     */
    select?: GamePlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GamePlayer
     */
    omit?: GamePlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GamePlayerInclude<ExtArgs> | null
    /**
     * Filter, which GamePlayer to fetch.
     */
    where: GamePlayerWhereUniqueInput
  }

  /**
   * GamePlayer findFirst
   */
  export type GamePlayerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GamePlayer
     */
    select?: GamePlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GamePlayer
     */
    omit?: GamePlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GamePlayerInclude<ExtArgs> | null
    /**
     * Filter, which GamePlayer to fetch.
     */
    where?: GamePlayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GamePlayers to fetch.
     */
    orderBy?: GamePlayerOrderByWithRelationInput | GamePlayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GamePlayers.
     */
    cursor?: GamePlayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GamePlayers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GamePlayers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GamePlayers.
     */
    distinct?: GamePlayerScalarFieldEnum | GamePlayerScalarFieldEnum[]
  }

  /**
   * GamePlayer findFirstOrThrow
   */
  export type GamePlayerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GamePlayer
     */
    select?: GamePlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GamePlayer
     */
    omit?: GamePlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GamePlayerInclude<ExtArgs> | null
    /**
     * Filter, which GamePlayer to fetch.
     */
    where?: GamePlayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GamePlayers to fetch.
     */
    orderBy?: GamePlayerOrderByWithRelationInput | GamePlayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GamePlayers.
     */
    cursor?: GamePlayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GamePlayers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GamePlayers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GamePlayers.
     */
    distinct?: GamePlayerScalarFieldEnum | GamePlayerScalarFieldEnum[]
  }

  /**
   * GamePlayer findMany
   */
  export type GamePlayerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GamePlayer
     */
    select?: GamePlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GamePlayer
     */
    omit?: GamePlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GamePlayerInclude<ExtArgs> | null
    /**
     * Filter, which GamePlayers to fetch.
     */
    where?: GamePlayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GamePlayers to fetch.
     */
    orderBy?: GamePlayerOrderByWithRelationInput | GamePlayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GamePlayers.
     */
    cursor?: GamePlayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GamePlayers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GamePlayers.
     */
    skip?: number
    distinct?: GamePlayerScalarFieldEnum | GamePlayerScalarFieldEnum[]
  }

  /**
   * GamePlayer create
   */
  export type GamePlayerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GamePlayer
     */
    select?: GamePlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GamePlayer
     */
    omit?: GamePlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GamePlayerInclude<ExtArgs> | null
    /**
     * The data needed to create a GamePlayer.
     */
    data: XOR<GamePlayerCreateInput, GamePlayerUncheckedCreateInput>
  }

  /**
   * GamePlayer createMany
   */
  export type GamePlayerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GamePlayers.
     */
    data: GamePlayerCreateManyInput | GamePlayerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GamePlayer createManyAndReturn
   */
  export type GamePlayerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GamePlayer
     */
    select?: GamePlayerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GamePlayer
     */
    omit?: GamePlayerOmit<ExtArgs> | null
    /**
     * The data used to create many GamePlayers.
     */
    data: GamePlayerCreateManyInput | GamePlayerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GamePlayerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * GamePlayer update
   */
  export type GamePlayerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GamePlayer
     */
    select?: GamePlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GamePlayer
     */
    omit?: GamePlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GamePlayerInclude<ExtArgs> | null
    /**
     * The data needed to update a GamePlayer.
     */
    data: XOR<GamePlayerUpdateInput, GamePlayerUncheckedUpdateInput>
    /**
     * Choose, which GamePlayer to update.
     */
    where: GamePlayerWhereUniqueInput
  }

  /**
   * GamePlayer updateMany
   */
  export type GamePlayerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GamePlayers.
     */
    data: XOR<GamePlayerUpdateManyMutationInput, GamePlayerUncheckedUpdateManyInput>
    /**
     * Filter which GamePlayers to update
     */
    where?: GamePlayerWhereInput
    /**
     * Limit how many GamePlayers to update.
     */
    limit?: number
  }

  /**
   * GamePlayer updateManyAndReturn
   */
  export type GamePlayerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GamePlayer
     */
    select?: GamePlayerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GamePlayer
     */
    omit?: GamePlayerOmit<ExtArgs> | null
    /**
     * The data used to update GamePlayers.
     */
    data: XOR<GamePlayerUpdateManyMutationInput, GamePlayerUncheckedUpdateManyInput>
    /**
     * Filter which GamePlayers to update
     */
    where?: GamePlayerWhereInput
    /**
     * Limit how many GamePlayers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GamePlayerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * GamePlayer upsert
   */
  export type GamePlayerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GamePlayer
     */
    select?: GamePlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GamePlayer
     */
    omit?: GamePlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GamePlayerInclude<ExtArgs> | null
    /**
     * The filter to search for the GamePlayer to update in case it exists.
     */
    where: GamePlayerWhereUniqueInput
    /**
     * In case the GamePlayer found by the `where` argument doesn't exist, create a new GamePlayer with this data.
     */
    create: XOR<GamePlayerCreateInput, GamePlayerUncheckedCreateInput>
    /**
     * In case the GamePlayer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GamePlayerUpdateInput, GamePlayerUncheckedUpdateInput>
  }

  /**
   * GamePlayer delete
   */
  export type GamePlayerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GamePlayer
     */
    select?: GamePlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GamePlayer
     */
    omit?: GamePlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GamePlayerInclude<ExtArgs> | null
    /**
     * Filter which GamePlayer to delete.
     */
    where: GamePlayerWhereUniqueInput
  }

  /**
   * GamePlayer deleteMany
   */
  export type GamePlayerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GamePlayers to delete
     */
    where?: GamePlayerWhereInput
    /**
     * Limit how many GamePlayers to delete.
     */
    limit?: number
  }

  /**
   * GamePlayer without action
   */
  export type GamePlayerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GamePlayer
     */
    select?: GamePlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GamePlayer
     */
    omit?: GamePlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GamePlayerInclude<ExtArgs> | null
  }


  /**
   * Model GameDeck
   */

  export type AggregateGameDeck = {
    _count: GameDeckCountAggregateOutputType | null
    _min: GameDeckMinAggregateOutputType | null
    _max: GameDeckMaxAggregateOutputType | null
  }

  export type GameDeckMinAggregateOutputType = {
    id: string | null
    gameId: string | null
    deckId: string | null
    isWinner: boolean | null
  }

  export type GameDeckMaxAggregateOutputType = {
    id: string | null
    gameId: string | null
    deckId: string | null
    isWinner: boolean | null
  }

  export type GameDeckCountAggregateOutputType = {
    id: number
    gameId: number
    deckId: number
    isWinner: number
    _all: number
  }


  export type GameDeckMinAggregateInputType = {
    id?: true
    gameId?: true
    deckId?: true
    isWinner?: true
  }

  export type GameDeckMaxAggregateInputType = {
    id?: true
    gameId?: true
    deckId?: true
    isWinner?: true
  }

  export type GameDeckCountAggregateInputType = {
    id?: true
    gameId?: true
    deckId?: true
    isWinner?: true
    _all?: true
  }

  export type GameDeckAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GameDeck to aggregate.
     */
    where?: GameDeckWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameDecks to fetch.
     */
    orderBy?: GameDeckOrderByWithRelationInput | GameDeckOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GameDeckWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameDecks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameDecks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GameDecks
    **/
    _count?: true | GameDeckCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GameDeckMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GameDeckMaxAggregateInputType
  }

  export type GetGameDeckAggregateType<T extends GameDeckAggregateArgs> = {
        [P in keyof T & keyof AggregateGameDeck]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGameDeck[P]>
      : GetScalarType<T[P], AggregateGameDeck[P]>
  }




  export type GameDeckGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameDeckWhereInput
    orderBy?: GameDeckOrderByWithAggregationInput | GameDeckOrderByWithAggregationInput[]
    by: GameDeckScalarFieldEnum[] | GameDeckScalarFieldEnum
    having?: GameDeckScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GameDeckCountAggregateInputType | true
    _min?: GameDeckMinAggregateInputType
    _max?: GameDeckMaxAggregateInputType
  }

  export type GameDeckGroupByOutputType = {
    id: string
    gameId: string
    deckId: string
    isWinner: boolean
    _count: GameDeckCountAggregateOutputType | null
    _min: GameDeckMinAggregateOutputType | null
    _max: GameDeckMaxAggregateOutputType | null
  }

  type GetGameDeckGroupByPayload<T extends GameDeckGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GameDeckGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GameDeckGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GameDeckGroupByOutputType[P]>
            : GetScalarType<T[P], GameDeckGroupByOutputType[P]>
        }
      >
    >


  export type GameDeckSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gameId?: boolean
    deckId?: boolean
    isWinner?: boolean
    deck?: boolean | DeckDefaultArgs<ExtArgs>
    game?: boolean | GameDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gameDeck"]>

  export type GameDeckSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gameId?: boolean
    deckId?: boolean
    isWinner?: boolean
    deck?: boolean | DeckDefaultArgs<ExtArgs>
    game?: boolean | GameDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gameDeck"]>

  export type GameDeckSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gameId?: boolean
    deckId?: boolean
    isWinner?: boolean
    deck?: boolean | DeckDefaultArgs<ExtArgs>
    game?: boolean | GameDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gameDeck"]>

  export type GameDeckSelectScalar = {
    id?: boolean
    gameId?: boolean
    deckId?: boolean
    isWinner?: boolean
  }

  export type GameDeckOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "gameId" | "deckId" | "isWinner", ExtArgs["result"]["gameDeck"]>
  export type GameDeckInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    deck?: boolean | DeckDefaultArgs<ExtArgs>
    game?: boolean | GameDefaultArgs<ExtArgs>
  }
  export type GameDeckIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    deck?: boolean | DeckDefaultArgs<ExtArgs>
    game?: boolean | GameDefaultArgs<ExtArgs>
  }
  export type GameDeckIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    deck?: boolean | DeckDefaultArgs<ExtArgs>
    game?: boolean | GameDefaultArgs<ExtArgs>
  }

  export type $GameDeckPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GameDeck"
    objects: {
      deck: Prisma.$DeckPayload<ExtArgs>
      game: Prisma.$GamePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      gameId: string
      deckId: string
      isWinner: boolean
    }, ExtArgs["result"]["gameDeck"]>
    composites: {}
  }

  type GameDeckGetPayload<S extends boolean | null | undefined | GameDeckDefaultArgs> = $Result.GetResult<Prisma.$GameDeckPayload, S>

  type GameDeckCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GameDeckFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GameDeckCountAggregateInputType | true
    }

  export interface GameDeckDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GameDeck'], meta: { name: 'GameDeck' } }
    /**
     * Find zero or one GameDeck that matches the filter.
     * @param {GameDeckFindUniqueArgs} args - Arguments to find a GameDeck
     * @example
     * // Get one GameDeck
     * const gameDeck = await prisma.gameDeck.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GameDeckFindUniqueArgs>(args: SelectSubset<T, GameDeckFindUniqueArgs<ExtArgs>>): Prisma__GameDeckClient<$Result.GetResult<Prisma.$GameDeckPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GameDeck that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GameDeckFindUniqueOrThrowArgs} args - Arguments to find a GameDeck
     * @example
     * // Get one GameDeck
     * const gameDeck = await prisma.gameDeck.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GameDeckFindUniqueOrThrowArgs>(args: SelectSubset<T, GameDeckFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GameDeckClient<$Result.GetResult<Prisma.$GameDeckPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GameDeck that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameDeckFindFirstArgs} args - Arguments to find a GameDeck
     * @example
     * // Get one GameDeck
     * const gameDeck = await prisma.gameDeck.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GameDeckFindFirstArgs>(args?: SelectSubset<T, GameDeckFindFirstArgs<ExtArgs>>): Prisma__GameDeckClient<$Result.GetResult<Prisma.$GameDeckPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GameDeck that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameDeckFindFirstOrThrowArgs} args - Arguments to find a GameDeck
     * @example
     * // Get one GameDeck
     * const gameDeck = await prisma.gameDeck.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GameDeckFindFirstOrThrowArgs>(args?: SelectSubset<T, GameDeckFindFirstOrThrowArgs<ExtArgs>>): Prisma__GameDeckClient<$Result.GetResult<Prisma.$GameDeckPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GameDecks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameDeckFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GameDecks
     * const gameDecks = await prisma.gameDeck.findMany()
     * 
     * // Get first 10 GameDecks
     * const gameDecks = await prisma.gameDeck.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gameDeckWithIdOnly = await prisma.gameDeck.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GameDeckFindManyArgs>(args?: SelectSubset<T, GameDeckFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameDeckPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GameDeck.
     * @param {GameDeckCreateArgs} args - Arguments to create a GameDeck.
     * @example
     * // Create one GameDeck
     * const GameDeck = await prisma.gameDeck.create({
     *   data: {
     *     // ... data to create a GameDeck
     *   }
     * })
     * 
     */
    create<T extends GameDeckCreateArgs>(args: SelectSubset<T, GameDeckCreateArgs<ExtArgs>>): Prisma__GameDeckClient<$Result.GetResult<Prisma.$GameDeckPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GameDecks.
     * @param {GameDeckCreateManyArgs} args - Arguments to create many GameDecks.
     * @example
     * // Create many GameDecks
     * const gameDeck = await prisma.gameDeck.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GameDeckCreateManyArgs>(args?: SelectSubset<T, GameDeckCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GameDecks and returns the data saved in the database.
     * @param {GameDeckCreateManyAndReturnArgs} args - Arguments to create many GameDecks.
     * @example
     * // Create many GameDecks
     * const gameDeck = await prisma.gameDeck.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GameDecks and only return the `id`
     * const gameDeckWithIdOnly = await prisma.gameDeck.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GameDeckCreateManyAndReturnArgs>(args?: SelectSubset<T, GameDeckCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameDeckPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GameDeck.
     * @param {GameDeckDeleteArgs} args - Arguments to delete one GameDeck.
     * @example
     * // Delete one GameDeck
     * const GameDeck = await prisma.gameDeck.delete({
     *   where: {
     *     // ... filter to delete one GameDeck
     *   }
     * })
     * 
     */
    delete<T extends GameDeckDeleteArgs>(args: SelectSubset<T, GameDeckDeleteArgs<ExtArgs>>): Prisma__GameDeckClient<$Result.GetResult<Prisma.$GameDeckPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GameDeck.
     * @param {GameDeckUpdateArgs} args - Arguments to update one GameDeck.
     * @example
     * // Update one GameDeck
     * const gameDeck = await prisma.gameDeck.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GameDeckUpdateArgs>(args: SelectSubset<T, GameDeckUpdateArgs<ExtArgs>>): Prisma__GameDeckClient<$Result.GetResult<Prisma.$GameDeckPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GameDecks.
     * @param {GameDeckDeleteManyArgs} args - Arguments to filter GameDecks to delete.
     * @example
     * // Delete a few GameDecks
     * const { count } = await prisma.gameDeck.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GameDeckDeleteManyArgs>(args?: SelectSubset<T, GameDeckDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GameDecks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameDeckUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GameDecks
     * const gameDeck = await prisma.gameDeck.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GameDeckUpdateManyArgs>(args: SelectSubset<T, GameDeckUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GameDecks and returns the data updated in the database.
     * @param {GameDeckUpdateManyAndReturnArgs} args - Arguments to update many GameDecks.
     * @example
     * // Update many GameDecks
     * const gameDeck = await prisma.gameDeck.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GameDecks and only return the `id`
     * const gameDeckWithIdOnly = await prisma.gameDeck.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GameDeckUpdateManyAndReturnArgs>(args: SelectSubset<T, GameDeckUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameDeckPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GameDeck.
     * @param {GameDeckUpsertArgs} args - Arguments to update or create a GameDeck.
     * @example
     * // Update or create a GameDeck
     * const gameDeck = await prisma.gameDeck.upsert({
     *   create: {
     *     // ... data to create a GameDeck
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GameDeck we want to update
     *   }
     * })
     */
    upsert<T extends GameDeckUpsertArgs>(args: SelectSubset<T, GameDeckUpsertArgs<ExtArgs>>): Prisma__GameDeckClient<$Result.GetResult<Prisma.$GameDeckPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GameDecks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameDeckCountArgs} args - Arguments to filter GameDecks to count.
     * @example
     * // Count the number of GameDecks
     * const count = await prisma.gameDeck.count({
     *   where: {
     *     // ... the filter for the GameDecks we want to count
     *   }
     * })
    **/
    count<T extends GameDeckCountArgs>(
      args?: Subset<T, GameDeckCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GameDeckCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GameDeck.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameDeckAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GameDeckAggregateArgs>(args: Subset<T, GameDeckAggregateArgs>): Prisma.PrismaPromise<GetGameDeckAggregateType<T>>

    /**
     * Group by GameDeck.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameDeckGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GameDeckGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GameDeckGroupByArgs['orderBy'] }
        : { orderBy?: GameDeckGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GameDeckGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGameDeckGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GameDeck model
   */
  readonly fields: GameDeckFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GameDeck.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GameDeckClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    deck<T extends DeckDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DeckDefaultArgs<ExtArgs>>): Prisma__DeckClient<$Result.GetResult<Prisma.$DeckPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    game<T extends GameDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GameDefaultArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the GameDeck model
   */
  interface GameDeckFieldRefs {
    readonly id: FieldRef<"GameDeck", 'String'>
    readonly gameId: FieldRef<"GameDeck", 'String'>
    readonly deckId: FieldRef<"GameDeck", 'String'>
    readonly isWinner: FieldRef<"GameDeck", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * GameDeck findUnique
   */
  export type GameDeckFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameDeck
     */
    select?: GameDeckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameDeck
     */
    omit?: GameDeckOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameDeckInclude<ExtArgs> | null
    /**
     * Filter, which GameDeck to fetch.
     */
    where: GameDeckWhereUniqueInput
  }

  /**
   * GameDeck findUniqueOrThrow
   */
  export type GameDeckFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameDeck
     */
    select?: GameDeckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameDeck
     */
    omit?: GameDeckOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameDeckInclude<ExtArgs> | null
    /**
     * Filter, which GameDeck to fetch.
     */
    where: GameDeckWhereUniqueInput
  }

  /**
   * GameDeck findFirst
   */
  export type GameDeckFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameDeck
     */
    select?: GameDeckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameDeck
     */
    omit?: GameDeckOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameDeckInclude<ExtArgs> | null
    /**
     * Filter, which GameDeck to fetch.
     */
    where?: GameDeckWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameDecks to fetch.
     */
    orderBy?: GameDeckOrderByWithRelationInput | GameDeckOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GameDecks.
     */
    cursor?: GameDeckWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameDecks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameDecks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GameDecks.
     */
    distinct?: GameDeckScalarFieldEnum | GameDeckScalarFieldEnum[]
  }

  /**
   * GameDeck findFirstOrThrow
   */
  export type GameDeckFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameDeck
     */
    select?: GameDeckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameDeck
     */
    omit?: GameDeckOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameDeckInclude<ExtArgs> | null
    /**
     * Filter, which GameDeck to fetch.
     */
    where?: GameDeckWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameDecks to fetch.
     */
    orderBy?: GameDeckOrderByWithRelationInput | GameDeckOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GameDecks.
     */
    cursor?: GameDeckWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameDecks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameDecks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GameDecks.
     */
    distinct?: GameDeckScalarFieldEnum | GameDeckScalarFieldEnum[]
  }

  /**
   * GameDeck findMany
   */
  export type GameDeckFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameDeck
     */
    select?: GameDeckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameDeck
     */
    omit?: GameDeckOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameDeckInclude<ExtArgs> | null
    /**
     * Filter, which GameDecks to fetch.
     */
    where?: GameDeckWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameDecks to fetch.
     */
    orderBy?: GameDeckOrderByWithRelationInput | GameDeckOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GameDecks.
     */
    cursor?: GameDeckWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameDecks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameDecks.
     */
    skip?: number
    distinct?: GameDeckScalarFieldEnum | GameDeckScalarFieldEnum[]
  }

  /**
   * GameDeck create
   */
  export type GameDeckCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameDeck
     */
    select?: GameDeckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameDeck
     */
    omit?: GameDeckOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameDeckInclude<ExtArgs> | null
    /**
     * The data needed to create a GameDeck.
     */
    data: XOR<GameDeckCreateInput, GameDeckUncheckedCreateInput>
  }

  /**
   * GameDeck createMany
   */
  export type GameDeckCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GameDecks.
     */
    data: GameDeckCreateManyInput | GameDeckCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GameDeck createManyAndReturn
   */
  export type GameDeckCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameDeck
     */
    select?: GameDeckSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GameDeck
     */
    omit?: GameDeckOmit<ExtArgs> | null
    /**
     * The data used to create many GameDecks.
     */
    data: GameDeckCreateManyInput | GameDeckCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameDeckIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * GameDeck update
   */
  export type GameDeckUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameDeck
     */
    select?: GameDeckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameDeck
     */
    omit?: GameDeckOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameDeckInclude<ExtArgs> | null
    /**
     * The data needed to update a GameDeck.
     */
    data: XOR<GameDeckUpdateInput, GameDeckUncheckedUpdateInput>
    /**
     * Choose, which GameDeck to update.
     */
    where: GameDeckWhereUniqueInput
  }

  /**
   * GameDeck updateMany
   */
  export type GameDeckUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GameDecks.
     */
    data: XOR<GameDeckUpdateManyMutationInput, GameDeckUncheckedUpdateManyInput>
    /**
     * Filter which GameDecks to update
     */
    where?: GameDeckWhereInput
    /**
     * Limit how many GameDecks to update.
     */
    limit?: number
  }

  /**
   * GameDeck updateManyAndReturn
   */
  export type GameDeckUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameDeck
     */
    select?: GameDeckSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GameDeck
     */
    omit?: GameDeckOmit<ExtArgs> | null
    /**
     * The data used to update GameDecks.
     */
    data: XOR<GameDeckUpdateManyMutationInput, GameDeckUncheckedUpdateManyInput>
    /**
     * Filter which GameDecks to update
     */
    where?: GameDeckWhereInput
    /**
     * Limit how many GameDecks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameDeckIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * GameDeck upsert
   */
  export type GameDeckUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameDeck
     */
    select?: GameDeckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameDeck
     */
    omit?: GameDeckOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameDeckInclude<ExtArgs> | null
    /**
     * The filter to search for the GameDeck to update in case it exists.
     */
    where: GameDeckWhereUniqueInput
    /**
     * In case the GameDeck found by the `where` argument doesn't exist, create a new GameDeck with this data.
     */
    create: XOR<GameDeckCreateInput, GameDeckUncheckedCreateInput>
    /**
     * In case the GameDeck was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GameDeckUpdateInput, GameDeckUncheckedUpdateInput>
  }

  /**
   * GameDeck delete
   */
  export type GameDeckDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameDeck
     */
    select?: GameDeckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameDeck
     */
    omit?: GameDeckOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameDeckInclude<ExtArgs> | null
    /**
     * Filter which GameDeck to delete.
     */
    where: GameDeckWhereUniqueInput
  }

  /**
   * GameDeck deleteMany
   */
  export type GameDeckDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GameDecks to delete
     */
    where?: GameDeckWhereInput
    /**
     * Limit how many GameDecks to delete.
     */
    limit?: number
  }

  /**
   * GameDeck without action
   */
  export type GameDeckDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameDeck
     */
    select?: GameDeckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameDeck
     */
    omit?: GameDeckOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameDeckInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const PlayerScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PlayerScalarFieldEnum = (typeof PlayerScalarFieldEnum)[keyof typeof PlayerScalarFieldEnum]


  export const DeckScalarFieldEnum: {
    id: 'id',
    name: 'name',
    commanderName: 'commanderName',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    playerId: 'playerId'
  };

  export type DeckScalarFieldEnum = (typeof DeckScalarFieldEnum)[keyof typeof DeckScalarFieldEnum]


  export const PodScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PodScalarFieldEnum = (typeof PodScalarFieldEnum)[keyof typeof PodScalarFieldEnum]


  export const PlayerPodScalarFieldEnum: {
    id: 'id',
    playerId: 'playerId',
    podId: 'podId',
    createdAt: 'createdAt'
  };

  export type PlayerPodScalarFieldEnum = (typeof PlayerPodScalarFieldEnum)[keyof typeof PlayerPodScalarFieldEnum]


  export const GameScalarFieldEnum: {
    id: 'id',
    playedAt: 'playedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    podId: 'podId',
    winnerId: 'winnerId'
  };

  export type GameScalarFieldEnum = (typeof GameScalarFieldEnum)[keyof typeof GameScalarFieldEnum]


  export const GamePlayerScalarFieldEnum: {
    id: 'id',
    gameId: 'gameId',
    playerId: 'playerId'
  };

  export type GamePlayerScalarFieldEnum = (typeof GamePlayerScalarFieldEnum)[keyof typeof GamePlayerScalarFieldEnum]


  export const GameDeckScalarFieldEnum: {
    id: 'id',
    gameId: 'gameId',
    deckId: 'deckId',
    isWinner: 'isWinner'
  };

  export type GameDeckScalarFieldEnum = (typeof GameDeckScalarFieldEnum)[keyof typeof GameDeckScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type PlayerWhereInput = {
    AND?: PlayerWhereInput | PlayerWhereInput[]
    OR?: PlayerWhereInput[]
    NOT?: PlayerWhereInput | PlayerWhereInput[]
    id?: StringFilter<"Player"> | string
    name?: StringFilter<"Player"> | string
    createdAt?: DateTimeFilter<"Player"> | Date | string
    updatedAt?: DateTimeFilter<"Player"> | Date | string
    decks?: DeckListRelationFilter
    games?: GamePlayerListRelationFilter
    pods?: PlayerPodListRelationFilter
  }

  export type PlayerOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    decks?: DeckOrderByRelationAggregateInput
    games?: GamePlayerOrderByRelationAggregateInput
    pods?: PlayerPodOrderByRelationAggregateInput
  }

  export type PlayerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PlayerWhereInput | PlayerWhereInput[]
    OR?: PlayerWhereInput[]
    NOT?: PlayerWhereInput | PlayerWhereInput[]
    name?: StringFilter<"Player"> | string
    createdAt?: DateTimeFilter<"Player"> | Date | string
    updatedAt?: DateTimeFilter<"Player"> | Date | string
    decks?: DeckListRelationFilter
    games?: GamePlayerListRelationFilter
    pods?: PlayerPodListRelationFilter
  }, "id">

  export type PlayerOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PlayerCountOrderByAggregateInput
    _max?: PlayerMaxOrderByAggregateInput
    _min?: PlayerMinOrderByAggregateInput
  }

  export type PlayerScalarWhereWithAggregatesInput = {
    AND?: PlayerScalarWhereWithAggregatesInput | PlayerScalarWhereWithAggregatesInput[]
    OR?: PlayerScalarWhereWithAggregatesInput[]
    NOT?: PlayerScalarWhereWithAggregatesInput | PlayerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Player"> | string
    name?: StringWithAggregatesFilter<"Player"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Player"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Player"> | Date | string
  }

  export type DeckWhereInput = {
    AND?: DeckWhereInput | DeckWhereInput[]
    OR?: DeckWhereInput[]
    NOT?: DeckWhereInput | DeckWhereInput[]
    id?: StringFilter<"Deck"> | string
    name?: StringFilter<"Deck"> | string
    commanderName?: StringFilter<"Deck"> | string
    description?: StringNullableFilter<"Deck"> | string | null
    createdAt?: DateTimeFilter<"Deck"> | Date | string
    updatedAt?: DateTimeFilter<"Deck"> | Date | string
    playerId?: StringFilter<"Deck"> | string
    player?: XOR<PlayerScalarRelationFilter, PlayerWhereInput>
    games?: GameDeckListRelationFilter
  }

  export type DeckOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    commanderName?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    playerId?: SortOrder
    player?: PlayerOrderByWithRelationInput
    games?: GameDeckOrderByRelationAggregateInput
  }

  export type DeckWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DeckWhereInput | DeckWhereInput[]
    OR?: DeckWhereInput[]
    NOT?: DeckWhereInput | DeckWhereInput[]
    name?: StringFilter<"Deck"> | string
    commanderName?: StringFilter<"Deck"> | string
    description?: StringNullableFilter<"Deck"> | string | null
    createdAt?: DateTimeFilter<"Deck"> | Date | string
    updatedAt?: DateTimeFilter<"Deck"> | Date | string
    playerId?: StringFilter<"Deck"> | string
    player?: XOR<PlayerScalarRelationFilter, PlayerWhereInput>
    games?: GameDeckListRelationFilter
  }, "id">

  export type DeckOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    commanderName?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    playerId?: SortOrder
    _count?: DeckCountOrderByAggregateInput
    _max?: DeckMaxOrderByAggregateInput
    _min?: DeckMinOrderByAggregateInput
  }

  export type DeckScalarWhereWithAggregatesInput = {
    AND?: DeckScalarWhereWithAggregatesInput | DeckScalarWhereWithAggregatesInput[]
    OR?: DeckScalarWhereWithAggregatesInput[]
    NOT?: DeckScalarWhereWithAggregatesInput | DeckScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Deck"> | string
    name?: StringWithAggregatesFilter<"Deck"> | string
    commanderName?: StringWithAggregatesFilter<"Deck"> | string
    description?: StringNullableWithAggregatesFilter<"Deck"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Deck"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Deck"> | Date | string
    playerId?: StringWithAggregatesFilter<"Deck"> | string
  }

  export type PodWhereInput = {
    AND?: PodWhereInput | PodWhereInput[]
    OR?: PodWhereInput[]
    NOT?: PodWhereInput | PodWhereInput[]
    id?: StringFilter<"Pod"> | string
    name?: StringFilter<"Pod"> | string
    description?: StringNullableFilter<"Pod"> | string | null
    createdAt?: DateTimeFilter<"Pod"> | Date | string
    updatedAt?: DateTimeFilter<"Pod"> | Date | string
    games?: GameListRelationFilter
    players?: PlayerPodListRelationFilter
  }

  export type PodOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    games?: GameOrderByRelationAggregateInput
    players?: PlayerPodOrderByRelationAggregateInput
  }

  export type PodWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PodWhereInput | PodWhereInput[]
    OR?: PodWhereInput[]
    NOT?: PodWhereInput | PodWhereInput[]
    name?: StringFilter<"Pod"> | string
    description?: StringNullableFilter<"Pod"> | string | null
    createdAt?: DateTimeFilter<"Pod"> | Date | string
    updatedAt?: DateTimeFilter<"Pod"> | Date | string
    games?: GameListRelationFilter
    players?: PlayerPodListRelationFilter
  }, "id">

  export type PodOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PodCountOrderByAggregateInput
    _max?: PodMaxOrderByAggregateInput
    _min?: PodMinOrderByAggregateInput
  }

  export type PodScalarWhereWithAggregatesInput = {
    AND?: PodScalarWhereWithAggregatesInput | PodScalarWhereWithAggregatesInput[]
    OR?: PodScalarWhereWithAggregatesInput[]
    NOT?: PodScalarWhereWithAggregatesInput | PodScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Pod"> | string
    name?: StringWithAggregatesFilter<"Pod"> | string
    description?: StringNullableWithAggregatesFilter<"Pod"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Pod"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Pod"> | Date | string
  }

  export type PlayerPodWhereInput = {
    AND?: PlayerPodWhereInput | PlayerPodWhereInput[]
    OR?: PlayerPodWhereInput[]
    NOT?: PlayerPodWhereInput | PlayerPodWhereInput[]
    id?: StringFilter<"PlayerPod"> | string
    playerId?: StringFilter<"PlayerPod"> | string
    podId?: StringFilter<"PlayerPod"> | string
    createdAt?: DateTimeFilter<"PlayerPod"> | Date | string
    player?: XOR<PlayerScalarRelationFilter, PlayerWhereInput>
    pod?: XOR<PodScalarRelationFilter, PodWhereInput>
  }

  export type PlayerPodOrderByWithRelationInput = {
    id?: SortOrder
    playerId?: SortOrder
    podId?: SortOrder
    createdAt?: SortOrder
    player?: PlayerOrderByWithRelationInput
    pod?: PodOrderByWithRelationInput
  }

  export type PlayerPodWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    playerId_podId?: PlayerPodPlayerIdPodIdCompoundUniqueInput
    AND?: PlayerPodWhereInput | PlayerPodWhereInput[]
    OR?: PlayerPodWhereInput[]
    NOT?: PlayerPodWhereInput | PlayerPodWhereInput[]
    playerId?: StringFilter<"PlayerPod"> | string
    podId?: StringFilter<"PlayerPod"> | string
    createdAt?: DateTimeFilter<"PlayerPod"> | Date | string
    player?: XOR<PlayerScalarRelationFilter, PlayerWhereInput>
    pod?: XOR<PodScalarRelationFilter, PodWhereInput>
  }, "id" | "playerId_podId">

  export type PlayerPodOrderByWithAggregationInput = {
    id?: SortOrder
    playerId?: SortOrder
    podId?: SortOrder
    createdAt?: SortOrder
    _count?: PlayerPodCountOrderByAggregateInput
    _max?: PlayerPodMaxOrderByAggregateInput
    _min?: PlayerPodMinOrderByAggregateInput
  }

  export type PlayerPodScalarWhereWithAggregatesInput = {
    AND?: PlayerPodScalarWhereWithAggregatesInput | PlayerPodScalarWhereWithAggregatesInput[]
    OR?: PlayerPodScalarWhereWithAggregatesInput[]
    NOT?: PlayerPodScalarWhereWithAggregatesInput | PlayerPodScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PlayerPod"> | string
    playerId?: StringWithAggregatesFilter<"PlayerPod"> | string
    podId?: StringWithAggregatesFilter<"PlayerPod"> | string
    createdAt?: DateTimeWithAggregatesFilter<"PlayerPod"> | Date | string
  }

  export type GameWhereInput = {
    AND?: GameWhereInput | GameWhereInput[]
    OR?: GameWhereInput[]
    NOT?: GameWhereInput | GameWhereInput[]
    id?: StringFilter<"Game"> | string
    playedAt?: DateTimeFilter<"Game"> | Date | string
    createdAt?: DateTimeFilter<"Game"> | Date | string
    updatedAt?: DateTimeFilter<"Game"> | Date | string
    podId?: StringFilter<"Game"> | string
    winnerId?: StringNullableFilter<"Game"> | string | null
    pod?: XOR<PodScalarRelationFilter, PodWhereInput>
    decks?: GameDeckListRelationFilter
    players?: GamePlayerListRelationFilter
  }

  export type GameOrderByWithRelationInput = {
    id?: SortOrder
    playedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    podId?: SortOrder
    winnerId?: SortOrderInput | SortOrder
    pod?: PodOrderByWithRelationInput
    decks?: GameDeckOrderByRelationAggregateInput
    players?: GamePlayerOrderByRelationAggregateInput
  }

  export type GameWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GameWhereInput | GameWhereInput[]
    OR?: GameWhereInput[]
    NOT?: GameWhereInput | GameWhereInput[]
    playedAt?: DateTimeFilter<"Game"> | Date | string
    createdAt?: DateTimeFilter<"Game"> | Date | string
    updatedAt?: DateTimeFilter<"Game"> | Date | string
    podId?: StringFilter<"Game"> | string
    winnerId?: StringNullableFilter<"Game"> | string | null
    pod?: XOR<PodScalarRelationFilter, PodWhereInput>
    decks?: GameDeckListRelationFilter
    players?: GamePlayerListRelationFilter
  }, "id">

  export type GameOrderByWithAggregationInput = {
    id?: SortOrder
    playedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    podId?: SortOrder
    winnerId?: SortOrderInput | SortOrder
    _count?: GameCountOrderByAggregateInput
    _max?: GameMaxOrderByAggregateInput
    _min?: GameMinOrderByAggregateInput
  }

  export type GameScalarWhereWithAggregatesInput = {
    AND?: GameScalarWhereWithAggregatesInput | GameScalarWhereWithAggregatesInput[]
    OR?: GameScalarWhereWithAggregatesInput[]
    NOT?: GameScalarWhereWithAggregatesInput | GameScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Game"> | string
    playedAt?: DateTimeWithAggregatesFilter<"Game"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Game"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Game"> | Date | string
    podId?: StringWithAggregatesFilter<"Game"> | string
    winnerId?: StringNullableWithAggregatesFilter<"Game"> | string | null
  }

  export type GamePlayerWhereInput = {
    AND?: GamePlayerWhereInput | GamePlayerWhereInput[]
    OR?: GamePlayerWhereInput[]
    NOT?: GamePlayerWhereInput | GamePlayerWhereInput[]
    id?: StringFilter<"GamePlayer"> | string
    gameId?: StringFilter<"GamePlayer"> | string
    playerId?: StringFilter<"GamePlayer"> | string
    game?: XOR<GameScalarRelationFilter, GameWhereInput>
    player?: XOR<PlayerScalarRelationFilter, PlayerWhereInput>
  }

  export type GamePlayerOrderByWithRelationInput = {
    id?: SortOrder
    gameId?: SortOrder
    playerId?: SortOrder
    game?: GameOrderByWithRelationInput
    player?: PlayerOrderByWithRelationInput
  }

  export type GamePlayerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    gameId_playerId?: GamePlayerGameIdPlayerIdCompoundUniqueInput
    AND?: GamePlayerWhereInput | GamePlayerWhereInput[]
    OR?: GamePlayerWhereInput[]
    NOT?: GamePlayerWhereInput | GamePlayerWhereInput[]
    gameId?: StringFilter<"GamePlayer"> | string
    playerId?: StringFilter<"GamePlayer"> | string
    game?: XOR<GameScalarRelationFilter, GameWhereInput>
    player?: XOR<PlayerScalarRelationFilter, PlayerWhereInput>
  }, "id" | "gameId_playerId">

  export type GamePlayerOrderByWithAggregationInput = {
    id?: SortOrder
    gameId?: SortOrder
    playerId?: SortOrder
    _count?: GamePlayerCountOrderByAggregateInput
    _max?: GamePlayerMaxOrderByAggregateInput
    _min?: GamePlayerMinOrderByAggregateInput
  }

  export type GamePlayerScalarWhereWithAggregatesInput = {
    AND?: GamePlayerScalarWhereWithAggregatesInput | GamePlayerScalarWhereWithAggregatesInput[]
    OR?: GamePlayerScalarWhereWithAggregatesInput[]
    NOT?: GamePlayerScalarWhereWithAggregatesInput | GamePlayerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"GamePlayer"> | string
    gameId?: StringWithAggregatesFilter<"GamePlayer"> | string
    playerId?: StringWithAggregatesFilter<"GamePlayer"> | string
  }

  export type GameDeckWhereInput = {
    AND?: GameDeckWhereInput | GameDeckWhereInput[]
    OR?: GameDeckWhereInput[]
    NOT?: GameDeckWhereInput | GameDeckWhereInput[]
    id?: StringFilter<"GameDeck"> | string
    gameId?: StringFilter<"GameDeck"> | string
    deckId?: StringFilter<"GameDeck"> | string
    isWinner?: BoolFilter<"GameDeck"> | boolean
    deck?: XOR<DeckScalarRelationFilter, DeckWhereInput>
    game?: XOR<GameScalarRelationFilter, GameWhereInput>
  }

  export type GameDeckOrderByWithRelationInput = {
    id?: SortOrder
    gameId?: SortOrder
    deckId?: SortOrder
    isWinner?: SortOrder
    deck?: DeckOrderByWithRelationInput
    game?: GameOrderByWithRelationInput
  }

  export type GameDeckWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    gameId_deckId?: GameDeckGameIdDeckIdCompoundUniqueInput
    AND?: GameDeckWhereInput | GameDeckWhereInput[]
    OR?: GameDeckWhereInput[]
    NOT?: GameDeckWhereInput | GameDeckWhereInput[]
    gameId?: StringFilter<"GameDeck"> | string
    deckId?: StringFilter<"GameDeck"> | string
    isWinner?: BoolFilter<"GameDeck"> | boolean
    deck?: XOR<DeckScalarRelationFilter, DeckWhereInput>
    game?: XOR<GameScalarRelationFilter, GameWhereInput>
  }, "id" | "gameId_deckId">

  export type GameDeckOrderByWithAggregationInput = {
    id?: SortOrder
    gameId?: SortOrder
    deckId?: SortOrder
    isWinner?: SortOrder
    _count?: GameDeckCountOrderByAggregateInput
    _max?: GameDeckMaxOrderByAggregateInput
    _min?: GameDeckMinOrderByAggregateInput
  }

  export type GameDeckScalarWhereWithAggregatesInput = {
    AND?: GameDeckScalarWhereWithAggregatesInput | GameDeckScalarWhereWithAggregatesInput[]
    OR?: GameDeckScalarWhereWithAggregatesInput[]
    NOT?: GameDeckScalarWhereWithAggregatesInput | GameDeckScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"GameDeck"> | string
    gameId?: StringWithAggregatesFilter<"GameDeck"> | string
    deckId?: StringWithAggregatesFilter<"GameDeck"> | string
    isWinner?: BoolWithAggregatesFilter<"GameDeck"> | boolean
  }

  export type PlayerCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    decks?: DeckCreateNestedManyWithoutPlayerInput
    games?: GamePlayerCreateNestedManyWithoutPlayerInput
    pods?: PlayerPodCreateNestedManyWithoutPlayerInput
  }

  export type PlayerUncheckedCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    decks?: DeckUncheckedCreateNestedManyWithoutPlayerInput
    games?: GamePlayerUncheckedCreateNestedManyWithoutPlayerInput
    pods?: PlayerPodUncheckedCreateNestedManyWithoutPlayerInput
  }

  export type PlayerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    decks?: DeckUpdateManyWithoutPlayerNestedInput
    games?: GamePlayerUpdateManyWithoutPlayerNestedInput
    pods?: PlayerPodUpdateManyWithoutPlayerNestedInput
  }

  export type PlayerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    decks?: DeckUncheckedUpdateManyWithoutPlayerNestedInput
    games?: GamePlayerUncheckedUpdateManyWithoutPlayerNestedInput
    pods?: PlayerPodUncheckedUpdateManyWithoutPlayerNestedInput
  }

  export type PlayerCreateManyInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlayerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlayerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeckCreateInput = {
    id?: string
    name: string
    commanderName: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    player: PlayerCreateNestedOneWithoutDecksInput
    games?: GameDeckCreateNestedManyWithoutDeckInput
  }

  export type DeckUncheckedCreateInput = {
    id?: string
    name: string
    commanderName: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    playerId: string
    games?: GameDeckUncheckedCreateNestedManyWithoutDeckInput
  }

  export type DeckUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    commanderName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    player?: PlayerUpdateOneRequiredWithoutDecksNestedInput
    games?: GameDeckUpdateManyWithoutDeckNestedInput
  }

  export type DeckUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    commanderName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    playerId?: StringFieldUpdateOperationsInput | string
    games?: GameDeckUncheckedUpdateManyWithoutDeckNestedInput
  }

  export type DeckCreateManyInput = {
    id?: string
    name: string
    commanderName: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    playerId: string
  }

  export type DeckUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    commanderName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeckUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    commanderName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    playerId?: StringFieldUpdateOperationsInput | string
  }

  export type PodCreateInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    games?: GameCreateNestedManyWithoutPodInput
    players?: PlayerPodCreateNestedManyWithoutPodInput
  }

  export type PodUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    games?: GameUncheckedCreateNestedManyWithoutPodInput
    players?: PlayerPodUncheckedCreateNestedManyWithoutPodInput
  }

  export type PodUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    games?: GameUpdateManyWithoutPodNestedInput
    players?: PlayerPodUpdateManyWithoutPodNestedInput
  }

  export type PodUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    games?: GameUncheckedUpdateManyWithoutPodNestedInput
    players?: PlayerPodUncheckedUpdateManyWithoutPodNestedInput
  }

  export type PodCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PodUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PodUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlayerPodCreateInput = {
    id?: string
    createdAt?: Date | string
    player: PlayerCreateNestedOneWithoutPodsInput
    pod: PodCreateNestedOneWithoutPlayersInput
  }

  export type PlayerPodUncheckedCreateInput = {
    id?: string
    playerId: string
    podId: string
    createdAt?: Date | string
  }

  export type PlayerPodUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    player?: PlayerUpdateOneRequiredWithoutPodsNestedInput
    pod?: PodUpdateOneRequiredWithoutPlayersNestedInput
  }

  export type PlayerPodUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    playerId?: StringFieldUpdateOperationsInput | string
    podId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlayerPodCreateManyInput = {
    id?: string
    playerId: string
    podId: string
    createdAt?: Date | string
  }

  export type PlayerPodUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlayerPodUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    playerId?: StringFieldUpdateOperationsInput | string
    podId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameCreateInput = {
    id?: string
    playedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    winnerId?: string | null
    pod: PodCreateNestedOneWithoutGamesInput
    decks?: GameDeckCreateNestedManyWithoutGameInput
    players?: GamePlayerCreateNestedManyWithoutGameInput
  }

  export type GameUncheckedCreateInput = {
    id?: string
    playedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    podId: string
    winnerId?: string | null
    decks?: GameDeckUncheckedCreateNestedManyWithoutGameInput
    players?: GamePlayerUncheckedCreateNestedManyWithoutGameInput
  }

  export type GameUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    playedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    winnerId?: NullableStringFieldUpdateOperationsInput | string | null
    pod?: PodUpdateOneRequiredWithoutGamesNestedInput
    decks?: GameDeckUpdateManyWithoutGameNestedInput
    players?: GamePlayerUpdateManyWithoutGameNestedInput
  }

  export type GameUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    playedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    podId?: StringFieldUpdateOperationsInput | string
    winnerId?: NullableStringFieldUpdateOperationsInput | string | null
    decks?: GameDeckUncheckedUpdateManyWithoutGameNestedInput
    players?: GamePlayerUncheckedUpdateManyWithoutGameNestedInput
  }

  export type GameCreateManyInput = {
    id?: string
    playedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    podId: string
    winnerId?: string | null
  }

  export type GameUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    playedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    winnerId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GameUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    playedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    podId?: StringFieldUpdateOperationsInput | string
    winnerId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GamePlayerCreateInput = {
    id?: string
    game: GameCreateNestedOneWithoutPlayersInput
    player: PlayerCreateNestedOneWithoutGamesInput
  }

  export type GamePlayerUncheckedCreateInput = {
    id?: string
    gameId: string
    playerId: string
  }

  export type GamePlayerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    game?: GameUpdateOneRequiredWithoutPlayersNestedInput
    player?: PlayerUpdateOneRequiredWithoutGamesNestedInput
  }

  export type GamePlayerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameId?: StringFieldUpdateOperationsInput | string
    playerId?: StringFieldUpdateOperationsInput | string
  }

  export type GamePlayerCreateManyInput = {
    id?: string
    gameId: string
    playerId: string
  }

  export type GamePlayerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type GamePlayerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameId?: StringFieldUpdateOperationsInput | string
    playerId?: StringFieldUpdateOperationsInput | string
  }

  export type GameDeckCreateInput = {
    id?: string
    isWinner?: boolean
    deck: DeckCreateNestedOneWithoutGamesInput
    game: GameCreateNestedOneWithoutDecksInput
  }

  export type GameDeckUncheckedCreateInput = {
    id?: string
    gameId: string
    deckId: string
    isWinner?: boolean
  }

  export type GameDeckUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    isWinner?: BoolFieldUpdateOperationsInput | boolean
    deck?: DeckUpdateOneRequiredWithoutGamesNestedInput
    game?: GameUpdateOneRequiredWithoutDecksNestedInput
  }

  export type GameDeckUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameId?: StringFieldUpdateOperationsInput | string
    deckId?: StringFieldUpdateOperationsInput | string
    isWinner?: BoolFieldUpdateOperationsInput | boolean
  }

  export type GameDeckCreateManyInput = {
    id?: string
    gameId: string
    deckId: string
    isWinner?: boolean
  }

  export type GameDeckUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    isWinner?: BoolFieldUpdateOperationsInput | boolean
  }

  export type GameDeckUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameId?: StringFieldUpdateOperationsInput | string
    deckId?: StringFieldUpdateOperationsInput | string
    isWinner?: BoolFieldUpdateOperationsInput | boolean
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DeckListRelationFilter = {
    every?: DeckWhereInput
    some?: DeckWhereInput
    none?: DeckWhereInput
  }

  export type GamePlayerListRelationFilter = {
    every?: GamePlayerWhereInput
    some?: GamePlayerWhereInput
    none?: GamePlayerWhereInput
  }

  export type PlayerPodListRelationFilter = {
    every?: PlayerPodWhereInput
    some?: PlayerPodWhereInput
    none?: PlayerPodWhereInput
  }

  export type DeckOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GamePlayerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PlayerPodOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PlayerCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlayerMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlayerMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type PlayerScalarRelationFilter = {
    is?: PlayerWhereInput
    isNot?: PlayerWhereInput
  }

  export type GameDeckListRelationFilter = {
    every?: GameDeckWhereInput
    some?: GameDeckWhereInput
    none?: GameDeckWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type GameDeckOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DeckCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    commanderName?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    playerId?: SortOrder
  }

  export type DeckMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    commanderName?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    playerId?: SortOrder
  }

  export type DeckMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    commanderName?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    playerId?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type GameListRelationFilter = {
    every?: GameWhereInput
    some?: GameWhereInput
    none?: GameWhereInput
  }

  export type GameOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PodCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PodMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PodMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PodScalarRelationFilter = {
    is?: PodWhereInput
    isNot?: PodWhereInput
  }

  export type PlayerPodPlayerIdPodIdCompoundUniqueInput = {
    playerId: string
    podId: string
  }

  export type PlayerPodCountOrderByAggregateInput = {
    id?: SortOrder
    playerId?: SortOrder
    podId?: SortOrder
    createdAt?: SortOrder
  }

  export type PlayerPodMaxOrderByAggregateInput = {
    id?: SortOrder
    playerId?: SortOrder
    podId?: SortOrder
    createdAt?: SortOrder
  }

  export type PlayerPodMinOrderByAggregateInput = {
    id?: SortOrder
    playerId?: SortOrder
    podId?: SortOrder
    createdAt?: SortOrder
  }

  export type GameCountOrderByAggregateInput = {
    id?: SortOrder
    playedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    podId?: SortOrder
    winnerId?: SortOrder
  }

  export type GameMaxOrderByAggregateInput = {
    id?: SortOrder
    playedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    podId?: SortOrder
    winnerId?: SortOrder
  }

  export type GameMinOrderByAggregateInput = {
    id?: SortOrder
    playedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    podId?: SortOrder
    winnerId?: SortOrder
  }

  export type GameScalarRelationFilter = {
    is?: GameWhereInput
    isNot?: GameWhereInput
  }

  export type GamePlayerGameIdPlayerIdCompoundUniqueInput = {
    gameId: string
    playerId: string
  }

  export type GamePlayerCountOrderByAggregateInput = {
    id?: SortOrder
    gameId?: SortOrder
    playerId?: SortOrder
  }

  export type GamePlayerMaxOrderByAggregateInput = {
    id?: SortOrder
    gameId?: SortOrder
    playerId?: SortOrder
  }

  export type GamePlayerMinOrderByAggregateInput = {
    id?: SortOrder
    gameId?: SortOrder
    playerId?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DeckScalarRelationFilter = {
    is?: DeckWhereInput
    isNot?: DeckWhereInput
  }

  export type GameDeckGameIdDeckIdCompoundUniqueInput = {
    gameId: string
    deckId: string
  }

  export type GameDeckCountOrderByAggregateInput = {
    id?: SortOrder
    gameId?: SortOrder
    deckId?: SortOrder
    isWinner?: SortOrder
  }

  export type GameDeckMaxOrderByAggregateInput = {
    id?: SortOrder
    gameId?: SortOrder
    deckId?: SortOrder
    isWinner?: SortOrder
  }

  export type GameDeckMinOrderByAggregateInput = {
    id?: SortOrder
    gameId?: SortOrder
    deckId?: SortOrder
    isWinner?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DeckCreateNestedManyWithoutPlayerInput = {
    create?: XOR<DeckCreateWithoutPlayerInput, DeckUncheckedCreateWithoutPlayerInput> | DeckCreateWithoutPlayerInput[] | DeckUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: DeckCreateOrConnectWithoutPlayerInput | DeckCreateOrConnectWithoutPlayerInput[]
    createMany?: DeckCreateManyPlayerInputEnvelope
    connect?: DeckWhereUniqueInput | DeckWhereUniqueInput[]
  }

  export type GamePlayerCreateNestedManyWithoutPlayerInput = {
    create?: XOR<GamePlayerCreateWithoutPlayerInput, GamePlayerUncheckedCreateWithoutPlayerInput> | GamePlayerCreateWithoutPlayerInput[] | GamePlayerUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: GamePlayerCreateOrConnectWithoutPlayerInput | GamePlayerCreateOrConnectWithoutPlayerInput[]
    createMany?: GamePlayerCreateManyPlayerInputEnvelope
    connect?: GamePlayerWhereUniqueInput | GamePlayerWhereUniqueInput[]
  }

  export type PlayerPodCreateNestedManyWithoutPlayerInput = {
    create?: XOR<PlayerPodCreateWithoutPlayerInput, PlayerPodUncheckedCreateWithoutPlayerInput> | PlayerPodCreateWithoutPlayerInput[] | PlayerPodUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: PlayerPodCreateOrConnectWithoutPlayerInput | PlayerPodCreateOrConnectWithoutPlayerInput[]
    createMany?: PlayerPodCreateManyPlayerInputEnvelope
    connect?: PlayerPodWhereUniqueInput | PlayerPodWhereUniqueInput[]
  }

  export type DeckUncheckedCreateNestedManyWithoutPlayerInput = {
    create?: XOR<DeckCreateWithoutPlayerInput, DeckUncheckedCreateWithoutPlayerInput> | DeckCreateWithoutPlayerInput[] | DeckUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: DeckCreateOrConnectWithoutPlayerInput | DeckCreateOrConnectWithoutPlayerInput[]
    createMany?: DeckCreateManyPlayerInputEnvelope
    connect?: DeckWhereUniqueInput | DeckWhereUniqueInput[]
  }

  export type GamePlayerUncheckedCreateNestedManyWithoutPlayerInput = {
    create?: XOR<GamePlayerCreateWithoutPlayerInput, GamePlayerUncheckedCreateWithoutPlayerInput> | GamePlayerCreateWithoutPlayerInput[] | GamePlayerUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: GamePlayerCreateOrConnectWithoutPlayerInput | GamePlayerCreateOrConnectWithoutPlayerInput[]
    createMany?: GamePlayerCreateManyPlayerInputEnvelope
    connect?: GamePlayerWhereUniqueInput | GamePlayerWhereUniqueInput[]
  }

  export type PlayerPodUncheckedCreateNestedManyWithoutPlayerInput = {
    create?: XOR<PlayerPodCreateWithoutPlayerInput, PlayerPodUncheckedCreateWithoutPlayerInput> | PlayerPodCreateWithoutPlayerInput[] | PlayerPodUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: PlayerPodCreateOrConnectWithoutPlayerInput | PlayerPodCreateOrConnectWithoutPlayerInput[]
    createMany?: PlayerPodCreateManyPlayerInputEnvelope
    connect?: PlayerPodWhereUniqueInput | PlayerPodWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type DeckUpdateManyWithoutPlayerNestedInput = {
    create?: XOR<DeckCreateWithoutPlayerInput, DeckUncheckedCreateWithoutPlayerInput> | DeckCreateWithoutPlayerInput[] | DeckUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: DeckCreateOrConnectWithoutPlayerInput | DeckCreateOrConnectWithoutPlayerInput[]
    upsert?: DeckUpsertWithWhereUniqueWithoutPlayerInput | DeckUpsertWithWhereUniqueWithoutPlayerInput[]
    createMany?: DeckCreateManyPlayerInputEnvelope
    set?: DeckWhereUniqueInput | DeckWhereUniqueInput[]
    disconnect?: DeckWhereUniqueInput | DeckWhereUniqueInput[]
    delete?: DeckWhereUniqueInput | DeckWhereUniqueInput[]
    connect?: DeckWhereUniqueInput | DeckWhereUniqueInput[]
    update?: DeckUpdateWithWhereUniqueWithoutPlayerInput | DeckUpdateWithWhereUniqueWithoutPlayerInput[]
    updateMany?: DeckUpdateManyWithWhereWithoutPlayerInput | DeckUpdateManyWithWhereWithoutPlayerInput[]
    deleteMany?: DeckScalarWhereInput | DeckScalarWhereInput[]
  }

  export type GamePlayerUpdateManyWithoutPlayerNestedInput = {
    create?: XOR<GamePlayerCreateWithoutPlayerInput, GamePlayerUncheckedCreateWithoutPlayerInput> | GamePlayerCreateWithoutPlayerInput[] | GamePlayerUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: GamePlayerCreateOrConnectWithoutPlayerInput | GamePlayerCreateOrConnectWithoutPlayerInput[]
    upsert?: GamePlayerUpsertWithWhereUniqueWithoutPlayerInput | GamePlayerUpsertWithWhereUniqueWithoutPlayerInput[]
    createMany?: GamePlayerCreateManyPlayerInputEnvelope
    set?: GamePlayerWhereUniqueInput | GamePlayerWhereUniqueInput[]
    disconnect?: GamePlayerWhereUniqueInput | GamePlayerWhereUniqueInput[]
    delete?: GamePlayerWhereUniqueInput | GamePlayerWhereUniqueInput[]
    connect?: GamePlayerWhereUniqueInput | GamePlayerWhereUniqueInput[]
    update?: GamePlayerUpdateWithWhereUniqueWithoutPlayerInput | GamePlayerUpdateWithWhereUniqueWithoutPlayerInput[]
    updateMany?: GamePlayerUpdateManyWithWhereWithoutPlayerInput | GamePlayerUpdateManyWithWhereWithoutPlayerInput[]
    deleteMany?: GamePlayerScalarWhereInput | GamePlayerScalarWhereInput[]
  }

  export type PlayerPodUpdateManyWithoutPlayerNestedInput = {
    create?: XOR<PlayerPodCreateWithoutPlayerInput, PlayerPodUncheckedCreateWithoutPlayerInput> | PlayerPodCreateWithoutPlayerInput[] | PlayerPodUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: PlayerPodCreateOrConnectWithoutPlayerInput | PlayerPodCreateOrConnectWithoutPlayerInput[]
    upsert?: PlayerPodUpsertWithWhereUniqueWithoutPlayerInput | PlayerPodUpsertWithWhereUniqueWithoutPlayerInput[]
    createMany?: PlayerPodCreateManyPlayerInputEnvelope
    set?: PlayerPodWhereUniqueInput | PlayerPodWhereUniqueInput[]
    disconnect?: PlayerPodWhereUniqueInput | PlayerPodWhereUniqueInput[]
    delete?: PlayerPodWhereUniqueInput | PlayerPodWhereUniqueInput[]
    connect?: PlayerPodWhereUniqueInput | PlayerPodWhereUniqueInput[]
    update?: PlayerPodUpdateWithWhereUniqueWithoutPlayerInput | PlayerPodUpdateWithWhereUniqueWithoutPlayerInput[]
    updateMany?: PlayerPodUpdateManyWithWhereWithoutPlayerInput | PlayerPodUpdateManyWithWhereWithoutPlayerInput[]
    deleteMany?: PlayerPodScalarWhereInput | PlayerPodScalarWhereInput[]
  }

  export type DeckUncheckedUpdateManyWithoutPlayerNestedInput = {
    create?: XOR<DeckCreateWithoutPlayerInput, DeckUncheckedCreateWithoutPlayerInput> | DeckCreateWithoutPlayerInput[] | DeckUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: DeckCreateOrConnectWithoutPlayerInput | DeckCreateOrConnectWithoutPlayerInput[]
    upsert?: DeckUpsertWithWhereUniqueWithoutPlayerInput | DeckUpsertWithWhereUniqueWithoutPlayerInput[]
    createMany?: DeckCreateManyPlayerInputEnvelope
    set?: DeckWhereUniqueInput | DeckWhereUniqueInput[]
    disconnect?: DeckWhereUniqueInput | DeckWhereUniqueInput[]
    delete?: DeckWhereUniqueInput | DeckWhereUniqueInput[]
    connect?: DeckWhereUniqueInput | DeckWhereUniqueInput[]
    update?: DeckUpdateWithWhereUniqueWithoutPlayerInput | DeckUpdateWithWhereUniqueWithoutPlayerInput[]
    updateMany?: DeckUpdateManyWithWhereWithoutPlayerInput | DeckUpdateManyWithWhereWithoutPlayerInput[]
    deleteMany?: DeckScalarWhereInput | DeckScalarWhereInput[]
  }

  export type GamePlayerUncheckedUpdateManyWithoutPlayerNestedInput = {
    create?: XOR<GamePlayerCreateWithoutPlayerInput, GamePlayerUncheckedCreateWithoutPlayerInput> | GamePlayerCreateWithoutPlayerInput[] | GamePlayerUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: GamePlayerCreateOrConnectWithoutPlayerInput | GamePlayerCreateOrConnectWithoutPlayerInput[]
    upsert?: GamePlayerUpsertWithWhereUniqueWithoutPlayerInput | GamePlayerUpsertWithWhereUniqueWithoutPlayerInput[]
    createMany?: GamePlayerCreateManyPlayerInputEnvelope
    set?: GamePlayerWhereUniqueInput | GamePlayerWhereUniqueInput[]
    disconnect?: GamePlayerWhereUniqueInput | GamePlayerWhereUniqueInput[]
    delete?: GamePlayerWhereUniqueInput | GamePlayerWhereUniqueInput[]
    connect?: GamePlayerWhereUniqueInput | GamePlayerWhereUniqueInput[]
    update?: GamePlayerUpdateWithWhereUniqueWithoutPlayerInput | GamePlayerUpdateWithWhereUniqueWithoutPlayerInput[]
    updateMany?: GamePlayerUpdateManyWithWhereWithoutPlayerInput | GamePlayerUpdateManyWithWhereWithoutPlayerInput[]
    deleteMany?: GamePlayerScalarWhereInput | GamePlayerScalarWhereInput[]
  }

  export type PlayerPodUncheckedUpdateManyWithoutPlayerNestedInput = {
    create?: XOR<PlayerPodCreateWithoutPlayerInput, PlayerPodUncheckedCreateWithoutPlayerInput> | PlayerPodCreateWithoutPlayerInput[] | PlayerPodUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: PlayerPodCreateOrConnectWithoutPlayerInput | PlayerPodCreateOrConnectWithoutPlayerInput[]
    upsert?: PlayerPodUpsertWithWhereUniqueWithoutPlayerInput | PlayerPodUpsertWithWhereUniqueWithoutPlayerInput[]
    createMany?: PlayerPodCreateManyPlayerInputEnvelope
    set?: PlayerPodWhereUniqueInput | PlayerPodWhereUniqueInput[]
    disconnect?: PlayerPodWhereUniqueInput | PlayerPodWhereUniqueInput[]
    delete?: PlayerPodWhereUniqueInput | PlayerPodWhereUniqueInput[]
    connect?: PlayerPodWhereUniqueInput | PlayerPodWhereUniqueInput[]
    update?: PlayerPodUpdateWithWhereUniqueWithoutPlayerInput | PlayerPodUpdateWithWhereUniqueWithoutPlayerInput[]
    updateMany?: PlayerPodUpdateManyWithWhereWithoutPlayerInput | PlayerPodUpdateManyWithWhereWithoutPlayerInput[]
    deleteMany?: PlayerPodScalarWhereInput | PlayerPodScalarWhereInput[]
  }

  export type PlayerCreateNestedOneWithoutDecksInput = {
    create?: XOR<PlayerCreateWithoutDecksInput, PlayerUncheckedCreateWithoutDecksInput>
    connectOrCreate?: PlayerCreateOrConnectWithoutDecksInput
    connect?: PlayerWhereUniqueInput
  }

  export type GameDeckCreateNestedManyWithoutDeckInput = {
    create?: XOR<GameDeckCreateWithoutDeckInput, GameDeckUncheckedCreateWithoutDeckInput> | GameDeckCreateWithoutDeckInput[] | GameDeckUncheckedCreateWithoutDeckInput[]
    connectOrCreate?: GameDeckCreateOrConnectWithoutDeckInput | GameDeckCreateOrConnectWithoutDeckInput[]
    createMany?: GameDeckCreateManyDeckInputEnvelope
    connect?: GameDeckWhereUniqueInput | GameDeckWhereUniqueInput[]
  }

  export type GameDeckUncheckedCreateNestedManyWithoutDeckInput = {
    create?: XOR<GameDeckCreateWithoutDeckInput, GameDeckUncheckedCreateWithoutDeckInput> | GameDeckCreateWithoutDeckInput[] | GameDeckUncheckedCreateWithoutDeckInput[]
    connectOrCreate?: GameDeckCreateOrConnectWithoutDeckInput | GameDeckCreateOrConnectWithoutDeckInput[]
    createMany?: GameDeckCreateManyDeckInputEnvelope
    connect?: GameDeckWhereUniqueInput | GameDeckWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type PlayerUpdateOneRequiredWithoutDecksNestedInput = {
    create?: XOR<PlayerCreateWithoutDecksInput, PlayerUncheckedCreateWithoutDecksInput>
    connectOrCreate?: PlayerCreateOrConnectWithoutDecksInput
    upsert?: PlayerUpsertWithoutDecksInput
    connect?: PlayerWhereUniqueInput
    update?: XOR<XOR<PlayerUpdateToOneWithWhereWithoutDecksInput, PlayerUpdateWithoutDecksInput>, PlayerUncheckedUpdateWithoutDecksInput>
  }

  export type GameDeckUpdateManyWithoutDeckNestedInput = {
    create?: XOR<GameDeckCreateWithoutDeckInput, GameDeckUncheckedCreateWithoutDeckInput> | GameDeckCreateWithoutDeckInput[] | GameDeckUncheckedCreateWithoutDeckInput[]
    connectOrCreate?: GameDeckCreateOrConnectWithoutDeckInput | GameDeckCreateOrConnectWithoutDeckInput[]
    upsert?: GameDeckUpsertWithWhereUniqueWithoutDeckInput | GameDeckUpsertWithWhereUniqueWithoutDeckInput[]
    createMany?: GameDeckCreateManyDeckInputEnvelope
    set?: GameDeckWhereUniqueInput | GameDeckWhereUniqueInput[]
    disconnect?: GameDeckWhereUniqueInput | GameDeckWhereUniqueInput[]
    delete?: GameDeckWhereUniqueInput | GameDeckWhereUniqueInput[]
    connect?: GameDeckWhereUniqueInput | GameDeckWhereUniqueInput[]
    update?: GameDeckUpdateWithWhereUniqueWithoutDeckInput | GameDeckUpdateWithWhereUniqueWithoutDeckInput[]
    updateMany?: GameDeckUpdateManyWithWhereWithoutDeckInput | GameDeckUpdateManyWithWhereWithoutDeckInput[]
    deleteMany?: GameDeckScalarWhereInput | GameDeckScalarWhereInput[]
  }

  export type GameDeckUncheckedUpdateManyWithoutDeckNestedInput = {
    create?: XOR<GameDeckCreateWithoutDeckInput, GameDeckUncheckedCreateWithoutDeckInput> | GameDeckCreateWithoutDeckInput[] | GameDeckUncheckedCreateWithoutDeckInput[]
    connectOrCreate?: GameDeckCreateOrConnectWithoutDeckInput | GameDeckCreateOrConnectWithoutDeckInput[]
    upsert?: GameDeckUpsertWithWhereUniqueWithoutDeckInput | GameDeckUpsertWithWhereUniqueWithoutDeckInput[]
    createMany?: GameDeckCreateManyDeckInputEnvelope
    set?: GameDeckWhereUniqueInput | GameDeckWhereUniqueInput[]
    disconnect?: GameDeckWhereUniqueInput | GameDeckWhereUniqueInput[]
    delete?: GameDeckWhereUniqueInput | GameDeckWhereUniqueInput[]
    connect?: GameDeckWhereUniqueInput | GameDeckWhereUniqueInput[]
    update?: GameDeckUpdateWithWhereUniqueWithoutDeckInput | GameDeckUpdateWithWhereUniqueWithoutDeckInput[]
    updateMany?: GameDeckUpdateManyWithWhereWithoutDeckInput | GameDeckUpdateManyWithWhereWithoutDeckInput[]
    deleteMany?: GameDeckScalarWhereInput | GameDeckScalarWhereInput[]
  }

  export type GameCreateNestedManyWithoutPodInput = {
    create?: XOR<GameCreateWithoutPodInput, GameUncheckedCreateWithoutPodInput> | GameCreateWithoutPodInput[] | GameUncheckedCreateWithoutPodInput[]
    connectOrCreate?: GameCreateOrConnectWithoutPodInput | GameCreateOrConnectWithoutPodInput[]
    createMany?: GameCreateManyPodInputEnvelope
    connect?: GameWhereUniqueInput | GameWhereUniqueInput[]
  }

  export type PlayerPodCreateNestedManyWithoutPodInput = {
    create?: XOR<PlayerPodCreateWithoutPodInput, PlayerPodUncheckedCreateWithoutPodInput> | PlayerPodCreateWithoutPodInput[] | PlayerPodUncheckedCreateWithoutPodInput[]
    connectOrCreate?: PlayerPodCreateOrConnectWithoutPodInput | PlayerPodCreateOrConnectWithoutPodInput[]
    createMany?: PlayerPodCreateManyPodInputEnvelope
    connect?: PlayerPodWhereUniqueInput | PlayerPodWhereUniqueInput[]
  }

  export type GameUncheckedCreateNestedManyWithoutPodInput = {
    create?: XOR<GameCreateWithoutPodInput, GameUncheckedCreateWithoutPodInput> | GameCreateWithoutPodInput[] | GameUncheckedCreateWithoutPodInput[]
    connectOrCreate?: GameCreateOrConnectWithoutPodInput | GameCreateOrConnectWithoutPodInput[]
    createMany?: GameCreateManyPodInputEnvelope
    connect?: GameWhereUniqueInput | GameWhereUniqueInput[]
  }

  export type PlayerPodUncheckedCreateNestedManyWithoutPodInput = {
    create?: XOR<PlayerPodCreateWithoutPodInput, PlayerPodUncheckedCreateWithoutPodInput> | PlayerPodCreateWithoutPodInput[] | PlayerPodUncheckedCreateWithoutPodInput[]
    connectOrCreate?: PlayerPodCreateOrConnectWithoutPodInput | PlayerPodCreateOrConnectWithoutPodInput[]
    createMany?: PlayerPodCreateManyPodInputEnvelope
    connect?: PlayerPodWhereUniqueInput | PlayerPodWhereUniqueInput[]
  }

  export type GameUpdateManyWithoutPodNestedInput = {
    create?: XOR<GameCreateWithoutPodInput, GameUncheckedCreateWithoutPodInput> | GameCreateWithoutPodInput[] | GameUncheckedCreateWithoutPodInput[]
    connectOrCreate?: GameCreateOrConnectWithoutPodInput | GameCreateOrConnectWithoutPodInput[]
    upsert?: GameUpsertWithWhereUniqueWithoutPodInput | GameUpsertWithWhereUniqueWithoutPodInput[]
    createMany?: GameCreateManyPodInputEnvelope
    set?: GameWhereUniqueInput | GameWhereUniqueInput[]
    disconnect?: GameWhereUniqueInput | GameWhereUniqueInput[]
    delete?: GameWhereUniqueInput | GameWhereUniqueInput[]
    connect?: GameWhereUniqueInput | GameWhereUniqueInput[]
    update?: GameUpdateWithWhereUniqueWithoutPodInput | GameUpdateWithWhereUniqueWithoutPodInput[]
    updateMany?: GameUpdateManyWithWhereWithoutPodInput | GameUpdateManyWithWhereWithoutPodInput[]
    deleteMany?: GameScalarWhereInput | GameScalarWhereInput[]
  }

  export type PlayerPodUpdateManyWithoutPodNestedInput = {
    create?: XOR<PlayerPodCreateWithoutPodInput, PlayerPodUncheckedCreateWithoutPodInput> | PlayerPodCreateWithoutPodInput[] | PlayerPodUncheckedCreateWithoutPodInput[]
    connectOrCreate?: PlayerPodCreateOrConnectWithoutPodInput | PlayerPodCreateOrConnectWithoutPodInput[]
    upsert?: PlayerPodUpsertWithWhereUniqueWithoutPodInput | PlayerPodUpsertWithWhereUniqueWithoutPodInput[]
    createMany?: PlayerPodCreateManyPodInputEnvelope
    set?: PlayerPodWhereUniqueInput | PlayerPodWhereUniqueInput[]
    disconnect?: PlayerPodWhereUniqueInput | PlayerPodWhereUniqueInput[]
    delete?: PlayerPodWhereUniqueInput | PlayerPodWhereUniqueInput[]
    connect?: PlayerPodWhereUniqueInput | PlayerPodWhereUniqueInput[]
    update?: PlayerPodUpdateWithWhereUniqueWithoutPodInput | PlayerPodUpdateWithWhereUniqueWithoutPodInput[]
    updateMany?: PlayerPodUpdateManyWithWhereWithoutPodInput | PlayerPodUpdateManyWithWhereWithoutPodInput[]
    deleteMany?: PlayerPodScalarWhereInput | PlayerPodScalarWhereInput[]
  }

  export type GameUncheckedUpdateManyWithoutPodNestedInput = {
    create?: XOR<GameCreateWithoutPodInput, GameUncheckedCreateWithoutPodInput> | GameCreateWithoutPodInput[] | GameUncheckedCreateWithoutPodInput[]
    connectOrCreate?: GameCreateOrConnectWithoutPodInput | GameCreateOrConnectWithoutPodInput[]
    upsert?: GameUpsertWithWhereUniqueWithoutPodInput | GameUpsertWithWhereUniqueWithoutPodInput[]
    createMany?: GameCreateManyPodInputEnvelope
    set?: GameWhereUniqueInput | GameWhereUniqueInput[]
    disconnect?: GameWhereUniqueInput | GameWhereUniqueInput[]
    delete?: GameWhereUniqueInput | GameWhereUniqueInput[]
    connect?: GameWhereUniqueInput | GameWhereUniqueInput[]
    update?: GameUpdateWithWhereUniqueWithoutPodInput | GameUpdateWithWhereUniqueWithoutPodInput[]
    updateMany?: GameUpdateManyWithWhereWithoutPodInput | GameUpdateManyWithWhereWithoutPodInput[]
    deleteMany?: GameScalarWhereInput | GameScalarWhereInput[]
  }

  export type PlayerPodUncheckedUpdateManyWithoutPodNestedInput = {
    create?: XOR<PlayerPodCreateWithoutPodInput, PlayerPodUncheckedCreateWithoutPodInput> | PlayerPodCreateWithoutPodInput[] | PlayerPodUncheckedCreateWithoutPodInput[]
    connectOrCreate?: PlayerPodCreateOrConnectWithoutPodInput | PlayerPodCreateOrConnectWithoutPodInput[]
    upsert?: PlayerPodUpsertWithWhereUniqueWithoutPodInput | PlayerPodUpsertWithWhereUniqueWithoutPodInput[]
    createMany?: PlayerPodCreateManyPodInputEnvelope
    set?: PlayerPodWhereUniqueInput | PlayerPodWhereUniqueInput[]
    disconnect?: PlayerPodWhereUniqueInput | PlayerPodWhereUniqueInput[]
    delete?: PlayerPodWhereUniqueInput | PlayerPodWhereUniqueInput[]
    connect?: PlayerPodWhereUniqueInput | PlayerPodWhereUniqueInput[]
    update?: PlayerPodUpdateWithWhereUniqueWithoutPodInput | PlayerPodUpdateWithWhereUniqueWithoutPodInput[]
    updateMany?: PlayerPodUpdateManyWithWhereWithoutPodInput | PlayerPodUpdateManyWithWhereWithoutPodInput[]
    deleteMany?: PlayerPodScalarWhereInput | PlayerPodScalarWhereInput[]
  }

  export type PlayerCreateNestedOneWithoutPodsInput = {
    create?: XOR<PlayerCreateWithoutPodsInput, PlayerUncheckedCreateWithoutPodsInput>
    connectOrCreate?: PlayerCreateOrConnectWithoutPodsInput
    connect?: PlayerWhereUniqueInput
  }

  export type PodCreateNestedOneWithoutPlayersInput = {
    create?: XOR<PodCreateWithoutPlayersInput, PodUncheckedCreateWithoutPlayersInput>
    connectOrCreate?: PodCreateOrConnectWithoutPlayersInput
    connect?: PodWhereUniqueInput
  }

  export type PlayerUpdateOneRequiredWithoutPodsNestedInput = {
    create?: XOR<PlayerCreateWithoutPodsInput, PlayerUncheckedCreateWithoutPodsInput>
    connectOrCreate?: PlayerCreateOrConnectWithoutPodsInput
    upsert?: PlayerUpsertWithoutPodsInput
    connect?: PlayerWhereUniqueInput
    update?: XOR<XOR<PlayerUpdateToOneWithWhereWithoutPodsInput, PlayerUpdateWithoutPodsInput>, PlayerUncheckedUpdateWithoutPodsInput>
  }

  export type PodUpdateOneRequiredWithoutPlayersNestedInput = {
    create?: XOR<PodCreateWithoutPlayersInput, PodUncheckedCreateWithoutPlayersInput>
    connectOrCreate?: PodCreateOrConnectWithoutPlayersInput
    upsert?: PodUpsertWithoutPlayersInput
    connect?: PodWhereUniqueInput
    update?: XOR<XOR<PodUpdateToOneWithWhereWithoutPlayersInput, PodUpdateWithoutPlayersInput>, PodUncheckedUpdateWithoutPlayersInput>
  }

  export type PodCreateNestedOneWithoutGamesInput = {
    create?: XOR<PodCreateWithoutGamesInput, PodUncheckedCreateWithoutGamesInput>
    connectOrCreate?: PodCreateOrConnectWithoutGamesInput
    connect?: PodWhereUniqueInput
  }

  export type GameDeckCreateNestedManyWithoutGameInput = {
    create?: XOR<GameDeckCreateWithoutGameInput, GameDeckUncheckedCreateWithoutGameInput> | GameDeckCreateWithoutGameInput[] | GameDeckUncheckedCreateWithoutGameInput[]
    connectOrCreate?: GameDeckCreateOrConnectWithoutGameInput | GameDeckCreateOrConnectWithoutGameInput[]
    createMany?: GameDeckCreateManyGameInputEnvelope
    connect?: GameDeckWhereUniqueInput | GameDeckWhereUniqueInput[]
  }

  export type GamePlayerCreateNestedManyWithoutGameInput = {
    create?: XOR<GamePlayerCreateWithoutGameInput, GamePlayerUncheckedCreateWithoutGameInput> | GamePlayerCreateWithoutGameInput[] | GamePlayerUncheckedCreateWithoutGameInput[]
    connectOrCreate?: GamePlayerCreateOrConnectWithoutGameInput | GamePlayerCreateOrConnectWithoutGameInput[]
    createMany?: GamePlayerCreateManyGameInputEnvelope
    connect?: GamePlayerWhereUniqueInput | GamePlayerWhereUniqueInput[]
  }

  export type GameDeckUncheckedCreateNestedManyWithoutGameInput = {
    create?: XOR<GameDeckCreateWithoutGameInput, GameDeckUncheckedCreateWithoutGameInput> | GameDeckCreateWithoutGameInput[] | GameDeckUncheckedCreateWithoutGameInput[]
    connectOrCreate?: GameDeckCreateOrConnectWithoutGameInput | GameDeckCreateOrConnectWithoutGameInput[]
    createMany?: GameDeckCreateManyGameInputEnvelope
    connect?: GameDeckWhereUniqueInput | GameDeckWhereUniqueInput[]
  }

  export type GamePlayerUncheckedCreateNestedManyWithoutGameInput = {
    create?: XOR<GamePlayerCreateWithoutGameInput, GamePlayerUncheckedCreateWithoutGameInput> | GamePlayerCreateWithoutGameInput[] | GamePlayerUncheckedCreateWithoutGameInput[]
    connectOrCreate?: GamePlayerCreateOrConnectWithoutGameInput | GamePlayerCreateOrConnectWithoutGameInput[]
    createMany?: GamePlayerCreateManyGameInputEnvelope
    connect?: GamePlayerWhereUniqueInput | GamePlayerWhereUniqueInput[]
  }

  export type PodUpdateOneRequiredWithoutGamesNestedInput = {
    create?: XOR<PodCreateWithoutGamesInput, PodUncheckedCreateWithoutGamesInput>
    connectOrCreate?: PodCreateOrConnectWithoutGamesInput
    upsert?: PodUpsertWithoutGamesInput
    connect?: PodWhereUniqueInput
    update?: XOR<XOR<PodUpdateToOneWithWhereWithoutGamesInput, PodUpdateWithoutGamesInput>, PodUncheckedUpdateWithoutGamesInput>
  }

  export type GameDeckUpdateManyWithoutGameNestedInput = {
    create?: XOR<GameDeckCreateWithoutGameInput, GameDeckUncheckedCreateWithoutGameInput> | GameDeckCreateWithoutGameInput[] | GameDeckUncheckedCreateWithoutGameInput[]
    connectOrCreate?: GameDeckCreateOrConnectWithoutGameInput | GameDeckCreateOrConnectWithoutGameInput[]
    upsert?: GameDeckUpsertWithWhereUniqueWithoutGameInput | GameDeckUpsertWithWhereUniqueWithoutGameInput[]
    createMany?: GameDeckCreateManyGameInputEnvelope
    set?: GameDeckWhereUniqueInput | GameDeckWhereUniqueInput[]
    disconnect?: GameDeckWhereUniqueInput | GameDeckWhereUniqueInput[]
    delete?: GameDeckWhereUniqueInput | GameDeckWhereUniqueInput[]
    connect?: GameDeckWhereUniqueInput | GameDeckWhereUniqueInput[]
    update?: GameDeckUpdateWithWhereUniqueWithoutGameInput | GameDeckUpdateWithWhereUniqueWithoutGameInput[]
    updateMany?: GameDeckUpdateManyWithWhereWithoutGameInput | GameDeckUpdateManyWithWhereWithoutGameInput[]
    deleteMany?: GameDeckScalarWhereInput | GameDeckScalarWhereInput[]
  }

  export type GamePlayerUpdateManyWithoutGameNestedInput = {
    create?: XOR<GamePlayerCreateWithoutGameInput, GamePlayerUncheckedCreateWithoutGameInput> | GamePlayerCreateWithoutGameInput[] | GamePlayerUncheckedCreateWithoutGameInput[]
    connectOrCreate?: GamePlayerCreateOrConnectWithoutGameInput | GamePlayerCreateOrConnectWithoutGameInput[]
    upsert?: GamePlayerUpsertWithWhereUniqueWithoutGameInput | GamePlayerUpsertWithWhereUniqueWithoutGameInput[]
    createMany?: GamePlayerCreateManyGameInputEnvelope
    set?: GamePlayerWhereUniqueInput | GamePlayerWhereUniqueInput[]
    disconnect?: GamePlayerWhereUniqueInput | GamePlayerWhereUniqueInput[]
    delete?: GamePlayerWhereUniqueInput | GamePlayerWhereUniqueInput[]
    connect?: GamePlayerWhereUniqueInput | GamePlayerWhereUniqueInput[]
    update?: GamePlayerUpdateWithWhereUniqueWithoutGameInput | GamePlayerUpdateWithWhereUniqueWithoutGameInput[]
    updateMany?: GamePlayerUpdateManyWithWhereWithoutGameInput | GamePlayerUpdateManyWithWhereWithoutGameInput[]
    deleteMany?: GamePlayerScalarWhereInput | GamePlayerScalarWhereInput[]
  }

  export type GameDeckUncheckedUpdateManyWithoutGameNestedInput = {
    create?: XOR<GameDeckCreateWithoutGameInput, GameDeckUncheckedCreateWithoutGameInput> | GameDeckCreateWithoutGameInput[] | GameDeckUncheckedCreateWithoutGameInput[]
    connectOrCreate?: GameDeckCreateOrConnectWithoutGameInput | GameDeckCreateOrConnectWithoutGameInput[]
    upsert?: GameDeckUpsertWithWhereUniqueWithoutGameInput | GameDeckUpsertWithWhereUniqueWithoutGameInput[]
    createMany?: GameDeckCreateManyGameInputEnvelope
    set?: GameDeckWhereUniqueInput | GameDeckWhereUniqueInput[]
    disconnect?: GameDeckWhereUniqueInput | GameDeckWhereUniqueInput[]
    delete?: GameDeckWhereUniqueInput | GameDeckWhereUniqueInput[]
    connect?: GameDeckWhereUniqueInput | GameDeckWhereUniqueInput[]
    update?: GameDeckUpdateWithWhereUniqueWithoutGameInput | GameDeckUpdateWithWhereUniqueWithoutGameInput[]
    updateMany?: GameDeckUpdateManyWithWhereWithoutGameInput | GameDeckUpdateManyWithWhereWithoutGameInput[]
    deleteMany?: GameDeckScalarWhereInput | GameDeckScalarWhereInput[]
  }

  export type GamePlayerUncheckedUpdateManyWithoutGameNestedInput = {
    create?: XOR<GamePlayerCreateWithoutGameInput, GamePlayerUncheckedCreateWithoutGameInput> | GamePlayerCreateWithoutGameInput[] | GamePlayerUncheckedCreateWithoutGameInput[]
    connectOrCreate?: GamePlayerCreateOrConnectWithoutGameInput | GamePlayerCreateOrConnectWithoutGameInput[]
    upsert?: GamePlayerUpsertWithWhereUniqueWithoutGameInput | GamePlayerUpsertWithWhereUniqueWithoutGameInput[]
    createMany?: GamePlayerCreateManyGameInputEnvelope
    set?: GamePlayerWhereUniqueInput | GamePlayerWhereUniqueInput[]
    disconnect?: GamePlayerWhereUniqueInput | GamePlayerWhereUniqueInput[]
    delete?: GamePlayerWhereUniqueInput | GamePlayerWhereUniqueInput[]
    connect?: GamePlayerWhereUniqueInput | GamePlayerWhereUniqueInput[]
    update?: GamePlayerUpdateWithWhereUniqueWithoutGameInput | GamePlayerUpdateWithWhereUniqueWithoutGameInput[]
    updateMany?: GamePlayerUpdateManyWithWhereWithoutGameInput | GamePlayerUpdateManyWithWhereWithoutGameInput[]
    deleteMany?: GamePlayerScalarWhereInput | GamePlayerScalarWhereInput[]
  }

  export type GameCreateNestedOneWithoutPlayersInput = {
    create?: XOR<GameCreateWithoutPlayersInput, GameUncheckedCreateWithoutPlayersInput>
    connectOrCreate?: GameCreateOrConnectWithoutPlayersInput
    connect?: GameWhereUniqueInput
  }

  export type PlayerCreateNestedOneWithoutGamesInput = {
    create?: XOR<PlayerCreateWithoutGamesInput, PlayerUncheckedCreateWithoutGamesInput>
    connectOrCreate?: PlayerCreateOrConnectWithoutGamesInput
    connect?: PlayerWhereUniqueInput
  }

  export type GameUpdateOneRequiredWithoutPlayersNestedInput = {
    create?: XOR<GameCreateWithoutPlayersInput, GameUncheckedCreateWithoutPlayersInput>
    connectOrCreate?: GameCreateOrConnectWithoutPlayersInput
    upsert?: GameUpsertWithoutPlayersInput
    connect?: GameWhereUniqueInput
    update?: XOR<XOR<GameUpdateToOneWithWhereWithoutPlayersInput, GameUpdateWithoutPlayersInput>, GameUncheckedUpdateWithoutPlayersInput>
  }

  export type PlayerUpdateOneRequiredWithoutGamesNestedInput = {
    create?: XOR<PlayerCreateWithoutGamesInput, PlayerUncheckedCreateWithoutGamesInput>
    connectOrCreate?: PlayerCreateOrConnectWithoutGamesInput
    upsert?: PlayerUpsertWithoutGamesInput
    connect?: PlayerWhereUniqueInput
    update?: XOR<XOR<PlayerUpdateToOneWithWhereWithoutGamesInput, PlayerUpdateWithoutGamesInput>, PlayerUncheckedUpdateWithoutGamesInput>
  }

  export type DeckCreateNestedOneWithoutGamesInput = {
    create?: XOR<DeckCreateWithoutGamesInput, DeckUncheckedCreateWithoutGamesInput>
    connectOrCreate?: DeckCreateOrConnectWithoutGamesInput
    connect?: DeckWhereUniqueInput
  }

  export type GameCreateNestedOneWithoutDecksInput = {
    create?: XOR<GameCreateWithoutDecksInput, GameUncheckedCreateWithoutDecksInput>
    connectOrCreate?: GameCreateOrConnectWithoutDecksInput
    connect?: GameWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DeckUpdateOneRequiredWithoutGamesNestedInput = {
    create?: XOR<DeckCreateWithoutGamesInput, DeckUncheckedCreateWithoutGamesInput>
    connectOrCreate?: DeckCreateOrConnectWithoutGamesInput
    upsert?: DeckUpsertWithoutGamesInput
    connect?: DeckWhereUniqueInput
    update?: XOR<XOR<DeckUpdateToOneWithWhereWithoutGamesInput, DeckUpdateWithoutGamesInput>, DeckUncheckedUpdateWithoutGamesInput>
  }

  export type GameUpdateOneRequiredWithoutDecksNestedInput = {
    create?: XOR<GameCreateWithoutDecksInput, GameUncheckedCreateWithoutDecksInput>
    connectOrCreate?: GameCreateOrConnectWithoutDecksInput
    upsert?: GameUpsertWithoutDecksInput
    connect?: GameWhereUniqueInput
    update?: XOR<XOR<GameUpdateToOneWithWhereWithoutDecksInput, GameUpdateWithoutDecksInput>, GameUncheckedUpdateWithoutDecksInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DeckCreateWithoutPlayerInput = {
    id?: string
    name: string
    commanderName: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    games?: GameDeckCreateNestedManyWithoutDeckInput
  }

  export type DeckUncheckedCreateWithoutPlayerInput = {
    id?: string
    name: string
    commanderName: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    games?: GameDeckUncheckedCreateNestedManyWithoutDeckInput
  }

  export type DeckCreateOrConnectWithoutPlayerInput = {
    where: DeckWhereUniqueInput
    create: XOR<DeckCreateWithoutPlayerInput, DeckUncheckedCreateWithoutPlayerInput>
  }

  export type DeckCreateManyPlayerInputEnvelope = {
    data: DeckCreateManyPlayerInput | DeckCreateManyPlayerInput[]
    skipDuplicates?: boolean
  }

  export type GamePlayerCreateWithoutPlayerInput = {
    id?: string
    game: GameCreateNestedOneWithoutPlayersInput
  }

  export type GamePlayerUncheckedCreateWithoutPlayerInput = {
    id?: string
    gameId: string
  }

  export type GamePlayerCreateOrConnectWithoutPlayerInput = {
    where: GamePlayerWhereUniqueInput
    create: XOR<GamePlayerCreateWithoutPlayerInput, GamePlayerUncheckedCreateWithoutPlayerInput>
  }

  export type GamePlayerCreateManyPlayerInputEnvelope = {
    data: GamePlayerCreateManyPlayerInput | GamePlayerCreateManyPlayerInput[]
    skipDuplicates?: boolean
  }

  export type PlayerPodCreateWithoutPlayerInput = {
    id?: string
    createdAt?: Date | string
    pod: PodCreateNestedOneWithoutPlayersInput
  }

  export type PlayerPodUncheckedCreateWithoutPlayerInput = {
    id?: string
    podId: string
    createdAt?: Date | string
  }

  export type PlayerPodCreateOrConnectWithoutPlayerInput = {
    where: PlayerPodWhereUniqueInput
    create: XOR<PlayerPodCreateWithoutPlayerInput, PlayerPodUncheckedCreateWithoutPlayerInput>
  }

  export type PlayerPodCreateManyPlayerInputEnvelope = {
    data: PlayerPodCreateManyPlayerInput | PlayerPodCreateManyPlayerInput[]
    skipDuplicates?: boolean
  }

  export type DeckUpsertWithWhereUniqueWithoutPlayerInput = {
    where: DeckWhereUniqueInput
    update: XOR<DeckUpdateWithoutPlayerInput, DeckUncheckedUpdateWithoutPlayerInput>
    create: XOR<DeckCreateWithoutPlayerInput, DeckUncheckedCreateWithoutPlayerInput>
  }

  export type DeckUpdateWithWhereUniqueWithoutPlayerInput = {
    where: DeckWhereUniqueInput
    data: XOR<DeckUpdateWithoutPlayerInput, DeckUncheckedUpdateWithoutPlayerInput>
  }

  export type DeckUpdateManyWithWhereWithoutPlayerInput = {
    where: DeckScalarWhereInput
    data: XOR<DeckUpdateManyMutationInput, DeckUncheckedUpdateManyWithoutPlayerInput>
  }

  export type DeckScalarWhereInput = {
    AND?: DeckScalarWhereInput | DeckScalarWhereInput[]
    OR?: DeckScalarWhereInput[]
    NOT?: DeckScalarWhereInput | DeckScalarWhereInput[]
    id?: StringFilter<"Deck"> | string
    name?: StringFilter<"Deck"> | string
    commanderName?: StringFilter<"Deck"> | string
    description?: StringNullableFilter<"Deck"> | string | null
    createdAt?: DateTimeFilter<"Deck"> | Date | string
    updatedAt?: DateTimeFilter<"Deck"> | Date | string
    playerId?: StringFilter<"Deck"> | string
  }

  export type GamePlayerUpsertWithWhereUniqueWithoutPlayerInput = {
    where: GamePlayerWhereUniqueInput
    update: XOR<GamePlayerUpdateWithoutPlayerInput, GamePlayerUncheckedUpdateWithoutPlayerInput>
    create: XOR<GamePlayerCreateWithoutPlayerInput, GamePlayerUncheckedCreateWithoutPlayerInput>
  }

  export type GamePlayerUpdateWithWhereUniqueWithoutPlayerInput = {
    where: GamePlayerWhereUniqueInput
    data: XOR<GamePlayerUpdateWithoutPlayerInput, GamePlayerUncheckedUpdateWithoutPlayerInput>
  }

  export type GamePlayerUpdateManyWithWhereWithoutPlayerInput = {
    where: GamePlayerScalarWhereInput
    data: XOR<GamePlayerUpdateManyMutationInput, GamePlayerUncheckedUpdateManyWithoutPlayerInput>
  }

  export type GamePlayerScalarWhereInput = {
    AND?: GamePlayerScalarWhereInput | GamePlayerScalarWhereInput[]
    OR?: GamePlayerScalarWhereInput[]
    NOT?: GamePlayerScalarWhereInput | GamePlayerScalarWhereInput[]
    id?: StringFilter<"GamePlayer"> | string
    gameId?: StringFilter<"GamePlayer"> | string
    playerId?: StringFilter<"GamePlayer"> | string
  }

  export type PlayerPodUpsertWithWhereUniqueWithoutPlayerInput = {
    where: PlayerPodWhereUniqueInput
    update: XOR<PlayerPodUpdateWithoutPlayerInput, PlayerPodUncheckedUpdateWithoutPlayerInput>
    create: XOR<PlayerPodCreateWithoutPlayerInput, PlayerPodUncheckedCreateWithoutPlayerInput>
  }

  export type PlayerPodUpdateWithWhereUniqueWithoutPlayerInput = {
    where: PlayerPodWhereUniqueInput
    data: XOR<PlayerPodUpdateWithoutPlayerInput, PlayerPodUncheckedUpdateWithoutPlayerInput>
  }

  export type PlayerPodUpdateManyWithWhereWithoutPlayerInput = {
    where: PlayerPodScalarWhereInput
    data: XOR<PlayerPodUpdateManyMutationInput, PlayerPodUncheckedUpdateManyWithoutPlayerInput>
  }

  export type PlayerPodScalarWhereInput = {
    AND?: PlayerPodScalarWhereInput | PlayerPodScalarWhereInput[]
    OR?: PlayerPodScalarWhereInput[]
    NOT?: PlayerPodScalarWhereInput | PlayerPodScalarWhereInput[]
    id?: StringFilter<"PlayerPod"> | string
    playerId?: StringFilter<"PlayerPod"> | string
    podId?: StringFilter<"PlayerPod"> | string
    createdAt?: DateTimeFilter<"PlayerPod"> | Date | string
  }

  export type PlayerCreateWithoutDecksInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    games?: GamePlayerCreateNestedManyWithoutPlayerInput
    pods?: PlayerPodCreateNestedManyWithoutPlayerInput
  }

  export type PlayerUncheckedCreateWithoutDecksInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    games?: GamePlayerUncheckedCreateNestedManyWithoutPlayerInput
    pods?: PlayerPodUncheckedCreateNestedManyWithoutPlayerInput
  }

  export type PlayerCreateOrConnectWithoutDecksInput = {
    where: PlayerWhereUniqueInput
    create: XOR<PlayerCreateWithoutDecksInput, PlayerUncheckedCreateWithoutDecksInput>
  }

  export type GameDeckCreateWithoutDeckInput = {
    id?: string
    isWinner?: boolean
    game: GameCreateNestedOneWithoutDecksInput
  }

  export type GameDeckUncheckedCreateWithoutDeckInput = {
    id?: string
    gameId: string
    isWinner?: boolean
  }

  export type GameDeckCreateOrConnectWithoutDeckInput = {
    where: GameDeckWhereUniqueInput
    create: XOR<GameDeckCreateWithoutDeckInput, GameDeckUncheckedCreateWithoutDeckInput>
  }

  export type GameDeckCreateManyDeckInputEnvelope = {
    data: GameDeckCreateManyDeckInput | GameDeckCreateManyDeckInput[]
    skipDuplicates?: boolean
  }

  export type PlayerUpsertWithoutDecksInput = {
    update: XOR<PlayerUpdateWithoutDecksInput, PlayerUncheckedUpdateWithoutDecksInput>
    create: XOR<PlayerCreateWithoutDecksInput, PlayerUncheckedCreateWithoutDecksInput>
    where?: PlayerWhereInput
  }

  export type PlayerUpdateToOneWithWhereWithoutDecksInput = {
    where?: PlayerWhereInput
    data: XOR<PlayerUpdateWithoutDecksInput, PlayerUncheckedUpdateWithoutDecksInput>
  }

  export type PlayerUpdateWithoutDecksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    games?: GamePlayerUpdateManyWithoutPlayerNestedInput
    pods?: PlayerPodUpdateManyWithoutPlayerNestedInput
  }

  export type PlayerUncheckedUpdateWithoutDecksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    games?: GamePlayerUncheckedUpdateManyWithoutPlayerNestedInput
    pods?: PlayerPodUncheckedUpdateManyWithoutPlayerNestedInput
  }

  export type GameDeckUpsertWithWhereUniqueWithoutDeckInput = {
    where: GameDeckWhereUniqueInput
    update: XOR<GameDeckUpdateWithoutDeckInput, GameDeckUncheckedUpdateWithoutDeckInput>
    create: XOR<GameDeckCreateWithoutDeckInput, GameDeckUncheckedCreateWithoutDeckInput>
  }

  export type GameDeckUpdateWithWhereUniqueWithoutDeckInput = {
    where: GameDeckWhereUniqueInput
    data: XOR<GameDeckUpdateWithoutDeckInput, GameDeckUncheckedUpdateWithoutDeckInput>
  }

  export type GameDeckUpdateManyWithWhereWithoutDeckInput = {
    where: GameDeckScalarWhereInput
    data: XOR<GameDeckUpdateManyMutationInput, GameDeckUncheckedUpdateManyWithoutDeckInput>
  }

  export type GameDeckScalarWhereInput = {
    AND?: GameDeckScalarWhereInput | GameDeckScalarWhereInput[]
    OR?: GameDeckScalarWhereInput[]
    NOT?: GameDeckScalarWhereInput | GameDeckScalarWhereInput[]
    id?: StringFilter<"GameDeck"> | string
    gameId?: StringFilter<"GameDeck"> | string
    deckId?: StringFilter<"GameDeck"> | string
    isWinner?: BoolFilter<"GameDeck"> | boolean
  }

  export type GameCreateWithoutPodInput = {
    id?: string
    playedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    winnerId?: string | null
    decks?: GameDeckCreateNestedManyWithoutGameInput
    players?: GamePlayerCreateNestedManyWithoutGameInput
  }

  export type GameUncheckedCreateWithoutPodInput = {
    id?: string
    playedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    winnerId?: string | null
    decks?: GameDeckUncheckedCreateNestedManyWithoutGameInput
    players?: GamePlayerUncheckedCreateNestedManyWithoutGameInput
  }

  export type GameCreateOrConnectWithoutPodInput = {
    where: GameWhereUniqueInput
    create: XOR<GameCreateWithoutPodInput, GameUncheckedCreateWithoutPodInput>
  }

  export type GameCreateManyPodInputEnvelope = {
    data: GameCreateManyPodInput | GameCreateManyPodInput[]
    skipDuplicates?: boolean
  }

  export type PlayerPodCreateWithoutPodInput = {
    id?: string
    createdAt?: Date | string
    player: PlayerCreateNestedOneWithoutPodsInput
  }

  export type PlayerPodUncheckedCreateWithoutPodInput = {
    id?: string
    playerId: string
    createdAt?: Date | string
  }

  export type PlayerPodCreateOrConnectWithoutPodInput = {
    where: PlayerPodWhereUniqueInput
    create: XOR<PlayerPodCreateWithoutPodInput, PlayerPodUncheckedCreateWithoutPodInput>
  }

  export type PlayerPodCreateManyPodInputEnvelope = {
    data: PlayerPodCreateManyPodInput | PlayerPodCreateManyPodInput[]
    skipDuplicates?: boolean
  }

  export type GameUpsertWithWhereUniqueWithoutPodInput = {
    where: GameWhereUniqueInput
    update: XOR<GameUpdateWithoutPodInput, GameUncheckedUpdateWithoutPodInput>
    create: XOR<GameCreateWithoutPodInput, GameUncheckedCreateWithoutPodInput>
  }

  export type GameUpdateWithWhereUniqueWithoutPodInput = {
    where: GameWhereUniqueInput
    data: XOR<GameUpdateWithoutPodInput, GameUncheckedUpdateWithoutPodInput>
  }

  export type GameUpdateManyWithWhereWithoutPodInput = {
    where: GameScalarWhereInput
    data: XOR<GameUpdateManyMutationInput, GameUncheckedUpdateManyWithoutPodInput>
  }

  export type GameScalarWhereInput = {
    AND?: GameScalarWhereInput | GameScalarWhereInput[]
    OR?: GameScalarWhereInput[]
    NOT?: GameScalarWhereInput | GameScalarWhereInput[]
    id?: StringFilter<"Game"> | string
    playedAt?: DateTimeFilter<"Game"> | Date | string
    createdAt?: DateTimeFilter<"Game"> | Date | string
    updatedAt?: DateTimeFilter<"Game"> | Date | string
    podId?: StringFilter<"Game"> | string
    winnerId?: StringNullableFilter<"Game"> | string | null
  }

  export type PlayerPodUpsertWithWhereUniqueWithoutPodInput = {
    where: PlayerPodWhereUniqueInput
    update: XOR<PlayerPodUpdateWithoutPodInput, PlayerPodUncheckedUpdateWithoutPodInput>
    create: XOR<PlayerPodCreateWithoutPodInput, PlayerPodUncheckedCreateWithoutPodInput>
  }

  export type PlayerPodUpdateWithWhereUniqueWithoutPodInput = {
    where: PlayerPodWhereUniqueInput
    data: XOR<PlayerPodUpdateWithoutPodInput, PlayerPodUncheckedUpdateWithoutPodInput>
  }

  export type PlayerPodUpdateManyWithWhereWithoutPodInput = {
    where: PlayerPodScalarWhereInput
    data: XOR<PlayerPodUpdateManyMutationInput, PlayerPodUncheckedUpdateManyWithoutPodInput>
  }

  export type PlayerCreateWithoutPodsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    decks?: DeckCreateNestedManyWithoutPlayerInput
    games?: GamePlayerCreateNestedManyWithoutPlayerInput
  }

  export type PlayerUncheckedCreateWithoutPodsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    decks?: DeckUncheckedCreateNestedManyWithoutPlayerInput
    games?: GamePlayerUncheckedCreateNestedManyWithoutPlayerInput
  }

  export type PlayerCreateOrConnectWithoutPodsInput = {
    where: PlayerWhereUniqueInput
    create: XOR<PlayerCreateWithoutPodsInput, PlayerUncheckedCreateWithoutPodsInput>
  }

  export type PodCreateWithoutPlayersInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    games?: GameCreateNestedManyWithoutPodInput
  }

  export type PodUncheckedCreateWithoutPlayersInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    games?: GameUncheckedCreateNestedManyWithoutPodInput
  }

  export type PodCreateOrConnectWithoutPlayersInput = {
    where: PodWhereUniqueInput
    create: XOR<PodCreateWithoutPlayersInput, PodUncheckedCreateWithoutPlayersInput>
  }

  export type PlayerUpsertWithoutPodsInput = {
    update: XOR<PlayerUpdateWithoutPodsInput, PlayerUncheckedUpdateWithoutPodsInput>
    create: XOR<PlayerCreateWithoutPodsInput, PlayerUncheckedCreateWithoutPodsInput>
    where?: PlayerWhereInput
  }

  export type PlayerUpdateToOneWithWhereWithoutPodsInput = {
    where?: PlayerWhereInput
    data: XOR<PlayerUpdateWithoutPodsInput, PlayerUncheckedUpdateWithoutPodsInput>
  }

  export type PlayerUpdateWithoutPodsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    decks?: DeckUpdateManyWithoutPlayerNestedInput
    games?: GamePlayerUpdateManyWithoutPlayerNestedInput
  }

  export type PlayerUncheckedUpdateWithoutPodsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    decks?: DeckUncheckedUpdateManyWithoutPlayerNestedInput
    games?: GamePlayerUncheckedUpdateManyWithoutPlayerNestedInput
  }

  export type PodUpsertWithoutPlayersInput = {
    update: XOR<PodUpdateWithoutPlayersInput, PodUncheckedUpdateWithoutPlayersInput>
    create: XOR<PodCreateWithoutPlayersInput, PodUncheckedCreateWithoutPlayersInput>
    where?: PodWhereInput
  }

  export type PodUpdateToOneWithWhereWithoutPlayersInput = {
    where?: PodWhereInput
    data: XOR<PodUpdateWithoutPlayersInput, PodUncheckedUpdateWithoutPlayersInput>
  }

  export type PodUpdateWithoutPlayersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    games?: GameUpdateManyWithoutPodNestedInput
  }

  export type PodUncheckedUpdateWithoutPlayersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    games?: GameUncheckedUpdateManyWithoutPodNestedInput
  }

  export type PodCreateWithoutGamesInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    players?: PlayerPodCreateNestedManyWithoutPodInput
  }

  export type PodUncheckedCreateWithoutGamesInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    players?: PlayerPodUncheckedCreateNestedManyWithoutPodInput
  }

  export type PodCreateOrConnectWithoutGamesInput = {
    where: PodWhereUniqueInput
    create: XOR<PodCreateWithoutGamesInput, PodUncheckedCreateWithoutGamesInput>
  }

  export type GameDeckCreateWithoutGameInput = {
    id?: string
    isWinner?: boolean
    deck: DeckCreateNestedOneWithoutGamesInput
  }

  export type GameDeckUncheckedCreateWithoutGameInput = {
    id?: string
    deckId: string
    isWinner?: boolean
  }

  export type GameDeckCreateOrConnectWithoutGameInput = {
    where: GameDeckWhereUniqueInput
    create: XOR<GameDeckCreateWithoutGameInput, GameDeckUncheckedCreateWithoutGameInput>
  }

  export type GameDeckCreateManyGameInputEnvelope = {
    data: GameDeckCreateManyGameInput | GameDeckCreateManyGameInput[]
    skipDuplicates?: boolean
  }

  export type GamePlayerCreateWithoutGameInput = {
    id?: string
    player: PlayerCreateNestedOneWithoutGamesInput
  }

  export type GamePlayerUncheckedCreateWithoutGameInput = {
    id?: string
    playerId: string
  }

  export type GamePlayerCreateOrConnectWithoutGameInput = {
    where: GamePlayerWhereUniqueInput
    create: XOR<GamePlayerCreateWithoutGameInput, GamePlayerUncheckedCreateWithoutGameInput>
  }

  export type GamePlayerCreateManyGameInputEnvelope = {
    data: GamePlayerCreateManyGameInput | GamePlayerCreateManyGameInput[]
    skipDuplicates?: boolean
  }

  export type PodUpsertWithoutGamesInput = {
    update: XOR<PodUpdateWithoutGamesInput, PodUncheckedUpdateWithoutGamesInput>
    create: XOR<PodCreateWithoutGamesInput, PodUncheckedCreateWithoutGamesInput>
    where?: PodWhereInput
  }

  export type PodUpdateToOneWithWhereWithoutGamesInput = {
    where?: PodWhereInput
    data: XOR<PodUpdateWithoutGamesInput, PodUncheckedUpdateWithoutGamesInput>
  }

  export type PodUpdateWithoutGamesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    players?: PlayerPodUpdateManyWithoutPodNestedInput
  }

  export type PodUncheckedUpdateWithoutGamesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    players?: PlayerPodUncheckedUpdateManyWithoutPodNestedInput
  }

  export type GameDeckUpsertWithWhereUniqueWithoutGameInput = {
    where: GameDeckWhereUniqueInput
    update: XOR<GameDeckUpdateWithoutGameInput, GameDeckUncheckedUpdateWithoutGameInput>
    create: XOR<GameDeckCreateWithoutGameInput, GameDeckUncheckedCreateWithoutGameInput>
  }

  export type GameDeckUpdateWithWhereUniqueWithoutGameInput = {
    where: GameDeckWhereUniqueInput
    data: XOR<GameDeckUpdateWithoutGameInput, GameDeckUncheckedUpdateWithoutGameInput>
  }

  export type GameDeckUpdateManyWithWhereWithoutGameInput = {
    where: GameDeckScalarWhereInput
    data: XOR<GameDeckUpdateManyMutationInput, GameDeckUncheckedUpdateManyWithoutGameInput>
  }

  export type GamePlayerUpsertWithWhereUniqueWithoutGameInput = {
    where: GamePlayerWhereUniqueInput
    update: XOR<GamePlayerUpdateWithoutGameInput, GamePlayerUncheckedUpdateWithoutGameInput>
    create: XOR<GamePlayerCreateWithoutGameInput, GamePlayerUncheckedCreateWithoutGameInput>
  }

  export type GamePlayerUpdateWithWhereUniqueWithoutGameInput = {
    where: GamePlayerWhereUniqueInput
    data: XOR<GamePlayerUpdateWithoutGameInput, GamePlayerUncheckedUpdateWithoutGameInput>
  }

  export type GamePlayerUpdateManyWithWhereWithoutGameInput = {
    where: GamePlayerScalarWhereInput
    data: XOR<GamePlayerUpdateManyMutationInput, GamePlayerUncheckedUpdateManyWithoutGameInput>
  }

  export type GameCreateWithoutPlayersInput = {
    id?: string
    playedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    winnerId?: string | null
    pod: PodCreateNestedOneWithoutGamesInput
    decks?: GameDeckCreateNestedManyWithoutGameInput
  }

  export type GameUncheckedCreateWithoutPlayersInput = {
    id?: string
    playedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    podId: string
    winnerId?: string | null
    decks?: GameDeckUncheckedCreateNestedManyWithoutGameInput
  }

  export type GameCreateOrConnectWithoutPlayersInput = {
    where: GameWhereUniqueInput
    create: XOR<GameCreateWithoutPlayersInput, GameUncheckedCreateWithoutPlayersInput>
  }

  export type PlayerCreateWithoutGamesInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    decks?: DeckCreateNestedManyWithoutPlayerInput
    pods?: PlayerPodCreateNestedManyWithoutPlayerInput
  }

  export type PlayerUncheckedCreateWithoutGamesInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    decks?: DeckUncheckedCreateNestedManyWithoutPlayerInput
    pods?: PlayerPodUncheckedCreateNestedManyWithoutPlayerInput
  }

  export type PlayerCreateOrConnectWithoutGamesInput = {
    where: PlayerWhereUniqueInput
    create: XOR<PlayerCreateWithoutGamesInput, PlayerUncheckedCreateWithoutGamesInput>
  }

  export type GameUpsertWithoutPlayersInput = {
    update: XOR<GameUpdateWithoutPlayersInput, GameUncheckedUpdateWithoutPlayersInput>
    create: XOR<GameCreateWithoutPlayersInput, GameUncheckedCreateWithoutPlayersInput>
    where?: GameWhereInput
  }

  export type GameUpdateToOneWithWhereWithoutPlayersInput = {
    where?: GameWhereInput
    data: XOR<GameUpdateWithoutPlayersInput, GameUncheckedUpdateWithoutPlayersInput>
  }

  export type GameUpdateWithoutPlayersInput = {
    id?: StringFieldUpdateOperationsInput | string
    playedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    winnerId?: NullableStringFieldUpdateOperationsInput | string | null
    pod?: PodUpdateOneRequiredWithoutGamesNestedInput
    decks?: GameDeckUpdateManyWithoutGameNestedInput
  }

  export type GameUncheckedUpdateWithoutPlayersInput = {
    id?: StringFieldUpdateOperationsInput | string
    playedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    podId?: StringFieldUpdateOperationsInput | string
    winnerId?: NullableStringFieldUpdateOperationsInput | string | null
    decks?: GameDeckUncheckedUpdateManyWithoutGameNestedInput
  }

  export type PlayerUpsertWithoutGamesInput = {
    update: XOR<PlayerUpdateWithoutGamesInput, PlayerUncheckedUpdateWithoutGamesInput>
    create: XOR<PlayerCreateWithoutGamesInput, PlayerUncheckedCreateWithoutGamesInput>
    where?: PlayerWhereInput
  }

  export type PlayerUpdateToOneWithWhereWithoutGamesInput = {
    where?: PlayerWhereInput
    data: XOR<PlayerUpdateWithoutGamesInput, PlayerUncheckedUpdateWithoutGamesInput>
  }

  export type PlayerUpdateWithoutGamesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    decks?: DeckUpdateManyWithoutPlayerNestedInput
    pods?: PlayerPodUpdateManyWithoutPlayerNestedInput
  }

  export type PlayerUncheckedUpdateWithoutGamesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    decks?: DeckUncheckedUpdateManyWithoutPlayerNestedInput
    pods?: PlayerPodUncheckedUpdateManyWithoutPlayerNestedInput
  }

  export type DeckCreateWithoutGamesInput = {
    id?: string
    name: string
    commanderName: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    player: PlayerCreateNestedOneWithoutDecksInput
  }

  export type DeckUncheckedCreateWithoutGamesInput = {
    id?: string
    name: string
    commanderName: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    playerId: string
  }

  export type DeckCreateOrConnectWithoutGamesInput = {
    where: DeckWhereUniqueInput
    create: XOR<DeckCreateWithoutGamesInput, DeckUncheckedCreateWithoutGamesInput>
  }

  export type GameCreateWithoutDecksInput = {
    id?: string
    playedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    winnerId?: string | null
    pod: PodCreateNestedOneWithoutGamesInput
    players?: GamePlayerCreateNestedManyWithoutGameInput
  }

  export type GameUncheckedCreateWithoutDecksInput = {
    id?: string
    playedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    podId: string
    winnerId?: string | null
    players?: GamePlayerUncheckedCreateNestedManyWithoutGameInput
  }

  export type GameCreateOrConnectWithoutDecksInput = {
    where: GameWhereUniqueInput
    create: XOR<GameCreateWithoutDecksInput, GameUncheckedCreateWithoutDecksInput>
  }

  export type DeckUpsertWithoutGamesInput = {
    update: XOR<DeckUpdateWithoutGamesInput, DeckUncheckedUpdateWithoutGamesInput>
    create: XOR<DeckCreateWithoutGamesInput, DeckUncheckedCreateWithoutGamesInput>
    where?: DeckWhereInput
  }

  export type DeckUpdateToOneWithWhereWithoutGamesInput = {
    where?: DeckWhereInput
    data: XOR<DeckUpdateWithoutGamesInput, DeckUncheckedUpdateWithoutGamesInput>
  }

  export type DeckUpdateWithoutGamesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    commanderName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    player?: PlayerUpdateOneRequiredWithoutDecksNestedInput
  }

  export type DeckUncheckedUpdateWithoutGamesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    commanderName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    playerId?: StringFieldUpdateOperationsInput | string
  }

  export type GameUpsertWithoutDecksInput = {
    update: XOR<GameUpdateWithoutDecksInput, GameUncheckedUpdateWithoutDecksInput>
    create: XOR<GameCreateWithoutDecksInput, GameUncheckedCreateWithoutDecksInput>
    where?: GameWhereInput
  }

  export type GameUpdateToOneWithWhereWithoutDecksInput = {
    where?: GameWhereInput
    data: XOR<GameUpdateWithoutDecksInput, GameUncheckedUpdateWithoutDecksInput>
  }

  export type GameUpdateWithoutDecksInput = {
    id?: StringFieldUpdateOperationsInput | string
    playedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    winnerId?: NullableStringFieldUpdateOperationsInput | string | null
    pod?: PodUpdateOneRequiredWithoutGamesNestedInput
    players?: GamePlayerUpdateManyWithoutGameNestedInput
  }

  export type GameUncheckedUpdateWithoutDecksInput = {
    id?: StringFieldUpdateOperationsInput | string
    playedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    podId?: StringFieldUpdateOperationsInput | string
    winnerId?: NullableStringFieldUpdateOperationsInput | string | null
    players?: GamePlayerUncheckedUpdateManyWithoutGameNestedInput
  }

  export type DeckCreateManyPlayerInput = {
    id?: string
    name: string
    commanderName: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GamePlayerCreateManyPlayerInput = {
    id?: string
    gameId: string
  }

  export type PlayerPodCreateManyPlayerInput = {
    id?: string
    podId: string
    createdAt?: Date | string
  }

  export type DeckUpdateWithoutPlayerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    commanderName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    games?: GameDeckUpdateManyWithoutDeckNestedInput
  }

  export type DeckUncheckedUpdateWithoutPlayerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    commanderName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    games?: GameDeckUncheckedUpdateManyWithoutDeckNestedInput
  }

  export type DeckUncheckedUpdateManyWithoutPlayerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    commanderName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GamePlayerUpdateWithoutPlayerInput = {
    id?: StringFieldUpdateOperationsInput | string
    game?: GameUpdateOneRequiredWithoutPlayersNestedInput
  }

  export type GamePlayerUncheckedUpdateWithoutPlayerInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameId?: StringFieldUpdateOperationsInput | string
  }

  export type GamePlayerUncheckedUpdateManyWithoutPlayerInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameId?: StringFieldUpdateOperationsInput | string
  }

  export type PlayerPodUpdateWithoutPlayerInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pod?: PodUpdateOneRequiredWithoutPlayersNestedInput
  }

  export type PlayerPodUncheckedUpdateWithoutPlayerInput = {
    id?: StringFieldUpdateOperationsInput | string
    podId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlayerPodUncheckedUpdateManyWithoutPlayerInput = {
    id?: StringFieldUpdateOperationsInput | string
    podId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameDeckCreateManyDeckInput = {
    id?: string
    gameId: string
    isWinner?: boolean
  }

  export type GameDeckUpdateWithoutDeckInput = {
    id?: StringFieldUpdateOperationsInput | string
    isWinner?: BoolFieldUpdateOperationsInput | boolean
    game?: GameUpdateOneRequiredWithoutDecksNestedInput
  }

  export type GameDeckUncheckedUpdateWithoutDeckInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameId?: StringFieldUpdateOperationsInput | string
    isWinner?: BoolFieldUpdateOperationsInput | boolean
  }

  export type GameDeckUncheckedUpdateManyWithoutDeckInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameId?: StringFieldUpdateOperationsInput | string
    isWinner?: BoolFieldUpdateOperationsInput | boolean
  }

  export type GameCreateManyPodInput = {
    id?: string
    playedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    winnerId?: string | null
  }

  export type PlayerPodCreateManyPodInput = {
    id?: string
    playerId: string
    createdAt?: Date | string
  }

  export type GameUpdateWithoutPodInput = {
    id?: StringFieldUpdateOperationsInput | string
    playedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    winnerId?: NullableStringFieldUpdateOperationsInput | string | null
    decks?: GameDeckUpdateManyWithoutGameNestedInput
    players?: GamePlayerUpdateManyWithoutGameNestedInput
  }

  export type GameUncheckedUpdateWithoutPodInput = {
    id?: StringFieldUpdateOperationsInput | string
    playedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    winnerId?: NullableStringFieldUpdateOperationsInput | string | null
    decks?: GameDeckUncheckedUpdateManyWithoutGameNestedInput
    players?: GamePlayerUncheckedUpdateManyWithoutGameNestedInput
  }

  export type GameUncheckedUpdateManyWithoutPodInput = {
    id?: StringFieldUpdateOperationsInput | string
    playedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    winnerId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PlayerPodUpdateWithoutPodInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    player?: PlayerUpdateOneRequiredWithoutPodsNestedInput
  }

  export type PlayerPodUncheckedUpdateWithoutPodInput = {
    id?: StringFieldUpdateOperationsInput | string
    playerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlayerPodUncheckedUpdateManyWithoutPodInput = {
    id?: StringFieldUpdateOperationsInput | string
    playerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameDeckCreateManyGameInput = {
    id?: string
    deckId: string
    isWinner?: boolean
  }

  export type GamePlayerCreateManyGameInput = {
    id?: string
    playerId: string
  }

  export type GameDeckUpdateWithoutGameInput = {
    id?: StringFieldUpdateOperationsInput | string
    isWinner?: BoolFieldUpdateOperationsInput | boolean
    deck?: DeckUpdateOneRequiredWithoutGamesNestedInput
  }

  export type GameDeckUncheckedUpdateWithoutGameInput = {
    id?: StringFieldUpdateOperationsInput | string
    deckId?: StringFieldUpdateOperationsInput | string
    isWinner?: BoolFieldUpdateOperationsInput | boolean
  }

  export type GameDeckUncheckedUpdateManyWithoutGameInput = {
    id?: StringFieldUpdateOperationsInput | string
    deckId?: StringFieldUpdateOperationsInput | string
    isWinner?: BoolFieldUpdateOperationsInput | boolean
  }

  export type GamePlayerUpdateWithoutGameInput = {
    id?: StringFieldUpdateOperationsInput | string
    player?: PlayerUpdateOneRequiredWithoutGamesNestedInput
  }

  export type GamePlayerUncheckedUpdateWithoutGameInput = {
    id?: StringFieldUpdateOperationsInput | string
    playerId?: StringFieldUpdateOperationsInput | string
  }

  export type GamePlayerUncheckedUpdateManyWithoutGameInput = {
    id?: StringFieldUpdateOperationsInput | string
    playerId?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}