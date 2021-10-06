import { gql } from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date string, such as 2007-12-03 (YYYY-MM-DD), compliant with ISO 8601 standard for representation of dates using the Gregorian calendar. */
  Date: any;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the date-timeformat outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representationof dates and times using the Gregorian calendar. */
  DateTime: any;
  Hex: any;
  /** Raw JSON value */
  Json: any;
  /** The Long scalar type represents non-fractional signed whole numeric values. Long can represent values between -(2^63) and 2^63 - 1. */
  Long: any;
  RGBAHue: any;
  RGBATransparency: any;
  /** Slate-compatible RichText AST */
  RichTextAST: any;
};

export type Aggregate = {
  __typename?: 'Aggregate';
  count: Scalars['Int'];
};

/** Asset system model */
export type Asset = Node & {
  __typename?: 'Asset';
  /** System stage field */
  stage: Stage;
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<Asset>;
  /** Get the document in other stages */
  documentInStages: Array<Asset>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** The file handle */
  handle: Scalars['String'];
  /** The file name */
  fileName: Scalars['String'];
  /** The height of the file */
  height?: Maybe<Scalars['Float']>;
  /** The file width */
  width?: Maybe<Scalars['Float']>;
  /** The file size */
  size?: Maybe<Scalars['Float']>;
  /** The mime type of the file */
  mimeType?: Maybe<Scalars['String']>;
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  /** List of Asset versions */
  history: Array<Version>;
  /** Get the url for the asset with provided transformations applied. */
  url: Scalars['String'];
};


/** Asset system model */
export type AssetLocalizationsArgs = {
  locales?: Array<Locale>;
  includeCurrent?: Scalars['Boolean'];
};


/** Asset system model */
export type AssetDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


/** Asset system model */
export type AssetCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetCreatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


/** Asset system model */
export type AssetUpdatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


/** Asset system model */
export type AssetPublishedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


/** Asset system model */
export type AssetHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};


/** Asset system model */
export type AssetUrlArgs = {
  transformation?: Maybe<AssetTransformationInput>;
};

export type AssetConnectInput = {
  /** Document to connect */
  where: AssetWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
};

/** A connection to a list of items. */
export type AssetConnection = {
  __typename?: 'AssetConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<AssetEdge>;
  aggregate: Aggregate;
};

export type AssetCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  handle: Scalars['String'];
  fileName: Scalars['String'];
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: Maybe<AssetCreateLocalizationsInput>;
};

export type AssetCreateLocalizationDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  handle: Scalars['String'];
  fileName: Scalars['String'];
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
};

export type AssetCreateLocalizationInput = {
  /** Localization input */
  data: AssetCreateLocalizationDataInput;
  locale: Locale;
};

export type AssetCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: Maybe<Array<AssetCreateLocalizationInput>>;
};

export type AssetCreateManyInlineInput = {
  /** Create and connect multiple existing Asset documents */
  create?: Maybe<Array<AssetCreateInput>>;
  /** Connect multiple existing Asset documents */
  connect?: Maybe<Array<AssetWhereUniqueInput>>;
};

export type AssetCreateOneInlineInput = {
  /** Create and connect one Asset document */
  create?: Maybe<AssetCreateInput>;
  /** Connect one existing Asset document */
  connect?: Maybe<AssetWhereUniqueInput>;
};

/** An edge in a connection. */
export type AssetEdge = {
  __typename?: 'AssetEdge';
  /** The item at the end of the edge. */
  node: Asset;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Identifies documents */
export type AssetManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<AssetWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedBy?: Maybe<UserWhereInput>;
};

export enum AssetOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  HandleAsc = 'handle_ASC',
  HandleDesc = 'handle_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  MimeTypeAsc = 'mimeType_ASC',
  MimeTypeDesc = 'mimeType_DESC'
}

/** Transformations for Assets */
export type AssetTransformationInput = {
  image?: Maybe<ImageTransformationInput>;
  document?: Maybe<DocumentTransformationInput>;
  /** Pass true if you want to validate the passed transformation parameters */
  validateOptions?: Maybe<Scalars['Boolean']>;
};

export type AssetUpdateInput = {
  handle?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
  /** Manage document localizations */
  localizations?: Maybe<AssetUpdateLocalizationsInput>;
};

export type AssetUpdateLocalizationDataInput = {
  handle?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
};

export type AssetUpdateLocalizationInput = {
  data: AssetUpdateLocalizationDataInput;
  locale: Locale;
};

export type AssetUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: Maybe<Array<AssetCreateLocalizationInput>>;
  /** Localizations to update */
  update?: Maybe<Array<AssetUpdateLocalizationInput>>;
  upsert?: Maybe<Array<AssetUpsertLocalizationInput>>;
  /** Localizations to delete */
  delete?: Maybe<Array<Locale>>;
};

export type AssetUpdateManyInlineInput = {
  /** Create and connect multiple Asset documents */
  create?: Maybe<Array<AssetCreateInput>>;
  /** Connect multiple existing Asset documents */
  connect?: Maybe<Array<AssetConnectInput>>;
  /** Override currently-connected documents with multiple existing Asset documents */
  set?: Maybe<Array<AssetWhereUniqueInput>>;
  /** Update multiple Asset documents */
  update?: Maybe<Array<AssetUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Asset documents */
  upsert?: Maybe<Array<AssetUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple Asset documents */
  disconnect?: Maybe<Array<AssetWhereUniqueInput>>;
  /** Delete multiple Asset documents */
  delete?: Maybe<Array<AssetWhereUniqueInput>>;
};

export type AssetUpdateManyInput = {
  fileName?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
  /** Optional updates to localizations */
  localizations?: Maybe<AssetUpdateManyLocalizationsInput>;
};

export type AssetUpdateManyLocalizationDataInput = {
  fileName?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
};

export type AssetUpdateManyLocalizationInput = {
  data: AssetUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type AssetUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: Maybe<Array<AssetUpdateManyLocalizationInput>>;
};

export type AssetUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: AssetWhereInput;
  /** Update many input */
  data: AssetUpdateManyInput;
};

export type AssetUpdateOneInlineInput = {
  /** Create and connect one Asset document */
  create?: Maybe<AssetCreateInput>;
  /** Update single Asset document */
  update?: Maybe<AssetUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Asset document */
  upsert?: Maybe<AssetUpsertWithNestedWhereUniqueInput>;
  /** Connect existing Asset document */
  connect?: Maybe<AssetWhereUniqueInput>;
  /** Disconnect currently connected Asset document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Delete currently connected Asset document */
  delete?: Maybe<Scalars['Boolean']>;
};

export type AssetUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: AssetWhereUniqueInput;
  /** Document to update */
  data: AssetUpdateInput;
};

export type AssetUpsertInput = {
  /** Create document if it didn't exist */
  create: AssetCreateInput;
  /** Update document if it exists */
  update: AssetUpdateInput;
};

export type AssetUpsertLocalizationInput = {
  update: AssetUpdateLocalizationDataInput;
  create: AssetCreateLocalizationDataInput;
  locale: Locale;
};

export type AssetUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: AssetWhereUniqueInput;
  /** Upsert data */
  data: AssetUpsertInput;
};

/** Identifies documents */
export type AssetWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<AssetWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  handle?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  handle_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  handle_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  handle_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  handle_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  handle_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  handle_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  handle_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  handle_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  handle_not_ends_with?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  fileName_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  fileName_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  fileName_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  fileName_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  fileName_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  fileName_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  fileName_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  fileName_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  fileName_not_ends_with?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  height_not?: Maybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  height_in?: Maybe<Array<Scalars['Float']>>;
  /** All values that are not contained in given list. */
  height_not_in?: Maybe<Array<Scalars['Float']>>;
  /** All values less than the given value. */
  height_lt?: Maybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  height_lte?: Maybe<Scalars['Float']>;
  /** All values greater than the given value. */
  height_gt?: Maybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  height_gte?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  width_not?: Maybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  width_in?: Maybe<Array<Scalars['Float']>>;
  /** All values that are not contained in given list. */
  width_not_in?: Maybe<Array<Scalars['Float']>>;
  /** All values less than the given value. */
  width_lt?: Maybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  width_lte?: Maybe<Scalars['Float']>;
  /** All values greater than the given value. */
  width_gt?: Maybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  width_gte?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  size_not?: Maybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  size_in?: Maybe<Array<Scalars['Float']>>;
  /** All values that are not contained in given list. */
  size_not_in?: Maybe<Array<Scalars['Float']>>;
  /** All values less than the given value. */
  size_lt?: Maybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  size_lte?: Maybe<Scalars['Float']>;
  /** All values greater than the given value. */
  size_gt?: Maybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  size_gte?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  mimeType_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  mimeType_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  mimeType_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  mimeType_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  mimeType_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  mimeType_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  mimeType_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  mimeType_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  mimeType_not_ends_with?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedBy?: Maybe<UserWhereInput>;
};

/** References Asset record uniquely */
export type AssetWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type BatchPayload = {
  __typename?: 'BatchPayload';
  /** The number of nodes that have been affected by the Batch operation. */
  count: Scalars['Long'];
};

