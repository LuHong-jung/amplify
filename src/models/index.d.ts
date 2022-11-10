import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type CardDataMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type GroupsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ProfileMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type HomeMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class CardData {
  readonly id: string;
  readonly Nunber?: string | null;
  readonly name?: string | null;
  readonly department?: string | null;
  readonly status?: string | null;
  readonly image_url?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<CardData, CardDataMetaData>);
  static copyOf(source: CardData, mutator: (draft: MutableModel<CardData, CardDataMetaData>) => MutableModel<CardData, CardDataMetaData> | void): CardData;
}

export declare class Groups {
  readonly id: string;
  readonly group_id?: string | null;
  readonly name?: string | null;
  readonly describe?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Groups, GroupsMetaData>);
  static copyOf(source: Groups, mutator: (draft: MutableModel<Groups, GroupsMetaData>) => MutableModel<Groups, GroupsMetaData> | void): Groups;
}

export declare class Profile {
  readonly id: string;
  readonly name?: string | null;
  readonly bloodtype?: string | null;
  readonly Location?: string | null;
  readonly birthday?: string | null;
  readonly email?: string | null;
  readonly phone?: string | null;
  readonly information?: string | null;
  readonly image_url?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Profile, ProfileMetaData>);
  static copyOf(source: Profile, mutator: (draft: MutableModel<Profile, ProfileMetaData>) => MutableModel<Profile, ProfileMetaData> | void): Profile;
}

export declare class Home {
  readonly id: string;
  readonly name?: string | null;
  readonly address?: string | null;
  readonly price?: number | null;
  readonly image_url?: string | null;
  readonly email?: string | null;
  readonly phone?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Home, HomeMetaData>);
  static copyOf(source: Home, mutator: (draft: MutableModel<Home, HomeMetaData>) => MutableModel<Home, HomeMetaData> | void): Home;
}