
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Document
 * 
 */
export type Document = $Result.DefaultSelection<Prisma.$DocumentPayload>
/**
 * Model DocumentMember
 * 
 */
export type DocumentMember = $Result.DefaultSelection<Prisma.$DocumentMemberPayload>
/**
 * Model Operation
 * 
 */
export type Operation = $Result.DefaultSelection<Prisma.$OperationPayload>
/**
 * Model Snapshot
 * 
 */
export type Snapshot = $Result.DefaultSelection<Prisma.$SnapshotPayload>
/**
 * Model Version
 * 
 */
export type Version = $Result.DefaultSelection<Prisma.$VersionPayload>
/**
 * Model SyncState
 * 
 */
export type SyncState = $Result.DefaultSelection<Prisma.$SyncStatePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  OWNER: 'OWNER',
  EDITOR: 'EDITOR',
  VIEWER: 'VIEWER'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.document`: Exposes CRUD operations for the **Document** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Documents
    * const documents = await prisma.document.findMany()
    * ```
    */
  get document(): Prisma.DocumentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.documentMember`: Exposes CRUD operations for the **DocumentMember** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DocumentMembers
    * const documentMembers = await prisma.documentMember.findMany()
    * ```
    */
  get documentMember(): Prisma.DocumentMemberDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.operation`: Exposes CRUD operations for the **Operation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Operations
    * const operations = await prisma.operation.findMany()
    * ```
    */
  get operation(): Prisma.OperationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.snapshot`: Exposes CRUD operations for the **Snapshot** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Snapshots
    * const snapshots = await prisma.snapshot.findMany()
    * ```
    */
  get snapshot(): Prisma.SnapshotDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.version`: Exposes CRUD operations for the **Version** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Versions
    * const versions = await prisma.version.findMany()
    * ```
    */
  get version(): Prisma.VersionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.syncState`: Exposes CRUD operations for the **SyncState** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SyncStates
    * const syncStates = await prisma.syncState.findMany()
    * ```
    */
  get syncState(): Prisma.SyncStateDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    User: 'User',
    Document: 'Document',
    DocumentMember: 'DocumentMember',
    Operation: 'Operation',
    Snapshot: 'Snapshot',
    Version: 'Version',
    SyncState: 'SyncState'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "document" | "documentMember" | "operation" | "snapshot" | "version" | "syncState"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Document: {
        payload: Prisma.$DocumentPayload<ExtArgs>
        fields: Prisma.DocumentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DocumentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DocumentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          findFirst: {
            args: Prisma.DocumentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DocumentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          findMany: {
            args: Prisma.DocumentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>[]
          }
          create: {
            args: Prisma.DocumentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          createMany: {
            args: Prisma.DocumentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DocumentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>[]
          }
          delete: {
            args: Prisma.DocumentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          update: {
            args: Prisma.DocumentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          deleteMany: {
            args: Prisma.DocumentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DocumentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DocumentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>[]
          }
          upsert: {
            args: Prisma.DocumentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          aggregate: {
            args: Prisma.DocumentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDocument>
          }
          groupBy: {
            args: Prisma.DocumentGroupByArgs<ExtArgs>
            result: $Utils.Optional<DocumentGroupByOutputType>[]
          }
          count: {
            args: Prisma.DocumentCountArgs<ExtArgs>
            result: $Utils.Optional<DocumentCountAggregateOutputType> | number
          }
        }
      }
      DocumentMember: {
        payload: Prisma.$DocumentMemberPayload<ExtArgs>
        fields: Prisma.DocumentMemberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DocumentMemberFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentMemberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DocumentMemberFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentMemberPayload>
          }
          findFirst: {
            args: Prisma.DocumentMemberFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentMemberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DocumentMemberFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentMemberPayload>
          }
          findMany: {
            args: Prisma.DocumentMemberFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentMemberPayload>[]
          }
          create: {
            args: Prisma.DocumentMemberCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentMemberPayload>
          }
          createMany: {
            args: Prisma.DocumentMemberCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DocumentMemberCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentMemberPayload>[]
          }
          delete: {
            args: Prisma.DocumentMemberDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentMemberPayload>
          }
          update: {
            args: Prisma.DocumentMemberUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentMemberPayload>
          }
          deleteMany: {
            args: Prisma.DocumentMemberDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DocumentMemberUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DocumentMemberUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentMemberPayload>[]
          }
          upsert: {
            args: Prisma.DocumentMemberUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentMemberPayload>
          }
          aggregate: {
            args: Prisma.DocumentMemberAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDocumentMember>
          }
          groupBy: {
            args: Prisma.DocumentMemberGroupByArgs<ExtArgs>
            result: $Utils.Optional<DocumentMemberGroupByOutputType>[]
          }
          count: {
            args: Prisma.DocumentMemberCountArgs<ExtArgs>
            result: $Utils.Optional<DocumentMemberCountAggregateOutputType> | number
          }
        }
      }
      Operation: {
        payload: Prisma.$OperationPayload<ExtArgs>
        fields: Prisma.OperationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OperationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OperationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperationPayload>
          }
          findFirst: {
            args: Prisma.OperationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OperationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperationPayload>
          }
          findMany: {
            args: Prisma.OperationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperationPayload>[]
          }
          create: {
            args: Prisma.OperationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperationPayload>
          }
          createMany: {
            args: Prisma.OperationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OperationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperationPayload>[]
          }
          delete: {
            args: Prisma.OperationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperationPayload>
          }
          update: {
            args: Prisma.OperationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperationPayload>
          }
          deleteMany: {
            args: Prisma.OperationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OperationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OperationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperationPayload>[]
          }
          upsert: {
            args: Prisma.OperationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperationPayload>
          }
          aggregate: {
            args: Prisma.OperationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOperation>
          }
          groupBy: {
            args: Prisma.OperationGroupByArgs<ExtArgs>
            result: $Utils.Optional<OperationGroupByOutputType>[]
          }
          count: {
            args: Prisma.OperationCountArgs<ExtArgs>
            result: $Utils.Optional<OperationCountAggregateOutputType> | number
          }
        }
      }
      Snapshot: {
        payload: Prisma.$SnapshotPayload<ExtArgs>
        fields: Prisma.SnapshotFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SnapshotFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SnapshotPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SnapshotFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SnapshotPayload>
          }
          findFirst: {
            args: Prisma.SnapshotFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SnapshotPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SnapshotFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SnapshotPayload>
          }
          findMany: {
            args: Prisma.SnapshotFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SnapshotPayload>[]
          }
          create: {
            args: Prisma.SnapshotCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SnapshotPayload>
          }
          createMany: {
            args: Prisma.SnapshotCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SnapshotCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SnapshotPayload>[]
          }
          delete: {
            args: Prisma.SnapshotDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SnapshotPayload>
          }
          update: {
            args: Prisma.SnapshotUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SnapshotPayload>
          }
          deleteMany: {
            args: Prisma.SnapshotDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SnapshotUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SnapshotUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SnapshotPayload>[]
          }
          upsert: {
            args: Prisma.SnapshotUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SnapshotPayload>
          }
          aggregate: {
            args: Prisma.SnapshotAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSnapshot>
          }
          groupBy: {
            args: Prisma.SnapshotGroupByArgs<ExtArgs>
            result: $Utils.Optional<SnapshotGroupByOutputType>[]
          }
          count: {
            args: Prisma.SnapshotCountArgs<ExtArgs>
            result: $Utils.Optional<SnapshotCountAggregateOutputType> | number
          }
        }
      }
      Version: {
        payload: Prisma.$VersionPayload<ExtArgs>
        fields: Prisma.VersionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VersionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VersionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VersionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VersionPayload>
          }
          findFirst: {
            args: Prisma.VersionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VersionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VersionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VersionPayload>
          }
          findMany: {
            args: Prisma.VersionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VersionPayload>[]
          }
          create: {
            args: Prisma.VersionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VersionPayload>
          }
          createMany: {
            args: Prisma.VersionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VersionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VersionPayload>[]
          }
          delete: {
            args: Prisma.VersionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VersionPayload>
          }
          update: {
            args: Prisma.VersionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VersionPayload>
          }
          deleteMany: {
            args: Prisma.VersionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VersionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VersionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VersionPayload>[]
          }
          upsert: {
            args: Prisma.VersionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VersionPayload>
          }
          aggregate: {
            args: Prisma.VersionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVersion>
          }
          groupBy: {
            args: Prisma.VersionGroupByArgs<ExtArgs>
            result: $Utils.Optional<VersionGroupByOutputType>[]
          }
          count: {
            args: Prisma.VersionCountArgs<ExtArgs>
            result: $Utils.Optional<VersionCountAggregateOutputType> | number
          }
        }
      }
      SyncState: {
        payload: Prisma.$SyncStatePayload<ExtArgs>
        fields: Prisma.SyncStateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SyncStateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncStatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SyncStateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncStatePayload>
          }
          findFirst: {
            args: Prisma.SyncStateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncStatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SyncStateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncStatePayload>
          }
          findMany: {
            args: Prisma.SyncStateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncStatePayload>[]
          }
          create: {
            args: Prisma.SyncStateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncStatePayload>
          }
          createMany: {
            args: Prisma.SyncStateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SyncStateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncStatePayload>[]
          }
          delete: {
            args: Prisma.SyncStateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncStatePayload>
          }
          update: {
            args: Prisma.SyncStateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncStatePayload>
          }
          deleteMany: {
            args: Prisma.SyncStateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SyncStateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SyncStateUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncStatePayload>[]
          }
          upsert: {
            args: Prisma.SyncStateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncStatePayload>
          }
          aggregate: {
            args: Prisma.SyncStateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSyncState>
          }
          groupBy: {
            args: Prisma.SyncStateGroupByArgs<ExtArgs>
            result: $Utils.Optional<SyncStateGroupByOutputType>[]
          }
          count: {
            args: Prisma.SyncStateCountArgs<ExtArgs>
            result: $Utils.Optional<SyncStateCountAggregateOutputType> | number
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
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    document?: DocumentOmit
    documentMember?: DocumentMemberOmit
    operation?: OperationOmit
    snapshot?: SnapshotOmit
    version?: VersionOmit
    syncState?: SyncStateOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    documentsMember: number
    operations: number
    versions: number
    documents: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    documentsMember?: boolean | UserCountOutputTypeCountDocumentsMemberArgs
    operations?: boolean | UserCountOutputTypeCountOperationsArgs
    versions?: boolean | UserCountOutputTypeCountVersionsArgs
    documents?: boolean | UserCountOutputTypeCountDocumentsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDocumentsMemberArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentMemberWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOperationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OperationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountVersionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VersionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDocumentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentWhereInput
  }


  /**
   * Count Type DocumentCountOutputType
   */

  export type DocumentCountOutputType = {
    members: number
    operations: number
    snapshots: number
    versions: number
  }

  export type DocumentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | DocumentCountOutputTypeCountMembersArgs
    operations?: boolean | DocumentCountOutputTypeCountOperationsArgs
    snapshots?: boolean | DocumentCountOutputTypeCountSnapshotsArgs
    versions?: boolean | DocumentCountOutputTypeCountVersionsArgs
  }

  // Custom InputTypes
  /**
   * DocumentCountOutputType without action
   */
  export type DocumentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentCountOutputType
     */
    select?: DocumentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DocumentCountOutputType without action
   */
  export type DocumentCountOutputTypeCountMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentMemberWhereInput
  }

  /**
   * DocumentCountOutputType without action
   */
  export type DocumentCountOutputTypeCountOperationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OperationWhereInput
  }

  /**
   * DocumentCountOutputType without action
   */
  export type DocumentCountOutputTypeCountSnapshotsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SnapshotWhereInput
  }

  /**
   * DocumentCountOutputType without action
   */
  export type DocumentCountOutputTypeCountVersionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VersionWhereInput
  }


  /**
   * Count Type SnapshotCountOutputType
   */

  export type SnapshotCountOutputType = {
    versions: number
  }

  export type SnapshotCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    versions?: boolean | SnapshotCountOutputTypeCountVersionsArgs
  }

  // Custom InputTypes
  /**
   * SnapshotCountOutputType without action
   */
  export type SnapshotCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SnapshotCountOutputType
     */
    select?: SnapshotCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SnapshotCountOutputType without action
   */
  export type SnapshotCountOutputTypeCountVersionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VersionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    password: string | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    password: string | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    password: number
    createdAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    name: string | null
    password: string | null
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    createdAt?: boolean
    documentsMember?: boolean | User$documentsMemberArgs<ExtArgs>
    operations?: boolean | User$operationsArgs<ExtArgs>
    versions?: boolean | User$versionsArgs<ExtArgs>
    documents?: boolean | User$documentsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "password" | "createdAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    documentsMember?: boolean | User$documentsMemberArgs<ExtArgs>
    operations?: boolean | User$operationsArgs<ExtArgs>
    versions?: boolean | User$versionsArgs<ExtArgs>
    documents?: boolean | User$documentsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      documentsMember: Prisma.$DocumentMemberPayload<ExtArgs>[]
      operations: Prisma.$OperationPayload<ExtArgs>[]
      versions: Prisma.$VersionPayload<ExtArgs>[]
      documents: Prisma.$DocumentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      name: string | null
      password: string | null
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    documentsMember<T extends User$documentsMemberArgs<ExtArgs> = {}>(args?: Subset<T, User$documentsMemberArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    operations<T extends User$operationsArgs<ExtArgs> = {}>(args?: Subset<T, User$operationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OperationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    versions<T extends User$versionsArgs<ExtArgs> = {}>(args?: Subset<T, User$versionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VersionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    documents<T extends User$documentsArgs<ExtArgs> = {}>(args?: Subset<T, User$documentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.documentsMember
   */
  export type User$documentsMemberArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentMember
     */
    select?: DocumentMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentMember
     */
    omit?: DocumentMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentMemberInclude<ExtArgs> | null
    where?: DocumentMemberWhereInput
    orderBy?: DocumentMemberOrderByWithRelationInput | DocumentMemberOrderByWithRelationInput[]
    cursor?: DocumentMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DocumentMemberScalarFieldEnum | DocumentMemberScalarFieldEnum[]
  }

  /**
   * User.operations
   */
  export type User$operationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operation
     */
    select?: OperationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Operation
     */
    omit?: OperationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperationInclude<ExtArgs> | null
    where?: OperationWhereInput
    orderBy?: OperationOrderByWithRelationInput | OperationOrderByWithRelationInput[]
    cursor?: OperationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OperationScalarFieldEnum | OperationScalarFieldEnum[]
  }

  /**
   * User.versions
   */
  export type User$versionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Version
     */
    select?: VersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Version
     */
    omit?: VersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VersionInclude<ExtArgs> | null
    where?: VersionWhereInput
    orderBy?: VersionOrderByWithRelationInput | VersionOrderByWithRelationInput[]
    cursor?: VersionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VersionScalarFieldEnum | VersionScalarFieldEnum[]
  }

  /**
   * User.documents
   */
  export type User$documentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    where?: DocumentWhereInput
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    cursor?: DocumentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Document
   */

  export type AggregateDocument = {
    _count: DocumentCountAggregateOutputType | null
    _avg: DocumentAvgAggregateOutputType | null
    _sum: DocumentSumAggregateOutputType | null
    _min: DocumentMinAggregateOutputType | null
    _max: DocumentMaxAggregateOutputType | null
  }

  export type DocumentAvgAggregateOutputType = {
    serverVersion: number | null
  }

  export type DocumentSumAggregateOutputType = {
    serverVersion: number | null
  }

  export type DocumentMinAggregateOutputType = {
    id: string | null
    title: string | null
    serverVersion: number | null
    ownerId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DocumentMaxAggregateOutputType = {
    id: string | null
    title: string | null
    serverVersion: number | null
    ownerId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DocumentCountAggregateOutputType = {
    id: number
    title: number
    content: number
    serverVersion: number
    ownerId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DocumentAvgAggregateInputType = {
    serverVersion?: true
  }

  export type DocumentSumAggregateInputType = {
    serverVersion?: true
  }

  export type DocumentMinAggregateInputType = {
    id?: true
    title?: true
    serverVersion?: true
    ownerId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DocumentMaxAggregateInputType = {
    id?: true
    title?: true
    serverVersion?: true
    ownerId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DocumentCountAggregateInputType = {
    id?: true
    title?: true
    content?: true
    serverVersion?: true
    ownerId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DocumentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Document to aggregate.
     */
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Documents
    **/
    _count?: true | DocumentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DocumentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DocumentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DocumentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DocumentMaxAggregateInputType
  }

  export type GetDocumentAggregateType<T extends DocumentAggregateArgs> = {
        [P in keyof T & keyof AggregateDocument]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDocument[P]>
      : GetScalarType<T[P], AggregateDocument[P]>
  }




  export type DocumentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentWhereInput
    orderBy?: DocumentOrderByWithAggregationInput | DocumentOrderByWithAggregationInput[]
    by: DocumentScalarFieldEnum[] | DocumentScalarFieldEnum
    having?: DocumentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DocumentCountAggregateInputType | true
    _avg?: DocumentAvgAggregateInputType
    _sum?: DocumentSumAggregateInputType
    _min?: DocumentMinAggregateInputType
    _max?: DocumentMaxAggregateInputType
  }

  export type DocumentGroupByOutputType = {
    id: string
    title: string
    content: JsonValue
    serverVersion: number
    ownerId: string
    createdAt: Date
    updatedAt: Date
    _count: DocumentCountAggregateOutputType | null
    _avg: DocumentAvgAggregateOutputType | null
    _sum: DocumentSumAggregateOutputType | null
    _min: DocumentMinAggregateOutputType | null
    _max: DocumentMaxAggregateOutputType | null
  }

  type GetDocumentGroupByPayload<T extends DocumentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DocumentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DocumentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DocumentGroupByOutputType[P]>
            : GetScalarType<T[P], DocumentGroupByOutputType[P]>
        }
      >
    >


  export type DocumentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    serverVersion?: boolean
    ownerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
    members?: boolean | Document$membersArgs<ExtArgs>
    operations?: boolean | Document$operationsArgs<ExtArgs>
    snapshots?: boolean | Document$snapshotsArgs<ExtArgs>
    versions?: boolean | Document$versionsArgs<ExtArgs>
    _count?: boolean | DocumentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["document"]>

  export type DocumentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    serverVersion?: boolean
    ownerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["document"]>

  export type DocumentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    serverVersion?: boolean
    ownerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["document"]>

  export type DocumentSelectScalar = {
    id?: boolean
    title?: boolean
    content?: boolean
    serverVersion?: boolean
    ownerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DocumentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "content" | "serverVersion" | "ownerId" | "createdAt" | "updatedAt", ExtArgs["result"]["document"]>
  export type DocumentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
    members?: boolean | Document$membersArgs<ExtArgs>
    operations?: boolean | Document$operationsArgs<ExtArgs>
    snapshots?: boolean | Document$snapshotsArgs<ExtArgs>
    versions?: boolean | Document$versionsArgs<ExtArgs>
    _count?: boolean | DocumentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DocumentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type DocumentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $DocumentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Document"
    objects: {
      owner: Prisma.$UserPayload<ExtArgs>
      members: Prisma.$DocumentMemberPayload<ExtArgs>[]
      operations: Prisma.$OperationPayload<ExtArgs>[]
      snapshots: Prisma.$SnapshotPayload<ExtArgs>[]
      versions: Prisma.$VersionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      content: Prisma.JsonValue
      serverVersion: number
      ownerId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["document"]>
    composites: {}
  }

  type DocumentGetPayload<S extends boolean | null | undefined | DocumentDefaultArgs> = $Result.GetResult<Prisma.$DocumentPayload, S>

  type DocumentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DocumentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DocumentCountAggregateInputType | true
    }

  export interface DocumentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Document'], meta: { name: 'Document' } }
    /**
     * Find zero or one Document that matches the filter.
     * @param {DocumentFindUniqueArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DocumentFindUniqueArgs>(args: SelectSubset<T, DocumentFindUniqueArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Document that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DocumentFindUniqueOrThrowArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DocumentFindUniqueOrThrowArgs>(args: SelectSubset<T, DocumentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Document that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentFindFirstArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DocumentFindFirstArgs>(args?: SelectSubset<T, DocumentFindFirstArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Document that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentFindFirstOrThrowArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DocumentFindFirstOrThrowArgs>(args?: SelectSubset<T, DocumentFindFirstOrThrowArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Documents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Documents
     * const documents = await prisma.document.findMany()
     * 
     * // Get first 10 Documents
     * const documents = await prisma.document.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const documentWithIdOnly = await prisma.document.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DocumentFindManyArgs>(args?: SelectSubset<T, DocumentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Document.
     * @param {DocumentCreateArgs} args - Arguments to create a Document.
     * @example
     * // Create one Document
     * const Document = await prisma.document.create({
     *   data: {
     *     // ... data to create a Document
     *   }
     * })
     * 
     */
    create<T extends DocumentCreateArgs>(args: SelectSubset<T, DocumentCreateArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Documents.
     * @param {DocumentCreateManyArgs} args - Arguments to create many Documents.
     * @example
     * // Create many Documents
     * const document = await prisma.document.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DocumentCreateManyArgs>(args?: SelectSubset<T, DocumentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Documents and returns the data saved in the database.
     * @param {DocumentCreateManyAndReturnArgs} args - Arguments to create many Documents.
     * @example
     * // Create many Documents
     * const document = await prisma.document.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Documents and only return the `id`
     * const documentWithIdOnly = await prisma.document.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DocumentCreateManyAndReturnArgs>(args?: SelectSubset<T, DocumentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Document.
     * @param {DocumentDeleteArgs} args - Arguments to delete one Document.
     * @example
     * // Delete one Document
     * const Document = await prisma.document.delete({
     *   where: {
     *     // ... filter to delete one Document
     *   }
     * })
     * 
     */
    delete<T extends DocumentDeleteArgs>(args: SelectSubset<T, DocumentDeleteArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Document.
     * @param {DocumentUpdateArgs} args - Arguments to update one Document.
     * @example
     * // Update one Document
     * const document = await prisma.document.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DocumentUpdateArgs>(args: SelectSubset<T, DocumentUpdateArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Documents.
     * @param {DocumentDeleteManyArgs} args - Arguments to filter Documents to delete.
     * @example
     * // Delete a few Documents
     * const { count } = await prisma.document.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DocumentDeleteManyArgs>(args?: SelectSubset<T, DocumentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Documents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Documents
     * const document = await prisma.document.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DocumentUpdateManyArgs>(args: SelectSubset<T, DocumentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Documents and returns the data updated in the database.
     * @param {DocumentUpdateManyAndReturnArgs} args - Arguments to update many Documents.
     * @example
     * // Update many Documents
     * const document = await prisma.document.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Documents and only return the `id`
     * const documentWithIdOnly = await prisma.document.updateManyAndReturn({
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
    updateManyAndReturn<T extends DocumentUpdateManyAndReturnArgs>(args: SelectSubset<T, DocumentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Document.
     * @param {DocumentUpsertArgs} args - Arguments to update or create a Document.
     * @example
     * // Update or create a Document
     * const document = await prisma.document.upsert({
     *   create: {
     *     // ... data to create a Document
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Document we want to update
     *   }
     * })
     */
    upsert<T extends DocumentUpsertArgs>(args: SelectSubset<T, DocumentUpsertArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Documents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentCountArgs} args - Arguments to filter Documents to count.
     * @example
     * // Count the number of Documents
     * const count = await prisma.document.count({
     *   where: {
     *     // ... the filter for the Documents we want to count
     *   }
     * })
    **/
    count<T extends DocumentCountArgs>(
      args?: Subset<T, DocumentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DocumentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Document.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DocumentAggregateArgs>(args: Subset<T, DocumentAggregateArgs>): Prisma.PrismaPromise<GetDocumentAggregateType<T>>

    /**
     * Group by Document.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentGroupByArgs} args - Group by arguments.
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
      T extends DocumentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DocumentGroupByArgs['orderBy'] }
        : { orderBy?: DocumentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DocumentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDocumentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Document model
   */
  readonly fields: DocumentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Document.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DocumentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    owner<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    members<T extends Document$membersArgs<ExtArgs> = {}>(args?: Subset<T, Document$membersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    operations<T extends Document$operationsArgs<ExtArgs> = {}>(args?: Subset<T, Document$operationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OperationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    snapshots<T extends Document$snapshotsArgs<ExtArgs> = {}>(args?: Subset<T, Document$snapshotsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SnapshotPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    versions<T extends Document$versionsArgs<ExtArgs> = {}>(args?: Subset<T, Document$versionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VersionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Document model
   */
  interface DocumentFieldRefs {
    readonly id: FieldRef<"Document", 'String'>
    readonly title: FieldRef<"Document", 'String'>
    readonly content: FieldRef<"Document", 'Json'>
    readonly serverVersion: FieldRef<"Document", 'Int'>
    readonly ownerId: FieldRef<"Document", 'String'>
    readonly createdAt: FieldRef<"Document", 'DateTime'>
    readonly updatedAt: FieldRef<"Document", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Document findUnique
   */
  export type DocumentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Document to fetch.
     */
    where: DocumentWhereUniqueInput
  }

  /**
   * Document findUniqueOrThrow
   */
  export type DocumentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Document to fetch.
     */
    where: DocumentWhereUniqueInput
  }

  /**
   * Document findFirst
   */
  export type DocumentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Document to fetch.
     */
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Documents.
     */
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Documents.
     */
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * Document findFirstOrThrow
   */
  export type DocumentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Document to fetch.
     */
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Documents.
     */
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Documents.
     */
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * Document findMany
   */
  export type DocumentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Documents to fetch.
     */
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Documents.
     */
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Documents.
     */
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * Document create
   */
  export type DocumentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * The data needed to create a Document.
     */
    data: XOR<DocumentCreateInput, DocumentUncheckedCreateInput>
  }

  /**
   * Document createMany
   */
  export type DocumentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Documents.
     */
    data: DocumentCreateManyInput | DocumentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Document createManyAndReturn
   */
  export type DocumentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * The data used to create many Documents.
     */
    data: DocumentCreateManyInput | DocumentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Document update
   */
  export type DocumentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * The data needed to update a Document.
     */
    data: XOR<DocumentUpdateInput, DocumentUncheckedUpdateInput>
    /**
     * Choose, which Document to update.
     */
    where: DocumentWhereUniqueInput
  }

  /**
   * Document updateMany
   */
  export type DocumentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Documents.
     */
    data: XOR<DocumentUpdateManyMutationInput, DocumentUncheckedUpdateManyInput>
    /**
     * Filter which Documents to update
     */
    where?: DocumentWhereInput
    /**
     * Limit how many Documents to update.
     */
    limit?: number
  }

  /**
   * Document updateManyAndReturn
   */
  export type DocumentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * The data used to update Documents.
     */
    data: XOR<DocumentUpdateManyMutationInput, DocumentUncheckedUpdateManyInput>
    /**
     * Filter which Documents to update
     */
    where?: DocumentWhereInput
    /**
     * Limit how many Documents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Document upsert
   */
  export type DocumentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * The filter to search for the Document to update in case it exists.
     */
    where: DocumentWhereUniqueInput
    /**
     * In case the Document found by the `where` argument doesn't exist, create a new Document with this data.
     */
    create: XOR<DocumentCreateInput, DocumentUncheckedCreateInput>
    /**
     * In case the Document was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DocumentUpdateInput, DocumentUncheckedUpdateInput>
  }

  /**
   * Document delete
   */
  export type DocumentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter which Document to delete.
     */
    where: DocumentWhereUniqueInput
  }

  /**
   * Document deleteMany
   */
  export type DocumentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Documents to delete
     */
    where?: DocumentWhereInput
    /**
     * Limit how many Documents to delete.
     */
    limit?: number
  }

  /**
   * Document.members
   */
  export type Document$membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentMember
     */
    select?: DocumentMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentMember
     */
    omit?: DocumentMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentMemberInclude<ExtArgs> | null
    where?: DocumentMemberWhereInput
    orderBy?: DocumentMemberOrderByWithRelationInput | DocumentMemberOrderByWithRelationInput[]
    cursor?: DocumentMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DocumentMemberScalarFieldEnum | DocumentMemberScalarFieldEnum[]
  }

  /**
   * Document.operations
   */
  export type Document$operationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operation
     */
    select?: OperationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Operation
     */
    omit?: OperationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperationInclude<ExtArgs> | null
    where?: OperationWhereInput
    orderBy?: OperationOrderByWithRelationInput | OperationOrderByWithRelationInput[]
    cursor?: OperationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OperationScalarFieldEnum | OperationScalarFieldEnum[]
  }

  /**
   * Document.snapshots
   */
  export type Document$snapshotsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Snapshot
     */
    select?: SnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Snapshot
     */
    omit?: SnapshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SnapshotInclude<ExtArgs> | null
    where?: SnapshotWhereInput
    orderBy?: SnapshotOrderByWithRelationInput | SnapshotOrderByWithRelationInput[]
    cursor?: SnapshotWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SnapshotScalarFieldEnum | SnapshotScalarFieldEnum[]
  }

  /**
   * Document.versions
   */
  export type Document$versionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Version
     */
    select?: VersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Version
     */
    omit?: VersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VersionInclude<ExtArgs> | null
    where?: VersionWhereInput
    orderBy?: VersionOrderByWithRelationInput | VersionOrderByWithRelationInput[]
    cursor?: VersionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VersionScalarFieldEnum | VersionScalarFieldEnum[]
  }

  /**
   * Document without action
   */
  export type DocumentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
  }


  /**
   * Model DocumentMember
   */

  export type AggregateDocumentMember = {
    _count: DocumentMemberCountAggregateOutputType | null
    _min: DocumentMemberMinAggregateOutputType | null
    _max: DocumentMemberMaxAggregateOutputType | null
  }

  export type DocumentMemberMinAggregateOutputType = {
    id: string | null
    documentId: string | null
    userId: string | null
    role: $Enums.Role | null
  }

  export type DocumentMemberMaxAggregateOutputType = {
    id: string | null
    documentId: string | null
    userId: string | null
    role: $Enums.Role | null
  }

  export type DocumentMemberCountAggregateOutputType = {
    id: number
    documentId: number
    userId: number
    role: number
    _all: number
  }


  export type DocumentMemberMinAggregateInputType = {
    id?: true
    documentId?: true
    userId?: true
    role?: true
  }

  export type DocumentMemberMaxAggregateInputType = {
    id?: true
    documentId?: true
    userId?: true
    role?: true
  }

  export type DocumentMemberCountAggregateInputType = {
    id?: true
    documentId?: true
    userId?: true
    role?: true
    _all?: true
  }

  export type DocumentMemberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DocumentMember to aggregate.
     */
    where?: DocumentMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DocumentMembers to fetch.
     */
    orderBy?: DocumentMemberOrderByWithRelationInput | DocumentMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DocumentMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DocumentMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DocumentMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DocumentMembers
    **/
    _count?: true | DocumentMemberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DocumentMemberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DocumentMemberMaxAggregateInputType
  }

  export type GetDocumentMemberAggregateType<T extends DocumentMemberAggregateArgs> = {
        [P in keyof T & keyof AggregateDocumentMember]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDocumentMember[P]>
      : GetScalarType<T[P], AggregateDocumentMember[P]>
  }




  export type DocumentMemberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentMemberWhereInput
    orderBy?: DocumentMemberOrderByWithAggregationInput | DocumentMemberOrderByWithAggregationInput[]
    by: DocumentMemberScalarFieldEnum[] | DocumentMemberScalarFieldEnum
    having?: DocumentMemberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DocumentMemberCountAggregateInputType | true
    _min?: DocumentMemberMinAggregateInputType
    _max?: DocumentMemberMaxAggregateInputType
  }

  export type DocumentMemberGroupByOutputType = {
    id: string
    documentId: string
    userId: string
    role: $Enums.Role
    _count: DocumentMemberCountAggregateOutputType | null
    _min: DocumentMemberMinAggregateOutputType | null
    _max: DocumentMemberMaxAggregateOutputType | null
  }

  type GetDocumentMemberGroupByPayload<T extends DocumentMemberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DocumentMemberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DocumentMemberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DocumentMemberGroupByOutputType[P]>
            : GetScalarType<T[P], DocumentMemberGroupByOutputType[P]>
        }
      >
    >


  export type DocumentMemberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    documentId?: boolean
    userId?: boolean
    role?: boolean
    document?: boolean | DocumentDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["documentMember"]>

  export type DocumentMemberSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    documentId?: boolean
    userId?: boolean
    role?: boolean
    document?: boolean | DocumentDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["documentMember"]>

  export type DocumentMemberSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    documentId?: boolean
    userId?: boolean
    role?: boolean
    document?: boolean | DocumentDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["documentMember"]>

  export type DocumentMemberSelectScalar = {
    id?: boolean
    documentId?: boolean
    userId?: boolean
    role?: boolean
  }

  export type DocumentMemberOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "documentId" | "userId" | "role", ExtArgs["result"]["documentMember"]>
  export type DocumentMemberInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    document?: boolean | DocumentDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type DocumentMemberIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    document?: boolean | DocumentDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type DocumentMemberIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    document?: boolean | DocumentDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $DocumentMemberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DocumentMember"
    objects: {
      document: Prisma.$DocumentPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      documentId: string
      userId: string
      role: $Enums.Role
    }, ExtArgs["result"]["documentMember"]>
    composites: {}
  }

  type DocumentMemberGetPayload<S extends boolean | null | undefined | DocumentMemberDefaultArgs> = $Result.GetResult<Prisma.$DocumentMemberPayload, S>

  type DocumentMemberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DocumentMemberFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DocumentMemberCountAggregateInputType | true
    }

  export interface DocumentMemberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DocumentMember'], meta: { name: 'DocumentMember' } }
    /**
     * Find zero or one DocumentMember that matches the filter.
     * @param {DocumentMemberFindUniqueArgs} args - Arguments to find a DocumentMember
     * @example
     * // Get one DocumentMember
     * const documentMember = await prisma.documentMember.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DocumentMemberFindUniqueArgs>(args: SelectSubset<T, DocumentMemberFindUniqueArgs<ExtArgs>>): Prisma__DocumentMemberClient<$Result.GetResult<Prisma.$DocumentMemberPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DocumentMember that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DocumentMemberFindUniqueOrThrowArgs} args - Arguments to find a DocumentMember
     * @example
     * // Get one DocumentMember
     * const documentMember = await prisma.documentMember.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DocumentMemberFindUniqueOrThrowArgs>(args: SelectSubset<T, DocumentMemberFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DocumentMemberClient<$Result.GetResult<Prisma.$DocumentMemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DocumentMember that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentMemberFindFirstArgs} args - Arguments to find a DocumentMember
     * @example
     * // Get one DocumentMember
     * const documentMember = await prisma.documentMember.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DocumentMemberFindFirstArgs>(args?: SelectSubset<T, DocumentMemberFindFirstArgs<ExtArgs>>): Prisma__DocumentMemberClient<$Result.GetResult<Prisma.$DocumentMemberPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DocumentMember that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentMemberFindFirstOrThrowArgs} args - Arguments to find a DocumentMember
     * @example
     * // Get one DocumentMember
     * const documentMember = await prisma.documentMember.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DocumentMemberFindFirstOrThrowArgs>(args?: SelectSubset<T, DocumentMemberFindFirstOrThrowArgs<ExtArgs>>): Prisma__DocumentMemberClient<$Result.GetResult<Prisma.$DocumentMemberPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DocumentMembers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentMemberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DocumentMembers
     * const documentMembers = await prisma.documentMember.findMany()
     * 
     * // Get first 10 DocumentMembers
     * const documentMembers = await prisma.documentMember.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const documentMemberWithIdOnly = await prisma.documentMember.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DocumentMemberFindManyArgs>(args?: SelectSubset<T, DocumentMemberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DocumentMember.
     * @param {DocumentMemberCreateArgs} args - Arguments to create a DocumentMember.
     * @example
     * // Create one DocumentMember
     * const DocumentMember = await prisma.documentMember.create({
     *   data: {
     *     // ... data to create a DocumentMember
     *   }
     * })
     * 
     */
    create<T extends DocumentMemberCreateArgs>(args: SelectSubset<T, DocumentMemberCreateArgs<ExtArgs>>): Prisma__DocumentMemberClient<$Result.GetResult<Prisma.$DocumentMemberPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DocumentMembers.
     * @param {DocumentMemberCreateManyArgs} args - Arguments to create many DocumentMembers.
     * @example
     * // Create many DocumentMembers
     * const documentMember = await prisma.documentMember.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DocumentMemberCreateManyArgs>(args?: SelectSubset<T, DocumentMemberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DocumentMembers and returns the data saved in the database.
     * @param {DocumentMemberCreateManyAndReturnArgs} args - Arguments to create many DocumentMembers.
     * @example
     * // Create many DocumentMembers
     * const documentMember = await prisma.documentMember.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DocumentMembers and only return the `id`
     * const documentMemberWithIdOnly = await prisma.documentMember.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DocumentMemberCreateManyAndReturnArgs>(args?: SelectSubset<T, DocumentMemberCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentMemberPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DocumentMember.
     * @param {DocumentMemberDeleteArgs} args - Arguments to delete one DocumentMember.
     * @example
     * // Delete one DocumentMember
     * const DocumentMember = await prisma.documentMember.delete({
     *   where: {
     *     // ... filter to delete one DocumentMember
     *   }
     * })
     * 
     */
    delete<T extends DocumentMemberDeleteArgs>(args: SelectSubset<T, DocumentMemberDeleteArgs<ExtArgs>>): Prisma__DocumentMemberClient<$Result.GetResult<Prisma.$DocumentMemberPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DocumentMember.
     * @param {DocumentMemberUpdateArgs} args - Arguments to update one DocumentMember.
     * @example
     * // Update one DocumentMember
     * const documentMember = await prisma.documentMember.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DocumentMemberUpdateArgs>(args: SelectSubset<T, DocumentMemberUpdateArgs<ExtArgs>>): Prisma__DocumentMemberClient<$Result.GetResult<Prisma.$DocumentMemberPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DocumentMembers.
     * @param {DocumentMemberDeleteManyArgs} args - Arguments to filter DocumentMembers to delete.
     * @example
     * // Delete a few DocumentMembers
     * const { count } = await prisma.documentMember.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DocumentMemberDeleteManyArgs>(args?: SelectSubset<T, DocumentMemberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DocumentMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentMemberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DocumentMembers
     * const documentMember = await prisma.documentMember.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DocumentMemberUpdateManyArgs>(args: SelectSubset<T, DocumentMemberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DocumentMembers and returns the data updated in the database.
     * @param {DocumentMemberUpdateManyAndReturnArgs} args - Arguments to update many DocumentMembers.
     * @example
     * // Update many DocumentMembers
     * const documentMember = await prisma.documentMember.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DocumentMembers and only return the `id`
     * const documentMemberWithIdOnly = await prisma.documentMember.updateManyAndReturn({
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
    updateManyAndReturn<T extends DocumentMemberUpdateManyAndReturnArgs>(args: SelectSubset<T, DocumentMemberUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentMemberPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DocumentMember.
     * @param {DocumentMemberUpsertArgs} args - Arguments to update or create a DocumentMember.
     * @example
     * // Update or create a DocumentMember
     * const documentMember = await prisma.documentMember.upsert({
     *   create: {
     *     // ... data to create a DocumentMember
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DocumentMember we want to update
     *   }
     * })
     */
    upsert<T extends DocumentMemberUpsertArgs>(args: SelectSubset<T, DocumentMemberUpsertArgs<ExtArgs>>): Prisma__DocumentMemberClient<$Result.GetResult<Prisma.$DocumentMemberPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DocumentMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentMemberCountArgs} args - Arguments to filter DocumentMembers to count.
     * @example
     * // Count the number of DocumentMembers
     * const count = await prisma.documentMember.count({
     *   where: {
     *     // ... the filter for the DocumentMembers we want to count
     *   }
     * })
    **/
    count<T extends DocumentMemberCountArgs>(
      args?: Subset<T, DocumentMemberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DocumentMemberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DocumentMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentMemberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DocumentMemberAggregateArgs>(args: Subset<T, DocumentMemberAggregateArgs>): Prisma.PrismaPromise<GetDocumentMemberAggregateType<T>>

    /**
     * Group by DocumentMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentMemberGroupByArgs} args - Group by arguments.
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
      T extends DocumentMemberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DocumentMemberGroupByArgs['orderBy'] }
        : { orderBy?: DocumentMemberGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DocumentMemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDocumentMemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DocumentMember model
   */
  readonly fields: DocumentMemberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DocumentMember.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DocumentMemberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    document<T extends DocumentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DocumentDefaultArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the DocumentMember model
   */
  interface DocumentMemberFieldRefs {
    readonly id: FieldRef<"DocumentMember", 'String'>
    readonly documentId: FieldRef<"DocumentMember", 'String'>
    readonly userId: FieldRef<"DocumentMember", 'String'>
    readonly role: FieldRef<"DocumentMember", 'Role'>
  }
    

  // Custom InputTypes
  /**
   * DocumentMember findUnique
   */
  export type DocumentMemberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentMember
     */
    select?: DocumentMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentMember
     */
    omit?: DocumentMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentMemberInclude<ExtArgs> | null
    /**
     * Filter, which DocumentMember to fetch.
     */
    where: DocumentMemberWhereUniqueInput
  }

  /**
   * DocumentMember findUniqueOrThrow
   */
  export type DocumentMemberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentMember
     */
    select?: DocumentMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentMember
     */
    omit?: DocumentMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentMemberInclude<ExtArgs> | null
    /**
     * Filter, which DocumentMember to fetch.
     */
    where: DocumentMemberWhereUniqueInput
  }

  /**
   * DocumentMember findFirst
   */
  export type DocumentMemberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentMember
     */
    select?: DocumentMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentMember
     */
    omit?: DocumentMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentMemberInclude<ExtArgs> | null
    /**
     * Filter, which DocumentMember to fetch.
     */
    where?: DocumentMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DocumentMembers to fetch.
     */
    orderBy?: DocumentMemberOrderByWithRelationInput | DocumentMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DocumentMembers.
     */
    cursor?: DocumentMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DocumentMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DocumentMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DocumentMembers.
     */
    distinct?: DocumentMemberScalarFieldEnum | DocumentMemberScalarFieldEnum[]
  }

  /**
   * DocumentMember findFirstOrThrow
   */
  export type DocumentMemberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentMember
     */
    select?: DocumentMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentMember
     */
    omit?: DocumentMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentMemberInclude<ExtArgs> | null
    /**
     * Filter, which DocumentMember to fetch.
     */
    where?: DocumentMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DocumentMembers to fetch.
     */
    orderBy?: DocumentMemberOrderByWithRelationInput | DocumentMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DocumentMembers.
     */
    cursor?: DocumentMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DocumentMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DocumentMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DocumentMembers.
     */
    distinct?: DocumentMemberScalarFieldEnum | DocumentMemberScalarFieldEnum[]
  }

  /**
   * DocumentMember findMany
   */
  export type DocumentMemberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentMember
     */
    select?: DocumentMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentMember
     */
    omit?: DocumentMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentMemberInclude<ExtArgs> | null
    /**
     * Filter, which DocumentMembers to fetch.
     */
    where?: DocumentMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DocumentMembers to fetch.
     */
    orderBy?: DocumentMemberOrderByWithRelationInput | DocumentMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DocumentMembers.
     */
    cursor?: DocumentMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DocumentMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DocumentMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DocumentMembers.
     */
    distinct?: DocumentMemberScalarFieldEnum | DocumentMemberScalarFieldEnum[]
  }

  /**
   * DocumentMember create
   */
  export type DocumentMemberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentMember
     */
    select?: DocumentMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentMember
     */
    omit?: DocumentMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentMemberInclude<ExtArgs> | null
    /**
     * The data needed to create a DocumentMember.
     */
    data: XOR<DocumentMemberCreateInput, DocumentMemberUncheckedCreateInput>
  }

  /**
   * DocumentMember createMany
   */
  export type DocumentMemberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DocumentMembers.
     */
    data: DocumentMemberCreateManyInput | DocumentMemberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DocumentMember createManyAndReturn
   */
  export type DocumentMemberCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentMember
     */
    select?: DocumentMemberSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentMember
     */
    omit?: DocumentMemberOmit<ExtArgs> | null
    /**
     * The data used to create many DocumentMembers.
     */
    data: DocumentMemberCreateManyInput | DocumentMemberCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentMemberIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DocumentMember update
   */
  export type DocumentMemberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentMember
     */
    select?: DocumentMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentMember
     */
    omit?: DocumentMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentMemberInclude<ExtArgs> | null
    /**
     * The data needed to update a DocumentMember.
     */
    data: XOR<DocumentMemberUpdateInput, DocumentMemberUncheckedUpdateInput>
    /**
     * Choose, which DocumentMember to update.
     */
    where: DocumentMemberWhereUniqueInput
  }

  /**
   * DocumentMember updateMany
   */
  export type DocumentMemberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DocumentMembers.
     */
    data: XOR<DocumentMemberUpdateManyMutationInput, DocumentMemberUncheckedUpdateManyInput>
    /**
     * Filter which DocumentMembers to update
     */
    where?: DocumentMemberWhereInput
    /**
     * Limit how many DocumentMembers to update.
     */
    limit?: number
  }

  /**
   * DocumentMember updateManyAndReturn
   */
  export type DocumentMemberUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentMember
     */
    select?: DocumentMemberSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentMember
     */
    omit?: DocumentMemberOmit<ExtArgs> | null
    /**
     * The data used to update DocumentMembers.
     */
    data: XOR<DocumentMemberUpdateManyMutationInput, DocumentMemberUncheckedUpdateManyInput>
    /**
     * Filter which DocumentMembers to update
     */
    where?: DocumentMemberWhereInput
    /**
     * Limit how many DocumentMembers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentMemberIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DocumentMember upsert
   */
  export type DocumentMemberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentMember
     */
    select?: DocumentMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentMember
     */
    omit?: DocumentMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentMemberInclude<ExtArgs> | null
    /**
     * The filter to search for the DocumentMember to update in case it exists.
     */
    where: DocumentMemberWhereUniqueInput
    /**
     * In case the DocumentMember found by the `where` argument doesn't exist, create a new DocumentMember with this data.
     */
    create: XOR<DocumentMemberCreateInput, DocumentMemberUncheckedCreateInput>
    /**
     * In case the DocumentMember was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DocumentMemberUpdateInput, DocumentMemberUncheckedUpdateInput>
  }

  /**
   * DocumentMember delete
   */
  export type DocumentMemberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentMember
     */
    select?: DocumentMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentMember
     */
    omit?: DocumentMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentMemberInclude<ExtArgs> | null
    /**
     * Filter which DocumentMember to delete.
     */
    where: DocumentMemberWhereUniqueInput
  }

  /**
   * DocumentMember deleteMany
   */
  export type DocumentMemberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DocumentMembers to delete
     */
    where?: DocumentMemberWhereInput
    /**
     * Limit how many DocumentMembers to delete.
     */
    limit?: number
  }

  /**
   * DocumentMember without action
   */
  export type DocumentMemberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentMember
     */
    select?: DocumentMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentMember
     */
    omit?: DocumentMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentMemberInclude<ExtArgs> | null
  }


  /**
   * Model Operation
   */

  export type AggregateOperation = {
    _count: OperationCountAggregateOutputType | null
    _avg: OperationAvgAggregateOutputType | null
    _sum: OperationSumAggregateOutputType | null
    _min: OperationMinAggregateOutputType | null
    _max: OperationMaxAggregateOutputType | null
  }

  export type OperationAvgAggregateOutputType = {
    sequence: number | null
    serverVersion: number | null
  }

  export type OperationSumAggregateOutputType = {
    sequence: number | null
    serverVersion: number | null
  }

  export type OperationMinAggregateOutputType = {
    id: string | null
    documentId: string | null
    userId: string | null
    type: string | null
    clientId: string | null
    sequence: number | null
    serverVersion: number | null
    createdAt: Date | null
  }

  export type OperationMaxAggregateOutputType = {
    id: string | null
    documentId: string | null
    userId: string | null
    type: string | null
    clientId: string | null
    sequence: number | null
    serverVersion: number | null
    createdAt: Date | null
  }

  export type OperationCountAggregateOutputType = {
    id: number
    documentId: number
    userId: number
    type: number
    payload: number
    clientId: number
    sequence: number
    serverVersion: number
    createdAt: number
    _all: number
  }


  export type OperationAvgAggregateInputType = {
    sequence?: true
    serverVersion?: true
  }

  export type OperationSumAggregateInputType = {
    sequence?: true
    serverVersion?: true
  }

  export type OperationMinAggregateInputType = {
    id?: true
    documentId?: true
    userId?: true
    type?: true
    clientId?: true
    sequence?: true
    serverVersion?: true
    createdAt?: true
  }

  export type OperationMaxAggregateInputType = {
    id?: true
    documentId?: true
    userId?: true
    type?: true
    clientId?: true
    sequence?: true
    serverVersion?: true
    createdAt?: true
  }

  export type OperationCountAggregateInputType = {
    id?: true
    documentId?: true
    userId?: true
    type?: true
    payload?: true
    clientId?: true
    sequence?: true
    serverVersion?: true
    createdAt?: true
    _all?: true
  }

  export type OperationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Operation to aggregate.
     */
    where?: OperationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Operations to fetch.
     */
    orderBy?: OperationOrderByWithRelationInput | OperationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OperationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Operations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Operations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Operations
    **/
    _count?: true | OperationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OperationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OperationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OperationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OperationMaxAggregateInputType
  }

  export type GetOperationAggregateType<T extends OperationAggregateArgs> = {
        [P in keyof T & keyof AggregateOperation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOperation[P]>
      : GetScalarType<T[P], AggregateOperation[P]>
  }




  export type OperationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OperationWhereInput
    orderBy?: OperationOrderByWithAggregationInput | OperationOrderByWithAggregationInput[]
    by: OperationScalarFieldEnum[] | OperationScalarFieldEnum
    having?: OperationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OperationCountAggregateInputType | true
    _avg?: OperationAvgAggregateInputType
    _sum?: OperationSumAggregateInputType
    _min?: OperationMinAggregateInputType
    _max?: OperationMaxAggregateInputType
  }

  export type OperationGroupByOutputType = {
    id: string
    documentId: string
    userId: string
    type: string
    payload: JsonValue
    clientId: string
    sequence: number
    serverVersion: number
    createdAt: Date
    _count: OperationCountAggregateOutputType | null
    _avg: OperationAvgAggregateOutputType | null
    _sum: OperationSumAggregateOutputType | null
    _min: OperationMinAggregateOutputType | null
    _max: OperationMaxAggregateOutputType | null
  }

  type GetOperationGroupByPayload<T extends OperationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OperationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OperationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OperationGroupByOutputType[P]>
            : GetScalarType<T[P], OperationGroupByOutputType[P]>
        }
      >
    >


  export type OperationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    documentId?: boolean
    userId?: boolean
    type?: boolean
    payload?: boolean
    clientId?: boolean
    sequence?: boolean
    serverVersion?: boolean
    createdAt?: boolean
    document?: boolean | DocumentDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["operation"]>

  export type OperationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    documentId?: boolean
    userId?: boolean
    type?: boolean
    payload?: boolean
    clientId?: boolean
    sequence?: boolean
    serverVersion?: boolean
    createdAt?: boolean
    document?: boolean | DocumentDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["operation"]>

  export type OperationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    documentId?: boolean
    userId?: boolean
    type?: boolean
    payload?: boolean
    clientId?: boolean
    sequence?: boolean
    serverVersion?: boolean
    createdAt?: boolean
    document?: boolean | DocumentDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["operation"]>

  export type OperationSelectScalar = {
    id?: boolean
    documentId?: boolean
    userId?: boolean
    type?: boolean
    payload?: boolean
    clientId?: boolean
    sequence?: boolean
    serverVersion?: boolean
    createdAt?: boolean
  }

  export type OperationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "documentId" | "userId" | "type" | "payload" | "clientId" | "sequence" | "serverVersion" | "createdAt", ExtArgs["result"]["operation"]>
  export type OperationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    document?: boolean | DocumentDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type OperationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    document?: boolean | DocumentDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type OperationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    document?: boolean | DocumentDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $OperationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Operation"
    objects: {
      document: Prisma.$DocumentPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      documentId: string
      userId: string
      type: string
      payload: Prisma.JsonValue
      clientId: string
      sequence: number
      serverVersion: number
      createdAt: Date
    }, ExtArgs["result"]["operation"]>
    composites: {}
  }

  type OperationGetPayload<S extends boolean | null | undefined | OperationDefaultArgs> = $Result.GetResult<Prisma.$OperationPayload, S>

  type OperationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OperationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OperationCountAggregateInputType | true
    }

  export interface OperationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Operation'], meta: { name: 'Operation' } }
    /**
     * Find zero or one Operation that matches the filter.
     * @param {OperationFindUniqueArgs} args - Arguments to find a Operation
     * @example
     * // Get one Operation
     * const operation = await prisma.operation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OperationFindUniqueArgs>(args: SelectSubset<T, OperationFindUniqueArgs<ExtArgs>>): Prisma__OperationClient<$Result.GetResult<Prisma.$OperationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Operation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OperationFindUniqueOrThrowArgs} args - Arguments to find a Operation
     * @example
     * // Get one Operation
     * const operation = await prisma.operation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OperationFindUniqueOrThrowArgs>(args: SelectSubset<T, OperationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OperationClient<$Result.GetResult<Prisma.$OperationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Operation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OperationFindFirstArgs} args - Arguments to find a Operation
     * @example
     * // Get one Operation
     * const operation = await prisma.operation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OperationFindFirstArgs>(args?: SelectSubset<T, OperationFindFirstArgs<ExtArgs>>): Prisma__OperationClient<$Result.GetResult<Prisma.$OperationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Operation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OperationFindFirstOrThrowArgs} args - Arguments to find a Operation
     * @example
     * // Get one Operation
     * const operation = await prisma.operation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OperationFindFirstOrThrowArgs>(args?: SelectSubset<T, OperationFindFirstOrThrowArgs<ExtArgs>>): Prisma__OperationClient<$Result.GetResult<Prisma.$OperationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Operations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OperationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Operations
     * const operations = await prisma.operation.findMany()
     * 
     * // Get first 10 Operations
     * const operations = await prisma.operation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const operationWithIdOnly = await prisma.operation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OperationFindManyArgs>(args?: SelectSubset<T, OperationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OperationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Operation.
     * @param {OperationCreateArgs} args - Arguments to create a Operation.
     * @example
     * // Create one Operation
     * const Operation = await prisma.operation.create({
     *   data: {
     *     // ... data to create a Operation
     *   }
     * })
     * 
     */
    create<T extends OperationCreateArgs>(args: SelectSubset<T, OperationCreateArgs<ExtArgs>>): Prisma__OperationClient<$Result.GetResult<Prisma.$OperationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Operations.
     * @param {OperationCreateManyArgs} args - Arguments to create many Operations.
     * @example
     * // Create many Operations
     * const operation = await prisma.operation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OperationCreateManyArgs>(args?: SelectSubset<T, OperationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Operations and returns the data saved in the database.
     * @param {OperationCreateManyAndReturnArgs} args - Arguments to create many Operations.
     * @example
     * // Create many Operations
     * const operation = await prisma.operation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Operations and only return the `id`
     * const operationWithIdOnly = await prisma.operation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OperationCreateManyAndReturnArgs>(args?: SelectSubset<T, OperationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OperationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Operation.
     * @param {OperationDeleteArgs} args - Arguments to delete one Operation.
     * @example
     * // Delete one Operation
     * const Operation = await prisma.operation.delete({
     *   where: {
     *     // ... filter to delete one Operation
     *   }
     * })
     * 
     */
    delete<T extends OperationDeleteArgs>(args: SelectSubset<T, OperationDeleteArgs<ExtArgs>>): Prisma__OperationClient<$Result.GetResult<Prisma.$OperationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Operation.
     * @param {OperationUpdateArgs} args - Arguments to update one Operation.
     * @example
     * // Update one Operation
     * const operation = await prisma.operation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OperationUpdateArgs>(args: SelectSubset<T, OperationUpdateArgs<ExtArgs>>): Prisma__OperationClient<$Result.GetResult<Prisma.$OperationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Operations.
     * @param {OperationDeleteManyArgs} args - Arguments to filter Operations to delete.
     * @example
     * // Delete a few Operations
     * const { count } = await prisma.operation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OperationDeleteManyArgs>(args?: SelectSubset<T, OperationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Operations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OperationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Operations
     * const operation = await prisma.operation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OperationUpdateManyArgs>(args: SelectSubset<T, OperationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Operations and returns the data updated in the database.
     * @param {OperationUpdateManyAndReturnArgs} args - Arguments to update many Operations.
     * @example
     * // Update many Operations
     * const operation = await prisma.operation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Operations and only return the `id`
     * const operationWithIdOnly = await prisma.operation.updateManyAndReturn({
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
    updateManyAndReturn<T extends OperationUpdateManyAndReturnArgs>(args: SelectSubset<T, OperationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OperationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Operation.
     * @param {OperationUpsertArgs} args - Arguments to update or create a Operation.
     * @example
     * // Update or create a Operation
     * const operation = await prisma.operation.upsert({
     *   create: {
     *     // ... data to create a Operation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Operation we want to update
     *   }
     * })
     */
    upsert<T extends OperationUpsertArgs>(args: SelectSubset<T, OperationUpsertArgs<ExtArgs>>): Prisma__OperationClient<$Result.GetResult<Prisma.$OperationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Operations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OperationCountArgs} args - Arguments to filter Operations to count.
     * @example
     * // Count the number of Operations
     * const count = await prisma.operation.count({
     *   where: {
     *     // ... the filter for the Operations we want to count
     *   }
     * })
    **/
    count<T extends OperationCountArgs>(
      args?: Subset<T, OperationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OperationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Operation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OperationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OperationAggregateArgs>(args: Subset<T, OperationAggregateArgs>): Prisma.PrismaPromise<GetOperationAggregateType<T>>

    /**
     * Group by Operation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OperationGroupByArgs} args - Group by arguments.
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
      T extends OperationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OperationGroupByArgs['orderBy'] }
        : { orderBy?: OperationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OperationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOperationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Operation model
   */
  readonly fields: OperationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Operation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OperationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    document<T extends DocumentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DocumentDefaultArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Operation model
   */
  interface OperationFieldRefs {
    readonly id: FieldRef<"Operation", 'String'>
    readonly documentId: FieldRef<"Operation", 'String'>
    readonly userId: FieldRef<"Operation", 'String'>
    readonly type: FieldRef<"Operation", 'String'>
    readonly payload: FieldRef<"Operation", 'Json'>
    readonly clientId: FieldRef<"Operation", 'String'>
    readonly sequence: FieldRef<"Operation", 'Int'>
    readonly serverVersion: FieldRef<"Operation", 'Int'>
    readonly createdAt: FieldRef<"Operation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Operation findUnique
   */
  export type OperationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operation
     */
    select?: OperationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Operation
     */
    omit?: OperationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperationInclude<ExtArgs> | null
    /**
     * Filter, which Operation to fetch.
     */
    where: OperationWhereUniqueInput
  }

  /**
   * Operation findUniqueOrThrow
   */
  export type OperationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operation
     */
    select?: OperationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Operation
     */
    omit?: OperationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperationInclude<ExtArgs> | null
    /**
     * Filter, which Operation to fetch.
     */
    where: OperationWhereUniqueInput
  }

  /**
   * Operation findFirst
   */
  export type OperationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operation
     */
    select?: OperationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Operation
     */
    omit?: OperationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperationInclude<ExtArgs> | null
    /**
     * Filter, which Operation to fetch.
     */
    where?: OperationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Operations to fetch.
     */
    orderBy?: OperationOrderByWithRelationInput | OperationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Operations.
     */
    cursor?: OperationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Operations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Operations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Operations.
     */
    distinct?: OperationScalarFieldEnum | OperationScalarFieldEnum[]
  }

  /**
   * Operation findFirstOrThrow
   */
  export type OperationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operation
     */
    select?: OperationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Operation
     */
    omit?: OperationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperationInclude<ExtArgs> | null
    /**
     * Filter, which Operation to fetch.
     */
    where?: OperationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Operations to fetch.
     */
    orderBy?: OperationOrderByWithRelationInput | OperationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Operations.
     */
    cursor?: OperationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Operations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Operations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Operations.
     */
    distinct?: OperationScalarFieldEnum | OperationScalarFieldEnum[]
  }

  /**
   * Operation findMany
   */
  export type OperationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operation
     */
    select?: OperationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Operation
     */
    omit?: OperationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperationInclude<ExtArgs> | null
    /**
     * Filter, which Operations to fetch.
     */
    where?: OperationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Operations to fetch.
     */
    orderBy?: OperationOrderByWithRelationInput | OperationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Operations.
     */
    cursor?: OperationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Operations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Operations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Operations.
     */
    distinct?: OperationScalarFieldEnum | OperationScalarFieldEnum[]
  }

  /**
   * Operation create
   */
  export type OperationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operation
     */
    select?: OperationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Operation
     */
    omit?: OperationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperationInclude<ExtArgs> | null
    /**
     * The data needed to create a Operation.
     */
    data: XOR<OperationCreateInput, OperationUncheckedCreateInput>
  }

  /**
   * Operation createMany
   */
  export type OperationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Operations.
     */
    data: OperationCreateManyInput | OperationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Operation createManyAndReturn
   */
  export type OperationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operation
     */
    select?: OperationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Operation
     */
    omit?: OperationOmit<ExtArgs> | null
    /**
     * The data used to create many Operations.
     */
    data: OperationCreateManyInput | OperationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Operation update
   */
  export type OperationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operation
     */
    select?: OperationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Operation
     */
    omit?: OperationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperationInclude<ExtArgs> | null
    /**
     * The data needed to update a Operation.
     */
    data: XOR<OperationUpdateInput, OperationUncheckedUpdateInput>
    /**
     * Choose, which Operation to update.
     */
    where: OperationWhereUniqueInput
  }

  /**
   * Operation updateMany
   */
  export type OperationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Operations.
     */
    data: XOR<OperationUpdateManyMutationInput, OperationUncheckedUpdateManyInput>
    /**
     * Filter which Operations to update
     */
    where?: OperationWhereInput
    /**
     * Limit how many Operations to update.
     */
    limit?: number
  }

  /**
   * Operation updateManyAndReturn
   */
  export type OperationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operation
     */
    select?: OperationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Operation
     */
    omit?: OperationOmit<ExtArgs> | null
    /**
     * The data used to update Operations.
     */
    data: XOR<OperationUpdateManyMutationInput, OperationUncheckedUpdateManyInput>
    /**
     * Filter which Operations to update
     */
    where?: OperationWhereInput
    /**
     * Limit how many Operations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Operation upsert
   */
  export type OperationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operation
     */
    select?: OperationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Operation
     */
    omit?: OperationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperationInclude<ExtArgs> | null
    /**
     * The filter to search for the Operation to update in case it exists.
     */
    where: OperationWhereUniqueInput
    /**
     * In case the Operation found by the `where` argument doesn't exist, create a new Operation with this data.
     */
    create: XOR<OperationCreateInput, OperationUncheckedCreateInput>
    /**
     * In case the Operation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OperationUpdateInput, OperationUncheckedUpdateInput>
  }

  /**
   * Operation delete
   */
  export type OperationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operation
     */
    select?: OperationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Operation
     */
    omit?: OperationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperationInclude<ExtArgs> | null
    /**
     * Filter which Operation to delete.
     */
    where: OperationWhereUniqueInput
  }

  /**
   * Operation deleteMany
   */
  export type OperationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Operations to delete
     */
    where?: OperationWhereInput
    /**
     * Limit how many Operations to delete.
     */
    limit?: number
  }

  /**
   * Operation without action
   */
  export type OperationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operation
     */
    select?: OperationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Operation
     */
    omit?: OperationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperationInclude<ExtArgs> | null
  }


  /**
   * Model Snapshot
   */

  export type AggregateSnapshot = {
    _count: SnapshotCountAggregateOutputType | null
    _avg: SnapshotAvgAggregateOutputType | null
    _sum: SnapshotSumAggregateOutputType | null
    _min: SnapshotMinAggregateOutputType | null
    _max: SnapshotMaxAggregateOutputType | null
  }

  export type SnapshotAvgAggregateOutputType = {
    version: number | null
  }

  export type SnapshotSumAggregateOutputType = {
    version: number | null
  }

  export type SnapshotMinAggregateOutputType = {
    id: string | null
    documentId: string | null
    version: number | null
    createdAt: Date | null
  }

  export type SnapshotMaxAggregateOutputType = {
    id: string | null
    documentId: string | null
    version: number | null
    createdAt: Date | null
  }

  export type SnapshotCountAggregateOutputType = {
    id: number
    documentId: number
    state: number
    version: number
    createdAt: number
    _all: number
  }


  export type SnapshotAvgAggregateInputType = {
    version?: true
  }

  export type SnapshotSumAggregateInputType = {
    version?: true
  }

  export type SnapshotMinAggregateInputType = {
    id?: true
    documentId?: true
    version?: true
    createdAt?: true
  }

  export type SnapshotMaxAggregateInputType = {
    id?: true
    documentId?: true
    version?: true
    createdAt?: true
  }

  export type SnapshotCountAggregateInputType = {
    id?: true
    documentId?: true
    state?: true
    version?: true
    createdAt?: true
    _all?: true
  }

  export type SnapshotAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Snapshot to aggregate.
     */
    where?: SnapshotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Snapshots to fetch.
     */
    orderBy?: SnapshotOrderByWithRelationInput | SnapshotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SnapshotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Snapshots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Snapshots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Snapshots
    **/
    _count?: true | SnapshotCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SnapshotAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SnapshotSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SnapshotMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SnapshotMaxAggregateInputType
  }

  export type GetSnapshotAggregateType<T extends SnapshotAggregateArgs> = {
        [P in keyof T & keyof AggregateSnapshot]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSnapshot[P]>
      : GetScalarType<T[P], AggregateSnapshot[P]>
  }




  export type SnapshotGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SnapshotWhereInput
    orderBy?: SnapshotOrderByWithAggregationInput | SnapshotOrderByWithAggregationInput[]
    by: SnapshotScalarFieldEnum[] | SnapshotScalarFieldEnum
    having?: SnapshotScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SnapshotCountAggregateInputType | true
    _avg?: SnapshotAvgAggregateInputType
    _sum?: SnapshotSumAggregateInputType
    _min?: SnapshotMinAggregateInputType
    _max?: SnapshotMaxAggregateInputType
  }

  export type SnapshotGroupByOutputType = {
    id: string
    documentId: string
    state: JsonValue
    version: number
    createdAt: Date
    _count: SnapshotCountAggregateOutputType | null
    _avg: SnapshotAvgAggregateOutputType | null
    _sum: SnapshotSumAggregateOutputType | null
    _min: SnapshotMinAggregateOutputType | null
    _max: SnapshotMaxAggregateOutputType | null
  }

  type GetSnapshotGroupByPayload<T extends SnapshotGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SnapshotGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SnapshotGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SnapshotGroupByOutputType[P]>
            : GetScalarType<T[P], SnapshotGroupByOutputType[P]>
        }
      >
    >


  export type SnapshotSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    documentId?: boolean
    state?: boolean
    version?: boolean
    createdAt?: boolean
    document?: boolean | DocumentDefaultArgs<ExtArgs>
    versions?: boolean | Snapshot$versionsArgs<ExtArgs>
    _count?: boolean | SnapshotCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["snapshot"]>

  export type SnapshotSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    documentId?: boolean
    state?: boolean
    version?: boolean
    createdAt?: boolean
    document?: boolean | DocumentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["snapshot"]>

  export type SnapshotSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    documentId?: boolean
    state?: boolean
    version?: boolean
    createdAt?: boolean
    document?: boolean | DocumentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["snapshot"]>

  export type SnapshotSelectScalar = {
    id?: boolean
    documentId?: boolean
    state?: boolean
    version?: boolean
    createdAt?: boolean
  }

  export type SnapshotOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "documentId" | "state" | "version" | "createdAt", ExtArgs["result"]["snapshot"]>
  export type SnapshotInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    document?: boolean | DocumentDefaultArgs<ExtArgs>
    versions?: boolean | Snapshot$versionsArgs<ExtArgs>
    _count?: boolean | SnapshotCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SnapshotIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    document?: boolean | DocumentDefaultArgs<ExtArgs>
  }
  export type SnapshotIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    document?: boolean | DocumentDefaultArgs<ExtArgs>
  }

  export type $SnapshotPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Snapshot"
    objects: {
      document: Prisma.$DocumentPayload<ExtArgs>
      versions: Prisma.$VersionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      documentId: string
      state: Prisma.JsonValue
      version: number
      createdAt: Date
    }, ExtArgs["result"]["snapshot"]>
    composites: {}
  }

  type SnapshotGetPayload<S extends boolean | null | undefined | SnapshotDefaultArgs> = $Result.GetResult<Prisma.$SnapshotPayload, S>

  type SnapshotCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SnapshotFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SnapshotCountAggregateInputType | true
    }

  export interface SnapshotDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Snapshot'], meta: { name: 'Snapshot' } }
    /**
     * Find zero or one Snapshot that matches the filter.
     * @param {SnapshotFindUniqueArgs} args - Arguments to find a Snapshot
     * @example
     * // Get one Snapshot
     * const snapshot = await prisma.snapshot.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SnapshotFindUniqueArgs>(args: SelectSubset<T, SnapshotFindUniqueArgs<ExtArgs>>): Prisma__SnapshotClient<$Result.GetResult<Prisma.$SnapshotPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Snapshot that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SnapshotFindUniqueOrThrowArgs} args - Arguments to find a Snapshot
     * @example
     * // Get one Snapshot
     * const snapshot = await prisma.snapshot.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SnapshotFindUniqueOrThrowArgs>(args: SelectSubset<T, SnapshotFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SnapshotClient<$Result.GetResult<Prisma.$SnapshotPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Snapshot that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SnapshotFindFirstArgs} args - Arguments to find a Snapshot
     * @example
     * // Get one Snapshot
     * const snapshot = await prisma.snapshot.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SnapshotFindFirstArgs>(args?: SelectSubset<T, SnapshotFindFirstArgs<ExtArgs>>): Prisma__SnapshotClient<$Result.GetResult<Prisma.$SnapshotPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Snapshot that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SnapshotFindFirstOrThrowArgs} args - Arguments to find a Snapshot
     * @example
     * // Get one Snapshot
     * const snapshot = await prisma.snapshot.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SnapshotFindFirstOrThrowArgs>(args?: SelectSubset<T, SnapshotFindFirstOrThrowArgs<ExtArgs>>): Prisma__SnapshotClient<$Result.GetResult<Prisma.$SnapshotPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Snapshots that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SnapshotFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Snapshots
     * const snapshots = await prisma.snapshot.findMany()
     * 
     * // Get first 10 Snapshots
     * const snapshots = await prisma.snapshot.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const snapshotWithIdOnly = await prisma.snapshot.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SnapshotFindManyArgs>(args?: SelectSubset<T, SnapshotFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SnapshotPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Snapshot.
     * @param {SnapshotCreateArgs} args - Arguments to create a Snapshot.
     * @example
     * // Create one Snapshot
     * const Snapshot = await prisma.snapshot.create({
     *   data: {
     *     // ... data to create a Snapshot
     *   }
     * })
     * 
     */
    create<T extends SnapshotCreateArgs>(args: SelectSubset<T, SnapshotCreateArgs<ExtArgs>>): Prisma__SnapshotClient<$Result.GetResult<Prisma.$SnapshotPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Snapshots.
     * @param {SnapshotCreateManyArgs} args - Arguments to create many Snapshots.
     * @example
     * // Create many Snapshots
     * const snapshot = await prisma.snapshot.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SnapshotCreateManyArgs>(args?: SelectSubset<T, SnapshotCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Snapshots and returns the data saved in the database.
     * @param {SnapshotCreateManyAndReturnArgs} args - Arguments to create many Snapshots.
     * @example
     * // Create many Snapshots
     * const snapshot = await prisma.snapshot.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Snapshots and only return the `id`
     * const snapshotWithIdOnly = await prisma.snapshot.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SnapshotCreateManyAndReturnArgs>(args?: SelectSubset<T, SnapshotCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SnapshotPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Snapshot.
     * @param {SnapshotDeleteArgs} args - Arguments to delete one Snapshot.
     * @example
     * // Delete one Snapshot
     * const Snapshot = await prisma.snapshot.delete({
     *   where: {
     *     // ... filter to delete one Snapshot
     *   }
     * })
     * 
     */
    delete<T extends SnapshotDeleteArgs>(args: SelectSubset<T, SnapshotDeleteArgs<ExtArgs>>): Prisma__SnapshotClient<$Result.GetResult<Prisma.$SnapshotPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Snapshot.
     * @param {SnapshotUpdateArgs} args - Arguments to update one Snapshot.
     * @example
     * // Update one Snapshot
     * const snapshot = await prisma.snapshot.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SnapshotUpdateArgs>(args: SelectSubset<T, SnapshotUpdateArgs<ExtArgs>>): Prisma__SnapshotClient<$Result.GetResult<Prisma.$SnapshotPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Snapshots.
     * @param {SnapshotDeleteManyArgs} args - Arguments to filter Snapshots to delete.
     * @example
     * // Delete a few Snapshots
     * const { count } = await prisma.snapshot.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SnapshotDeleteManyArgs>(args?: SelectSubset<T, SnapshotDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Snapshots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SnapshotUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Snapshots
     * const snapshot = await prisma.snapshot.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SnapshotUpdateManyArgs>(args: SelectSubset<T, SnapshotUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Snapshots and returns the data updated in the database.
     * @param {SnapshotUpdateManyAndReturnArgs} args - Arguments to update many Snapshots.
     * @example
     * // Update many Snapshots
     * const snapshot = await prisma.snapshot.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Snapshots and only return the `id`
     * const snapshotWithIdOnly = await prisma.snapshot.updateManyAndReturn({
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
    updateManyAndReturn<T extends SnapshotUpdateManyAndReturnArgs>(args: SelectSubset<T, SnapshotUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SnapshotPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Snapshot.
     * @param {SnapshotUpsertArgs} args - Arguments to update or create a Snapshot.
     * @example
     * // Update or create a Snapshot
     * const snapshot = await prisma.snapshot.upsert({
     *   create: {
     *     // ... data to create a Snapshot
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Snapshot we want to update
     *   }
     * })
     */
    upsert<T extends SnapshotUpsertArgs>(args: SelectSubset<T, SnapshotUpsertArgs<ExtArgs>>): Prisma__SnapshotClient<$Result.GetResult<Prisma.$SnapshotPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Snapshots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SnapshotCountArgs} args - Arguments to filter Snapshots to count.
     * @example
     * // Count the number of Snapshots
     * const count = await prisma.snapshot.count({
     *   where: {
     *     // ... the filter for the Snapshots we want to count
     *   }
     * })
    **/
    count<T extends SnapshotCountArgs>(
      args?: Subset<T, SnapshotCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SnapshotCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Snapshot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SnapshotAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SnapshotAggregateArgs>(args: Subset<T, SnapshotAggregateArgs>): Prisma.PrismaPromise<GetSnapshotAggregateType<T>>

    /**
     * Group by Snapshot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SnapshotGroupByArgs} args - Group by arguments.
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
      T extends SnapshotGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SnapshotGroupByArgs['orderBy'] }
        : { orderBy?: SnapshotGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SnapshotGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSnapshotGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Snapshot model
   */
  readonly fields: SnapshotFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Snapshot.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SnapshotClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    document<T extends DocumentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DocumentDefaultArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    versions<T extends Snapshot$versionsArgs<ExtArgs> = {}>(args?: Subset<T, Snapshot$versionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VersionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Snapshot model
   */
  interface SnapshotFieldRefs {
    readonly id: FieldRef<"Snapshot", 'String'>
    readonly documentId: FieldRef<"Snapshot", 'String'>
    readonly state: FieldRef<"Snapshot", 'Json'>
    readonly version: FieldRef<"Snapshot", 'Int'>
    readonly createdAt: FieldRef<"Snapshot", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Snapshot findUnique
   */
  export type SnapshotFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Snapshot
     */
    select?: SnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Snapshot
     */
    omit?: SnapshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SnapshotInclude<ExtArgs> | null
    /**
     * Filter, which Snapshot to fetch.
     */
    where: SnapshotWhereUniqueInput
  }

  /**
   * Snapshot findUniqueOrThrow
   */
  export type SnapshotFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Snapshot
     */
    select?: SnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Snapshot
     */
    omit?: SnapshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SnapshotInclude<ExtArgs> | null
    /**
     * Filter, which Snapshot to fetch.
     */
    where: SnapshotWhereUniqueInput
  }

  /**
   * Snapshot findFirst
   */
  export type SnapshotFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Snapshot
     */
    select?: SnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Snapshot
     */
    omit?: SnapshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SnapshotInclude<ExtArgs> | null
    /**
     * Filter, which Snapshot to fetch.
     */
    where?: SnapshotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Snapshots to fetch.
     */
    orderBy?: SnapshotOrderByWithRelationInput | SnapshotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Snapshots.
     */
    cursor?: SnapshotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Snapshots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Snapshots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Snapshots.
     */
    distinct?: SnapshotScalarFieldEnum | SnapshotScalarFieldEnum[]
  }

  /**
   * Snapshot findFirstOrThrow
   */
  export type SnapshotFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Snapshot
     */
    select?: SnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Snapshot
     */
    omit?: SnapshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SnapshotInclude<ExtArgs> | null
    /**
     * Filter, which Snapshot to fetch.
     */
    where?: SnapshotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Snapshots to fetch.
     */
    orderBy?: SnapshotOrderByWithRelationInput | SnapshotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Snapshots.
     */
    cursor?: SnapshotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Snapshots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Snapshots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Snapshots.
     */
    distinct?: SnapshotScalarFieldEnum | SnapshotScalarFieldEnum[]
  }

  /**
   * Snapshot findMany
   */
  export type SnapshotFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Snapshot
     */
    select?: SnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Snapshot
     */
    omit?: SnapshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SnapshotInclude<ExtArgs> | null
    /**
     * Filter, which Snapshots to fetch.
     */
    where?: SnapshotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Snapshots to fetch.
     */
    orderBy?: SnapshotOrderByWithRelationInput | SnapshotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Snapshots.
     */
    cursor?: SnapshotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Snapshots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Snapshots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Snapshots.
     */
    distinct?: SnapshotScalarFieldEnum | SnapshotScalarFieldEnum[]
  }

  /**
   * Snapshot create
   */
  export type SnapshotCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Snapshot
     */
    select?: SnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Snapshot
     */
    omit?: SnapshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SnapshotInclude<ExtArgs> | null
    /**
     * The data needed to create a Snapshot.
     */
    data: XOR<SnapshotCreateInput, SnapshotUncheckedCreateInput>
  }

  /**
   * Snapshot createMany
   */
  export type SnapshotCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Snapshots.
     */
    data: SnapshotCreateManyInput | SnapshotCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Snapshot createManyAndReturn
   */
  export type SnapshotCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Snapshot
     */
    select?: SnapshotSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Snapshot
     */
    omit?: SnapshotOmit<ExtArgs> | null
    /**
     * The data used to create many Snapshots.
     */
    data: SnapshotCreateManyInput | SnapshotCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SnapshotIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Snapshot update
   */
  export type SnapshotUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Snapshot
     */
    select?: SnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Snapshot
     */
    omit?: SnapshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SnapshotInclude<ExtArgs> | null
    /**
     * The data needed to update a Snapshot.
     */
    data: XOR<SnapshotUpdateInput, SnapshotUncheckedUpdateInput>
    /**
     * Choose, which Snapshot to update.
     */
    where: SnapshotWhereUniqueInput
  }

  /**
   * Snapshot updateMany
   */
  export type SnapshotUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Snapshots.
     */
    data: XOR<SnapshotUpdateManyMutationInput, SnapshotUncheckedUpdateManyInput>
    /**
     * Filter which Snapshots to update
     */
    where?: SnapshotWhereInput
    /**
     * Limit how many Snapshots to update.
     */
    limit?: number
  }

  /**
   * Snapshot updateManyAndReturn
   */
  export type SnapshotUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Snapshot
     */
    select?: SnapshotSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Snapshot
     */
    omit?: SnapshotOmit<ExtArgs> | null
    /**
     * The data used to update Snapshots.
     */
    data: XOR<SnapshotUpdateManyMutationInput, SnapshotUncheckedUpdateManyInput>
    /**
     * Filter which Snapshots to update
     */
    where?: SnapshotWhereInput
    /**
     * Limit how many Snapshots to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SnapshotIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Snapshot upsert
   */
  export type SnapshotUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Snapshot
     */
    select?: SnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Snapshot
     */
    omit?: SnapshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SnapshotInclude<ExtArgs> | null
    /**
     * The filter to search for the Snapshot to update in case it exists.
     */
    where: SnapshotWhereUniqueInput
    /**
     * In case the Snapshot found by the `where` argument doesn't exist, create a new Snapshot with this data.
     */
    create: XOR<SnapshotCreateInput, SnapshotUncheckedCreateInput>
    /**
     * In case the Snapshot was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SnapshotUpdateInput, SnapshotUncheckedUpdateInput>
  }

  /**
   * Snapshot delete
   */
  export type SnapshotDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Snapshot
     */
    select?: SnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Snapshot
     */
    omit?: SnapshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SnapshotInclude<ExtArgs> | null
    /**
     * Filter which Snapshot to delete.
     */
    where: SnapshotWhereUniqueInput
  }

  /**
   * Snapshot deleteMany
   */
  export type SnapshotDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Snapshots to delete
     */
    where?: SnapshotWhereInput
    /**
     * Limit how many Snapshots to delete.
     */
    limit?: number
  }

  /**
   * Snapshot.versions
   */
  export type Snapshot$versionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Version
     */
    select?: VersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Version
     */
    omit?: VersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VersionInclude<ExtArgs> | null
    where?: VersionWhereInput
    orderBy?: VersionOrderByWithRelationInput | VersionOrderByWithRelationInput[]
    cursor?: VersionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VersionScalarFieldEnum | VersionScalarFieldEnum[]
  }

  /**
   * Snapshot without action
   */
  export type SnapshotDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Snapshot
     */
    select?: SnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Snapshot
     */
    omit?: SnapshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SnapshotInclude<ExtArgs> | null
  }


  /**
   * Model Version
   */

  export type AggregateVersion = {
    _count: VersionCountAggregateOutputType | null
    _min: VersionMinAggregateOutputType | null
    _max: VersionMaxAggregateOutputType | null
  }

  export type VersionMinAggregateOutputType = {
    id: string | null
    documentId: string | null
    userId: string | null
    name: string | null
    snapshotId: string | null
    createdAt: Date | null
  }

  export type VersionMaxAggregateOutputType = {
    id: string | null
    documentId: string | null
    userId: string | null
    name: string | null
    snapshotId: string | null
    createdAt: Date | null
  }

  export type VersionCountAggregateOutputType = {
    id: number
    documentId: number
    userId: number
    name: number
    snapshotId: number
    createdAt: number
    _all: number
  }


  export type VersionMinAggregateInputType = {
    id?: true
    documentId?: true
    userId?: true
    name?: true
    snapshotId?: true
    createdAt?: true
  }

  export type VersionMaxAggregateInputType = {
    id?: true
    documentId?: true
    userId?: true
    name?: true
    snapshotId?: true
    createdAt?: true
  }

  export type VersionCountAggregateInputType = {
    id?: true
    documentId?: true
    userId?: true
    name?: true
    snapshotId?: true
    createdAt?: true
    _all?: true
  }

  export type VersionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Version to aggregate.
     */
    where?: VersionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Versions to fetch.
     */
    orderBy?: VersionOrderByWithRelationInput | VersionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VersionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Versions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Versions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Versions
    **/
    _count?: true | VersionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VersionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VersionMaxAggregateInputType
  }

  export type GetVersionAggregateType<T extends VersionAggregateArgs> = {
        [P in keyof T & keyof AggregateVersion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVersion[P]>
      : GetScalarType<T[P], AggregateVersion[P]>
  }




  export type VersionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VersionWhereInput
    orderBy?: VersionOrderByWithAggregationInput | VersionOrderByWithAggregationInput[]
    by: VersionScalarFieldEnum[] | VersionScalarFieldEnum
    having?: VersionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VersionCountAggregateInputType | true
    _min?: VersionMinAggregateInputType
    _max?: VersionMaxAggregateInputType
  }

  export type VersionGroupByOutputType = {
    id: string
    documentId: string
    userId: string
    name: string | null
    snapshotId: string
    createdAt: Date
    _count: VersionCountAggregateOutputType | null
    _min: VersionMinAggregateOutputType | null
    _max: VersionMaxAggregateOutputType | null
  }

  type GetVersionGroupByPayload<T extends VersionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VersionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VersionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VersionGroupByOutputType[P]>
            : GetScalarType<T[P], VersionGroupByOutputType[P]>
        }
      >
    >


  export type VersionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    documentId?: boolean
    userId?: boolean
    name?: boolean
    snapshotId?: boolean
    createdAt?: boolean
    document?: boolean | DocumentDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    snapshot?: boolean | SnapshotDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["version"]>

  export type VersionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    documentId?: boolean
    userId?: boolean
    name?: boolean
    snapshotId?: boolean
    createdAt?: boolean
    document?: boolean | DocumentDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    snapshot?: boolean | SnapshotDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["version"]>

  export type VersionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    documentId?: boolean
    userId?: boolean
    name?: boolean
    snapshotId?: boolean
    createdAt?: boolean
    document?: boolean | DocumentDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    snapshot?: boolean | SnapshotDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["version"]>

  export type VersionSelectScalar = {
    id?: boolean
    documentId?: boolean
    userId?: boolean
    name?: boolean
    snapshotId?: boolean
    createdAt?: boolean
  }

  export type VersionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "documentId" | "userId" | "name" | "snapshotId" | "createdAt", ExtArgs["result"]["version"]>
  export type VersionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    document?: boolean | DocumentDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    snapshot?: boolean | SnapshotDefaultArgs<ExtArgs>
  }
  export type VersionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    document?: boolean | DocumentDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    snapshot?: boolean | SnapshotDefaultArgs<ExtArgs>
  }
  export type VersionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    document?: boolean | DocumentDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    snapshot?: boolean | SnapshotDefaultArgs<ExtArgs>
  }

  export type $VersionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Version"
    objects: {
      document: Prisma.$DocumentPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
      snapshot: Prisma.$SnapshotPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      documentId: string
      userId: string
      name: string | null
      snapshotId: string
      createdAt: Date
    }, ExtArgs["result"]["version"]>
    composites: {}
  }

  type VersionGetPayload<S extends boolean | null | undefined | VersionDefaultArgs> = $Result.GetResult<Prisma.$VersionPayload, S>

  type VersionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VersionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VersionCountAggregateInputType | true
    }

  export interface VersionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Version'], meta: { name: 'Version' } }
    /**
     * Find zero or one Version that matches the filter.
     * @param {VersionFindUniqueArgs} args - Arguments to find a Version
     * @example
     * // Get one Version
     * const version = await prisma.version.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VersionFindUniqueArgs>(args: SelectSubset<T, VersionFindUniqueArgs<ExtArgs>>): Prisma__VersionClient<$Result.GetResult<Prisma.$VersionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Version that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VersionFindUniqueOrThrowArgs} args - Arguments to find a Version
     * @example
     * // Get one Version
     * const version = await prisma.version.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VersionFindUniqueOrThrowArgs>(args: SelectSubset<T, VersionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VersionClient<$Result.GetResult<Prisma.$VersionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Version that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VersionFindFirstArgs} args - Arguments to find a Version
     * @example
     * // Get one Version
     * const version = await prisma.version.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VersionFindFirstArgs>(args?: SelectSubset<T, VersionFindFirstArgs<ExtArgs>>): Prisma__VersionClient<$Result.GetResult<Prisma.$VersionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Version that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VersionFindFirstOrThrowArgs} args - Arguments to find a Version
     * @example
     * // Get one Version
     * const version = await prisma.version.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VersionFindFirstOrThrowArgs>(args?: SelectSubset<T, VersionFindFirstOrThrowArgs<ExtArgs>>): Prisma__VersionClient<$Result.GetResult<Prisma.$VersionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Versions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VersionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Versions
     * const versions = await prisma.version.findMany()
     * 
     * // Get first 10 Versions
     * const versions = await prisma.version.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const versionWithIdOnly = await prisma.version.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VersionFindManyArgs>(args?: SelectSubset<T, VersionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VersionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Version.
     * @param {VersionCreateArgs} args - Arguments to create a Version.
     * @example
     * // Create one Version
     * const Version = await prisma.version.create({
     *   data: {
     *     // ... data to create a Version
     *   }
     * })
     * 
     */
    create<T extends VersionCreateArgs>(args: SelectSubset<T, VersionCreateArgs<ExtArgs>>): Prisma__VersionClient<$Result.GetResult<Prisma.$VersionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Versions.
     * @param {VersionCreateManyArgs} args - Arguments to create many Versions.
     * @example
     * // Create many Versions
     * const version = await prisma.version.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VersionCreateManyArgs>(args?: SelectSubset<T, VersionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Versions and returns the data saved in the database.
     * @param {VersionCreateManyAndReturnArgs} args - Arguments to create many Versions.
     * @example
     * // Create many Versions
     * const version = await prisma.version.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Versions and only return the `id`
     * const versionWithIdOnly = await prisma.version.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VersionCreateManyAndReturnArgs>(args?: SelectSubset<T, VersionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VersionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Version.
     * @param {VersionDeleteArgs} args - Arguments to delete one Version.
     * @example
     * // Delete one Version
     * const Version = await prisma.version.delete({
     *   where: {
     *     // ... filter to delete one Version
     *   }
     * })
     * 
     */
    delete<T extends VersionDeleteArgs>(args: SelectSubset<T, VersionDeleteArgs<ExtArgs>>): Prisma__VersionClient<$Result.GetResult<Prisma.$VersionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Version.
     * @param {VersionUpdateArgs} args - Arguments to update one Version.
     * @example
     * // Update one Version
     * const version = await prisma.version.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VersionUpdateArgs>(args: SelectSubset<T, VersionUpdateArgs<ExtArgs>>): Prisma__VersionClient<$Result.GetResult<Prisma.$VersionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Versions.
     * @param {VersionDeleteManyArgs} args - Arguments to filter Versions to delete.
     * @example
     * // Delete a few Versions
     * const { count } = await prisma.version.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VersionDeleteManyArgs>(args?: SelectSubset<T, VersionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Versions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VersionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Versions
     * const version = await prisma.version.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VersionUpdateManyArgs>(args: SelectSubset<T, VersionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Versions and returns the data updated in the database.
     * @param {VersionUpdateManyAndReturnArgs} args - Arguments to update many Versions.
     * @example
     * // Update many Versions
     * const version = await prisma.version.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Versions and only return the `id`
     * const versionWithIdOnly = await prisma.version.updateManyAndReturn({
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
    updateManyAndReturn<T extends VersionUpdateManyAndReturnArgs>(args: SelectSubset<T, VersionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VersionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Version.
     * @param {VersionUpsertArgs} args - Arguments to update or create a Version.
     * @example
     * // Update or create a Version
     * const version = await prisma.version.upsert({
     *   create: {
     *     // ... data to create a Version
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Version we want to update
     *   }
     * })
     */
    upsert<T extends VersionUpsertArgs>(args: SelectSubset<T, VersionUpsertArgs<ExtArgs>>): Prisma__VersionClient<$Result.GetResult<Prisma.$VersionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Versions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VersionCountArgs} args - Arguments to filter Versions to count.
     * @example
     * // Count the number of Versions
     * const count = await prisma.version.count({
     *   where: {
     *     // ... the filter for the Versions we want to count
     *   }
     * })
    **/
    count<T extends VersionCountArgs>(
      args?: Subset<T, VersionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VersionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Version.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VersionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VersionAggregateArgs>(args: Subset<T, VersionAggregateArgs>): Prisma.PrismaPromise<GetVersionAggregateType<T>>

    /**
     * Group by Version.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VersionGroupByArgs} args - Group by arguments.
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
      T extends VersionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VersionGroupByArgs['orderBy'] }
        : { orderBy?: VersionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VersionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVersionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Version model
   */
  readonly fields: VersionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Version.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VersionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    document<T extends DocumentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DocumentDefaultArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    snapshot<T extends SnapshotDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SnapshotDefaultArgs<ExtArgs>>): Prisma__SnapshotClient<$Result.GetResult<Prisma.$SnapshotPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Version model
   */
  interface VersionFieldRefs {
    readonly id: FieldRef<"Version", 'String'>
    readonly documentId: FieldRef<"Version", 'String'>
    readonly userId: FieldRef<"Version", 'String'>
    readonly name: FieldRef<"Version", 'String'>
    readonly snapshotId: FieldRef<"Version", 'String'>
    readonly createdAt: FieldRef<"Version", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Version findUnique
   */
  export type VersionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Version
     */
    select?: VersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Version
     */
    omit?: VersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VersionInclude<ExtArgs> | null
    /**
     * Filter, which Version to fetch.
     */
    where: VersionWhereUniqueInput
  }

  /**
   * Version findUniqueOrThrow
   */
  export type VersionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Version
     */
    select?: VersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Version
     */
    omit?: VersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VersionInclude<ExtArgs> | null
    /**
     * Filter, which Version to fetch.
     */
    where: VersionWhereUniqueInput
  }

  /**
   * Version findFirst
   */
  export type VersionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Version
     */
    select?: VersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Version
     */
    omit?: VersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VersionInclude<ExtArgs> | null
    /**
     * Filter, which Version to fetch.
     */
    where?: VersionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Versions to fetch.
     */
    orderBy?: VersionOrderByWithRelationInput | VersionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Versions.
     */
    cursor?: VersionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Versions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Versions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Versions.
     */
    distinct?: VersionScalarFieldEnum | VersionScalarFieldEnum[]
  }

  /**
   * Version findFirstOrThrow
   */
  export type VersionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Version
     */
    select?: VersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Version
     */
    omit?: VersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VersionInclude<ExtArgs> | null
    /**
     * Filter, which Version to fetch.
     */
    where?: VersionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Versions to fetch.
     */
    orderBy?: VersionOrderByWithRelationInput | VersionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Versions.
     */
    cursor?: VersionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Versions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Versions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Versions.
     */
    distinct?: VersionScalarFieldEnum | VersionScalarFieldEnum[]
  }

  /**
   * Version findMany
   */
  export type VersionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Version
     */
    select?: VersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Version
     */
    omit?: VersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VersionInclude<ExtArgs> | null
    /**
     * Filter, which Versions to fetch.
     */
    where?: VersionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Versions to fetch.
     */
    orderBy?: VersionOrderByWithRelationInput | VersionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Versions.
     */
    cursor?: VersionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Versions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Versions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Versions.
     */
    distinct?: VersionScalarFieldEnum | VersionScalarFieldEnum[]
  }

  /**
   * Version create
   */
  export type VersionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Version
     */
    select?: VersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Version
     */
    omit?: VersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VersionInclude<ExtArgs> | null
    /**
     * The data needed to create a Version.
     */
    data: XOR<VersionCreateInput, VersionUncheckedCreateInput>
  }

  /**
   * Version createMany
   */
  export type VersionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Versions.
     */
    data: VersionCreateManyInput | VersionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Version createManyAndReturn
   */
  export type VersionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Version
     */
    select?: VersionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Version
     */
    omit?: VersionOmit<ExtArgs> | null
    /**
     * The data used to create many Versions.
     */
    data: VersionCreateManyInput | VersionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VersionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Version update
   */
  export type VersionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Version
     */
    select?: VersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Version
     */
    omit?: VersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VersionInclude<ExtArgs> | null
    /**
     * The data needed to update a Version.
     */
    data: XOR<VersionUpdateInput, VersionUncheckedUpdateInput>
    /**
     * Choose, which Version to update.
     */
    where: VersionWhereUniqueInput
  }

  /**
   * Version updateMany
   */
  export type VersionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Versions.
     */
    data: XOR<VersionUpdateManyMutationInput, VersionUncheckedUpdateManyInput>
    /**
     * Filter which Versions to update
     */
    where?: VersionWhereInput
    /**
     * Limit how many Versions to update.
     */
    limit?: number
  }

  /**
   * Version updateManyAndReturn
   */
  export type VersionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Version
     */
    select?: VersionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Version
     */
    omit?: VersionOmit<ExtArgs> | null
    /**
     * The data used to update Versions.
     */
    data: XOR<VersionUpdateManyMutationInput, VersionUncheckedUpdateManyInput>
    /**
     * Filter which Versions to update
     */
    where?: VersionWhereInput
    /**
     * Limit how many Versions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VersionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Version upsert
   */
  export type VersionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Version
     */
    select?: VersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Version
     */
    omit?: VersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VersionInclude<ExtArgs> | null
    /**
     * The filter to search for the Version to update in case it exists.
     */
    where: VersionWhereUniqueInput
    /**
     * In case the Version found by the `where` argument doesn't exist, create a new Version with this data.
     */
    create: XOR<VersionCreateInput, VersionUncheckedCreateInput>
    /**
     * In case the Version was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VersionUpdateInput, VersionUncheckedUpdateInput>
  }

  /**
   * Version delete
   */
  export type VersionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Version
     */
    select?: VersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Version
     */
    omit?: VersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VersionInclude<ExtArgs> | null
    /**
     * Filter which Version to delete.
     */
    where: VersionWhereUniqueInput
  }

  /**
   * Version deleteMany
   */
  export type VersionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Versions to delete
     */
    where?: VersionWhereInput
    /**
     * Limit how many Versions to delete.
     */
    limit?: number
  }

  /**
   * Version without action
   */
  export type VersionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Version
     */
    select?: VersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Version
     */
    omit?: VersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VersionInclude<ExtArgs> | null
  }


  /**
   * Model SyncState
   */

  export type AggregateSyncState = {
    _count: SyncStateCountAggregateOutputType | null
    _avg: SyncStateAvgAggregateOutputType | null
    _sum: SyncStateSumAggregateOutputType | null
    _min: SyncStateMinAggregateOutputType | null
    _max: SyncStateMaxAggregateOutputType | null
  }

  export type SyncStateAvgAggregateOutputType = {
    lastSyncedVersion: number | null
  }

  export type SyncStateSumAggregateOutputType = {
    lastSyncedVersion: number | null
  }

  export type SyncStateMinAggregateOutputType = {
    id: string | null
    documentId: string | null
    userId: string | null
    lastSyncedVersion: number | null
    updatedAt: Date | null
  }

  export type SyncStateMaxAggregateOutputType = {
    id: string | null
    documentId: string | null
    userId: string | null
    lastSyncedVersion: number | null
    updatedAt: Date | null
  }

  export type SyncStateCountAggregateOutputType = {
    id: number
    documentId: number
    userId: number
    lastSyncedVersion: number
    updatedAt: number
    _all: number
  }


  export type SyncStateAvgAggregateInputType = {
    lastSyncedVersion?: true
  }

  export type SyncStateSumAggregateInputType = {
    lastSyncedVersion?: true
  }

  export type SyncStateMinAggregateInputType = {
    id?: true
    documentId?: true
    userId?: true
    lastSyncedVersion?: true
    updatedAt?: true
  }

  export type SyncStateMaxAggregateInputType = {
    id?: true
    documentId?: true
    userId?: true
    lastSyncedVersion?: true
    updatedAt?: true
  }

  export type SyncStateCountAggregateInputType = {
    id?: true
    documentId?: true
    userId?: true
    lastSyncedVersion?: true
    updatedAt?: true
    _all?: true
  }

  export type SyncStateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SyncState to aggregate.
     */
    where?: SyncStateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SyncStates to fetch.
     */
    orderBy?: SyncStateOrderByWithRelationInput | SyncStateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SyncStateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SyncStates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SyncStates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SyncStates
    **/
    _count?: true | SyncStateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SyncStateAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SyncStateSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SyncStateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SyncStateMaxAggregateInputType
  }

  export type GetSyncStateAggregateType<T extends SyncStateAggregateArgs> = {
        [P in keyof T & keyof AggregateSyncState]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSyncState[P]>
      : GetScalarType<T[P], AggregateSyncState[P]>
  }




  export type SyncStateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SyncStateWhereInput
    orderBy?: SyncStateOrderByWithAggregationInput | SyncStateOrderByWithAggregationInput[]
    by: SyncStateScalarFieldEnum[] | SyncStateScalarFieldEnum
    having?: SyncStateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SyncStateCountAggregateInputType | true
    _avg?: SyncStateAvgAggregateInputType
    _sum?: SyncStateSumAggregateInputType
    _min?: SyncStateMinAggregateInputType
    _max?: SyncStateMaxAggregateInputType
  }

  export type SyncStateGroupByOutputType = {
    id: string
    documentId: string
    userId: string
    lastSyncedVersion: number
    updatedAt: Date
    _count: SyncStateCountAggregateOutputType | null
    _avg: SyncStateAvgAggregateOutputType | null
    _sum: SyncStateSumAggregateOutputType | null
    _min: SyncStateMinAggregateOutputType | null
    _max: SyncStateMaxAggregateOutputType | null
  }

  type GetSyncStateGroupByPayload<T extends SyncStateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SyncStateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SyncStateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SyncStateGroupByOutputType[P]>
            : GetScalarType<T[P], SyncStateGroupByOutputType[P]>
        }
      >
    >


  export type SyncStateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    documentId?: boolean
    userId?: boolean
    lastSyncedVersion?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["syncState"]>

  export type SyncStateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    documentId?: boolean
    userId?: boolean
    lastSyncedVersion?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["syncState"]>

  export type SyncStateSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    documentId?: boolean
    userId?: boolean
    lastSyncedVersion?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["syncState"]>

  export type SyncStateSelectScalar = {
    id?: boolean
    documentId?: boolean
    userId?: boolean
    lastSyncedVersion?: boolean
    updatedAt?: boolean
  }

  export type SyncStateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "documentId" | "userId" | "lastSyncedVersion" | "updatedAt", ExtArgs["result"]["syncState"]>

  export type $SyncStatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SyncState"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      documentId: string
      userId: string
      lastSyncedVersion: number
      updatedAt: Date
    }, ExtArgs["result"]["syncState"]>
    composites: {}
  }

  type SyncStateGetPayload<S extends boolean | null | undefined | SyncStateDefaultArgs> = $Result.GetResult<Prisma.$SyncStatePayload, S>

  type SyncStateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SyncStateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SyncStateCountAggregateInputType | true
    }

  export interface SyncStateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SyncState'], meta: { name: 'SyncState' } }
    /**
     * Find zero or one SyncState that matches the filter.
     * @param {SyncStateFindUniqueArgs} args - Arguments to find a SyncState
     * @example
     * // Get one SyncState
     * const syncState = await prisma.syncState.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SyncStateFindUniqueArgs>(args: SelectSubset<T, SyncStateFindUniqueArgs<ExtArgs>>): Prisma__SyncStateClient<$Result.GetResult<Prisma.$SyncStatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SyncState that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SyncStateFindUniqueOrThrowArgs} args - Arguments to find a SyncState
     * @example
     * // Get one SyncState
     * const syncState = await prisma.syncState.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SyncStateFindUniqueOrThrowArgs>(args: SelectSubset<T, SyncStateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SyncStateClient<$Result.GetResult<Prisma.$SyncStatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SyncState that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SyncStateFindFirstArgs} args - Arguments to find a SyncState
     * @example
     * // Get one SyncState
     * const syncState = await prisma.syncState.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SyncStateFindFirstArgs>(args?: SelectSubset<T, SyncStateFindFirstArgs<ExtArgs>>): Prisma__SyncStateClient<$Result.GetResult<Prisma.$SyncStatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SyncState that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SyncStateFindFirstOrThrowArgs} args - Arguments to find a SyncState
     * @example
     * // Get one SyncState
     * const syncState = await prisma.syncState.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SyncStateFindFirstOrThrowArgs>(args?: SelectSubset<T, SyncStateFindFirstOrThrowArgs<ExtArgs>>): Prisma__SyncStateClient<$Result.GetResult<Prisma.$SyncStatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SyncStates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SyncStateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SyncStates
     * const syncStates = await prisma.syncState.findMany()
     * 
     * // Get first 10 SyncStates
     * const syncStates = await prisma.syncState.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const syncStateWithIdOnly = await prisma.syncState.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SyncStateFindManyArgs>(args?: SelectSubset<T, SyncStateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SyncStatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SyncState.
     * @param {SyncStateCreateArgs} args - Arguments to create a SyncState.
     * @example
     * // Create one SyncState
     * const SyncState = await prisma.syncState.create({
     *   data: {
     *     // ... data to create a SyncState
     *   }
     * })
     * 
     */
    create<T extends SyncStateCreateArgs>(args: SelectSubset<T, SyncStateCreateArgs<ExtArgs>>): Prisma__SyncStateClient<$Result.GetResult<Prisma.$SyncStatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SyncStates.
     * @param {SyncStateCreateManyArgs} args - Arguments to create many SyncStates.
     * @example
     * // Create many SyncStates
     * const syncState = await prisma.syncState.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SyncStateCreateManyArgs>(args?: SelectSubset<T, SyncStateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SyncStates and returns the data saved in the database.
     * @param {SyncStateCreateManyAndReturnArgs} args - Arguments to create many SyncStates.
     * @example
     * // Create many SyncStates
     * const syncState = await prisma.syncState.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SyncStates and only return the `id`
     * const syncStateWithIdOnly = await prisma.syncState.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SyncStateCreateManyAndReturnArgs>(args?: SelectSubset<T, SyncStateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SyncStatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SyncState.
     * @param {SyncStateDeleteArgs} args - Arguments to delete one SyncState.
     * @example
     * // Delete one SyncState
     * const SyncState = await prisma.syncState.delete({
     *   where: {
     *     // ... filter to delete one SyncState
     *   }
     * })
     * 
     */
    delete<T extends SyncStateDeleteArgs>(args: SelectSubset<T, SyncStateDeleteArgs<ExtArgs>>): Prisma__SyncStateClient<$Result.GetResult<Prisma.$SyncStatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SyncState.
     * @param {SyncStateUpdateArgs} args - Arguments to update one SyncState.
     * @example
     * // Update one SyncState
     * const syncState = await prisma.syncState.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SyncStateUpdateArgs>(args: SelectSubset<T, SyncStateUpdateArgs<ExtArgs>>): Prisma__SyncStateClient<$Result.GetResult<Prisma.$SyncStatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SyncStates.
     * @param {SyncStateDeleteManyArgs} args - Arguments to filter SyncStates to delete.
     * @example
     * // Delete a few SyncStates
     * const { count } = await prisma.syncState.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SyncStateDeleteManyArgs>(args?: SelectSubset<T, SyncStateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SyncStates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SyncStateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SyncStates
     * const syncState = await prisma.syncState.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SyncStateUpdateManyArgs>(args: SelectSubset<T, SyncStateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SyncStates and returns the data updated in the database.
     * @param {SyncStateUpdateManyAndReturnArgs} args - Arguments to update many SyncStates.
     * @example
     * // Update many SyncStates
     * const syncState = await prisma.syncState.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SyncStates and only return the `id`
     * const syncStateWithIdOnly = await prisma.syncState.updateManyAndReturn({
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
    updateManyAndReturn<T extends SyncStateUpdateManyAndReturnArgs>(args: SelectSubset<T, SyncStateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SyncStatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SyncState.
     * @param {SyncStateUpsertArgs} args - Arguments to update or create a SyncState.
     * @example
     * // Update or create a SyncState
     * const syncState = await prisma.syncState.upsert({
     *   create: {
     *     // ... data to create a SyncState
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SyncState we want to update
     *   }
     * })
     */
    upsert<T extends SyncStateUpsertArgs>(args: SelectSubset<T, SyncStateUpsertArgs<ExtArgs>>): Prisma__SyncStateClient<$Result.GetResult<Prisma.$SyncStatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SyncStates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SyncStateCountArgs} args - Arguments to filter SyncStates to count.
     * @example
     * // Count the number of SyncStates
     * const count = await prisma.syncState.count({
     *   where: {
     *     // ... the filter for the SyncStates we want to count
     *   }
     * })
    **/
    count<T extends SyncStateCountArgs>(
      args?: Subset<T, SyncStateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SyncStateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SyncState.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SyncStateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SyncStateAggregateArgs>(args: Subset<T, SyncStateAggregateArgs>): Prisma.PrismaPromise<GetSyncStateAggregateType<T>>

    /**
     * Group by SyncState.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SyncStateGroupByArgs} args - Group by arguments.
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
      T extends SyncStateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SyncStateGroupByArgs['orderBy'] }
        : { orderBy?: SyncStateGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SyncStateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSyncStateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SyncState model
   */
  readonly fields: SyncStateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SyncState.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SyncStateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the SyncState model
   */
  interface SyncStateFieldRefs {
    readonly id: FieldRef<"SyncState", 'String'>
    readonly documentId: FieldRef<"SyncState", 'String'>
    readonly userId: FieldRef<"SyncState", 'String'>
    readonly lastSyncedVersion: FieldRef<"SyncState", 'Int'>
    readonly updatedAt: FieldRef<"SyncState", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SyncState findUnique
   */
  export type SyncStateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncState
     */
    select?: SyncStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SyncState
     */
    omit?: SyncStateOmit<ExtArgs> | null
    /**
     * Filter, which SyncState to fetch.
     */
    where: SyncStateWhereUniqueInput
  }

  /**
   * SyncState findUniqueOrThrow
   */
  export type SyncStateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncState
     */
    select?: SyncStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SyncState
     */
    omit?: SyncStateOmit<ExtArgs> | null
    /**
     * Filter, which SyncState to fetch.
     */
    where: SyncStateWhereUniqueInput
  }

  /**
   * SyncState findFirst
   */
  export type SyncStateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncState
     */
    select?: SyncStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SyncState
     */
    omit?: SyncStateOmit<ExtArgs> | null
    /**
     * Filter, which SyncState to fetch.
     */
    where?: SyncStateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SyncStates to fetch.
     */
    orderBy?: SyncStateOrderByWithRelationInput | SyncStateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SyncStates.
     */
    cursor?: SyncStateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SyncStates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SyncStates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SyncStates.
     */
    distinct?: SyncStateScalarFieldEnum | SyncStateScalarFieldEnum[]
  }

  /**
   * SyncState findFirstOrThrow
   */
  export type SyncStateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncState
     */
    select?: SyncStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SyncState
     */
    omit?: SyncStateOmit<ExtArgs> | null
    /**
     * Filter, which SyncState to fetch.
     */
    where?: SyncStateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SyncStates to fetch.
     */
    orderBy?: SyncStateOrderByWithRelationInput | SyncStateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SyncStates.
     */
    cursor?: SyncStateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SyncStates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SyncStates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SyncStates.
     */
    distinct?: SyncStateScalarFieldEnum | SyncStateScalarFieldEnum[]
  }

  /**
   * SyncState findMany
   */
  export type SyncStateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncState
     */
    select?: SyncStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SyncState
     */
    omit?: SyncStateOmit<ExtArgs> | null
    /**
     * Filter, which SyncStates to fetch.
     */
    where?: SyncStateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SyncStates to fetch.
     */
    orderBy?: SyncStateOrderByWithRelationInput | SyncStateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SyncStates.
     */
    cursor?: SyncStateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SyncStates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SyncStates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SyncStates.
     */
    distinct?: SyncStateScalarFieldEnum | SyncStateScalarFieldEnum[]
  }

  /**
   * SyncState create
   */
  export type SyncStateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncState
     */
    select?: SyncStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SyncState
     */
    omit?: SyncStateOmit<ExtArgs> | null
    /**
     * The data needed to create a SyncState.
     */
    data: XOR<SyncStateCreateInput, SyncStateUncheckedCreateInput>
  }

  /**
   * SyncState createMany
   */
  export type SyncStateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SyncStates.
     */
    data: SyncStateCreateManyInput | SyncStateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SyncState createManyAndReturn
   */
  export type SyncStateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncState
     */
    select?: SyncStateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SyncState
     */
    omit?: SyncStateOmit<ExtArgs> | null
    /**
     * The data used to create many SyncStates.
     */
    data: SyncStateCreateManyInput | SyncStateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SyncState update
   */
  export type SyncStateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncState
     */
    select?: SyncStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SyncState
     */
    omit?: SyncStateOmit<ExtArgs> | null
    /**
     * The data needed to update a SyncState.
     */
    data: XOR<SyncStateUpdateInput, SyncStateUncheckedUpdateInput>
    /**
     * Choose, which SyncState to update.
     */
    where: SyncStateWhereUniqueInput
  }

  /**
   * SyncState updateMany
   */
  export type SyncStateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SyncStates.
     */
    data: XOR<SyncStateUpdateManyMutationInput, SyncStateUncheckedUpdateManyInput>
    /**
     * Filter which SyncStates to update
     */
    where?: SyncStateWhereInput
    /**
     * Limit how many SyncStates to update.
     */
    limit?: number
  }

  /**
   * SyncState updateManyAndReturn
   */
  export type SyncStateUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncState
     */
    select?: SyncStateSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SyncState
     */
    omit?: SyncStateOmit<ExtArgs> | null
    /**
     * The data used to update SyncStates.
     */
    data: XOR<SyncStateUpdateManyMutationInput, SyncStateUncheckedUpdateManyInput>
    /**
     * Filter which SyncStates to update
     */
    where?: SyncStateWhereInput
    /**
     * Limit how many SyncStates to update.
     */
    limit?: number
  }

  /**
   * SyncState upsert
   */
  export type SyncStateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncState
     */
    select?: SyncStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SyncState
     */
    omit?: SyncStateOmit<ExtArgs> | null
    /**
     * The filter to search for the SyncState to update in case it exists.
     */
    where: SyncStateWhereUniqueInput
    /**
     * In case the SyncState found by the `where` argument doesn't exist, create a new SyncState with this data.
     */
    create: XOR<SyncStateCreateInput, SyncStateUncheckedCreateInput>
    /**
     * In case the SyncState was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SyncStateUpdateInput, SyncStateUncheckedUpdateInput>
  }

  /**
   * SyncState delete
   */
  export type SyncStateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncState
     */
    select?: SyncStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SyncState
     */
    omit?: SyncStateOmit<ExtArgs> | null
    /**
     * Filter which SyncState to delete.
     */
    where: SyncStateWhereUniqueInput
  }

  /**
   * SyncState deleteMany
   */
  export type SyncStateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SyncStates to delete
     */
    where?: SyncStateWhereInput
    /**
     * Limit how many SyncStates to delete.
     */
    limit?: number
  }

  /**
   * SyncState without action
   */
  export type SyncStateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncState
     */
    select?: SyncStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SyncState
     */
    omit?: SyncStateOmit<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    password: 'password',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const DocumentScalarFieldEnum: {
    id: 'id',
    title: 'title',
    content: 'content',
    serverVersion: 'serverVersion',
    ownerId: 'ownerId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DocumentScalarFieldEnum = (typeof DocumentScalarFieldEnum)[keyof typeof DocumentScalarFieldEnum]


  export const DocumentMemberScalarFieldEnum: {
    id: 'id',
    documentId: 'documentId',
    userId: 'userId',
    role: 'role'
  };

  export type DocumentMemberScalarFieldEnum = (typeof DocumentMemberScalarFieldEnum)[keyof typeof DocumentMemberScalarFieldEnum]


  export const OperationScalarFieldEnum: {
    id: 'id',
    documentId: 'documentId',
    userId: 'userId',
    type: 'type',
    payload: 'payload',
    clientId: 'clientId',
    sequence: 'sequence',
    serverVersion: 'serverVersion',
    createdAt: 'createdAt'
  };

  export type OperationScalarFieldEnum = (typeof OperationScalarFieldEnum)[keyof typeof OperationScalarFieldEnum]


  export const SnapshotScalarFieldEnum: {
    id: 'id',
    documentId: 'documentId',
    state: 'state',
    version: 'version',
    createdAt: 'createdAt'
  };

  export type SnapshotScalarFieldEnum = (typeof SnapshotScalarFieldEnum)[keyof typeof SnapshotScalarFieldEnum]


  export const VersionScalarFieldEnum: {
    id: 'id',
    documentId: 'documentId',
    userId: 'userId',
    name: 'name',
    snapshotId: 'snapshotId',
    createdAt: 'createdAt'
  };

  export type VersionScalarFieldEnum = (typeof VersionScalarFieldEnum)[keyof typeof VersionScalarFieldEnum]


  export const SyncStateScalarFieldEnum: {
    id: 'id',
    documentId: 'documentId',
    userId: 'userId',
    lastSyncedVersion: 'lastSyncedVersion',
    updatedAt: 'updatedAt'
  };

  export type SyncStateScalarFieldEnum = (typeof SyncStateScalarFieldEnum)[keyof typeof SyncStateScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


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


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


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
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    password?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    documentsMember?: DocumentMemberListRelationFilter
    operations?: OperationListRelationFilter
    versions?: VersionListRelationFilter
    documents?: DocumentListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    documentsMember?: DocumentMemberOrderByRelationAggregateInput
    operations?: OperationOrderByRelationAggregateInput
    versions?: VersionOrderByRelationAggregateInput
    documents?: DocumentOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    password?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    documentsMember?: DocumentMemberListRelationFilter
    operations?: OperationListRelationFilter
    versions?: VersionListRelationFilter
    documents?: DocumentListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    password?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type DocumentWhereInput = {
    AND?: DocumentWhereInput | DocumentWhereInput[]
    OR?: DocumentWhereInput[]
    NOT?: DocumentWhereInput | DocumentWhereInput[]
    id?: StringFilter<"Document"> | string
    title?: StringFilter<"Document"> | string
    content?: JsonFilter<"Document">
    serverVersion?: IntFilter<"Document"> | number
    ownerId?: StringFilter<"Document"> | string
    createdAt?: DateTimeFilter<"Document"> | Date | string
    updatedAt?: DateTimeFilter<"Document"> | Date | string
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    members?: DocumentMemberListRelationFilter
    operations?: OperationListRelationFilter
    snapshots?: SnapshotListRelationFilter
    versions?: VersionListRelationFilter
  }

  export type DocumentOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    serverVersion?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    owner?: UserOrderByWithRelationInput
    members?: DocumentMemberOrderByRelationAggregateInput
    operations?: OperationOrderByRelationAggregateInput
    snapshots?: SnapshotOrderByRelationAggregateInput
    versions?: VersionOrderByRelationAggregateInput
  }

  export type DocumentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DocumentWhereInput | DocumentWhereInput[]
    OR?: DocumentWhereInput[]
    NOT?: DocumentWhereInput | DocumentWhereInput[]
    title?: StringFilter<"Document"> | string
    content?: JsonFilter<"Document">
    serverVersion?: IntFilter<"Document"> | number
    ownerId?: StringFilter<"Document"> | string
    createdAt?: DateTimeFilter<"Document"> | Date | string
    updatedAt?: DateTimeFilter<"Document"> | Date | string
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    members?: DocumentMemberListRelationFilter
    operations?: OperationListRelationFilter
    snapshots?: SnapshotListRelationFilter
    versions?: VersionListRelationFilter
  }, "id">

  export type DocumentOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    serverVersion?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DocumentCountOrderByAggregateInput
    _avg?: DocumentAvgOrderByAggregateInput
    _max?: DocumentMaxOrderByAggregateInput
    _min?: DocumentMinOrderByAggregateInput
    _sum?: DocumentSumOrderByAggregateInput
  }

  export type DocumentScalarWhereWithAggregatesInput = {
    AND?: DocumentScalarWhereWithAggregatesInput | DocumentScalarWhereWithAggregatesInput[]
    OR?: DocumentScalarWhereWithAggregatesInput[]
    NOT?: DocumentScalarWhereWithAggregatesInput | DocumentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Document"> | string
    title?: StringWithAggregatesFilter<"Document"> | string
    content?: JsonWithAggregatesFilter<"Document">
    serverVersion?: IntWithAggregatesFilter<"Document"> | number
    ownerId?: StringWithAggregatesFilter<"Document"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Document"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Document"> | Date | string
  }

  export type DocumentMemberWhereInput = {
    AND?: DocumentMemberWhereInput | DocumentMemberWhereInput[]
    OR?: DocumentMemberWhereInput[]
    NOT?: DocumentMemberWhereInput | DocumentMemberWhereInput[]
    id?: StringFilter<"DocumentMember"> | string
    documentId?: StringFilter<"DocumentMember"> | string
    userId?: StringFilter<"DocumentMember"> | string
    role?: EnumRoleFilter<"DocumentMember"> | $Enums.Role
    document?: XOR<DocumentScalarRelationFilter, DocumentWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type DocumentMemberOrderByWithRelationInput = {
    id?: SortOrder
    documentId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    document?: DocumentOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type DocumentMemberWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    documentId_userId?: DocumentMemberDocumentIdUserIdCompoundUniqueInput
    AND?: DocumentMemberWhereInput | DocumentMemberWhereInput[]
    OR?: DocumentMemberWhereInput[]
    NOT?: DocumentMemberWhereInput | DocumentMemberWhereInput[]
    documentId?: StringFilter<"DocumentMember"> | string
    userId?: StringFilter<"DocumentMember"> | string
    role?: EnumRoleFilter<"DocumentMember"> | $Enums.Role
    document?: XOR<DocumentScalarRelationFilter, DocumentWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "documentId_userId">

  export type DocumentMemberOrderByWithAggregationInput = {
    id?: SortOrder
    documentId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    _count?: DocumentMemberCountOrderByAggregateInput
    _max?: DocumentMemberMaxOrderByAggregateInput
    _min?: DocumentMemberMinOrderByAggregateInput
  }

  export type DocumentMemberScalarWhereWithAggregatesInput = {
    AND?: DocumentMemberScalarWhereWithAggregatesInput | DocumentMemberScalarWhereWithAggregatesInput[]
    OR?: DocumentMemberScalarWhereWithAggregatesInput[]
    NOT?: DocumentMemberScalarWhereWithAggregatesInput | DocumentMemberScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DocumentMember"> | string
    documentId?: StringWithAggregatesFilter<"DocumentMember"> | string
    userId?: StringWithAggregatesFilter<"DocumentMember"> | string
    role?: EnumRoleWithAggregatesFilter<"DocumentMember"> | $Enums.Role
  }

  export type OperationWhereInput = {
    AND?: OperationWhereInput | OperationWhereInput[]
    OR?: OperationWhereInput[]
    NOT?: OperationWhereInput | OperationWhereInput[]
    id?: StringFilter<"Operation"> | string
    documentId?: StringFilter<"Operation"> | string
    userId?: StringFilter<"Operation"> | string
    type?: StringFilter<"Operation"> | string
    payload?: JsonFilter<"Operation">
    clientId?: StringFilter<"Operation"> | string
    sequence?: IntFilter<"Operation"> | number
    serverVersion?: IntFilter<"Operation"> | number
    createdAt?: DateTimeFilter<"Operation"> | Date | string
    document?: XOR<DocumentScalarRelationFilter, DocumentWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type OperationOrderByWithRelationInput = {
    id?: SortOrder
    documentId?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    payload?: SortOrder
    clientId?: SortOrder
    sequence?: SortOrder
    serverVersion?: SortOrder
    createdAt?: SortOrder
    document?: DocumentOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type OperationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    clientId_sequence?: OperationClientIdSequenceCompoundUniqueInput
    AND?: OperationWhereInput | OperationWhereInput[]
    OR?: OperationWhereInput[]
    NOT?: OperationWhereInput | OperationWhereInput[]
    documentId?: StringFilter<"Operation"> | string
    userId?: StringFilter<"Operation"> | string
    type?: StringFilter<"Operation"> | string
    payload?: JsonFilter<"Operation">
    clientId?: StringFilter<"Operation"> | string
    sequence?: IntFilter<"Operation"> | number
    serverVersion?: IntFilter<"Operation"> | number
    createdAt?: DateTimeFilter<"Operation"> | Date | string
    document?: XOR<DocumentScalarRelationFilter, DocumentWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "clientId_sequence">

  export type OperationOrderByWithAggregationInput = {
    id?: SortOrder
    documentId?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    payload?: SortOrder
    clientId?: SortOrder
    sequence?: SortOrder
    serverVersion?: SortOrder
    createdAt?: SortOrder
    _count?: OperationCountOrderByAggregateInput
    _avg?: OperationAvgOrderByAggregateInput
    _max?: OperationMaxOrderByAggregateInput
    _min?: OperationMinOrderByAggregateInput
    _sum?: OperationSumOrderByAggregateInput
  }

  export type OperationScalarWhereWithAggregatesInput = {
    AND?: OperationScalarWhereWithAggregatesInput | OperationScalarWhereWithAggregatesInput[]
    OR?: OperationScalarWhereWithAggregatesInput[]
    NOT?: OperationScalarWhereWithAggregatesInput | OperationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Operation"> | string
    documentId?: StringWithAggregatesFilter<"Operation"> | string
    userId?: StringWithAggregatesFilter<"Operation"> | string
    type?: StringWithAggregatesFilter<"Operation"> | string
    payload?: JsonWithAggregatesFilter<"Operation">
    clientId?: StringWithAggregatesFilter<"Operation"> | string
    sequence?: IntWithAggregatesFilter<"Operation"> | number
    serverVersion?: IntWithAggregatesFilter<"Operation"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Operation"> | Date | string
  }

  export type SnapshotWhereInput = {
    AND?: SnapshotWhereInput | SnapshotWhereInput[]
    OR?: SnapshotWhereInput[]
    NOT?: SnapshotWhereInput | SnapshotWhereInput[]
    id?: StringFilter<"Snapshot"> | string
    documentId?: StringFilter<"Snapshot"> | string
    state?: JsonFilter<"Snapshot">
    version?: IntFilter<"Snapshot"> | number
    createdAt?: DateTimeFilter<"Snapshot"> | Date | string
    document?: XOR<DocumentScalarRelationFilter, DocumentWhereInput>
    versions?: VersionListRelationFilter
  }

  export type SnapshotOrderByWithRelationInput = {
    id?: SortOrder
    documentId?: SortOrder
    state?: SortOrder
    version?: SortOrder
    createdAt?: SortOrder
    document?: DocumentOrderByWithRelationInput
    versions?: VersionOrderByRelationAggregateInput
  }

  export type SnapshotWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SnapshotWhereInput | SnapshotWhereInput[]
    OR?: SnapshotWhereInput[]
    NOT?: SnapshotWhereInput | SnapshotWhereInput[]
    documentId?: StringFilter<"Snapshot"> | string
    state?: JsonFilter<"Snapshot">
    version?: IntFilter<"Snapshot"> | number
    createdAt?: DateTimeFilter<"Snapshot"> | Date | string
    document?: XOR<DocumentScalarRelationFilter, DocumentWhereInput>
    versions?: VersionListRelationFilter
  }, "id">

  export type SnapshotOrderByWithAggregationInput = {
    id?: SortOrder
    documentId?: SortOrder
    state?: SortOrder
    version?: SortOrder
    createdAt?: SortOrder
    _count?: SnapshotCountOrderByAggregateInput
    _avg?: SnapshotAvgOrderByAggregateInput
    _max?: SnapshotMaxOrderByAggregateInput
    _min?: SnapshotMinOrderByAggregateInput
    _sum?: SnapshotSumOrderByAggregateInput
  }

  export type SnapshotScalarWhereWithAggregatesInput = {
    AND?: SnapshotScalarWhereWithAggregatesInput | SnapshotScalarWhereWithAggregatesInput[]
    OR?: SnapshotScalarWhereWithAggregatesInput[]
    NOT?: SnapshotScalarWhereWithAggregatesInput | SnapshotScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Snapshot"> | string
    documentId?: StringWithAggregatesFilter<"Snapshot"> | string
    state?: JsonWithAggregatesFilter<"Snapshot">
    version?: IntWithAggregatesFilter<"Snapshot"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Snapshot"> | Date | string
  }

  export type VersionWhereInput = {
    AND?: VersionWhereInput | VersionWhereInput[]
    OR?: VersionWhereInput[]
    NOT?: VersionWhereInput | VersionWhereInput[]
    id?: StringFilter<"Version"> | string
    documentId?: StringFilter<"Version"> | string
    userId?: StringFilter<"Version"> | string
    name?: StringNullableFilter<"Version"> | string | null
    snapshotId?: StringFilter<"Version"> | string
    createdAt?: DateTimeFilter<"Version"> | Date | string
    document?: XOR<DocumentScalarRelationFilter, DocumentWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    snapshot?: XOR<SnapshotScalarRelationFilter, SnapshotWhereInput>
  }

  export type VersionOrderByWithRelationInput = {
    id?: SortOrder
    documentId?: SortOrder
    userId?: SortOrder
    name?: SortOrderInput | SortOrder
    snapshotId?: SortOrder
    createdAt?: SortOrder
    document?: DocumentOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    snapshot?: SnapshotOrderByWithRelationInput
  }

  export type VersionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: VersionWhereInput | VersionWhereInput[]
    OR?: VersionWhereInput[]
    NOT?: VersionWhereInput | VersionWhereInput[]
    documentId?: StringFilter<"Version"> | string
    userId?: StringFilter<"Version"> | string
    name?: StringNullableFilter<"Version"> | string | null
    snapshotId?: StringFilter<"Version"> | string
    createdAt?: DateTimeFilter<"Version"> | Date | string
    document?: XOR<DocumentScalarRelationFilter, DocumentWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    snapshot?: XOR<SnapshotScalarRelationFilter, SnapshotWhereInput>
  }, "id">

  export type VersionOrderByWithAggregationInput = {
    id?: SortOrder
    documentId?: SortOrder
    userId?: SortOrder
    name?: SortOrderInput | SortOrder
    snapshotId?: SortOrder
    createdAt?: SortOrder
    _count?: VersionCountOrderByAggregateInput
    _max?: VersionMaxOrderByAggregateInput
    _min?: VersionMinOrderByAggregateInput
  }

  export type VersionScalarWhereWithAggregatesInput = {
    AND?: VersionScalarWhereWithAggregatesInput | VersionScalarWhereWithAggregatesInput[]
    OR?: VersionScalarWhereWithAggregatesInput[]
    NOT?: VersionScalarWhereWithAggregatesInput | VersionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Version"> | string
    documentId?: StringWithAggregatesFilter<"Version"> | string
    userId?: StringWithAggregatesFilter<"Version"> | string
    name?: StringNullableWithAggregatesFilter<"Version"> | string | null
    snapshotId?: StringWithAggregatesFilter<"Version"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Version"> | Date | string
  }

  export type SyncStateWhereInput = {
    AND?: SyncStateWhereInput | SyncStateWhereInput[]
    OR?: SyncStateWhereInput[]
    NOT?: SyncStateWhereInput | SyncStateWhereInput[]
    id?: StringFilter<"SyncState"> | string
    documentId?: StringFilter<"SyncState"> | string
    userId?: StringFilter<"SyncState"> | string
    lastSyncedVersion?: IntFilter<"SyncState"> | number
    updatedAt?: DateTimeFilter<"SyncState"> | Date | string
  }

  export type SyncStateOrderByWithRelationInput = {
    id?: SortOrder
    documentId?: SortOrder
    userId?: SortOrder
    lastSyncedVersion?: SortOrder
    updatedAt?: SortOrder
  }

  export type SyncStateWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    documentId_userId?: SyncStateDocumentIdUserIdCompoundUniqueInput
    AND?: SyncStateWhereInput | SyncStateWhereInput[]
    OR?: SyncStateWhereInput[]
    NOT?: SyncStateWhereInput | SyncStateWhereInput[]
    documentId?: StringFilter<"SyncState"> | string
    userId?: StringFilter<"SyncState"> | string
    lastSyncedVersion?: IntFilter<"SyncState"> | number
    updatedAt?: DateTimeFilter<"SyncState"> | Date | string
  }, "id" | "documentId_userId">

  export type SyncStateOrderByWithAggregationInput = {
    id?: SortOrder
    documentId?: SortOrder
    userId?: SortOrder
    lastSyncedVersion?: SortOrder
    updatedAt?: SortOrder
    _count?: SyncStateCountOrderByAggregateInput
    _avg?: SyncStateAvgOrderByAggregateInput
    _max?: SyncStateMaxOrderByAggregateInput
    _min?: SyncStateMinOrderByAggregateInput
    _sum?: SyncStateSumOrderByAggregateInput
  }

  export type SyncStateScalarWhereWithAggregatesInput = {
    AND?: SyncStateScalarWhereWithAggregatesInput | SyncStateScalarWhereWithAggregatesInput[]
    OR?: SyncStateScalarWhereWithAggregatesInput[]
    NOT?: SyncStateScalarWhereWithAggregatesInput | SyncStateScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SyncState"> | string
    documentId?: StringWithAggregatesFilter<"SyncState"> | string
    userId?: StringWithAggregatesFilter<"SyncState"> | string
    lastSyncedVersion?: IntWithAggregatesFilter<"SyncState"> | number
    updatedAt?: DateTimeWithAggregatesFilter<"SyncState"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    name?: string | null
    password?: string | null
    createdAt?: Date | string
    documentsMember?: DocumentMemberCreateNestedManyWithoutUserInput
    operations?: OperationCreateNestedManyWithoutUserInput
    versions?: VersionCreateNestedManyWithoutUserInput
    documents?: DocumentCreateNestedManyWithoutOwnerInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    name?: string | null
    password?: string | null
    createdAt?: Date | string
    documentsMember?: DocumentMemberUncheckedCreateNestedManyWithoutUserInput
    operations?: OperationUncheckedCreateNestedManyWithoutUserInput
    versions?: VersionUncheckedCreateNestedManyWithoutUserInput
    documents?: DocumentUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documentsMember?: DocumentMemberUpdateManyWithoutUserNestedInput
    operations?: OperationUpdateManyWithoutUserNestedInput
    versions?: VersionUpdateManyWithoutUserNestedInput
    documents?: DocumentUpdateManyWithoutOwnerNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documentsMember?: DocumentMemberUncheckedUpdateManyWithoutUserNestedInput
    operations?: OperationUncheckedUpdateManyWithoutUserNestedInput
    versions?: VersionUncheckedUpdateManyWithoutUserNestedInput
    documents?: DocumentUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    name?: string | null
    password?: string | null
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentCreateInput = {
    id?: string
    title: string
    content?: JsonNullValueInput | InputJsonValue
    serverVersion?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutDocumentsInput
    members?: DocumentMemberCreateNestedManyWithoutDocumentInput
    operations?: OperationCreateNestedManyWithoutDocumentInput
    snapshots?: SnapshotCreateNestedManyWithoutDocumentInput
    versions?: VersionCreateNestedManyWithoutDocumentInput
  }

  export type DocumentUncheckedCreateInput = {
    id?: string
    title: string
    content?: JsonNullValueInput | InputJsonValue
    serverVersion?: number
    ownerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: DocumentMemberUncheckedCreateNestedManyWithoutDocumentInput
    operations?: OperationUncheckedCreateNestedManyWithoutDocumentInput
    snapshots?: SnapshotUncheckedCreateNestedManyWithoutDocumentInput
    versions?: VersionUncheckedCreateNestedManyWithoutDocumentInput
  }

  export type DocumentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    serverVersion?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutDocumentsNestedInput
    members?: DocumentMemberUpdateManyWithoutDocumentNestedInput
    operations?: OperationUpdateManyWithoutDocumentNestedInput
    snapshots?: SnapshotUpdateManyWithoutDocumentNestedInput
    versions?: VersionUpdateManyWithoutDocumentNestedInput
  }

  export type DocumentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    serverVersion?: IntFieldUpdateOperationsInput | number
    ownerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: DocumentMemberUncheckedUpdateManyWithoutDocumentNestedInput
    operations?: OperationUncheckedUpdateManyWithoutDocumentNestedInput
    snapshots?: SnapshotUncheckedUpdateManyWithoutDocumentNestedInput
    versions?: VersionUncheckedUpdateManyWithoutDocumentNestedInput
  }

  export type DocumentCreateManyInput = {
    id?: string
    title: string
    content?: JsonNullValueInput | InputJsonValue
    serverVersion?: number
    ownerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DocumentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    serverVersion?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    serverVersion?: IntFieldUpdateOperationsInput | number
    ownerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentMemberCreateInput = {
    id?: string
    role: $Enums.Role
    document: DocumentCreateNestedOneWithoutMembersInput
    user: UserCreateNestedOneWithoutDocumentsMemberInput
  }

  export type DocumentMemberUncheckedCreateInput = {
    id?: string
    documentId: string
    userId: string
    role: $Enums.Role
  }

  export type DocumentMemberUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    document?: DocumentUpdateOneRequiredWithoutMembersNestedInput
    user?: UserUpdateOneRequiredWithoutDocumentsMemberNestedInput
  }

  export type DocumentMemberUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    documentId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type DocumentMemberCreateManyInput = {
    id?: string
    documentId: string
    userId: string
    role: $Enums.Role
  }

  export type DocumentMemberUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type DocumentMemberUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    documentId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type OperationCreateInput = {
    id?: string
    type: string
    payload: JsonNullValueInput | InputJsonValue
    clientId: string
    sequence: number
    serverVersion: number
    createdAt?: Date | string
    document: DocumentCreateNestedOneWithoutOperationsInput
    user: UserCreateNestedOneWithoutOperationsInput
  }

  export type OperationUncheckedCreateInput = {
    id?: string
    documentId: string
    userId: string
    type: string
    payload: JsonNullValueInput | InputJsonValue
    clientId: string
    sequence: number
    serverVersion: number
    createdAt?: Date | string
  }

  export type OperationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    payload?: JsonNullValueInput | InputJsonValue
    clientId?: StringFieldUpdateOperationsInput | string
    sequence?: IntFieldUpdateOperationsInput | number
    serverVersion?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    document?: DocumentUpdateOneRequiredWithoutOperationsNestedInput
    user?: UserUpdateOneRequiredWithoutOperationsNestedInput
  }

  export type OperationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    documentId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    payload?: JsonNullValueInput | InputJsonValue
    clientId?: StringFieldUpdateOperationsInput | string
    sequence?: IntFieldUpdateOperationsInput | number
    serverVersion?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OperationCreateManyInput = {
    id?: string
    documentId: string
    userId: string
    type: string
    payload: JsonNullValueInput | InputJsonValue
    clientId: string
    sequence: number
    serverVersion: number
    createdAt?: Date | string
  }

  export type OperationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    payload?: JsonNullValueInput | InputJsonValue
    clientId?: StringFieldUpdateOperationsInput | string
    sequence?: IntFieldUpdateOperationsInput | number
    serverVersion?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OperationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    documentId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    payload?: JsonNullValueInput | InputJsonValue
    clientId?: StringFieldUpdateOperationsInput | string
    sequence?: IntFieldUpdateOperationsInput | number
    serverVersion?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SnapshotCreateInput = {
    id?: string
    state: JsonNullValueInput | InputJsonValue
    version: number
    createdAt?: Date | string
    document: DocumentCreateNestedOneWithoutSnapshotsInput
    versions?: VersionCreateNestedManyWithoutSnapshotInput
  }

  export type SnapshotUncheckedCreateInput = {
    id?: string
    documentId: string
    state: JsonNullValueInput | InputJsonValue
    version: number
    createdAt?: Date | string
    versions?: VersionUncheckedCreateNestedManyWithoutSnapshotInput
  }

  export type SnapshotUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    state?: JsonNullValueInput | InputJsonValue
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    document?: DocumentUpdateOneRequiredWithoutSnapshotsNestedInput
    versions?: VersionUpdateManyWithoutSnapshotNestedInput
  }

  export type SnapshotUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    documentId?: StringFieldUpdateOperationsInput | string
    state?: JsonNullValueInput | InputJsonValue
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    versions?: VersionUncheckedUpdateManyWithoutSnapshotNestedInput
  }

  export type SnapshotCreateManyInput = {
    id?: string
    documentId: string
    state: JsonNullValueInput | InputJsonValue
    version: number
    createdAt?: Date | string
  }

  export type SnapshotUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    state?: JsonNullValueInput | InputJsonValue
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SnapshotUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    documentId?: StringFieldUpdateOperationsInput | string
    state?: JsonNullValueInput | InputJsonValue
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VersionCreateInput = {
    id?: string
    name?: string | null
    createdAt?: Date | string
    document: DocumentCreateNestedOneWithoutVersionsInput
    user: UserCreateNestedOneWithoutVersionsInput
    snapshot: SnapshotCreateNestedOneWithoutVersionsInput
  }

  export type VersionUncheckedCreateInput = {
    id?: string
    documentId: string
    userId: string
    name?: string | null
    snapshotId: string
    createdAt?: Date | string
  }

  export type VersionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    document?: DocumentUpdateOneRequiredWithoutVersionsNestedInput
    user?: UserUpdateOneRequiredWithoutVersionsNestedInput
    snapshot?: SnapshotUpdateOneRequiredWithoutVersionsNestedInput
  }

  export type VersionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    documentId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    snapshotId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VersionCreateManyInput = {
    id?: string
    documentId: string
    userId: string
    name?: string | null
    snapshotId: string
    createdAt?: Date | string
  }

  export type VersionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VersionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    documentId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    snapshotId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SyncStateCreateInput = {
    id?: string
    documentId: string
    userId: string
    lastSyncedVersion: number
    updatedAt?: Date | string
  }

  export type SyncStateUncheckedCreateInput = {
    id?: string
    documentId: string
    userId: string
    lastSyncedVersion: number
    updatedAt?: Date | string
  }

  export type SyncStateUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    documentId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    lastSyncedVersion?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SyncStateUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    documentId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    lastSyncedVersion?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SyncStateCreateManyInput = {
    id?: string
    documentId: string
    userId: string
    lastSyncedVersion: number
    updatedAt?: Date | string
  }

  export type SyncStateUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    documentId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    lastSyncedVersion?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SyncStateUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    documentId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    lastSyncedVersion?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type DocumentMemberListRelationFilter = {
    every?: DocumentMemberWhereInput
    some?: DocumentMemberWhereInput
    none?: DocumentMemberWhereInput
  }

  export type OperationListRelationFilter = {
    every?: OperationWhereInput
    some?: OperationWhereInput
    none?: OperationWhereInput
  }

  export type VersionListRelationFilter = {
    every?: VersionWhereInput
    some?: VersionWhereInput
    none?: VersionWhereInput
  }

  export type DocumentListRelationFilter = {
    every?: DocumentWhereInput
    some?: DocumentWhereInput
    none?: DocumentWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type DocumentMemberOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OperationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VersionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DocumentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
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
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SnapshotListRelationFilter = {
    every?: SnapshotWhereInput
    some?: SnapshotWhereInput
    none?: SnapshotWhereInput
  }

  export type SnapshotOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DocumentCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    serverVersion?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DocumentAvgOrderByAggregateInput = {
    serverVersion?: SortOrder
  }

  export type DocumentMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    serverVersion?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DocumentMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    serverVersion?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DocumentSumOrderByAggregateInput = {
    serverVersion?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type DocumentScalarRelationFilter = {
    is?: DocumentWhereInput
    isNot?: DocumentWhereInput
  }

  export type DocumentMemberDocumentIdUserIdCompoundUniqueInput = {
    documentId: string
    userId: string
  }

  export type DocumentMemberCountOrderByAggregateInput = {
    id?: SortOrder
    documentId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
  }

  export type DocumentMemberMaxOrderByAggregateInput = {
    id?: SortOrder
    documentId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
  }

  export type DocumentMemberMinOrderByAggregateInput = {
    id?: SortOrder
    documentId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type OperationClientIdSequenceCompoundUniqueInput = {
    clientId: string
    sequence: number
  }

  export type OperationCountOrderByAggregateInput = {
    id?: SortOrder
    documentId?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    payload?: SortOrder
    clientId?: SortOrder
    sequence?: SortOrder
    serverVersion?: SortOrder
    createdAt?: SortOrder
  }

  export type OperationAvgOrderByAggregateInput = {
    sequence?: SortOrder
    serverVersion?: SortOrder
  }

  export type OperationMaxOrderByAggregateInput = {
    id?: SortOrder
    documentId?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    clientId?: SortOrder
    sequence?: SortOrder
    serverVersion?: SortOrder
    createdAt?: SortOrder
  }

  export type OperationMinOrderByAggregateInput = {
    id?: SortOrder
    documentId?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    clientId?: SortOrder
    sequence?: SortOrder
    serverVersion?: SortOrder
    createdAt?: SortOrder
  }

  export type OperationSumOrderByAggregateInput = {
    sequence?: SortOrder
    serverVersion?: SortOrder
  }

  export type SnapshotCountOrderByAggregateInput = {
    id?: SortOrder
    documentId?: SortOrder
    state?: SortOrder
    version?: SortOrder
    createdAt?: SortOrder
  }

  export type SnapshotAvgOrderByAggregateInput = {
    version?: SortOrder
  }

  export type SnapshotMaxOrderByAggregateInput = {
    id?: SortOrder
    documentId?: SortOrder
    version?: SortOrder
    createdAt?: SortOrder
  }

  export type SnapshotMinOrderByAggregateInput = {
    id?: SortOrder
    documentId?: SortOrder
    version?: SortOrder
    createdAt?: SortOrder
  }

  export type SnapshotSumOrderByAggregateInput = {
    version?: SortOrder
  }

  export type SnapshotScalarRelationFilter = {
    is?: SnapshotWhereInput
    isNot?: SnapshotWhereInput
  }

  export type VersionCountOrderByAggregateInput = {
    id?: SortOrder
    documentId?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    snapshotId?: SortOrder
    createdAt?: SortOrder
  }

  export type VersionMaxOrderByAggregateInput = {
    id?: SortOrder
    documentId?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    snapshotId?: SortOrder
    createdAt?: SortOrder
  }

  export type VersionMinOrderByAggregateInput = {
    id?: SortOrder
    documentId?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    snapshotId?: SortOrder
    createdAt?: SortOrder
  }

  export type SyncStateDocumentIdUserIdCompoundUniqueInput = {
    documentId: string
    userId: string
  }

  export type SyncStateCountOrderByAggregateInput = {
    id?: SortOrder
    documentId?: SortOrder
    userId?: SortOrder
    lastSyncedVersion?: SortOrder
    updatedAt?: SortOrder
  }

  export type SyncStateAvgOrderByAggregateInput = {
    lastSyncedVersion?: SortOrder
  }

  export type SyncStateMaxOrderByAggregateInput = {
    id?: SortOrder
    documentId?: SortOrder
    userId?: SortOrder
    lastSyncedVersion?: SortOrder
    updatedAt?: SortOrder
  }

  export type SyncStateMinOrderByAggregateInput = {
    id?: SortOrder
    documentId?: SortOrder
    userId?: SortOrder
    lastSyncedVersion?: SortOrder
    updatedAt?: SortOrder
  }

  export type SyncStateSumOrderByAggregateInput = {
    lastSyncedVersion?: SortOrder
  }

  export type DocumentMemberCreateNestedManyWithoutUserInput = {
    create?: XOR<DocumentMemberCreateWithoutUserInput, DocumentMemberUncheckedCreateWithoutUserInput> | DocumentMemberCreateWithoutUserInput[] | DocumentMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DocumentMemberCreateOrConnectWithoutUserInput | DocumentMemberCreateOrConnectWithoutUserInput[]
    createMany?: DocumentMemberCreateManyUserInputEnvelope
    connect?: DocumentMemberWhereUniqueInput | DocumentMemberWhereUniqueInput[]
  }

  export type OperationCreateNestedManyWithoutUserInput = {
    create?: XOR<OperationCreateWithoutUserInput, OperationUncheckedCreateWithoutUserInput> | OperationCreateWithoutUserInput[] | OperationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OperationCreateOrConnectWithoutUserInput | OperationCreateOrConnectWithoutUserInput[]
    createMany?: OperationCreateManyUserInputEnvelope
    connect?: OperationWhereUniqueInput | OperationWhereUniqueInput[]
  }

  export type VersionCreateNestedManyWithoutUserInput = {
    create?: XOR<VersionCreateWithoutUserInput, VersionUncheckedCreateWithoutUserInput> | VersionCreateWithoutUserInput[] | VersionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VersionCreateOrConnectWithoutUserInput | VersionCreateOrConnectWithoutUserInput[]
    createMany?: VersionCreateManyUserInputEnvelope
    connect?: VersionWhereUniqueInput | VersionWhereUniqueInput[]
  }

  export type DocumentCreateNestedManyWithoutOwnerInput = {
    create?: XOR<DocumentCreateWithoutOwnerInput, DocumentUncheckedCreateWithoutOwnerInput> | DocumentCreateWithoutOwnerInput[] | DocumentUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutOwnerInput | DocumentCreateOrConnectWithoutOwnerInput[]
    createMany?: DocumentCreateManyOwnerInputEnvelope
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
  }

  export type DocumentMemberUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<DocumentMemberCreateWithoutUserInput, DocumentMemberUncheckedCreateWithoutUserInput> | DocumentMemberCreateWithoutUserInput[] | DocumentMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DocumentMemberCreateOrConnectWithoutUserInput | DocumentMemberCreateOrConnectWithoutUserInput[]
    createMany?: DocumentMemberCreateManyUserInputEnvelope
    connect?: DocumentMemberWhereUniqueInput | DocumentMemberWhereUniqueInput[]
  }

  export type OperationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<OperationCreateWithoutUserInput, OperationUncheckedCreateWithoutUserInput> | OperationCreateWithoutUserInput[] | OperationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OperationCreateOrConnectWithoutUserInput | OperationCreateOrConnectWithoutUserInput[]
    createMany?: OperationCreateManyUserInputEnvelope
    connect?: OperationWhereUniqueInput | OperationWhereUniqueInput[]
  }

  export type VersionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<VersionCreateWithoutUserInput, VersionUncheckedCreateWithoutUserInput> | VersionCreateWithoutUserInput[] | VersionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VersionCreateOrConnectWithoutUserInput | VersionCreateOrConnectWithoutUserInput[]
    createMany?: VersionCreateManyUserInputEnvelope
    connect?: VersionWhereUniqueInput | VersionWhereUniqueInput[]
  }

  export type DocumentUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<DocumentCreateWithoutOwnerInput, DocumentUncheckedCreateWithoutOwnerInput> | DocumentCreateWithoutOwnerInput[] | DocumentUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutOwnerInput | DocumentCreateOrConnectWithoutOwnerInput[]
    createMany?: DocumentCreateManyOwnerInputEnvelope
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type DocumentMemberUpdateManyWithoutUserNestedInput = {
    create?: XOR<DocumentMemberCreateWithoutUserInput, DocumentMemberUncheckedCreateWithoutUserInput> | DocumentMemberCreateWithoutUserInput[] | DocumentMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DocumentMemberCreateOrConnectWithoutUserInput | DocumentMemberCreateOrConnectWithoutUserInput[]
    upsert?: DocumentMemberUpsertWithWhereUniqueWithoutUserInput | DocumentMemberUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DocumentMemberCreateManyUserInputEnvelope
    set?: DocumentMemberWhereUniqueInput | DocumentMemberWhereUniqueInput[]
    disconnect?: DocumentMemberWhereUniqueInput | DocumentMemberWhereUniqueInput[]
    delete?: DocumentMemberWhereUniqueInput | DocumentMemberWhereUniqueInput[]
    connect?: DocumentMemberWhereUniqueInput | DocumentMemberWhereUniqueInput[]
    update?: DocumentMemberUpdateWithWhereUniqueWithoutUserInput | DocumentMemberUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DocumentMemberUpdateManyWithWhereWithoutUserInput | DocumentMemberUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DocumentMemberScalarWhereInput | DocumentMemberScalarWhereInput[]
  }

  export type OperationUpdateManyWithoutUserNestedInput = {
    create?: XOR<OperationCreateWithoutUserInput, OperationUncheckedCreateWithoutUserInput> | OperationCreateWithoutUserInput[] | OperationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OperationCreateOrConnectWithoutUserInput | OperationCreateOrConnectWithoutUserInput[]
    upsert?: OperationUpsertWithWhereUniqueWithoutUserInput | OperationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OperationCreateManyUserInputEnvelope
    set?: OperationWhereUniqueInput | OperationWhereUniqueInput[]
    disconnect?: OperationWhereUniqueInput | OperationWhereUniqueInput[]
    delete?: OperationWhereUniqueInput | OperationWhereUniqueInput[]
    connect?: OperationWhereUniqueInput | OperationWhereUniqueInput[]
    update?: OperationUpdateWithWhereUniqueWithoutUserInput | OperationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OperationUpdateManyWithWhereWithoutUserInput | OperationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OperationScalarWhereInput | OperationScalarWhereInput[]
  }

  export type VersionUpdateManyWithoutUserNestedInput = {
    create?: XOR<VersionCreateWithoutUserInput, VersionUncheckedCreateWithoutUserInput> | VersionCreateWithoutUserInput[] | VersionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VersionCreateOrConnectWithoutUserInput | VersionCreateOrConnectWithoutUserInput[]
    upsert?: VersionUpsertWithWhereUniqueWithoutUserInput | VersionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: VersionCreateManyUserInputEnvelope
    set?: VersionWhereUniqueInput | VersionWhereUniqueInput[]
    disconnect?: VersionWhereUniqueInput | VersionWhereUniqueInput[]
    delete?: VersionWhereUniqueInput | VersionWhereUniqueInput[]
    connect?: VersionWhereUniqueInput | VersionWhereUniqueInput[]
    update?: VersionUpdateWithWhereUniqueWithoutUserInput | VersionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: VersionUpdateManyWithWhereWithoutUserInput | VersionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: VersionScalarWhereInput | VersionScalarWhereInput[]
  }

  export type DocumentUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<DocumentCreateWithoutOwnerInput, DocumentUncheckedCreateWithoutOwnerInput> | DocumentCreateWithoutOwnerInput[] | DocumentUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutOwnerInput | DocumentCreateOrConnectWithoutOwnerInput[]
    upsert?: DocumentUpsertWithWhereUniqueWithoutOwnerInput | DocumentUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: DocumentCreateManyOwnerInputEnvelope
    set?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    disconnect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    delete?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    update?: DocumentUpdateWithWhereUniqueWithoutOwnerInput | DocumentUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: DocumentUpdateManyWithWhereWithoutOwnerInput | DocumentUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
  }

  export type DocumentMemberUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<DocumentMemberCreateWithoutUserInput, DocumentMemberUncheckedCreateWithoutUserInput> | DocumentMemberCreateWithoutUserInput[] | DocumentMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DocumentMemberCreateOrConnectWithoutUserInput | DocumentMemberCreateOrConnectWithoutUserInput[]
    upsert?: DocumentMemberUpsertWithWhereUniqueWithoutUserInput | DocumentMemberUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DocumentMemberCreateManyUserInputEnvelope
    set?: DocumentMemberWhereUniqueInput | DocumentMemberWhereUniqueInput[]
    disconnect?: DocumentMemberWhereUniqueInput | DocumentMemberWhereUniqueInput[]
    delete?: DocumentMemberWhereUniqueInput | DocumentMemberWhereUniqueInput[]
    connect?: DocumentMemberWhereUniqueInput | DocumentMemberWhereUniqueInput[]
    update?: DocumentMemberUpdateWithWhereUniqueWithoutUserInput | DocumentMemberUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DocumentMemberUpdateManyWithWhereWithoutUserInput | DocumentMemberUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DocumentMemberScalarWhereInput | DocumentMemberScalarWhereInput[]
  }

  export type OperationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<OperationCreateWithoutUserInput, OperationUncheckedCreateWithoutUserInput> | OperationCreateWithoutUserInput[] | OperationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OperationCreateOrConnectWithoutUserInput | OperationCreateOrConnectWithoutUserInput[]
    upsert?: OperationUpsertWithWhereUniqueWithoutUserInput | OperationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OperationCreateManyUserInputEnvelope
    set?: OperationWhereUniqueInput | OperationWhereUniqueInput[]
    disconnect?: OperationWhereUniqueInput | OperationWhereUniqueInput[]
    delete?: OperationWhereUniqueInput | OperationWhereUniqueInput[]
    connect?: OperationWhereUniqueInput | OperationWhereUniqueInput[]
    update?: OperationUpdateWithWhereUniqueWithoutUserInput | OperationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OperationUpdateManyWithWhereWithoutUserInput | OperationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OperationScalarWhereInput | OperationScalarWhereInput[]
  }

  export type VersionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<VersionCreateWithoutUserInput, VersionUncheckedCreateWithoutUserInput> | VersionCreateWithoutUserInput[] | VersionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VersionCreateOrConnectWithoutUserInput | VersionCreateOrConnectWithoutUserInput[]
    upsert?: VersionUpsertWithWhereUniqueWithoutUserInput | VersionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: VersionCreateManyUserInputEnvelope
    set?: VersionWhereUniqueInput | VersionWhereUniqueInput[]
    disconnect?: VersionWhereUniqueInput | VersionWhereUniqueInput[]
    delete?: VersionWhereUniqueInput | VersionWhereUniqueInput[]
    connect?: VersionWhereUniqueInput | VersionWhereUniqueInput[]
    update?: VersionUpdateWithWhereUniqueWithoutUserInput | VersionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: VersionUpdateManyWithWhereWithoutUserInput | VersionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: VersionScalarWhereInput | VersionScalarWhereInput[]
  }

  export type DocumentUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<DocumentCreateWithoutOwnerInput, DocumentUncheckedCreateWithoutOwnerInput> | DocumentCreateWithoutOwnerInput[] | DocumentUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutOwnerInput | DocumentCreateOrConnectWithoutOwnerInput[]
    upsert?: DocumentUpsertWithWhereUniqueWithoutOwnerInput | DocumentUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: DocumentCreateManyOwnerInputEnvelope
    set?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    disconnect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    delete?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    update?: DocumentUpdateWithWhereUniqueWithoutOwnerInput | DocumentUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: DocumentUpdateManyWithWhereWithoutOwnerInput | DocumentUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutDocumentsInput = {
    create?: XOR<UserCreateWithoutDocumentsInput, UserUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDocumentsInput
    connect?: UserWhereUniqueInput
  }

  export type DocumentMemberCreateNestedManyWithoutDocumentInput = {
    create?: XOR<DocumentMemberCreateWithoutDocumentInput, DocumentMemberUncheckedCreateWithoutDocumentInput> | DocumentMemberCreateWithoutDocumentInput[] | DocumentMemberUncheckedCreateWithoutDocumentInput[]
    connectOrCreate?: DocumentMemberCreateOrConnectWithoutDocumentInput | DocumentMemberCreateOrConnectWithoutDocumentInput[]
    createMany?: DocumentMemberCreateManyDocumentInputEnvelope
    connect?: DocumentMemberWhereUniqueInput | DocumentMemberWhereUniqueInput[]
  }

  export type OperationCreateNestedManyWithoutDocumentInput = {
    create?: XOR<OperationCreateWithoutDocumentInput, OperationUncheckedCreateWithoutDocumentInput> | OperationCreateWithoutDocumentInput[] | OperationUncheckedCreateWithoutDocumentInput[]
    connectOrCreate?: OperationCreateOrConnectWithoutDocumentInput | OperationCreateOrConnectWithoutDocumentInput[]
    createMany?: OperationCreateManyDocumentInputEnvelope
    connect?: OperationWhereUniqueInput | OperationWhereUniqueInput[]
  }

  export type SnapshotCreateNestedManyWithoutDocumentInput = {
    create?: XOR<SnapshotCreateWithoutDocumentInput, SnapshotUncheckedCreateWithoutDocumentInput> | SnapshotCreateWithoutDocumentInput[] | SnapshotUncheckedCreateWithoutDocumentInput[]
    connectOrCreate?: SnapshotCreateOrConnectWithoutDocumentInput | SnapshotCreateOrConnectWithoutDocumentInput[]
    createMany?: SnapshotCreateManyDocumentInputEnvelope
    connect?: SnapshotWhereUniqueInput | SnapshotWhereUniqueInput[]
  }

  export type VersionCreateNestedManyWithoutDocumentInput = {
    create?: XOR<VersionCreateWithoutDocumentInput, VersionUncheckedCreateWithoutDocumentInput> | VersionCreateWithoutDocumentInput[] | VersionUncheckedCreateWithoutDocumentInput[]
    connectOrCreate?: VersionCreateOrConnectWithoutDocumentInput | VersionCreateOrConnectWithoutDocumentInput[]
    createMany?: VersionCreateManyDocumentInputEnvelope
    connect?: VersionWhereUniqueInput | VersionWhereUniqueInput[]
  }

  export type DocumentMemberUncheckedCreateNestedManyWithoutDocumentInput = {
    create?: XOR<DocumentMemberCreateWithoutDocumentInput, DocumentMemberUncheckedCreateWithoutDocumentInput> | DocumentMemberCreateWithoutDocumentInput[] | DocumentMemberUncheckedCreateWithoutDocumentInput[]
    connectOrCreate?: DocumentMemberCreateOrConnectWithoutDocumentInput | DocumentMemberCreateOrConnectWithoutDocumentInput[]
    createMany?: DocumentMemberCreateManyDocumentInputEnvelope
    connect?: DocumentMemberWhereUniqueInput | DocumentMemberWhereUniqueInput[]
  }

  export type OperationUncheckedCreateNestedManyWithoutDocumentInput = {
    create?: XOR<OperationCreateWithoutDocumentInput, OperationUncheckedCreateWithoutDocumentInput> | OperationCreateWithoutDocumentInput[] | OperationUncheckedCreateWithoutDocumentInput[]
    connectOrCreate?: OperationCreateOrConnectWithoutDocumentInput | OperationCreateOrConnectWithoutDocumentInput[]
    createMany?: OperationCreateManyDocumentInputEnvelope
    connect?: OperationWhereUniqueInput | OperationWhereUniqueInput[]
  }

  export type SnapshotUncheckedCreateNestedManyWithoutDocumentInput = {
    create?: XOR<SnapshotCreateWithoutDocumentInput, SnapshotUncheckedCreateWithoutDocumentInput> | SnapshotCreateWithoutDocumentInput[] | SnapshotUncheckedCreateWithoutDocumentInput[]
    connectOrCreate?: SnapshotCreateOrConnectWithoutDocumentInput | SnapshotCreateOrConnectWithoutDocumentInput[]
    createMany?: SnapshotCreateManyDocumentInputEnvelope
    connect?: SnapshotWhereUniqueInput | SnapshotWhereUniqueInput[]
  }

  export type VersionUncheckedCreateNestedManyWithoutDocumentInput = {
    create?: XOR<VersionCreateWithoutDocumentInput, VersionUncheckedCreateWithoutDocumentInput> | VersionCreateWithoutDocumentInput[] | VersionUncheckedCreateWithoutDocumentInput[]
    connectOrCreate?: VersionCreateOrConnectWithoutDocumentInput | VersionCreateOrConnectWithoutDocumentInput[]
    createMany?: VersionCreateManyDocumentInputEnvelope
    connect?: VersionWhereUniqueInput | VersionWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutDocumentsNestedInput = {
    create?: XOR<UserCreateWithoutDocumentsInput, UserUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDocumentsInput
    upsert?: UserUpsertWithoutDocumentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDocumentsInput, UserUpdateWithoutDocumentsInput>, UserUncheckedUpdateWithoutDocumentsInput>
  }

  export type DocumentMemberUpdateManyWithoutDocumentNestedInput = {
    create?: XOR<DocumentMemberCreateWithoutDocumentInput, DocumentMemberUncheckedCreateWithoutDocumentInput> | DocumentMemberCreateWithoutDocumentInput[] | DocumentMemberUncheckedCreateWithoutDocumentInput[]
    connectOrCreate?: DocumentMemberCreateOrConnectWithoutDocumentInput | DocumentMemberCreateOrConnectWithoutDocumentInput[]
    upsert?: DocumentMemberUpsertWithWhereUniqueWithoutDocumentInput | DocumentMemberUpsertWithWhereUniqueWithoutDocumentInput[]
    createMany?: DocumentMemberCreateManyDocumentInputEnvelope
    set?: DocumentMemberWhereUniqueInput | DocumentMemberWhereUniqueInput[]
    disconnect?: DocumentMemberWhereUniqueInput | DocumentMemberWhereUniqueInput[]
    delete?: DocumentMemberWhereUniqueInput | DocumentMemberWhereUniqueInput[]
    connect?: DocumentMemberWhereUniqueInput | DocumentMemberWhereUniqueInput[]
    update?: DocumentMemberUpdateWithWhereUniqueWithoutDocumentInput | DocumentMemberUpdateWithWhereUniqueWithoutDocumentInput[]
    updateMany?: DocumentMemberUpdateManyWithWhereWithoutDocumentInput | DocumentMemberUpdateManyWithWhereWithoutDocumentInput[]
    deleteMany?: DocumentMemberScalarWhereInput | DocumentMemberScalarWhereInput[]
  }

  export type OperationUpdateManyWithoutDocumentNestedInput = {
    create?: XOR<OperationCreateWithoutDocumentInput, OperationUncheckedCreateWithoutDocumentInput> | OperationCreateWithoutDocumentInput[] | OperationUncheckedCreateWithoutDocumentInput[]
    connectOrCreate?: OperationCreateOrConnectWithoutDocumentInput | OperationCreateOrConnectWithoutDocumentInput[]
    upsert?: OperationUpsertWithWhereUniqueWithoutDocumentInput | OperationUpsertWithWhereUniqueWithoutDocumentInput[]
    createMany?: OperationCreateManyDocumentInputEnvelope
    set?: OperationWhereUniqueInput | OperationWhereUniqueInput[]
    disconnect?: OperationWhereUniqueInput | OperationWhereUniqueInput[]
    delete?: OperationWhereUniqueInput | OperationWhereUniqueInput[]
    connect?: OperationWhereUniqueInput | OperationWhereUniqueInput[]
    update?: OperationUpdateWithWhereUniqueWithoutDocumentInput | OperationUpdateWithWhereUniqueWithoutDocumentInput[]
    updateMany?: OperationUpdateManyWithWhereWithoutDocumentInput | OperationUpdateManyWithWhereWithoutDocumentInput[]
    deleteMany?: OperationScalarWhereInput | OperationScalarWhereInput[]
  }

  export type SnapshotUpdateManyWithoutDocumentNestedInput = {
    create?: XOR<SnapshotCreateWithoutDocumentInput, SnapshotUncheckedCreateWithoutDocumentInput> | SnapshotCreateWithoutDocumentInput[] | SnapshotUncheckedCreateWithoutDocumentInput[]
    connectOrCreate?: SnapshotCreateOrConnectWithoutDocumentInput | SnapshotCreateOrConnectWithoutDocumentInput[]
    upsert?: SnapshotUpsertWithWhereUniqueWithoutDocumentInput | SnapshotUpsertWithWhereUniqueWithoutDocumentInput[]
    createMany?: SnapshotCreateManyDocumentInputEnvelope
    set?: SnapshotWhereUniqueInput | SnapshotWhereUniqueInput[]
    disconnect?: SnapshotWhereUniqueInput | SnapshotWhereUniqueInput[]
    delete?: SnapshotWhereUniqueInput | SnapshotWhereUniqueInput[]
    connect?: SnapshotWhereUniqueInput | SnapshotWhereUniqueInput[]
    update?: SnapshotUpdateWithWhereUniqueWithoutDocumentInput | SnapshotUpdateWithWhereUniqueWithoutDocumentInput[]
    updateMany?: SnapshotUpdateManyWithWhereWithoutDocumentInput | SnapshotUpdateManyWithWhereWithoutDocumentInput[]
    deleteMany?: SnapshotScalarWhereInput | SnapshotScalarWhereInput[]
  }

  export type VersionUpdateManyWithoutDocumentNestedInput = {
    create?: XOR<VersionCreateWithoutDocumentInput, VersionUncheckedCreateWithoutDocumentInput> | VersionCreateWithoutDocumentInput[] | VersionUncheckedCreateWithoutDocumentInput[]
    connectOrCreate?: VersionCreateOrConnectWithoutDocumentInput | VersionCreateOrConnectWithoutDocumentInput[]
    upsert?: VersionUpsertWithWhereUniqueWithoutDocumentInput | VersionUpsertWithWhereUniqueWithoutDocumentInput[]
    createMany?: VersionCreateManyDocumentInputEnvelope
    set?: VersionWhereUniqueInput | VersionWhereUniqueInput[]
    disconnect?: VersionWhereUniqueInput | VersionWhereUniqueInput[]
    delete?: VersionWhereUniqueInput | VersionWhereUniqueInput[]
    connect?: VersionWhereUniqueInput | VersionWhereUniqueInput[]
    update?: VersionUpdateWithWhereUniqueWithoutDocumentInput | VersionUpdateWithWhereUniqueWithoutDocumentInput[]
    updateMany?: VersionUpdateManyWithWhereWithoutDocumentInput | VersionUpdateManyWithWhereWithoutDocumentInput[]
    deleteMany?: VersionScalarWhereInput | VersionScalarWhereInput[]
  }

  export type DocumentMemberUncheckedUpdateManyWithoutDocumentNestedInput = {
    create?: XOR<DocumentMemberCreateWithoutDocumentInput, DocumentMemberUncheckedCreateWithoutDocumentInput> | DocumentMemberCreateWithoutDocumentInput[] | DocumentMemberUncheckedCreateWithoutDocumentInput[]
    connectOrCreate?: DocumentMemberCreateOrConnectWithoutDocumentInput | DocumentMemberCreateOrConnectWithoutDocumentInput[]
    upsert?: DocumentMemberUpsertWithWhereUniqueWithoutDocumentInput | DocumentMemberUpsertWithWhereUniqueWithoutDocumentInput[]
    createMany?: DocumentMemberCreateManyDocumentInputEnvelope
    set?: DocumentMemberWhereUniqueInput | DocumentMemberWhereUniqueInput[]
    disconnect?: DocumentMemberWhereUniqueInput | DocumentMemberWhereUniqueInput[]
    delete?: DocumentMemberWhereUniqueInput | DocumentMemberWhereUniqueInput[]
    connect?: DocumentMemberWhereUniqueInput | DocumentMemberWhereUniqueInput[]
    update?: DocumentMemberUpdateWithWhereUniqueWithoutDocumentInput | DocumentMemberUpdateWithWhereUniqueWithoutDocumentInput[]
    updateMany?: DocumentMemberUpdateManyWithWhereWithoutDocumentInput | DocumentMemberUpdateManyWithWhereWithoutDocumentInput[]
    deleteMany?: DocumentMemberScalarWhereInput | DocumentMemberScalarWhereInput[]
  }

  export type OperationUncheckedUpdateManyWithoutDocumentNestedInput = {
    create?: XOR<OperationCreateWithoutDocumentInput, OperationUncheckedCreateWithoutDocumentInput> | OperationCreateWithoutDocumentInput[] | OperationUncheckedCreateWithoutDocumentInput[]
    connectOrCreate?: OperationCreateOrConnectWithoutDocumentInput | OperationCreateOrConnectWithoutDocumentInput[]
    upsert?: OperationUpsertWithWhereUniqueWithoutDocumentInput | OperationUpsertWithWhereUniqueWithoutDocumentInput[]
    createMany?: OperationCreateManyDocumentInputEnvelope
    set?: OperationWhereUniqueInput | OperationWhereUniqueInput[]
    disconnect?: OperationWhereUniqueInput | OperationWhereUniqueInput[]
    delete?: OperationWhereUniqueInput | OperationWhereUniqueInput[]
    connect?: OperationWhereUniqueInput | OperationWhereUniqueInput[]
    update?: OperationUpdateWithWhereUniqueWithoutDocumentInput | OperationUpdateWithWhereUniqueWithoutDocumentInput[]
    updateMany?: OperationUpdateManyWithWhereWithoutDocumentInput | OperationUpdateManyWithWhereWithoutDocumentInput[]
    deleteMany?: OperationScalarWhereInput | OperationScalarWhereInput[]
  }

  export type SnapshotUncheckedUpdateManyWithoutDocumentNestedInput = {
    create?: XOR<SnapshotCreateWithoutDocumentInput, SnapshotUncheckedCreateWithoutDocumentInput> | SnapshotCreateWithoutDocumentInput[] | SnapshotUncheckedCreateWithoutDocumentInput[]
    connectOrCreate?: SnapshotCreateOrConnectWithoutDocumentInput | SnapshotCreateOrConnectWithoutDocumentInput[]
    upsert?: SnapshotUpsertWithWhereUniqueWithoutDocumentInput | SnapshotUpsertWithWhereUniqueWithoutDocumentInput[]
    createMany?: SnapshotCreateManyDocumentInputEnvelope
    set?: SnapshotWhereUniqueInput | SnapshotWhereUniqueInput[]
    disconnect?: SnapshotWhereUniqueInput | SnapshotWhereUniqueInput[]
    delete?: SnapshotWhereUniqueInput | SnapshotWhereUniqueInput[]
    connect?: SnapshotWhereUniqueInput | SnapshotWhereUniqueInput[]
    update?: SnapshotUpdateWithWhereUniqueWithoutDocumentInput | SnapshotUpdateWithWhereUniqueWithoutDocumentInput[]
    updateMany?: SnapshotUpdateManyWithWhereWithoutDocumentInput | SnapshotUpdateManyWithWhereWithoutDocumentInput[]
    deleteMany?: SnapshotScalarWhereInput | SnapshotScalarWhereInput[]
  }

  export type VersionUncheckedUpdateManyWithoutDocumentNestedInput = {
    create?: XOR<VersionCreateWithoutDocumentInput, VersionUncheckedCreateWithoutDocumentInput> | VersionCreateWithoutDocumentInput[] | VersionUncheckedCreateWithoutDocumentInput[]
    connectOrCreate?: VersionCreateOrConnectWithoutDocumentInput | VersionCreateOrConnectWithoutDocumentInput[]
    upsert?: VersionUpsertWithWhereUniqueWithoutDocumentInput | VersionUpsertWithWhereUniqueWithoutDocumentInput[]
    createMany?: VersionCreateManyDocumentInputEnvelope
    set?: VersionWhereUniqueInput | VersionWhereUniqueInput[]
    disconnect?: VersionWhereUniqueInput | VersionWhereUniqueInput[]
    delete?: VersionWhereUniqueInput | VersionWhereUniqueInput[]
    connect?: VersionWhereUniqueInput | VersionWhereUniqueInput[]
    update?: VersionUpdateWithWhereUniqueWithoutDocumentInput | VersionUpdateWithWhereUniqueWithoutDocumentInput[]
    updateMany?: VersionUpdateManyWithWhereWithoutDocumentInput | VersionUpdateManyWithWhereWithoutDocumentInput[]
    deleteMany?: VersionScalarWhereInput | VersionScalarWhereInput[]
  }

  export type DocumentCreateNestedOneWithoutMembersInput = {
    create?: XOR<DocumentCreateWithoutMembersInput, DocumentUncheckedCreateWithoutMembersInput>
    connectOrCreate?: DocumentCreateOrConnectWithoutMembersInput
    connect?: DocumentWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutDocumentsMemberInput = {
    create?: XOR<UserCreateWithoutDocumentsMemberInput, UserUncheckedCreateWithoutDocumentsMemberInput>
    connectOrCreate?: UserCreateOrConnectWithoutDocumentsMemberInput
    connect?: UserWhereUniqueInput
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DocumentUpdateOneRequiredWithoutMembersNestedInput = {
    create?: XOR<DocumentCreateWithoutMembersInput, DocumentUncheckedCreateWithoutMembersInput>
    connectOrCreate?: DocumentCreateOrConnectWithoutMembersInput
    upsert?: DocumentUpsertWithoutMembersInput
    connect?: DocumentWhereUniqueInput
    update?: XOR<XOR<DocumentUpdateToOneWithWhereWithoutMembersInput, DocumentUpdateWithoutMembersInput>, DocumentUncheckedUpdateWithoutMembersInput>
  }

  export type UserUpdateOneRequiredWithoutDocumentsMemberNestedInput = {
    create?: XOR<UserCreateWithoutDocumentsMemberInput, UserUncheckedCreateWithoutDocumentsMemberInput>
    connectOrCreate?: UserCreateOrConnectWithoutDocumentsMemberInput
    upsert?: UserUpsertWithoutDocumentsMemberInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDocumentsMemberInput, UserUpdateWithoutDocumentsMemberInput>, UserUncheckedUpdateWithoutDocumentsMemberInput>
  }

  export type DocumentCreateNestedOneWithoutOperationsInput = {
    create?: XOR<DocumentCreateWithoutOperationsInput, DocumentUncheckedCreateWithoutOperationsInput>
    connectOrCreate?: DocumentCreateOrConnectWithoutOperationsInput
    connect?: DocumentWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutOperationsInput = {
    create?: XOR<UserCreateWithoutOperationsInput, UserUncheckedCreateWithoutOperationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutOperationsInput
    connect?: UserWhereUniqueInput
  }

  export type DocumentUpdateOneRequiredWithoutOperationsNestedInput = {
    create?: XOR<DocumentCreateWithoutOperationsInput, DocumentUncheckedCreateWithoutOperationsInput>
    connectOrCreate?: DocumentCreateOrConnectWithoutOperationsInput
    upsert?: DocumentUpsertWithoutOperationsInput
    connect?: DocumentWhereUniqueInput
    update?: XOR<XOR<DocumentUpdateToOneWithWhereWithoutOperationsInput, DocumentUpdateWithoutOperationsInput>, DocumentUncheckedUpdateWithoutOperationsInput>
  }

  export type UserUpdateOneRequiredWithoutOperationsNestedInput = {
    create?: XOR<UserCreateWithoutOperationsInput, UserUncheckedCreateWithoutOperationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutOperationsInput
    upsert?: UserUpsertWithoutOperationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOperationsInput, UserUpdateWithoutOperationsInput>, UserUncheckedUpdateWithoutOperationsInput>
  }

  export type DocumentCreateNestedOneWithoutSnapshotsInput = {
    create?: XOR<DocumentCreateWithoutSnapshotsInput, DocumentUncheckedCreateWithoutSnapshotsInput>
    connectOrCreate?: DocumentCreateOrConnectWithoutSnapshotsInput
    connect?: DocumentWhereUniqueInput
  }

  export type VersionCreateNestedManyWithoutSnapshotInput = {
    create?: XOR<VersionCreateWithoutSnapshotInput, VersionUncheckedCreateWithoutSnapshotInput> | VersionCreateWithoutSnapshotInput[] | VersionUncheckedCreateWithoutSnapshotInput[]
    connectOrCreate?: VersionCreateOrConnectWithoutSnapshotInput | VersionCreateOrConnectWithoutSnapshotInput[]
    createMany?: VersionCreateManySnapshotInputEnvelope
    connect?: VersionWhereUniqueInput | VersionWhereUniqueInput[]
  }

  export type VersionUncheckedCreateNestedManyWithoutSnapshotInput = {
    create?: XOR<VersionCreateWithoutSnapshotInput, VersionUncheckedCreateWithoutSnapshotInput> | VersionCreateWithoutSnapshotInput[] | VersionUncheckedCreateWithoutSnapshotInput[]
    connectOrCreate?: VersionCreateOrConnectWithoutSnapshotInput | VersionCreateOrConnectWithoutSnapshotInput[]
    createMany?: VersionCreateManySnapshotInputEnvelope
    connect?: VersionWhereUniqueInput | VersionWhereUniqueInput[]
  }

  export type DocumentUpdateOneRequiredWithoutSnapshotsNestedInput = {
    create?: XOR<DocumentCreateWithoutSnapshotsInput, DocumentUncheckedCreateWithoutSnapshotsInput>
    connectOrCreate?: DocumentCreateOrConnectWithoutSnapshotsInput
    upsert?: DocumentUpsertWithoutSnapshotsInput
    connect?: DocumentWhereUniqueInput
    update?: XOR<XOR<DocumentUpdateToOneWithWhereWithoutSnapshotsInput, DocumentUpdateWithoutSnapshotsInput>, DocumentUncheckedUpdateWithoutSnapshotsInput>
  }

  export type VersionUpdateManyWithoutSnapshotNestedInput = {
    create?: XOR<VersionCreateWithoutSnapshotInput, VersionUncheckedCreateWithoutSnapshotInput> | VersionCreateWithoutSnapshotInput[] | VersionUncheckedCreateWithoutSnapshotInput[]
    connectOrCreate?: VersionCreateOrConnectWithoutSnapshotInput | VersionCreateOrConnectWithoutSnapshotInput[]
    upsert?: VersionUpsertWithWhereUniqueWithoutSnapshotInput | VersionUpsertWithWhereUniqueWithoutSnapshotInput[]
    createMany?: VersionCreateManySnapshotInputEnvelope
    set?: VersionWhereUniqueInput | VersionWhereUniqueInput[]
    disconnect?: VersionWhereUniqueInput | VersionWhereUniqueInput[]
    delete?: VersionWhereUniqueInput | VersionWhereUniqueInput[]
    connect?: VersionWhereUniqueInput | VersionWhereUniqueInput[]
    update?: VersionUpdateWithWhereUniqueWithoutSnapshotInput | VersionUpdateWithWhereUniqueWithoutSnapshotInput[]
    updateMany?: VersionUpdateManyWithWhereWithoutSnapshotInput | VersionUpdateManyWithWhereWithoutSnapshotInput[]
    deleteMany?: VersionScalarWhereInput | VersionScalarWhereInput[]
  }

  export type VersionUncheckedUpdateManyWithoutSnapshotNestedInput = {
    create?: XOR<VersionCreateWithoutSnapshotInput, VersionUncheckedCreateWithoutSnapshotInput> | VersionCreateWithoutSnapshotInput[] | VersionUncheckedCreateWithoutSnapshotInput[]
    connectOrCreate?: VersionCreateOrConnectWithoutSnapshotInput | VersionCreateOrConnectWithoutSnapshotInput[]
    upsert?: VersionUpsertWithWhereUniqueWithoutSnapshotInput | VersionUpsertWithWhereUniqueWithoutSnapshotInput[]
    createMany?: VersionCreateManySnapshotInputEnvelope
    set?: VersionWhereUniqueInput | VersionWhereUniqueInput[]
    disconnect?: VersionWhereUniqueInput | VersionWhereUniqueInput[]
    delete?: VersionWhereUniqueInput | VersionWhereUniqueInput[]
    connect?: VersionWhereUniqueInput | VersionWhereUniqueInput[]
    update?: VersionUpdateWithWhereUniqueWithoutSnapshotInput | VersionUpdateWithWhereUniqueWithoutSnapshotInput[]
    updateMany?: VersionUpdateManyWithWhereWithoutSnapshotInput | VersionUpdateManyWithWhereWithoutSnapshotInput[]
    deleteMany?: VersionScalarWhereInput | VersionScalarWhereInput[]
  }

  export type DocumentCreateNestedOneWithoutVersionsInput = {
    create?: XOR<DocumentCreateWithoutVersionsInput, DocumentUncheckedCreateWithoutVersionsInput>
    connectOrCreate?: DocumentCreateOrConnectWithoutVersionsInput
    connect?: DocumentWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutVersionsInput = {
    create?: XOR<UserCreateWithoutVersionsInput, UserUncheckedCreateWithoutVersionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutVersionsInput
    connect?: UserWhereUniqueInput
  }

  export type SnapshotCreateNestedOneWithoutVersionsInput = {
    create?: XOR<SnapshotCreateWithoutVersionsInput, SnapshotUncheckedCreateWithoutVersionsInput>
    connectOrCreate?: SnapshotCreateOrConnectWithoutVersionsInput
    connect?: SnapshotWhereUniqueInput
  }

  export type DocumentUpdateOneRequiredWithoutVersionsNestedInput = {
    create?: XOR<DocumentCreateWithoutVersionsInput, DocumentUncheckedCreateWithoutVersionsInput>
    connectOrCreate?: DocumentCreateOrConnectWithoutVersionsInput
    upsert?: DocumentUpsertWithoutVersionsInput
    connect?: DocumentWhereUniqueInput
    update?: XOR<XOR<DocumentUpdateToOneWithWhereWithoutVersionsInput, DocumentUpdateWithoutVersionsInput>, DocumentUncheckedUpdateWithoutVersionsInput>
  }

  export type UserUpdateOneRequiredWithoutVersionsNestedInput = {
    create?: XOR<UserCreateWithoutVersionsInput, UserUncheckedCreateWithoutVersionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutVersionsInput
    upsert?: UserUpsertWithoutVersionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutVersionsInput, UserUpdateWithoutVersionsInput>, UserUncheckedUpdateWithoutVersionsInput>
  }

  export type SnapshotUpdateOneRequiredWithoutVersionsNestedInput = {
    create?: XOR<SnapshotCreateWithoutVersionsInput, SnapshotUncheckedCreateWithoutVersionsInput>
    connectOrCreate?: SnapshotCreateOrConnectWithoutVersionsInput
    upsert?: SnapshotUpsertWithoutVersionsInput
    connect?: SnapshotWhereUniqueInput
    update?: XOR<XOR<SnapshotUpdateToOneWithWhereWithoutVersionsInput, SnapshotUpdateWithoutVersionsInput>, SnapshotUncheckedUpdateWithoutVersionsInput>
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
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type DocumentMemberCreateWithoutUserInput = {
    id?: string
    role: $Enums.Role
    document: DocumentCreateNestedOneWithoutMembersInput
  }

  export type DocumentMemberUncheckedCreateWithoutUserInput = {
    id?: string
    documentId: string
    role: $Enums.Role
  }

  export type DocumentMemberCreateOrConnectWithoutUserInput = {
    where: DocumentMemberWhereUniqueInput
    create: XOR<DocumentMemberCreateWithoutUserInput, DocumentMemberUncheckedCreateWithoutUserInput>
  }

  export type DocumentMemberCreateManyUserInputEnvelope = {
    data: DocumentMemberCreateManyUserInput | DocumentMemberCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type OperationCreateWithoutUserInput = {
    id?: string
    type: string
    payload: JsonNullValueInput | InputJsonValue
    clientId: string
    sequence: number
    serverVersion: number
    createdAt?: Date | string
    document: DocumentCreateNestedOneWithoutOperationsInput
  }

  export type OperationUncheckedCreateWithoutUserInput = {
    id?: string
    documentId: string
    type: string
    payload: JsonNullValueInput | InputJsonValue
    clientId: string
    sequence: number
    serverVersion: number
    createdAt?: Date | string
  }

  export type OperationCreateOrConnectWithoutUserInput = {
    where: OperationWhereUniqueInput
    create: XOR<OperationCreateWithoutUserInput, OperationUncheckedCreateWithoutUserInput>
  }

  export type OperationCreateManyUserInputEnvelope = {
    data: OperationCreateManyUserInput | OperationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type VersionCreateWithoutUserInput = {
    id?: string
    name?: string | null
    createdAt?: Date | string
    document: DocumentCreateNestedOneWithoutVersionsInput
    snapshot: SnapshotCreateNestedOneWithoutVersionsInput
  }

  export type VersionUncheckedCreateWithoutUserInput = {
    id?: string
    documentId: string
    name?: string | null
    snapshotId: string
    createdAt?: Date | string
  }

  export type VersionCreateOrConnectWithoutUserInput = {
    where: VersionWhereUniqueInput
    create: XOR<VersionCreateWithoutUserInput, VersionUncheckedCreateWithoutUserInput>
  }

  export type VersionCreateManyUserInputEnvelope = {
    data: VersionCreateManyUserInput | VersionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type DocumentCreateWithoutOwnerInput = {
    id?: string
    title: string
    content?: JsonNullValueInput | InputJsonValue
    serverVersion?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: DocumentMemberCreateNestedManyWithoutDocumentInput
    operations?: OperationCreateNestedManyWithoutDocumentInput
    snapshots?: SnapshotCreateNestedManyWithoutDocumentInput
    versions?: VersionCreateNestedManyWithoutDocumentInput
  }

  export type DocumentUncheckedCreateWithoutOwnerInput = {
    id?: string
    title: string
    content?: JsonNullValueInput | InputJsonValue
    serverVersion?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: DocumentMemberUncheckedCreateNestedManyWithoutDocumentInput
    operations?: OperationUncheckedCreateNestedManyWithoutDocumentInput
    snapshots?: SnapshotUncheckedCreateNestedManyWithoutDocumentInput
    versions?: VersionUncheckedCreateNestedManyWithoutDocumentInput
  }

  export type DocumentCreateOrConnectWithoutOwnerInput = {
    where: DocumentWhereUniqueInput
    create: XOR<DocumentCreateWithoutOwnerInput, DocumentUncheckedCreateWithoutOwnerInput>
  }

  export type DocumentCreateManyOwnerInputEnvelope = {
    data: DocumentCreateManyOwnerInput | DocumentCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type DocumentMemberUpsertWithWhereUniqueWithoutUserInput = {
    where: DocumentMemberWhereUniqueInput
    update: XOR<DocumentMemberUpdateWithoutUserInput, DocumentMemberUncheckedUpdateWithoutUserInput>
    create: XOR<DocumentMemberCreateWithoutUserInput, DocumentMemberUncheckedCreateWithoutUserInput>
  }

  export type DocumentMemberUpdateWithWhereUniqueWithoutUserInput = {
    where: DocumentMemberWhereUniqueInput
    data: XOR<DocumentMemberUpdateWithoutUserInput, DocumentMemberUncheckedUpdateWithoutUserInput>
  }

  export type DocumentMemberUpdateManyWithWhereWithoutUserInput = {
    where: DocumentMemberScalarWhereInput
    data: XOR<DocumentMemberUpdateManyMutationInput, DocumentMemberUncheckedUpdateManyWithoutUserInput>
  }

  export type DocumentMemberScalarWhereInput = {
    AND?: DocumentMemberScalarWhereInput | DocumentMemberScalarWhereInput[]
    OR?: DocumentMemberScalarWhereInput[]
    NOT?: DocumentMemberScalarWhereInput | DocumentMemberScalarWhereInput[]
    id?: StringFilter<"DocumentMember"> | string
    documentId?: StringFilter<"DocumentMember"> | string
    userId?: StringFilter<"DocumentMember"> | string
    role?: EnumRoleFilter<"DocumentMember"> | $Enums.Role
  }

  export type OperationUpsertWithWhereUniqueWithoutUserInput = {
    where: OperationWhereUniqueInput
    update: XOR<OperationUpdateWithoutUserInput, OperationUncheckedUpdateWithoutUserInput>
    create: XOR<OperationCreateWithoutUserInput, OperationUncheckedCreateWithoutUserInput>
  }

  export type OperationUpdateWithWhereUniqueWithoutUserInput = {
    where: OperationWhereUniqueInput
    data: XOR<OperationUpdateWithoutUserInput, OperationUncheckedUpdateWithoutUserInput>
  }

  export type OperationUpdateManyWithWhereWithoutUserInput = {
    where: OperationScalarWhereInput
    data: XOR<OperationUpdateManyMutationInput, OperationUncheckedUpdateManyWithoutUserInput>
  }

  export type OperationScalarWhereInput = {
    AND?: OperationScalarWhereInput | OperationScalarWhereInput[]
    OR?: OperationScalarWhereInput[]
    NOT?: OperationScalarWhereInput | OperationScalarWhereInput[]
    id?: StringFilter<"Operation"> | string
    documentId?: StringFilter<"Operation"> | string
    userId?: StringFilter<"Operation"> | string
    type?: StringFilter<"Operation"> | string
    payload?: JsonFilter<"Operation">
    clientId?: StringFilter<"Operation"> | string
    sequence?: IntFilter<"Operation"> | number
    serverVersion?: IntFilter<"Operation"> | number
    createdAt?: DateTimeFilter<"Operation"> | Date | string
  }

  export type VersionUpsertWithWhereUniqueWithoutUserInput = {
    where: VersionWhereUniqueInput
    update: XOR<VersionUpdateWithoutUserInput, VersionUncheckedUpdateWithoutUserInput>
    create: XOR<VersionCreateWithoutUserInput, VersionUncheckedCreateWithoutUserInput>
  }

  export type VersionUpdateWithWhereUniqueWithoutUserInput = {
    where: VersionWhereUniqueInput
    data: XOR<VersionUpdateWithoutUserInput, VersionUncheckedUpdateWithoutUserInput>
  }

  export type VersionUpdateManyWithWhereWithoutUserInput = {
    where: VersionScalarWhereInput
    data: XOR<VersionUpdateManyMutationInput, VersionUncheckedUpdateManyWithoutUserInput>
  }

  export type VersionScalarWhereInput = {
    AND?: VersionScalarWhereInput | VersionScalarWhereInput[]
    OR?: VersionScalarWhereInput[]
    NOT?: VersionScalarWhereInput | VersionScalarWhereInput[]
    id?: StringFilter<"Version"> | string
    documentId?: StringFilter<"Version"> | string
    userId?: StringFilter<"Version"> | string
    name?: StringNullableFilter<"Version"> | string | null
    snapshotId?: StringFilter<"Version"> | string
    createdAt?: DateTimeFilter<"Version"> | Date | string
  }

  export type DocumentUpsertWithWhereUniqueWithoutOwnerInput = {
    where: DocumentWhereUniqueInput
    update: XOR<DocumentUpdateWithoutOwnerInput, DocumentUncheckedUpdateWithoutOwnerInput>
    create: XOR<DocumentCreateWithoutOwnerInput, DocumentUncheckedCreateWithoutOwnerInput>
  }

  export type DocumentUpdateWithWhereUniqueWithoutOwnerInput = {
    where: DocumentWhereUniqueInput
    data: XOR<DocumentUpdateWithoutOwnerInput, DocumentUncheckedUpdateWithoutOwnerInput>
  }

  export type DocumentUpdateManyWithWhereWithoutOwnerInput = {
    where: DocumentScalarWhereInput
    data: XOR<DocumentUpdateManyMutationInput, DocumentUncheckedUpdateManyWithoutOwnerInput>
  }

  export type DocumentScalarWhereInput = {
    AND?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
    OR?: DocumentScalarWhereInput[]
    NOT?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
    id?: StringFilter<"Document"> | string
    title?: StringFilter<"Document"> | string
    content?: JsonFilter<"Document">
    serverVersion?: IntFilter<"Document"> | number
    ownerId?: StringFilter<"Document"> | string
    createdAt?: DateTimeFilter<"Document"> | Date | string
    updatedAt?: DateTimeFilter<"Document"> | Date | string
  }

  export type UserCreateWithoutDocumentsInput = {
    id?: string
    email: string
    name?: string | null
    password?: string | null
    createdAt?: Date | string
    documentsMember?: DocumentMemberCreateNestedManyWithoutUserInput
    operations?: OperationCreateNestedManyWithoutUserInput
    versions?: VersionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutDocumentsInput = {
    id?: string
    email: string
    name?: string | null
    password?: string | null
    createdAt?: Date | string
    documentsMember?: DocumentMemberUncheckedCreateNestedManyWithoutUserInput
    operations?: OperationUncheckedCreateNestedManyWithoutUserInput
    versions?: VersionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutDocumentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDocumentsInput, UserUncheckedCreateWithoutDocumentsInput>
  }

  export type DocumentMemberCreateWithoutDocumentInput = {
    id?: string
    role: $Enums.Role
    user: UserCreateNestedOneWithoutDocumentsMemberInput
  }

  export type DocumentMemberUncheckedCreateWithoutDocumentInput = {
    id?: string
    userId: string
    role: $Enums.Role
  }

  export type DocumentMemberCreateOrConnectWithoutDocumentInput = {
    where: DocumentMemberWhereUniqueInput
    create: XOR<DocumentMemberCreateWithoutDocumentInput, DocumentMemberUncheckedCreateWithoutDocumentInput>
  }

  export type DocumentMemberCreateManyDocumentInputEnvelope = {
    data: DocumentMemberCreateManyDocumentInput | DocumentMemberCreateManyDocumentInput[]
    skipDuplicates?: boolean
  }

  export type OperationCreateWithoutDocumentInput = {
    id?: string
    type: string
    payload: JsonNullValueInput | InputJsonValue
    clientId: string
    sequence: number
    serverVersion: number
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutOperationsInput
  }

  export type OperationUncheckedCreateWithoutDocumentInput = {
    id?: string
    userId: string
    type: string
    payload: JsonNullValueInput | InputJsonValue
    clientId: string
    sequence: number
    serverVersion: number
    createdAt?: Date | string
  }

  export type OperationCreateOrConnectWithoutDocumentInput = {
    where: OperationWhereUniqueInput
    create: XOR<OperationCreateWithoutDocumentInput, OperationUncheckedCreateWithoutDocumentInput>
  }

  export type OperationCreateManyDocumentInputEnvelope = {
    data: OperationCreateManyDocumentInput | OperationCreateManyDocumentInput[]
    skipDuplicates?: boolean
  }

  export type SnapshotCreateWithoutDocumentInput = {
    id?: string
    state: JsonNullValueInput | InputJsonValue
    version: number
    createdAt?: Date | string
    versions?: VersionCreateNestedManyWithoutSnapshotInput
  }

  export type SnapshotUncheckedCreateWithoutDocumentInput = {
    id?: string
    state: JsonNullValueInput | InputJsonValue
    version: number
    createdAt?: Date | string
    versions?: VersionUncheckedCreateNestedManyWithoutSnapshotInput
  }

  export type SnapshotCreateOrConnectWithoutDocumentInput = {
    where: SnapshotWhereUniqueInput
    create: XOR<SnapshotCreateWithoutDocumentInput, SnapshotUncheckedCreateWithoutDocumentInput>
  }

  export type SnapshotCreateManyDocumentInputEnvelope = {
    data: SnapshotCreateManyDocumentInput | SnapshotCreateManyDocumentInput[]
    skipDuplicates?: boolean
  }

  export type VersionCreateWithoutDocumentInput = {
    id?: string
    name?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutVersionsInput
    snapshot: SnapshotCreateNestedOneWithoutVersionsInput
  }

  export type VersionUncheckedCreateWithoutDocumentInput = {
    id?: string
    userId: string
    name?: string | null
    snapshotId: string
    createdAt?: Date | string
  }

  export type VersionCreateOrConnectWithoutDocumentInput = {
    where: VersionWhereUniqueInput
    create: XOR<VersionCreateWithoutDocumentInput, VersionUncheckedCreateWithoutDocumentInput>
  }

  export type VersionCreateManyDocumentInputEnvelope = {
    data: VersionCreateManyDocumentInput | VersionCreateManyDocumentInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutDocumentsInput = {
    update: XOR<UserUpdateWithoutDocumentsInput, UserUncheckedUpdateWithoutDocumentsInput>
    create: XOR<UserCreateWithoutDocumentsInput, UserUncheckedCreateWithoutDocumentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDocumentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDocumentsInput, UserUncheckedUpdateWithoutDocumentsInput>
  }

  export type UserUpdateWithoutDocumentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documentsMember?: DocumentMemberUpdateManyWithoutUserNestedInput
    operations?: OperationUpdateManyWithoutUserNestedInput
    versions?: VersionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutDocumentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documentsMember?: DocumentMemberUncheckedUpdateManyWithoutUserNestedInput
    operations?: OperationUncheckedUpdateManyWithoutUserNestedInput
    versions?: VersionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type DocumentMemberUpsertWithWhereUniqueWithoutDocumentInput = {
    where: DocumentMemberWhereUniqueInput
    update: XOR<DocumentMemberUpdateWithoutDocumentInput, DocumentMemberUncheckedUpdateWithoutDocumentInput>
    create: XOR<DocumentMemberCreateWithoutDocumentInput, DocumentMemberUncheckedCreateWithoutDocumentInput>
  }

  export type DocumentMemberUpdateWithWhereUniqueWithoutDocumentInput = {
    where: DocumentMemberWhereUniqueInput
    data: XOR<DocumentMemberUpdateWithoutDocumentInput, DocumentMemberUncheckedUpdateWithoutDocumentInput>
  }

  export type DocumentMemberUpdateManyWithWhereWithoutDocumentInput = {
    where: DocumentMemberScalarWhereInput
    data: XOR<DocumentMemberUpdateManyMutationInput, DocumentMemberUncheckedUpdateManyWithoutDocumentInput>
  }

  export type OperationUpsertWithWhereUniqueWithoutDocumentInput = {
    where: OperationWhereUniqueInput
    update: XOR<OperationUpdateWithoutDocumentInput, OperationUncheckedUpdateWithoutDocumentInput>
    create: XOR<OperationCreateWithoutDocumentInput, OperationUncheckedCreateWithoutDocumentInput>
  }

  export type OperationUpdateWithWhereUniqueWithoutDocumentInput = {
    where: OperationWhereUniqueInput
    data: XOR<OperationUpdateWithoutDocumentInput, OperationUncheckedUpdateWithoutDocumentInput>
  }

  export type OperationUpdateManyWithWhereWithoutDocumentInput = {
    where: OperationScalarWhereInput
    data: XOR<OperationUpdateManyMutationInput, OperationUncheckedUpdateManyWithoutDocumentInput>
  }

  export type SnapshotUpsertWithWhereUniqueWithoutDocumentInput = {
    where: SnapshotWhereUniqueInput
    update: XOR<SnapshotUpdateWithoutDocumentInput, SnapshotUncheckedUpdateWithoutDocumentInput>
    create: XOR<SnapshotCreateWithoutDocumentInput, SnapshotUncheckedCreateWithoutDocumentInput>
  }

  export type SnapshotUpdateWithWhereUniqueWithoutDocumentInput = {
    where: SnapshotWhereUniqueInput
    data: XOR<SnapshotUpdateWithoutDocumentInput, SnapshotUncheckedUpdateWithoutDocumentInput>
  }

  export type SnapshotUpdateManyWithWhereWithoutDocumentInput = {
    where: SnapshotScalarWhereInput
    data: XOR<SnapshotUpdateManyMutationInput, SnapshotUncheckedUpdateManyWithoutDocumentInput>
  }

  export type SnapshotScalarWhereInput = {
    AND?: SnapshotScalarWhereInput | SnapshotScalarWhereInput[]
    OR?: SnapshotScalarWhereInput[]
    NOT?: SnapshotScalarWhereInput | SnapshotScalarWhereInput[]
    id?: StringFilter<"Snapshot"> | string
    documentId?: StringFilter<"Snapshot"> | string
    state?: JsonFilter<"Snapshot">
    version?: IntFilter<"Snapshot"> | number
    createdAt?: DateTimeFilter<"Snapshot"> | Date | string
  }

  export type VersionUpsertWithWhereUniqueWithoutDocumentInput = {
    where: VersionWhereUniqueInput
    update: XOR<VersionUpdateWithoutDocumentInput, VersionUncheckedUpdateWithoutDocumentInput>
    create: XOR<VersionCreateWithoutDocumentInput, VersionUncheckedCreateWithoutDocumentInput>
  }

  export type VersionUpdateWithWhereUniqueWithoutDocumentInput = {
    where: VersionWhereUniqueInput
    data: XOR<VersionUpdateWithoutDocumentInput, VersionUncheckedUpdateWithoutDocumentInput>
  }

  export type VersionUpdateManyWithWhereWithoutDocumentInput = {
    where: VersionScalarWhereInput
    data: XOR<VersionUpdateManyMutationInput, VersionUncheckedUpdateManyWithoutDocumentInput>
  }

  export type DocumentCreateWithoutMembersInput = {
    id?: string
    title: string
    content?: JsonNullValueInput | InputJsonValue
    serverVersion?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutDocumentsInput
    operations?: OperationCreateNestedManyWithoutDocumentInput
    snapshots?: SnapshotCreateNestedManyWithoutDocumentInput
    versions?: VersionCreateNestedManyWithoutDocumentInput
  }

  export type DocumentUncheckedCreateWithoutMembersInput = {
    id?: string
    title: string
    content?: JsonNullValueInput | InputJsonValue
    serverVersion?: number
    ownerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    operations?: OperationUncheckedCreateNestedManyWithoutDocumentInput
    snapshots?: SnapshotUncheckedCreateNestedManyWithoutDocumentInput
    versions?: VersionUncheckedCreateNestedManyWithoutDocumentInput
  }

  export type DocumentCreateOrConnectWithoutMembersInput = {
    where: DocumentWhereUniqueInput
    create: XOR<DocumentCreateWithoutMembersInput, DocumentUncheckedCreateWithoutMembersInput>
  }

  export type UserCreateWithoutDocumentsMemberInput = {
    id?: string
    email: string
    name?: string | null
    password?: string | null
    createdAt?: Date | string
    operations?: OperationCreateNestedManyWithoutUserInput
    versions?: VersionCreateNestedManyWithoutUserInput
    documents?: DocumentCreateNestedManyWithoutOwnerInput
  }

  export type UserUncheckedCreateWithoutDocumentsMemberInput = {
    id?: string
    email: string
    name?: string | null
    password?: string | null
    createdAt?: Date | string
    operations?: OperationUncheckedCreateNestedManyWithoutUserInput
    versions?: VersionUncheckedCreateNestedManyWithoutUserInput
    documents?: DocumentUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type UserCreateOrConnectWithoutDocumentsMemberInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDocumentsMemberInput, UserUncheckedCreateWithoutDocumentsMemberInput>
  }

  export type DocumentUpsertWithoutMembersInput = {
    update: XOR<DocumentUpdateWithoutMembersInput, DocumentUncheckedUpdateWithoutMembersInput>
    create: XOR<DocumentCreateWithoutMembersInput, DocumentUncheckedCreateWithoutMembersInput>
    where?: DocumentWhereInput
  }

  export type DocumentUpdateToOneWithWhereWithoutMembersInput = {
    where?: DocumentWhereInput
    data: XOR<DocumentUpdateWithoutMembersInput, DocumentUncheckedUpdateWithoutMembersInput>
  }

  export type DocumentUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    serverVersion?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutDocumentsNestedInput
    operations?: OperationUpdateManyWithoutDocumentNestedInput
    snapshots?: SnapshotUpdateManyWithoutDocumentNestedInput
    versions?: VersionUpdateManyWithoutDocumentNestedInput
  }

  export type DocumentUncheckedUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    serverVersion?: IntFieldUpdateOperationsInput | number
    ownerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    operations?: OperationUncheckedUpdateManyWithoutDocumentNestedInput
    snapshots?: SnapshotUncheckedUpdateManyWithoutDocumentNestedInput
    versions?: VersionUncheckedUpdateManyWithoutDocumentNestedInput
  }

  export type UserUpsertWithoutDocumentsMemberInput = {
    update: XOR<UserUpdateWithoutDocumentsMemberInput, UserUncheckedUpdateWithoutDocumentsMemberInput>
    create: XOR<UserCreateWithoutDocumentsMemberInput, UserUncheckedCreateWithoutDocumentsMemberInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDocumentsMemberInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDocumentsMemberInput, UserUncheckedUpdateWithoutDocumentsMemberInput>
  }

  export type UserUpdateWithoutDocumentsMemberInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    operations?: OperationUpdateManyWithoutUserNestedInput
    versions?: VersionUpdateManyWithoutUserNestedInput
    documents?: DocumentUpdateManyWithoutOwnerNestedInput
  }

  export type UserUncheckedUpdateWithoutDocumentsMemberInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    operations?: OperationUncheckedUpdateManyWithoutUserNestedInput
    versions?: VersionUncheckedUpdateManyWithoutUserNestedInput
    documents?: DocumentUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type DocumentCreateWithoutOperationsInput = {
    id?: string
    title: string
    content?: JsonNullValueInput | InputJsonValue
    serverVersion?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutDocumentsInput
    members?: DocumentMemberCreateNestedManyWithoutDocumentInput
    snapshots?: SnapshotCreateNestedManyWithoutDocumentInput
    versions?: VersionCreateNestedManyWithoutDocumentInput
  }

  export type DocumentUncheckedCreateWithoutOperationsInput = {
    id?: string
    title: string
    content?: JsonNullValueInput | InputJsonValue
    serverVersion?: number
    ownerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: DocumentMemberUncheckedCreateNestedManyWithoutDocumentInput
    snapshots?: SnapshotUncheckedCreateNestedManyWithoutDocumentInput
    versions?: VersionUncheckedCreateNestedManyWithoutDocumentInput
  }

  export type DocumentCreateOrConnectWithoutOperationsInput = {
    where: DocumentWhereUniqueInput
    create: XOR<DocumentCreateWithoutOperationsInput, DocumentUncheckedCreateWithoutOperationsInput>
  }

  export type UserCreateWithoutOperationsInput = {
    id?: string
    email: string
    name?: string | null
    password?: string | null
    createdAt?: Date | string
    documentsMember?: DocumentMemberCreateNestedManyWithoutUserInput
    versions?: VersionCreateNestedManyWithoutUserInput
    documents?: DocumentCreateNestedManyWithoutOwnerInput
  }

  export type UserUncheckedCreateWithoutOperationsInput = {
    id?: string
    email: string
    name?: string | null
    password?: string | null
    createdAt?: Date | string
    documentsMember?: DocumentMemberUncheckedCreateNestedManyWithoutUserInput
    versions?: VersionUncheckedCreateNestedManyWithoutUserInput
    documents?: DocumentUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type UserCreateOrConnectWithoutOperationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOperationsInput, UserUncheckedCreateWithoutOperationsInput>
  }

  export type DocumentUpsertWithoutOperationsInput = {
    update: XOR<DocumentUpdateWithoutOperationsInput, DocumentUncheckedUpdateWithoutOperationsInput>
    create: XOR<DocumentCreateWithoutOperationsInput, DocumentUncheckedCreateWithoutOperationsInput>
    where?: DocumentWhereInput
  }

  export type DocumentUpdateToOneWithWhereWithoutOperationsInput = {
    where?: DocumentWhereInput
    data: XOR<DocumentUpdateWithoutOperationsInput, DocumentUncheckedUpdateWithoutOperationsInput>
  }

  export type DocumentUpdateWithoutOperationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    serverVersion?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutDocumentsNestedInput
    members?: DocumentMemberUpdateManyWithoutDocumentNestedInput
    snapshots?: SnapshotUpdateManyWithoutDocumentNestedInput
    versions?: VersionUpdateManyWithoutDocumentNestedInput
  }

  export type DocumentUncheckedUpdateWithoutOperationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    serverVersion?: IntFieldUpdateOperationsInput | number
    ownerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: DocumentMemberUncheckedUpdateManyWithoutDocumentNestedInput
    snapshots?: SnapshotUncheckedUpdateManyWithoutDocumentNestedInput
    versions?: VersionUncheckedUpdateManyWithoutDocumentNestedInput
  }

  export type UserUpsertWithoutOperationsInput = {
    update: XOR<UserUpdateWithoutOperationsInput, UserUncheckedUpdateWithoutOperationsInput>
    create: XOR<UserCreateWithoutOperationsInput, UserUncheckedCreateWithoutOperationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOperationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOperationsInput, UserUncheckedUpdateWithoutOperationsInput>
  }

  export type UserUpdateWithoutOperationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documentsMember?: DocumentMemberUpdateManyWithoutUserNestedInput
    versions?: VersionUpdateManyWithoutUserNestedInput
    documents?: DocumentUpdateManyWithoutOwnerNestedInput
  }

  export type UserUncheckedUpdateWithoutOperationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documentsMember?: DocumentMemberUncheckedUpdateManyWithoutUserNestedInput
    versions?: VersionUncheckedUpdateManyWithoutUserNestedInput
    documents?: DocumentUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type DocumentCreateWithoutSnapshotsInput = {
    id?: string
    title: string
    content?: JsonNullValueInput | InputJsonValue
    serverVersion?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutDocumentsInput
    members?: DocumentMemberCreateNestedManyWithoutDocumentInput
    operations?: OperationCreateNestedManyWithoutDocumentInput
    versions?: VersionCreateNestedManyWithoutDocumentInput
  }

  export type DocumentUncheckedCreateWithoutSnapshotsInput = {
    id?: string
    title: string
    content?: JsonNullValueInput | InputJsonValue
    serverVersion?: number
    ownerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: DocumentMemberUncheckedCreateNestedManyWithoutDocumentInput
    operations?: OperationUncheckedCreateNestedManyWithoutDocumentInput
    versions?: VersionUncheckedCreateNestedManyWithoutDocumentInput
  }

  export type DocumentCreateOrConnectWithoutSnapshotsInput = {
    where: DocumentWhereUniqueInput
    create: XOR<DocumentCreateWithoutSnapshotsInput, DocumentUncheckedCreateWithoutSnapshotsInput>
  }

  export type VersionCreateWithoutSnapshotInput = {
    id?: string
    name?: string | null
    createdAt?: Date | string
    document: DocumentCreateNestedOneWithoutVersionsInput
    user: UserCreateNestedOneWithoutVersionsInput
  }

  export type VersionUncheckedCreateWithoutSnapshotInput = {
    id?: string
    documentId: string
    userId: string
    name?: string | null
    createdAt?: Date | string
  }

  export type VersionCreateOrConnectWithoutSnapshotInput = {
    where: VersionWhereUniqueInput
    create: XOR<VersionCreateWithoutSnapshotInput, VersionUncheckedCreateWithoutSnapshotInput>
  }

  export type VersionCreateManySnapshotInputEnvelope = {
    data: VersionCreateManySnapshotInput | VersionCreateManySnapshotInput[]
    skipDuplicates?: boolean
  }

  export type DocumentUpsertWithoutSnapshotsInput = {
    update: XOR<DocumentUpdateWithoutSnapshotsInput, DocumentUncheckedUpdateWithoutSnapshotsInput>
    create: XOR<DocumentCreateWithoutSnapshotsInput, DocumentUncheckedCreateWithoutSnapshotsInput>
    where?: DocumentWhereInput
  }

  export type DocumentUpdateToOneWithWhereWithoutSnapshotsInput = {
    where?: DocumentWhereInput
    data: XOR<DocumentUpdateWithoutSnapshotsInput, DocumentUncheckedUpdateWithoutSnapshotsInput>
  }

  export type DocumentUpdateWithoutSnapshotsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    serverVersion?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutDocumentsNestedInput
    members?: DocumentMemberUpdateManyWithoutDocumentNestedInput
    operations?: OperationUpdateManyWithoutDocumentNestedInput
    versions?: VersionUpdateManyWithoutDocumentNestedInput
  }

  export type DocumentUncheckedUpdateWithoutSnapshotsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    serverVersion?: IntFieldUpdateOperationsInput | number
    ownerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: DocumentMemberUncheckedUpdateManyWithoutDocumentNestedInput
    operations?: OperationUncheckedUpdateManyWithoutDocumentNestedInput
    versions?: VersionUncheckedUpdateManyWithoutDocumentNestedInput
  }

  export type VersionUpsertWithWhereUniqueWithoutSnapshotInput = {
    where: VersionWhereUniqueInput
    update: XOR<VersionUpdateWithoutSnapshotInput, VersionUncheckedUpdateWithoutSnapshotInput>
    create: XOR<VersionCreateWithoutSnapshotInput, VersionUncheckedCreateWithoutSnapshotInput>
  }

  export type VersionUpdateWithWhereUniqueWithoutSnapshotInput = {
    where: VersionWhereUniqueInput
    data: XOR<VersionUpdateWithoutSnapshotInput, VersionUncheckedUpdateWithoutSnapshotInput>
  }

  export type VersionUpdateManyWithWhereWithoutSnapshotInput = {
    where: VersionScalarWhereInput
    data: XOR<VersionUpdateManyMutationInput, VersionUncheckedUpdateManyWithoutSnapshotInput>
  }

  export type DocumentCreateWithoutVersionsInput = {
    id?: string
    title: string
    content?: JsonNullValueInput | InputJsonValue
    serverVersion?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutDocumentsInput
    members?: DocumentMemberCreateNestedManyWithoutDocumentInput
    operations?: OperationCreateNestedManyWithoutDocumentInput
    snapshots?: SnapshotCreateNestedManyWithoutDocumentInput
  }

  export type DocumentUncheckedCreateWithoutVersionsInput = {
    id?: string
    title: string
    content?: JsonNullValueInput | InputJsonValue
    serverVersion?: number
    ownerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: DocumentMemberUncheckedCreateNestedManyWithoutDocumentInput
    operations?: OperationUncheckedCreateNestedManyWithoutDocumentInput
    snapshots?: SnapshotUncheckedCreateNestedManyWithoutDocumentInput
  }

  export type DocumentCreateOrConnectWithoutVersionsInput = {
    where: DocumentWhereUniqueInput
    create: XOR<DocumentCreateWithoutVersionsInput, DocumentUncheckedCreateWithoutVersionsInput>
  }

  export type UserCreateWithoutVersionsInput = {
    id?: string
    email: string
    name?: string | null
    password?: string | null
    createdAt?: Date | string
    documentsMember?: DocumentMemberCreateNestedManyWithoutUserInput
    operations?: OperationCreateNestedManyWithoutUserInput
    documents?: DocumentCreateNestedManyWithoutOwnerInput
  }

  export type UserUncheckedCreateWithoutVersionsInput = {
    id?: string
    email: string
    name?: string | null
    password?: string | null
    createdAt?: Date | string
    documentsMember?: DocumentMemberUncheckedCreateNestedManyWithoutUserInput
    operations?: OperationUncheckedCreateNestedManyWithoutUserInput
    documents?: DocumentUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type UserCreateOrConnectWithoutVersionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutVersionsInput, UserUncheckedCreateWithoutVersionsInput>
  }

  export type SnapshotCreateWithoutVersionsInput = {
    id?: string
    state: JsonNullValueInput | InputJsonValue
    version: number
    createdAt?: Date | string
    document: DocumentCreateNestedOneWithoutSnapshotsInput
  }

  export type SnapshotUncheckedCreateWithoutVersionsInput = {
    id?: string
    documentId: string
    state: JsonNullValueInput | InputJsonValue
    version: number
    createdAt?: Date | string
  }

  export type SnapshotCreateOrConnectWithoutVersionsInput = {
    where: SnapshotWhereUniqueInput
    create: XOR<SnapshotCreateWithoutVersionsInput, SnapshotUncheckedCreateWithoutVersionsInput>
  }

  export type DocumentUpsertWithoutVersionsInput = {
    update: XOR<DocumentUpdateWithoutVersionsInput, DocumentUncheckedUpdateWithoutVersionsInput>
    create: XOR<DocumentCreateWithoutVersionsInput, DocumentUncheckedCreateWithoutVersionsInput>
    where?: DocumentWhereInput
  }

  export type DocumentUpdateToOneWithWhereWithoutVersionsInput = {
    where?: DocumentWhereInput
    data: XOR<DocumentUpdateWithoutVersionsInput, DocumentUncheckedUpdateWithoutVersionsInput>
  }

  export type DocumentUpdateWithoutVersionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    serverVersion?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutDocumentsNestedInput
    members?: DocumentMemberUpdateManyWithoutDocumentNestedInput
    operations?: OperationUpdateManyWithoutDocumentNestedInput
    snapshots?: SnapshotUpdateManyWithoutDocumentNestedInput
  }

  export type DocumentUncheckedUpdateWithoutVersionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    serverVersion?: IntFieldUpdateOperationsInput | number
    ownerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: DocumentMemberUncheckedUpdateManyWithoutDocumentNestedInput
    operations?: OperationUncheckedUpdateManyWithoutDocumentNestedInput
    snapshots?: SnapshotUncheckedUpdateManyWithoutDocumentNestedInput
  }

  export type UserUpsertWithoutVersionsInput = {
    update: XOR<UserUpdateWithoutVersionsInput, UserUncheckedUpdateWithoutVersionsInput>
    create: XOR<UserCreateWithoutVersionsInput, UserUncheckedCreateWithoutVersionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutVersionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutVersionsInput, UserUncheckedUpdateWithoutVersionsInput>
  }

  export type UserUpdateWithoutVersionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documentsMember?: DocumentMemberUpdateManyWithoutUserNestedInput
    operations?: OperationUpdateManyWithoutUserNestedInput
    documents?: DocumentUpdateManyWithoutOwnerNestedInput
  }

  export type UserUncheckedUpdateWithoutVersionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documentsMember?: DocumentMemberUncheckedUpdateManyWithoutUserNestedInput
    operations?: OperationUncheckedUpdateManyWithoutUserNestedInput
    documents?: DocumentUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type SnapshotUpsertWithoutVersionsInput = {
    update: XOR<SnapshotUpdateWithoutVersionsInput, SnapshotUncheckedUpdateWithoutVersionsInput>
    create: XOR<SnapshotCreateWithoutVersionsInput, SnapshotUncheckedCreateWithoutVersionsInput>
    where?: SnapshotWhereInput
  }

  export type SnapshotUpdateToOneWithWhereWithoutVersionsInput = {
    where?: SnapshotWhereInput
    data: XOR<SnapshotUpdateWithoutVersionsInput, SnapshotUncheckedUpdateWithoutVersionsInput>
  }

  export type SnapshotUpdateWithoutVersionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    state?: JsonNullValueInput | InputJsonValue
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    document?: DocumentUpdateOneRequiredWithoutSnapshotsNestedInput
  }

  export type SnapshotUncheckedUpdateWithoutVersionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    documentId?: StringFieldUpdateOperationsInput | string
    state?: JsonNullValueInput | InputJsonValue
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentMemberCreateManyUserInput = {
    id?: string
    documentId: string
    role: $Enums.Role
  }

  export type OperationCreateManyUserInput = {
    id?: string
    documentId: string
    type: string
    payload: JsonNullValueInput | InputJsonValue
    clientId: string
    sequence: number
    serverVersion: number
    createdAt?: Date | string
  }

  export type VersionCreateManyUserInput = {
    id?: string
    documentId: string
    name?: string | null
    snapshotId: string
    createdAt?: Date | string
  }

  export type DocumentCreateManyOwnerInput = {
    id?: string
    title: string
    content?: JsonNullValueInput | InputJsonValue
    serverVersion?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DocumentMemberUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    document?: DocumentUpdateOneRequiredWithoutMembersNestedInput
  }

  export type DocumentMemberUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    documentId?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type DocumentMemberUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    documentId?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type OperationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    payload?: JsonNullValueInput | InputJsonValue
    clientId?: StringFieldUpdateOperationsInput | string
    sequence?: IntFieldUpdateOperationsInput | number
    serverVersion?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    document?: DocumentUpdateOneRequiredWithoutOperationsNestedInput
  }

  export type OperationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    documentId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    payload?: JsonNullValueInput | InputJsonValue
    clientId?: StringFieldUpdateOperationsInput | string
    sequence?: IntFieldUpdateOperationsInput | number
    serverVersion?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OperationUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    documentId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    payload?: JsonNullValueInput | InputJsonValue
    clientId?: StringFieldUpdateOperationsInput | string
    sequence?: IntFieldUpdateOperationsInput | number
    serverVersion?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VersionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    document?: DocumentUpdateOneRequiredWithoutVersionsNestedInput
    snapshot?: SnapshotUpdateOneRequiredWithoutVersionsNestedInput
  }

  export type VersionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    documentId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    snapshotId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VersionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    documentId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    snapshotId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    serverVersion?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: DocumentMemberUpdateManyWithoutDocumentNestedInput
    operations?: OperationUpdateManyWithoutDocumentNestedInput
    snapshots?: SnapshotUpdateManyWithoutDocumentNestedInput
    versions?: VersionUpdateManyWithoutDocumentNestedInput
  }

  export type DocumentUncheckedUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    serverVersion?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: DocumentMemberUncheckedUpdateManyWithoutDocumentNestedInput
    operations?: OperationUncheckedUpdateManyWithoutDocumentNestedInput
    snapshots?: SnapshotUncheckedUpdateManyWithoutDocumentNestedInput
    versions?: VersionUncheckedUpdateManyWithoutDocumentNestedInput
  }

  export type DocumentUncheckedUpdateManyWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    serverVersion?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentMemberCreateManyDocumentInput = {
    id?: string
    userId: string
    role: $Enums.Role
  }

  export type OperationCreateManyDocumentInput = {
    id?: string
    userId: string
    type: string
    payload: JsonNullValueInput | InputJsonValue
    clientId: string
    sequence: number
    serverVersion: number
    createdAt?: Date | string
  }

  export type SnapshotCreateManyDocumentInput = {
    id?: string
    state: JsonNullValueInput | InputJsonValue
    version: number
    createdAt?: Date | string
  }

  export type VersionCreateManyDocumentInput = {
    id?: string
    userId: string
    name?: string | null
    snapshotId: string
    createdAt?: Date | string
  }

  export type DocumentMemberUpdateWithoutDocumentInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    user?: UserUpdateOneRequiredWithoutDocumentsMemberNestedInput
  }

  export type DocumentMemberUncheckedUpdateWithoutDocumentInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type DocumentMemberUncheckedUpdateManyWithoutDocumentInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type OperationUpdateWithoutDocumentInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    payload?: JsonNullValueInput | InputJsonValue
    clientId?: StringFieldUpdateOperationsInput | string
    sequence?: IntFieldUpdateOperationsInput | number
    serverVersion?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutOperationsNestedInput
  }

  export type OperationUncheckedUpdateWithoutDocumentInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    payload?: JsonNullValueInput | InputJsonValue
    clientId?: StringFieldUpdateOperationsInput | string
    sequence?: IntFieldUpdateOperationsInput | number
    serverVersion?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OperationUncheckedUpdateManyWithoutDocumentInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    payload?: JsonNullValueInput | InputJsonValue
    clientId?: StringFieldUpdateOperationsInput | string
    sequence?: IntFieldUpdateOperationsInput | number
    serverVersion?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SnapshotUpdateWithoutDocumentInput = {
    id?: StringFieldUpdateOperationsInput | string
    state?: JsonNullValueInput | InputJsonValue
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    versions?: VersionUpdateManyWithoutSnapshotNestedInput
  }

  export type SnapshotUncheckedUpdateWithoutDocumentInput = {
    id?: StringFieldUpdateOperationsInput | string
    state?: JsonNullValueInput | InputJsonValue
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    versions?: VersionUncheckedUpdateManyWithoutSnapshotNestedInput
  }

  export type SnapshotUncheckedUpdateManyWithoutDocumentInput = {
    id?: StringFieldUpdateOperationsInput | string
    state?: JsonNullValueInput | InputJsonValue
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VersionUpdateWithoutDocumentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutVersionsNestedInput
    snapshot?: SnapshotUpdateOneRequiredWithoutVersionsNestedInput
  }

  export type VersionUncheckedUpdateWithoutDocumentInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    snapshotId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VersionUncheckedUpdateManyWithoutDocumentInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    snapshotId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VersionCreateManySnapshotInput = {
    id?: string
    documentId: string
    userId: string
    name?: string | null
    createdAt?: Date | string
  }

  export type VersionUpdateWithoutSnapshotInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    document?: DocumentUpdateOneRequiredWithoutVersionsNestedInput
    user?: UserUpdateOneRequiredWithoutVersionsNestedInput
  }

  export type VersionUncheckedUpdateWithoutSnapshotInput = {
    id?: StringFieldUpdateOperationsInput | string
    documentId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VersionUncheckedUpdateManyWithoutSnapshotInput = {
    id?: StringFieldUpdateOperationsInput | string
    documentId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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