/** Representing a color value comprising of HEX, RGBA and css color values */
export type Color = {
  __typename?: 'Color';
  hex: Scalars['Hex'];
  rgba: Rgba;
  css: Scalars['String'];
};

/** Accepts either HEX or RGBA color value. At least one of hex or rgba value should be passed. If both are passed RGBA is used. */
export type ColorInput = {
  hex?: Maybe<Scalars['Hex']>;
  rgba?: Maybe<RgbaInput>;
};

export type ConnectPositionInput = {
  /** Connect document after specified document */
  after?: Maybe<Scalars['ID']>;
  /** Connect document before specified document */
  before?: Maybe<Scalars['ID']>;
  /** Connect document at first position */
  start?: Maybe<Scalars['Boolean']>;
  /** Connect document at last position */
  end?: Maybe<Scalars['Boolean']>;
};

export type ContentPage = Node & {
  __typename?: 'ContentPage';
  /** System stage field */
  stage: Stage;
  /** Get the document in other stages */
  documentInStages: Array<ContentPage>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<RichText>;
  slug?: Maybe<Scalars['String']>;
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  sections: Array<Section>;
  /** List of ContentPage versions */
  history: Array<Version>;
};


export type ContentPageDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


export type ContentPageCreatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type ContentPageUpdatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type ContentPagePublishedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type ContentPageSectionsArgs = {
  where?: Maybe<SectionWhereInput>;
  orderBy?: Maybe<SectionOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
};


export type ContentPageHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};

export type ContentPageConnectInput = {
  /** Document to connect */
  where: ContentPageWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
};

/** A connection to a list of items. */
export type ContentPageConnection = {
  __typename?: 'ContentPageConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<ContentPageEdge>;
  aggregate: Aggregate;
};

export type ContentPageCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['RichTextAST']>;
  slug?: Maybe<Scalars['String']>;
  sections?: Maybe<SectionCreateManyInlineInput>;
};

export type ContentPageCreateManyInlineInput = {
  /** Create and connect multiple existing ContentPage documents */
  create?: Maybe<Array<ContentPageCreateInput>>;
  /** Connect multiple existing ContentPage documents */
  connect?: Maybe<Array<ContentPageWhereUniqueInput>>;
};

export type ContentPageCreateOneInlineInput = {
  /** Create and connect one ContentPage document */
  create?: Maybe<ContentPageCreateInput>;
  /** Connect one existing ContentPage document */
  connect?: Maybe<ContentPageWhereUniqueInput>;
};

/** An edge in a connection. */
export type ContentPageEdge = {
  __typename?: 'ContentPageEdge';
  /** The item at the end of the edge. */
  node: ContentPage;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Identifies documents */
export type ContentPageManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ContentPageWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ContentPageWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ContentPageWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  title_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  title_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  title_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  slug_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  slug_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  slug_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedBy?: Maybe<UserWhereInput>;
  sections_every?: Maybe<SectionWhereInput>;
  sections_some?: Maybe<SectionWhereInput>;
  sections_none?: Maybe<SectionWhereInput>;
};

export enum ContentPageOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC'
}

export type ContentPageUpdateInput = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['RichTextAST']>;
  slug?: Maybe<Scalars['String']>;
  sections?: Maybe<SectionUpdateManyInlineInput>;
};

export type ContentPageUpdateManyInlineInput = {
  /** Create and connect multiple ContentPage documents */
  create?: Maybe<Array<ContentPageCreateInput>>;
  /** Connect multiple existing ContentPage documents */
  connect?: Maybe<Array<ContentPageConnectInput>>;
  /** Override currently-connected documents with multiple existing ContentPage documents */
  set?: Maybe<Array<ContentPageWhereUniqueInput>>;
  /** Update multiple ContentPage documents */
  update?: Maybe<Array<ContentPageUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple ContentPage documents */
  upsert?: Maybe<Array<ContentPageUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple ContentPage documents */
  disconnect?: Maybe<Array<ContentPageWhereUniqueInput>>;
  /** Delete multiple ContentPage documents */
  delete?: Maybe<Array<ContentPageWhereUniqueInput>>;
};

export type ContentPageUpdateManyInput = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['RichTextAST']>;
  slug?: Maybe<Scalars['String']>;
};

export type ContentPageUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: ContentPageWhereInput;
  /** Update many input */
  data: ContentPageUpdateManyInput;
};

export type ContentPageUpdateOneInlineInput = {
  /** Create and connect one ContentPage document */
  create?: Maybe<ContentPageCreateInput>;
  /** Update single ContentPage document */
  update?: Maybe<ContentPageUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ContentPage document */
  upsert?: Maybe<ContentPageUpsertWithNestedWhereUniqueInput>;
  /** Connect existing ContentPage document */
  connect?: Maybe<ContentPageWhereUniqueInput>;
  /** Disconnect currently connected ContentPage document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Delete currently connected ContentPage document */
  delete?: Maybe<Scalars['Boolean']>;
};

export type ContentPageUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: ContentPageWhereUniqueInput;
  /** Document to update */
  data: ContentPageUpdateInput;
};

export type ContentPageUpsertInput = {
  /** Create document if it didn't exist */
  create: ContentPageCreateInput;
  /** Update document if it exists */
  update: ContentPageUpdateInput;
};

export type ContentPageUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: ContentPageWhereUniqueInput;
  /** Upsert data */
  data: ContentPageUpsertInput;
};

/** Identifies documents */
export type ContentPageWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ContentPageWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ContentPageWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ContentPageWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  title_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  title_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  title_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  slug_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  slug_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  slug_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedBy?: Maybe<UserWhereInput>;
  sections_every?: Maybe<SectionWhereInput>;
  sections_some?: Maybe<SectionWhereInput>;
  sections_none?: Maybe<SectionWhereInput>;
};

/** References ContentPage record uniquely */
export type ContentPageWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export enum DocumentFileTypes {
  Jpg = 'jpg',
  Odp = 'odp',
  Ods = 'ods',
  Odt = 'odt',
  Png = 'png',
  Svg = 'svg',
  Txt = 'txt',
  Webp = 'webp',
  Docx = 'docx',
  Pdf = 'pdf',
  Html = 'html',
  Doc = 'doc',
  Xlsx = 'xlsx',
  Xls = 'xls',
  Pptx = 'pptx',
  Ppt = 'ppt'
}

export type DocumentOutputInput = {
  /**
   * Transforms a document into a desired file type.
   * See this matrix for format support:
   *
   * PDF:	jpg, odp, ods, odt, png, svg, txt, and webp
   * DOC:	docx, html, jpg, odt, pdf, png, svg, txt, and webp
   * DOCX:	doc, html, jpg, odt, pdf, png, svg, txt, and webp
   * ODT:	doc, docx, html, jpg, pdf, png, svg, txt, and webp
   * XLS:	jpg, pdf, ods, png, svg, xlsx, and webp
   * XLSX:	jpg, pdf, ods, png, svg, xls, and webp
   * ODS:	jpg, pdf, png, xls, svg, xlsx, and webp
   * PPT:	jpg, odp, pdf, png, svg, pptx, and webp
   * PPTX:	jpg, odp, pdf, png, svg, ppt, and webp
   * ODP:	jpg, pdf, png, ppt, svg, pptx, and webp
   * BMP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * GIF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * JPG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * PNG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * WEBP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * TIFF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * AI:	    jpg, odp, ods, odt, pdf, png, svg, and webp
   * PSD:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * SVG:	jpg, odp, ods, odt, pdf, png, and webp
   * HTML:	jpg, odt, pdf, svg, txt, and webp
   * TXT:	jpg, html, odt, pdf, svg, and webp
   */
  format?: Maybe<DocumentFileTypes>;
};

/** Transformations for Documents */
export type DocumentTransformationInput = {
  /** Changes the output for the file. */
  output?: Maybe<DocumentOutputInput>;
};

export type DocumentVersion = {
  __typename?: 'DocumentVersion';
  id: Scalars['ID'];
  stage: Stage;
  revision: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  data?: Maybe<Scalars['Json']>;
};

export enum ImageFit {
  /** Resizes the image to fit within the specified parameters without distorting, cropping, or changing the aspect ratio. */
  Clip = 'clip',
  /** Resizes the image to fit the specified parameters exactly by removing any parts of the image that don't fit within the boundaries. */
  Crop = 'crop',
  /** Resizes the image to fit the specified parameters exactly by scaling the image to the desired size. The aspect ratio of the image is not respected and the image can be distorted using this method. */
  Scale = 'scale',
  /** Resizes the image to fit within the parameters, but as opposed to 'fit:clip' will not scale the image if the image is smaller than the output size. */
  Max = 'max'
}

export type ImageResizeInput = {
  /** The width in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  width?: Maybe<Scalars['Int']>;
  /** The height in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  height?: Maybe<Scalars['Int']>;
  /** The default value for the fit parameter is fit:clip. */
  fit?: Maybe<ImageFit>;
};

/** Transformations for Images */
export type ImageTransformationInput = {
  /** Resizes the image */
  resize?: Maybe<ImageResizeInput>;
};

/** Locale system enumeration */
export enum Locale {
  /** System locale */
  En = 'en'
}

/** Representing a geolocation point with latitude and longitude */
export type Location = {
  __typename?: 'Location';
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
  distance: Scalars['Float'];
};


/** Representing a geolocation point with latitude and longitude */
export type LocationDistanceArgs = {
  from: LocationInput;
};

/** Input for a geolocation point with latitude and longitude */
export type LocationInput = {
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
};

export type Mutation = {
  __typename?: 'Mutation';
  /**
   * Create one asset
   * @deprecated Asset mutations will be overhauled soon
   */
  createAsset?: Maybe<Asset>;
  /** Update one asset */
  updateAsset?: Maybe<Asset>;
  /** Delete one asset from _all_ existing stages. Returns deleted document. */
  deleteAsset?: Maybe<Asset>;
  /** Upsert one asset */
  upsertAsset?: Maybe<Asset>;
  /** Publish one asset */
  publishAsset?: Maybe<Asset>;
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishAsset?: Maybe<Asset>;
  /** Update many Asset documents */
  updateManyAssetsConnection: AssetConnection;
  /** Delete many Asset documents, return deleted documents */
  deleteManyAssetsConnection: AssetConnection;
  /** Publish many Asset documents */
  publishManyAssetsConnection: AssetConnection;
  /** Find many Asset documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyAssetsConnection: AssetConnection;
  /**
   * Update many assets
   * @deprecated Please use the new paginated many mutation (updateManyAssetsConnection)
   */
  updateManyAssets: BatchPayload;
  /**
   * Delete many Asset documents
   * @deprecated Please use the new paginated many mutation (deleteManyAssetsConnection)
   */
  deleteManyAssets: BatchPayload;
  /**
   * Publish many Asset documents
   * @deprecated Please use the new paginated many mutation (publishManyAssetsConnection)
   */
  publishManyAssets: BatchPayload;
  /**
   * Unpublish many Asset documents
   * @deprecated Please use the new paginated many mutation (unpublishManyAssetsConnection)
   */
  unpublishManyAssets: BatchPayload;
  /** Create one tag */
  createTag?: Maybe<Tag>;
  /** Update one tag */
  updateTag?: Maybe<Tag>;
  /** Delete one tag from _all_ existing stages. Returns deleted document. */
  deleteTag?: Maybe<Tag>;
  /** Upsert one tag */
  upsertTag?: Maybe<Tag>;
  /** Publish one tag */
  publishTag?: Maybe<Tag>;
  /** Unpublish one tag from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishTag?: Maybe<Tag>;
  /** Update many Tag documents */
  updateManyTagsConnection: TagConnection;
  /** Delete many Tag documents, return deleted documents */
  deleteManyTagsConnection: TagConnection;
  /** Publish many Tag documents */
  publishManyTagsConnection: TagConnection;
  /** Find many Tag documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyTagsConnection: TagConnection;
  /**
   * Update many tags
   * @deprecated Please use the new paginated many mutation (updateManyTagsConnection)
   */
  updateManyTags: BatchPayload;
  /**
   * Delete many Tag documents
   * @deprecated Please use the new paginated many mutation (deleteManyTagsConnection)
   */
  deleteManyTags: BatchPayload;
  /**
   * Publish many Tag documents
   * @deprecated Please use the new paginated many mutation (publishManyTagsConnection)
   */
  publishManyTags: BatchPayload;
  /**
   * Unpublish many Tag documents
   * @deprecated Please use the new paginated many mutation (unpublishManyTagsConnection)
   */
  unpublishManyTags: BatchPayload;
  /** Create one social */
  createSocial?: Maybe<Social>;
  /** Update one social */
  updateSocial?: Maybe<Social>;
  /** Delete one social from _all_ existing stages. Returns deleted document. */
  deleteSocial?: Maybe<Social>;
  /** Upsert one social */
  upsertSocial?: Maybe<Social>;
  /** Publish one social */
  publishSocial?: Maybe<Social>;
  /** Unpublish one social from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishSocial?: Maybe<Social>;
  /** Update many Social documents */
  updateManySocialsConnection: SocialConnection;
  /** Delete many Social documents, return deleted documents */
  deleteManySocialsConnection: SocialConnection;
  /** Publish many Social documents */
  publishManySocialsConnection: SocialConnection;
  /** Find many Social documents that match criteria in specified stage and unpublish from target stages */
  unpublishManySocialsConnection: SocialConnection;
  /**
   * Update many socials
   * @deprecated Please use the new paginated many mutation (updateManySocialsConnection)
   */
  updateManySocials: BatchPayload;
  /**
   * Delete many Social documents
   * @deprecated Please use the new paginated many mutation (deleteManySocialsConnection)
   */
  deleteManySocials: BatchPayload;
  /**
   * Publish many Social documents
   * @deprecated Please use the new paginated many mutation (publishManySocialsConnection)
   */
  publishManySocials: BatchPayload;
  /**
   * Unpublish many Social documents
   * @deprecated Please use the new paginated many mutation (unpublishManySocialsConnection)
   */
  unpublishManySocials: BatchPayload;
  /** Create one contentPage */
  createContentPage?: Maybe<ContentPage>;
  /** Update one contentPage */
  updateContentPage?: Maybe<ContentPage>;
  /** Delete one contentPage from _all_ existing stages. Returns deleted document. */
  deleteContentPage?: Maybe<ContentPage>;
  /** Upsert one contentPage */
  upsertContentPage?: Maybe<ContentPage>;
  /** Publish one contentPage */
  publishContentPage?: Maybe<ContentPage>;
  /** Unpublish one contentPage from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishContentPage?: Maybe<ContentPage>;
  /** Update many ContentPage documents */
  updateManyContentPagesConnection: ContentPageConnection;
  /** Delete many ContentPage documents, return deleted documents */
  deleteManyContentPagesConnection: ContentPageConnection;
  /** Publish many ContentPage documents */
  publishManyContentPagesConnection: ContentPageConnection;
  /** Find many ContentPage documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyContentPagesConnection: ContentPageConnection;
  /**
   * Update many contentPages
   * @deprecated Please use the new paginated many mutation (updateManyContentPagesConnection)
   */
  updateManyContentPages: BatchPayload;
  /**
   * Delete many ContentPage documents
   * @deprecated Please use the new paginated many mutation (deleteManyContentPagesConnection)
   */
  deleteManyContentPages: BatchPayload;
  /**
   * Publish many ContentPage documents
   * @deprecated Please use the new paginated many mutation (publishManyContentPagesConnection)
   */
  publishManyContentPages: BatchPayload;
  /**
   * Unpublish many ContentPage documents
   * @deprecated Please use the new paginated many mutation (unpublishManyContentPagesConnection)
   */
  unpublishManyContentPages: BatchPayload;
  /** Create one section */
  createSection?: Maybe<Section>;
  /** Update one section */
  updateSection?: Maybe<Section>;
  /** Delete one section from _all_ existing stages. Returns deleted document. */
  deleteSection?: Maybe<Section>;
  /** Upsert one section */
  upsertSection?: Maybe<Section>;
  /** Publish one section */
  publishSection?: Maybe<Section>;
  /** Unpublish one section from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishSection?: Maybe<Section>;
  /** Update many Section documents */
  updateManySectionsConnection: SectionConnection;
  /** Delete many Section documents, return deleted documents */
  deleteManySectionsConnection: SectionConnection;
  /** Publish many Section documents */
  publishManySectionsConnection: SectionConnection;
  /** Find many Section documents that match criteria in specified stage and unpublish from target stages */
  unpublishManySectionsConnection: SectionConnection;
  /**
   * Update many sections
   * @deprecated Please use the new paginated many mutation (updateManySectionsConnection)
   */
  updateManySections: BatchPayload;
  /**
   * Delete many Section documents
   * @deprecated Please use the new paginated many mutation (deleteManySectionsConnection)
   */
  deleteManySections: BatchPayload;
  /**
   * Publish many Section documents
   * @deprecated Please use the new paginated many mutation (publishManySectionsConnection)
   */
  publishManySections: BatchPayload;
  /**
   * Unpublish many Section documents
   * @deprecated Please use the new paginated many mutation (unpublishManySectionsConnection)
   */
  unpublishManySections: BatchPayload;
  /** Create one project */
  createProject?: Maybe<Project>;
  /** Update one project */
  updateProject?: Maybe<Project>;
  /** Delete one project from _all_ existing stages. Returns deleted document. */
  deleteProject?: Maybe<Project>;
  /** Upsert one project */
  upsertProject?: Maybe<Project>;
  /** Publish one project */
  publishProject?: Maybe<Project>;
  /** Unpublish one project from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishProject?: Maybe<Project>;
  /** Update many Project documents */
  updateManyProjectsConnection: ProjectConnection;
  /** Delete many Project documents, return deleted documents */
  deleteManyProjectsConnection: ProjectConnection;
  /** Publish many Project documents */
  publishManyProjectsConnection: ProjectConnection;
  /** Find many Project documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyProjectsConnection: ProjectConnection;
  /**
   * Update many projects
   * @deprecated Please use the new paginated many mutation (updateManyProjectsConnection)
   */
  updateManyProjects: BatchPayload;
  /**
   * Delete many Project documents
   * @deprecated Please use the new paginated many mutation (deleteManyProjectsConnection)
   */
  deleteManyProjects: BatchPayload;
  /**
   * Publish many Project documents
   * @deprecated Please use the new paginated many mutation (publishManyProjectsConnection)
   */
  publishManyProjects: BatchPayload;
  /**
   * Unpublish many Project documents
   * @deprecated Please use the new paginated many mutation (unpublishManyProjectsConnection)
   */
  unpublishManyProjects: BatchPayload;
};


export type MutationCreateAssetArgs = {
  data: AssetCreateInput;
};


export type MutationUpdateAssetArgs = {
  where: AssetWhereUniqueInput;
  data: AssetUpdateInput;
};


export type MutationDeleteAssetArgs = {
  where: AssetWhereUniqueInput;
};


export type MutationUpsertAssetArgs = {
  where: AssetWhereUniqueInput;
  upsert: AssetUpsertInput;
};


export type MutationPublishAssetArgs = {
  where: AssetWhereUniqueInput;
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
  to?: Array<Stage>;
};


export type MutationUnpublishAssetArgs = {
  where: AssetWhereUniqueInput;
  from?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
};


export type MutationUpdateManyAssetsConnectionArgs = {
  where?: Maybe<AssetManyWhereInput>;
  data: AssetUpdateManyInput;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationDeleteManyAssetsConnectionArgs = {
  where?: Maybe<AssetManyWhereInput>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationPublishManyAssetsConnectionArgs = {
  where?: Maybe<AssetManyWhereInput>;
  from?: Maybe<Stage>;
  to?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
};


export type MutationUnpublishManyAssetsConnectionArgs = {
  where?: Maybe<AssetManyWhereInput>;
  stage?: Maybe<Stage>;
  from?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
};


export type MutationUpdateManyAssetsArgs = {
  where?: Maybe<AssetManyWhereInput>;
  data: AssetUpdateManyInput;
};


export type MutationDeleteManyAssetsArgs = {
  where?: Maybe<AssetManyWhereInput>;
};


export type MutationPublishManyAssetsArgs = {
  where?: Maybe<AssetManyWhereInput>;
  to?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
};


export type MutationUnpublishManyAssetsArgs = {
  where?: Maybe<AssetManyWhereInput>;
  from?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
};


export type MutationCreateTagArgs = {
  data: TagCreateInput;
};


export type MutationUpdateTagArgs = {
  where: TagWhereUniqueInput;
  data: TagUpdateInput;
};


export type MutationDeleteTagArgs = {
  where: TagWhereUniqueInput;
};


export type MutationUpsertTagArgs = {
  where: TagWhereUniqueInput;
  upsert: TagUpsertInput;
};


export type MutationPublishTagArgs = {
  where: TagWhereUniqueInput;
  to?: Array<Stage>;
};


export type MutationUnpublishTagArgs = {
  where: TagWhereUniqueInput;
  from?: Array<Stage>;
};


export type MutationUpdateManyTagsConnectionArgs = {
  where?: Maybe<TagManyWhereInput>;
  data: TagUpdateManyInput;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationDeleteManyTagsConnectionArgs = {
  where?: Maybe<TagManyWhereInput>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationPublishManyTagsConnectionArgs = {
  where?: Maybe<TagManyWhereInput>;
  from?: Maybe<Stage>;
  to?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationUnpublishManyTagsConnectionArgs = {
  where?: Maybe<TagManyWhereInput>;
  stage?: Maybe<Stage>;
  from?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationUpdateManyTagsArgs = {
  where?: Maybe<TagManyWhereInput>;
  data: TagUpdateManyInput;
};


export type MutationDeleteManyTagsArgs = {
  where?: Maybe<TagManyWhereInput>;
};


export type MutationPublishManyTagsArgs = {
  where?: Maybe<TagManyWhereInput>;
  to?: Array<Stage>;
};


export type MutationUnpublishManyTagsArgs = {
  where?: Maybe<TagManyWhereInput>;
  from?: Array<Stage>;
};


export type MutationCreateSocialArgs = {
  data: SocialCreateInput;
};


export type MutationUpdateSocialArgs = {
  where: SocialWhereUniqueInput;
  data: SocialUpdateInput;
};


export type MutationDeleteSocialArgs = {
  where: SocialWhereUniqueInput;
};


export type MutationUpsertSocialArgs = {
  where: SocialWhereUniqueInput;
  upsert: SocialUpsertInput;
};


export type MutationPublishSocialArgs = {
  where: SocialWhereUniqueInput;
  to?: Array<Stage>;
};


export type MutationUnpublishSocialArgs = {
  where: SocialWhereUniqueInput;
  from?: Array<Stage>;
};


export type MutationUpdateManySocialsConnectionArgs = {
  where?: Maybe<SocialManyWhereInput>;
  data: SocialUpdateManyInput;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationDeleteManySocialsConnectionArgs = {
  where?: Maybe<SocialManyWhereInput>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationPublishManySocialsConnectionArgs = {
  where?: Maybe<SocialManyWhereInput>;
  from?: Maybe<Stage>;
  to?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationUnpublishManySocialsConnectionArgs = {
  where?: Maybe<SocialManyWhereInput>;
  stage?: Maybe<Stage>;
  from?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationUpdateManySocialsArgs = {
  where?: Maybe<SocialManyWhereInput>;
  data: SocialUpdateManyInput;
};


export type MutationDeleteManySocialsArgs = {
  where?: Maybe<SocialManyWhereInput>;
};


export type MutationPublishManySocialsArgs = {
  where?: Maybe<SocialManyWhereInput>;
  to?: Array<Stage>;
};


export type MutationUnpublishManySocialsArgs = {
  where?: Maybe<SocialManyWhereInput>;
  from?: Array<Stage>;
};


export type MutationCreateContentPageArgs = {
  data: ContentPageCreateInput;
};


export type MutationUpdateContentPageArgs = {
  where: ContentPageWhereUniqueInput;
  data: ContentPageUpdateInput;
};


export type MutationDeleteContentPageArgs = {
  where: ContentPageWhereUniqueInput;
};


export type MutationUpsertContentPageArgs = {
  where: ContentPageWhereUniqueInput;
  upsert: ContentPageUpsertInput;
};


export type MutationPublishContentPageArgs = {
  where: ContentPageWhereUniqueInput;
  to?: Array<Stage>;
};


export type MutationUnpublishContentPageArgs = {
  where: ContentPageWhereUniqueInput;
  from?: Array<Stage>;
};


export type MutationUpdateManyContentPagesConnectionArgs = {
  where?: Maybe<ContentPageManyWhereInput>;
  data: ContentPageUpdateManyInput;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationDeleteManyContentPagesConnectionArgs = {
  where?: Maybe<ContentPageManyWhereInput>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationPublishManyContentPagesConnectionArgs = {
  where?: Maybe<ContentPageManyWhereInput>;
  from?: Maybe<Stage>;
  to?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationUnpublishManyContentPagesConnectionArgs = {
  where?: Maybe<ContentPageManyWhereInput>;
  stage?: Maybe<Stage>;
  from?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationUpdateManyContentPagesArgs = {
  where?: Maybe<ContentPageManyWhereInput>;
  data: ContentPageUpdateManyInput;
};


export type MutationDeleteManyContentPagesArgs = {
  where?: Maybe<ContentPageManyWhereInput>;
};


export type MutationPublishManyContentPagesArgs = {
  where?: Maybe<ContentPageManyWhereInput>;
  to?: Array<Stage>;
};


export type MutationUnpublishManyContentPagesArgs = {
  where?: Maybe<ContentPageManyWhereInput>;
  from?: Array<Stage>;
};


export type MutationCreateSectionArgs = {
  data: SectionCreateInput;
};


export type MutationUpdateSectionArgs = {
  where: SectionWhereUniqueInput;
  data: SectionUpdateInput;
};


export type MutationDeleteSectionArgs = {
  where: SectionWhereUniqueInput;
};


export type MutationUpsertSectionArgs = {
  where: SectionWhereUniqueInput;
  upsert: SectionUpsertInput;
};


export type MutationPublishSectionArgs = {
  where: SectionWhereUniqueInput;
  to?: Array<Stage>;
};


export type MutationUnpublishSectionArgs = {
  where: SectionWhereUniqueInput;
  from?: Array<Stage>;
};


export type MutationUpdateManySectionsConnectionArgs = {
  where?: Maybe<SectionManyWhereInput>;
  data: SectionUpdateManyInput;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationDeleteManySectionsConnectionArgs = {
  where?: Maybe<SectionManyWhereInput>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationPublishManySectionsConnectionArgs = {
  where?: Maybe<SectionManyWhereInput>;
  from?: Maybe<Stage>;
  to?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationUnpublishManySectionsConnectionArgs = {
  where?: Maybe<SectionManyWhereInput>;
  stage?: Maybe<Stage>;
  from?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationUpdateManySectionsArgs = {
  where?: Maybe<SectionManyWhereInput>;
  data: SectionUpdateManyInput;
};


export type MutationDeleteManySectionsArgs = {
  where?: Maybe<SectionManyWhereInput>;
};


export type MutationPublishManySectionsArgs = {
  where?: Maybe<SectionManyWhereInput>;
  to?: Array<Stage>;
};


export type MutationUnpublishManySectionsArgs = {
  where?: Maybe<SectionManyWhereInput>;
  from?: Array<Stage>;
};


export type MutationCreateProjectArgs = {
  data: ProjectCreateInput;
};


export type MutationUpdateProjectArgs = {
  where: ProjectWhereUniqueInput;
  data: ProjectUpdateInput;
};


export type MutationDeleteProjectArgs = {
  where: ProjectWhereUniqueInput;
};


export type MutationUpsertProjectArgs = {
  where: ProjectWhereUniqueInput;
  upsert: ProjectUpsertInput;
};


export type MutationPublishProjectArgs = {
  where: ProjectWhereUniqueInput;
  to?: Array<Stage>;
};


export type MutationUnpublishProjectArgs = {
  where: ProjectWhereUniqueInput;
  from?: Array<Stage>;
};


export type MutationUpdateManyProjectsConnectionArgs = {
  where?: Maybe<ProjectManyWhereInput>;
  data: ProjectUpdateManyInput;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationDeleteManyProjectsConnectionArgs = {
  where?: Maybe<ProjectManyWhereInput>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationPublishManyProjectsConnectionArgs = {
  where?: Maybe<ProjectManyWhereInput>;
  from?: Maybe<Stage>;
  to?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationUnpublishManyProjectsConnectionArgs = {
  where?: Maybe<ProjectManyWhereInput>;
  stage?: Maybe<Stage>;
  from?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationUpdateManyProjectsArgs = {
  where?: Maybe<ProjectManyWhereInput>;
  data: ProjectUpdateManyInput;
};


export type MutationDeleteManyProjectsArgs = {
  where?: Maybe<ProjectManyWhereInput>;
};


export type MutationPublishManyProjectsArgs = {
  where?: Maybe<ProjectManyWhereInput>;
  to?: Array<Stage>;
};


export type MutationUnpublishManyProjectsArgs = {
  where?: Maybe<ProjectManyWhereInput>;
  from?: Array<Stage>;
};

/** An object with an ID */
export type Node = {
  /** The id of the object. */
  id: Scalars['ID'];
  /** The Stage of an object */
  stage: Stage;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** Number of items in the current page. */
  pageSize?: Maybe<Scalars['Int']>;
};

export type Project = Node & {
  __typename?: 'Project';
  /** System stage field */
  stage: Stage;
  /** Get the document in other stages */
  documentInStages: Array<Project>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  projectName?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  tags: Array<Tag>;
  section?: Maybe<Section>;
  /** List of Project versions */
  history: Array<Version>;
};


export type ProjectDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


export type ProjectCreatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type ProjectUpdatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type ProjectPublishedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type ProjectTagsArgs = {
  where?: Maybe<TagWhereInput>;
  orderBy?: Maybe<TagOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
};


export type ProjectSectionArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type ProjectHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};

export type ProjectConnectInput = {
  /** Document to connect */
  where: ProjectWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
};

/** A connection to a list of items. */
export type ProjectConnection = {
  __typename?: 'ProjectConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<ProjectEdge>;
  aggregate: Aggregate;
};

export type ProjectCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  projectName?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  tags?: Maybe<TagCreateManyInlineInput>;
  section?: Maybe<SectionCreateOneInlineInput>;
};

export type ProjectCreateManyInlineInput = {
  /** Create and connect multiple existing Project documents */
  create?: Maybe<Array<ProjectCreateInput>>;
  /** Connect multiple existing Project documents */
  connect?: Maybe<Array<ProjectWhereUniqueInput>>;
};

export type ProjectCreateOneInlineInput = {
  /** Create and connect one Project document */
  create?: Maybe<ProjectCreateInput>;
  /** Connect one existing Project document */
  connect?: Maybe<ProjectWhereUniqueInput>;
};

/** An edge in a connection. */
export type ProjectEdge = {
  __typename?: 'ProjectEdge';
  /** The item at the end of the edge. */
  node: Project;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Identifies documents */
export type ProjectManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ProjectWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ProjectWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ProjectWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  projectName?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  projectName_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  projectName_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  projectName_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  projectName_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  projectName_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  projectName_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  projectName_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  projectName_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  projectName_not_ends_with?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  link_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  link_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  link_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  link_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  link_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  link_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  link_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  link_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  link_not_ends_with?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedBy?: Maybe<UserWhereInput>;
  tags_every?: Maybe<TagWhereInput>;
  tags_some?: Maybe<TagWhereInput>;
  tags_none?: Maybe<TagWhereInput>;
  section?: Maybe<SectionWhereInput>;
};

export enum ProjectOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  ProjectNameAsc = 'projectName_ASC',
  ProjectNameDesc = 'projectName_DESC',
  LinkAsc = 'link_ASC',
  LinkDesc = 'link_DESC'
}

export type ProjectUpdateInput = {
  projectName?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  tags?: Maybe<TagUpdateManyInlineInput>;
  section?: Maybe<SectionUpdateOneInlineInput>;
};

export type ProjectUpdateManyInlineInput = {
  /** Create and connect multiple Project documents */
  create?: Maybe<Array<ProjectCreateInput>>;
  /** Connect multiple existing Project documents */
  connect?: Maybe<Array<ProjectConnectInput>>;
  /** Override currently-connected documents with multiple existing Project documents */
  set?: Maybe<Array<ProjectWhereUniqueInput>>;
  /** Update multiple Project documents */
  update?: Maybe<Array<ProjectUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Project documents */
  upsert?: Maybe<Array<ProjectUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple Project documents */
  disconnect?: Maybe<Array<ProjectWhereUniqueInput>>;
  /** Delete multiple Project documents */
  delete?: Maybe<Array<ProjectWhereUniqueInput>>;
};

export type ProjectUpdateManyInput = {
  projectName?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
};

export type ProjectUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: ProjectWhereInput;
  /** Update many input */
  data: ProjectUpdateManyInput;
};

export type ProjectUpdateOneInlineInput = {
  /** Create and connect one Project document */
  create?: Maybe<ProjectCreateInput>;
  /** Update single Project document */
  update?: Maybe<ProjectUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Project document */
  upsert?: Maybe<ProjectUpsertWithNestedWhereUniqueInput>;
  /** Connect existing Project document */
  connect?: Maybe<ProjectWhereUniqueInput>;
  /** Disconnect currently connected Project document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Delete currently connected Project document */
  delete?: Maybe<Scalars['Boolean']>;
};

export type ProjectUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: ProjectWhereUniqueInput;
  /** Document to update */
  data: ProjectUpdateInput;
};

export type ProjectUpsertInput = {
  /** Create document if it didn't exist */
  create: ProjectCreateInput;
  /** Update document if it exists */
  update: ProjectUpdateInput;
};

export type ProjectUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: ProjectWhereUniqueInput;
  /** Upsert data */
  data: ProjectUpsertInput;
};

/** Identifies documents */
export type ProjectWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ProjectWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ProjectWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ProjectWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  projectName?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  projectName_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  projectName_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  projectName_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  projectName_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  projectName_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  projectName_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  projectName_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  projectName_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  projectName_not_ends_with?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  link_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  link_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  link_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  link_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  link_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  link_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  link_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  link_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  link_not_ends_with?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedBy?: Maybe<UserWhereInput>;
  tags_every?: Maybe<TagWhereInput>;
  tags_some?: Maybe<TagWhereInput>;
  tags_none?: Maybe<TagWhereInput>;
  section?: Maybe<SectionWhereInput>;
};

/** References Project record uniquely */
export type ProjectWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type PublishLocaleInput = {
  /** Locales to publish */
  locale: Locale;
  /** Stages to publish selected locales to */
  stages: Array<Stage>;
};

export type Query = {
  __typename?: 'Query';
  /** Fetches an object given its ID */
  node?: Maybe<Node>;
  /** Retrieve multiple users */
  users: Array<User>;
  /** Retrieve a single user */
  user?: Maybe<User>;
  /** Retrieve multiple users using the Relay connection interface */
  usersConnection: UserConnection;
  /** Retrieve multiple assets */
  assets: Array<Asset>;
  /** Retrieve a single asset */
  asset?: Maybe<Asset>;
  /** Retrieve multiple assets using the Relay connection interface */
  assetsConnection: AssetConnection;
  /** Retrieve document version */
  assetVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple tags */
  tags: Array<Tag>;
  /** Retrieve a single tag */
  tag?: Maybe<Tag>;
  /** Retrieve multiple tags using the Relay connection interface */
  tagsConnection: TagConnection;
  /** Retrieve document version */
  tagVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple socials */
  socials: Array<Social>;
  /** Retrieve a single social */
  social?: Maybe<Social>;
  /** Retrieve multiple socials using the Relay connection interface */
  socialsConnection: SocialConnection;
  /** Retrieve document version */
  socialVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple contentPages */
  contentPages: Array<ContentPage>;
  /** Retrieve a single contentPage */
  contentPage?: Maybe<ContentPage>;
  /** Retrieve multiple contentPages using the Relay connection interface */
  contentPagesConnection: ContentPageConnection;
  /** Retrieve document version */
  contentPageVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple sections */
  sections: Array<Section>;
  /** Retrieve a single section */
  section?: Maybe<Section>;
  /** Retrieve multiple sections using the Relay connection interface */
  sectionsConnection: SectionConnection;
  /** Retrieve document version */
  sectionVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple projects */
  projects: Array<Project>;
  /** Retrieve a single project */
  project?: Maybe<Project>;
  /** Retrieve multiple projects using the Relay connection interface */
  projectsConnection: ProjectConnection;
  /** Retrieve document version */
  projectVersion?: Maybe<DocumentVersion>;
};


export type QueryNodeArgs = {
  id: Scalars['ID'];
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryUsersArgs = {
  where?: Maybe<UserWhereInput>;
  orderBy?: Maybe<UserOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryUsersConnectionArgs = {
  where?: Maybe<UserWhereInput>;
  orderBy?: Maybe<UserOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryAssetsArgs = {
  where?: Maybe<AssetWhereInput>;
  orderBy?: Maybe<AssetOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryAssetArgs = {
  where: AssetWhereUniqueInput;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryAssetsConnectionArgs = {
  where?: Maybe<AssetWhereInput>;
  orderBy?: Maybe<AssetOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryAssetVersionArgs = {
  where: VersionWhereInput;
};


export type QueryTagsArgs = {
  where?: Maybe<TagWhereInput>;
  orderBy?: Maybe<TagOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryTagArgs = {
  where: TagWhereUniqueInput;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryTagsConnectionArgs = {
  where?: Maybe<TagWhereInput>;
  orderBy?: Maybe<TagOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryTagVersionArgs = {
  where: VersionWhereInput;
};


export type QuerySocialsArgs = {
  where?: Maybe<SocialWhereInput>;
  orderBy?: Maybe<SocialOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QuerySocialArgs = {
  where: SocialWhereUniqueInput;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QuerySocialsConnectionArgs = {
  where?: Maybe<SocialWhereInput>;
  orderBy?: Maybe<SocialOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QuerySocialVersionArgs = {
  where: VersionWhereInput;
};


export type QueryContentPagesArgs = {
  where?: Maybe<ContentPageWhereInput>;
  orderBy?: Maybe<ContentPageOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryContentPageArgs = {
  where: ContentPageWhereUniqueInput;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryContentPagesConnectionArgs = {
  where?: Maybe<ContentPageWhereInput>;
  orderBy?: Maybe<ContentPageOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryContentPageVersionArgs = {
  where: VersionWhereInput;
};


export type QuerySectionsArgs = {
  where?: Maybe<SectionWhereInput>;
  orderBy?: Maybe<SectionOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QuerySectionArgs = {
  where: SectionWhereUniqueInput;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QuerySectionsConnectionArgs = {
  where?: Maybe<SectionWhereInput>;
  orderBy?: Maybe<SectionOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QuerySectionVersionArgs = {
  where: VersionWhereInput;
};


export type QueryProjectsArgs = {
  where?: Maybe<ProjectWhereInput>;
  orderBy?: Maybe<ProjectOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryProjectArgs = {
  where: ProjectWhereUniqueInput;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryProjectsConnectionArgs = {
  where?: Maybe<ProjectWhereInput>;
  orderBy?: Maybe<ProjectOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryProjectVersionArgs = {
  where: VersionWhereInput;
};

/** Representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type Rgba = {
  __typename?: 'RGBA';
  r: Scalars['RGBAHue'];
  g: Scalars['RGBAHue'];
  b: Scalars['RGBAHue'];
  a: Scalars['RGBATransparency'];
};

/** Input type representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type RgbaInput = {
  r: Scalars['RGBAHue'];
  g: Scalars['RGBAHue'];
  b: Scalars['RGBAHue'];
  a: Scalars['RGBATransparency'];
};

/** Custom type representing a rich text value comprising of raw rich text ast, html, markdown and text values */
export type RichText = {
  __typename?: 'RichText';
  /** Returns AST representation */
  raw: Scalars['RichTextAST'];
  /** Returns HTMl representation */
  html: Scalars['String'];
  /** Returns Markdown representation */
  markdown: Scalars['String'];
  /** Returns plain-text contents of RichText */
  text: Scalars['String'];
};

export type Section = Node & {
  __typename?: 'Section';
  /** System stage field */
  stage: Stage;
  /** Get the document in other stages */
  documentInStages: Array<Section>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<RichText>;
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  contentPage?: Maybe<ContentPage>;
  projects: Array<SectionProjects>;
  /** List of Section versions */
  history: Array<Version>;
};


export type SectionDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


export type SectionCreatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type SectionUpdatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type SectionPublishedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type SectionContentPageArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type SectionProjectsArgs = {
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
};


export type SectionHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};

export type SectionConnectInput = {
  /** Document to connect */
  where: SectionWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
};

/** A connection to a list of items. */
export type SectionConnection = {
  __typename?: 'SectionConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<SectionEdge>;
  aggregate: Aggregate;
};

export type SectionCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['RichTextAST']>;
  contentPage?: Maybe<ContentPageCreateOneInlineInput>;
  projects?: Maybe<SectionProjectsCreateManyInlineInput>;
};

export type SectionCreateManyInlineInput = {
  /** Create and connect multiple existing Section documents */
  create?: Maybe<Array<SectionCreateInput>>;
  /** Connect multiple existing Section documents */
  connect?: Maybe<Array<SectionWhereUniqueInput>>;
};

export type SectionCreateOneInlineInput = {
  /** Create and connect one Section document */
  create?: Maybe<SectionCreateInput>;
  /** Connect one existing Section document */
  connect?: Maybe<SectionWhereUniqueInput>;
};

/** An edge in a connection. */
export type SectionEdge = {
  __typename?: 'SectionEdge';
  /** The item at the end of the edge. */
  node: Section;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Identifies documents */
export type SectionManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<SectionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<SectionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<SectionWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  title_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  title_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  title_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedBy?: Maybe<UserWhereInput>;
  contentPage?: Maybe<ContentPageWhereInput>;
};

export enum SectionOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type SectionProjects = Project;

export type SectionProjectsConnectInput = {
  Project?: Maybe<ProjectConnectInput>;
};

export type SectionProjectsCreateInput = {
  Project?: Maybe<ProjectCreateInput>;
};

export type SectionProjectsCreateManyInlineInput = {
  /** Create and connect multiple existing SectionProjects documents */
  create?: Maybe<Array<SectionProjectsCreateInput>>;
  /** Connect multiple existing SectionProjects documents */
  connect?: Maybe<Array<SectionProjectsWhereUniqueInput>>;
};

export type SectionProjectsCreateOneInlineInput = {
  /** Create and connect one SectionProjects document */
  create?: Maybe<SectionProjectsCreateInput>;
  /** Connect one existing SectionProjects document */
  connect?: Maybe<SectionProjectsWhereUniqueInput>;
};

export type SectionProjectsUpdateInput = {
  Project?: Maybe<ProjectUpdateInput>;
};

export type SectionProjectsUpdateManyInlineInput = {
  /** Create and connect multiple SectionProjects documents */
  create?: Maybe<Array<SectionProjectsCreateInput>>;
  /** Connect multiple existing SectionProjects documents */
  connect?: Maybe<Array<SectionProjectsConnectInput>>;
  /** Override currently-connected documents with multiple existing SectionProjects documents */
  set?: Maybe<Array<SectionProjectsWhereUniqueInput>>;
  /** Update multiple SectionProjects documents */
  update?: Maybe<Array<SectionProjectsUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple SectionProjects documents */
  upsert?: Maybe<Array<SectionProjectsUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple SectionProjects documents */
  disconnect?: Maybe<Array<SectionProjectsWhereUniqueInput>>;
  /** Delete multiple SectionProjects documents */
  delete?: Maybe<Array<SectionProjectsWhereUniqueInput>>;
};

export type SectionProjectsUpdateManyWithNestedWhereInput = {
  Project?: Maybe<ProjectUpdateManyWithNestedWhereInput>;
};

export type SectionProjectsUpdateOneInlineInput = {
  /** Create and connect one SectionProjects document */
  create?: Maybe<SectionProjectsCreateInput>;
  /** Update single SectionProjects document */
  update?: Maybe<SectionProjectsUpdateWithNestedWhereUniqueInput>;
  /** Upsert single SectionProjects document */
  upsert?: Maybe<SectionProjectsUpsertWithNestedWhereUniqueInput>;
  /** Connect existing SectionProjects document */
  connect?: Maybe<SectionProjectsWhereUniqueInput>;
  /** Disconnect currently connected SectionProjects document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Delete currently connected SectionProjects document */
  delete?: Maybe<Scalars['Boolean']>;
};

export type SectionProjectsUpdateWithNestedWhereUniqueInput = {
  Project?: Maybe<ProjectUpdateWithNestedWhereUniqueInput>;
};

export type SectionProjectsUpsertWithNestedWhereUniqueInput = {
  Project?: Maybe<ProjectUpsertWithNestedWhereUniqueInput>;
};

export type SectionProjectsWhereInput = {
  Project?: Maybe<ProjectWhereInput>;
};

export type SectionProjectsWhereUniqueInput = {
  Project?: Maybe<ProjectWhereUniqueInput>;
};

export type SectionUpdateInput = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['RichTextAST']>;
  contentPage?: Maybe<ContentPageUpdateOneInlineInput>;
  projects?: Maybe<SectionProjectsUpdateManyInlineInput>;
};

export type SectionUpdateManyInlineInput = {
  /** Create and connect multiple Section documents */
  create?: Maybe<Array<SectionCreateInput>>;
  /** Connect multiple existing Section documents */
  connect?: Maybe<Array<SectionConnectInput>>;
  /** Override currently-connected documents with multiple existing Section documents */
  set?: Maybe<Array<SectionWhereUniqueInput>>;
  /** Update multiple Section documents */
  update?: Maybe<Array<SectionUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Section documents */
  upsert?: Maybe<Array<SectionUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple Section documents */
  disconnect?: Maybe<Array<SectionWhereUniqueInput>>;
  /** Delete multiple Section documents */
  delete?: Maybe<Array<SectionWhereUniqueInput>>;
};

export type SectionUpdateManyInput = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['RichTextAST']>;
};

export type SectionUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: SectionWhereInput;
  /** Update many input */
  data: SectionUpdateManyInput;
};

export type SectionUpdateOneInlineInput = {
  /** Create and connect one Section document */
  create?: Maybe<SectionCreateInput>;
  /** Update single Section document */
  update?: Maybe<SectionUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Section document */
  upsert?: Maybe<SectionUpsertWithNestedWhereUniqueInput>;
  /** Connect existing Section document */
  connect?: Maybe<SectionWhereUniqueInput>;
  /** Disconnect currently connected Section document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Delete currently connected Section document */
  delete?: Maybe<Scalars['Boolean']>;
};

export type SectionUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: SectionWhereUniqueInput;
  /** Document to update */
  data: SectionUpdateInput;
};

export type SectionUpsertInput = {
  /** Create document if it didn't exist */
  create: SectionCreateInput;
  /** Update document if it exists */
  update: SectionUpdateInput;
};

export type SectionUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: SectionWhereUniqueInput;
  /** Upsert data */
  data: SectionUpsertInput;
};

/** Identifies documents */
export type SectionWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<SectionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<SectionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<SectionWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  title_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  title_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  title_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedBy?: Maybe<UserWhereInput>;
  contentPage?: Maybe<ContentPageWhereInput>;
};

/** References Section record uniquely */
export type SectionWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type Social = Node & {
  __typename?: 'Social';
  /** System stage field */
  stage: Stage;
  /** Get the document in other stages */
  documentInStages: Array<Social>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  handle?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  platform?: Maybe<Scalars['String']>;
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  /** List of Social versions */
  history: Array<Version>;
};


export type SocialDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


export type SocialCreatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type SocialUpdatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type SocialPublishedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type SocialHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};

export type SocialConnectInput = {
  /** Document to connect */
  where: SocialWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
};

/** A connection to a list of items. */
export type SocialConnection = {
  __typename?: 'SocialConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<SocialEdge>;
  aggregate: Aggregate;
};

export type SocialCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  handle?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  platform?: Maybe<Scalars['String']>;
};

export type SocialCreateManyInlineInput = {
  /** Create and connect multiple existing Social documents */
  create?: Maybe<Array<SocialCreateInput>>;
  /** Connect multiple existing Social documents */
  connect?: Maybe<Array<SocialWhereUniqueInput>>;
};

export type SocialCreateOneInlineInput = {
  /** Create and connect one Social document */
  create?: Maybe<SocialCreateInput>;
  /** Connect one existing Social document */
  connect?: Maybe<SocialWhereUniqueInput>;
};

/** An edge in a connection. */
export type SocialEdge = {
  __typename?: 'SocialEdge';
  /** The item at the end of the edge. */
  node: Social;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Identifies documents */
export type SocialManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<SocialWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<SocialWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<SocialWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  handle?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  handle_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  handle_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  handle_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  handle_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  handle_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  handle_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  handle_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  handle_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  handle_not_ends_with?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  url_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  url_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  url_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  url_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  url_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  url_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  url_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  url_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  url_not_ends_with?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  icon_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  icon_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  icon_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  icon_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  icon_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  icon_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  icon_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  icon_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  icon_not_ends_with?: Maybe<Scalars['String']>;
  platform?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  platform_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  platform_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  platform_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  platform_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  platform_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  platform_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  platform_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  platform_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  platform_not_ends_with?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedBy?: Maybe<UserWhereInput>;
};

export enum SocialOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  HandleAsc = 'handle_ASC',
  HandleDesc = 'handle_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC',
  IconAsc = 'icon_ASC',
  IconDesc = 'icon_DESC',
  PlatformAsc = 'platform_ASC',
  PlatformDesc = 'platform_DESC'
}

export type SocialUpdateInput = {
  handle?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  platform?: Maybe<Scalars['String']>;
};

export type SocialUpdateManyInlineInput = {
  /** Create and connect multiple Social documents */
  create?: Maybe<Array<SocialCreateInput>>;
  /** Connect multiple existing Social documents */
  connect?: Maybe<Array<SocialConnectInput>>;
  /** Override currently-connected documents with multiple existing Social documents */
  set?: Maybe<Array<SocialWhereUniqueInput>>;
  /** Update multiple Social documents */
  update?: Maybe<Array<SocialUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Social documents */
  upsert?: Maybe<Array<SocialUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple Social documents */
  disconnect?: Maybe<Array<SocialWhereUniqueInput>>;
  /** Delete multiple Social documents */
  delete?: Maybe<Array<SocialWhereUniqueInput>>;
};

export type SocialUpdateManyInput = {
  handle?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  platform?: Maybe<Scalars['String']>;
};

export type SocialUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: SocialWhereInput;
  /** Update many input */
  data: SocialUpdateManyInput;
};

export type SocialUpdateOneInlineInput = {
  /** Create and connect one Social document */
  create?: Maybe<SocialCreateInput>;
  /** Update single Social document */
  update?: Maybe<SocialUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Social document */
  upsert?: Maybe<SocialUpsertWithNestedWhereUniqueInput>;
  /** Connect existing Social document */
  connect?: Maybe<SocialWhereUniqueInput>;
  /** Disconnect currently connected Social document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Delete currently connected Social document */
  delete?: Maybe<Scalars['Boolean']>;
};

export type SocialUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: SocialWhereUniqueInput;
  /** Document to update */
  data: SocialUpdateInput;
};

export type SocialUpsertInput = {
  /** Create document if it didn't exist */
  create: SocialCreateInput;
  /** Update document if it exists */
  update: SocialUpdateInput;
};

export type SocialUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: SocialWhereUniqueInput;
  /** Upsert data */
  data: SocialUpsertInput;
};

/** Identifies documents */
export type SocialWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<SocialWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<SocialWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<SocialWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  handle?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  handle_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  handle_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  handle_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  handle_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  handle_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  handle_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  handle_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  handle_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  handle_not_ends_with?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  url_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  url_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  url_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  url_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  url_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  url_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  url_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  url_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  url_not_ends_with?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  icon_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  icon_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  icon_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  icon_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  icon_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  icon_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  icon_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  icon_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  icon_not_ends_with?: Maybe<Scalars['String']>;
  platform?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  platform_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  platform_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  platform_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  platform_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  platform_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  platform_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  platform_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  platform_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  platform_not_ends_with?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedBy?: Maybe<UserWhereInput>;
};

/** References Social record uniquely */
export type SocialWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

/** Stage system enumeration */
export enum Stage {
  /** The Published stage is where you can publish your content to. */
  Published = 'PUBLISHED',
  /** The Draft is the default stage for all your content. */
  Draft = 'DRAFT'
}

export enum SystemDateTimeFieldVariation {
  Base = 'BASE',
  Localization = 'LOCALIZATION',
  Combined = 'COMBINED'
}

export type Tag = Node & {
  __typename?: 'Tag';
  /** System stage field */
  stage: Stage;
  /** Get the document in other stages */
  documentInStages: Array<Tag>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  /** List of Tag versions */
  history: Array<Version>;
};


export type TagDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


export type TagCreatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type TagUpdatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type TagPublishedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type TagHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};

export type TagConnectInput = {
  /** Document to connect */
  where: TagWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
};

/** A connection to a list of items. */
export type TagConnection = {
  __typename?: 'TagConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<TagEdge>;
  aggregate: Aggregate;
};

export type TagCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  ckrjd0gfx14fe01xn7h5ebfgq?: Maybe<ProjectCreateManyInlineInput>;
};

export type TagCreateManyInlineInput = {
  /** Create and connect multiple existing Tag documents */
  create?: Maybe<Array<TagCreateInput>>;
  /** Connect multiple existing Tag documents */
  connect?: Maybe<Array<TagWhereUniqueInput>>;
};

export type TagCreateOneInlineInput = {
  /** Create and connect one Tag document */
  create?: Maybe<TagCreateInput>;
  /** Connect one existing Tag document */
  connect?: Maybe<TagWhereUniqueInput>;
};

/** An edge in a connection. */
export type TagEdge = {
  __typename?: 'TagEdge';
  /** The item at the end of the edge. */
  node: Tag;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Identifies documents */
export type TagManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<TagWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<TagWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<TagWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  slug_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  slug_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  slug_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedBy?: Maybe<UserWhereInput>;
};

export enum TagOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC'
}

export type TagUpdateInput = {
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  ckrjd0gfx14fe01xn7h5ebfgq?: Maybe<ProjectUpdateManyInlineInput>;
};

export type TagUpdateManyInlineInput = {
  /** Create and connect multiple Tag documents */
  create?: Maybe<Array<TagCreateInput>>;
  /** Connect multiple existing Tag documents */
  connect?: Maybe<Array<TagConnectInput>>;
  /** Override currently-connected documents with multiple existing Tag documents */
  set?: Maybe<Array<TagWhereUniqueInput>>;
  /** Update multiple Tag documents */
  update?: Maybe<Array<TagUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Tag documents */
  upsert?: Maybe<Array<TagUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple Tag documents */
  disconnect?: Maybe<Array<TagWhereUniqueInput>>;
  /** Delete multiple Tag documents */
  delete?: Maybe<Array<TagWhereUniqueInput>>;
};

export type TagUpdateManyInput = {
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
};

export type TagUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: TagWhereInput;
  /** Update many input */
  data: TagUpdateManyInput;
};

export type TagUpdateOneInlineInput = {
  /** Create and connect one Tag document */
  create?: Maybe<TagCreateInput>;
  /** Update single Tag document */
  update?: Maybe<TagUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Tag document */
  upsert?: Maybe<TagUpsertWithNestedWhereUniqueInput>;
  /** Connect existing Tag document */
  connect?: Maybe<TagWhereUniqueInput>;
  /** Disconnect currently connected Tag document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Delete currently connected Tag document */
  delete?: Maybe<Scalars['Boolean']>;
};

export type TagUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: TagWhereUniqueInput;
  /** Document to update */
  data: TagUpdateInput;
};

export type TagUpsertInput = {
  /** Create document if it didn't exist */
  create: TagCreateInput;
  /** Update document if it exists */
  update: TagUpdateInput;
};

export type TagUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: TagWhereUniqueInput;
  /** Upsert data */
  data: TagUpsertInput;
};

/** Identifies documents */
export type TagWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<TagWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<TagWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<TagWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  slug_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  slug_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  slug_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedBy?: Maybe<UserWhereInput>;
};

/** References Tag record uniquely */
export type TagWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type UnpublishLocaleInput = {
  /** Locales to unpublish */
  locale: Locale;
  /** Stages to unpublish selected locales from */
  stages: Array<Stage>;
};

/** User system model */
export type User = Node & {
  __typename?: 'User';
  /** System stage field */
  stage: Stage;
  /** Get the document in other stages */
  documentInStages: Array<User>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** The username */
  name: Scalars['String'];
  /** Profile Picture url */
  picture?: Maybe<Scalars['String']>;
  /** Flag to determine if user is active or not */
  isActive: Scalars['Boolean'];
  /** User Kind. Can be either MEMBER, PAT or PUBLIC */
  kind: UserKind;
};


/** User system model */
export type UserDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};

export type UserConnectInput = {
  /** Document to connect */
  where: UserWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
};

/** A connection to a list of items. */
export type UserConnection = {
  __typename?: 'UserConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<UserEdge>;
  aggregate: Aggregate;
};

export type UserCreateManyInlineInput = {
  /** Connect multiple existing User documents */
  connect?: Maybe<Array<UserWhereUniqueInput>>;
};

export type UserCreateOneInlineInput = {
  /** Connect one existing User document */
  connect?: Maybe<UserWhereUniqueInput>;
};

/** An edge in a connection. */
export type UserEdge = {
  __typename?: 'UserEdge';
  /** The item at the end of the edge. */
  node: User;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** System User Kind */
export enum UserKind {
  Member = 'MEMBER',
  Pat = 'PAT',
  Public = 'PUBLIC',
  Webhook = 'WEBHOOK'
}

/** Identifies documents */
export type UserManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<UserWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<UserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<UserWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  picture_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  picture_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  picture_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  picture_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  picture_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  picture_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  picture_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  picture_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  picture_not_ends_with?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isActive_not?: Maybe<Scalars['Boolean']>;
  kind?: Maybe<UserKind>;
  /** All values that are not equal to given value. */
  kind_not?: Maybe<UserKind>;
  /** All values that are contained in given list. */
  kind_in?: Maybe<Array<UserKind>>;
  /** All values that are not contained in given list. */
  kind_not_in?: Maybe<Array<UserKind>>;
};

export enum UserOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PictureAsc = 'picture_ASC',
  PictureDesc = 'picture_DESC',
  IsActiveAsc = 'isActive_ASC',
  IsActiveDesc = 'isActive_DESC',
  KindAsc = 'kind_ASC',
  KindDesc = 'kind_DESC'
}

export type UserUpdateManyInlineInput = {
  /** Connect multiple existing User documents */
  connect?: Maybe<Array<UserConnectInput>>;
  /** Override currently-connected documents with multiple existing User documents */
  set?: Maybe<Array<UserWhereUniqueInput>>;
  /** Disconnect multiple User documents */
  disconnect?: Maybe<Array<UserWhereUniqueInput>>;
};

export type UserUpdateOneInlineInput = {
  /** Connect existing User document */
  connect?: Maybe<UserWhereUniqueInput>;
  /** Disconnect currently connected User document */
  disconnect?: Maybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type UserWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<UserWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<UserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<UserWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  picture_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  picture_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  picture_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  picture_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  picture_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  picture_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  picture_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  picture_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  picture_not_ends_with?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isActive_not?: Maybe<Scalars['Boolean']>;
  kind?: Maybe<UserKind>;
  /** All values that are not equal to given value. */
  kind_not?: Maybe<UserKind>;
  /** All values that are contained in given list. */
  kind_in?: Maybe<Array<UserKind>>;
  /** All values that are not contained in given list. */
  kind_not_in?: Maybe<Array<UserKind>>;
};

/** References User record uniquely */
export type UserWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type Version = {
  __typename?: 'Version';
  id: Scalars['ID'];
  stage: Stage;
  revision: Scalars['Int'];
  createdAt: Scalars['DateTime'];
};

export type VersionWhereInput = {
  id: Scalars['ID'];
  stage: Stage;
  revision: Scalars['Int'];
};

export enum _FilterKind {
  Search = 'search',
  And = 'AND',
  Or = 'OR',
  Not = 'NOT',
  Eq = 'eq',
  EqNot = 'eq_not',
  In = 'in',
  NotIn = 'not_in',
  Lt = 'lt',
  Lte = 'lte',
  Gt = 'gt',
  Gte = 'gte',
  Contains = 'contains',
  NotContains = 'not_contains',
  StartsWith = 'starts_with',
  NotStartsWith = 'not_starts_with',
  EndsWith = 'ends_with',
  NotEndsWith = 'not_ends_with',
  ContainsAll = 'contains_all',
  ContainsSome = 'contains_some',
  ContainsNone = 'contains_none',
  RelationalSingle = 'relational_single',
  RelationalEvery = 'relational_every',
  RelationalSome = 'relational_some',
  RelationalNone = 'relational_none'
}

export enum _MutationInputFieldKind {
  Scalar = 'scalar',
  RichText = 'richText',
  RichTextWithEmbeds = 'richTextWithEmbeds',
  Enum = 'enum',
  Relation = 'relation',
  Union = 'union',
  Virtual = 'virtual'
}

export enum _MutationKind {
  Create = 'create',
  Publish = 'publish',
  Unpublish = 'unpublish',
  Update = 'update',
  Upsert = 'upsert',
  Delete = 'delete',
  UpdateMany = 'updateMany',
  PublishMany = 'publishMany',
  UnpublishMany = 'unpublishMany',
  DeleteMany = 'deleteMany'
}

export enum _OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export enum _RelationInputCardinality {
  One = 'one',
  Many = 'many'
}

export enum _RelationInputKind {
  Create = 'create',
  Update = 'update'
}

export enum _RelationKind {
  Regular = 'regular',
  Union = 'union'
}

export enum _SystemDateTimeFieldVariation {
  Base = 'base',
  Localization = 'localization',
  Combined = 'combined'
}
